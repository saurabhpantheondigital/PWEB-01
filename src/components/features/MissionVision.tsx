import Image from "next/image";
import AboutNumerics from "../ui/AboutNumerics";

const MissionVision = () => {
  return (
    <>
      {/* heading */}
      <h1 className="font-geometric font-bold text-xl md:text-4xl  text-white mt-12 sm:mt-24">
        Our Mission & Vision
      </h1>

      {/* Mission */}
      <div className="w-[90%] md:w-[80%] h-auto px-7 pb-7 py-7  flex flex-col md:flex-row mt-12 bg-[#202020] rounded-3xl gap-8 md:gap-16">
        {/* left side =========================== */}
        <div className="md:w-[40%] w-full h-auto flex flex-col gap-8 md:gap-24 justify-between">
          <div className="flex gap-4 items-center justify-center md:justify-normal">
            {/* image and heading */}
            <Image
              src="/OurMission.svg"
              alt="our mission goal image"
              width="0"
              height="0"
              className="w-[42] h-[37] md:w-[84] md:h-[74]"
            />
            <h1 className="font-avenir-bold font-bold text-lg md:text-3xl text-white">
              Our <br className="md:block hidden" /> Mission
            </h1>
          </div>

          {/* image */}
          <Image
            src="/AboutDescImage1.png"
            alt="mission image"
            width="297"
            height="466"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* right side =========================== */}
        <ul className="w-full py-1 md:p-5  flex flex-col justify-between list-image-[url(/CheckList.svg)] list-inside md:list-outside gap-4 md:gap-12">
          <li>
            <p className="font-avenir-medium text-sm md:text-xl ml-4 text-white -translate-y-1 ">
              <span className="font-bold "> Solutions That Work:</span> We focus
              on delivering high-quality digital solutions that are thoughtfully
              tailored to meet your unique business goals.
            </p>
          </li>

          <li>
            <p className="font-avenir-medium text-sm md:text-xl ml-4 text-white -translate-y-1 ">
              <span className="font-bold "> Smart, Scalable & Affordable:</span>{" "}
              Our services are designed to grow with you—cost-effective without
              cutting corners on quality or performance.
            </p>
          </li>

          <li>
            <p className="font-avenir-medium text-sm md:text-xl ml-4 text-white -translate-y-1 ">
              <span className="font-bold "> You First, Always:</span> We take
              care of the digital side so you can focus on what you do
              best—running your business. Your success is our priority.
            </p>
          </li>

          <li>
            <p className="font-avenir-medium text-sm md:text-xl ml-4 text-white -translate-y-1 ">
              <span className="font-bold ">Built on Trust:</span> We’re not just
              here for a project; we’re here for the long run. Our goal is to
              build meaningful, long-term partnerships that evolve with your
              needs.
            </p>
          </li>

          <li>
            <p className="font-avenir-medium text-sm md:text-xl ml-4 text-white -translate-y-1 ">
              <span className="font-bold "> Honest & Clear Communication:</span>{" "}
              We believe in doing things the right way—with transparency,
              integrity, and open communication every step of the journey.
            </p>
          </li>
        </ul>
      </div>

      {/* Vision */}
      <div className="w-[90%] md:w-[80%] h-auto px-7 pb-7 py-7 flex flex-col md:flex-row mt-12 bg-[#202020] rounded-3xl gap-8 md:gap-16">
        {/* left side =========================== */}
        <div className="md:w-[40%] w-full h-auto flex flex-col gap-8 md:gap-16 justify-between">
          <div className="flex gap-4 items-center justify-center md:justify-normal">
            {/* image and heading */}
            <Image
              src="/OurVision.svg"
              alt="our vision goal image"
              width="49"
              height="62"
              className="w-[25] h-[31] md:w-[49] md:h-[62]"
            />
            <h1 className="font-avenir-bold font-bold  text-xl md:text-3xl text-white">
              Our <br className="md:block hidden" /> Vision
            </h1>
          </div>

          {/* image */}
          <Image
            src="/VisionImage.png"
            alt="mission image"
            width="49"
            height="62"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* right side =========================== */}
        <ul className="w-full md:p-5 flex flex-col justify-between gap-4 md:gap-12">
          <li>
            <p className="font-avenir-light text-sm md:text-xl md:ml-4  text-white ">
              To harness the{" "}
              <span className="font-extrabold">
                power of AI and emerging technologies
              </span>{" "}
              to redefine how brands engage, innovate, and scale in the digital
              world." . To leverage the transformative potential of AI and
              cutting-edge technologies to revolutionize brand engagement,
              innovation, and scalability in the digital era.
            </p>
          </li>

          <li>
            <p className="font-avenir-light text-sm md:text-xl md:ml-4  text-white ">
              By integrating intelligent automation, data-driven insights, and
              advanced digital solutions, we empower brands to create meaningful
              customer interactions, streamline operations, and unlock new
              growth opportunities.
            </p>
          </li>

          <li>
            <p className="font-avenir-light text-sm md:text-xl md:ml-4  text-white ">
              As the digital landscape evolves, we remain agile and
              forward-thinking, ensuring that businesses not only keep pace with
              change but stay ahead of the curve. 
            </p>
          </li>
        </ul>
      </div>

      {/* about information in numerical */}
      <AboutNumerics />
    </>
  );
};

export default MissionVision;
