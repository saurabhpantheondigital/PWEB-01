'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import EPRCTA from '@/components/ui/EPRCTA';
import { ArrowRight } from 'lucide-react';

const ContextualCTA = ({ 
  title, 
  desc, 
  btnText, 
  href = "/Contact_Us",
  className = ""
}: { 
  title: string; 
  desc: string; 
  btnText: string; 
  href?: string;
  className?: string;
}) => (
  <section className={`w-full py-20 overflow-hidden relative group transition-all duration-700 ${className} border-y border-slate-200/60`}>
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.12, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-0 -bottom-10 h-full w-1/2 flex items-end justify-end"
      >
        <img src="/EPR/image.png" alt="" className="h-full w-auto object-contain object-bottom translate-x-20 grayscale opacity-40" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.12, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-0 -bottom-20 h-full w-1/2 flex items-end justify-start"
      >
        <img src="/EPR/eco2.png" alt="" className="h-full w-auto object-contain object-bottom -translate-x-20 grayscale opacity-60" />
      </motion.div>
    </div>
    <div className="mx-auto w-full max-w-[1600px] px-4 min-[400px]:px-5 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20 relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-clash font-black mb-4 tracking-tight leading-tight text-slate-900">{title}</h3>
          <p className="font-medium leading-relaxed text-base md:text-lg max-w-2xl mx-auto lg:mx-0 text-slate-500">{desc}</p>
        </div>
        <div className="w-full lg:w-auto">
          <Link href={href} className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-emerald-600 text-white rounded-xl font-black text-base overflow-hidden shadow-xl shadow-emerald-200/50 transition-all duration-300 hover:bg-emerald-700 hover:shadow-emerald-300/50 hover:scale-[1.02] active:scale-95 w-full lg:w-auto">
            <span className="relative z-10">{btnText}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default function UsedOilPage() {
  const shell = "mx-auto w-full max-w-[1600px] px-4 min-[400px]:px-5 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20";

  return (
    <main className="min-h-screen bg-[#F0F2F1] pt-32 pb-0 overflow-hidden selection:bg-emerald-200/40 selection:text-slate-900 relative">
      {/* Background Ambient Blobs & Illustrations */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px]" />
        
        {/* Category Specific Illustration */}
        <div className="absolute top-[15%] -right-20 w-[850px] h-[850px] opacity-[0.12] grayscale pointer-events-none z-0 rotate-[-5deg]">
          <img 
            src="/EPR/used_oil_illustration.png" 
            alt="Used Oil Illustration" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Navigation Back - Top Left Corner */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-10 left-6 md:left-12 z-40"
      >
        <Link 
          href="/Services/epr" 
          className="group flex items-center gap-3 text-slate-400 hover:text-emerald-600 transition-colors font-bold text-[10px] uppercase tracking-widest"
        >
          <div className="h-10 w-10 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm flex items-center justify-center group-hover:border-emerald-100 group-hover:bg-emerald-50 transition-all shadow-sm">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="hidden sm:block">Back to EPR Compliance</span>
        </Link>
      </motion.div>

      <div className={`${shell} relative z-10`}>
        {/* Hero Header - Premium Redesign */}
        <div className="max-w-6xl mx-auto text-center relative min-h-[calc(100vh-320px)] flex flex-col justify-center items-center mb-16 md:mb-[-10px]" >
          {/* Subtle Focus Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[150px] md:h-[300px] bg-emerald-500/[0.03] blur-[60px] md:blur-[100px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full mb-8 md:mb-10 border border-emerald-100/50 shadow-sm shadow-emerald-500/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.15em] text-emerald-600 font-clash">India&apos;s #1 Used Oil EPR Platform</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-[96px] font-black tracking-tighter leading-[1.1] md:leading-[0.85] text-slate-900 mb-8 md:mb-12 font-clash"
          >
            Used Oil <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400">Compliance.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-[22px] text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto px-4 md:px-0"
          >
            Automate collection tracking, recycler certification, <br className="hidden md:block" />
            <span className="text-slate-900 font-bold">and CPCB annual returns</span> for lubricant oil obligations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-12"
          >
            <Link
              href="/Contact_Us"
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-slate-900 text-white rounded-xl font-black text-base shadow-xl shadow-slate-900/20 transition-all duration-300 hover:bg-slate-800 hover:shadow-slate-900/30 hover:scale-[1.02] active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Get started free</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Link>
            <Link
              href="/Contact_Us"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/50 backdrop-blur-sm text-slate-800 rounded-xl font-bold text-base border-2 border-slate-200 transition-all duration-300 hover:bg-white hover:border-emerald-300 hover:text-emerald-700 hover:shadow-xl hover:shadow-emerald-500/10 hover:scale-[1.02] active:scale-95"
            >
              Request a demo
            </Link>
          </motion.div>
        </div>

        {/* What is Section */}
        <section className="mb-24 md:mb-32 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8 pt-0 md:pt-42"
            >
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 font-clash">What Is Used Oil EPR in India?</h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  Used oil EPR is one of India&apos;s newest and most rapidly emerging compliance frameworks. Lubricant oil manufacturers and importers are now required to take responsibility for the collection and re-refining of used oil generated from their products — under the Hazardous and Other Wastes Rules. Registration on CPCB&apos;s portal is mandatory.
                </p>
                <p>
                  India consumes approximately 3–3.5 million metric tonnes of lubricant oil annually. A large proportion is disposed of illegally, causing significant damage. CPCB is now making lubricant producers financially and operationally responsible for organised collection and re-refining.
                </p>
              </div>
            </motion.div>

            <div className="relative pt-0 md:pt-20">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-12 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.06)] border border-slate-100 relative z-10"
              >
                <h3 className="text-sm md:text-xl font-black mb-6 md:mb-8 text-emerald-600 uppercase tracking-widest text-[10px] md:text-[11px] font-clash">Who Must Comply</h3>
                <div className="space-y-4 md:space-y-6">
                  {[
                    { title: "Lubricant Manufacturers", desc: "Companies manufacturing engine, gear, hydraulic, or transformer oil domestically" },
                    { title: "Lubricant Importers", desc: "Entities importing lubricant oils or oil-containing equipment into the Indian market" },
                    { title: "Used Oil Re-refiners", desc: "Authorised facilities that process used oil into base oil or fuel products" },
                    { title: "Blenders & Formulators", desc: "Companies blending or compounding base oils into finished lubricants" },
                    { title: "Base Oil Importers", desc: "Entities importing base oil for lubricant formulation are covered under the importer definition" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-1">
                        <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1 text-sm md:text-base">{item.title}</h4>
                        <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Regulatory Framework Dashboard */}
        <section className="mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 text-slate-900 overflow-hidden relative shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] border border-slate-100"
          >
            <div className="absolute -top-20 -right-20 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-emerald-500/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-6 md:mb-8 block font-clash">REGULATORY FRAMEWORK</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10 md:mb-16 text-slate-900 font-clash">The Compliance Matrix</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-12 gap-x-8 md:gap-x-12">
                {[
                  { label: "Governing Rules", desc: "Hazardous and Other Wastes Rules — provisions for Used Oil EPR. Regulated by CPCB." },
                  { label: "CPCB Portal", desc: "usedoilepr.cpcb.gov.in — registration, obligation calculation, and certificate management." },
                  { label: "Obligation Basis", desc: "Percentage of total lubricant oil placed in Indian market in the preceding year." },
                  { label: "Certificate Types", desc: "Re-refining Certificates & Co-processing/Energy Recovery Certificates." },
                  { label: "Credit Price", desc: "Credits tradeable on CPCB ETP — pricing is emerging as the market develops." },
                  { label: "Annual Return", desc: "Filed on CPCB used oil portal. Quarterly collection data maintained with re-refiner invoices." },
                  { label: "Penalties", desc: "Environmental Compensation · Registration suspension · ₹10 lakh–₹50 lakh penalties." },
                  { label: "Key Restriction", desc: "Purchase limited to current liability + prior years + 10%. No cross-entity transfers." },
                  { label: "Market Volume", desc: "India consumes ~3–3.5 million metric tonnes of lubricant oil annually." }
                ].map((item, i) => (
                  <div key={i} className="space-y-2 md:space-y-3 group">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-emerald-500" />
                      <h4 className="text-emerald-600 font-bold text-[10px] md:text-[11px] uppercase tracking-widest font-clash">{item.label}</h4>
                    </div>
                    <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <ContextualCTA 
          title="Is your mandatory registration complete?"
          desc="The used oil EPR portal is live and registration is now mandatory for all lubricant producers. Avoid legal compensation and business blocks."
          btnText="Get Registered Now"
          className="mb-24 md:mb-32"
        />

        {/* The Business Challenge Section */}
        <section className="mb-24 md:mb-32">
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-rose-500 mb-4 md:mb-6 block font-clash">CRITICAL CHALLENGES</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 max-w-3xl font-clash px-4">Why Companies Struggle with Used Oil EPR</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Emerging Framework", desc: "Most manufacturers are still assessing obligation scope and the methodology for collection targets." },
              { title: "Limited Re-refining", desc: "Authorised re-refiner capacity is limited — finding registered partners with genuine certificates is challenging." },
              { title: "Dispersed Collection", desc: "Used oil is generated in remote locations far from authorised collection points, complicating formal recovery." },
              { title: "Informal Dominance", desc: "Informal sector handles most recovery through illegal blending — formal channels require active network building." },
              { title: "Complex Weights", desc: "Re-refining, co-processing, and energy recovery certificates have different regulatory weightings." },
              { title: "Manual Reconciliation", desc: "Matching data from hundreds of small points against re-refiner invoices and CPCB IDs takes weeks." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-slate-100 hover:border-rose-100 hover:shadow-xl hover:shadow-rose-500/5 transition-all group"
              >
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-rose-50 flex items-center justify-center mb-5 md:mb-6 text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h4 className="text-base md:text-lg font-black text-slate-900 mb-2 md:mb-3 tracking-tight font-clash">{item.title}</h4>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How EcoTrace Solves Section */}
        <section className="mb-24 md:mb-32">
          <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 text-slate-900 overflow-hidden relative shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] border border-slate-100">
            <div className="absolute -top-20 -right-20 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-emerald-500/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-emerald-500/5 rounded-full blur-[40px] md:blur-[80px] pointer-events-none" />
            
            {/* Related Category Process Illustration */}
            <div className="absolute -right-20 bottom-10 w-[700px] h-[700px] opacity-[0.08] grayscale pointer-events-none z-0 rotate-[5deg]">
              <img 
                src="/EPR/oil_refining_process.png" 
                alt="Oil Refining Process Illustration" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="relative z-10">
              <div className="max-w-2xl mb-12 md:mb-16">
                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-3 md:mb-4 block font-clash">THE SOLUTION</span>
                <h2 className="text-2xl md:text-5xl font-black tracking-tighter mb-4 leading-tight text-slate-900 font-clash">How EcoTrace Solves Used Oil EPR</h2>
                <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
                  EcoTrace tracks data from dispersed sources and manages the growing network of authorised re-refiners.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 md:gap-y-12">
                {[
                  { title: "Obligation Calculator", desc: "Calculates annual used oil collection targets based on lubricant volumes — per product type and entity." },
                  { title: "Re-refiner Manager", desc: "Register and manage partners — tracking CPCB numbers, processing capacity, and certificate status." },
                  { title: "Collection Point Tracking", desc: "Map and track used oil sources like workshops and plants — linked to authorised re-refiners with invoices." },
                  { title: "Certificate Type Manager", desc: "Separate tracking for re-refining, co-processing, and energy recovery — with their specific regulatory weightings." },
                  { title: "Coverage Dashboard", desc: "Real-time view of collection achieved — state-wise and partner-wise — with shortfall alerts and EC calculation." },
                  { title: "Annual Return Generator", desc: "Complete CPCB used oil portal annual return — collection data, certificates, and EC calculation in one click." },
                  { title: "Market Alerts", desc: "Alerts when certificate shortfall × market price crosses risk threshold — enabling proactive ETP purchases." },
                  { title: "System Integration", desc: "Connects to your ERP or sales system to pull lubricant volumes — auto-calculating targets without manual entry." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4 md:gap-5 group">
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all font-black text-xs md:text-sm shadow-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-sm md:text-[17px] font-black text-slate-900 mb-2 md:mb-3 leading-tight tracking-tight group-hover:text-emerald-600 transition-colors font-clash">{item.title}</h4>
                      <p className="text-[11px] md:text-[14px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <EPRCTA 
        title="Ready to automate your Used Oil EPR?"
        description="Join leading lubricant manufacturers and blenders. Automate collection tracking and CPCB annual returns on EcoTrace."
      />
    </main>
  );
}
