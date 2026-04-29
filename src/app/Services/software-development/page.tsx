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
  title: "Software Development Services | Custom Solutions",
  description:
    "Bespoke software development solutions for businesses. We design, build, and integrate software to boost your organization’s productivity.",
};

const page = () => {
  const cardsData = [
    {
      id: 1,
      title: "Custom Software Solutions",
      description:
        "Tailored applications designed specifically to meet your unique business needs across industries like healthcare, finance, manufacturing, and more",
      icon: "/ui/1.svg",
    },
    {
      id: 2,
      title: "Enterprise Applications",
      description:
        "Comprehensive systems including ERP, CRM, SCM, and BI solutions that streamline core organizational processes",
      icon: "/ui/2.svg",
    },
    {
      id: 3,
      title: "Industry-Specific Software",
      description:
        "Specialized software solutions crafted to meet regulatory and functional needs of sectors like education, logistics, real estate, and e-commerce",
      icon: "/ui/3.svg",
    },
    {
      id: 4,
      title: "Business Process Automation",
      description:
        "Software that automates workflows and routine tasks to increase operational efficiency and reduce manual effort.",
      icon: "/ui/4.svg",
    },
    {
      id: 5,
      title: "Data Analytics & Management Tools",
      description:
        "Custom BI software and analytics platforms to help you collect, analyze, and visualize data for smarter decision-making",
      icon: "/ui/5.svg",
    },
    {
      id: 6,
      title: "Integration & Middleware",
      description:
        "Solutions that connect disparate systems for seamless data exchange and improved interoperability within your IT environment",
      icon: "/ui/1.svg",
    },
  ];

  return (
    <div className="mt-24 flex flex-col justify-center items-center overflow-x-hidden">
      {/* hero section */}
      <Hero
        title="Software Development"
        subTitle="Innovative Software Solutions Tailored for Your Business Success"
        description={
          "Transform your ideas into powerful, scalable applications with our full-cycle software development services, designed to drive efficiency and growth."
        }
        buttonTitle={"Let’s Grow"}
        imageSrc={"/SoftwareDevelopmentImageBanner.png"}
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
        title="Tailored to your needs"
        subtitle="Benefits of software development"
        href=""
        list={[
          "Tailored to your needs",
          "Improved efficiency",
          "Scalability for growth",
          "Better data management",
          "Cost savings over time",
          "Enhanced security",
          "Competitive advantage",
        ]}
      />

      {/* Our process */}
      <Process
        heading="Our Software Development Process"
        process={[
          {
            id: 1,
            title: "Discovery & Analysis",
            description:
              "We start by understanding your business goals, processes, and technology needs. Through in-depth discussions and research, we identify challenges and opportunities to deliver the best-fit solution.",
            image: "/software-development/1.webp",
          },
          {
            id: 2,
            title: "Requirements & Planning",
            description:
              "We collaborate to define detailed requirements, prioritize features, and map out a clear project roadmap with milestones, timelines, and resource allocation.",
            image: "/software-development/2.webp",
          },
          {
            id: 3,
            title: "UI/UX Design",
            description:
              "Our team creates intuitive wireframes and visually engaging interfaces, ensuring seamless user experiences tailored for your audience and workflow.",
            image: "/software-development/3.webp",
          },
          {
            id: 4,
            title: "Development & Testing",
            description:
              "Using agile methodologies, we build robust, scalable software in iterative sprints. Continuous testing ensures quality, performance, and security at every stage.",
            image: "/software-development/4.webp",
          },
          {
            id: 5,
            title: "Review & Client Feedback",
            description:
              "We share progress frequently, gathering your input to refine features and interfaces, ensuring the end product aligns perfectly with your vision.",
            image: "/software-development/5.webp",
          },
          {
            id: 6,
            title: "Deployment & Integration",
            description:
              "Your solution is deployed to live environments and seamlessly integrated with your existing systems, ensuring minimal disruption during rollout.",
            image: "/software-development/6.webp",
          },
          {
            id: 7,
            title: "Support & Optimization",
            description:
              "Post-launch, we provide dedicated support, monitor performance, and implement ongoing improvements and updates to keep your software ahead of the curve.",
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
          ques="What types of software do you develop?"
          ans="We build custom software for web, desktop, and mobile, tailored to your business needs."
        />
        <FaqItem
          ques="Which programming languages and frameworks do you use?"
          ans="Our stack includes Java, .NET, Python, PHP, Node.js, and more."
        />
        <FaqItem
          ques="Do you follow agile development methodologies?"
          ans="Yes, we use agile approaches for faster delivery and responsiveness."
        />
        <FaqItem
          ques="Can you integrate new software with existing systems?"
          ans="Absolutely, we provide seamless integrations with your current infrastructure."
        />
        <FaqItem
          ques="What is your process for gathering requirements?"
          ans="We hold discovery sessions to document all business and technical requirements."
        />
      </div>
    </div>
  );
};

export default page;
