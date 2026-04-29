import Clients from "@/components/features/Clients";
import FaqItem from "@/components/features/FaqItem";
import Hero from "@/components/features/Hero";
import MissionVision from "@/components/features/MissionVision";
import Testimonials from "@/components/features/Testimonials";
import WeProvide from "@/components/features/WeProvide";
import Image from "next/image";

export const metadata = {
  title: "About Pantheon Digital | Creative Digital Experts & Innovators",
  description:
    "Meet Pantheon Digitals: a passionate team of digital experts delivering creative solutions in web, marketing, branding, and software for businesses worldwide.",
};

const AboutUs = () => {
  return (
    <>
      <div className="mt-24 flex flex-col items-center w-screen overflow-x-hidden">
        {/* Hero Section */}
        <Hero
          buttonTitle="Contact Us"
          title={"About us"}
          description={
            "Welcome to Pantheon Digital, where innovation meets excellence. As a leading player in the digital landscape, we specialize in crafting transformative solutions that empower businesses to thrive in the modern era."
          }
          imageSrc={"/AboutUsBackgroundImage.svg"}
          imageStyle="w-full h-full"
        />

        {/* descriptive section */}
        <div className="w-[90%] md:w-[80%] mt-12 sm:mt-0 h-auto flex flex-col md:flex-row justify-center items-start gap-6 md:gap-24">
          {/* left */}
          <div className="md:w-[50%] mt-12">
            <h2 className="text-white font-avenir-extrabold font-extrabold text-xl md:text-3xl text-center md:text-left">
              Nurturing Tomorrow: Crafting Digital Journeys with Passion
            </h2>
            <p className="text-white font-avenir-medium text-sm md:text-xl  opacity-80 mt-8 text-center md:text-left">
              We craft smart, scalable digital solutions that empower businesses
              to lead in a fast-changing world.
            </p>
          </div>

          {/* right images */}
          <div className="md:w-[60%] flex gap-4 mt-12 md:mt-0 items-center justify-center">
            <Image
              src="/AboutDescImage1.png"
              alt="description image 1"
              width="252"
              height="410"
              className="w-[50%] h-auto"
            />
            <Image
              src="/AboutDescImage2.png"
              alt="description image 1"
              width="252"
              height="410"
              className="translate-y-10 w-[50%] h-auto"
            />
          </div>
        </div>

        {/* Our Mission and Vision */}
        <MissionVision />

        {/* What We Provide */}
        <WeProvide
          title="We provide truly prominent IT solutions."
          subtitle="What we provide"
          cardsData={AboutWhatWeProvideData}
        />

        {/* Clients */}
        <Clients />

        {/* Testimonials */}
        <div className="w-[90%] md:w-[80%] mt-12 md:mt-24">
          <h4 className="font-avenir-medium opacity-60 text-white text-xs md:text-xl text-center">
            Testimonials
          </h4>
          <h1 className="font-geometric font-bold text-xl md:text-4xl text-white text-center my-4">
            100+ satisfied clients worldwide
          </h1>
          <Testimonials speed="normal" direction="right" testimonials={[]} />
          <Testimonials speed="normal" direction="left" testimonials={[]} />
        </div>

        {/* Faq section */}
        <div className="w-[90%] md:w-[80%] mt-12 md:mt-24">
          <h1 className="font-geometric font-bold text-lg md:text-4xl text-white text-center my-4 ">
            Frequently Asked Questions
          </h1>
          <div className=" w-[80%] md:w-[60%] border-b-1 border-white mx-auto mb-8" />
          <FaqItem
            ques="What is Pantheon Digitals’ mission?"
            ans="Our mission is to empower businesses through innovative digital solutions that drive real, measurable growth and lasting brand impact."
          />
          <FaqItem
            ques="How experienced is your team?"
            ans="Our team comprises seasoned professionals with expertise in digital marketing, design, software development, and cloud services, each bringing years of hands-on experience."
          />
          <FaqItem
            ques="Do you have experience in my industry?"
            ans="We serve a broad range of industries—from retail and hospitality to tech and professional services—and tailor our approach to suit your sector."
          />
          <FaqItem
            ques="Where are you located? Do you serve clients internationally?"
            ans="We are headquartered in Delhi /India and proudly work with clients locally and across international markets."
          />
          <FaqItem
            ques="How can I learn more or speak with your team?"
            ans="Visit our Contact page to schedule a consultation, or reach out via phone or email. We’re happy to answer any questions and discuss your needs in detail."
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;

const AboutWhatWeProvideData = [
  {
    id: 1,
    icon: "/About-WhatWeProvide/1.svg",
    title: "Leading with Innovation",
    description:
      "Pantheon Digital is a forward-thinking company that blends cutting-edge tech with fresh ideas to stay ahead of trends in the digital space, ensuring businesses adapt and lead in the industry.",
  },
  {
    id: 2,
    icon: "/About-WhatWeProvide/2.svg",
    title: "Crafted with Passion",
    description:
      "Our digital work is a craft, focusing on quality, precision, and a smooth user experience. We take pride in every detail, from code to website design, ensuring a seamless experience.",
  },
  {
    id: 3,
    icon: "/About-WhatWeProvide/3.svg",
    title: "You Come First",
    description:
      "We view you as a partner, understanding your business, goals, and challenges. We create a tailored plan, aiming for your success every step of the way.",
  },
  {
    id: 4,
    icon: "/About-WhatWeProvide/4.svg",
    title: "Built to Grow with You",
    description:
      "Our solutions are designed to scale with your business's digital needs, providing flexible systems and strategies for rapid growth and support throughout your journey.",
  },
  {
    id: 5,
    icon: "/About-WhatWeProvide/5.svg",
    title: "Flexible and Fast-Moving",
    description:
      "We adapt quickly to the digital world, staying in sync with your goals and staying in sync with market changes, ensuring we stay in sync with your priorities.",
  },
  {
    id: 6,
    icon: "/About-WhatWeProvide/6.svg",
    title: "Driven by Data, Inspired by Creativity",
    description:
      "We prioritize insights and data-driven decisions for creative solutions, ensuring they not only look great but also deliver measurable impact.",
  },
  {
    id: 7,
    icon: "/About-WhatWeProvide/7.svg",
    title: "Support You Can Rely On",
    description:
      "Our role extends beyond project launch, providing ongoing support, performance checks, updates, and advice, ensuring smooth and successful project operations.",
  },
  {
    id: 8,
    icon: "/About-WhatWeProvide/8.svg",
    title: "Solving Problems with Creativity",
    description:
      "We specialize in tailoring solutions to your unique business needs, focusing on complex problems and creative problem-solving rather than a one-size-fits-all approach.",
  },
  {
    id: 9,
    icon: "/About-WhatWeProvide/9.svg",
    title: "Real Results, Not Just Pretty Designs",
    description:
      "Our focus is on achieving meaningful outcomes for your business, such as increased traffic, engagement, and sales, rather than just beautiful design.",
  },
];
