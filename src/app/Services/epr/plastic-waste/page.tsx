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

export default function PlasticWastePage() {
  const shell = "mx-auto w-full max-w-[1600px] px-4 min-[400px]:px-5 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20";

  return (
    <main className="min-h-screen bg-[#F0F2F1] pt-32 pb-0 overflow-hidden selection:bg-emerald-200/40 selection:text-slate-900 relative">
      {/* Background Ambient Blobs & Illustrations */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px]" />
        
        {/* Category Specific Illustration */}
        <div className="absolute top-[15%] -right-20 w-[800px] h-[800px] opacity-[0.12] grayscale pointer-events-none z-0 rotate-[10deg]">
          <img 
            src="/EPR/plastic_waste_illustration.png" 
            alt="Plastic Waste Illustration" 
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
        <div className="max-w-6xl mb-[-10px] mx-auto text-center relative h-[calc(100vh-320px)] flex flex-col justify-center items-center" >
          {/* Subtle Focus Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/[0.03] blur-[100px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full mb-10 border border-emerald-100/50 shadow-sm shadow-emerald-500/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[12px] font-black uppercase tracking-[0.15em] text-emerald-600">India&apos;s #1 Plastic EPR Platform</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[96px] font-black tracking-tighter leading-[0.85] text-slate-900 mb-12"
          >
            Plastic Waste <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400">Compliance.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-[22px] text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            Automate your CPCB plastic packaging obligations end-to-end  <br className="hidden md:block" />
            <span className="text-slate-900 font-bold">and generate CPCB-ready returns</span> in minutes.
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
        <section className="mb-32 relative overflow-hidden">
          {/* Bottom Left Texture - as per Green Box */}
          <div className="absolute -bottom-80 -left-30 w-[600px] h-[600px] opacity-[0.10] rotate-12 pointer-events-none select-none">
            <Image 
              src="/EPR/PlasticWaste/plastic21.svg" 
              alt="Section Texture" 
              fill 
              className="object-contain"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 pt-42"
            >
              <h2 className="text-4xl font-black tracking-tight text-slate-900">What Is Plastic Waste EPR in India?</h2>
              <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  Under the Plastic Waste Management (Amendment) Rules, 2022, every Producer, Importer, and Brand Owner (PIBO) that introduces plastic packaging into the Indian market must register with CPCB, calculate their annual recycling obligation, procure EPR certificates from authorised recyclers, and file an annual return by 30 June every year.
                </p>
                <p>
                  This is India&apos;s most widely enforced EPR framework. With 5 plastic packaging categories, progressive recycling targets reaching 100% by FY 2027–28, mandatory URep (recycled content) obligations from FY 2025–26, and a public defaulter list published annually, plastic waste EPR is your most urgent compliance obligation.
                </p>
              </div>
            </motion.div>

            <div className="relative pt-20">
              {/* Texture Image - Positioned exactly where the green box was */}
              <div className="absolute -top-53 right-12 w-[500px] h-[400px] opacity-[0.2] pointer-events-none select-none">
                <Image 
                  src="/EPR/PlasticWaste/ecu12.png" 
                  alt="Background Texture" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[4rem] p-12 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.06)] border border-slate-100 relative z-10"
              >
                <h3 className="text-xl font-black mb-8 text-emerald-600 uppercase tracking-widest text-[11px]">Who Must Comply</h3>
                <div className="space-y-6">
                  {[
                    { title: "Producers", desc: "Manufacturers of plastic packaging material — bottles, films, sachets, containers" },
                    { title: "Importers", desc: "Entities importing goods in plastic packaging or importing plastic packaging itself" },
                    { title: "Brand Owners", desc: "Companies selling goods under their own brand in plastic packaging" },
                    { title: "Processors", desc: "Recyclers, co-processors, WtE/WtO facilities registered with CPCB" },
                    { title: "Traders (2025)", desc: "Entities trading finished plastic packaging now need 15-digit CPCB registration" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="h-6 w-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-1">
                        <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Regulatory Framework Dashboard - Redesigned to Premium White */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[4rem] p-10 md:p-16 text-slate-900 overflow-hidden relative shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] border border-slate-100"
          >
            {/* Background elements - Subtle Emerald Glows & Texture */}
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
            
            {/* Texture Image - Positioned as per Green Box */}
            <div className="absolute top-46 -left-10 w-[500px] h-[500px] opacity-[0.08] pointer-events-none select-none">
              <Image 
                src="/EPR/PlasticWaste/eco20.png" 
                alt="Section Texture" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-8 block">REGULATORY FRAMEWORK</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-16 text-slate-900">The Compliance Matrix</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12">
                {[
                  { label: "Governing Rules", desc: "Plastic Waste Management (Amendment) Rules, 2022 + 2025 + 2026 amendments — MoEF&CC" },
                  { label: "CPCB Portal", desc: "eprplastic.cpcb.gov.in — centralised registration & annual return filing" },
                  { label: "5 Categories", desc: "Cat I (Rigid), Cat II (Flexible), Cat III (Multi-layer), Cat IV (Compostable), Cat V (Industrial)" },
                  { label: "Recycling Targets", desc: "Cat I/II/IV: 80% · Cat III: 60% · Reaching 100% by FY 2027–28" },
                  { label: "URep Obligation", desc: "Cat I: 30% · Cat II: 10% · Cat III: 5% — Recycled content requirement from FY 25–26" },
                  { label: "Penalties", desc: "₹2,000/MT shortfall · ₹5,000/MT non-filing · 1-year ban for false data" }
                ].map((item, i) => (
                  <div key={i} className="space-y-3 group">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <h4 className="text-emerald-600 font-bold text-[11px] uppercase tracking-widest">{item.label}</h4>
                    </div>
                    <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <ContextualCTA 
          title="Confused about the new FY 2025–26 URep rules?"
          desc="The new recycled content obligations are complex and category-specific. Let our experts show you how EcoTrace automates the calculation."
          btnText="Book a Free Demo"
          className="mb-32"
        />

        {/* The Business Challenge Section */}
        <section className="mb-32">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-500 mb-6 block">CRITICAL CHALLENGES</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 max-w-3xl">Why Companies Struggle with Plastic EPR</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Manual Liability", desc: "Monthly EPR liability calculated manually from sales data across hundreds of SKUs and states — taking 3–5 working days." },
              { title: "Scarcity of Cat III", desc: "Multi-layer certificates are the scarcest and most expensive — companies with laminates face maximum risk." },
              { title: "URep Complexity", desc: "New recycled content obligations from FY 2025–26 add a calculation layer that no existing tool tracks." },
              { title: "Return Filing Burden", desc: "Annual return compilation takes 2–4 weeks — reconciling state-wise data and GST invoice numbers." },
              { title: "Fragmented Audit Trail", desc: "No single audit trail — CPCB auditors request documentation and teams scramble to piece together records." },
              { title: "Panic Purchases", desc: "Shortfalls discovered only weeks before 30 June, forcing purchases at 2–3× normal certificate prices." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[3rem] border border-slate-100 hover:border-rose-100 hover:shadow-xl hover:shadow-rose-500/5 transition-all group"
              >
                <div className="h-12 w-12 rounded-2xl bg-rose-50 flex items-center justify-center mb-6 text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-3 tracking-tight">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How EcoTrace Solves Section - Redesigned to Premium White */}
        <section className="mb-32">
          <div className="bg-white rounded-[4rem] p-10 md:p-16 text-slate-900 overflow-hidden relative shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] border border-slate-100">
            {/* Background elements - Subtle Emerald Glows */}
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
            
            {/* Related Category Process Illustration */}
            <div className="absolute -right-20 bottom-10 w-[700px] h-[700px] opacity-[0.08] grayscale pointer-events-none z-0 rotate-[5deg]">
              <img 
                src="/EPR/plastic_recycling_flow.png" 
                alt="Plastic Recycling Flow Illustration" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="relative z-10">
              <div className="max-w-2xl mb-16">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-600 mb-4 block">THE SOLUTION</span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 leading-tight text-slate-900">How EcoTrace Solves This <br /> End to End</h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  India&apos;s only plastic waste EPR software built natively for CPCB workflows.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {[
                  { title: "Automatic Liability Calculation", desc: "Sales data from your ERP auto-calculates category-wise EPR obligation in MT — applied per SKU, per state, per entity. No spreadsheets." },
                  { title: "Declaration & Approval Workflow", desc: "Create, submit, and track recycling declarations digitally — Draft → Submitted → Reconciled. Full audit trail at every step." },
                  { title: "Real-Time Control Tower", desc: "Live KPI dashboard: Total Liability, Achieved MT, Achievement %, Pending Approvals. India state map colour-coded by achievement." },
                  { title: "URep & Reuse Tracking", desc: "Tracks FY 2025–26 recycled content obligations by category, generates URep certificates, and models 3-year carry-forward shortfalls." },
                  { title: "Vendor / WMA Management", desc: "All recycler agreements, CPCB registrations, capacity limits, and certificate IDs in one place — with 30-day expiry alerts." },
                  { title: "One-Click CPCB Annual Return", desc: "Complete Form AR-PIBO PDF — all 9 sections, state-wise data, certificate ledger, URep claims, EC calculation — generated in seconds." },
                  { title: "Shortfall Alert Engine", desc: "Know your certificate gap 6 months before 30 June — not 6 days. Category-wise alerts with EC exposure in ₹." },
                  { title: "ERP Integration API", desc: "REST API connects to SAP, Oracle, or any internal ERP. Month-end sales data pushed automatically — no file uploads ever required." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-5 group">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all font-black text-sm shadow-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-[17px] font-black text-slate-900 mb-3 leading-tight tracking-tight group-hover:text-emerald-600 transition-colors">{item.title}</h4>
                      <p className="text-[14px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>

      <EPRCTA 
        title="Ready to automate your Plastic EPR?"
        description="Join India's leading brands on EcoTrace. Annual returns, URep, and certificate management — all in one place."
      />
    </main>
  );
}
