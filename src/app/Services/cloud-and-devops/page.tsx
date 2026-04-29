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
  title: "Cloud & DevOps Services | Scalable Business Solutions",
  description:
    "Accelerate digital transformation with reliable cloud & DevOps services. Secure, scalable, and cost-effective solutions for modern businesses.",
};

const page = () => {
  const cardsData = [
    {
      id: 1,
      title: "Cloud Infrastructure Design & Management",
      description:
        "Build and operate secure, scalable cloud environments tailored to your business, leveraging AWS, Azure, Google Cloud, or hybrid setups.",
      icon: "/ui/1.svg",
    },
    {
      id: 2,
      title: "CI/CD Pipeline Implementation",
      description:
        "Set up automated continuous integration and delivery pipelines for faster, more reliable code deployment and quick feature rollouts.",
      icon: "/ui/2.svg",
    },
    {
      id: 3,
      title: "Infrastructure as Code (IaC)",
      description:
        "Automate infrastructure provisioning and configuration with tools like Terraform and CloudFormation, ensuring consistency across environments.",
      icon: "/ui/3.svg",
    },
    {
      id: 4,
      title: "Cloud Migration Services",
      description:
        "Seamlessly move your apps, data, and workloads to the cloud with minimal downtime and maximum security.",
      icon: "/ui/4.svg",
    },
    {
      id: 5,
      title: "24/7 Monitoring & Optimization",
      description:
        "Proactively monitor performance, manage resources, and optimize costs with advanced analytics and alerting.",
      icon: "/ui/5.svg",
    },
    {
      id: 6,
      title: "DevSecOps & Compliance",
      description:
        "Integrate robust security checks and compliance management throughout the development and deployment process.",
      icon: "/ui/1.svg",
    },
  ];

  return (
    <div className="mt-24 flex flex-col justify-center items-center overflow-x-hidden">
      {/* hero section */}
      <Hero
        title="Cloud & DevOps Services"
        subTitle="Accelerate Your Digital Transformation with Cloud & DevOps Services"
        description={
          "Unlock scalable infrastructure, automation, and rapid deployment for a future-ready business—powered by leading-edge cloud and DevOps practices."
        }
        buttonTitle={"Let’s Grow"}
        imageSrc={"/CloudAndDevopsBannerImage.png"}
        imageStyle="w-full sm:w-[60%] h-full"
      />

      {/* what we provide for web dev */}
      <div className="w-screen flex flex-col justify-center items-center bg-black rounded-b-4xl shadow-[0_40px_100px_rgba(236,19,19,0.1)] translate-y-10 z-10">
        <WeProvide
          title={"What We Offer in Cloud & DevOps Services"}
          subtitle={"What we provide"}
          cardsData={cardsData}
        />
      </div>

      {/* Technologies */}
      <Technology
        heading=""
        icons={[]}
        title="Cloud & DevOps: The Growth Engine for Modern Businesses"
        subtitle="Benefits of Cloud & DevOps"
        href=""
        list={[
          "Higher uptime",
          "Lower costs",
          "CI/CD automation",
          "Stronger security",
          "Better team collaboration",
          "Automated management",
          "Competitive advantage",
          "Increased agility",
        ]}
      />

      {/* Our process */}
      <Process
        heading="Our Cloud & DevOps Services Process"
        process={[
          {
            id: 1,
            title: "Assessment & Strategy",
            description:
              "We start by evaluating your current systems, workflows, and business goals. This phase identifies cloud-readiness, gaps, and sets a clear roadmap for migration, automation, and optimization.",
            image: "/devops/1.webp",
          },
          {
            id: 2,
            title: "Architecture & Planning",
            description:
              "Our experts design a secure, scalable cloud and DevOps architecture tailored to your needs. We define environments, select best-fit tech stacks, and prepare detailed implementation plans.",
            image: "/devops/2.webp",
          },
          {
            id: 3,
            title: "Environment Setup & Migration",
            description:
              "We provision cloud environments using Infrastructure as Code and migrate applications, data, or workloads—ensuring minimal downtime and top-notch security throughout.",
            image: "/devops/3.webp",
          },
          {
            id: 4,
            title: "CI/CD Pipeline Implementation",
            description:
              "Automated pipelines are set up for continuous integration and delivery. This streamlines code deployments, accelerates releases, and dramatically reduces errors.",
            image: "/devops/4.webp",
          },
          {
            id: 5,
            title: "Monitoring & Automation",
            description:
              "Real-time monitoring and automated alerts are deployed for proactive incident response. Resource usage and performance are optimized for cost-effectiveness and reliability.",
            image: "/devops/5.webp",
          },
          {
            id: 6,
            title: "Security & Compliance",
            description:
              "Security controls and automated compliance checks are embedded at every layer. We enforce best practices and standards relevant to your industry.",
            image: "/devops/6.webp",
          },
          {
            id: 7,
            title: "Ongoing Optimization & Support",
            description:
              "After go-live, we provide 24/7 managed support, performance tuning, and cost optimization—ensuring your cloud and DevOps environments remain robust and future-ready.",
            image: "/devops/7.webp",
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
          ques="What cloud platforms do you support?"
          ans="We work with AWS, Azure, Google Cloud, and hybrid cloud environments."
        />
        <FaqItem
          ques="What’s included in your DevOps services?"
          ans="Our services cover CI/CD, infrastructure automation, monitoring, and cloud migration."
        />
        <FaqItem
          ques="Can you help migrate our existing infrastructure to the cloud?"
          ans="Yes, we provide comprehensive migration planning and execution."
        />
        <FaqItem
          ques="How do you ensure cloud security?"
          ans="We use best-in-class tools and practices to secure cloud resources and data."
        />
        <FaqItem
          ques="Do you provide ongoing support and monitoring?"
          ans="Yes, we offer 24/7 monitoring, support, and cost optimization for cloud environments."
        />
      </div>
    </div>
  );
};

export default page;
