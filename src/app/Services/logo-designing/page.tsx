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
  title: "Logo Design Services | Creative Branding | Pantheon Digital",
  description:
    "Distinctive and memorable logo designs that express your brand’s identity. Pantheon Digitals brings your vision to life with creative expertise.",
};

const page = () => {
  const cardsData = [
    {
      id: 1,
      title: "Custom Logo Concepts",
      description:
        "Unique logo ideas designed from scratch to reflect your brand’s identity, values, and audience.",
      icon: "/ui/1.svg",
    },
    {
      id: 2,
      title: "Multiple Design Options",
      description:
        "A range of creative concepts to help you choose the best visual direction for your brand.",
      icon: "/ui/2.svg",
    },
    {
      id: 3,
      title: "Revisions & Refinement",
      description:
        "We polish the selected logo based on your feedback until it’s exactly how you envisioned it.",
      icon: "/ui/3.svg",
    },
    {
      id: 4,
      title: "High-Resolution Deliverables",
      description:
        "Final files in all formats (JPG, PNG, SVG, PDF), ready for web, print, and merchandise use.",
      icon: "/ui/4.svg",
    },
    {
      id: 5,
      title: "Branding Consistency",
      description:
        "Logos are built to stay consistent across digital, print, and all brand touchpoints.",
      icon: "/ui/5.svg",
    },
    {
      id: 6,
      title: "Optional Add-ons",
      description:
        "Extras like logo animation, icons, social media kits, and brand usage guides are available.",
      icon: "/ui/1.svg",
    },
  ];

  return (
    <div className="mt-24 flex flex-col justify-center items-center overflow-x-hidden">
      {/* hero section */}
      <Hero
        title="Logo Designing"
        subTitle="Your brand deserves a logo that speaks volumes."
        description={
          "We design logos that are visually striking and aligned with your brand’s identity. Whether for a startup or a rebrand, our logos are versatile, memorable, and impactful across all platforms."
        }
        buttonTitle={"Let’s Grow"}
        imageSrc={"/LogoBannerImage.webp"}
        imageStyle="w-full sm:w-[60%] h-full"
      />

      {/* what we provide for web dev */}
      <div className="w-screen flex flex-col justify-center items-center bg-black rounded-b-4xl shadow-[0_40px_100px_rgba(236,19,19,0.1)] translate-y-10 z-10">
        <WeProvide
          title={"What We Offer in Logo Designing services"}
          subtitle={"What we provide"}
          cardsData={cardsData}
        />
      </div>

      {/* Technologies */}
      <Technology
        heading=""
        icons={[]}
        title="Logo Design That Powers Your Brand Story"
        subtitle="Benefits of Logo Designing"
        href=""
        list={[
          "Strong brand identity",
          "Professional and credible appearance",
          "Better brand recall",
          "Differentiation from competitors",
          "Versatile across all platforms",
          "Foundation for consistent branding",
        ]}
      />

      {/* Our process */}
      <Process
        heading="Our Logo Designing Process"
        process={[
          {
            id: 1,
            title: "Understanding Your Brand",
            description:
              "We begin by learning about your business, target audience, and vision to ensure the logo reflects your core values.",
            image: "/logo-designing/1.webp",
          },
          {
            id: 2,
            title: "Research & Inspiration",
            description:
              "We analyze competitors and gather creative inspiration to build a strong foundation for unique logo concepts.",
            image: "/logo-designing/2.webp",
          },
          {
            id: 3,
            title: "Concept Development",
            description:
              "Multiple logo ideas are crafted, each with a distinct direction aligned with your brand identity.",
            image: "/logo-designing/3.webp",
          },
          {
            id: 4,
            title: "Feedback & Revisions",
            description:
              "Based on your input, we refine the chosen concept to perfection.",
            image: "/logo-designing/4.webp",
          },
          {
            id: 5,
            title: "Final Delivery",
            description:
              "The approved logo is delivered in all necessary formats, ready for use across platforms.",
            image: "/logo-designing/5.webp",
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
          ques="What is your logo design process?"
          ans="We research your brand, create concepts, collect your feedback, and finalize the logo."
        />
        <FaqItem
          ques="How many logo concepts will I receive?"
          ans="You typically receive 2-3 initial concepts to choose from."
        />
        <FaqItem
          ques="Are revisions included?"
          ans="Yes, revisions are included until you’re satisfied with the final logo."
        />
        <FaqItem
          ques="Will I get logo files in multiple formats?"
          ans="Yes, we provide all necessary formats for web and print use."
        />
        <FaqItem
          ques="Can you redesign an existing logo?"
          ans="Absolutely, we can refresh or modernize your current logo."
        />
      </div>
    </div>
  );
};

export default page;
