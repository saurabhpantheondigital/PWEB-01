"use client";
import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isEprPage = pathname?.startsWith("/Services/epr");
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobileDropDown, setIsMobileDropDown] = useState<boolean>(false);
  const [mobileOpenCategory, setMobileOpenCategory] = useState<
    "digital" | "graphic" | "tech" | null
  >(null);

  const toggleServices = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const toggleMobileServices = () => {
    setIsMobileDropDown(!isMobileDropDown);
  };

  const toggleMobileCategory = (cat: "digital" | "graphic" | "tech") => {
    setMobileOpenCategory((c) => (c === cat ? null : cat));
  };

  useEffect(() => {
    if (!isMobileDropDown) setMobileOpenCategory(null);
  }, [isMobileDropDown]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeDropDownMenu = () => {
    setIsDropDownOpen(false);
  };

  useEffect(() => {
    if (isDropDownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isDropDownOpen]);

  return (
    <>
      {/* Desktop Header */}
      <div
        className={`hidden lg:block sticky top-0 z-50 ${isEprPage ? "mt-0 shadow-[0px_4px_20px_white] bg-white" : "mt-10 shadow-xl shadow-black "}`}
      >
        <header
          className={`${isEprPage ? "bg-white" : "bg-black"} flex flex-row p-4 items-center justify-between px-0 md:px-16`}
        >
          <Link href="/">
            <Image
              priority
              src="/Logo.svg"
              width="0"
              height="0"
              className={`w-[230px] h-auto transition-all duration-500 ${isEprPage ? "brightness-0" : ""}`}
              alt="Pantheon Digitals Logo"
            />
          </Link>

          <div className="flex items-center gap-20 ml-auto mr-auto">
            {/* button list */}
            <div className="flex flex-row gap-12 items-center">
              <Link
                href="/Projects/"
                className={`font-avenir-bold text-sm ${isEprPage ? "text-[#0A1628] hover:text-[#0D6E56]" : "text-white hover:text-white/70"} transition-colors uppercase tracking-widest ${
                  pathname === "/Projects"
                    ? "underline underline-offset-8 decoration-cyan-500"
                    : ""
                }`}
              >
                Projects
              </Link>
              <Link
                href="/About/"
                onClick={closeDropDownMenu}
                className={`font-avenir-bold text-sm ${isEprPage ? "text-[#0A1628] hover:text-[#0D6E56]" : "text-white hover:text-white/70"} transition-colors uppercase tracking-widest ${
                  pathname === "/About"
                    ? "underline underline-offset-8 decoration-cyan-500"
                    : ""
                }`}
              >
                About Us
              </Link>
              <button
                onClick={toggleServices}
                className={`font-avenir-bold text-sm ${isEprPage ? "text-[#0A1628] hover:text-[#0D6E56]" : "text-white hover:text-white/70"} transition-colors flex items-center gap-1 uppercase tracking-widest ${
                  isDropDownOpen
                    ? isEprPage
                      ? "text-[#0D6E56]"
                      : "text-white/70"
                    : ""
                }`}
              >
                Services
              </button>
              <Link
                href="https://blogs.pantheondigitals.com/"
                target="_blank"
                onClick={closeDropDownMenu}
                className={`font-avenir-bold text-sm ${isEprPage ? "text-[#0A1628] hover:text-[#0D6E56]" : "text-white hover:text-white/70"} transition-colors uppercase tracking-widest ${
                  pathname === "/Blogs"
                    ? "underline underline-offset-8 decoration-cyan-500"
                    : ""
                }`}
              >
                Blogs
              </Link>
            </div>
          </div>

          <Link
            href="/Ai"
            className={`group relative flex items-center cursor-pointer ${isEprPage ? "" : "transition-all duration-500 transform hover:scale-105 active:scale-95"}`}
          >
            {/* Premium Outer Glow - matching screenshot */}
            {!isEprPage && (
              <div className="absolute -inset-[3px] bg-cyan-500/50 rounded-full blur-[8px] opacity-100 animate-pulse transition-opacity duration-300"></div>
            )}

            <div
              className={`relative flex items-center gap-3 px-6 py-2 rounded-full ${isEprPage ? "bg-white border-[#0A1628]/20 shadow-none" : "bg-black border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]"} border overflow-hidden ${isEprPage ? "" : "transition-all duration-500"}`}
            >
              <span
                className={`text-sm font-avenir-heavy ${isEprPage ? "text-[#0A1628]" : "text-white"} tracking-wide`}
              >
                Ai Tools
              </span>
            </div>
          </Link>
        </header>

        {!isEprPage && (
          <Link
            href="/Contact_Us"
            className="fixed bottom-8 right-13 z-[100] flex items-center gap-2 bg-[#F61313] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 group"
          >
            <Image
              src="/Contact-Us.svg"
              alt="phone"
              width={18}
              height={18}
              className=" group-hover:rotate-12 transition-transform"
            />
            <span className="font-avenir-heavy text-sm">Contact Us</span>
          </Link>
        )}

        {/* dropdown body -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-= */}
        <button
          onClick={() => setIsDropDownOpen(false)}
          className={`${
            isDropDownOpen ? "block" : "hidden"
          } absolute flex w-screen h-screen justify-center duration-1000 bg-[#00000095] z-[51]`}
        >
          <div className="relative w-full h-fit flex justify-center">
            <div className="-top-[2px] -bottom-[2px] w-full h-[calc(100%+4px)] absolute z-[-1] rounded-3xl bg-[linear-gradient(to_right,_#FF0000,_#0095FF)]" />

            <div className="w-[99.8%] h-fit min-h-[40vh] bg-neutral-800 p-6 rounded-3xl text-center shadow-2xl shadow-black/50">
            {/* category */}
            <div className="grid grid-cols-5 gap-6">
              <div className="col-span-2 border-r border-white p-6 flex flex-col justify-between">
                <p className="font-avenir-medium text-white text-sm text-left">
                  Welcome to Pantheon Digital, where innovation meets
                  excellence. As a leading player in the digital landscape, we
                  specialize in crafting transformative solutions that empower
                  businesses to thrive in the modern era.
                </p>

                {/* social part */}
                {/* social icons */}
                <div className="w-full flex items-center gap-8 mt-4">
                  <Link
                    className="w-[4%] h-auto hover:scale-120 duration-300"
                    href="https://www.facebook.com/people/Pantheon-Digitals/100090577747427/#"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/facebook.svg"
                      alt="facebook icon"
                      width="10"
                      height="10"
                      className="w-full h-full"
                    />
                  </Link>
                  <Link
                    className="w-[4%] h-auto hover:scale-120 duration-300"
                    href="https://x.com/PantheonDigi"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/x.svg"
                      alt="x icon"
                      width="10"
                      height="10"
                      className="w-full h-full"
                    />
                  </Link>
                  <Link
                    className="w-[4%] h-auto hover:scale-120 duration-300"
                    href="https://www.instagram.com/pantheondigitals/"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/insta.svg"
                      alt="instagram icon"
                      width="10"
                      height="10"
                      className="w-full h-full"
                    />
                  </Link>
                  <Link
                    className="w-[4%] h-auto hover:scale-120 duration-300"
                    href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH0bqQBFX6_kAAAAZgwY1kQJ_M9XEiW2MgEn9JGXzKTXud2Y708iYiT2Mjj6zTHnUYndWoWgeHoi2QqDr1vYMG3a6d3hIcV5OOcdhKWInnOeyIh0J58gE15Ws1MwNTcsg57jWg=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fpantheon-digitals%2F"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/linkedin.svg"
                      alt="linkedin icon"
                      width="10"
                      height="10"
                      className="w-full h-full"
                    />
                  </Link>
                  <Link
                    className="w-[4%] h-auto hover:scale-120 duration-300"
                    href="https://www.youtube.com/@pantheondigital"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/youtube.svg"
                      alt="youtube icon"
                      width="10"
                      height="10"
                      className="w-full h-full"
                    />
                  </Link>
                  <Link
                    className="w-[4%] h-auto hover:scale-120 duration-300"
                    href="https://in.pinterest.com/pantheondigitals/"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/pinterest.svg"
                      alt="pinterest icon"
                      width="10"
                      height="10"
                      className="w-full h-full"
                    />
                  </Link>
                </div>

                {/* certified */}
                <div>
                  <div className="flex flex-row w-full gap-8 mt-4">
                    <Image
                      src="/social-icons/iso1.svg"
                      alt="iso 1"
                      width="10"
                      height="10"
                      className="w-[10%] h-auto"
                    />
                    <Image
                      src="/social-icons/iso2.svg"
                      alt="iso 2"
                      width="10"
                      height="10"
                      className="w-[10%] h-auto"
                    />
                    <Image
                      src="/social-icons/aicpa.svg"
                      alt="aicpa"
                      width="10"
                      height="10"
                      className="w-[10%] h-auto"
                    />
                  </div>
                </div>
                {/* social part */}
              </div>

              {/* first service start */}
              <div className=" font-avenir-regular text-white text-sm font-bold text-left">
                <h1 className="font-avenir-bold text-white text-lg font-bold text-left">
                  Digital Marketing
                </h1>
                <div className="my-2 border-[0.5px] border-white"></div>
                <div className="text-left mt-4 h-auto styled-list">
                  {[
                    {
                      href: "/Services/social-management",
                      label: "Social Media Management",
                    },
                    { href: "/Services/google-ppc", label: "Google PPC" },
                    { href: "/Services/meta-ads", label: "Meta Ads Campaign" },
                    { href: "/Services/seo", label: "SEO & SMO" },
                    {
                      href: "/Services/posts-and-reels",
                      label: "Posts & Reels",
                    },
                    {
                      href: "/Services/branding-and-ads",
                      label: "Branding & Advertising",
                    },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      onClick={() => setIsDropDownOpen(false)}
                      href={link.href}
                      className={`flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group ${
                        pathname === link.href ? "bg-black/25 rounded-md" : ""
                      }`}
                    >
                      <span className="font-avenir-medium text-sm text-white">
                        {link.label}
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-auto h-[10px] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
                      />
                    </Link>
                  ))}
                </div>
              </div>
              {/* first service close */}

              {/* second service start */}
              <div className=" ">
                <h1 className="font-avenir-bold font-bold text-lg text-left text-white">
                  Graphic Designing
                </h1>
                <div className="my-2 border-[0.5px] border-white"></div>
                <div className="text-left mt-4 h-auto styled-list">
                  {[
                    { href: "/Services/ui-ux", label: "UX/UI Design" },
                    {
                      href: "/Services/brochure-and-ppt",
                      label: "Brochure & PPT",
                    },
                    { href: "/Services/logo-designing", label: "Logo Design" },
                    {
                      href: "/Services/post-designing",
                      label: "Posts & Banner",
                    },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      onClick={() => setIsDropDownOpen(false)}
                      href={link.href}
                      className={`flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group ${
                        pathname === link.href ? "bg-black/25 rounded-md" : ""
                      }`}
                    >
                      <span className="font-avenir-medium text-sm text-white">
                        {link.label}
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-auto h-[10px] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
                      />
                    </Link>
                  ))}
                </div>
              </div>
              {/* second service close */}

              {/* third service start */}
              <div className=" ">
                <h1 className="font-avenir-bold font-bold text-lg text-left text-white">
                  Tech & Software
                </h1>
                <div className="my-2 border-[0.5px] border-white"></div>
                <div className="text-left mt-4 h-auto styled-list">
                  {[
                    {
                      href: "https://www.zfour.in/",
                      label: "HRMS Software",
                      target: "_blank",
                    },
                    { href: "/Services/crm", label: "CRM Software" },
                    {
                      href: "/Services/website-development",
                      label: "Website Development",
                    },
                    {
                      href: "/Services/application-development",
                      label: "Application Development",
                    },
                    {
                      href: "/Services/software-development",
                      label: "Software Development",
                    },
                    {
                      href: "/Services/cloud-and-devops",
                      label: "Cloud & DevOps Services",
                    },
                    {
                      href: "/Services/epr",
                      label: "EPR Software",
                    },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      onClick={() => setIsDropDownOpen(false)}
                      href={link.href}
                      target={link.target || "_self"}
                      className={`flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group ${
                        pathname === link.href ? "bg-black/25 rounded-md" : ""
                      }`}
                    >
                      <span className="font-avenir-medium text-sm text-white">
                        {link.label}
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-auto h-[10px] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {/* third service close */}
            </div>
          </div>
        </div>
      </button>

        {isEprPage ? (
          <div
            className="pointer-events-none absolute top-[100%] left-0 w-full h-5 
              [mask-image:linear-gradient(to_bottom,white,transparent)] 
              backdrop-blur-lg bg-white"
          ></div>
        ) : (
          ""
        )}
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed w-full top-0 z-[100]">
        <header
          className={`${isEprPage ? "bg-white shadow-sm" : "bg-black shadow-black shadow-xl"} flex flex-row p-4 items-center justify-between transition-all duration-500`}
        >
          <Link href="/">
            <Image
              src="/Logo.svg"
              width="0"
              height="0"
              alt="Pantheon Digitals Logo"
              className={`
                w-[230px] h-auto
                duration-300
                ${isMobileMenuOpen ? "-translate-y-100" : "translate-y-0"}
                ${isEprPage ? "brightness-0" : ""}
                `}
            />
          </Link>

          <button
            onClick={toggleMobileMenu}
            className={isEprPage ? "text-[#0A1628]" : "text-white"}
          >
            <Image
              src="/MenuIcon.svg"
              width="20"
              height="20"
              className={`w-[20] h-[20] duration-300 ${
                isMobileMenuOpen ? "-translate-y-100" : "translate-y-0"
              } ${isEprPage ? "brightness-0" : ""}`}
              alt="menu icon"
            />
          </button>
        </header>

        {/* transparent background */}
        {isMobileMenuOpen && (
          <button
            onClick={closeMobileMenu}
            className="w-full h-[100dvh] bg-black/50 absolute left-0 top-0 "
          />
        )}

        <div
          className={`absolute top-0 right-0 w-[80%] h-[100dvh] min-h-0 bg-black z-[60] p-4 pt-18 md:pt-24 flex flex-col gap-4 duration-300 overflow-x-hidden overflow-y-auto overscroll-contain ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-1 -right-1"
            onClick={toggleMobileMenu}
          >
            <Image
              src="/crossIcon.svg"
              width="20"
              height="20"
              className={`w-[60] h-[60] duration-300`}
              alt="cross icon"
            />
          </button>
          {/* buttons */}
          <div className="flex flex-col gap-4 grow min-h-0">
            <PrimaryButton
              href="/About"
              onClick={closeMobileMenu}
              leftIcon="/About-Us.svg"
              type="outline"
              label="About Us"
              className="justify-normal"
            />

            <PrimaryButton
              href="/Ai"
              onClick={closeMobileMenu}
              leftIcon="/Services.svg"
              type="outline"
              label="Ai"
              className="justify-normal"
            />
            <PrimaryButton
              onClick={toggleMobileServices}
              href=""
              leftIcon="/Services.svg"
              type="outline"
              label="Services"
              rightIcon={isMobileDropDown ? "/arrow-up.svg" : "/DownArrow.svg"}
            />

            {isMobileDropDown && (
              <div className="flex w-full shrink-0 bg-black z-[60] overflow-x-hidden">
                <div className="w-full bg-black rounded-3xl flex flex-col gap-3 mt-2 pb-1">
                  {/* Digital Marketing — nested dropdown (mobile only) */}
                  <div className="rounded-3xl bg-[#2A2A2A]">
                    <button
                      type="button"
                      onClick={() => toggleMobileCategory("digital")}
                      className="w-full flex items-center justify-between gap-2 p-4 text-left"
                    >
                      <span className="font-avenir-bold text-lg text-white">
                        Digital Marketing
                      </span>
                      <Image
                        src={
                          mobileOpenCategory === "digital"
                            ? "/arrow-up.svg"
                            : "/DownArrow.svg"
                        }
                        alt=""
                        width={20}
                        height={20}
                        className="shrink-0 w-5 h-5"
                      />
                    </button>
                    {mobileOpenCategory === "digital" && (
                      <div className="px-4 pb-4 border-t border-white/20">
                        <ul className="text-left pt-3 styled-list">
                          <li>
                            <Link
                              href="/Services/social-management/"
                              onClick={closeMobileMenu}
                              className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                            >
                              <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                                Social Media Management
                              </span>
                              <Image
                                src="/ArrowRight.svg"
                                alt="arrow right"
                                width="10"
                                height="10"
                                className="w-[10%] h-[10%]"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Services/google-ppc/"
                              onClick={closeMobileMenu}
                              className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                            >
                              <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                                Google PPC
                              </span>
                              <Image
                                src="/ArrowRight.svg"
                                alt="arrow right"
                                width="10"
                                height="10"
                                className="w-[10%] h-[10%]"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Services/meta-ads/"
                              onClick={closeMobileMenu}
                              className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                            >
                              <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                                Meta Ads Campaign
                              </span>
                              <Image
                                src="/ArrowRight.svg"
                                alt="arrow right"
                                width="10"
                                height="10"
                                className="w-[10%] h-[10%]"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Services/seo/"
                              onClick={closeMobileMenu}
                              className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                            >
                              <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                                SEO & SMO
                              </span>
                              <Image
                                src="/ArrowRight.svg"
                                alt="arrow right"
                                width="10"
                                height="10"
                                className="w-[10%] h-[10%]"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Services/posts-and-reels/"
                              onClick={closeMobileMenu}
                              className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                            >
                              <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                                Posts & Reels
                              </span>
                              <Image
                                src="/ArrowRight.svg"
                                alt="arrow right"
                                width="10"
                                height="10"
                                className="w-[10%] h-[10%]"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Services/branding-and-ads/"
                              onClick={closeMobileMenu}
                              className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                            >
                              <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                                Branding & Advertising
                              </span>
                              <Image
                                src="/ArrowRight.svg"
                                alt="arrow right"
                                width="10"
                                height="10"
                                className="w-[10%] h-[10%]"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Graphic Designing */}
                  <div className="rounded-3xl bg-[#2A2A2A]">
                    <button
                      type="button"
                      onClick={() => toggleMobileCategory("graphic")}
                      className="w-full flex items-center justify-between gap-2 p-4 text-left"
                    >
                      <span className="font-avenir-bold text-lg text-white">
                        Graphic Designing
                      </span>
                      <Image
                        src={
                          mobileOpenCategory === "graphic"
                            ? "/arrow-up.svg"
                            : "/DownArrow.svg"
                        }
                        alt=""
                        width={20}
                        height={20}
                        className="shrink-0 w-5 h-5"
                      />
                    </button>
                    {mobileOpenCategory === "graphic" && (
                      <div className="px-4 pb-4 border-t border-white/20">
                        <ul className="text-left pt-3 styled-list">
                          <li>
                            <Link
                              href="/Services/ui-ux/"
                              onClick={closeMobileMenu}
                              className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                            >
                              <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                                UX/UI Design
                              </span>
                              <Image
                                src="/ArrowRight.svg"
                                alt="arrow right"
                                width="10"
                                height="10"
                                className="w-[10%] h-[10%]"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Services/brochure-and-ppt/"
                              onClick={closeMobileMenu}
                              className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                            >
                              <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                                Brochure & PPT
                              </span>
                              <Image
                                src="/ArrowRight.svg"
                                alt="arrow right"
                                width="10"
                                height="10"
                                className="w-[10%] h-[10%]"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Services/logo-designing/"
                              onClick={closeMobileMenu}
                              className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                            >
                              <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                                Logo Design
                              </span>
                              <Image
                                src="/ArrowRight.svg"
                                alt="arrow right"
                                width="10"
                                height="10"
                                className="w-[10%] h-[10%]"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Services/post-designing/"
                              onClick={closeMobileMenu}
                              className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                            >
                              <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                                Posts & Banner
                              </span>
                              <Image
                                src="/ArrowRight.svg"
                                alt="arrow right"
                                width="10"
                                height="10"
                                className="w-[10%] h-[10%]"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Tech & Software */}
                  <div className="rounded-3xl bg-[#2A2A2A]">
                    <button
                      type="button"
                      onClick={() => toggleMobileCategory("tech")}
                      className="w-full flex items-center justify-between gap-2 p-4 text-left"
                    >
                      <span className="font-avenir-bold text-lg text-white">
                        Tech & Software
                      </span>
                      <Image
                        src={
                          mobileOpenCategory === "tech"
                            ? "/arrow-up.svg"
                            : "/DownArrow.svg"
                        }
                        alt=""
                        width={20}
                        height={20}
                        className="shrink-0 w-5 h-5"
                      />
                    </button>
                    {mobileOpenCategory === "tech" && (
                      <div className="px-4 pb-4 border-t border-white/20">
                        <ul className="text-left pt-3 styled-list">
                          <li>
                            <Link
                              href="https://www.zfour.in/"
                              target="_blank"
                              onClick={closeMobileMenu}
                              className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                            >
                              <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                                HRMS Software
                              </span>
                              <Image
                                src="/ArrowRight.svg"
                                alt="arrow right"
                                width="10"
                                height="10"
                                className="w-[10%] h-[10%]"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Services/crm/"
                              onClick={closeMobileMenu}
                              className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                            >
                              <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                                CRM Software
                              </span>
                              <Image
                                src="/ArrowRight.svg"
                                alt="arrow right"
                                width="10"
                                height="10"
                                className="w-[10%] h-[10%]"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Services/website-development"
                              onClick={closeMobileMenu}
                              className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                            >
                              <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                                Website Development
                              </span>
                              <Image
                                src="/ArrowRight.svg"
                                alt="arrow right"
                                width="10"
                                height="10"
                                className="w-[10%] h-[10%]"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Services/application-development"
                              onClick={closeMobileMenu}
                              className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                            >
                              <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                                Application Development
                              </span>
                              <Image
                                src="/ArrowRight.svg"
                                alt="arrow right"
                                width="10"
                                height="10"
                                className="w-[10%] h-[10%]"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Services/software-development/"
                              onClick={closeMobileMenu}
                              className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                            >
                              <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                                Software Development
                              </span>
                              <Image
                                src="/ArrowRight.svg"
                                alt="arrow right"
                                width="10"
                                height="10"
                                className="w-[10%] h-[10%]"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Services/cloud-and-devops/"
                              onClick={closeMobileMenu}
                              className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                            >
                              <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                                Cloud & DevOps Services
                              </span>
                              <Image
                                src="/ArrowRight.svg"
                                alt="arrow right"
                                width="10"
                                height="10"
                                className="w-[10%] h-[10%]"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Services/epr/"
                              onClick={closeMobileMenu}
                              className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                            >
                              <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                                EPR Software
                              </span>
                              <Image
                                src="/ArrowRight.svg"
                                alt="arrow right"
                                width="10"
                                height="10"
                                className="w-[10%] h-[10%]"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <PrimaryButton
              href=""
              onClick={closeMobileMenu}
              leftIcon="/Blogs.svg"
              type="outline"
              label="Blogs"
              className="justify-normal"
            />

            <PrimaryButton
              href="/Contact_Us/"
              onClick={closeMobileMenu}
              leftIcon="/Contact-Us.svg"
              label="Contact Us"
              className="justify-normal"
            />
          </div>
          {/* social icons */}
          <div className=" flex flex-row w-full  justify-evenly mt-4 left-0">
            <Link
              target="_blank"
              className="w-[30%] h-[30%]"
              href="https://www.facebook.com/people/Pantheon-Digitals/100090577747427/#"
            >
              <Image
                src="/social-icons/facebook.svg"
                alt="facebook icon"
                width="10"
                height="10"
                className="w-full h-full"
              />
            </Link>
            <Link
              target="_blank"
              href="https://x.com/PantheonDigi"
              className="w-[30%] h-[30%]"
            >
              <Image
                src="/social-icons/x.svg"
                alt="x icon"
                width="10"
                height="10"
                className="w-full h-full"
              />
            </Link>
            <Link
              className="w-[30%] h-[30%]"
              href="https://www.instagram.com/pantheondigitals/"
              target="_blank"
            >
              <Image
                src="/social-icons/insta.svg"
                alt="instagram icon"
                width="10"
                height="10"
                className="w-full h-full"
              />
            </Link>
            <Link
              className="w-[30%] h-[30%]"
              href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH0bqQBFX6_kAAAAZgwY1kQJ_M9XEiW2MgEn9JGXzKTXud2Y708iYiT2Mjj6zTHnUYndWoWgeHoi2QqDr1vYMG3a6d3hIcV5OOcdhKWInnOeyIh0J58gE15Ws1MwNTcsg57jWg=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fpantheon-digitals%2F"
              target="_blank"
            >
              <Image
                src="/social-icons/linkedin.svg"
                alt="linkedin icon"
                width="10"
                height="10"
                className="w-full h-full"
              />
            </Link>
            <Link
              className="w-[30%] h-[30%]"
              href="https://www.youtube.com/@pantheondigital"
              target="_blank"
            >
              <Image
                src="/social-icons/youtube.svg"
                alt="youtube icon"
                width="10"
                height="10"
                className="w-full h-full"
              />
            </Link>
            <Link
              className="w-[30%] h-[30%]"
              href="https://in.pinterest.com/pantheondigitals/"
              target="_blank"
            >
              <Image
                src="/social-icons/pinterest.svg"
                alt="pinterest icon"
                width="10"
                height="10"
                className="w-full h-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
