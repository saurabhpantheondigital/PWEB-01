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
  title: "Website Development Agency | Modern SEO Websites",
  description:
    "Modern, SEO-friendly websites tailored to your needs. From design to launch, count on Pantheon Digitals for expert web development solutions.",
};

const page = () => {
  const cardsData = [
    {
      id: 1,
      icon: "/website/1.svg",
      title: "Customized Solutions",
      description:
        "Our team creates custom online and app solutions for businesses of all sizes, ensuring they are adaptive, flexible, and prepared for future challenges.",
    },
    {
      id: 2,
      icon: "/website/2.svg",
      title: "Cutting-Edge Technology",
      description:
        "Our team utilizes cutting-edge technology, including cloud computing, mobile-first design, and JavaScript frameworks, to deliver scalable, secure, and high-performance solutions tailored to your company's needs.",
    },
    {
      id: 3,
      icon: "/website/3.svg",
      title: "User - Centric Development",
      description:
        "Our strategy prioritizes designing user-friendly, intuitive, and captivating applications that satisfy people and achieve business goals, focusing on interface and UX design throughout the development process.",
    },
    {
      id: 4,
      icon: "/website/4.svg",
      title: "Scalability for Growth",
      description:
        "Our online and app solutions are designed for scalability, allowing for easy expansion and change, while maintaining functionality and user experience.",
    },
    {
      id: 5,
      icon: "/website/5.svg",
      title: "Comprehensive Testing & Support",
      description:
        "Our testing process ensures the optimization of our online and app solutions, including cross-browser compatibility and functionality, while also providing ongoing support and maintenance for platform safety and functionality.",
    },
  ];
  return (
    <div className="mt-24 flex flex-col justify-center items-center overflow-x-hidden">
      {/* hero section */}
      <Hero
        title={"Website development, Let’s build the future together."}
        description={
          "Innovative, Scalable, and User-Centric Development for Modern Businesses At Pantheon Digital, we craft customized, high-performance websites that help your business stand out and scale. From sleek corporate sites to complex web platforms, our solutions are built to engage users, reflect your brand, and drive real results. Let us turn your vision into a powerful digital experience."
        }
        buttonTitle={"Contact Us"}
        imageSrc={"/WebsiteBannerImage.png"}
        imageStyle="w-full sm:w-[50%] h-full"
      />

      {/* what we provide for web dev */}
      <div className="w-screen flex flex-col justify-center items-center bg-black rounded-b-4xl shadow-[0_40px_100px_rgba(236,19,19,0.1)] translate-y-10 z-10">
        <WeProvide
          title={"What We Offer in Website Development"}
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
          "Increased Efficiency",
          "Global Reach",
          "Improved User Engagement",
          "Enhanced Security",
          "Customizable Solutions ",
          "Long-Term Growth",
          "Ongoing Support",
        ]}
      />

      {/* Our process */}
      <Process
        heading="Our Proven Website Development Process"
        process={[
          {
            id: 1,
            title: "Discovery & Planning",
            description:
              "We start by understanding your brand, goals, and target audience. Through in-depth research and stakeholder discussions, we define a project scope, sitemap, and structure. This phase lays the foundation for a responsive, SEO-optimized, and goal-driven website.",
            image: "/website/Process/1.webp",
          },
          {
            id: 2,
            title: "Design & Prototyping",
            description:
              "We design wireframes and page mockups focused on user flow, visual hierarchy, and conversion. Our design ensures your website looks modern, aligns with your brand, and delivers a seamless experience across devices. Interactive prototypes help visualize the layout before development begins.",
            image: "/website/Process/2.webp",
          },
          {
            id: 1,
            title: "Development & Coding",
            description:
              "Using the latest web technologies (HTML5, CSS3, JavaScript, CMS, etc.), we build fast, secure, and scalable websites. We ensure clean code, responsive design, and integration with CMS or third-party tools as needed. Every element is tested to perform across all browsers and screen sizes.",
            image: "/website/Process/3.webp",
          },
          {
            id: 1,
            title: "Quality Assurance & Testing",
            description:
              "We conduct rigorous testing across browsers, devices, and screen sizes. Functionality, page load speed, mobile responsiveness, and SEO readiness are all checked thoroughly to ensure a flawless user experience.",
            image: "/website/Process/4.webp",
          },
          {
            id: 1,
            title: "Launch & Deployment",
            description:
              "Once approved, we deploy your website on a live server with minimal downtime. We handle domain, hosting, and database setup, ensuring everything runs smoothly. We also provide basic training if you’ll be managing content through a CMS.",
            image: "/website/Process/5.webp",
          },
          {
            id: 1,
            title: "Ongoing Support & Maintenance",
            description:
              "Post-launch, we offer regular updates, backups, bug fixes, performance optimization, and content support to ensure your site stays secure, relevant, and fast.",
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
          ques="Which technologies do you use for website development?"
          ans="We use WordPress, React, Angular, Shopify, and more based on your requirements."
        />
        <FaqItem
          ques="Do you create responsive websites?"
          ans="Yes, all our websites are mobile-friendly and responsive."
        />
        <FaqItem
          ques="Can you redesign my existing website?"
          ans="Absolutely, we handle both new builds and redesigns."
        />
        <FaqItem
          ques="Will my website be SEO-friendly?"
          ans="Yes, we adhere to SEO best practices in all websites we develop."
        />
        <FaqItem
          ques="Do you provide website maintenance?"
          ans="We offer flexible website maintenance packages post-launch."
        />
      </div>
    </div>
  );
};

export default page;
