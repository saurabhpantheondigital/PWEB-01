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
  title: "Social Media Management Services | Pantheon Digital",
  description:
    "Enhance your online presence with expert social media management. Pantheon Digitals grows your brand and engagement across all major platforms.",
};

const page = () => {
  const cardsData = [
    {
      id: 1,
      icon: "/ui/1.svg",
      title: "Content Creation",
      description:
        "We create engaging content to drive interaction, using eye-catching graphics and compelling captions tailored to your brand and goals.",
    },
    {
      id: 2,
      icon: "/ui/2.svg",
      title: "Platform Management",
      description:
        "We manage your brand’s social presence across major platforms, keeping your audience engaged and your message consistent.",
    },
    {
      id: 3,
      icon: "/ui/3.svg",
      title: "Post Scheduling & Calendar",
      description:
        "Use a content calendar. We plan and schedule your posts for optimal timing to keep posts consistent and timely.",
    },
    {
      id: 4,
      icon: "/ui/4.svg",
      title: "Hashtag Research & Trends",
      description:
        "We use smart tools to find trending hashtags, boosting your reach and keeping your content current.",
    },
    {
      id: 5,
      icon: "/ui/5.svg",
      title: "Community Management",
      description:
        "We handle your social conversations—replying to comments, answering DMs, and moderating discussions—to keep your community engaged and supported daily.",
    },
    {
      id: 6,
      icon: "/ui/4.svg",
      title: "Analytics & Report",
      description:
        "Get regular reports with key insights to refine your strategy monthly for better results.",
    },
  ];

  return (
    <div className="mt-24 flex flex-col justify-center items-center overflow-x-hidden">
      {/* hero section */}
      <Hero
        title="Powerful Social Media Management That Grows Your Brand"
        subTitle="Smart strategies. Real connections. Measurable impact."
        description={
          "We help brands connect, engage, and convert across every major social platform. From content strategy to daily publishing, analytics, and community management — we take care of it all so you can focus on running your business."
        }
        buttonTitle={"Create with us"}
        imageSrc={"/SocialMediaManagementBannerImage.webp"}
        imageStyle="w-full md:w-[60%] h-full"
      />

      {/* what we provide for web dev */}
      <div className="w-screen  flex flex-col justify-center items-center bg-black rounded-b-4xl shadow-[0_40px_100px_rgba(236,19,19,0.1)] translate-y-10 z-10">
        <WeProvide
          title={"What We Offer in Social Management"}
          subtitle={"What we provide"}
          cardsData={cardsData}
        />
      </div>

      {/* Technologies */}
      <Technology
        showCards
        heading=""
        icons={[]}
        title="Smart strategies. Real connections. Measurable impact."
        subtitle="Benefits of social Management"
        href=""
        list={[
          "Boosts Brand Awareness",
          "Builds Meaningful Customer Relationships",
          "Drives Targeted Traffic & Leads",
          "Reinforces Brand Voice & Identity",
          "Saves Time & Resources",
          "Provides Measurable Results",
          "Increases Engagement & Community Growth",
          "Keeps You Relevant & Competitive",
        ]}
      />

      {/* Our process */}
      <Process
        heading="Our Proven SEO & SMO Process"
        process={[
          {
            id: 1,
            title: "Discovery & Strategy",
            description:
              "We begin by immersing ourselves in your brand — understanding your mission, target audience, competitors, voice, and visual identity. Through a comprehensive audit of your existing social presence (if any), market research, and audience analysis, we uncover what resonates with your audience and where the gaps lie. Based on these insights, we craft a customized social media strategy that aligns with your business goals — whether it's brand awareness, engagement, lead generation, or community building.",
            image: "/social-management/1.webp",
          },
          {
            id: 2,
            title: "Content Planning",
            description:
              "With the strategy as our foundation, we build a content plan that’s purposeful and aligned with your campaigns, launches, seasonal events, and audience interests. This includes ideating content themes, post types (e.g. educational, promotional, entertaining), tone of voice, and frequency. Everything is mapped into a monthly content calendar, offering a clear view of what's coming — ensuring consistency, coherence, and relevance across platforms.",
            image: "/social-management/2.webp",
          },
          {
            id: 3,
            title: "Creation & Review",
            description:
              "Our design and content team turns ideas into high-quality creative assets — from attention-grabbing graphics, Reels, and videos, to on-brand captions that drive engagement and conversation. We ensure each post reflects your brand’s tone and identity. Once the content is ready, it’s shared with you through a collaborative review process where we gather your feedback, fine-tune details, and finalize for publishing. Your approval is key before anything goes live.",
            image: "/social-management/3.webp",
          },
          {
            id: 4,
            title: "Scheduling & Publishing",
            description:
              "Using advanced scheduling tools like Meta Business Suite, Buffer, or Later, we schedule all approved posts at the most effective times for audience engagement. Our publishing process ensures that content goes out on time, error-free, and optimized for each platform — whether it’s an Instagram carousel, a LinkedIn thought piece, or a Twitter thread. Your social channels stay consistently active without you lifting a finger.",
            image: "/social-management/4.png",
          },
          {
            id: 5,
            title: "Engagement & Community Management",
            description:
              "Social media is a two-way street. Our community managers monitor and respond to comments, mentions, DMs, and tags — nurturing genuine interactions and building a loyal following. We handle FAQs, escalate important issues to your team, and maintain a tone that reflects your brand’s personality. This ongoing engagement helps turn followers into loyal customers and advocates.",
            image: "/social-management/5.webp",
          },
          {
            id: 6,
            title: "Analytics & Optimization",
            description:
              "We continuously track the performance of every post and campaign using platform insights and third-party analytics tools. Each month, you receive a clear, actionable report that highlights key metrics like reach, engagement rate, growth, top-performing content, and audience behavior. More than just reporting — we use this data to optimize future content, improve strategies, and ensure that your social media presence grows stronger with every cycle.",
            image: "/social-management/6.webp",
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
      <div className="sm:mt-0 w-screen h-auto flex justify-center">
        <OurProject />
      </div>

      {/* Faq Section */}
      <div className="w-[90%] md:w-[80%] mt-12 md:mt-24">
        <h1 className="font-geometric text-lg md:text-4xl text-white text-center my-4 ">
          Frequently Asked Questions
        </h1>
        <div className=" w-[80%] md:w-[60%] border-b-1 border-white mx-auto mb-8" />
        <FaqItem
          ques="What platforms do you manage for social media?"
          ans="We handle Facebook, Instagram, LinkedIn, Twitter, and more based on your audience and goals."
        />
        <FaqItem
          ques="How often will you post content on my social channels?"
          ans="Posting frequency is customizable, typically ranging from 3-7 times a week, depending on your plan."
        />
        <FaqItem
          ques="Can you help grow my followers and engagement?"
          ans="Yes, we use proven strategies to increase both followers and real engagement organically."
        />
        <FaqItem
          ques="Do you provide monthly analytics and reports?"
          ans="Absolutely! We offer detailed monthly performance reports and insights."
        />
        <FaqItem
          ques="Will I have input on the content shared?"
          ans="Yes, you’ll review and approve content before it goes live to ensure brand consistency."
        />
      </div>
    </div>
  );
};

export default page;
