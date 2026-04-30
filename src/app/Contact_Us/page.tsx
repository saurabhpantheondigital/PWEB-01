"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import GetInTouch from "@/components/features/GetInTouch";
import Link from "next/link";
import Clients from "@/components/features/Clients";
import Testimonials from "@/components/features/Testimonials";
import AboutNumerics from "@/components/ui/AboutNumerics";
import FaqItem from "@/components/features/FaqItem";
import Toast from "@/components/ui/Toast";

const Contact_Us = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      setIsServiceDropDownOpen(false);
      setIsTimeZOpen(false);
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachment(file);
      console.log("Selected file:", file.name);
    }
  };

  const timezones = [
    { label: "IST (Indian Standard Time)", value: "Asia/Kolkata" },
    { label: "GMT (Greenwich Mean Time)", value: "Etc/GMT" },
    { label: "UTC (Coordinated Universal Time)", value: "UTC" },
    { label: "EST (Eastern Standard Time)", value: "America/New_York" },
    { label: "PST (Pacific Standard Time)", value: "America/Los_Angeles" },
    { label: "CET (Central European Time)", value: "Europe/Paris" },
  ];

  const services = [

    "Digital Marketing",
    "Graphic Designing",
    "UI/UX Design",
    "Logo/Brochure/Post Design",
    "HRMS Software",
    "CRM Software",
    "EPR Software",
    "AI Software",
    "Website Development",
    "Application Development",
    "Custom Software",
    "DevOps or Cloud Services",
  
  ];

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [countryCode, setCountryCode] = useState("+91");
  const [contact, setContact] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [serviceType, setServiceType] = useState("Select one");
  const [date, setDate] = useState("");
  const [time, setTime] = useState<string>("");
  const [isServiceDropDownOpen, setIsServiceDropDownOpen] =
    useState<boolean>(false);
  const [timeZ, setTimeZ] = useState("IST");
  const [isTimeZOpen, setIsTimeZOpen] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [method, setMethod] = useState<"Phone Call" | "Email" | "Whatsapp">();
  const [selectedMethod, setSelectedMethod] = useState<
    "Phone Call" | "Email" | "Whatsapp"
  >("Phone Call");
  const [accept, setAccept] = useState<boolean>(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);

  const [toast, setToast] = useState<{ success: number; msg: string }>({
    success: 0,
    msg: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contact: "",
    companyName: "",
    serviceType: "",
    date: "",
    time: "",
    description: "",
    method: "",
    accept: "",
  });

  const handleMethod = (m: "Phone Call" | "Email" | "Whatsapp") => {
    // console.log(m);
    setMethod(m);
  };

  const validateForm = () => {
    const newError = {
      name: name ? "" : "Full name is required",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ? ""
        : "valid email is required",
      contact:
        contact && contact.toString().length >= 10
          ? ""
          : "Valid contact number is required",
      companyName: companyName ? "" : "Company name is required",
      serviceType:
        serviceType.toLowerCase() !== "select one"
          ? ""
          : "Please select a service",
      date: date ? "" : "Date is required",
      time: time ? "" : "Time is required",
      description: description ? "" : "Project brief is required",
      method: method ? "" : "Preferred contact method required",
      accept: accept ? "" : "You must accept the terms",
    };

    setErrors(newError);
    return Object.values(newError).every((e) => !e);
  };

  const onHandleSubmit = async () => {
    if (validateForm()) {
      setLoading(true);
      const res = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          contact,
          companyName,
          serviceType,
          date,
          time,
          project_brief: description,
          contact_method: method,
          attachment: attachment || "",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setLoading(false);
        setToast({
          success: 200,
          msg: "Message sent! We’ll get back to you soon – stay tuned!",
        });
        // empty inputs
        setName("");
        setEmail("");
        setContact("");
        setCompanyName("");
        setServiceType("Select one");
        setDate("");
        setTime("");
        setDescription("");
        setMethod("Phone Call");
        setAttachment(null);
        setAccept(false);
      } else {
        setLoading(false);
        setToast({
          success: 400,
          msg: "Something went wrong! Please try again later.",
        });
      }
    }
  };

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
    <div className="w-full h-full flex flex-col items-center">
      <Toast toast={toast} />
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
      <div className="bg-[#212121] w-[90%] sm:w-[80%] h-full  mt-32 sm:24 flex flex-col items-center rounded-4xl sm:p-8 p-4">
        <h1 className="font-geometric font-bold text-white text-xl sm:text-5xl sm:mt-12 mt-4">
          Contact Us
        </h1>
        <p className="sm:w-[70%] w-full font-avenir-medium text-white text-sm sm:text-2xl text-center mt-4 sm:mt-12">
          We’re excited to hear about your project! Whether it’s tech, design,
          or digital marketing—our team is ready to help you scale with
          innovation and creativity.
        </p>

        <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12 mt-12 sm:mt-16">
          {/* Full name */}
          <div className="w-full">
            <h4 className="font-avenir-demi text-white text-sm sm:text-xl">
              Full name <sup>*</sup>
            </h4>
            <input
              className={` w-full ${
                errors.name ? "error-input-box" : "input-box"
              }`}
              placeholder="e.g., Sam Smith"
              value={name}
              onChange={(txt) => {
                setName(txt.target.value);
                setErrors((prev) => ({ ...prev, name: "" }));
              }}
            />
            {errors.name && (
              <p className="text-red-500 font-avenir-medium-italic text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="w-full">
            <h4 className="font-avenir-demi text-white text-sm sm:text-xl">
              Official Email <sup>*</sup>
            </h4>
            <input
              className={`${
                errors.email ? "error-input-box" : "input-box"
              } w-full`}
              placeholder="e.g., abc@company.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
            />
            {errors.email && (
              <p className="text-red-500 font-avenir-medium-italic text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone number */}
          <div className="w-full">
            <h4 className="font-avenir-demi text-white text-sm sm:text-xl">
              Phone Number <sup>*</sup>
            </h4>
            <div className="flex gap-2 relative ">
              <input
                type="tel"
                className="input-box w-[55px]"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              />
              <input
                type="tel"
                minLength={10}
                maxLength={10}
                className={`${
                  errors.contact ? "error-input-box" : "input-box"
                } w-full grow`}
                placeholder="000  000  0000"
                value={contact}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    setContact(value);
                    setErrors((prev) => ({ ...prev, contact: "" }));
                  }
                }}
              />
              {errors.contact && (
                <p className="text-red-500 absolute -bottom-6 font-avenir-medium-italic text-sm mt-1">
                  {errors.contact}
                </p>
              )}
            </div>
          </div>

          {/* Company name */}
          <div className="w-full mt-6 sm:mt-0">
            <h4 className="font-avenir-demi text-white text-sm sm:text-xl">
              Company Name <sup>*</sup>
            </h4>
            <input
              className={`${
                errors.companyName ? "error-input-box" : "input-box"
              } w-full`}
              placeholder="xyz inc."
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
                setErrors((prev) => ({ ...prev, companyName: "" }));
              }}
            />
            {errors.companyName && (
              <p className="text-red-500 font-avenir-medium-italic text-sm mt-1">
                {errors.companyName}
              </p>
            )}
          </div>

          {/* Service Dropdown */}
          <div className="relative">
            <h4 className="font-avenir-demi text-white text-sm sm:text-xl">
              Select Type of services <sup>*</sup>
            </h4>
            <button
              className={`${
                errors.serviceType ? "error-input-box" : "input-box"
              } w-full flex items-center cursor-pointer`}
              onClick={() => setIsServiceDropDownOpen(!isServiceDropDownOpen)}
            >
              <p className="flex grow text-white font-avenir-medium text-base text-md">
                {serviceType}
              </p>
              <Image
                src="/DownArrow.svg"
                alt=""
                width="20"
                height="20"
                className={`transition-transform ${
                  isServiceDropDownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {errors.serviceType && (
              <p className="text-red-500  font-avenir-medium-italic text-sm mt-1">
                {errors.serviceType}
              </p>
            )}

            <div
              className={`bg-[#212121] w-['90%'] sm:w-[350px] sm:absolute sm:right-0 sm:top-28 overflow-hidden border border-zinc-700 rounded-lg duration-300 z-10 ${
                isServiceDropDownOpen ? "h-auto opacity-100" : "h-0 opacity-0"
              }`}
            >
              {services.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setServiceType(item);
                    setIsServiceDropDownOpen(false);
                  }}
                  className="w-full hover:bg-zinc-700 text-left px-4 py-2 cursor-pointer "
                >
                  <p className="text-white font-avenir-medium text-xs sm:text-base">
                    {item}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Time to connect */}
          <div className="w-full">
            <h4 className="font-avenir-demi text-white text-sm sm:text-xl">
              Best time we can connect <sup>*</sup>
            </h4>
            <div className="flex gap-4 lg:flex-nowrap flex-wrap relative">
              <input
                type="date"
                className={`${
                  errors.date ? "error-input-box" : "input-box"
                } w-full`}
                placeholder="DD - MM - YYYY"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  setErrors((prev) => ({ ...prev, date: "" }));
                }}
              />
              {errors.date && (
                <p className="text-red-500 lg:absolute lg:-bottom-6 font-avenir-medium-italic text-sm mt-1">
                  {errors.date}
                </p>
              )}
              <input
                type="time"
                className={`${
                  errors.time ? "error-input-box" : "input-box"
                } w-full`}
                placeholder="00:00 am"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                  setErrors((prev) => ({ ...prev, time: "" }));
                }}
              />
              {errors.time && (
                <p className="text-red-500 lg:absolute lg:sm:left-45 -bottom-6 font-avenir-medium-italic text-sm mt-1">
                  {errors.time}
                </p>
              )}

              <button
                onClick={() => setIsTimeZOpen(!isTimeZOpen)}
                className="flex input-box items-center w-[200px] justify-between cursor-pointer"
              >
                <span className="font-avenir-medium text-white text-base">
                  {timeZ}
                </span>
                <Image
                  src="/DownArrow.svg"
                  alt=""
                  width="20"
                  height="20"
                  className={`transition-transform ${
                    isTimeZOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Timezone dropdown */}
              <div
                className={`bg-[#212121] w-[90%] sm:w-[350px] sm:absolute sm:right-0 sm:top-20 border overflow-hidden border-zinc-700 rounded-lg duration-300 z-10 ${
                  isTimeZOpen ? "h-auto opacity-100" : "h-0 opacity-0"
                }`}
              >
                {timezones.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      setTimeZ(item.label.split(" ")[0]);
                      setIsTimeZOpen(false);
                    }}
                    className="w-full hover:bg-zinc-700 text-left px-4 py-2"
                  >
                    <p className="text-white font-avenir-medium text-sm sm:text-base">
                      {item.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Brief + Upload */}
          <div className="w-full col-span-full relative">
            <h4 className="font-avenir-demi text-white text-sm sm:text-xl">
              Project Brief <sup>*</sup>
            </h4>
            <textarea
              placeholder="Tell us about your project, goals, and timeline..."
              className={`${
                errors.description ? "error-input-box" : "input-box"
              } w-full h-[200px]`}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                setErrors((prev) => ({ ...prev, description: "" }));
              }}
            />
            {errors.description && (
              <p className="text-red-500 font-avenir-medium-italic text-sm mt-1">
                {errors.description}
              </p>
            )}
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              hidden
            />
            {attachment && (
              <h4
                className={`lg:absolute right-12 ${
                  errors.description ? "lg:bottom-10" : "lg:bottom-4"
                } text-white font-avenir-medium font-sm sm:font-xl`}
              >
                File attached
              </h4>
            )}
            <button
              onClick={() => fileInputRef.current?.click()}
              className={`lg:absolute 
                ${errors.description ? "lg:bottom-10" : "lg:bottom-4"}
                right-3 cursor-pointer`}
            >
              <Image
                src="/upload-image.svg"
                alt="Upload"
                width="24"
                height="24"
              />
            </button>
          </div>

          {/* Contact Method */}
          <div className="w-full col-span-full">
            <h4 className="font-avenir-demi text-white text-sm sm:text-xl">
              Preferred Contact Method <sup>*</sup>
            </h4>
            <div
              className={`flex flex-col sm:flex-row sm:gap-16 gap-4  ${
                errors.method ? "bg-[#210000]" : "bg-black"
              } p-4 mt-4`}
            >
              {["Phone Call", "Email", "Whatsapp"].map((method) => (
                <label
                  key={method}
                  className="flex  items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="contact-method"
                    className="accent-[#F61313]"
                    checked={selectedMethod === method}
                    onChange={() => {
                      setSelectedMethod(
                        method as "Phone Call" | "Email" | "Whatsapp"
                      );
                      handleMethod(
                        method as "Phone Call" | "Email" | "Whatsapp"
                      );
                      setErrors((prev) => ({ ...prev, method: "" }));
                    }}
                  />
                  <span className="text-white text-sm sm:text-xl">
                    {method}
                  </span>
                </label>
              ))}
            </div>
            {errors.method && (
              <p className="text-red-500 font-avenir-medium-italic text-sm mt-1">
                {errors.method}
              </p>
            )}
          </div>

          {/* Consent */}
          <div className="flex gap-2 items-start relative">
            <input
              type="checkbox"
              className="cursor-pointer  accent-[#F61313]"
              onChange={() => {
                setAccept(true);
                setErrors((prev) => ({ ...prev, accept: "" }));
              }}
            />
            <p className="text-white font-avenir-medium text-base -translate-y-1.5">
              By submitting the form I agree with the Pantheon Digital’s{" "}
              <Link href="https://blogs.pantheondigitals.com/privacy">
                <span className="font-avenir-bold underline">
                  Privacy Policy
                </span>
              </Link>{" "}
              &{" "}
              <Link href="https://blogs.pantheondigitals.com/terms">
                <span className="font-avenir-bold underline">Terms of Use</span>
              </Link>
            </p>
            {errors.accept && (
              <p className="text-red-500 absolute -bottom-3 font-avenir-medium-italic text-sm mt-1">
                {errors.accept}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="sm:w-[60%] w-full flex justify-self-end">
            <PrimaryButton
              loading={loading}
              onClick={onHandleSubmit}
              label={"Submit"}
              className="w-full rounded-lg justify-center max-h-24 overflow-clip"
            />
          </div>
        </div>
      </div>

      {/* ========================================================================================================================================================================================================================================================================================================================================================================================================================================================================================= */}
      {/* Talk to expert */}
      <div className="w-[90%] sm:w-[80%] bg-[#212121] p-8 sm:p-12 mt-12 sm:mt-24 rounded-3xl flex flex-col relative overflow-hidden">
        <button
          onClick={() => setIsPopUpOpen(true)}
          className="w-16 h-16 md:w-20 md:h-20 absolute right-5 top-5 flex items-center justify-center sm:right-15 sm:top-15 cursor-pointer hover:scale-110 duration-300"
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
        <h1 className="text-white font-avenir-demi text-lg sm:text-4xl ">
          Talk to our expert now!
        </h1>

        <p className="text-[#c1c1c1]  text-sm sm:text-2xl mt-4 sm:mt-8  sm:w-[60%] w-full ">
          note: the person you’re about to call is a technical project expert
          and may or may not have knowledge about support of the particular
          project.
        </p>
        <p className="text-[#c1c1c1] font-avenir-medium text-sm sm:text-2xl mt-4 sm:mt-8  sm:w-[60%] w-full">
          {" "}
          If you’re facing issue with any project, visit{" "}
          <Link href="/Support/">
            <span className="underline  font-avenir-bold text-white text-sm sm:text-2xl">
              support page
            </span>
          </Link>{" "}
          and raise a issue
        </p>

        {/* horizontal rule */}
        <div className="h-[.5] bg-[#626262] sm:my-8 my-4" />

        {/* contact details */}
        <div>
          <div className="flex gap-4 sm:gap-8 items-center">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
              <Image
                className=""
                src="/Contact-Us.svg"
                alt="telephone"
                width="15"
                height="15"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-8">
              <Link href="tel:+91 93547 61565">
                <span className="text-white font-avenir-demi text-xs lg:text-2xl md:text-xl">
                  +91 93547 61565
                </span>
              </Link>

              <p className="text-white text-4xl sm:block hidden">|</p>

              <Link href="tel:+91 93547 61565">
                <span className="text-white font-avenir-demi text-xs lg:text-2xl md:text-xl">
                  +91 93547 61565
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* contact details close */}

        {/* contact details */}
        <div className="mt-4">
          <div className="flex gap-4 sm:gap-8 items-center">
            <div className="w-10 min-w-10 min-h-10 h-10 rounded-full bg-black flex items-center justify-center">
              <Image
                className=""
                src="/mail.svg"
                alt="mail"
                width="20"
                height="20"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-8">
              <Link href="mailto:info@pantheondigitals.com">
                <span className="text-white font-avenir-demi text-xs lg:text-2xl md:text-xl">
                  info@pantheondigitals.com
                </span>
              </Link>

              <p className="text-white text-4xl hidden sm:block">|</p>

              <Link href="mailto:business@pantheondigitals.com">
                <span className="text-white font-avenir-demi text-xs lg:text-2xl md:text-xl">
                  business@pantheondigitals.com
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* contact details close */}
      </div>

      {/* Get in touch */}
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

export default Contact_Us;
