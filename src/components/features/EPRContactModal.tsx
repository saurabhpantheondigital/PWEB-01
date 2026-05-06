"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Toast from "@/components/ui/Toast";

const FIXED_SERVICE = "EPR Software";

function formatLocalDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function formatLocalTimeHM(d: Date): string {
  const h = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  return `${h}:${min}`;
}

/** Light inputs for EPR page palette (globals `.input-box` is dark / contact-page only). */
const fieldBase =
  "min-h-[50px] mt-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 px-3 py-2.5 font-avenir-medium outline-none transition shadow-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20";
const field = `w-full ${fieldBase}`;
const fieldError =
  "w-full min-h-[50px] mt-3 rounded-lg border-2 border-red-400 bg-red-50/90 text-slate-900 placeholder:text-slate-400 px-3 py-2.5 font-avenir-medium outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200";
const fieldCode = `w-[72px] shrink-0 text-center ${fieldBase}`;

const timezones = [
  { label: "IST (Indian Standard Time)", value: "Asia/Kolkata" },
  { label: "GMT (Greenwich Mean Time)", value: "Etc/GMT" },
  { label: "UTC (Coordinated Universal Time)", value: "UTC" },
  { label: "EST (Eastern Standard Time)", value: "America/New_York" },
  { label: "PST (Pacific Standard Time)", value: "America/Los_Angeles" },
  { label: "CET (Central European Time)", value: "Europe/Paris" },
];

type ContactMethodOption = "Phone Call" | "Email" | "Whatsapp";

type EPRContactModalProps = {
  open: boolean;
  onClose: () => void;
};

const nameRegex = /^[A-Za-z\s.'-]+$/;

export default function EPRContactModal({
  open,
  onClose,
}: EPRContactModalProps) {
  useEffect(() => {
    const handleClick = () => {
      setIsTimeZOpen(false);
    };
    document.body.addEventListener("click", handleClick);
    return () => document.body.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [contact, setContact] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [timeZ, setTimeZ] = useState("IST");
  const [isTimeZOpen, setIsTimeZOpen] = useState(false);
  const [contactMethod, setContactMethod] =
    useState<ContactMethodOption>("Phone Call");
  const [accept, setAccept] = useState(false);
  const [toast, setToast] = useState<{ success: number; msg: string }>({
    success: 0,
    msg: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contact: "",
    companyName: "",
    method: "",
    date: "",
    time: "",
    accept: "",
  });

  const validateForm = () => {
    let dateErr = "";
    let timeErr = "";
    const hasDate = Boolean(date);
    const hasTime = Boolean(time);
    const todayStr = formatLocalDate(new Date());
    const nowMs = Date.now();

    if (!hasDate && !hasTime) {
      /* optional */
    } else if (!hasDate && hasTime) {
      dateErr = "Please select a date for your preferred time";
    } else if (hasDate) {
      if (date < todayStr) {
        dateErr = "Date cannot be in the past";
      } else if (date === todayStr && hasTime) {
        const selected = new Date(`${date}T${time}:00`);
        if (selected.getTime() < nowMs) {
          timeErr = "Choose a time in the future";
        }
      }
    }

    const newError = {
      name: name
        ? nameRegex.test(name)
          ? ""
          : "Name cannot contain numbers or special characters"
        : "Full name is required",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ? ""
        : "valid email is required",
      contact:
        contact && contact.toString().length >= 10
          ? ""
          : "Valid contact number is required",
      companyName: companyName ? "" : "Company name is required",
      method: contactMethod ? "" : "Preferred contact method is required",
      date: dateErr,
      time: timeErr,
      accept: accept ? "" : "You must accept the terms",
    };
    setErrors(newError);
    return Object.values(newError).every((e) => !e);
  };

  const onHandleSubmit = async () => {
    if (loading) return;
    if (!validateForm()) return;
    setLoading(true);
    const res = await fetch("/api/contact-us", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        contact,
        companyName,
        serviceType: FIXED_SERVICE,
        date,
        time: time ? `${time} (${timeZ})` : "",
        project_brief:
          "EPR / EcoTrace inquiry via EPR contact modal (not the main Contact Us page).",
        contact_method: contactMethod,
        attachment: "",
        /** Parsed by /api/contact-us for subject line and email body labeling. */
        submission_source: "epr_contact_modal",
      }),
    });
    const data = await res.json();
    setLoading(false);
    if (data.success) {
      setToast({
        success: 200,
        msg: "Message sent! We’ll get back to you soon – stay tuned!",
      });
      setName("");
      setEmail("");
      setContact("");
      setCompanyName("");
      setContactMethod("Phone Call");
      setDate("");
      setTime("");
      setAccept(false);
    } else {
      setToast({
        success: 400,
        msg:
          typeof data.message === "string" && data.message
            ? data.message
            : "Something went wrong! Please try again later.",
      });
    }
  };

  const todayMin = formatLocalDate(new Date());
  const timeInputMin = date === todayMin ? formatLocalTimeHM(new Date()) : undefined;

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="epr-contact-modal-title"
    >
      <Toast toast={toast} />
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/45 backdrop-blur-[2px]"
        aria-label="Close dialog backdrop"
        onClick={onClose}
      />
      <div
        className="relative z-[201] bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-[2rem] border border-emerald-100/90 bg-gradient-to-b from-white via-emerald-50/35 to-[#F0F2F1] p-5 sm:p-8 md:p-10 shadow-[0_28px_80px_-32px_rgba(15,23,42,0.22)] ring-1 ring-white/80"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="pointer-events-none absolute -right-20 -top-16 h-48 w-48 rounded-full bg-emerald-200/35 blur-3xl sm:h-64 sm:w-64"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-teal-100/50 blur-3xl"
          aria-hidden
        />

        <div className="relative flex items-start justify-between gap-4 mb-6">
          <div>
            <h2
              id="epr-contact-modal-title"
              className="font-clash font-black tracking-tight text-slate-900 text-xl sm:text-3xl"
            >
              Get in touch
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 font-avenir-medium max-w-xl">
              Book a demo or ask about EcoTrace. Service is set to{" "}
              <span className="font-avenir-demi text-emerald-700">
                {FIXED_SERVICE}
              </span>
              .
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800"
            aria-label="Close"
          >
            <X className="h-5 w-5" strokeWidth={2} aria-hidden />
          </button>
        </div>

        <fieldset
          disabled={loading}
          aria-busy={loading}
          className="border-0 p-0 m-0 min-w-0 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 disabled:pointer-events-none disabled:opacity-75 transition-opacity"
        >
          <div className="w-full">
            <h4 className="font-avenir-demi text-slate-800 text-sm sm:text-xl">
              Full name <sup>*</sup>
            </h4>
            <input
              className={errors.name ? fieldError : field}
              placeholder="e.g., Sam Smith"
              value={name}
              onChange={(txt) => {
                const value = txt.target.value;
                if (value === "" || nameRegex.test(value)) {
                  setName(value);
                  setErrors((prev) => ({ ...prev, name: "" }));
                }
              }}
            />
            {errors.name && (
              <p className="text-red-500 font-avenir-medium-italic text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          <div className="w-full">
            <h4 className="font-avenir-demi text-slate-800 text-sm sm:text-xl">
              Official Email <sup>*</sup>
            </h4>
            <input
              className={errors.email ? fieldError : field}
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

          <div className="w-full">
            <h4 className="font-avenir-demi text-slate-800 text-sm sm:text-xl">
              Phone Number <sup>*</sup>
            </h4>
            <div className="flex gap-2 relative">
              <input
                type="tel"
                className={fieldCode}
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              />
              <input
                type="tel"
                minLength={10}
                maxLength={10}
                className={`${errors.contact ? fieldError : field} w-full grow`}
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

          <div className="w-full mt-6 sm:mt-0">
            <h4 className="font-avenir-demi text-slate-800 text-sm sm:text-xl">
              Company Name <sup>*</sup>
            </h4>
            <input
              className={errors.companyName ? fieldError : field}
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

          <div className="w-full sm:col-span-2">
            <h4 className="font-avenir-demi text-slate-800 text-sm sm:text-xl">
              Preferred Contact Method <sup>*</sup>
            </h4>
            <div
              className={`mt-3 flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-3 ${
                errors.method
                  ? "border-2 border-red-400 bg-red-50/90"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {(["Phone Call", "Email", "Whatsapp"] as const).map((m) => (
                <label
                  key={m}
                  className="flex cursor-pointer items-center gap-2"
                >
                  <input
                    type="radio"
                    name="epr-contact-method"
                    className="accent-emerald-600"
                    checked={contactMethod === m}
                    onChange={() => {
                      setContactMethod(m);
                      setErrors((prev) => ({ ...prev, method: "" }));
                    }}
                  />
                  <span className="font-avenir-medium text-sm text-slate-800 sm:text-base">
                    {m}
                  </span>
                </label>
              ))}

              
            </div>
            {errors.method && (
              <p className="mt-1 font-avenir-medium-italic text-sm text-red-500">
                {errors.method}
              </p>
            )}
          </div>

          <div className="w-full sm:col-span-2">
            <h4 className="font-avenir-demi text-slate-800 text-sm sm:text-xl">
              Best time we can connect{" "}
              <span className="font-avenir-medium text-slate-500 font-normal text-xs sm:text-sm">
                (optional)
              </span>
            </h4>
            <div className="flex gap-4 lg:flex-nowrap flex-wrap relative">
              <input
                type="date"
                min={todayMin}
                className={`${field} w-full`}
                value={date}
                onChange={(e) => {
                  const v = e.target.value;
                  const nextDate = v && v < todayMin ? todayMin : v;
                  setDate(nextDate);
                  setErrors((prev) => ({ ...prev, date: "", time: "" }));
                  if (nextDate === todayMin && time) {
                    const sel = new Date(`${nextDate}T${time}:00`);
                    if (sel.getTime() < Date.now()) {
                      setTime("");
                    }
                  }
                }}
              />
              {errors.date && (
                <p className="text-red-500 lg:absolute lg:-bottom-6 font-avenir-medium-italic text-sm mt-1">
                  {errors.date}
                </p>
              )}
              <input
                type="time"
                min={timeInputMin}
                className={`${field} w-full`}
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
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsTimeZOpen(!isTimeZOpen);
                }}
                className={`flex w-[200px] shrink-0 cursor-pointer items-center justify-between ${fieldBase}`}
              >
                <span className="font-avenir-medium text-slate-800 text-base">
                  {timeZ}
                </span>
                <Image
                  src="/DownArrow.svg"
                  alt=""
                  width={20}
                  height={20}
                  className={`transition-transform ${
                    isTimeZOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`w-full overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-lg duration-300 sm:absolute sm:right-0 sm:top-20 sm:w-[350px] z-10 ${
                  isTimeZOpen ? "h-auto opacity-100" : "h-0 opacity-0"
                }`}
              >
                {timezones.map((item) => (
                  <button
                    type="button"
                    key={item.label}
                    onClick={() => {
                      setTimeZ(item.label.split(" ")[0]);
                      setIsTimeZOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-emerald-50"
                  >
                    <p className="font-avenir-medium text-sm text-slate-800 sm:text-base">
                      {item.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-start relative sm:col-span-2">
            <input
              type="checkbox"
              className="mt-1 cursor-pointer accent-emerald-600"
              checked={accept}
              onChange={(e) => {
                setAccept(e.target.checked);
                setErrors((prev) => ({ ...prev, accept: "" }));
              }}
            />
            <p className="font-avenir-medium text-sm text-slate-700 sm:text-base -translate-y-0.5">
              By submitting the form I agree with the Pantheon Digital&apos;s{" "}
              <Link
                href="https://blogs.pantheondigitals.com/privacy"
                className="font-avenir-bold text-emerald-700 underline decoration-emerald-600/40 underline-offset-2 hover:text-emerald-800"
              >
                Privacy Policy
              </Link>{" "}
              &{" "}
              <Link
                href="https://blogs.pantheondigitals.com/terms"
                className="font-avenir-bold text-emerald-700 underline decoration-emerald-600/40 underline-offset-2 hover:text-emerald-800"
              >
                Terms of Use
              </Link>
            </p>
            {errors.accept && (
              <p className="text-red-500 absolute -bottom-3 font-avenir-medium-italic text-sm mt-1">
                {errors.accept}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div className="flex flex-1 flex-col gap-2 sm:min-w-0 sm:max-w-xl">
              <div
                className="flex min-h-[3.25rem] flex-wrap items-center gap-x-3 gap-y-1 py-1"
                role="status"
                aria-label={`Service: ${FIXED_SERVICE}`}
              >
                <span className="whitespace-nowrap font-avenir-demi text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-700 sm:text-[11px]">
                  Type of service
                </span>
                <span
                  className="hidden h-4 w-px shrink-0 bg-emerald-300 sm:block"
                  aria-hidden
                />
                <span className="font-clash text-lg font-black tracking-tight text-slate-900 sm:text-xl">
                  {FIXED_SERVICE}
                </span>
              </div>
            </div>
            <div className="flex w-full shrink-0 justify-stretch sm:w-auto sm:justify-end">
              <PrimaryButton
                loading={loading}
                disabled={loading}
                onClick={onHandleSubmit}
                label="Submit"
                className="w-full justify-center overflow-clip rounded-xl px-8 py-3 max-h-24 sm:w-auto shadow-lg shadow-emerald-900/10"
              />
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
