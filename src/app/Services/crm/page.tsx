import About from "@/components/features/About";
import Clients from "@/components/features/Clients";
import FaqItem from "@/components/features/FaqItem";
import Hero from "@/components/features/Hero";
import OurProject from "@/components/features/OurProjects";
import Technology from "@/components/features/Technology";
import Testimonials from "@/components/features/Testimonials";
import WeProvide from "@/components/features/WeProvide";
import AboutNumerics from "@/components/ui/AboutNumerics";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const metadata = {
  title: "CRM Software Services | Customer Management Tools",
  description:
    "Centralize and enhance customer management with our powerful CRM software. Automate processes, boost sales, and nurture client relationships.",
};

const page = () => {
  const cardsData = [
    {
      id: 1,
      icon: "/crm/1.svg",
      title: "Build and Lead Teams Effortlessly",
      description:
        "Using roles, permissions, and visibility settings specific to your company structure, you can create, grow, and arrange teams.",
    },
    {
      id: 2,
      icon: "/crm/2.svg",
      title: "Work Overflow & Ticket Assignment",
      description:
        "Use intelligent routing to expedite resolution times, distribute tasks to the appropriate team members, and automate ticket creation.",
    },
    {
      id: 3,
      icon: "/crm/3.svg",
      title: "Detailed Reporting & Feedback Loops",
      description:
        "Monitor performance in real time, spot bottlenecks, and get useful input to improve internal procedures and customer satisfaction.",
    },
    {
      id: 4,
      icon: "/crm/4.svg",
      title: "In-Depth Product & Service Information",
      description:
        "Keep your offerings in a single database that all stakeholders can search to access product specifics.",
    },
    {
      id: 5,
      icon: "/crm/5.svg",
      title: "Product Training & Onboarding Tools",
      description:
        "With integrated product lessons, feature guides, and onboarding modules, you can expedite team readiness and guarantee uptake right away.",
    },
  ];
  return (
    <div className="mt-24 flex flex-col justify-center items-center overflow-x-hidden">
      <BackgroundBeams />
      {/* hero section */}
      <Hero
        scrollAnimation
        title="CRM - Smarter Relationships. Stronger Growth."
        subTitle="A Next-Gen CRM Built to Empower Teams, Streamline Workflows, and Drive Smarter Decisions."
        description={
          "Pantheon Digital's CRM Software enhances communication, streamlines interactions, and fosters strong customer relationships, ensuring your business thrives on strong connections."
        }
        buttonTitle={"Contact Us"}
        imageSrc={"/UI-UXBannerImage.svg"}
        imageStyle="w-full sm:w-[60%] h-full"
      />

      {/* what we provide for web dev */}
      <div className="w-screen flex flex-col justify-center items-center bg-black rounded-b-4xl shadow-[0_40px_100px_rgba(236,19,19,0.1)] translate-y-10 z-10">
        <WeProvide
          title={"What You Get with Pantheon CRM"}
          subtitle={"What we provide"}
          cardsData={cardsData}
        />
      </div>

      {/* Technologies */}
      <Technology
        heading="Technology we use"
        icons={[
          "/technology/ui-ux/1.svg",
          "/technology/ui-ux/2.svg",
          "/technology/ui-ux/3.svg",
          "/technology/ui-ux/4.svg",
          "/technology/ui-ux/5.svg",
          "/technology/ui-ux/6.svg",
          "/technology/ui-ux/7.svg",
          "/technology/ui-ux/8.svg",
          "/technology/ui-ux/9.svg",
          "/technology/ui-ux/10.svg",
          "/technology/ui-ux/11.svg",
          "/technology/ui-ux/12.svg",
          "/technology/ui-ux/13.svg",
          "/technology/ui-ux/14.svg",
          "/technology/ui-ux/15.svg",
        ]}
        title="Revolutionize Your Business: "
        subtitle="Unleashing the Power of Intelligent CRM Innovation."
        href=""
        list={[
          "Centralized Data",
          "Boosted Productivity",
          "Improved Customer Service",
          "Better Decision-Making",
          "Scalable & Customizable",
          "Higher Retention",
          "Data-Driven Design Decisions",
          "Secure & Reliable",
        ]}
      />

      {/* about numerics */}
      <AboutNumerics />

      {/* Our Trusted Clients */}
      <Clients />

      {/* Testimonial section */}
      <div className="w-[90%] md:w-[80%] mt-12 md:mt-24">
        <h4 className="font-avenir-20 opacity-60 text-white text-xs md:text-xl text-center">
          Testimonials
        </h4>
        <h1 className="font-geometric text-xl md:text-4xl text-white text-center my-4">
          100+ satisfied clients worldwide
        </h1>
        <Testimonials speed="normal" direction="right" testimonials={[]} />
        <Testimonials speed="normal" direction="left" testimonials={[]} />
      </div>

      <div className="mt-12 md:mt-24" />
      {/* About Section */}
      <About />

      {/* Project section */}
      <OurProject />

      {/* Faq Section */}
      <div className="w-[90%] md:w-[80%] mt-12 md:mt-24">
        <h1 className="font-geometric text-lg md:text-4xl text-white text-center my-4 ">
          Frequently Asked Questions
        </h1>
        <div className=" w-[80%] md:w-[60%] border-b-1 border-white mx-auto mb-8" />
        <FaqItem
          ques="What is CRM software, and why do I need it?"
          ans="CRM (Customer Relationship Management) helps you track leads, manage customer data, and boost sales."
        />
        <FaqItem
          ques="Is your CRM cloud-based or on-premise?"
          ans="We offer both options based on your company’s preference."
        />
        <FaqItem
          ques="Does the CRM support sales and marketing automation?"
          ans="Yes, automation tools for sales, marketing, and support are included."
        />
        <FaqItem
          ques="Can I customize the CRM dashboard?"
          ans="Absolutely, dashboards are fully customizable for each user’s needs."
        />
        <FaqItem
          ques="Is training provided for my staff?"
          ans="We offer comprehensive user training and ongoing support."
        />
      </div>
    </div>
  );
};

export default page;
