import About from "@/components/features/About";
import Clients from "@/components/features/Clients";
import FaqItem from "@/components/features/FaqItem";
import Hero from "@/components/features/Hero";
import OurProject from "@/components/features/OurProjects";
import Process from "@/components/features/Process";
import Technology from "@/components/features/Technology";
import Testimonials from "@/components/features/Testimonials";
import WeProvide from "@/components/features/WeProvide";
import AboutNumerics from "@/components/ui/AboutNumerics";

export const metadata = {
  title: "Brochure & Presentation Design Services | Pantheon Digital",
  description:
    "Professional brochure and presentation design services. Make a lasting impression with customized print and digital marketing materials.",
};

const page = () => {
  const cardsData = [
    {
      id: 1,
      title: "Custom Brochure Design",
      description:
        "We begin by understanding your brand, goals, target audience, and desired outcomes. This stage sets the foundation for impactful, relevant designs.",
      icon: "/ui/1.svg",
    },
    {
      id: 2,
      title: "Business & Corporate Presentations",
      description:
        "Engaging PowerPoint decks for pitches, sales, training, or meetings. We combine visuals, infographics, and crisp content to deliver your message effectively.",
      icon: "/ui/2.svg",
    },
    {
      id: 3,
      title: "Content Structuring & Copywriting",
      description:
        "We turn complex info into simple, audience-friendly messages. Headlines, clear flow, and strong calls-to-action ensure better engagement.",
      icon: "/ui/3.svg",
    },
    {
      id: 4,
      title: "Visual Storytelling",
      description:
        "We use consistent colors, fonts, and styles across all materials. Infographics and icons bring your data and stories to life visually.",
      icon: "/ui/4.svg",
    },
    {
      id: 5,
      title: "Brand Consistency",
      description:
        "Make data easy to understand with clear, creative visuals. Charts and graphics highlight results, insights, and case studies powerfully.",
      icon: "/ui/5.svg",
    },
    {
      id: 6,
      title: "Data Visualization",
      description:
        "We enhance your existing brochures or presentations with fresh design and content. Boost clarity, impact, and professionalism with our expert revamp.",
      icon: "/ui/1.svg",
    },
  ];

  return (
    <div className="mt-24 flex flex-col justify-center items-center overflow-x-hidden">
      {/* hero section */}
      <Hero
        title="Brochure & PPT"
        subTitle="Impress, Persuade, and Inspire with Impactful Brochures & Presentations"
        description={
          "Tell your brand story, showcase capabilities, and win business with expertly designed brochuresand PPTs tailored for maximum engagement and clarity."
        }
        buttonTitle={"Let’s Grow"}
        imageSrc={"/BrochurePPTBannerImage.webp"}
        imageStyle="w-full sm:w-[60%] h-full"
      />

      {/* what we provide for web dev */}
      <div className="w-screen flex flex-col justify-center items-center bg-black rounded-b-4xl shadow-[0_40px_100px_rgba(236,19,19,0.1)] translate-y-10 z-10">
        <WeProvide
          title={"What We Offer in Brochure & PPT services"}
          subtitle={"What we provide"}
          cardsData={cardsData}
        />
      </div>

      {/* Technologies */}
      <Technology
        heading=""
        icons={[]}
        title="Visually Powering Your Business Story"
        subtitle="Benefits of Brochure & PPT"
        href=""
        list={[
          "Enhance brand credibility",
          "Communicate complex ideas clearly",
          "Increase engagement and persuasion",
          "Support sales and marketing",
          "Versatile and adaptable",
          "Showcase results and capabilities",
          "Accelerate decision-making",
          "Build consistency across touch points",
        ]}
      />

      {/* Our process */}
      <Process
        heading="Our Brochure & PPT Services Process"
        process={[
          {
            id: 1,
            title: "Discovery & Consultation",
            description:
              "We begin by understanding your brand, goals, target audience, and desired outcomes. This stage sets the foundation for impactful, relevant designs.",
            image: "/brochure/1.webp",
          },
          {
            id: 2,
            title: "Content Gathering & Structuring",
            description:
              "You share your content, data, and key messages with us. We organize your information to create a clear, compelling flow that aligns with your objectives.",
            image: "/brochure/2.webp",
          },
          {
            id: 3,
            title: "Storyboard & Concept Design",
            description:
              "Our team develops initial concepts, layouts, and visual direction for your brochure or presentation. We focus on structure, visuals, and storytelling to ensure clarity and engagement.",
            image: "/brochure/3.webp",
          },
          {
            id: 4,
            title: "Copywriting & Visual Creation",
            description:
              "We craft concise copy and source or design powerful visuals, including infographics, icons, and images that enhance your message and keep audiences interested.",
            image: "/brochure/4.webp",
          },
          {
            id: 5,
            title: "Review & Feedback",
            description:
              "You review the draft and share feedback. We refine the design, layout, and content until it perfectly matches your vision and needs.",
            image: "/brochure/5.webp",
          },
          {
            id: 6,
            title: "Finalization & Delivery",
            description:
              "Once approved, we finalize the high-quality brochure or PPT in your preferred formats for both print and digital sharing.",
            image: "/brochure/6.webp",
          },
          {
            id: 7,
            title: "Ongoing Support",
            description:
              "We offer updates, revisions, and additional versions as your content evolves—ensuring your materials stay relevant and effective for any occasion.",
            image: "/brochure/7.webp",
          },
        ]}
      />

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

      {/* About Numerics */}
      <AboutNumerics />

      <div className="mt-12 md:mt-24" />
      {/* About Section */}
      <About />

      {/* Project section */}
      <div className="sm:mt-0 mt-12 w-screen h-auto flex justify-center">
        <OurProject />
      </div>

      {/* Faq Section */}
      <div className="w-[90%] md:w-[80%] mt-12 md:mt-24">
        <h1 className="font-geometric text-lg md:text-4xl text-white text-center my-4 ">
          Frequently Asked Questions
        </h1>
        <div className=" w-[80%] md:w-[60%] border-b-1 border-white mx-auto mb-8" />
        <FaqItem
          ques="What brochure formats do you offer?"
          ans="We design digital and print brochures in various formats and sizes."
        />
        <FaqItem
          ques="Can you design presentations for events or pitches?"
          ans="Yes, our PPT design services are tailored for sales, events, and internal meetings."
        />
        <FaqItem
          ques="Will you use our branding in the brochure and PPT?"
          ans="Yes, we ensure brand consistency in every design."
        />
        <FaqItem
          ques="How many revisions are included?"
          ans="Typically, up to 2-3 revisions are included; more can be discussed if needed."
        />
        <FaqItem
          ques="Can you help with copywriting too?"
          ans="Yes, we provide copywriting and content editing for all designs."
        />
      </div>
    </div>
  );
};

export default page;
