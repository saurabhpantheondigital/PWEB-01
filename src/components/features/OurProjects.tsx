import ProjectCard from "../ui/ProjectCard";
import Link from "next/link";

const OurProject = () => {
  return (
    <div className="w-full md:w-[80%] mt-32 md:mt-24 relative ">
      <div className="w-[90%] mx-auto">
        <h4 className="font-avenir-medium text-xl opacity-60 text-white text-center">
          Our best projects
        </h4>
        <h1 className="font-geometric font-bold text-4xl text-white text-center mt-4">
          We delivered best solution
        </h1>
      </div>
      {/* cards for reason to choose us */}
      <div className=" px-7 w-full h-auto flex overflow-x-scroll md:overflow-x-hidden md:grid md:auto-cols-fr md:grid-cols-2 gap-6 md:gap-10 mt-12">
        <ProjectCard
          src="/Project1.png"
          title="Mobile Application"
          subtitle="Loading Walla"
        />
        <ProjectCard
          src="/Project2a.png"
          title="Software Solution"
          subtitle="ZFour HRMS Software"
        />
        <div className="absolute w-15 h-15 md:w-30 md:h-30  rounded-full bg-white md:top-[50%] md:left-[50%] -top-20 left-[75%] z-20 md:-translate-x-[50%] -rotate-20 transition-all hover:scale-110">
          <Link
            href="/Projects/"
            className="w-full h-full flex items-center justify-center"
          >
            <div className="border-2 border-red-500 absolute p-8 md:p-16 rounded-full custom-ping " />
            <div className="border-2 border-red-500 absolute p-8 md:p-16 rounded-full custom-ping custom-delay-1" />
            <div className="border-2 border-red-500 absolute p-8 md:p-16 rounded-full custom-ping custom-delay-2" />

            <span className="text-black text-sm md:text-2xl font-bold ">
              Projects
            </span>
          </Link>
        </div>
        <ProjectCard
          src="/Project3.png"
          title="Marketing & Branding"
          subtitle="Social Post, logo, ppc & more"
        />
        <ProjectCard
          src="/Project4a.png"
          title="Website Development"
          subtitle="Loading Walla website"
        />
      </div>
    </div>
  );
};

export default OurProject;
