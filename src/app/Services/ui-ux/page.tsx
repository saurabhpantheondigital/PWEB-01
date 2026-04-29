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
  title: "UI/UX Design Services | Web & Mobile Solutions",
  description:
    "User-friendly, visually stunning UI/UX designs for web & mobile. Pantheon Digitals ensures seamless and engaging digital experiences for your users.",
};

const page = () => {
  const cardsData = [
    {
      id: 1,
      icon: "/ui/1.svg",
      title: "Modern & Engaging UI/UX",
      description:
        "Creating designs with a strong visual appeal that captivate and entice users to return for more. Use effective layouts and a contemporary style to stay ahead of trends.",
    },
    {
      id: 2,
      icon: "/ui/2.svg",
      title: "Responsive Design",
      description:
        "Determine that your website or application functions flawlessly on all platforms, including desktops and mobile phones, providing the best possible experience regardless of screen size.",
    },
    {
      id: 3,
      icon: "/ui/3.svg",
      title: "Customization & Branding",
      description:
        "Designs that are specifically tailored to your brand's identity. We use consistent color schemes, typography, and logo integration to help you realize your distinct identity.",
    },
    {
      id: 4,
      icon: "/ui/4.svg",
      title: "Interactive Elements",
      description:
        "Making user experiences feel seamless and memorable by incorporating dynamic and captivating components like animations, micro-interactions, and transitions.",
    },
    {
      id: 5,
      icon: "/ui/5.svg",
      title: "Efficient Navigation",
      description:
        "To guarantee simple, easy navigation that enables visitors to locate what they need with the least amount of effort, we optimize user flows and site structure.",
    },
  ];
  return (
    <div className="mt-24 flex flex-col justify-center items-center overflow-x-hidden">
      {/* hero section */}
      <Hero
        title="UI/UX - Transform User Experiences with Stunning Designes"
        subTitle="Designs That Delight and Convert — Creating Seamless, Engaging, and User-Centric Experiences."
        description={
          "At Pantheon Digital, we create experiences rather than just interfaces. Our UI/UX solutions concentrate on developing designs that are user-friendly, aesthetically pleasing, and conversion-oriented in order to maintain user engagement and alignment with your brand's mission."
        }
        buttonTitle={"Contact Us"}
        imageSrc={"/UI-UXBannerImage.webp"}
        imageStyle="w-full sm:w-[60%] h-full"
      />

      {/* what we provide for web dev */}
      <div className="w-screen  flex flex-col justify-center items-center bg-black rounded-b-4xl shadow-[0_40px_100px_rgba(236,19,19,0.1)] translate-y-10 z-10">
        <WeProvide
          title={"What We Offer in UI/UX"}
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
        title="Designs That Delight & Convert"
        subtitle="Creating Seamless, Engaging, and User-Centric Experiences."
        href=""
        list={[
          "Transforming Ideas into Intuitive Designs.",
          "Improved User Satisfaction",
          "Increased Conversion Rates",
          "Cross-Device Consistency",
          "Enhanced Brand Perception",
          "Higher Retention",
          "Data-Driven Design Decisions",
          "Competitive Advantage",
        ]}
      />

      {/* Our process */}
      <Process
        heading="Our Proven Website Development Process"
        process={[
          {
            id: 1,
            title: "Discovery & Research: Establishing the Basis",
            description:
              "Our first step is to comprehend your target market and business objectives. We obtain important insights by conducting stakeholder interviews and creating user personas. Our strategy is informed by market research and competition analysis. This makes it easier to match your vision and user requirements with the design. Our study guarantees that all design choices are informed by data. A successful outcome is set up by this fundamental phase.",
            image: "/ui/Process/1.webp",
          },
          {
            id: 2,
            title: "Prototyping & Wireframing: Seeing User Flow",
            description:
              "In order to map out the structure and layout of your website or application, we generate wireframes. Interactive prototypes are designed to evaluate functionality and depict user flow. The user experience is made physical by these prototypes. We get input early on to confirm design decisions. Usability problems are found through user testing. This phase guarantees that the design is on course prior to the addition of intricate visuals.",
            image: "/ui/Process/2.webp",
          },
          {
            id: 3,
            title: "UI Design and Visual Enhancement: Making It Vibrant",
            description:
              "We create high-fidelity mockups that incorporate your branding components. The visual design incorporates iconography, typography, and color palettes. The user interface's components are refined for readability and usability. We make sure the design is both practical and beautiful. Every encounter and screen maintains brand consistency. Improving visual components improves user experience and increases interaction.",
            image: "/ui/Process/3.webp",
          },
          {
            id: 4,
            title: "Handoff and Launch of Development",
            description:
              "We create comprehensive assets and design specifications for the development team. Proper communication guarantees that the design is implemented accurately. During the process, our team works together with the developers. Pre-launch tests are carried out to make sure everything functions properly on all devices. After the design is put into practice, we successfully launch the product. The procedure is tracked to guarantee a successful deployment.",
            image: "/ui/Process/4.webp",
          },
          {
            id: 5,
            title:
              "Continuous Improvement: Making the Most of Continued Success",
            description:
              "After launch, we employ heatmaps and analytics to monitor user behavior. In order to further improve the design, we continuously gather user input. Updates and improvements to iterative designs are guided by performance data. We continue to be involved, making sure the product changes to meet user needs. Maintaining an entertaining and user-friendly platform is the aim. Sustained assistance guarantees sustained prosperity and user contentment.",
            image: "/ui/Process/5.webp",
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
      <div className="sm:mt-0 mt-12  w-screen h-auto flex justify-center">
        <OurProject />
      </div>

      {/* Faq Section */}
      <div className="w-[90%] md:w-[80%] mt-12 md:mt-24">
        <h1 className="font-geometric text-lg md:text-4xl text-white text-center my-4 ">
          Frequently Asked Questions
        </h1>
        <div className=" w-[80%] md:w-[60%] border-b-1 border-white mx-auto mb-8" />
        <FaqItem
          ques="What’s the difference between UI and UX design?"
          ans="PUI focuses on look and feel, while UX ensures intuitive and effective user journeys."
        />
        <FaqItem
          ques="Do you offer redesigns for existing applications or websites?"
          ans="Yes, we specialize in both new designs and revamps."
        />
        <FaqItem
          ques="Can you create prototypes and wireframes?"
          ans="Yes, we provide interactive prototypes and wireframes for client feedback."
        />
        <FaqItem
          ques="How does your design process work?"
          ans="Our process includes research, design, prototyping, testing, and final delivery."
        />
        <FaqItem
          ques="Do your designs follow accessibility standards?"
          ans="Absolutely, we adhere to the latest accessibility guidelines and best practices."
        />
      </div>
    </div>
  );
};

export default page;
