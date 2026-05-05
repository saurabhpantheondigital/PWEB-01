"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

interface EPRCTAProps {
  title?: string;
  description?: string;
  primaryActionText?: string;
  primaryHref?: string;
  /** When set, primary control opens the callback instead of navigating. */
  onPrimaryClick?: () => void;
  secondaryActionText?: string;
  secondaryHref?: string;
  className?: string;
}

export default function EPRCTA({
  title = "Ready to automate your EPR compliance?",
  description = "Book a personalised product demo with our experts.",
  primaryActionText = "Book a free demo",
  primaryHref = "/Contact_Us",
  onPrimaryClick,
  secondaryActionText = "Contact sales",
  secondaryHref = "mailto:sales@pantheondigitals.com",
  className = "",
}: EPRCTAProps) {
  return (
    <section className={`w-full py-16 md:py-24 bg-white border-t border-emerald-100/60 relative overflow-hidden ${className}`}>
      
      {/* Background Decorative Elements - Inspired by About Section */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Large Illustration Base */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.15, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute right-0 -bottom-5 h-full w-1/2 flex items-end justify-end"
        >
          <img 
            src="/EPR/image.png" 
            alt="" 
            className="h-full w-auto object-contain object-bottom translate-x-20 translate-y-0 grayscale opacity-40"
          />
        </motion.div>

        {/* Left Side Bottom: Eco2 Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.15, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-0 -bottom-25 h-full w-1/2 flex items-end justify-start"
        >
          <img 
            src="/EPR/eco2.png" 
            alt="" 
            className="h-full w-auto object-contain object-bottom -translate-x-20 translate-y-0 grayscale opacity-60"
          />
        </motion.div>

        {/* Subtle Background Glows */}
        <div className="absolute -left-[10%] top-0 h-full w-[40%] bg-emerald-50/50 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Content Block */}
          <div className="flex-1 text-center lg:text-left w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight font-clash leading-[1.1]">
                {title}
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 font-medium max-w-2xl mx-auto lg:mx-0">
                {description}
              </p>
            </motion.div>
          </div>

          {/* Action Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-end gap-4 w-full lg:w-auto"
          >
            {onPrimaryClick ? (
              <button
                type="button"
                onClick={onPrimaryClick}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-9 sm:py-4 bg-emerald-600 text-white rounded-xl font-black text-base sm:text-lg overflow-hidden shadow-xl shadow-emerald-200/50 transition-all duration-300 hover:bg-emerald-700 hover:shadow-emerald-300/50 hover:scale-[1.02] active:scale-95"
              >
                <span className="relative z-10">{primaryActionText}</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </button>
            ) : (
              <Link
                href={primaryHref}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-9 sm:py-4 bg-emerald-600 text-white rounded-xl font-black text-base sm:text-lg overflow-hidden shadow-xl shadow-emerald-200/50 transition-all duration-300 hover:bg-emerald-700 hover:shadow-emerald-300/50 hover:scale-[1.02] active:scale-95"
              >
                <span className="relative z-10">{primaryActionText}</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Link>
            )}

            <Link
              href={secondaryHref}
              className="flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-9 sm:py-4 bg-white text-slate-600 rounded-xl font-bold text-base sm:text-lg border border-slate-200 transition-all duration-300 hover:bg-slate-50 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-xl hover:shadow-emerald-500/5"
            >
              <Mail className="w-5 h-5 text-slate-400 group-hover:text-emerald-500" />
              <span>{secondaryActionText}</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
