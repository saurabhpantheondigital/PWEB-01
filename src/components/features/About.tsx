"use client";

import { useEffect, useState } from "react";
import PrimaryButton from "../ui/PrimaryButton";
import Image from "next/image";

const About = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  useEffect(() => {
    if (isPopUpOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isPopUpOpen]);

  return (
    <>
      {/* video pop up */}
      <div
        className={`fixed left-[50%] top-[50%] translate-[-50%]  bg-[#00000080] duration-300  ${
          isPopUpOpen
            ? "opacity-100 z-[99] w-screen h-screen"
            : "opacity-0 w-0 h-0 -z-10 "
        }`}
      >
        <button
          className="w-10 h-10 rounded-full absolute bg-white top-5 right-13 z-[100] border border-red-800 hover:scale-110 duration-300 cursor-pointer"
          onClick={() => setIsPopUpOpen(false)}
        >
          <Image
            src="/crossIcon.svg"
            alt="cross icon"
            width={0}
            height={0}
            className="bg-red-500 w-full h-full rounded-full"
          />
        </button>
        {/* <div
          className={`absolute w-[90%]  rounded-3xl h-auto sm:h-[90%] left-[50%] top-[50%] translate-[-50%] bg-[#d8d8d8]`}
        > */}
        {isPopUpOpen && (
          <iframe
            width="80%"
            height="80%"
            src="https://www.youtube.com/embed/t4L__BB_H4k?autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute left-[50%] top-[50%] -translate-[50%] rounded-3xl"
          />
        )}
        {/* </div> */}
      </div>
      {/* video pop up close */}

      <div className="w-screen mask-t-from-92% sm:mask-t-from-80% relative flex flex-col items-center justify-center h-auto bg-gradient-to-b mt-0 from-[#202020] via-[#202020] to-[#86868600] z-10 pt-8 md:pt-24">
        <div className="flex items-center flex-col md:flex-row md:mx-40 mt-44 md:mt-24 w-[80vw] gap-8">
          {/* left side */}
          <div className="md:w-[50%] w-full md:flex flex-col justify-center text-center md:text-left">
            <h4 className="text-sm md:text-xl font-avenir-medium  text-white/50">
              About Us
            </h4>
            <h1 className="font-geometric text-white text-xl md:text-4xl font-extrabold mt-2">
              Nurturing Tomorrow: Crafting Digital Journeys with Passion
            </h1>
            <p className="font-avenir-medium text-white mt-8 md:text-xl leading-6 md:leading-9">
              Welcome to Pantheon Digital, where innovation meets excellence. As
              a leading player in the digital landscape, we specialize in
              crafting transformative solutions that empower businesses to
              thrive in the modern era.
            </p>

            <div className=" hidden md:flex flex-row-reverse md:flex-row items-center justify-evenly md:justify-normal w-full mt-12 gap-4">
              <PrimaryButton
                label={"Get in touch"}
                href={"/Contact_Us"}
                className="rounded-lg"
              />
              <PrimaryButton
                label="About Us"
                href={"/About"}
                type="red-outline"
              />
            </div>
          </div>

          {/* right side */}
          <div className=" md:w-[50%] md:h-[500px] w-full h-ful mt-12 md:mt-0 flex justify-end">
            <button
              onClick={() => setIsPopUpOpen(true)}
              className="absolute flex items-center justify-center 
             md:left-[60%] md:bottom-[55%] bottom-[85.5%] 
             w-16 h-16 md:w-20 md:h-20
             cursor-pointer transition-all hover:scale-110"
            >
              <div className="border-2 border-red-500 absolute p-8 sm:p-10 rounded-full custom-ping" />
              <div className="border-2 border-red-500 absolute p-8 sm:p-10 rounded-full custom-ping custom-delay-1" />
              <div className="border-2 border-red-500 absolute p-8 sm:p-10 rounded-full custom-ping custom-delay-2" />
              <Image
                src="/YoutubeLogo.svg"
                alt="Youtube logo"
                fill
                className="w-full h-full object-cover"
              />
            </button>
            <Image
              src="/AboutUsContentImage.png"
              alt="home page vertical image"
              width="450"
              height="286"
              className="object-contain"
            />
          </div>
        </div>

        <div className=" md:hidden flex flex-row-reverse md:flex-row items-center justify-evenly md:justify-normal w-full mt-12 gap-4">
          <PrimaryButton
            label={"Get in touch"}
            href={"/Contact_Us"}
            className="rounded-lg"
          />
          <PrimaryButton label="About Us" href={"/About"} type="red-outline" />
        </div>
      </div>
    </>
  );
};

export default About;
