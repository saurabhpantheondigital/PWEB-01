import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // Basic IP extraction
    const ip = req.headers.get("x-forwarded-for") || "unknown";

    // Import limiter dynamically or use the one created
    const { contactLimiter } = await import("@/lib/rateLimit");

    if (!contactLimiter.check(ip)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Too many requests. Please try again later.",
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const {
      name,
      email,
      contact,
      companyName,
      serviceType,
      date,
      time,
      project_brief,
      contact_method,
      attachment,
    } = await req.json();

    // --- SECURITY: Input Validation ---
    if (!name || !email || !companyName) {
      return new Response(
        JSON.stringify({ success: false, message: "Missing required fields." }),
        { status: 400 }
      );
    }

    // 1. Max Length Check (DoS Prevention)
    // Prevent huge payloads that could crash the server of fill up memory
    const MAX_LENGTH = 1000;
    if ((project_brief?.length || 0) > MAX_LENGTH) {
      return new Response(
        JSON.stringify({ success: false, message: "Message is too long." }),
        { status: 400 }
      );
    }

    // 2. HTML Strip (Basic Sanitization)
    // Even though we send as text, it's good practice to ensure no script tags exist in the data we process
    const sanitize = (str: string) =>
      str ? str.replace(/<[^>]*>?/gm, "") : "";

    const cleanBrief = sanitize(project_brief);
    // ----------------------------------

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const message = `
    Contact:-
    name: ${sanitize(name)}
    email: ${sanitize(email)} 
    contact: ${sanitize(contact)}
    company name: ${sanitize(companyName)}
    service type: ${sanitize(serviceType)}
    date: ${sanitize(date)}
    time: ${sanitize(time)}
    project brief: ${cleanBrief}
    contact method: ${sanitize(contact_method)}
    attachment: ${attachment} 
    `;

    //
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "atul@pantheondigitals.com, admin@pantheondigitals.com, ashutosh@pantheondigitals.com",
      subject: `New contact enquiry from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
