"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

type TableData = {
  headers: string[];
  rows: string[][];
};

/** Full-width page shell — responsive horizontal padding, wide cap for large monitors */
const shell =
  "mx-auto w-full max-w-[1600px] px-4 min-[400px]:px-5 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20";

/** Shared section typography (avoids repeating the same class strings) */
const sectionHeading2 =
  "text-4xl md:text-5xl font-clash font-black tracking-tighter leading-tight text-slate-900 mb-8";
const sectionHeading2Compact =
  "text-4xl md:text-5xl font-clash font-black tracking-tighter leading-tight text-slate-900 mb-6";
const sectionHeading2OnDark =
  "text-4xl md:text-5xl font-clash font-black tracking-tighter leading-tight text-white mb-8";
const aboutVisionLead =
  "text-slate-500 leading-relaxed font-medium mb-2 text-[15px]";
const aboutVisionPullQuote =
  "block mt-4 text-sm font-black uppercase tracking-widest text-slate-900 font-clash";

import {
  Calculator,
  FileCheck,
  Landmark,
  MapPin,
  Factory,
  Droplet,
  Battery,
  Laptop,
  Car,
  Layers,
  Zap,
  Shield,
  FileText,
  Recycle,
  Flame,
  CreditCard,
  Repeat,
  Users,
  LayoutDashboard,
  FileDown,
  RotateCcw,
  CodeXml,
  Bell,
  FolderLock,
  IndianRupee,
  Handshake,
  Headset,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import EPRCTA from "@/components/ui/EPRCTA";
import EPRContactModal from "@/components/features/EPRContactModal";

const TirangaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <rect x="3" y="4" width="18" height="5.33" rx="1" fill="#FF9933" />
    <rect x="3" y="9.33" width="18" height="5.33" fill="#FFFFFF" />
    <rect x="3" y="14.66" width="18" height="5.34" rx="1" fill="#138808" />
    <circle cx="12" cy="12" r="1.8" fill="#000080" />
  </svg>
);

const TyreIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="m16 2c-7.72 0-14 6.28-14 14s6.28 14 14 14 14-6.28 14-14-6.28-14-14-14zm0 26c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12z" />
    <path d="m16 6c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm6.92 6.005-3.754 1.579c-.535-.699-1.29-1.214-2.166-1.442v-4.073c2.531.318 4.694 1.821 5.92 3.936zm-8.92 3.995c0-1.09.886-2 2-2s2 .909 2 2c0 1.103-.897 2-2 2s-2-.897-2-2zm1-7.931v4.073c-.877.228-1.631.742-2.166 1.442l-3.754-1.579c1.225-2.115 3.389-3.618 5.92-3.936zm-6.698 5.779 3.755 1.579c-.16 1.105.102 2.074.716 2.916l-2.585 3.138c-1.882-1.995-2.669-4.836-1.886-7.633zm3.43 8.906 2.585-3.139c.513.241 1.08.385 1.683.385.699 0 1.348-.196 1.92-.513l2.489 3.181c-1.265.84-2.78 1.332-4.409 1.332-1.57 0-3.031-.461-4.268-1.246zm10.192-1.396-2.54-3.247c.554-.884.693-1.759.559-2.684l3.755-1.579c.772 2.758.015 5.533-1.774 7.51z" />
  </svg>
);

const ContextualCTA = ({
  title,
  desc,
  btnText,
  href = "/Contact_Us",
  onButtonClick,
  variant = "light",
  className = "",
  showBorder = false,
}: {
  title: string;
  desc: string;
  btnText: string;
  href?: string;
  onButtonClick?: () => void;
  variant?: "light" | "dark";
  className?: string;
  showBorder?: boolean;
}) => (
  <section
    className={`w-full py-20 overflow-hidden relative group transition-all duration-700 ${className} ${showBorder ? "border-y border-slate-200/60" : ""}`}
  >
    {/* Decorative Background Illustrations - Styled like EPRCTA */}
    <div
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Right Side Illustration */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.12, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-0 -bottom-10 h-full w-1/2 flex items-end justify-end"
      >
        <img
          src="/EPR/image.png"
          alt=""
          className="h-full w-auto object-contain object-bottom translate-x-20 grayscale opacity-40"
        />
      </motion.div>

      {/* Left Side Illustration */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.12, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-0 -bottom-26 h-full w-1/2 flex items-end justify-start"
      >
        <img
          src="/EPR/eco2.png"
          alt=""
          className="h-full w-auto object-contain object-bottom -translate-x-20 grayscale opacity-60"
        />
      </motion.div>
    </div>

    {/* Subtle Pattern Overlay */}
    <div
      className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(#10b981 0.5px, transparent 0.5px)`,
        backgroundSize: `32px 32px`,
      }}
    />

    <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
    </div>

    <div className={shell + " relative z-10"}>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <h3
            className={`text-2xl md:text-3xl lg:text-4xl font-clash font-black mb-4 tracking-tight leading-tight ${variant === "dark" ? "text-white" : "text-slate-900"}`}
          >
            {title}
          </h3>
          <p
            className={`font-medium leading-relaxed text-base md:text-lg max-w-2xl mx-auto lg:mx-0 ${variant === "dark" ? "text-slate-400" : "text-slate-500"}`}
          >
            {desc}
          </p>
        </div>
        <div className="w-full lg:w-auto">
          {onButtonClick ? (
            <button
              type="button"
              onClick={onButtonClick}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-emerald-600/20 hover:shadow-emerald-600/40 hover:scale-[1.02] active:scale-95 w-full lg:w-auto"
            >
              <span className="relative z-10 text-lg">{btnText}</span>
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1.5 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>
          ) : (
            <Link
              href={href}
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-2xl shadow-emerald-600/20 hover:shadow-emerald-600/40 hover:scale-[1.02] active:scale-95 w-full lg:w-auto"
            >
              <span className="relative z-10 text-lg">{btnText}</span>
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1.5 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Link>
          )}
        </div>
      </div>
    </div>
  </section>
);

const canvas =
  "w-full min-h-screen overflow-x-hidden bg-[#F0F2F1] text-slate-800 selection:bg-emerald-200/40 selection:text-slate-900";

function HeroSection({
  onOpenContactModal,
}: {
  onOpenContactModal: () => void;
}) {
  return (
    <section
      id="epr-hero"
      className="min-md:-top-18 max-md:-mt-8 top-0 relative flex min-h-[90svh] w-full flex-col justify-end border-b border-slate-200/60 bg-gradient-to-b from-white via-emerald-50/40 to-[#F0F2F1] pb-8 pt-24 sm:min-h-[min(100svh,900px)] sm:justify-center sm:pb-12 md:pt-28 lg:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -left-[20%] top-0 h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-emerald-200/30 blur-3xl sm:left-0 sm:h-[480px] sm:w-[480px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute -right-[15%] top-1/4 h-[min(60vw,420px)] w-[min(60vw,420px)] rounded-full bg-amber-100/50 blur-3xl sm:right-0"
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F0F2F1] to-transparent" />

        {/* Mobile Background Illustration */}
        <div className="md:hidden absolute top-[15%] left-1/2 -translate-x-1/2 w-[140%] max-w-[600px] aspect-square opacity-[0.08] pointer-events-none select-none blur-[1px]">
          <Image
            src="/EPR/recycle.svg"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div
        className={`${shell} relative z-[1] flex flex-1 flex-col justify-center py-8 sm:py-12 md:py-14 lg:py-16`}
      >
        <div className="relative min-md:-mt-12 max-md:mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="flex justify-center lg:justify-start">
              <motion.div
                id="hero-badge"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="max-md:hidden  mb-4 inline-flex w-fit items-center gap-3 rounded-full border border-emerald-200/80 bg-emerald-50/90 px-3.5 py-1 text-[8px] font-bold uppercase leading-snug tracking-[0.14em] text-emerald-800 shadow-sm min-[400px]:px-4 min-[400px]:py-1.5 min-[400px]:text-[10px] min-[400px]:tracking-[0.18em]"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                </span>
                <span className="whitespace-nowrap">
                  India&apos;s only fully automated EPR compliance software
                </span>
              </motion.div>
            </div>

            <h1
              id="hero-heading"
              className="mb-5 text-center lg:text-left text-[clamp(1.85rem,6.5vw,4.2rem)] font-black leading-[1.05] tracking-[-0.035em] text-slate-900 sm:mb-6 lg:leading-[1.04]"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {/* Mobile View: Dynamic Animated Heading */}
              <div className="md:hidden flex flex-col items-center gap-2">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-emerald-100/80 text-emerald-700 px-4 py-1 rounded-full text-[12px] uppercase tracking-[0.2em] font-bold mb-1 shadow-sm border border-emerald-200/50 backdrop-blur-sm"
                >
                  One Platform
                </motion.span>
                <div className="overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block leading-[1.1]"
                  >
                    Every EPR Obligation
                  </motion.span>
                </div>
                <div className="overflow-hidden pb-1">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 0.4,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent"
                  >
                    in India. Fully Automated.
                  </motion.span>
                </div>
              </div>

              {/* Desktop View: Standard Animation */}
              <motion.span
                className="hidden md:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                One Platform. Every EPR Obligation
                <span className="mt-1 block bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-600 bg-clip-text text-transparent sm:mt-2">
                  in India. Fully Automated.
                </span>
              </motion.span>
            </h1>

            <motion.p
              id="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8 max-w-xl mx-auto lg:mx-0 text-center lg:text-left text-[0.95rem] leading-relaxed text-slate-600 sm:text-base md:text-lg md:leading-relaxed"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              EcoTrace by Pantheon Digital&apos; is the only EPR compliance
              software in India that covers all five CPCB-regulated waste
              categories — Plastic, E-Waste, Battery, Tyre, and Used Oil — under
              one unified platform. Stop managing compliance across spreadsheets
              and disconnected portals. Automate everything, from liability
              calculation to annual return filing.
            </motion.p>

            <motion.div
              id="hero-cta-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex w-full max-w-md mx-auto lg:mx-0 flex-col gap-3 sm:max-w-none sm:flex-row sm:items-stretch sm:justify-center lg:justify-start"
            >
              <motion.button
                type="button"
                id="hero-get-started-btn"
                onClick={onOpenContactModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-base shadow-xl shadow-slate-900/20 transition-all duration-300 hover:bg-slate-800 hover:shadow-slate-900/30 overflow-hidden"
              >
                <span className="relative z-10">Get started free</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />

                {/* Continuous Shimmer Animation */}
                <motion.div
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 1,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
                />
              </motion.button>
              <button
                type="button"
                id="hero-request-demo-btn"
                onClick={onOpenContactModal}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/50 backdrop-blur-sm text-slate-800 rounded-2xl font-bold text-base border-2 border-slate-200 transition-all duration-300 hover:bg-white hover:border-emerald-300 hover:text-emerald-700 hover:shadow-xl hover:shadow-emerald-500/10 hover:scale-[1.02] active:scale-95"
              >
                Request a demo
              </button>
            </motion.div>
          </div>

          <motion.div
            id="hero-image-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative lg:col-span-5"
          >
            {/* Decorative Coral Shape (Jadoo style) */}
            <div className="absolute -right-10 -top-10 -z-10 h-72 w-72 rounded-full bg-[#DF6951]/10 blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 -z-10 h-48 w-48 rounded-[3rem] bg-[#FFF1DA] opacity-40 rotate-12" />

            <div className="relative z-10 flex items-center justify-center lg:justify-end">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: [0, -10, 0],
                  x: [0, 3, 0],
                  rotate: [0, 0.45, 0],
                }}
                transition={{
                  opacity: { delay: 0.8, duration: 1 },
                  scale: { delay: 0.8, duration: 1 },
                  y: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  x: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative w-full max-w-[650px] transform-gpu will-change-transform lg:scale-110 xl:scale-125"
              >
                <Image
                  src="/EPR/recycle.svg"
                  alt="EcoTrace EPR Illustration"
                  width={800}
                  height={800}
                  priority
                  className="max-md:hidden h-auto w-full object-contain drop-shadow-[0_30px_60px_rgba(16,185,129,0.25)]"
                />

                {/* Subtle Glow behind the SVG */}
                <div className="absolute inset-0 bg-emerald-400/10 blur-[100px] -z-10 rounded-full scale-75" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SSOPortalsSection() {
  const portals = [
    {
      title: "Used oil Management",
      icon: Droplet,
      accent: "from-amber-500 to-amber-700",
      color: "text-amber-500",
      hex: "#f59e0b",
    },
    {
      title: "Plastic Waste Management",
      icon: Recycle,
      accent: "from-emerald-500 to-emerald-700",
      color: "text-emerald-500",
      hex: "#10b981",
    },
    {
      title: "Battery Waste Management",
      icon: Battery,
      accent: "from-blue-500 to-blue-700",
      color: "text-blue-500",
      hex: "#3b82f6",
    },
    {
      title: "Waste Tyre Management",
      icon: TyreIcon,
      accent: "from-slate-600 to-slate-800",
      color: "text-slate-500",
      hex: "#64748b",
    },
    {
      title: "E-Waste Management",
      icon: Laptop,
      accent: "from-indigo-500 to-indigo-700",
      color: "text-indigo-500",
      hex: "#6366f1",
    },
    {
      title: "End-of-Life Vehicles (ELV)",
      icon: Car,
      accent: "from-rose-500 to-rose-700",
      color: "text-rose-500",
      hex: "#f43f5e",
    },
  ];

  return (
    <section
      id="epr-sso-portals"
      className="relative w-full border-b border-slate-200/60 bg-[#F8FAFA] py-20 md:py-32"
    >
      <div className={`${shell} relative z-[1]`}>
        {/* Section Header */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-6 block">
            Unified Access
          </span>
          <h2 className={sectionHeading2}>
            Single Sign-On (SSO) for <br className="hidden sm:block" /> existing
            EPR Portals
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {portals.map((portal, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              whileHover={{ y: -12 }}
              className="group relative flex flex-col items-center"
            >
              <div
                className={`relative z-10 flex h-full w-full flex-col items-center overflow-hidden rounded-[3rem] bg-white p-10 text-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_80px_150px_-30px_rgba(16,185,129,0.12)] border border-slate-50 ${portal.color}`}
              >
                {/* Category-specific Texture Background */}
                <div
                  className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(${portal.hex} 1.5px, transparent 1.5px)`,
                    backgroundSize: `24px 24px`,
                  }}
                />

                {/* Large Background Category Watermark */}
                <div className="absolute -bottom-8 -right-8 pointer-events-none opacity-[0.04] group-hover:opacity-[0.08] transition-all duration-700 group-hover:-rotate-12 group-hover:scale-110">
                  <portal.icon className="h-44 w-44" strokeWidth={1.5} />
                </div>

                {/* Icon Container with Beige Background Shape */}
                <div className="relative mb-8 flex h-20 w-20 items-center justify-center">
                  <div className="absolute -right-2 -top-2 h-14 w-14 rounded-2xl bg-[#FFF1DA] opacity-80 group-hover:rotate-12 transition-transform duration-700" />

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`relative flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg shadow-emerald-200/10`}
                  >
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-95 ${portal.accent}`}
                    />
                    <portal.icon
                      className="relative z-10 h-8 w-8"
                      strokeWidth={2}
                    />
                  </motion.div>
                </div>

                <h3 className="relative z-10 text-base md:text-[17px] font-bold text-slate-900 tracking-tight leading-tight group-hover:text-emerald-600 transition-colors">
                  EPR Portal for <br /> {portal.title}
                </h3>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ x: 5 }}
                  className="mt-8 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
                >
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600">
                    Enter Dashboard
                  </span>
                  <svg
                    className="h-4 w-4 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function EPRStatsStrip() {
  const stats = [
    { value: "5", label: "EPR Categories", sublabel: "covered" },
    { value: "₹0", label: "EC penalty risk", sublabel: "with EcoTrace" },
    {
      value: "100%",
      label: "Annual returns",
      sublabel: "generated in 1 click",
    },
    { value: "28+", label: "Indian states", sublabel: "tracked" },
    {
      value: "15 days",
      label: "CPCB registration",
      sublabel: "support",
    },
  ];

  return (
    <section className="w-full bg-emerald-600 py-12 max-md:py-8 text-white relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 -top-24 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className={`${shell} relative z-10`}>
        <div className="grid grid-cols-5 gap-1 sm:gap-4 items-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center px-0.5 group"
            >
              <div className="text-[18px]  sm:text-2xl md:text-5xl font-black mb-1 tracking-tighter group-hover:scale-110 transition-transform duration-300">
                {stat.value === "15 days" ? (
                  stat.value
                ) : (
                  <Counter value={stat.value} />
                )}
              </div>
              <div className="text-[9px] sm:text-[10px] md:text-[13px] font-black uppercase tracking-[0.02em] sm:tracking-widest opacity-90 mb-0.5 leading-tight">
                {stat.label}
              </div>
              <div className="hidden sm:block text-[8px] md:text-[11px] font-medium opacity-70 leading-tight max-w-[70px] sm:max-w-[120px]">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({
  value,
  duration = 2,
}: {
  value: string;
  duration?: number;
}) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]|₹/g, "");
  const [count, setCount] = React.useState(0);
  const nodeRef = React.useRef(null);
  const isInView = React.useRef(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView.current) {
          isInView.current = true;
          let start = 0;
          const end = numericValue;
          if (start === end) return;

          const totalMiliseconds = duration * 1000;
          const incrementTime = totalMiliseconds / end;

          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
          }, incrementTime);
        }
      },
      { threshold: 0.1 },
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [numericValue, duration]);

  return (
    <span ref={nodeRef}>
      {value.startsWith("₹") ? "₹" : ""}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function SectionBlock({
  id,
  sectionTitle,
  label,
  heading,
  paragraphs = [],
  bullets = [],
  ordered = false,
  highlight = false,
}: {
  id?: string;
  sectionTitle: string;
  label?: string;
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  ordered?: boolean;
  highlight?: boolean;
}) {
  if (highlight) {
    return (
      <section id={id} className="w-full py-12 sm:py-16 md:py-20">
        <div className={shell}>
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 text-white shadow-2xl shadow-slate-900/30 sm:rounded-3xl sm:p-9 md:p-12">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400/90 sm:text-[11px] sm:tracking-[0.22em]">
              {sectionTitle}
            </p>
            {label ? (
              <p className="mb-3 text-sm font-medium text-slate-300">{label}</p>
            ) : null}
            {heading ? (
              <h2 className={sectionHeading2OnDark}>
                {heading}
              </h2>
            ) : null}
            <div className="space-y-3.5 sm:space-y-4">
              {paragraphs.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-[0.98rem] leading-[1.82] text-slate-300 sm:text-[1.02rem] sm:leading-[1.85]"
                >
                  {paragraph}
                </p>
              ))}
              {bullets.length > 0 &&
                (ordered ? (
                  <ol className="list-decimal space-y-2.5 pl-4 text-[0.95rem] leading-[1.78] text-slate-200 marker:text-emerald-400 sm:space-y-3 sm:pl-5 sm:text-[1rem] sm:leading-[1.82]">
                    {bullets.map((item, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="space-y-2.5 sm:space-y-3">
                    {bullets.map((item, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex gap-2.5 text-[0.95rem] leading-[1.78] text-slate-200 sm:gap-3 sm:text-[1rem] sm:leading-[1.82]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 sm:mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="w-full py-10 sm:py-14 md:py-16 lg:py-20">
      <div className={shell}>
        <div className="rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.12)] backdrop-blur-sm sm:rounded-3xl sm:p-9 md:rounded-[2rem] md:p-11 lg:p-12">
          <div className="mb-5 flex flex-wrap items-center gap-3 sm:mb-6">
            <span className="inline-flex max-w-full rounded-full bg-slate-100 px-2.5 py-1 text-[9px] font-bold uppercase leading-snug tracking-[0.14em] text-slate-600 min-[400px]:px-3 min-[400px]:text-[10px] min-[400px]:tracking-[0.18em]">
              {sectionTitle}
            </span>
          </div>
          {label ? (
            <p className="mb-2 text-sm font-semibold text-emerald-800/90 sm:mb-3">
              {label}
            </p>
          ) : null}
          {heading ? (
            <h2 className={sectionHeading2}>
              {heading}
            </h2>
          ) : null}
          <div className="space-y-3.5 sm:space-y-4">
            {paragraphs.map((paragraph, pIdx) => (
              <p
                key={pIdx}
                className="text-[0.98rem] leading-[1.85] text-slate-600 sm:text-[1.04rem] sm:leading-[1.88]"
              >
                {paragraph}
              </p>
            ))}
            {bullets.length > 0 &&
              (ordered ? (
                <ol className="list-decimal space-y-2.5 pl-4 text-[0.95rem] leading-[1.82] text-slate-600 marker:font-semibold marker:text-emerald-700 sm:space-y-3.5 sm:pl-5 sm:text-[1.02rem] sm:leading-[1.85]">
                  {bullets.map((item, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ol>
              ) : (
                <ul className="space-y-2.5 sm:space-y-3.5">
                  {bullets.map((item, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex gap-2.5 text-[0.95rem] leading-[1.82] text-slate-600 sm:gap-3 sm:text-[1.02rem] sm:leading-[1.85]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TableBlock({
  id,
  title,
  subtitle,
  tableData,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  tableData: TableData;
}) {
  return (
    <section
      id={id}
      className="w-full bg-transparent py-10 sm:py-14 md:py-16 lg:py-20"
    >
      <div className={shell}>
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.14)] sm:rounded-3xl sm:p-8 md:rounded-[2rem] md:p-10">
          <h3 className="mb-2 text-xl font-extrabold tracking-[-0.02em] text-slate-900 sm:text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h3>
          {subtitle ? (
            <p className="mb-5 text-sm text-slate-600 sm:mb-6 sm:text-[1rem]">
              {subtitle}
            </p>
          ) : null}

          <div className="space-y-4 md:hidden">
            {tableData.rows.map((row, idx) => (
              <div
                key={`${row[0]}-${idx}`}
                id={`table-row-mobile-${idx}`}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 shadow-sm"
              >
                {row.map((cell, cellIndex) => (
                  <div
                    key={`${cell}-${cellIndex}`}
                    className="border-b border-slate-200/60 py-3 last:border-b-0 last:pb-0 first:pt-0"
                  >
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                      {tableData.headers[cellIndex]}
                    </p>
                    <p
                      className={`text-sm leading-relaxed ${
                        cell.includes("₹") || cell.includes("%")
                          ? "font-semibold text-emerald-800"
                          : "text-slate-700"
                      }`}
                    >
                      {cell}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <div className="overflow-x-auto rounded-xl border border-slate-200/80">
              <table
                id={`table-desktop-${title.toLowerCase().replace(/\s+/g, "-")}`}
                className="min-w-full border-collapse text-left text-[0.9rem] lg:text-[0.95rem]"
              >
                <thead>
                  <tr className="bg-slate-900 text-white">
                    {tableData.headers.map((header) => (
                      <th
                        key={header}
                        className="whitespace-normal px-4 py-3.5 text-left text-[0.68rem] font-bold uppercase leading-snug tracking-wide text-slate-100 lg:px-5 lg:py-4 lg:text-[0.75rem]"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {tableData.rows.map((row, idx) => (
                    <tr
                      key={`${row[0]}-${idx}`}
                      id={`table-row-desktop-${idx}`}
                      className={`border-t border-slate-100 transition-colors hover:bg-emerald-50/35 ${idx % 2 === 1 ? "bg-slate-50/40" : ""}`}
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={`${cell}-${cellIndex}`}
                          className={`px-4 py-3.5 align-top leading-relaxed lg:px-5 lg:py-4 ${
                            cell.includes("₹") || cell.includes("%")
                              ? "font-semibold text-emerald-800"
                              : "text-slate-600"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EPRCategoriesGrid({ data }: { data: TableData }) {
  const categoryColors = [
    {
      bg: "from-emerald-400 to-emerald-600",
      border: "border-emerald-400/30",
      glow: "shadow-emerald-500/20",
      text: "text-emerald-300",
      accent: "bg-emerald-500",
      watermark: "text-emerald-500/5",
    },
    {
      bg: "from-cyan-400 to-cyan-600",
      border: "border-cyan-400/30",
      glow: "shadow-cyan-500/20",
      text: "text-cyan-300",
      accent: "bg-cyan-500",
      watermark: "text-cyan-500/5",
    },
    {
      bg: "from-purple-400 to-purple-600",
      border: "border-purple-400/30",
      glow: "shadow-purple-500/20",
      text: "text-purple-300",
      accent: "bg-purple-500",
      watermark: "text-purple-500/5",
    },
    {
      bg: "from-amber-400 to-amber-600",
      border: "border-amber-400/30",
      glow: "shadow-amber-500/20",
      text: "text-amber-300",
      accent: "bg-amber-500",
      watermark: "text-amber-500/5",
    },
    {
      bg: "from-teal-400 to-teal-600",
      border: "border-teal-400/30",
      glow: "shadow-teal-500/20",
      text: "text-teal-300",
      accent: "bg-teal-500",
      watermark: "text-teal-500/5",
    },
  ];

  return (
    <section
      id="epr-categories-table"
      className="relative w-full py-12 md:py-16 overflow-hidden bg-transparent"
    >
      <div className={`${shell} relative z-10`}>
        <div className="mb-15 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-black tracking-tight text-[#1E1D4C] sm:text-3xl md:text-5xl"
          >
            The 5 plastic packaging <br className="hidden sm:block" />
            <span className="text-emerald-600">categories under EPR</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-12">
          {data.rows.map((row, idx) => {
            const style = categoryColors[idx % categoryColors.length];
            return (
              <motion.div
                key={row[0]}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.7 }}
                className="perspective-1000 group relative z-10"
              >
                {/* 3D Depth Shadows */}
                <div
                  className={`absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[2.5rem] ${style.accent} opacity-5 blur-xl transition-all duration-500 group-hover:-bottom-6 group-hover:-right-6`}
                />
                <div
                  className={`absolute -bottom-2 -right-2 -z-10 h-full w-full rounded-[2.5rem] bg-white opacity-40 shadow-lg transition-all duration-500 group-hover:-bottom-3 group-hover:-right-3`}
                />

                {/* Main 3D Card */}
                <motion.div
                  whileHover={{ rotateX: 4, rotateY: -4, z: 15 }}
                  className="relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-white bg-white/90 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Internal Roman Watermark Design */}
                  <span
                    className={`absolute -right-6 -bottom-10 pointer-events-none select-none text-[10rem] font-black leading-none ${style.watermark} transition-all duration-700 group-hover:-translate-y-4 group-hover:scale-110`}
                  >
                    {row[0]}
                  </span>

                  <div
                    className="relative z-10 mb-6 flex items-start justify-between"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <div className="relative flex h-12 w-12 items-center justify-center">
                      <div
                        className={`absolute inset-0 rotate-12 rounded-xl bg-gradient-to-br ${style.bg} opacity-20 group-hover:rotate-45 transition-transform duration-500`}
                      />
                      <span className="relative text-xl font-black text-[#1E1D4C]">
                        {row[0]}
                      </span>
                    </div>
                    <div className="rounded-full bg-white/80 px-3 py-1 text-[8px] font-black uppercase tracking-widest text-[#1E1D4C] border border-slate-100 backdrop-blur-sm">
                      CAT {row[0]}
                    </div>
                  </div>

                  <div
                    className="relative z-10"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <h3 className="mb-2 text-xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {row[1]}
                    </h3>

                    <p className="mb-6 text-[0.85rem] leading-relaxed text-slate-500">
                      {row[2]}
                    </p>
                  </div>

                  <div className="relative z-10 h-px w-full bg-slate-100 mb-6" />

                  <div
                    className="relative z-10 mt-auto"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    <p className="mb-3 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                      Examples
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {row[3].split(", ").map((example, eIdx) => (
                        <span
                          key={eIdx}
                          className="rounded-lg bg-slate-50/50 px-2 py-1 text-[0.7rem] font-semibold text-slate-600 border border-slate-100 backdrop-blur-sm transition-colors hover:bg-emerald-50 hover:border-emerald-100 hover:text-emerald-800"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Background Watermark */}
        {/* <div className="absolute -bottom-20 -right-15 w-[400px] h-[400px] opacity-[0.05] pointer-events-none z-0">
          <img
            src="/EPR/plastic.png"
            alt="Background Plastic"
            className="w-full h-full object-contain transform rotate-[-30deg]"
          />
        </div> */}
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}

export default function EcoTraceEprPage() {
  const [contactModalOpen, setContactModalOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.backgroundColor = "#F0F2F1";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const eprCategories: TableData = {
    headers: ["Cat", "Name", "What It Covers", "Real-world examples"],
    rows: [
      [
        "I",
        "Rigid plastic",
        "Hard-form plastic that holds its shape without contents. Highest recyclability. Subject to reuse obligations for brand owners.",
        "PET bottles, HDPE containers, PP caps and lids, rigid trays, jerry cans, crates, buckets, tubs",
      ],
      [
        "II",
        "Flexible plastic",
        "Single or multilayer flexible films and sheets. Includes carry bags above 75 microns. High volume for FMCG sachets and pouches.",
        "Sachets, pouches, plastic films, carry bags (75μ+), mailer bags, shrink films, wrappers",
      ],
      [
        "III",
        "Multi-layer (MLP)",
        "Two or more layers where at least one is plastic and one is non-plastic. Hardest to recycle. Fewest registered recyclers. Most expensive certificates.",
        "Tetra Pak, metalized films, laminates, chip packets, juice cartons, standup pouches, Doypack",
      ],
      [
        "IV",
        "Compostable plastic",
        "Certified compostable plastic carry bags and packaging meeting BIS standards. No URep requirement. Low volume for most companies.",
        "BIS-certified compostable bags, certified compostable packaging films",
      ],
      [
        "V",
        "Industrial / B2B",
        "Added via 2025 and 2026 amendments. Plastic packaging used in industrial, agricultural, and B2B contexts. Previously overlooked — now in scope.",
        "Woven PP sacks, FIBC bulk bags, stretch wrap, pallet film, agricultural films, bubble wrap, transit packaging",
      ],
    ],
  };

  const cpcbVsSpcb: TableData = {
    headers: ["Company Type", "Files With", "Key Obligation"],
    rows: [
      [
        "Pan-India companies operating in 3 or more states  most large FMCG, pharma, personal care, retail chains",
        "CPCB",
        "Register and file annual return on eprplastic.cpcb.gov.in",
      ],
      [
        "Regional brands operating in 1 or 2 states — state-specific food, dairy, beverage, or FMCG companies",
        "SPCB",
        "Register with relevant SPCB or PCC. Annual return via CPCB portal — SPCB reviews",
      ],
      [
        "Plastic Waste Processors and recyclers — all CPCB-registered WMAs and recycling facilities",
        "SPCB + CPCB",
        "Register with SPCB. Physical verification jointly by CPCB Regional Directorate and SPCB",
      ],
    ],
  };

  const certificateTypes: TableData = {
    headers: [
      "#",
      "Certificate Type",
      "What It Is and How It Works",
      "Key Rules (FY 2025–26)",
    ],
    rows: [
      [
        "1",
        "Recycling Certificate",
        "Issued by a CPCB-registered Plastic Waste Processor confirming a specific quantity of plastic packaging waste has been mechanically or chemically recycled. One certificate equals one MT of plastic processed. These are tradeable on CPCB's Electronic Trading Platform — companies with surplus can sell to those with shortfalls.",
        "1 cert = 1 MT · Category-specific · Tradeable · Transferred via CPCB wallet · Certificates from unregistered recyclers are legally invalid",
      ],
      [
        "2",
        "End-of-Life Certificate",
        "Issued for plastic packaging that cannot be recycled and is processed through co-processing in cement or steel kilns, waste-to-energy, waste-to-oil, or road construction. The permissible share of EPR obligation that can be met through end-of-life disposal is capped and declining each financial year as CPCB drives toward higher recycling.",
        "Declining EOL cap each FY · Primarily Cat III and IV · Co-processing, WtE, WtO, road construction · EOL redefined under 2026 amendment Rule 3(ga)",
      ],
      [
        "3",
        "URep Certificate (Recycled Content)",
        "The Use of Recycled Plastic (URep) certificate is generated by the PIBO itself — not by a recycler — to confirm that recycled plastic content has been used in their own new packaging. Mandatory from FY 2025–26 with minimum percentages per category increasing annually. Cat I: 30% in FY 25–26 rising to 60% from FY 28–29. Cat II: 10% from FY 25–26. Cat III: 5% from FY 25–26.",
        "Self-generated by PIBO · Mandatory FY 25–26 onwards · Cat I: 30% → 60% by FY 28–29 · Cat II: 10% → 20% · Cat III: 5% → 10% · FSSAI/CDSCO food and pharma exemptions available",
      ],
      [
        "4",
        "Reuse Certificate (Cat I)",
        "Applicable to Category I rigid packaging only. If a company reuses its own rigid plastic packaging — for example refilling bottles or returning containers — the quantity reused is deducted from the eligible quantity calculation, reducing the EPR obligation for that year. Declared on CPCB portal annually. Reuse of food-contact packaging is subject to FSSAI regulations.",
        "Cat I rigid only · Reduces eligible quantity · Containers 0.9–4.9L/kg: 10% target in FY 25–26 · Containers >4.9L/kg: 70% target in FY 25–26 · FSSAI rules apply",
      ],
      [
        "5",
        "ULB / PRO Credit",
        "Urban Local Bodies (ULBs) and Producer Responsibility Organisations (PROs) can generate and transfer EPR credits to PIBOs as part of city-level plastic waste collection and channelisation programs. This mechanism allows PIBOs to fulfil part of their obligation through formal waste collection systems rather than exclusively through recyclers.",
        "Via registered ULBs or PROs · Quantity exchanged for EPR credits · Must be documented and submitted on CPCB portal at annual return",
      ],
    ],
  };

  const recyclingTargets: TableData = {
    headers: [
      "Category",
      "FY 22–23",
      "FY 23–24",
      "FY 24–25",
      "FY 25–26 ★",
      "FY 26–27",
      "FY 27–28",
      "Cert price range",
    ],
    rows: [
      [
        "Cat I — Rigid",
        "50%",
        "60%",
        "70%",
        "80%",
        "90%",
        "100%",
        "₹4,000–₹8,000/MT",
      ],
      [
        "Cat II — Flexible",
        "50%",
        "60%",
        "70%",
        "80%",
        "90%",
        "100%",
        "₹6,000–₹10,000/MT",
      ],
      [
        "Cat III — Multi-layer",
        "30%",
        "40%",
        "50%",
        "60%",
        "70%",
        "80%",
        "₹12,000–₹20,000/MT",
      ],
      [
        "Cat IV — Compostable",
        "50%",
        "60%",
        "70%",
        "80%",
        "90%",
        "100%",
        "₹5,000–₹9,000/MT",
      ],
      [
        "Cat V — Industrial",
        "—",
        "—",
        "—",
        "New — TBD",
        "TBD",
        "TBD",
        "Market forming",
      ],
    ],
  };

  const urepTargets: TableData = {
    headers: [
      "Category",
      "FY 25–26 ★",
      "FY 26–27",
      "FY 27–28",
      "FY 28–29+",
      "Exemptions",
    ],
    rows: [
      [
        "Cat I — Rigid",
        "30%",
        "40%",
        "50%",
        "60%",
        "FSSAI / CDSCO / food contact. Must declare specific law in annual return.",
      ],
      [
        "Cat II — Flexible",
        "10%",
        "10%",
        "20%",
        "20%",
        "FSSAI, pesticide law. Declare exemption basis in annual return.",
      ],
      [
        "Cat III — Multi-layer",
        "5%",
        "5%",
        "10%",
        "10%",
        "Calculated on plastic layers weight only, excluding non-plastic components.",
      ],
      [
        "Cat IV — Compostable",
        "N/A",
        "N/A",
        "N/A",
        "N/A",
        "Exempt — compostable plastics not subject to URep requirement.",
      ],
    ],
  };

  const modules: TableData = {
    headers: ["Module", "What It Does", "Status"],
    rows: [
      [
        "⚡ Automatic Liability Calculator",
        "Sales data arrives from your ERP system automatically every month. EcoTrace validates every row, applies the CPCB packaging weight matrix, and calculates your exact EPR obligation in metric tonnes — broken down by category, entity, and state. Covers all 5 plastic packaging categories including the new Category V industrial packaging.",
        "Core",
      ],
      [
        "📋 Declaration Workflow",
        "Create and manage recycling declarations linking your EPR obligation to a specific recycler, plastic category, state, and financial year. Attach PO evidence, submit for approval, track every status from Draft to Approved — with a complete audit trail and timestamped log.",
        "Core",
      ],
      [
        "🏭 Vendor & WMA Management",
        "Register and manage all your CPCB-registered recyclers in one place. Track agreement dates, category certifications, state-wise capacity, CPCB registration numbers, GST details, and agreement documents. Automated expiry alerts 30 days before any agreement or certification lapses.",
        "Core",
      ],
      [
        "📊 Live Compliance Dashboard",
        "Real-time KPI cards showing total liability, total achieved, achievement %, and pending approvals. A 12-month trend chart. India state heatmap. Category breakdown donuts. All data updates automatically when declarations are approved — no manual refresh.",
        "Core",
      ],
      [
        "📄 CPCB & SPCB Report Generator",
        "One-click CPCB Annual Return PDF — all 9 mandatory sections, state-wise data, certificate ledger with CPCB IDs, URep and reuse claims, EC calculation, and signed declaration block. Also generates quarterly data extracts and state-wise achievement reports for SPCB filing.",
        "New",
      ],
      [
        "🔑 URep & Reuse Tracker",
        "Tracks the new FY 2025–26 recycled content (URep) obligation across Cat I, II, and III. Calculates your URep target based on packaging volumes, tracks procurement of recycled material, generates URep certificates on CPCB portal, and models carry-forward shortfalls across 3 years.",
        "New",
      ],
      [
        "🏆 EPR Credit Ledger",
        "An append-only ledger recording every MT of recycling credit issued — by category, by entity, by financial year. Each entry includes CPCB certificate ID, recycler registration number, GST invoice number, transfer date, and credit rate. Fully immutable and auditable.",
        "Core",
      ],
      [
        "🔗 ERP Integration API",
        "REST API connecting EcoTrace to SAP, Oracle, or any internal ERP system. Sales data pushed automatically at month-end. API validates incoming data, handles deduplication, flags unknown SKUs, and calculates liability in real time. No manual uploads — ever.",
        "New",
      ],
      [
        "🔔 Smart Alerts & Notifications",
        "Proactive alerts for every compliance risk — vendor expiry, certificate shortfall, quarterly entry due, 30 June countdown, critical EC risk alerts. Sent via email and in-app. Non-dismissable critical alerts when achievement gap exceeds 10% within 30 days of deadline.",
        "Core",
      ],
      [
        "📁 Document Vault",
        "Secure cloud storage for all EPR documents — PO evidence, WMA agreements, CPCB certificates, CTO/CTE consents, third-party audit reports. Stored on AWS S3. Accessible via time-limited pre-signed URLs. Every document linked to its specific declaration, vendor, or entity.",
        "Core",
      ],
    ],
  };

  const whoFor: TableData = {
    headers: ["Company Type", "Why EcoTrace Is Built for You", "Examples"],
    rows: [
      [
        "FMCG & Food Companies",
        "Your products are wrapped, bottled, or pouched in Category I, II, and III packaging across hundreds of SKUs sold in every state. Your EPR obligation is large, your category mix is complex, and your recycler relationships need systematic management. EcoTrace was built for exactly this complexity.",
        "Large and mid-size biscuit, snack, dairy, beverage, confectionery, and ready-to-eat food brands",
      ],
      [
        "Personal Care & Home Care",
        "Shampoo bottles, sachets, multilayer pouches — Category I, II, and III all apply. High-volume SKUs mean significant EPR obligations that must be tracked month by month with proactive shortfall management.",
        "Shampoo, soap, detergent, cleaning product, cosmetics, and personal hygiene brands",
      ],
      [
        "Pharmaceuticals & Healthcare",
        "Blister packs, sachets, PET bottles — pharmaceutical packaging spans multiple EPR categories. Multi-state distribution makes CPCB registration mandatory. URep exemptions via CDSCO must still be declared in annual returns.",
        "Generic and branded pharma companies, medical device packaging, health supplement brands",
      ],
      [
        "Beverages & Dairy",
        "PET bottles, HDPE containers, Tetra Pak cartons, pouches — beverage and dairy companies often span all four plastic categories. Category III (Tetra Pak) has the most expensive certificates and fewest recyclers.",
        "Packaged water, juices, dairy products, energy drinks, and ready-to-drink beverage brands",
      ],
      [
        "Retail, D2C & E-Commerce",
        "Brand owners selling through e-commerce or retail chains are covered. CPCB's 2026 advisory specifically named all secondary and transit packaging used by e-commerce — bubble wrap, air pillows, mailer bags — as in scope.",
        "D2C brands, private label sellers, marketplace sellers with their own branded packaging",
      ],
      [
        "Packaging Manufacturers & Traders",
        "The 2025 amendment added Manufacturers and Traders of plastic packaging to the CPCB portal. Traders and stockists dealing in finished plastic packaging must now obtain unique 15-digit CPCB EPR numbers.",
        "Plastic packaging manufacturers, converters, traders, stockists, and distributors",
      ],
      [
        "Industrial & B2B Companies",
        "Category V (new from 2025/2026) covers industrial and agricultural plastic packaging — woven PP sacks, FIBC bags, stretch wrap, pallet film. Many B2B companies are unaware they are now in scope.",
        "Chemical companies, agricultural input producers, industrial goods manufacturers, logistics packaging users",
      ],
    ],
  };

  return (
    <main className={canvas} id="ecotrace-epr-page">
      <EPRContactModal
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
      <HeroSection onOpenContactModal={() => setContactModalOpen(true)} />
      <EPRStatsStrip />
      <SSOPortalsSection />

      <section
        id="why-epr-mandatory-premium"
        className="relative w-full bg-[#FDFDFD] py-10 lg:py-15 overflow-hidden"
      >
        {[
          {
            wrap: "absolute top-40 -left-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-[0.12] grayscale pointer-events-none z-0",
            src: "/EPR/eco3.png",
            alt: "Decorative background left",
          },
          {
            wrap: "absolute top-5 right-30 w-[600px] h-[700px] md:w-[400px] md:h-[600px] opacity-[0.15] grayscale pointer-events-none z-0",
            src: "/EPR/eco2.png",
            alt: "Decorative background right",
          },
        ].map((d, i) => (
          <div key={i} className={d.wrap}>
            <img src={d.src} alt={d.alt} className="w-full h-full object-contain" />
          </div>
        ))}

        <div className="w-full max-w-[1600px] mx-auto px-0 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20 relative z-10">
          {/* Centered Heading - Matching Screenshot Typography */}
          <div className="text-center mb-10 max-w-5xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={sectionHeading2}>
                India Has Made Extended <br className="hidden md:block" />
                Producer Responsibility Mandatory. <br />
                <span className="text-slate-400">
                  For Every Category. Right Now.
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-6 block"
            >
              WHY EPR IS MANDATORY IN INDIA
            </motion.p>
          </div>

          {/* MAIN DASHBOARD CARD - Matching Screenshot Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white rounded-none sm:rounded-[3rem] md:rounded-[4rem] p-6 md:p-10 lg:p-12 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.06)] border-y sm:border border-slate-100 relative"
          >
            {/* Top Grid: Mandate & Risk */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
              <div className="space-y-3 text-center lg:text-left">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">
                  THE MANDATE
                </h3>
                <p className="text-[14px] sm:text-base leading-relaxed text-slate-600 font-medium">
                  The Ministry of Environment, Forest and Climate Change
                  (MoEF&CC) has notified EPR rules across five major waste
                  categories{" "}
                  <span className="text-slate-900 font-bold decoration-emerald-500/30 underline-offset-4 font-sora">
                    Plastic, E-Waste, Battery, Tyre, and Used Oil
                  </span>
                  . Together, these form India&apos;s circular economy backbone,
                  and enforcement is tightening every year.
                </p>
              </div>
              <div className="space-y-3 text-center lg:text-left">
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-500">
                  THE RISK
                </h3>
                <p className="text-[14px] sm:text-base leading-relaxed text-slate-600 font-medium">
                  If your company manufactures, imports, or sells products in
                  any of these categories in India{" "}
                  <span className="text-slate-900 font-bold decoration-rose-500/30 underline-offset-4 font-sora">
                    You are already legally obligated
                  </span>
                  . There is no opt-out. Non-compliance means Environmental
                  Compensation charges, registration cancellation, and business
                  bans.
                </p>
              </div>
            </div>

            {/* Table Section: Styled like the Screenshot */}
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-4 border-b border-slate-50 gap-4">
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 text-center sm:text-left">
                  The Five CPCB EPR Frameworks
                </h3>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600">
                    Active Compliance
                  </span>
                </div>
              </div>

              {/* Mobile View for Categories - Premium App Style */}
              <div className="grid grid-cols-1 gap-5 md:hidden">
                {[
                  {
                    cat: "Plastic Waste",
                    rules: "PWM Rules, 2022 + Amendments",
                    portal: "eprplastic.cpcb.gov.in",
                    who: "PIBOs using plastic packaging",
                    penalty: "₹2k–₹5k/MT EC",
                    color: "bg-emerald-500",
                    path: "/Services/epr/plastic-waste",
                  },
                  {
                    cat: "E-Waste",
                    rules: "E-Waste Rules, 2022",
                    portal: "ewaste.cpcb.gov.in",
                    who: "106+ EEE product categories",
                    penalty: "₹10L–₹50L fine",
                    color: "bg-purple-500",
                    path: "/Services/epr/e-waste",
                  },
                  {
                    cat: "Battery Waste",
                    rules: "BWM Rules, 2022",
                    portal: "batteryepr.cpcb.gov.in",
                    who: "All battery types",
                    penalty: "Registration suspension",
                    color: "bg-blue-500",
                    path: "/Services/epr/battery-waste",
                  },
                  {
                    cat: "Waste Tyre",
                    rules: "Hazardous Waste Rules, 2022",
                    portal: "eprtyres.cpcb.gov.in",
                    who: "Tyre & Vehicle importers",
                    penalty: "₹10L–₹50L fine + ban",
                    color: "bg-slate-900",
                    path: "/Services/epr/waste-tyre",
                  },
                  {
                    cat: "Used Oil",
                    rules: "Schedule IX (H&OW Rules)",
                    portal: "usedoilepr.cpcb.gov.in",
                    who: "Lubricant oil importers",
                    penalty: "EC + blacklisting",
                    color: "bg-amber-400",
                    path: "/Services/epr/used-oil",
                  },
                ].map((row, i) => (
                  <Link
                    key={i}
                    href={row.path || "#"}
                    className="group relative block overflow-hidden p-6 rounded-[2.2rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] active:scale-[0.97] transition-all duration-300"
                  >
                    {/* Left Accent Bar */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-2 ${row.color} opacity-80`}
                    />

                    <div className="flex items-center justify-between mb-5">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
                          Waste Category
                        </span>
                        <h4 className="text-[20px] font-black text-slate-900">
                          {row.cat}
                        </h4>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-active:bg-emerald-600 group-active:text-white transition-colors duration-300">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 pt-4 border-t border-slate-50">
                      <div className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                            Governing Rules
                          </span>
                          <span className="text-[13px] text-slate-600 font-bold leading-tight">
                            {row.rules}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-[9px] font-black uppercase tracking-widest text-amber-500">
                            CPCB Portal
                          </span>
                          <span className="text-[13px] text-amber-600 font-mono font-black break-all">
                            {row.portal}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600">
                            Compliance Risk
                          </span>
                          <span className="text-[13px] text-emerald-600 font-black">
                            {row.penalty}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Subtle Tap Indicator */}
                    <div className="mt-4 flex items-center justify-end">
                      <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500/60 group-active:text-emerald-600 transition-colors">
                        Tap to explore
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Desktop View for Categories */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        CATEGORY
                      </th>
                      <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        GOVERNING RULES
                      </th>
                      <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 bg-amber-50/30">
                        CPCB PORTAL
                      </th>
                      <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        WHO MUST COMPLY
                      </th>
                      <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 bg-emerald-50/30">
                        KEY PENALTY
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      {
                        cat: "Plastic Waste",
                        rules: "PWM Rules, 2022 + Amendments",
                        portal: "eprplastic.cpcb.gov.in",
                        who: "PIBOs using plastic packaging",
                        penalty: "₹2k–₹5k/MT EC",
                        color: "bg-emerald-500",
                        path: "/Services/epr/plastic-waste",
                      },
                      {
                        cat: "E-Waste",
                        rules: "E-Waste Rules, 2022",
                        portal: "ewaste.cpcb.gov.in",
                        who: "106+ EEE product categories",
                        penalty: "₹10L–₹50L fine",
                        color: "bg-purple-500",
                        path: "/Services/epr/e-waste",
                      },
                      {
                        cat: "Battery Waste",
                        rules: "BWM Rules, 2022",
                        portal: "batteryepr.cpcb.gov.in",
                        who: "All battery types",
                        penalty: "Registration suspension",
                        color: "bg-blue-500",
                        path: "/Services/epr/battery-waste",
                      },
                      {
                        cat: "Waste Tyre",
                        rules: "Hazardous Waste Rules, 2022",
                        portal: "eprtyres.cpcb.gov.in",
                        who: "Tyre & Vehicle importers",
                        penalty: "₹10L–₹50L fine + ban",
                        color: "bg-slate-900",
                        path: "/Services/epr/waste-tyre",
                      },
                      {
                        cat: "Used Oil",
                        rules: "Schedule IX (H&OW Rules)",
                        portal: "usedoilepr.cpcb.gov.in",
                        who: "Lubricant oil importers",
                        penalty: "EC + blacklisting",
                        color: "bg-amber-400",
                        path: "/Services/epr/used-oil",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={`group transition-all duration-300 cursor-pointer hover:bg-slate-50/80 relative`}
                      >
                        <td className="px-6 py-8">
                          <div className="flex items-start gap-3">
                            <span
                              className={`h-2 w-2 rounded-full ${row.color} shrink-0 mt-[7px]`}
                            />
                            <div className="flex flex-col justify-center">
                              <Link
                                href={row.path || "#"}
                                className={`font-bold text-[16px] text-slate-900 group-hover:text-emerald-600 transition-colors after:absolute after:inset-0 after:z-10`}
                              >
                                {row.cat}
                              </Link>
                              <div className="overflow-hidden pr-4">
                                <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center gap-1.5 mt-1">
                                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">
                                    Read more
                                  </span>
                                  <svg
                                    className="w-3.5 h-3.5 text-emerald-600 transition-transform duration-500 group-hover:translate-x-1.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-8 text-[13px] text-slate-500 font-medium max-w-[180px] leading-relaxed">
                          {row.rules}
                        </td>
                        <td className="px-6 py-8 text-[13px] font-black text-amber-600 bg-amber-50/20 font-mono tracking-tight">
                          {row.portal}
                        </td>
                        <td className="px-6 py-8 text-[13px] text-slate-500 font-medium max-w-[180px] leading-relaxed">
                          {row.who}
                        </td>
                        <td className="px-6 py-8 bg-emerald-50/20">
                          <span className="text-[13px] font-black text-emerald-600">
                            {row.penalty}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom Line - Matching Screenshot's Styled Card */}
            <div className="mt-12 p-6 sm:p-8 rounded-[2.5rem] bg-[#fff4e6] border border-[#fd8f01] flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="h-12 w-12 rounded-2xl bg-[#fd8f01] flex items-center justify-center text-white shrink-0 shadow-lg shadow-amber-500/20">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <p className="text-[13px] sm:text-[14px] leading-relaxed text-slate-600 font-medium text-center md:text-left">
                Non-compliance across any EPR category can result in: financial
                penalties (₹10 lakh to ₹50 lakh), public naming on CPCB&apos;s
                defaulter list, business restrictions, and long-term
                reputational damage.
                <span className="text-emerald-600 font-bold">
                  {" "}
                  EcoTrace
                </span>{" "}
                gives you full compliance visibility across every category you
                operate in from one dashboard.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <EPRCategoriesGrid data={eprCategories} />

      <ContextualCTA
        title="Multiple waste streams to manage?"
        desc="EcoTrace is the only platform in India that handles Plastic, E-Waste, Battery, Tyre, and Used Oil EPR under one roof."
        btnText="Book a Demo"
        className="bg-[#FDFDFD]"
        onButtonClick={() => setContactModalOpen(true)}
      />

      <section
        id="epr-compliance-challenges"
        className="w-full py-24 bg-slate-50/50"
      >
        <div className={shell}>
          <div className="mb-16 text-center max-w-5xl mx-auto">
            <div className="mb-6">
              <span
                className="text-[10px] font-black uppercase tracking-[0.3em]"
                style={{ color: "var(--color-emerald-600)" }}
              >
                Why EPR is mandatory
              </span>
            </div>
            <h2 className={sectionHeading2}>
              Why most companies are still{" "}
              <span className="text-rose-600">struggling</span>
            </h2>
            <p className="max-w-3xl text-[15px] leading-relaxed text-slate-500 font-satoshi mx-auto">
              Despite the law being in force, most Indian companies are still
              managing EPR compliance through spreadsheets, email chains, and
              manual CPCB portal entries. Here is what that looks like:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
                text: "Finance teams spending 3–5 working days every month manually calculating EPR liability from sales data across multiple SKUs, states, and categories",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                ),
                text: "No real-time visibility into certificate gaps — shortfalls discovered only 2–3 weeks before 30 June, leading to panic purchases at 2–3× normal certificate prices",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                ),
                text: "Recycler agreements, capacity limits, CPCB certificate IDs, and GST invoice reconciliation managed through email and physical files with no system of record",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                ),
                text: "Annual return preparation takes 2–4 weeks — compiling state-wise data, certificate IDs, invoice numbers, and entity-wise consumption across subsidiaries and business units",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                ),
                text: "New URep obligation from FY 2025–26 adds another layer of calculation and declaration that most companies have no system to track",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  />
                ),
                text: "No audit trail — when CPCB or SPCBs request documentation during third-party audits, teams scramble to piece together evidence from disconnected sources",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-red-50 group-hover:text-red-500 transition-colors duration-500">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {item.icon}
                  </svg>
                </div>
                <p className="text-[0.95rem] leading-relaxed text-slate-600 group-hover:text-slate-900 transition-colors duration-500">
                  {item.text}
                </p>
                <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-3xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContextualCTA
        title="Stop manual spreadsheet filing."
        desc="Most companies spend 200+ man-hours on EPR returns. We reduce that to 15 minutes of automated data validation."
        btnText="Automate Your Returns"
        className="bg-slate-50/50 border"
        onButtonClick={() => setContactModalOpen(true)}
      />

      {/* Why Pantheon Digital - Our Story & Infrastructure */}
      <section
        id="why-pantheon-digital"
        className="w-full py-24 md:py-32 bg-gradient-to-b from-white via-emerald-50/30 to-[#F0F2F1] relative overflow-hidden font-avenir"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-[120px]" />
        </div>

        {/* Background Decorative Illustration - SVG Style Bottom Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 0.1, y: 0 }}
          viewport={{ once: true }}
          className="absolute inset-x-0 bottom-0 z-0 grayscale pointer-events-none flex items-end justify-center overflow-hidden h-full"
        >
          <img
            src="/EPR/image.png"
            alt="Pantheon EPR Infrastructure Background"
            className="w-full max-w-[1400px] h-auto object-contain opacity-40 translate-y-20"
          />
        </motion.div>

        <div className={shell + " relative z-10"}>
          {/* Section Header */}
          <div className="mb-16 md:mb-20 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-emerald-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 font-clash">
                ABOUT PANTHEON DIGITAL
              </span>
              <div className="h-[2px] w-12 bg-emerald-600" />
            </div>
            <h2 className={sectionHeading2Compact}>
              Building India&apos;s EPR Infrastructure, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                One Platform at a Time.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
            {/* Left Column: The Vision */}
            <div className="lg:col-span-7 space-y-8 min-w-0">
              <div className="space-y-6 rounded-[2rem] border border-white/70 bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                <p className={aboutVisionLead}>
                  <span className=" text-sm font-black uppercase tracking-widest text-slate-900 font-clash">
                    Pantheon Digital Pvt. Ltd.
                  </span>{" "}
                  was founded with one conviction: that India&apos;s
                  environmental compliance landscape was broken not because
                  companies didn&apos;t want to comply, but because the tools to
                  comply simply didn&apos;t exist.
                </p>
                <p className={aboutVisionLead}>
                  Regulators had built portals. Consultants offered advice. But
                  no one had built the software layer that could sit between a
                  company&apos;s internal operations and the CPCB portal
                  automating everything in between.
                  <span className={aboutVisionPullQuote}>
                    That gap was where Pantheon Digital chose to build.
                  </span>
                </p>
              </div>

              {/* Milestones Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 pt-8 border-t border-slate-200/60">
                {[
                  {
                    label: "Founded",
                    desc: "Incorporated as a technology company focused on regulatory compliance software, combining expertise in SaaS, environmental law, and CPCB portal operations.",
                  },
                  {
                    label: "First Product",
                    desc: "EcoTrace was built from the ground up as our flagship platform — purpose-built for CPCB's specific workflows and certificate types.",
                  },
                  {
                    label: "First Enterprise Client",
                    desc: "Successfully deployed for a leading pan-India FMCG enterprise, shaping the modules that now power the entire platform.",
                  },
                  {
                    label: "Multi-Category Expansion",
                    desc: "India's only unified platform covering all five CPCB categories: Plastic, E-Waste, Battery, Tyre, and Used Oil.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    whileHover={{ y: -3 }}
                    className="space-y-3 group rounded-2xl border border-slate-200/60 bg-white/70 px-4 py-5 md:px-5 md:py-6 transition-all duration-300 hover:border-emerald-200 hover:shadow-[0_10px_25px_rgba(16,185,129,0.08)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                      <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 font-clash">
                        {item.label}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Today & Tech Bento */}
            <div className="lg:col-span-5 space-y-6 md:space-y-8 min-w-0">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white rounded-[2rem] md:rounded-[2.2rem] p-7 md:p-9 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative overflow-hidden group transition-all hover:border-emerald-200 hover:shadow-xl"
              >
                <div className="absolute -top-4 -right-6 p-8 opacity-[0.10] group-hover:opacity-[0.20] transition-opacity duration-500">
                  <img
                    src="/EPR/eco.svg"
                    alt="EcoTrace"
                    className="w-60 h-60 object-contain "
                  />
                </div>
                <h3 className="text-2xl md:text-[1.75rem] font-clash font-black text-slate-900 mb-5 tracking-tight">
                  Today
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-7 text-[15px]">
                  EcoTrace serves clients across FMCG, pharma, electronics,
                  automotive, and industrial sectors. Pantheon Digital is the
                  only technology company in India to have built a
                  production-grade, end-to-end EPR compliance platform across
                  all five CPCB EPR categories.
                </p>
                <div className="pt-6 border-t border-slate-100">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 block mb-4 font-clash">
                    TECHNOLOGY STACK
                  </span>
                  <p className="text-[11px] text-slate-400 font-mono leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100 break-words">
                    React.js · Spring Boot · PostgreSQL · AWS Mumbai · DPDP Act
                    2023 Compliant · 99.5% Uptime
                  </p>
                </div>
              </motion.div>

              <motion.div
                id="infrastructure-ready"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-gradient-to-br from-slate-950 via-slate-900 to-[#0B1833] rounded-[2rem] md:rounded-[2.2rem] p-7 md:p-9 text-white relative overflow-hidden group shadow-2xl border border-slate-700/50"
              >
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-400 to-cyan-400 opacity-80" />
                <h3 className="text-xl md:text-2xl font-clash font-black mb-4 relative z-10 tracking-tight">
                  Infrastructure Ready
                </h3>
                <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed mb-7 relative z-10 font-medium max-w-[44ch]">
                  Built on enterprise-grade AWS infrastructure to ensure
                  security and scalability for India&apos;s largest producers.
                </p>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-emerald-400 font-clash">
                    Live Compliance Monitoring
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pantheon Digital - Value Propositions */}
      <section className="w-full py-24 md:py-32 bg-white relative overflow-hidden font-avenir">
        <div className={shell}>
          <div className="text-center mb-20 max-w-4xl mx-auto px-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-6 block font-clash">
              WHY CHOOSE US
            </span>
            <h2 className={sectionHeading2}>
              The Only Company to Automate the{" "}
              <br className="hidden md:block" />
              <span className="text-emerald-600">Entire EPR Lifecycle.</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              There are consultants who help you file. There are portals where
              you enter data. But there is only one company that has built
              software to automate the entire lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Built for India, by India",
                desc: "Not an adapted foreign software. Every calculation, certificate type, and rule change is built natively for India.",
                icon: TirangaIcon,
                color: "bg-[#cccccc] text-white",
              },
              {
                title: "Only Multi-Category Platform",
                desc: "Covers all five CPCB categories — Plastic, E-Waste, Battery, Tyre, and Used Oil — under one unified login.",
                icon: Layers,
                color: "bg-[#059669] text-white",
              },
              {
                title: "Automation-First Architecture",
                desc: "No manual entry. Sales data flows from ERP, liability calculated automatically, returns generated in one click.",
                icon: Zap,
                color: "bg-[#D97706] text-white",
              },
              {
                title: "Enterprise-Grade Security",
                desc: "DPDP Act 2023 compliant. AWS Mumbai hosting, JWT auth, and pre-signed S3 document storage.",
                icon: Shield,
                color: "bg-[#4F46E5] text-white",
              },
              {
                title: "Complete Regulatory Coverage",
                desc: "Tracks every amendment across all categories. Updated natively before your next compliance deadline.",
                icon: FileText,
                color: "bg-[#E11D48] text-white",
              },
              {
                title: "White-Glove Implementation",
                desc: "Dedicated team for ERP integration, weight matrix config, and vendor migration over 6 months.",
                icon: Handshake,
                color: "bg-[#0D9488] text-white",
              },
              {
                title: "Ongoing Expert Support",
                desc: "Compliance experts stay with you through every return cycle, ensuring zero shortfall and portal sync.",
                icon: Headset,
                color: "bg-[#7C3AED] text-white",
              },
              {
                title: "Proven at Enterprise Scale",
                desc: "Managing thousands of SKUs and 28+ states for pan-India FMCG operations in production.",
                icon: TrendingUp,
                color: "bg-[#EA580C] text-white",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 15,
                  delay: idx * 0.1,
                }}
                className="group relative p-8 rounded-[2.5rem] bg-[#F8FAFA] border border-slate-100 hover:bg-white hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-700 overflow-hidden"
              >
                {/* Large Background Watermark */}
                <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 pointer-events-none">
                  <item.icon className="h-32 w-32" strokeWidth={1.5} />
                </div>

                <div className="relative mb-6">
                  <div
                    className={`h-14 w-14 rounded-2xl ${item.color} flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg shadow-black/5`}
                  >
                    <item.icon className="h-7 w-7" strokeWidth={2} />
                  </div>
                </div>

                <h4 className="text-lg font-black text-slate-900 mb-3 tracking-tight font-clash leading-tight relative z-10">
                  {item.title}
                </h4>
                <p className="text-[13px] leading-relaxed text-slate-500 font-medium group-hover:text-slate-600 transition-colors relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="authority-mapping"
        className="w-full py-24 bg-gradient-to-b from-white via-emerald-50/40 to-[#F0F2F1] border-y border-slate-200 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -right-[10%] top-0 h-96 w-96 rounded-full bg-emerald-200/20 blur-[100px]" />

          {/* Master Sustainability Ecosystem Illustration */}
          {/* <div className="absolute -left-20 bottom-[-5%] w-[700px] h-[700px] opacity-[0.08] grayscale pointer-events-none z-0 rotate-[-10deg]">
            <img 
              src="/EPR/sustainability_ecosystem_illustration.png" 
              alt="Sustainability Ecosystem Illustration" 
              className="w-full h-full object-contain"
            />
          </div> */}
        </div>

        <div className={shell + " relative z-10"}>
          <div className="mb-16">
            <h2 className={sectionHeading2}>
              Which authority does your company report to?
            </h2>
            <div className="h-1.5 w-20 bg--600 rounded-full" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:auto-rows-fr">
            {[
              {
                badge: "Central Authority",
                title: "CPCB",
                subtitle: "Pan-India Companies",
                desc: "Operating in 3 or more states  most large FMCG, pharma, personal care, retail chains",
                obligation:
                  "Register and file annual return on eprplastic.cpcb.gov.in",
                icon: Landmark,
                accent: "indigo",
              },
              {
                badge: "Regional Level",
                title: "SPCB",
                subtitle: "Regional Brands",
                desc: "Operating in 1 or 2 states  state-specific food, dairy, beverage, or FMCG companies",
                obligation:
                  "Register with relevant SPCB or PCC. Annual return via CPCB portal — SPCB reviews",
                icon: MapPin,
                accent: "emerald",
              },
              {
                badge: "Facility Level",
                title: "SPCB + CPCB",
                subtitle: "Processors & Recyclers",
                desc: "All CPCB-registered WMAs and recycling facilities",
                obligation:
                  "Register with SPCB. Physical verification jointly by CPCB Regional Directorate and SPCB",
                icon: Factory,
                accent: "violet",
              },
            ].map((auth, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 18,
                  delay: idx * 0.15,
                }}
                className="group relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 md:p-7 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.12)]"
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-1.5 ${auth.accent === "indigo" ? "bg-emerald-400" : auth.accent === "emerald" ? "bg-emerald-400" : "bg-amber-950"}`}
                />
                <div
                  className={`mb-5 inline-flex w-fit rounded-full border px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] transition-colors duration-300
                  ${
                    auth.accent === "indigo"
                      ? "bg-indigo-50/80 text-indigo-700 border-indigo-100"
                      : auth.accent === "emerald"
                        ? "bg-emerald-50/80 text-emerald-700 border-emerald-100"
                        : "bg-slate-100 text-slate-700 border-slate-200"
                  }`}
                >
                  {auth.badge}
                </div>

                <div className="mb-6 flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <h4 className="mb-1 text-[1.9rem] font-black leading-none text-slate-900">
                      {auth.title}
                    </h4>
                    <p
                      className={`text-[11px] font-black uppercase tracking-[0.15em] ${auth.accent === "indigo" ? "text-indigo-700" : auth.accent === "emerald" ? "text-emerald-700" : "text-slate-600"}`}
                    >
                      {auth.subtitle}
                    </p>
                  </div>
                  <div
                    className={`h-12 w-12 shrink-0 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105
                    ${
                      auth.accent === "indigo"
                        ? "bg-indigo-50 text-indigo-600"
                        : auth.accent === "emerald"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <auth.icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                </div>

                <div className="mb-6 rounded-2xl bg-slate-50 p-4">
                  <p className="text-[13px] font-medium leading-relaxed text-slate-600">
                    {auth.desc}
                  </p>
                </div>

                <div
                  className={`mt-auto rounded-2xl border p-5 ${
                    auth.accent === "indigo"
                      ? "border-indigo-100 bg-indigo-50/60"
                      : auth.accent === "emerald"
                        ? "border-emerald-100 bg-emerald-50/60"
                        : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <span className="mb-2 block text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                    Key Obligation
                  </span>
                  <p className="text-[12px] font-bold leading-snug text-slate-800">
                    {auth.obligation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContextualCTA
        title="Need help with CPCB registration?"
        desc="The registration process for PIBOs involves complex document validation. Our compliance team handles it end-to-end."
        btnText="Talk to a Registration Expert"
        className="bg-[#F0F2F1]"
        onButtonClick={() => setContactModalOpen(true)}
      />

      {/* Certificate Types - 3D Holographic Grid */}
      <section
        id="certificate-types"
        className="w-full py-24 md:py-40 bg-[#FDFDFD] relative overflow-hidden"
      >
        {/* Background Decorative Image */}
        <div className="absolute top-40 -right-20 w-[750px] h-[450px] opacity-[0.08] grayscale pointer-events-none z-0">
          <img
            src="/EPR/eco6.png"
            alt="Certificate Types Background"
            className="w-full h-full object-contain transform rotate-[10deg]"
          />
        </div>

        <div className={shell + " relative z-10"}>
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span
              className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 block"
              style={{ color: "var(--color-emerald-600)" }}
            >
              THE 6 EPR CERTIFICATE TYPES
            </span>
            <p className="text-emerald-600 font-bold text-sm mb-4 font-satoshi uppercase tracking-widest">
              Every certificate type. Every compliance requirement. Tracked in
              one place.
            </p>
            <h2 className={sectionHeading2}>
              The Certificates Your Company Needs And What Each One Means
            </h2>
            <p className="text-[16px] text-slate-500 leading-relaxed font-satoshi max-w-3xl mx-auto">
              Under India&apos;s EPR framework, companies fulfil their
              compliance obligations through distinct types of certificates each
              serving a different purpose under the Plastic Waste Management
              Rules. EcoTrace manages all of them, tracking each certificate in
              your ledger with CPCB certificate IDs, recycler registration
              numbers, GST invoice numbers, and transfer dates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "01",
                title: "Recycling Certificate",
                desc: "Issued by a CPCB-registered Plastic Waste Processor confirming a specific quantity of plastic packaging waste has been mechanically or chemically recycled. One certificate equals one MT of plastic processed. These are tradeable on CPCB's Electronic Trading Platform — companies with surplus can sell to those with shortfalls.",
                rules: [
                  "1 cert = 1 MT",
                  "Tradeable on CPCB Platform",
                  "Category-specific",
                  "Certificates from unregistered recyclers are legally invalid",
                ],
                accent: "emerald",
                icon: Recycle,
              },
              {
                id: "02",
                title: "End-of-Life Certificate",
                desc: "Issued for plastic packaging that cannot be recycled and is processed through co-processing in cement or steel kilns, waste-to-energy, waste-to-oil, or road construction. The permissible share of EPR obligation that can be met through end-of-life disposal is capped and declining each financial year.",
                rules: [
                  "Declining EOL cap each FY",
                  "Primarily Cat III and IV",
                  "WtE / WtO Methods",
                  "Rule 3(ga) redefined under 2026 amendment",
                ],
                accent: "rose",
                icon: Flame,
              },
              {
                id: "03",
                title: "URep Certificate (Recycled Content)",
                desc: "The Use of Recycled Plastic (URep) certificate is generated by the PIBO itself — not by a recycler — to confirm that recycled plastic content has been used in their own new packaging. Mandatory from FY 2025–26 with minimum percentages per category increasing annually.",
                rules: [
                  "Cat I: 30% → 60% by FY 28–29",
                  "Cat II: 10% from FY 25–26",
                  "Cat III: 5% from FY 25–26",
                  "FSSAI/CDSCO exemptions available",
                ],
                accent: "indigo",
                icon: FileCheck,
              },
              {
                id: "04",
                title: "Reuse Certificate (Cat I)",
                desc: "Applicable to Category I rigid packaging only. If a company reuses its own rigid plastic packaging — for example refilling bottles or returning containers — the quantity reused is deducted from the eligible quantity calculation, reducing the EPR obligation for that year.",
                rules: [
                  "Containers 0.9–4.9L/kg: 10% target",
                  "Containers >4.9L/kg: 70% target",
                  "Reduces eligible quantity",
                  "Subject to FSSAI regulations",
                ],
                accent: "amber",
                icon: Repeat,
              },
              {
                id: "05",
                title: "ULB / PRO Credit",
                desc: "Urban Local Bodies (ULBs) and Producer Responsibility Organisations (PROs) can generate and transfer EPR credits to PIBOs as part of city-level plastic waste collection and channelisation programs. Fulfil obligation through formal waste systems.",
                rules: [
                  "Registered ULBs or PROs",
                  "Electronic credit exchange",
                  "CPCB Portal submission",
                  "Formal city-level collection",
                ],
                accent: "violet",
                icon: CreditCard,
              },
              {
                id: "06",
                title: "Surplus Trading Credit",
                desc: "Generated when a PIBO exceeds its mandatory recycling targets for a specific category. These surplus credits are tradeable assets that can be sold to other companies with shortfalls or carried forward to offset your own future liabilities.",
                rules: [
                  "Valid for 3 years",
                  "Tradeable on CPCB Exchange",
                  "Monetizable compliance asset",
                  "Category-specific transfer",
                ],
                accent: "blue",
                icon: TrendingUp,
              },
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-full p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] transition-all duration-700 hover:shadow-2xl hover:border-transparent cursor-pointer overflow-hidden"
              >
                {/* 3D Inner Glow Accents */}
                <div
                  className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700
                  ${cert.accent === "emerald" ? "bg-emerald-500" : cert.accent === "rose" ? "bg-rose-500" : cert.accent === "indigo" ? "bg-indigo-500" : cert.accent === "amber" ? "bg-amber-500" : cert.accent === "blue" ? "bg-blue-500" : "bg-violet-500"}`}
                />

                {/* 3D Ribbon Accent */}
                <div
                  className={`absolute top-0 left-0 w-1 h-full transition-all duration-700 group-hover:w-2
                  ${cert.accent === "emerald" ? "bg-emerald-500" : cert.accent === "rose" ? "bg-rose-500" : cert.accent === "indigo" ? "bg-indigo-500" : cert.accent === "amber" ? "bg-amber-500" : cert.accent === "blue" ? "bg-blue-500" : "bg-violet-500"}`}
                />

                {/* Floating Ghost Number */}
                <span className="absolute right-6 top-6 text-6xl font-clash font-black text-slate-50 group-hover:text-slate-100/50 transition-colors duration-700 pointer-events-none select-none">
                  {cert.id}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  <div
                    className={`mb-8 h-12 w-12 rounded-xl flex items-center justify-center transition-transform duration-700 group-hover:scale-110
                    ${
                      cert.accent === "emerald"
                        ? "bg-emerald-50 text-emerald-600"
                        : cert.accent === "rose"
                          ? "bg-rose-50 text-rose-600"
                          : cert.accent === "indigo"
                            ? "bg-indigo-50 text-indigo-600"
                            : cert.accent === "amber"
                              ? "bg-amber-50 text-amber-600"
                              : cert.accent === "blue"
                                ? "bg-blue-50 text-blue-600"
                                : "bg-violet-50 text-violet-600"
                    }`}
                  >
                    <cert.icon className="h-6 w-6" strokeWidth={2} />
                  </div>

                  <h3 className="text-xl font-clash font-black text-slate-950 mb-4 tracking-tight group-hover:text-slate-800 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 font-satoshi leading-relaxed mb-8 flex-grow">
                    {cert.desc}
                  </p>

                  <div className="space-y-2">
                    {cert.rules.map((rule, rIdx) => (
                      <div key={rIdx} className="flex items-center gap-2">
                        <div
                          className={`h-1 w-1 rounded-full ${cert.accent === "emerald" ? "bg-emerald-400" : cert.accent === "rose" ? "bg-rose-400" : cert.accent === "indigo" ? "bg-indigo-400" : cert.accent === "amber" ? "bg-amber-400" : cert.accent === "blue" ? "bg-blue-400" : "bg-violet-400"}`}
                        />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-500">
                          {rule}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContextualCTA
        title="Procure verified recycling credits."
        desc="EcoTrace connects you with 100+ CPCB-registered recyclers to ensure you meet your targets with zero legal risk."
        btnText="Check Credit Availability"
        className="bg-[#FDFDFD]"
        onButtonClick={() => setContactModalOpen(true)}
      />
      {/* Recycling Targets - Timeline Analysis - Restored & Fixed */}
      <section
        id="recycling-targets"
        className="w-full py-14 md:py-24 bg-[#FDFDFD] text-slate-900 relative overflow-hidden"
      >
        {[
          {
            wrap: "absolute top-20 right-0 w-[750px] h-[750px] opacity-[0.12] grayscale pointer-events-none z-0",
            imgClass: "w-full h-full object-contain transform rotate-[-10deg]",
            alt: "Recycling targets background",
          },
          {
            wrap: "absolute -bottom-81 left-0 w-[700px] h-[700px] opacity-[0.12] grayscale pointer-events-none z-0",
            imgClass: "w-full h-full object-contain transform ",
            alt: "Recycling targets background left",
          },
        ].map((w, i) => (
          <div key={i} className={w.wrap}>
            <img
              src="/EPR/eco2.png"
              alt={w.alt}
              className={w.imgClass}
            />
          </div>
        ))}

        {/* Background Decorative Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/[0.03] blur-[150px] rounded-full translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/[0.03] blur-[150px] rounded-full -translate-x-1/4 translate-y-1/4" />

        <div className={shell}>
          <div className="mb-14 text-center mx-auto max-w-5xl">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-6 block">
              Recycling Targets
            </span>
            <h2 className={sectionHeading2}>
              Your obligation grows every year. <br />{" "}
              <span className="text-slate-400">EcoTrace grows with it.</span>
            </h2>
            <p className="text-slate-500 text-[12px] max-w-3xl mx-auto leading-relaxed font-satoshi">
              CPCB assigns EPR recycling targets category-wise based on the
              plastic packaging volumes each company declares at registration.
              Targets are not static — they increase every financial year on a
              progressive schedule designed to move Indian industry toward full
              circular economy by FY 2027–28.{" "}
              <span className="text-rose-600 font-bold">
                Missing targets in any year carries forward with compounding
                penalties.
              </span>
            </p>
          </div>

          <div className="space-y-16 relative">
            {/* Recycling Targets Card - 3D Elevated */}
            <motion.div
              whileHover={{ y: -10 }}
              className="relative p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] bg-white border border-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] overflow-hidden group transition-all duration-700"
            >
              {/* Mobile Card View for Recycling Targets */}
              <div className="grid grid-cols-1 gap-4 md:hidden">
                {[
                  {
                    name: "Cat I — Rigid",
                    f22: "50%",
                    f23: "60%",
                    f24: "70%",
                    f25: "80%",
                    f26: "90%",
                    f27: "100%",
                    price: "₹4k–8k",
                  },
                  {
                    name: "Cat II — Flexible",
                    f22: "50%",
                    f23: "60%",
                    f24: "70%",
                    f25: "80%",
                    f26: "90%",
                    f27: "100%",
                    price: "₹6k–10k",
                  },
                  {
                    name: "Cat III — Multi-layer",
                    f22: "30%",
                    f23: "40%",
                    f24: "50%",
                    f25: "60%",
                    f26: "70%",
                    f27: "80%",
                    price: "₹12k–20k",
                  },
                  {
                    name: "Cat IV — Compostable",
                    f22: "50%",
                    f23: "60%",
                    f24: "70%",
                    f25: "80%",
                    f26: "90%",
                    f27: "100%",
                    price: "₹15k–25k",
                  },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-black text-slate-900 text-sm">
                        {row.name}
                      </span>
                      <span className="text-[10px] font-black px-2 py-1 bg-emerald-100 text-emerald-700 rounded-lg">
                        {row.price}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[8px] uppercase tracking-wider text-slate-400">
                          FY 24-25
                        </span>
                        <span className="text-xs font-bold text-slate-600">
                          {row.f24}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[8px] uppercase tracking-wider text-amber-500">
                          FY 25-26 ★
                        </span>
                        <span className="text-xs font-black text-amber-600">
                          {row.f25}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[8px] uppercase tracking-wider text-emerald-600">
                          FY 27-28
                        </span>
                        <span className="text-xs font-black text-emerald-700">
                          {row.f27}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="relative z-10 hidden md:block overflow-x-auto macos-scrollbar">
                <table className="w-full text-left border-collapse min-w-[900px]">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Category
                      </th>
                      <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        FY 22–23
                      </th>
                      <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        FY 23–24
                      </th>
                      <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        FY 24–25
                      </th>
                      <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-amber-500">
                        FY 25–26 ★
                      </th>
                      <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        FY 26–27
                      </th>
                      <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-emerald-600">
                        FY 27–28
                      </th>
                      <th className="py-4 px-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Cert Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      {
                        name: "Cat I — Rigid",
                        f22: "50%",
                        f23: "60%",
                        f24: "70%",
                        f25: "80%",
                        f26: "90%",
                        f27: "100%",
                        price: "₹4k–8k",
                      },
                      {
                        name: "Cat II — Flexible",
                        f22: "50%",
                        f23: "60%",
                        f24: "70%",
                        f25: "80%",
                        f26: "90%",
                        f27: "100%",
                        price: "₹6k–10k",
                      },
                      {
                        name: "Cat III — Multi-layer",
                        f22: "30%",
                        f23: "40%",
                        f24: "50%",
                        f25: "60%",
                        f26: "70%",
                        f27: "80%",
                        price: "₹12k–20k",
                      },
                      {
                        name: "Cat IV — Compostable",
                        f22: "50%",
                        f23: "60%",
                        f24: "70%",
                        f25: "80%",
                        f26: "90%",
                        f27: "100%",
                        price: "₹15k–25k",
                      },
                      {
                        name: "Cat V — Industrial",
                        f22: "—",
                        f23: "—",
                        f24: "—",
                        f25: "New",
                        f26: "TBD",
                        f27: "TBD",
                        price: "Market Forming",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className="group hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="py-6 px-4">
                          <span className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                            {row.name}
                          </span>
                        </td>
                        <td className="py-6 px-4 text-xs font-medium text-slate-500">
                          {row.f22}
                        </td>
                        <td className="py-6 px-4 text-xs font-medium text-slate-500">
                          {row.f23}
                        </td>
                        <td className="py-6 px-4 text-xs font-medium text-slate-500">
                          {row.f24}
                        </td>
                        <td className="py-5 px-4 font-black text-amber-600 text-sm bg-amber-50/30">
                          {row.f25}
                        </td>
                        <td className="py-5 px-4 text-slate-500 text-sm">
                          {row.f26}
                        </td>
                        <td className="py-5 px-4 font-black text-emerald-600 text-sm bg-emerald-50/30">
                          {row.f27}
                        </td>
                        <td className="py-5 px-4 font-bold text-slate-400 text-[11px] italic">
                          {row.price}/MT
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Critical Insight & URep Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="p-8 rounded-[2.5rem] bg-indigo-50 border border-indigo-100 shadow-xl shadow-indigo-200/20">
                  <h4 className="text-xl font-black text-indigo-900 mb-4">
                    Critical Insight — Category III Focus
                  </h4>
                  <p className="text-indigo-700/70 text-sm leading-relaxed font-medium">
                    Category III (multi-layer) is the most difficult and
                    expensive category to meet — with certificate prices of{" "}
                    <span className="font-black text-indigo-900">
                      ₹12,000–₹20,000 per MT
                    </span>{" "}
                    due to the limited number of CPCB-registered multi-layer
                    recyclers. EcoTrace&apos;s real-time shortfall alert is
                    critical specifically for companies with significant
                    Category III packaging.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="p-8 md:p-10 rounded-[3rem] bg-white border border-slate-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] overflow-hidden"
                >
                  <div className="mb-8">
                    <h4 className="text-xl font-black text-slate-900 mb-2">
                      URep (Recycled Content) Targets — Mandatory from FY
                      2025–26
                    </h4>
                    <p className="text-slate-500 text-xs">
                      New mandatory requirements for using recycled plastic
                      content in your own packaging.
                    </p>
                  </div>

                  {/* Mobile Card View for URep Targets */}
                  <div className="grid grid-cols-1 gap-4 md:hidden">
                    {[
                      {
                        name: "Cat I — Rigid",
                        f25: "30%",
                        f26: "40%",
                        f27: "50%",
                        f28: "60%",
                        notes:
                          "FSSAI / CDSCO / Food contact. Declare law in return.",
                      },
                      {
                        name: "Cat II — Flexible",
                        f25: "10%",
                        f26: "10%",
                        f27: "20%",
                        f28: "20%",
                        notes: "FSSAI, pesticide law. Declare exemption basis.",
                      },
                      {
                        name: "Cat III — Multi-layer",
                        f25: "5%",
                        f26: "5%",
                        f27: "10%",
                        f28: "10%",
                        notes: "Calculated on plastic layers weight only.",
                      },
                      {
                        name: "Cat IV — Compostable",
                        f25: "N/A",
                        f26: "N/A",
                        f27: "N/A",
                        f28: "N/A",
                        notes:
                          "Exempt — compostable plastics not subject to URep.",
                      },
                    ].map((row, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-100"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-black text-slate-900 text-sm">
                            {row.name}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mb-3">
                          <div className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-wider text-amber-500">
                              FY 25-26 ★
                            </span>
                            <span className="text-xs font-black text-amber-600">
                              {row.f25}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-wider text-slate-400">
                              FY 28-29+
                            </span>
                            <span className="text-xs font-bold text-slate-600">
                              {row.f28}
                            </span>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-slate-200/60">
                          <span className="text-[8px] uppercase tracking-wider text-slate-400 block mb-1">
                            Notes
                          </span>
                          <p className="text-[10px] text-slate-500 leading-tight font-medium">
                            {row.notes}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop View */}
                  <div className="hidden md:block overflow-x-auto macos-scrollbar">
                    <table className="w-full text-left border-collapse min-w-[1000px]">
                      <thead>
                        <tr className="border-b border-slate-100">
                          <th className="py-3 px-4 text-[9px] font-black uppercase tracking-widest text-slate-400">
                            Category
                          </th>
                          <th className="py-3 px-4 text-[9px] font-black uppercase tracking-widest text-amber-500">
                            FY 25–26 ★
                          </th>
                          <th className="py-3 px-4 text-[9px] font-black uppercase tracking-widest text-slate-400">
                            FY 26–27
                          </th>
                          <th className="py-3 px-4 text-[9px] font-black uppercase tracking-widest text-slate-400">
                            FY 27–28
                          </th>
                          <th className="py-3 px-4 text-[9px] font-black uppercase tracking-widest text-slate-400">
                            FY 28–29+
                          </th>
                          <th className="py-3 px-4 text-[9px] font-black uppercase tracking-widest text-slate-400">
                            Exemptions / Notes
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {[
                          {
                            name: "Cat I — Rigid",
                            f25: "30%",
                            f26: "40%",
                            f27: "50%",
                            f28: "60%",
                            notes:
                              "FSSAI / CDSCO / Food contact. Declare law in return.",
                          },
                          {
                            name: "Cat II — Flexible",
                            f25: "10%",
                            f26: "10%",
                            f27: "20%",
                            f28: "20%",
                            notes:
                              "FSSAI, pesticide law. Declare exemption basis.",
                          },
                          {
                            name: "Cat III — Multi-layer",
                            f25: "5%",
                            f26: "5%",
                            f27: "10%",
                            f28: "10%",
                            notes: "Calculated on plastic layers weight only.",
                          },
                          {
                            name: "Cat IV — Compostable",
                            f25: "N/A",
                            f26: "N/A",
                            f27: "N/A",
                            f28: "N/A",
                            notes:
                              "Exempt — compostable plastics not subject to URep.",
                          },
                        ].map((row, rIdx) => (
                          <tr key={rIdx}>
                            <td className="py-4 px-4 font-bold text-slate-900 text-xs">
                              {row.name}
                            </td>
                            <td className="py-4 px-4 font-black text-amber-600 text-xs bg-amber-50/30">
                              {row.f25}
                            </td>
                            <td className="py-4 px-4 text-slate-500 text-xs">
                              {row.f26}
                            </td>
                            <td className="py-4 px-4 text-slate-500 text-xs">
                              {row.f27}
                            </td>
                            <td className="py-4 px-4 text-slate-500 text-xs">
                              {row.f28}
                            </td>
                            <td className="py-4 px-4 text-slate-400 text-[10px] font-medium max-w-[200px] leading-relaxed italic">
                              {row.notes}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features - The 10 Integrated Modules */}
      <section
        id="platform-features"
        className="w-full py-24 md:py-36 bg-gradient-to-b from-white via-emerald-50/40 to-[#F0F2F1] relative overflow-hidden"
      >
        {/* Hero-like Accent */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-[10%] bottom-0 h-96 w-96 rounded-full bg-emerald-200/20 blur-[100px]" />
        </div>

        <div className={shell + " relative z-10"}>
          <div className="text-center mb-12">
            <span className="inline-flex px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] border border-indigo-100 mb-8">
              PLATFORM FEATURES — 10 INTEGRATED MODULES
            </span>
            <h2 className={sectionHeading2}>
              What EcoTrace Does — Module by Module
            </h2>
            <p className="max-w-4xl mx-auto text-lg text-slate-600 leading-relaxed">
              EcoTrace is a complete EPR compliance operating system. Every
              module connects to the others so that data flows automatically
              from sales ingestion through to CPCB submission.{" "}
              <span className="font-bold text-slate-900">
                Adding a new business unit, a new category, or a new recycler
                takes minutes — not weeks of spreadsheet updates.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                icon: Calculator,
                title: "Automatic Liability Calculator",
                desc: "Sales data arrives from your ERP system automatically every month. EcoTrace validates every row, applies the CPCB packaging weight matrix, and calculates your exact EPR obligation in metric tonnes — broken down by category, entity, and state. Covers all 5 plastic packaging categories including the new Category V industrial packaging.",
                status: "Core",
                color: "indigo",
              },
              {
                icon: FileCheck,
                title: "Declaration Workflow",
                desc: "Create and manage recycling declarations linking your EPR obligation to a specific recycler, plastic category, state, and financial year. Attach PO evidence, submit for approval, track every status from Draft to Approved — with a complete audit trail and timestamped log.",
                status: "Core",
                color: "indigo",
              },
              {
                icon: Handshake,
                title: "Vendor & WMA Management",
                desc: "Register and manage all your CPCB-registered recyclers in one place. Track agreement dates, category certifications, state-wise capacity, CPCB registration numbers, GST details, and agreement documents. Automated expiry alerts 30 days before any agreement or certification lapses.",
                status: "Core",
                color: "indigo",
              },
              {
                icon: LayoutDashboard,
                title: "Live Compliance Dashboard",
                desc: "Real-time KPI cards showing total liability, total achieved, achievement %, and pending approvals. A 12-month trend chart. India state heatmap. Category breakdown donuts. All data updates automatically when declarations are approved — no manual refresh.",
                status: "Core",
                color: "indigo",
              },
              {
                icon: FileDown,
                title: "CPCB & SPCB Report Generator",
                desc: "One-click CPCB Annual Return PDF — all 9 mandatory sections, state-wise data, certificate ledger with CPCB IDs, URep and reuse claims, EC calculation, and signed declaration block. Also generates quarterly data extracts and state-wise achievement reports for SPCB filing.",
                status: "New",
                color: "emerald",
              },
              {
                icon: RotateCcw,
                title: "URep & Reuse Tracker",
                desc: "Tracks the new FY 2025–26 recycled content (URep) obligation across Cat I, II, and III. Calculates your URep target based on packaging volumes, tracks procurement of recycled material, generates URep certificates on CPCB portal, and models carry-forward shortfalls across 3 years.",
                status: "New",
                color: "emerald",
              },
              {
                icon: IndianRupee,
                title: "EPR Credit Ledger",
                desc: "An append-only ledger recording every MT of recycling credit issued — by category, by entity, by financial year. Each entry includes CPCB certificate ID, recycler registration number, GST invoice number, transfer date, and credit rate. Fully immutable and auditable.",
                status: "Core",
                color: "indigo",
              },
              {
                icon: CodeXml,
                title: "ERP Integration API",
                desc: "REST API connecting EcoTrace to SAP, Oracle, or any internal ERP system. Sales data pushed automatically at month-end. API validates incoming data, handles deduplication, flags unknown SKUs, and calculates liability in real time. No manual uploads — ever.",
                status: "New",
                color: "emerald",
              },
              {
                icon: Bell,
                title: "Smart Alerts & Notifications",
                desc: "Proactive alerts for every compliance risk — vendor expiry, certificate shortfall, quarterly entry due, 30 June countdown, critical EC risk alerts. Sent via email and in-app. Nondismissable critical alerts when achievement gap exceeds 10% within 30 days of deadline.",
                status: "Core",
                color: "indigo",
              },
              {
                icon: FolderLock,
                title: "Document Vault",
                desc: "Secure cloud storage for all EPR documents — PO evidence, WMA agreements, CPCB certificates, CTO/CTE consents, third-party audit reports. Stored on AWS S3. Accessible via time-limited pre-signed URLs. Every document linked to its specific declaration, vendor, or entity.",
                status: "Core",
                color: "indigo",
              },
            ].map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative"
              >
                <div className="relative p-10 rounded-[3rem] bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-2xl hover:border-transparent cursor-pointer overflow-hidden h-full flex flex-col transform-gpu will-change-transform group-hover:-translate-y-2">
                  {/* Large Background Watermark Texture */}
                  <div className="absolute -right-6 -bottom-6 opacity-[0.02] group-hover:opacity-[0.06] group-hover:scale-110 transition-all duration-700 pointer-events-none">
                    <module.icon className="h-40 w-40" strokeWidth={1} />
                  </div>

                  {/* 3D Inner Glow Accents */}
                  <div
                    className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700
                    ${module.color === "emerald" ? "bg-emerald-500" : "bg-indigo-500"}`}
                  />

                  {/* 3D Ribbon Accent */}
                  <div
                    className={`absolute top-0 left-0 w-1 h-full transition-all duration-700 group-hover:w-2
                    ${module.color === "emerald" ? "bg-emerald-500" : "bg-indigo-500"}`}
                  />

                  {/* Floating Ghost Number */}
                  <span className="absolute right-6 top-6 text-6xl font-clash font-black text-slate-50 group-hover:text-slate-100/50 transition-colors duration-700 pointer-events-none select-none">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex items-center gap-5">
                        <div
                          className={`h-16 w-16 rounded-[1.5rem] flex items-center justify-center text-3xl shadow-inner transition-all duration-500 group-hover:rotate-[20deg]
                          ${module.color === "emerald" ? "bg-emerald-50" : "bg-indigo-50"}`}
                        >
                          <module.icon className="h-8 w-8" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
                            {module.title}
                          </h3>
                          <div className="flex gap-2 mt-2">
                            <div
                              className={`h-1 w-10 rounded-full ${module.color === "emerald" ? "bg-emerald-400" : "bg-indigo-400"}`}
                            />
                            <div
                              className={`h-1 w-4 rounded-full opacity-30 ${module.color === "emerald" ? "bg-emerald-400" : "bg-indigo-400"}`}
                            />
                          </div>
                        </div>
                      </div>
                      <span
                        className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border transition-all duration-500
                        ${module.status === "New" ? "bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-200" : "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200"}`}
                      >
                        {module.status}
                      </span>
                    </div>

                    <p className="text-[15px] leading-relaxed text-slate-500 font-medium flex-grow">
                      {module.desc}
                    </p>

                    {/* Bottom Accents */}
                    <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${module.color === "emerald" ? "bg-emerald-500" : "bg-indigo-500"}`}
                      />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Integrated Module
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost of Non-Compliance - Risk Analysis */}
      <section
        id="non-compliance-risks"
        className="w-full py-24 bg-rose-50 overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none rotate-12">
          <svg
            className="h-64 w-64 text-rose-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 22h20L12 2zm1 14h-2v-2h2v2zm0-4h-2V8h2v4z" />
          </svg>
        </div>

        <div className={shell + " relative z-10"}>
          <div className="max-w-4xl mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-600 mb-4 block">
              Risk Assessment
            </span>
            <h2 className={sectionHeading2}>
              What happens when you miss EPR targets or filing deadlines?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              CPCB has issued show-cause notices to hundreds of PIBOs. After the
              30 June deadline, CPCB auto-files the return and levies maximum
              Environmental Compensation automatically — there is no manual
              override.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "₹2,000 per MT shortfall",
                desc: "Environmental Compensation for every MT not met. 1,000 MT shortfall = ₹20,00,000 penalty. Carries forward for 3 years.",
              },
              {
                title: "₹5,000 per MT non-filing",
                desc: "2.5× standard EC rate applies if return is not filed by 30 June. CPCB auto-files at maximum EC with no warning.",
              },
              {
                title: "1-year business ban",
                desc: "Submitting false data results in registration cancellation and a 1-year ban. Blacklisted from future registration.",
              },
              {
                title: "Public defaulters list",
                desc: "CPCB publishes names on its website by 30 September. Massive reputational risk for customers and investors.",
              },
              {
                title: "SPCB independent action",
                desc: "States can initiate independent proceedings, surprise inspections, and separate notices beyond CPCB action.",
              },
              {
                title: "Shortfall carry-forward",
                desc: "Obligations don't disappear. They carry forward to the next year. After 3 years, full EC is levied and cannot be refunded even if eventually fulfilled.",
              },
            ].map((risk, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[2rem] bg-white border border-rose-100 shadow-sm border-b-4 border-b-rose-500"
              >
                <h4 className="text-lg font-black text-rose-600 mb-4">
                  {risk.title}
                </h4>
                <p className="text-sm leading-relaxed text-slate-600">
                  {risk.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block p-1 bg-gradient-to-r from-emerald-400 to-emerald-400 rounded-3xl">
              <div className="bg-emerald-50  px-10 py-8 rounded-[1.4rem]">
                <p className="text-xl font-bold text-slate-900 leading-tight">
                  <span className="text-emerald-600 font-bold  decoration-emerald-200">
                    EcoTrace eliminates every one of these risks.
                  </span>
                  <br />
                  Your compliance team will be filing ready months before 30
                  June — not days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is EcoTrace for - Industry Showcase */}
      <section id="target-audience" className="w-full py-24 md:py-36 bg-white">
        <div className={shell}>
          <div className="mb-20 text-center">
            <h2 className={sectionHeading2}>
              Which companies need EcoTrace?
            </h2>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto italic">
              &quot;If your company uses plastic packaging in India, EPR
              compliance is your legal obligation.&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                industry: "FMCG & Food",
                use: "Hundreds of SKUs across Category I, II, III. Complexity needs systematic management.",
                icon: "🍔",
              },
              {
                industry: "Personal Care",
                use: "Shampoo bottles, sachets, multilayer pouches. High-volume tracking month by month.",
                icon: "🧴",
              },
              {
                industry: "Pharmaceuticals",
                use: "Blister packs, PET bottles. Multi-state distribution makes CPCB mandatory.",
                icon: "💊",
              },
              {
                industry: "Beverages & Dairy",
                use: "PET bottles, HDPE, Tetra Pak. Category III needs proactive shortfall alerts.",
                icon: "🥤",
              },
              {
                industry: "Retail & D2C",
                use: "E-commerce secondary packaging (bubble wrap, mailers) is now in scope.",
                icon: "📦",
              },
              {
                industry: "Packaging Mfrs",
                use: "Traders and manufacturers now need unique 15-digit CPCB EPR numbers.",
                icon: "🏭",
              },
              {
                industry: "Industrial / B2B",
                use: "Category V covers industrial sacks and wrap. Many are unaware they are in scope.",
                icon: "⚙️",
              },
              {
                industry: "Logistics Users",
                use: "Stretch wrap and pallet film fall under industrial packaging rules.",
                icon: "🚚",
              },
            ].map((target, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-6">{target.icon}</div>
                <h3 className="text-lg font-black text-slate-900 mb-3">
                  {target.industry}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {target.use}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&display=swap");

        /* Specific Footer Overrides for EPR Page */
        footer {
          background: linear-gradient(
            to bottom right,
            #020617,
            #020617,
            #064e3b
          ) !important;
          box-shadow: 0 0px 200px rgba(16, 185, 129, 0.2) !important;
          border-radius: 0 !important;
        }

        /* Hide the contact bar above the footer only for this page */
        div.bg-\[\#202020\] {
          display: none !important;
        }

        body {
          background-color: #020617 !important;
          font-family: "Plus Jakarta Sans", sans-serif;
        }
        h1,
        h2,
        h3,
        h4 {
          font-family: "Sora", sans-serif;
          letter-spacing: -0.02em;
        }
        @media (max-width: 768px) {
          h1 {
            font-size: clamp(1.85rem, 8vw, 2.5rem) !important;
            line-height: 1.1 !important;
          }
          h2 {
            font-size: clamp(1.55rem, 6.5vw, 2.1rem) !important;
            line-height: 1.18 !important;
          }
          h3 {
            font-size: clamp(1.25rem, 5.2vw, 1.65rem) !important;
          }
        }
      `}</style>
      <EPRCTA onPrimaryClick={() => setContactModalOpen(true)} />
    </main>
  );
}
