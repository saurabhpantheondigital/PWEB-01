"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import GetInTouch from "@/components/features/GetInTouch";
import Testimonials from "@/components/features/Testimonials";
import AboutNumerics from "@/components/ui/AboutNumerics";
import Clients from "@/components/features/Clients";
import About from "@/components/features/About";
import FaqItem from "@/components/features/FaqItem";

const Page = () => {
  const projects = [
    // type 1: all
    // type 2: website
    // type 3: application
    // type 4: software
    // type 5: ui/ux
    // type 6: designing
    // type 7: Ads
    // type 8: marketing
    {
      id: 1,
      type: 2,
      title: "Loading Walla",
      category: "Website Development",
      img: "/projects/1.svg",
    },
    {
      id: 2,
      type: 3,
      title: "Loading Walla",
      category: "Application Development",
      img: "/projects/2.svg",
    },
    {
      id: 3,
      type: 2,
      title: "Utility Choice",
      category: "Website Development",
      img: "/projects/3.svg",
    },
    {
      id: 4,
      type: 4,
      title: "Scale CRMS",
      category: "Software Development",
      img: "/projects/4.svg",
    },
    {
      id: 5,
      type: 4,
      title: "Employee Track CRMS",
      category: "Software Development",
      img: "/projects/5.svg",
    },
    {
      id: 6,
      type: 4,
      title: "ZFour HRMS",
      category: "Software Development",
      img: "/projects/6.svg",
    },
    {
      id: 7,
      type: 2,
      title: "Britannia Nutrition",
      category: "Website Development",
      img: "/projects/7.svg",
    },
    {
      id: 8,
      type: 2,
      title: "Power Market",
      category: "Website Development",
      img: "/projects/8.svg",
    },
    {
      id: 9,
      type: 5,
      title: "Thought Power",
      category: "UI/UX",
      img: "/projects/9.svg",
    },
    {
      id: 10,
      type: 6,
      title: "Thought Power",
      category: "Logo Designing",
      img: "/projects/10.svg",
    },
    {
      id: 11,
      type: 6,
      title: "Prashidhi",
      category: "Logo Designing",
      img: "/projects/11.svg",
    },
    {
      id: 12,
      type: 2,
      title: "Connecting VoIP",
      category: "Website Development",
      img: "/projects/12.svg",
    },
    {
      id: 13,
      type: 2,
      title: "Dsmart Services",
      category: "Website Development",
      img: "/projects/13.svg",
    },
    {
      id: 14,
      type: 2,
      title: "Select My College",
      category: "Website Development",
      img: "/projects/14.svg",
    },
    {
      id: 15,
      type: 6,
      title: "Select My College",
      category: "Logo Designing",
      img: "/projects/15.svg",
    },
    {
      id: 16,
      type: 6,
      title: "Power Market",
      category: "Logo Designing",
      img: "/projects/16.svg",
    },
    {
      id: 17,
      type: 6,
      title: "Utility Choice",
      category: "Logo Designing",
      img: "/projects/17.svg",
    },
    {
      id: 18,
      type: 6,
      title: "Loading Walla",
      category: "Logo Designing",
      img: "/projects/18.svg",
    },
    {
      id: 19,
      type: 5,
      title: "GoHotels UI",
      category: "UI/UX",
      img: "/projects/19.svg",
    },
    {
      id: 20,
      type: 2,
      title: "ZFour HRMS",
      category: "Website Development",
      img: "/projects/20.svg",
    },
  ];

  const list = [
    { id: 1, type: "All" },
    { id: 2, type: "Website" },
    { id: 3, type: "Application" },
    { id: 4, type: "Software" },
    { id: 5, type: "UI/UX" },
    { id: 6, type: "Designing" },
    { id: 7, type: "Marketing" },
  ];

  const [type, setType] = useState(1);
  const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);
  const [popUpImg, setPopUpImg] = useState<string>("/Logo.svg");

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
    <div className="w-full h-full flex flex-col items-center overflow-x-hidden">
      {/* image pop up */}
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
        <div
          className={`absolute w-[90%] p-8 rounded-3xl h-[90%] left-[50%] top-[50%] translate-[-50%] bg-[#d8d8d8]`}
        >
          <Image
            src={popUpImg}
            alt={popUpImg}
            width="0"
            height="0"
            className="w-full h-full"
          />
        </div>
      </div>
      {/* image pop up close */}

      {/* project section starts */}
      <div className="bg-[#212121] w-[90%] sm:w-[80%] h-full sm:mt-24 mt-32 flex flex-col items-center rounded-4xl sm:p-8 p-4">
        <h1 className="font-geometric font-bold text-white text-xl sm:text-5xl sm:mt-12 mt-4">
          Works & Projects
        </h1>
        <p className="sm:w-[70%] w-full font-avenir-medium  text-white text-sm sm:text-2xl text-center mt-4 sm:mt-12">
          Check out some of my design projects, meticulously crafted with love
          and dedication, each one reflecting the passion and soul I poured into
          every detail.
        </p>

        {/* all types */}
        <div className="flex w-full mt-12 sm:mt-24 pb-2 sm:pb-4 lg:overflow-hidden overflow-x-scroll macos-scrollbar">
          {list.map((item) => (
            <button
              key={item.id}
              className="ml-6 "
              onClick={() => setType(item.id)}
            >
              <span
                className={`font-avenir-demi sm:text-xl text-xs cursor-pointer duration-300 hover:underline underline-offset-6 ${
                  type === item.id ? "text-[#FF4D4D] underline" : "text-white"
                } `}
              >
                {item.type}
              </span>
            </button>
          ))}
        </div>
        {/* main body for projects */}
        <div className="w-full mt-4 sm:mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 place-items-center">
          {type === 1
            ? projects.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setIsPopUpOpen(true);
                    setPopUpImg(item.img);
                  }}
                  className="max-w-[282px] cursor-pointer min-w-[200px] h-[241px] w-full flex flex-col rounded-2xl group overflow-hidden"
                >
                  {/* Image Section */}
                  <div className="relative w-full h-full min-h-[60%] bg-[#D9D9D9] overflow-hidden p-6 pb-0">
                    {/* Image */}
                    <Image
                      src={item.img}
                      alt=""
                      width={0}
                      height={0}
                      className="w-full h-full min-w-full min-h-[60%] group-hover:scale-110 duration-300 object-contain"
                    />

                    {/* Backdrop on hover */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    {/* Arrow Button */}
                    <div className="absolute top-[50%] left-[50%] translate-[-50%] z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPopUpOpen(true);
                          setPopUpImg(item.img);
                        }}
                        className="cursor-pointer"
                      >
                        <Image
                          src="/arrow-up.svg"
                          alt="arrow right"
                          width="0"
                          height="0"
                          className="w-[40] h-auto rotate-30 "
                        />
                      </button>
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className="w-full flex flex-col bg-black p-2 sm:p-4">
                    <h4 className="text-white font-avenir-demi text-sm sm:text-xl">
                      {item.title}
                    </h4>
                    <p className="text-[#a8a8a8] font-avenir-light sm:text-sm text-xs">
                      {item.category}
                    </p>
                  </div>
                </div>
              ))
            : projects
                .filter((item) => item.type === type)
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setIsPopUpOpen(true);
                      setPopUpImg(item.img);
                    }}
                    className="max-w-[282px] cursor-pointer min-w-[200px] h-[241px] w-full flex flex-col rounded-2xl group overflow-hidden"
                  >
                    {/* Image Section */}
                    <div className="relative w-full h-full min-h-[60%] bg-[#D9D9D9] overflow-hidden p-6 pb-0">
                      {/* Image */}
                      <Image
                        src={item.img}
                        alt=""
                        width={0}
                        height={0}
                        className="w-full h-full min-w-full min-h-[60%] group-hover:scale-110 duration-300 object-contain"
                      />

                      {/* Backdrop on hover */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                      {/* Yellow Arrow Button */}
                      <div className="absolute top-[50%] left-[50%] translate-[-50%] z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsPopUpOpen(true);
                            setPopUpImg(item.img);
                          }}
                          className="cursor-pointer"
                        >
                          <Image
                            src="/arrow-up.svg"
                            alt="arrow right"
                            width="0"
                            height="0"
                            className="w-[40] h-auto rotate-30 "
                          />
                        </button>
                      </div>
                    </div>

                    {/* Text Section */}
                    <div className="w-full flex flex-col bg-black p-2 sm:p-4">
                      <h4 className="text-white font-avenir-demi text-sm sm:text-xl">
                        {item.title}
                      </h4>
                      <p className="text-[#a8a8a8] font-avenir-light sm:text-sm text-xs">
                        {item.category}
                      </p>
                    </div>
                  </div>
                ))}
        </div>
      </div>
      {/* project seciton ends */}

      {/* get in touch section */}
      <GetInTouch />

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

      {/* Faq Section */}
      <div className="w-[90%] md:w-[80%] mt-12 md:mt-24">
        <h1 className="font-geometric text-lg md:text-4xl text-white text-center my-4 ">
          Frequently Asked Questions
        </h1>
        <div className=" w-[80%] md:w-[60%] border-b-1 border-white mx-auto mb-8" />
        <FaqItem
          ques="What sets Pantheon Digital apart from other digital agencies?"
          ans="Pantheon Digital builds digital ecosystems rather than just campaigns. Not only for short-term outcomes but also for long-term corporate effect, our holistic strategy integrates marketing, technology, and design."
        />
        <FaqItem
          ques="Do you run Meta Ads and Google PPC campaigns both?"
          ans="Pantheon Digital builds digital ecosystems rather than just campaigns. Not only for short-term outcomes but also for long-term corporate effect, our holistic strategy integrates marketing, technology, and design."
        />
        <FaqItem
          ques="How does your SMO and SEO approach help my company?"
          ans="Pantheon Digital builds digital ecosystems rather than just campaigns. Not only for short-term outcomes but also for long-term corporate effect, our holistic strategy integrates marketing, technology, and design."
        />
        <FaqItem
          ques="Will Pantheon Digital enable me to create and keep my app or website?"
          ans="Pantheon Digital builds digital ecosystems rather than just campaigns. Not only for short-term outcomes but also for long-term corporate effect, our holistic strategy integrates marketing, technology, and design."
        />
      </div>
    </div>
  );
};

export default Page;
