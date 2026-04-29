import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../ui/PrimaryButton";
import { usePathname } from "next/navigation";

const Footer = ({ theme = "default" }: { theme?: "default" | "ai" }) => {
  const pathname = usePathname();
  const isEpr = pathname?.startsWith("/Services/epr");
  const isAi = theme === "ai";
  
  const shadowColor = isAi ? "rgba(6,182,212,0.3)" : (isEpr ? "rgba(16,185,129,0.3)" : "rgba(246,19,19,.3)");
  const gradientColors = isAi 
    ? "from-[#000] via-[#000] to-[#05838a]" 
    : (isEpr ? "from-[#000] via-[#000] to-[#059669]" : "from-[#000] via-[#000] to-[#F61313]");
  const hoverColor = isAi ? "hover:text-cyan-400" : (isEpr ? "hover:text-emerald-400" : "hover:text-white");
  const accentColor = isAi ? "text-[#05838a]" : (isEpr ? "text-emerald-600" : "text-white");

  return (
    <>
      {!isAi && (
        <div className={`w-[90%] md:w-[80%] mx-auto bg-[#202020] rounded-t-3xl md:rounded-t-5xl h-auto py-8 sm:py-16 ${isEpr ? "mt-0" : "mt-12 sm:mt-24"} flex flex-col gap-8 items-center justify-center`}>
          <h4 className="font-geometric text-white text-xs md:text-2xl font-bold">
            We’re Delivering the best customer Experience
          </h4>
          <PrimaryButton
            label="+91 93547 61565"
            type="normal"
            theme={theme}
            href="tel:+91 93547 61565"
            className="rounded-lg"
          />
        </div>
      )}

      {/* main footer section for full page */}
      <footer 
        className={`flex flex-col items-center rounded-t-4xl md:rounded-t-5xl w-full sm:h-auto bg-linear-to-br ${gradientColors}`}
        style={{ boxShadow: `0 0px 200px ${shadowColor}` }}
      >
        <Image
          src="/Logo.svg"
          alt=""
          width="0"
          height="0"
          className="md:w-[25%] md:h-[20%] w-[240] h-auto mt-8"
        />
        <h1 className="mx-10 mt-12 sm:mt-0 text-center font-avenir-regular text-base text-white">
          Passionate digital crafting, limitless tomorrows. Join us in shaping
          innovative experiences with creativity and dedication.
        </h1>

        {/* main div for services */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-cols-fr  w-[80%] mt-16">
          {/* section 1 */}
          <div className="h-auto text-center md:text-left">
            <h4 className="font-avenir-bold text-white text-xl font-bold text-center md:text-left">
              Digital Marketing
            </h4>
            <ul className="styled-list mt-4">
              <li className="hover:translate-x-5 duration-300">
                <Link
                  className={`font-avenir-medium hover:underline underline-offset-4 duration-300 ${hoverColor}`}
                  href="/Services/social-management/"
                >
                  Social management
                </Link>
              </li>
              <li className="hover:translate-x-5 duration-300">
                <Link
                  className={`font-avenir-medium hover:underline underline-offset-4 duration-300 ${hoverColor}`}
                  href="/Services/google-ppc/"
                >
                  Google PPC
                </Link>
              </li>
              <li className="hover:translate-x-5 duration-300">
                <Link
                  className={`font-avenir-medium hover:underline underline-offset-4 duration-300 ${hoverColor}`}
                  href="/Services/meta-ads/"
                >
                  Meta Ads
                </Link>
              </li>
              <li className="hover:translate-x-5 duration-300">
                <Link
                  className={`font-avenir-medium hover:underline underline-offset-4 duration-300 ${hoverColor}`}
                  href="/Services/seo"
                >
                  SEO & SMO
                </Link>
              </li>
              <li className="hover:translate-x-5 duration-300">
                <Link
                  className={`font-avenir-medium hover:underline underline-offset-4 duration-300 ${hoverColor}`}
                  href="/Services/posts-and-reels"
                >
                  Post & Reels
                </Link>
              </li>
              <li className="hover:translate-x-5 duration-300">
                <Link
                  className={`font-avenir-medium hover:underline underline-offset-4 duration-300 ${hoverColor}`}
                  href="/Services/branding-and-ads"
                >
                  Branding & Advertising
                </Link>
              </li>
            </ul>
          </div>
          {/* section 2 */}
          <div className="h-auto text-center md:text-left mt-8 sm:mt-0">
            <h4 className="font-avenir-bold text-white text-xl font-bold text-center md:text-left">
              Graphics
            </h4>
            <ul className="styled-list mt-4 slide-right">
              <li className="hover:translate-x-5 duration-300">
                <Link
                  className={`font-avenir-medium hover:underline underline-offset-4 duration-300 ${hoverColor}`}
                  href="/Services/ui-ux"
                >
                  UI/UX Designing
                </Link>
              </li>
              <li className="hover:translate-x-5 duration-300">
                <Link
                  className={`font-avenir-medium hover:underline underline-offset-4 duration-300 ${hoverColor}`}
                  href="/Services/brochure-and-ppt"
                >
                  Brochure Designing
                </Link>
              </li>
              <li className="hover:translate-x-5 duration-300">
                <Link
                  className={`font-avenir-medium hover:underline underline-offset-4 duration-300 ${hoverColor}`}
                  href="/Services/logo-designing"
                >
                  Logo Designing
                </Link>
              </li>
              <li className="hover:translate-x-5 duration-300">
                <Link
                  className={`font-avenir-medium hover:underline underline-offset-4 duration-300 ${hoverColor}`}
                  href="/Services/post-designing"
                >
                  Post Designing
                </Link>
              </li>
            </ul>
          </div>
          {/* section 3 */}
          <div className="h-auto text-center md:text-left mt-8 sm:mt-0">
            <h4 className="font-avenir-bold text-white text-xl font-bold text-center md:text-left">
              Software
            </h4>
            <ul className="styled-list mt-4 slide-right">
              <li className="hover:translate-x-5 duration-300">
                <Link
                  className={`font-avenir-medium hover:underline underline-offset-4 duration-300 ${hoverColor}`}
                  href="https://www.zfour.in/"
                  target="_blank"
                >
                  HRMS Software
                </Link>
              </li>
              <li className="hover:translate-x-5 duration-300">
                <Link
                  className={`font-avenir-medium hover:underline underline-offset-4 hover:translate-x-10 duration-300 ${hoverColor}`}
                  href="/Services/crm/"
                >
                  CRM Software
                </Link>
              </li>
              <li className="hover:translate-x-5 duration-300">
                <Link
                  className={`font-avenir-medium hover:underline underline-offset-4 hover:translate-x-10 duration-300 ${hoverColor}`}
                  href="/Services/website-development/"
                >
                  Website Development
                </Link>
              </li>
              <li className="hover:translate-x-5 duration-300">
                <Link
                  className={`font-avenir-medium hover:underline underline-offset-4 hover:translate-x-10 duration-300 ${hoverColor}`}
                  href="/Services/application-development/"
                >
                  Application Development
                </Link>
              </li>
              <li className="hover:translate-x-5 duration-300">
                <Link
                  className={`font-avenir-medium hover:underline underline-offset-4 hover:translate-x-10 duration-300 ${hoverColor}`}
                  href="/Services/software-development"
                >
                  Software Development
                </Link>
              </li>
              <li className="hover:translate-x-5 duration-300">
                <Link
                  className={`font-avenir-medium hover:underline underline-offset-4 hover:translate-x-10 duration-300 ${hoverColor}`}
                  href="/Services/cloud-and-devops/"
                >
                  Cloud & DevOps Services
                </Link>
              </li>
            </ul>
          </div>

          {/* section 4 */}
          <div className="h-full mt-4">
            {/* row 1 for iso certificates */}
            <div className="flex flex-row justify-evenly">
              <Image
                src="/social-icons/iso1.svg"
                alt="iso 1"
                width="10"
                height="10"
                className="w-[25%] h-[25%]"
              />
              <Image
                src="/social-icons/iso2.svg"
                alt="iso 2"
                width="10"
                height="10"
                className="w-[25%] h-[25%]"
              />
              <Image
                src="/social-icons/aicpa.svg"
                alt="aicpa"
                width="10"
                height="10"
                className="w-[25%] h-[25%]"
              />
            </div>

            {/* row 2 for social icons */}
            <div className="flex flex-row justify-between mt-8">
              <Link
                href="https://www.facebook.com/people/Pantheon-Digitals/100090577747427/#"
                className="w-[9%] h-[9%] hover:scale-120 duration-300"
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
                href="https://x.com/PantheonDigi"
                className="w-[9%] h-[9%] hover:scale-120 duration-300"
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
                href="https://www.instagram.com/pantheondigitals/"
                className="w-[9%] h-[9%] hover:scale-120 duration-300"
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
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH0bqQBFX6_kAAAAZgwY1kQJ_M9XEiW2MgEn9JGXzKTXud2Y708iYiT2Mjj6zTHnUYndWoWgeHoi2QqDr1vYMG3a6d3hIcV5OOcdhKWInnOeyIh0J58gE15Ws1MwNTcsg57jWg=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fpantheon-digitals%2F"
                className="w-[9%] h-[9%] hover:scale-120 duration-300"
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
                href="https://www.youtube.com/@pantheondigital"
                className="w-[9%] h-[9%] hover:scale-120 duration-300"
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
                href="https://in.pinterest.com/pantheondigitals/"
                className="w-[9%] h-[9%] hover:scale-120 duration-300"
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

        {/* for privacy policy and terms and condition */}
        <div className="w-[90%] md:w-[80%] flex justify-evenly mt-1 sm:mt-4">
          <Link
            href="https://blogs.pantheondigitals.com/privacy"
            target="_blank"
          >
            <h4 className={`text-white font-avenir-demi text-xs md:text-base md:px-2 py-8 text-center underline underline-offset-4 hover:scale-110 duration-300 ${isAi ? "hover:text-cyan-400" : ""}`}>
              Privacy & Policy
            </h4>
          </Link>
          <Link href="https://blogs.pantheondigitals.com/terms" target="_blank">
            <h4 className={`text-white font-avenir-demi text-xs md:text-base md:px-2 py-8 text-center underline underline-offset-4 hover:scale-110 duration-300 ${isAi ? "hover:text-cyan-400" : ""}`}>
              Terms & Condition
            </h4>
          </Link>
          <Link
            href="https://blogs.pantheondigitals.com/cookie"
            target="_blank"
          >
            <h4 className={`text-white font-avenir-demi text-xs md:text-base md:px-2 py-8 text-center underline underline-offset-4 hover:scale-110 duration-300 ${isAi ? "hover:text-cyan-400" : ""}`}>
              Cookie Policy
            </h4>
          </Link>
          <Link href="https://blogs.pantheondigitals.com/" target="_blank">
            <h4 className={`text-white font-avenir-demi text-xs md:text-base md:px-2 py-8 text-center underline underline-offset-4 hover:scale-110 duration-300 ${isAi ? "hover:text-cyan-400" : ""}`}>
              Blogs
            </h4>
          </Link>
        </div>

        {/* for copywrite and other details */}
        <div className="bg-transparent border-0 md:border-1 md:bg-black rounded-full w-[80%]  sm:mt-8 md:mb-2 border-gray-700">
          <h4 className="text-white font-avenir-demi text-sm sm:text-xl px-1 sm:py-4 text-center">
            CIN: U74999DL2021PTC379806 © Copyright 2016 - 2025, INT. All rights
            reserved.
          </h4>
        </div>
      </footer>
    </>
  );
};

export default Footer;
