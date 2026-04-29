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
  title: "SEO & SMO Services | Improve Ranking & Social Reach",
  description:
    "Improve your website’s ranking and social presence. Our SEO & SMO services drive traffic, boost visibility, and grow your online audience organically.",
};

const page = () => {
  const cardsData = [
    {
      id: 1,
      icon: "/ui/1.svg",
      title: "On - Page SEO",
      description:
        "We optimize your website in every way to boost user experience and SEO. This involves improving your website's structure, writing relevant content, and using meta tags, header tags, and keywords.",
    },
    {
      id: 2,
      icon: "/ui/2.svg",
      title: "Off - Page SEO",
      description:
        "We build high-quality backlinks and boost your website's authority. Our team uses influencer outreach, guest blogging, and social media to boost your website's credibility.",
    },
    {
      id: 3,
      icon: "/ui/3.svg",
      title: "Technical SEO",
      description:
        "We ensure your website is technically sound, has HTTPS encryption, loads swiftly, is mobile-friendly, and is appropriately indexed. Technical issues that affect search engine results are fixed by rigorous examinations.",
    },
    {
      id: 4,
      icon: "/ui/4.svg",
      title: "Local SEO",
      description:
        "Our local SEO services boost your company's visibility on Google Maps and local search results. We monitor local listings, collect comments, and improve your Google My Business profile to boost local visibility.",
    },
    {
      id: 5,
      icon: "/ui/5.svg",
      title: "SEO Analytics & Reporting",
      description:
        "Comprehensive SEO reports track visitor increase, keyword ranks, and conversion rates. Our ongoing analysis will disclose and optimize your SEO investment.",
    },
  ];

  return (
    <div className="mt-24 flex flex-col justify-center items-center overflow-x-hidden">
      {/* hero section */}
      <Hero
        title="SEO:  Drive Traffic, Boost Rankings, and Achieve Your Business Goals"
        subTitle="Unlock the Power of SEO to Increase Visibility, Attract More Leads, and Grow Your Business Online."
        description={
          "Our expertise at Pantheon Digital is providing excellent SEO services that make sure your company is visible in search engine results. Our customized SEO tactics are made to boost conversion rates, increase organic traffic, and improve your online visibility."
        }
        buttonTitle={"Contact Us"}
        imageSrc={"/SEOBannerImage.webp"}
        imageStyle="w-full sm:w-[60%] h-full"
      />

      {/* what we provide for web dev */}
      <div className="w-screen flex flex-col justify-center items-center bg-black rounded-b-4xl shadow-[0_40px_100px_rgba(236,19,19,0.1)] translate-y-10 z-10">
        <WeProvide
          title={"What We Offer in SEO & SMO"}
          subtitle={"What we provide"}
          cardsData={cardsData}
        />
      </div>

      {/* Technologies */}
      <Technology
        heading=""
        icons={[]}
        title="Get Found Faster. Rank Higher. Grow Smarter."
        subtitle="Benefits of SEO Optimization"
        href=""
        list={[
          "Increased Organic Traffic",
          "Improved User Experience",
          "Higher Conversion Rates",
          "Long-Term ROI",
          "Enhanced Brand Visibility",
          "Credibility and Trust",
          "Better Insights and Analytics.",
          "Competitive Advantage",
        ]}
      />

      {/* Our process */}
      <Process
        heading="Our Proven SEO & SMO Process"
        process={[
          {
            id: 1,
            title: "SEO Audit & Analysis",
            description:
              "We undertake a thorough SEO review of your website to identify areas for improvement. Looking for technical issues like broken links, slow loading times, and keyword usage will degrade your results. We evaluate your competitors' practices to uncover development opportunities. Based on the assessment, we design a comprehensive SEO plan for you. All SEO is based on this analysis. Now that we have a blueprint, we can optimize.",
            image: "/seo/Process/1.webp",
          },
          {
            id: 2,
            title: "Keyword Research & Strategy",
            description:
              "We conduct in-depth keyword research to identify high-volume, intent-driven short- and long-tail keywords. This ensures your content aligns with user searches, boosts visibility, and drives qualified traffic and conversions.",
            image: "/seo/Process/2.webp",
          },
          {
            id: 3,
            title: "SEO Audit & Analysis",
            description:
              "We undertake a thorough SEO review of your website to identify areas for improvement. Looking for technical issues like broken links, slow loading times, and keyword usage will degrade your results. We evaluate your competitors' practices to uncover development opportunities. Based on the assessment, we design a comprehensive SEO plan for you. All SEO is based on this analysis. Now that we have a blueprint, we can optimize.",
            image: "/seo/Process/3.webp",
          },
          {
            id: 4,
            title: "Keyword Research & Strategy",
            description:
              "We conduct in-depth keyword research to identify high-volume, intent-driven short- and long-tail keywords. This ensures your content aligns with user searches, boosts visibility, and drives qualified traffic and conversions.",
            image: "/seo/Process/4.webp",
          },
          {
            id: 5,
            title: "SEO Audit & Analysis",
            description:
              "We undertake a thorough SEO review of your website to identify areas for improvement. Looking for technical issues like broken links, slow loading times, and keyword usage will degrade your results. We evaluate your competitors' practices to uncover development opportunities. Based on the assessment, we design a comprehensive SEO plan for you. All SEO is based on this analysis. Now that we have a blueprint, we can optimize.",
            image: "/seo/Process/5.webp",
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
          ques="What’s the difference between SEO and SMO?"
          ans="SSEO (Search Engine Optimization) increases your website’s ranking on search engines, while SMO (Social Media Optimization) boosts your brand’s presence on social platforms."
        />
        <FaqItem
          ques="How long does it take to see SEO results?"
          ans="Typically, it takes 3-6 months to notice significant improvements."
        />
        <FaqItem
          ques="Do you provide on-page and off-page SEO?"
          ans="Yes, we cover both aspects to ensure comprehensive SEO growth."
        />
        <FaqItem
          ques="Can you improve my website’s ranking for specific keywords?"
          ans="We provide targeted keyword strategies to rank your business for relevant searches."
        />
        <FaqItem
          ques="Is SMO helpful for small businesses?"
          ans="Absolutely, SMO increases brand awareness, engagement, and organic reach."
        />
      </div>
    </div>
  );
};

export default page;
