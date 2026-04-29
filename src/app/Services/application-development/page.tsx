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
  title: "Application Development Services | Android, iOS & Web",
  description:
    "Custom application development for Android, iOS & web. We turn ideas into scalable, secure, and innovative digital products.",
};

const page = () => {
  const cardsData = [
    {
      id: 1,
      icon: "/application/1.svg",
      title: "Latest Mobile Technologies",
      description:
        "We leverage the most advanced frameworks and tools to build high-performance mobile apps for Android, iOS, and cross-platform.",
    },
    {
      id: 2,
      icon: "/application/2.svg",
      title: "User-First Mobile Experiences",
      description:
        "Intuitive UI/UX that puts your users at the center of every screen tap and swipe.",
    },
    {
      id: 3,
      icon: "/application/3.svg",
      title: "Built to Scale",
      description:
        "Mobile apps engineered to grow with your business—smooth performance from startup to enterprise level.",
    },
    {
      id: 4,
      icon: "/application/4.svg",
      title: "End-to-End Support & QA",
      description:
        "From development to deployment, we provide thorough testing and continuous support to ensure a flawless app experience.",
    },
    {
      id: 5,
      icon: "/application/5.svg",
      title: "Robust Security Integration",
      description:
        "Your data and user privacy are protected with industry-standard encryption, secure coding practices, and compliance-ready architecture.",
    },
  ];

  return (
    <div className="mt-24 flex flex-col justify-center items-center overflow-x-hidden">
      {/* hero section */}
      <Hero
        title="Where Ideas Evolve Into Intelligent Applications."
        subTitle="Smart, Scalable, and Built Around You — App Development for the Modern Era."
        description={
          "At Pantheon Digital, we build intuitive, scalable, and high-performing mobile apps that connect your brand to users on the go. Whether it’s Android, iOS, or cross-platform, our apps are designed to deliver seamless experiences, boost engagement, and drive business growth. Let’s transform your idea into a powerful mobile solution."
        }
        buttonTitle={"Contact Us"}
        imageSrc={"/ApplicationDevelopmentBannerImage.png"}
        imageStyle="w-full sm:w-[60%] h-full"
      />

      {/* what we provide for web dev */}
      <div className="w-screen flex flex-col justify-center items-center bg-black rounded-b-4xl shadow-[0_40px_100px_rgba(236,19,19,0.1)] translate-y-10 z-10">
        <WeProvide
          title={"What We Offer in Application Development"}
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
        title="Innovative, Scalable, and User-Centric Website Development for Modern Businesses."
        href=""
        list={[
          "Faster Operations On-the-Go",
          "Borderless Business Reach",
          "Smarter User Engagement",
          "Mobile-Grade Security",
          "Fully Tailored Experiences",
          "Scalable Architecture for Future Growth",
          "Lifetime Maintenance & Optimization",
        ]}
      />

      {/* Our process */}
      <Process
        heading="Our Proven Website Development Process"
        process={[
          {
            id: 1,
            title: "Strategic Discovery & Goal Mapping",
            description:
              "We analyze your app idea, target users, and business objectives. Through competitive research and technical planning, we define the app’s features, architecture, and platform (iOS, Android, or cross-platform). A clear roadmap with defined milestones is prepared for successful delivery.",
            image: "/website/Process/1.webp",
          },
          {
            id: 2,
            title: "Intuitive Design & Interactive Prototyping",
            description:
              "We create mobile-first wireframes and clickable prototypes showcasing screen-to-screen interactions. The UI/UX is crafted for finger-friendly navigation and engaging user journeys. We focus on both aesthetics and usability to ensure a premium mobile experience.",
            image: "/website/Process/2.webp",
          },
          {
            id: 1,
            title: "Robust Development & Smart Integration",
            description:
              "Using modern mobile frameworks (like Flutter, React Native, Swift, or Kotlin), we code robust, secure, and scalable applications. Our front-end and back-end developers ensure seamless integration of features such as GPS, notifications, payments, and more.",
            image: "/website/Process/3.webp",
          },
          {
            id: 1,
            title: "Comprehensive Testing & Quality Control",
            description:
              "We test apps on real devices for functionality, speed, battery efficiency, and compatibility. Every feature is thoroughly checked for bugs, crashes, and responsiveness across different screen sizes and operating systems.",
            image: "/website/Process/4.webp",
          },
          {
            id: 1,
            title: "Seamless Launch & Store Deployment",
            description:
              "We prepare your app for App Store and Google Play submission. This includes compliance checks, performance tuning, and metadata optimization. We manage the entire deployment process and assist with publishing guidelines.",
            image: "/website/Process/5.webp",
          },
          {
            id: 1,
            title: "Continuous Support & Performance Optimization",
            description:
              "After launch, we provide updates, bug fixes, and new feature rollouts. We also monitor app performance and analytics to help you stay competitive and relevant in the market.",
            image: "/website/Process/6.webp",
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
      <div className="sm:mt-0 mt-12 w-full h-auto flex justify-center">
        <OurProject />
      </div>

      {/* Faq Section */}
      <div className="w-[90%] md:w-[80%] mt-12 md:mt-24">
        <h1 className="font-geometric text-lg md:text-4xl text-white text-center my-4 ">
          Frequently Asked Questions
        </h1>
        <div className=" w-[80%] md:w-[60%] border-b-1 border-white mx-auto mb-8" />
        <FaqItem
          ques="What platforms do you develop apps for?"
          ans="We develop for Android, iOS, and web platforms."
        />
        <FaqItem
          ques="Do you provide end-to-end services from idea to launch?"
          ans="Yes, we handle design, development, QA, deployment, and support."
        />
        <FaqItem
          ques="Can you develop cross-platform applications?"
          ans="Yes, we use technologies like Flutter and React Native for cross-platform solutions."
        />
        <FaqItem
          ques="Are your applications scalable and secure?"
          ans="Our apps are built to scale and follow industry security standards."
        />
        <FaqItem
          ques="How do you handle updates and maintenance?"
          ans="We offer ongoing app updates, support, and enhancements."
        />
      </div>
    </div>
  );
};

export default page;
