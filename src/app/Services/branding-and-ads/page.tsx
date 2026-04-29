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
  title: "Branding & Advertising Services | Pantheon Digitals",
  description:
    "Build a strong, memorable brand and impactful ad campaigns. We shape your identity and promote your business across digital and offline channels.",
};

const page = () => {
  const cardsData = [
    {
      id: 1,
      icon: "/ui/1.svg",
      title: "Brand Identity Development:",
      description:
        "Create a unique brand image with tailored logos, visual styles, and brand guidelines that set you apart",
    },
    {
      id: 2,
      icon: "/ui/2.svg",
      title: "Brand Strategy & Positioning",
      description:
        "Define your market positioning and messaging to highlight your unique value and connect with your target audience.",
    },
    {
      id: 3,
      icon: "/ui/3.svg",
      title: "Creative Advertising Campaigns",
      description:
        "Design and execute multi-channel ad campaigns that boost awareness and drive results across digital and print platforms",
    },
    {
      id: 4,
      icon: "/ui/4.svg",
      title: "Consistent Brand Voice",
      description:
        "Establish and maintain a clear, memorable brand voice across all touchpoints for cohesive communication.",
    },
    {
      id: 5,
      icon: "/ui/4.svg",
      title: "Performance Analytics & Reporting",
      description:
        "Monitor campaign effectiveness with regular analytics and actionable insights for ongoing improvement.",
    },
    {
      id: 6,
      icon: "/ui/4.svg",
      title: "Rebranding & Brand Refresh",
      description:
        "Revitalize established brands through comprehensive rebranding, updated visuals, and repositioning strategies",
    },
  ];

  return (
    <div className="mt-24 flex flex-col justify-center items-center overflow-x-hidden">
      {/* hero section */}
      <Hero
        title="Branding & Advertising"
        subTitle="Build Brands That Inspire. Launch Campaigns That Perform."
        description={
          "Shape a distinctive brand identity and reach your ideal audience with high-impact advertising that delivers real business growth."
        }
        buttonTitle={"Let’s Grow"}
        imageSrc={"/BrandingAndAdsBannerImage.webp"}
        imageStyle="w-full sm:w-[60%] h-full"
      />

      {/* what we provide for web dev */}
      <div className="w-screen flex flex-col justify-center items-center bg-black rounded-b-4xl shadow-[0_40px_100px_rgba(236,19,19,0.1)] translate-y-10 z-10">
        <WeProvide
          title={"What We Offer in Branding & Advertising"}
          subtitle={"What we provide"}
          cardsData={cardsData}
        />
      </div>

      {/* Technologies */}
      <Technology
        heading=""
        icons={[]}
        title="The Growth Engine for Modern Businesses with branding"
        subtitle="Benefits of Branding & Ads"
        href=""
        list={[
          "Boost recognition",
          "Build loyalty",
          "Increase trust",
          "Enable premium pricing",
          "Drive word-of-mouth",
          "Attract talent",
          "Ease product launches",
        ]}
      />

      {/* Our process */}
      <Process
        heading="Our Branding & Advertising Process"
        process={[
          {
            id: 1,
            title: "Discovery & Research",
            description:
              "We analyze your business, audience, and competitors to uncover your unique edge. Insightful findings guide every step ahead.",
            image: "/branding/1.webp",
          },
          {
            id: 2,
            title: "Brand Strategy",
            description:
              "We define your brand’s voice, values, and positioning for clear, consistent messaging. This foundation shapes your identity and marketing efforts.",
            image: "/branding/2.webp",
          },
          {
            id: 3,
            title: "Visual Identity Creation",
            description:
              "Our designers craft logos, colors, and brand assets that embody your vision. Cohesive visuals help you stand out and connect with customers.",
            image: "/branding/3.webp",
          },
          {
            id: 4,
            title: "Campaign Planning",
            description:
              "We design advertising campaigns tailored to your goals and target market. Each plan sets the stage for creative, results-driven promotion.",
            image: "/branding/4.webp",
          },
          {
            id: 5,
            title: "Content Development",
            description:
              "We produce compelling copy and visuals to bring your brand story to life. Engaging content drives awareness and inspires action.",
            image: "/branding/5.webp",
          },
          {
            id: 6,
            title: "Launch & Promotion",
            description:
              "Your brand and ads roll out across key channels for maximum impact. We ensure timely execution and broad audience reach.",
            image: "/branding/6.webp",
          },
          {
            id: 7,
            title: "Analytics & Optimization",
            description:
              "We track performance, analyze results, and refine strategies. Continuous improvement ensures your brand and campaigns keep growing.",
            image: "/branding/7.webp",
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
          ques="How do you approach developing a brand identity?"
          ans="We start with a brand discovery session, create concepts, and refine based on your feedback."
        />
        <FaqItem
          ques="What advertising channels do you recommend?"
          ans="We recommend a mix of digital (social, search, display) and offline (print, outdoor) based on your goals and target audience."
        />
        <FaqItem
          ques="Can you redesign existing branding assets?"
          ans="Absolutely, we refresh and modernize existing brands as needed."
        />
        <FaqItem
          ques="Do you develop advertising campaigns from scratch?"
          ans="Yes, from strategy through creative to execution, we manage the full campaign lifecycle."
        />
        <FaqItem
          ques="Is my input included in branding decisions?"
          ans="Definitely, your feedback is crucial at every stage of branding and advertising."
        />
      </div>
    </div>
  );
};

export default page;
