import About from "@/components/features/About";
import ChooseUs from "@/components/features/ChooseUs";
import Clients from "@/components/features/Clients";
import FaqItem from "@/components/features/FaqItem";
import OurProject from "@/components/features/OurProjects";
import Testimonials from "@/components/features/Testimonials";
import AboutNumerics from "@/components/ui/AboutNumerics";
import Card from "@/components/ui/Card";
import PrimaryButton from "@/components/ui/PrimaryButton";

export const metadata = {
  description: "Home Page Description",
};

export default function Home() {
  return (
    <>
      {/* starting of main section */}
      <main className="relative w-full h-full min-h-[100vh] flex flex-col row-start-2 items-center overflow-x-hidden">
        <div className="w-[90%] h-auto rounded-b-4xl flex flex-col justify-center items-center mt-32">
          {/* hero section background image */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-screen h-screen absolute -z-10 top-[0%] sm:blur-none blur-[2.5px] object-cover mask-b-from-90% mask-b-to-100%"
          >
            <source src="/video/background.webm" type="video/webm" />
            <source src="/video/background.mp4" type="video/mp4" />
          </video>

          <h1 className="font-geometric font-bold text-xl sm:text-4xl text-white text-center md:mt-0 ">
            Powering possibility through digital innovation
          </h1>
          <p className="text-white font-avenir-regular sm:text-xl text-xs  w-[80vw] leading-6 md:leading-8  mt-6 md:mt-12 text-center">
            At Pantheon Digital, we don't just adapt to the future — we create
            it. Pantheon Digital is where the future is imagined, engineered,
            and launched.
          </p>
        </div>

        <PrimaryButton
          className={"my-12 md:my-18"}
          label={"Connect with us"}
          href={"/Contact_Us"}
          type="variant2"
        />

        {/* informational card */}
        <div className="w-screen  relative bg-gradient-to-b from-[#0000] to-[#000]  h-auto rounded-b-4xl flex items-center justify-center pb-8 shadow-2xl/10 shadow-[#F61313] md:pb-32 mt-8 md:pt-8 z-40 translate-y-12">
          <div className="w-[90%] md:w-[80%] md:grid md:grid-cols-2 sm:items-center place-items-center flex flex-col gap-8 ">
            <Card
              href="/Services/seo/"
              ckey={1}
              imgHref="/mobile.svg"
              title="Digital Marketing, SEO & Social media management"
              description="Embark on a journey into cutting-edge technology with Pantheon Digital. Our specialized team transforms your concepts into reality, prioritizing excellence in both quality & functionality."
            />
            <Card
              href="/Services/software-development"
              ckey={2}
              imgHref="/coding.svg"
              title="Custom Software designing & Development"
              description="Elevate your online presence with Pantheon Digital's exceptional design services. Our skilled experts ensure that your digital footprint not only stands out but leaves a lasting impression."
            />
            <Card
              href="/Services/crm"
              ckey={3}
              imgHref="/keyboard-open.svg"
              title="HRMS & CRM Software Services"
              description="Simplify and streamline your HR processes with Pantheon Digital's robust HRMS software. Tailored to meet your unique needs, our Human Resource Management Services empower businesses with efficient workforce management."
            />
            <Card
              href="/Services/cloud-and-devops"
              ckey={4}
              imgHref="/airdrop.svg"
              title="Cloud & DevOps services"
              description="Forge and strengthen your customer relationships with Pantheon Digital's CRM Software. Our software is meticulously designed to enhance communication, streamline interactions, and ensure that your business thrives on strong connections."
            />
          </div>
        </div>

        {/* about us section */}
        <About />

        {/* about numerics */}
        <AboutNumerics />

        {/* Reason to choose use section */}
        <ChooseUs />

        {/* Project section */}
        <div className="sm:mt-0 -mt-200 w-screen h-auto flex justify-center">
          <OurProject />
        </div>

        {/* Testimonial section */}
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

        {/* Our Trusted Clients */}
        <Clients />

        {/* Faq Section */}
        <div className="w-[90%] md:w-[80%] mt-12 md:mt-24">
          <h1 className="font-geometric font-bold text-lg md:text-4xl text-white text-center my-4 ">
            Frequently Asked Questions
          </h1>
          <div className=" w-[80%] md:w-[60%] border-b-1 border-white mx-auto mb-8" />
          <FaqItem
            ques="What services does Pantheon Digitals offer?"
            ans="We offer a comprehensive range of digital solutions—including social media management, branding, website and application development, digital advertising, and custom softwareservices for businesses of all sizes."
          />
          <FaqItem
            ques="How do I get started with Pantheon Digitals?"
            ans="Simply reach out via our contact form or call us directly. Our team will set up a discoverycall to understand your needs and recommend the right services."
          />
          <FaqItem
            ques="Who can benefit from your services?"
            ans="We work with startups, SMEs, and established enterprises across various sectors looking to grow their brand and streamline their digital presence."
          />
          <FaqItem
            ques="What sets you apart from other digital agencies?"
            ans="Our personalized approach, experienced team, innovative strategies, and commitment to measurable results make us a preferred partner for holistic digital growth."
          />
          <FaqItem
            ques="How soon can I expect to see results?"
            ans="Results depend on the service chosen, but many clients notice improvements in engagement, lead generation, or performance within a few weeks of launch."
          />
        </div>
      </main>
    </>
  );
}
