import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // Basic IP extraction
    const ip = req.headers.get("x-forwarded-for") || "unknown";

    // Import limiter dynamically or use the one created
    const { supportLimiter } = await import("@/lib/rateLimit");

    if (!supportLimiter.check(ip)) {
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
      issueType,
      issue_description,
      projectId,
      priority_level,
      attachment,
    } = await req.json();

    // --- SECURITY: Input Validation ---
    if (!name || !email || !issue_description) {
      return new Response(
        JSON.stringify({ success: false, message: "Missing required fields." }),
        { status: 400 }
      );
    }

    // 1. Max Length Check (DoS Prevention)
    const MAX_LENGTH = 1000;
    if ((issue_description?.length || 0) > MAX_LENGTH) {
      return new Response(
        JSON.stringify({ success: false, message: "Description is too long." }),
        { status: 400 }
      );
    }

    // 2. HTML Strip (Basic Sanitization)
    const sanitize = (str: string) =>
      str ? str.replace(/<[^>]*>?/gm, "") : "";

    const cleanDescription = sanitize(issue_description);
    // ----------------------------------

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const today = new Date(Date.now());
    const formattedDate = today.toISOString().split("T")[0];

    const message = `
    Support:-
    name: ${sanitize(name)}
    email: ${sanitize(email)}
    contact: ${sanitize(contact)}
    company name: ${sanitize(companyName)}
    issue type: ${sanitize(issueType)} 
    project id/name: ${sanitize(projectId)}
    date: ${formattedDate}
    issue description: ${cleanDescription}
    priority level: ${sanitize(priority_level)}
    attachment: ${attachment}
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      // to: "atul@pantheondigitals.com, admin@pantheondigitals.com, ashutosh@pantheondigitals.com, yash.pantheondigitals@gmail.com",
      to: "vishal@pantheondigitals.com",
      subject: `New support enquiry from ${name}`,
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
