"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import {
  Cpu,
  Zap,
  ShieldCheck,
  Globe,
  ArrowRight,
  Activity,
  BrainCircuit,
  Workflow,
  BarChart3,
  Search,
  Lock,
  MessageSquareCode,
  Sparkles,
  Users,
  PhoneCall,
  HeartPulse,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Factory,
  Film,
  Database,
  Layers,
  Image,
  FileText,
} from "lucide-react";

const PRIMARY_CTA_CLASS =
  "inline-flex items-center gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-cyan-500 via-cyan-500 to-cyan-500 animate-shimmer text-white font-geometric font-bold text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.24em] rounded-full hover:scale-105 hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] transition-all duration-500 shadow-[0_10px_35px_rgba(6,182,212,0.3)] border border-white/20";

function ServiceCard({ service, index }: { service: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        delay: index * 0.05,
      }}
      viewport={{ once: true }}
      className="group relative flex flex-col bg-neutral-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/40 hover:bg-neutral-900/60 transition-all duration-500 shadow-2xl hover:shadow-[0_0_50px_rgba(6,182,212,0.15)] backdrop-blur-xl"
    >
      {/* HUD Decorative Elements */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-cyan-500/20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyan-500/20 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-4 left-4 text-[6px] font-mono text-cyan-500  /20 tracking-tighter uppercase pointer-events-none group-hover:text-cyan-400/40">
        NODE_ID::0x{index}F4A
      </div>

      {/* 1. Feature Image Area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black/50">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none opacity-80" />

        {/* Status Badge */}
        <div className="absolute top-4 right-4 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="px-3 py-1 bg-cyan-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-full flex items-center gap-1.5 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,1)]" />
            <span className="text-[8px] font-mono text-cyan-400 font-black uppercase tracking-[0.2em]">
              {service.tag}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="p-5 flex flex-col flex-1 relative z-10">
        {/* Header: Icon + Title + GET */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-12 h-12 rounded-2xl bg-black/40 flex items-center justify-center border border-white/5 shadow-2xl shrink-0 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-500">
              <div className="scale-90 text-cyan-500  /60 group-hover:text-cyan-400 group-hover:scale-100 transition-all duration-500">
                {service.icon}
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <h3 className="text-white font-geometric font-bold text-[15px] leading-tight uppercase tracking-tight group-hover:text-cyan-400 transition-colors line-clamp-2 italic">
                {service.title}
              </h3>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="flex items-center gap-1 text-cyan-400 font-bold bg-cyan-500/10 px-1.5 py-0.5 rounded text-[10px] font-mono shadow-sm">
                  {service.rating} <Sparkles className="w-3 h-3" />
                </span>
                <span className="text-white/10 text-[12px]">|</span>
                <span className="text-white/30 font-bold text-[10px] uppercase tracking-[0.1em] truncate italic">
                  {service.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-[11px] text-white/50 leading-relaxed font-avenir-regular line-clamp-3 italic border-l-2 border-cyan-500/10 pl-4 mb-6 group-hover:border-cyan-500/40 transition-colors">
          {service.desc}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-5 border-t border-white/5 group-hover:border-white/10 transition-colors">
          <div className="flex items-center gap-3">
            <div className="px-1.5 py-0.5 border border-white/10 rounded text-[8px] font-bold text-white/30 group-hover:text-white/85 uppercase tracking-widest transition-colors font-mono tracking-tighter">
              OP_v2.4
            </div>
            <div className="w-2 h-2 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/40 transition-all" />
          </div>

          <Link
            href="/Contact_Us"
            className="flex items-center gap-2 text-cyan-500   text-[10px] font-geometric font-black uppercase tracking-[0.2em] hover:text-cyan-400 transition-all group/btn"
          >
            DEPLOY_NODE
            <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Scanner Beam Animation on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent h-[100px] w-full -translate-y-[100px] group-hover:animate-eye-scan pointer-events-none" />
    </motion.div>
  );
}

export default function AiPortalPage() {
  const prefersReducedMotion = useReducedMotion();
  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    viewport: { once: true, margin: "-100px" },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
    viewport: { once: true, margin: "-50px" },
  };

  const [isMounted, setIsMounted] = useState(false);
  const [nodes, setNodes] = useState<
    { cx: string; cy: string; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    setIsMounted(true);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    // Generate stable random nodes for the trust section animation
    const generatedNodes = [...Array(15)].map(() => ({
      cx: Math.random() * 100 + "%",
      cy: Math.random() * 100 + "%",
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
    }));
    setNodes(generatedNodes);
  }, []);

  return (
    <main className="bg-black mt-[-3.75rem] max-md:mt-[7.5rem] min-h-screen relative selection:bg-cyan-500/30 font-avenir-regular text-white overflow-hidden">
      {/* Global Background Elements - No overlays on top of text for maximum clarity */}

      <style jsx global>{`
        @keyframes eye-scan {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(400px);
            opacity: 0;
          }
        }
        .animate-eye-scan {
          animation: eye-scan 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 4s ease infinite;
        }
      `}</style>

      {/* Premium Ambient Backgrounds with Pulse */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <motion.div
          className="absolute top-[5%] left-[0%] w-[800px] h-[800px] bg-cyan-500/10 blur-[180px] rounded-full"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                  x: [-20, 20, -20],
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 15, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.div
          className="absolute bottom-[10%] right-[0%] w-[700px] h-[700px] bg-cyan-400/10 blur-[160px] rounded-full"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  scale: [1.3, 1, 1.3],
                  opacity: [0.3, 0.6, 0.3],
                  x: [30, -30, 30],
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 18, repeat: Infinity, ease: "easeInOut" }
          }
        />
        {/* Subtle Neural Grid Overlay with Pulsing Nodes */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-[0.07]">
            <pattern
              id="pulse-dots"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <motion.circle
                cx="40"
                cy="40"
                r="1"
                fill="cyan"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: [1, 2, 1],
                        opacity: [0.3, 1, 0.3],
                      }
                }
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pulse-dots)" />
          </svg>
        </div>
      </div>

      {/* 1. Hero: THE SINGULARITY (Neural Core) */}
      <section
        id="hero-singularity"
        className="relative min-h-[95vh] flex items-center justify-center px-4 overflow-hidden border-b border-white/5"
      >
        {/* Ambient Focal Point (Subtle Glow) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
        </div>

        <div
          id="hero-content-container"
          className="max-w-7xl mx-auto relative z-10 w-full "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Aggressive Typography */}
            <motion.div
              id="hero-typography-block"
              className="text-left"
              variants={staggerContainer}
              initial="initial"
              animate="whileInView"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  variants={fadeInUp}
                  className="h-px w-12 bg-[#189ca3]"
                />
                <motion.span
                  variants={fadeInUp}
                  className="text-cyan-500  font-mono text-[10px] sm:text-[11px] tracking-[0.48em] uppercase font-semibold"
                >
                  AI COMMAND SUITE
                </motion.span>
              </div>
              <motion.h1
                variants={fadeInUp}
                className="font-geometric font-bold text-[1.95rem] sm:text-[2.75rem] md:text-[3.75rem] xl:text-[4.5rem] text-white leading-[0.95] tracking-[-0.01em] mb-6 uppercase italic drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Intelligence
                <span className="block text-cyan-500  text-[2.5rem] sm:text-[3.25rem] md:text-[3.75rem] xl:text-[4.5rem] leading-[1] tracking-[-0.01em] mt-2 drop-shadow-[0_0_30px_rgba(6,182,212,0.6)] drop-shadow-[0_0_60px_rgba(6,182,212,0.3)]">
                  That Works
                </span>
                for You
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-white/80 text-[0.82rem] sm:text-[0.9rem] md:text-sm max-w-[34rem] leading-relaxed mb-10 font-avenir-regular border-l-2 border-cyan-500/30 pl-6 lowercase italic"
              >
                Powerful AI systems designed to solve real business problems
                intelligent systems that give you speed, accuracy, and control.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-6 items-center"
              >
                <Link
                  href="/Contact_Us"
                  className={`${PRIMARY_CTA_CLASS} group `}
                >
                  Start Your AI Pilot
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Technical Metrics & Status Card (Cyan Theme) */}
            <div
              id="hero-sidebar-card"
              className="relative mt-12 lg:mt-0 w-full max-w-[450px] lg:max-w-[600px] mx-auto lg:mx-0"
            >
              <motion.div
                id="hero-telemetry-card"
                variants={fadeInUp}
                transition={{ delay: 0.3, duration: 1 }}
                className="relative z-10 p-5 rounded-3xl bg-neutral-900/40 border border-cyan-500/10 backdrop-blur-3xl shadow-[0_0_80px_rgba(6,182,212,0.15)] overflow-hidden"
              >
                {/* Cinematic Neural Core Video */}
                <div
                  id="hero-video-container"
                  className="relative w-full aspect-video rounded-2xl overflow-hidden border border-cyan-500/20 shadow-[0_0_40px_rgba(6,182,212,0.15)] mb-8"
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                  >
                    <source src="/video/HeroVideoog.mp4" type="video/mp4" />
                  </video>
                  {/* Digital Glitch/Scan Overlay on Video */}
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.05] via-transparent to-cyan-500/[0.05] pointer-events-none" />
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/simple-dashed.png')] opacity-[0.03] pointer-events-none" />
                  
               
                </div>

                <div className="space-y-4">
                  {/* Dynamic Live Inference Log Feed */}
                  <div className="mt-4">
                    <InferenceTerminal />
                  </div>

                  <div className="flex items-center gap-4 group cursor-pointer pt-2">
                    <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all shrink-0">
                      <Activity className="w-4 h-4 text-cyan-500  " />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-white font-geometric font-bold text-[10px] sm:text-xs uppercase tracking-widest break-all">
                        Quantum_Entanglement:{" "}
                        <span className="text-cyan-400">ESTABLISHED</span>
                      </div>
                      <div className="text-white/85 text-[9px] sm:text-xs uppercase font-mono tracking-tighter truncate mt-1">
                        DigitalCore_Signature::0xPD_CYAN_777_NODE
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Background Decorative Text - Cyan overlay */}

            </div>
          </div>
        </div>
      </section>

      {/* 2. Strategic AI Nexus - INTERACTIVE DASHBOARD EXPLORER */}
      <section
        id="strategic-nexus"
        className="py-24 px-4 relative overflow-hidden bg-[#020202]"
      >
        <div className="absolute inset-0 bg-cyan-500/[0.02] pointer-events-none" />

        <div
          id="nexus-main-container"
          className="max-w-7xl mx-auto relative z-10"
        >
          <div id="nexus-header-block" className="text-left mb-16 max-w-2xl">
            <motion.div {...fadeInUp}>
              <span className="text-cyan-500 font-mono text-xs tracking-[0.5em] uppercase mb-6 block font-bold">
                Strategic Capability Hub
              </span>
              <h2 className="text-3xl md:text-5xl font-geometric font-bold text-white mb-6 uppercase italic tracking-tighter leading-none">
                Strategic <span className="text-cyan-500 ">AI Nexus</span>
              </h2>
              <p className="text-white/50 text-sm md:text-base font-avenir-regular border-l-2 border-cyan-500/20 pl-8 lowercase italic">
                Architecting industrial-grade cognitive nodes through a unified
                intelligence framework.
              </p>
            </motion.div>
          </div>

          {/* Interactive Nexus Console */}
          <NexusExplorer />
        </div>
      </section>

      {/* NEW: Gen AI Use Cases - INDUSTRY TRANSFORMATION MATRIX */}
      <section id="gen-ai-use-cases" className="py-24 px-4 bg-black relative">
        <div
          id="use-cases-container"
          className="max-w-[1440px] mx-auto relative "
        >
          {/* Subtle Matrix Lines Background */}
          <div className="absolute inset-0 grid grid-cols-6 gap-px bg-white/[0.02] pointer-events-none" />

          <div className="text-center mb-20 relative z-10 px-4 ">
            <motion.div {...fadeInUp}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-cyan-500/40" />
                <span className="text-cyan-500   font-mono text-[9px] md:text-xs tracking-[0.5em] uppercase font-bold">
                  PROTOCOL_SIGNAL::0xEXPERTISE_MATRIX
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-geometric font-bold text-white mb-8 uppercase italic tracking-tighter leading-none">
                Technical <span className="text-cyan-500  ">Domains</span>
              </h2>
            </motion.div>
          </div>

          <div
            id="use-cases-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-transparent border border-white/5 relative z-10"
          >
            {[
              {
                title: "Neural Orchestration",
                desc: "Multi-agentic loops for complex cognitive workflows.",
                icon: <BrainCircuit className="w-5 h-5" />,
              },
              {
                title: "Latent Optimization",
                desc: "Fine-tuning model weights for niche industry accuracy.",
                icon: <Database className="w-5 h-5" />,
              },
              {
                title: "Synthetic SEO",
                desc: "LLM-first brand authority engineering.",
                icon: <Search className="w-5 h-5" />,
              },
              {
                title: "Inference Edge",
                desc: "Ultra-low latency model deployment at scale.",
                icon: <Zap className="w-5 h-5" />,
              },
              {
                title: "Cross-Vector RAG",
                desc: "Retrieval across siloed proprietary data structures.",
                icon: <Layers className="w-5 h-5" />,
              },
              {
                title: "Predictive Velocity",
                desc: "Data synthesis for high-speed revenue forecasting.",
                icon: <BarChart3 className="w-5 h-5" />,
              },
              {
                title: "Secure Governance",
                desc: "Hallucination-free enterprise AI diagnostics.",
                icon: <ShieldCheck className="w-5 h-5" />,
              },
              {
                title: "Autonomous Core",
                desc: "Self-learning agents with multi-session memory.",
                icon: <Sparkles className="w-5 h-5" />,
              },
            ].map((useCase, i) => (
              <motion.div
                key={i}
                className="p-8 bg-black md:hover:bg-cyan-500/[0.05] transition-all duration-500 group relative overflow-hidden md:hover:shadow-[0_0_60px_rgba(6,182,212,0.1)] border-b border-r border-white/5 last:border-b-0"
                initial={false}
                animate={{ opacity: 1 }}
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500/0 group-hover:bg-cyan-500/40 transition-all duration-700" />
                <div className="flex flex-col gap-6 h-full justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg text-cyan-500  /40 flex items-center justify-center mb-6 group-hover:text-cyan-500   transition-colors">
                      {useCase.icon}
                    </div>
                    <h4 className="text-white font-geometric font-bold text-sm mb-3 uppercase tracking-widest group-hover:text-cyan-400 transition-colors italic">
                      {useCase.title}
                    </h4>
                    <p className="text-white/85 text-xs leading-relaxed font-avenir-regular uppercase italic tracking-tight">
                      {useCase.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Specialized AI: LLM Search Visibility (ASO) - CYAN THEME */}
      <section
        id="ai-search-visibility"
        className="py-24 px-4 bg-cyan-950/10 border-y border-white/5 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-cyan-600/5 blur-[120px] pointer-events-none" />
        <div id="search-visibility-container" className="max-w-7xl mx-auto">
          <div
            id="search-visibility-grid"
            className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center text-left"
          >
            <div className="relative order-2 lg:order-1">
              <div className="p-8 rounded-[3.5rem] bg-[#050505] border border-cyan-500/10 relative overflow-hidden group shadow-[0_0_60px_rgba(6,182,212,0.08)]">
               
                <h4 className="text-white font-avenir-bold text-base mb-8 uppercase tracking-tighter">
                  AI Entity Rank
                </h4>
                <p className="text-white/85 text-base leading-relaxed mb-10">
                  Traditional SEO is obsolete. We engineer your digital presence
                  so LLMs prioritize your brand as the definitive authority in
                  your niche.
                </p>
                <div className="space-y-3">
                  {[
                    "Latent Space Optimization",
                    "Synthetic Citation Mapping",
                    "Contextual Data Injection",
                  ].map((t, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 text-xs text-white/50 tracking-widest font-avenir-heavy uppercase"
                    >
                      <CheckCircle2 className="w-5 h-5 text-cyan-500  " />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <motion.div variants={fadeInUp} className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-cyan-500/40" />
                <span className="text-cyan-500   font-mono text-[9px] md:text-xs tracking-[0.5em] uppercase font-bold">
                  PROTOCOL_SIGNAL::0xSEO_PRIME
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-geometric font-bold text-white mb-8 uppercase italic tracking-tighter leading-none">
                AI <span className="text-cyan-500  ">Search</span> Visibility
              </h2>
              <p className="text-white/85 text-sm md:text-lg leading-relaxed mb-12 font-avenir-regular border-l-2 border-cyan-500/20 pl-8 lowercase italic">
                Ensure your brand values are hard-coded into the inference path
                of Large Language Models.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW: Synthetic Vocal Intelligence (AI Voice Bots) */}
      <section
        id="vocal-intelligence"
        className="py-24 px-4 relative overflow-hidden bg-black border-y border-white/5"
      >
        <div id="vocal-intelligence-container" className="max-w-7xl mx-auto">
          <div
            id="vocal-intelligence-grid"
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center text-left"
          >
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-cyan-500/40" />
                <span className="text-cyan-500   font-mono text-[9px] md:text-xs tracking-[0.5em] uppercase font-bold">
                  PROTOCOL_VOICE::0xNEURAL_DIALECT
                </span>
              </div>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-geometric font-bold text-white mb-8 uppercase italic tracking-tighter leading-none"
              >
                Synthetic <span className="text-cyan-500  ">Vocal</span> Intel
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-white/85 text-sm md:text-lg leading-relaxed mb-10 font-avenir-regular border-l-2 border-cyan-500/20 pl-8 lowercase italic"
              >
                Deploy human-grade AI voice-bots that speak with sub-millisecond
                precision. Architected for complex leads and multi-lingual
                support.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-10">
                {[
                  { label: "Intent Detection", val: "99.2%" },
                  { label: "Response Latency", val: "250ms" },
                  { label: "Neural Dialects", val: "50+" },
                ].map((stat, i) => (
                  <div key={stat.label}>
                    <div className="text-xs text-white/50 uppercase tracking-widest mb-1 font-mono">
                      {stat.label}
                    </div>
                    <div className="text-2xl font-geometric font-bold text-cyan-400 italic uppercase">
                      {stat.val}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative"
            >
              <div
                id="vocal-intelligence-glass-panel"
                className="p-6 sm:p-10 rounded-[2rem] sm:rounded-[4.1rem] bg-[#050505] border border-cyan-500/15 backdrop-blur-3xl relative overflow-hidden group shadow-[0_0_100px_rgba(6,182,212,0.2)]"
              >
                <div className="absolute inset-0 bg-cyan-600/5 blur-[120px] pointer-events-none" />
                {/* Voice Spectrum Visualizer */}
                <div className="flex items-center justify-center gap-2 h-16  mb-8">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 bg-cyan-500/40 rounded-full"
                      animate={{
                        height: ["30%", "100%", "40%", "90%", "30%"],
                        backgroundColor: [
                          "rgba(6,182,212,0.4)",
                          "rgba(6,182,212,0.8)",
                          "rgba(6,182,212,0.4)",
                        ],
                      }}
                      transition={{
                        duration: 0.8 + i * 0.05,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                <div className="space-y-2 relative z-10 ">
                  {[
                    {
                      title: "Natural Sentiment Analysis",
                      desc: "Understanding the emotional context behind every word in real-time.",
                    },
                    {
                      title: "Personalized Directives",
                      desc: "Encoded with professional, efficient, and human-like conversational protocols.",
                    },
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                        <PhoneCall className="w-4 h-4 text-cyan-500  " />
                      </div>
                      <div>
                        <h4 className="text-white font-avenir-heavy text-sm mb-1 uppercase tracking-tight">
                          {f.title}
                        </h4>
                        <p className="text-white/50 text-xs leading-relaxed">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* AI Persona Terminal Overlay */}
                  <motion.div
                    id="vocal-persona-terminal"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-6 p-6 rounded-2xl bg-black border border-cyan-500/30 font-mono text-xs leading-relaxed relative overflow-hidden group/term"
                  >
                    <div
                      id="vocal-terminal-header"
                      className="flex justify-between items-center mb-4 border-b border-cyan-500/10 pb-2"
                    >
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                        <div className="w-2 h-2 rounded-full bg-cyan-500/50" />
                      </div>
                      <div className="text-xs text-cyan-500   animate-pulse">
                        SYSTEM_ACTIVE
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-cyan-500   opacity-80">
                        {"// Persona: Professional Voice Agent"}
                      </div>
                      <div className="text-white/70 tracking-tighter">
                        <span className="text-cyan-400 font-bold">MODE:</span>{" "}
                        HUMAN_CONVERSATIONAL
                        <br />
                        <span className="text-cyan-400 font-bold">
                          RULES:
                        </span>{" "}
                        Natural tone, efficient routing, empathy-enabled.
                        <br />
                        <span className="text-cyan-400 font-bold">
                          TASK_ALGO:
                        </span>{" "}
                        Answer queries, handle complaints, lead-gen
                        (name/phone/email).
                      </div>
                      <div className="pt-2 text-cyan-500  /40">
                        {"$ initial_greeting --execute"}
                      </div>
                      <div className="text-white italic">
                        "Hello! How can I assist your business today?"
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="absolute -bottom-10 -right-10 opacity-5">
                  <BrainCircuit className="w-40 h-40 text-cyan-500  " />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3.5 Enterprise AI Audit: TACTICAL DIAGNOSTIC NODE */}
      <section
        id="enterprise-ai-audit"
        className="py-32 px-4 relative overflow-hidden bg-black border-y border-white/5"
      >
        <div className="absolute inset-0 bg-cyan-600/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="flex-1">
              <motion.div {...fadeInUp}>
                {/* <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-8 bg-cyan-500/40" />
                  <span className="text-cyan-500   font-mono text-[9px] md:text-xs tracking-[0.5em] uppercase font-bold">
                    PROTOCOL_DATA::0xAUDIT_CORE
                  </span>
                </div> */}
                <h2 className="text-3xl md:text-5xl font-geometric font-bold text-white mb-8 uppercase italic tracking-tighter leading-none">
                  Enterprise  <span className="text-cyan-500  ">AI Audit</span>
                </h2>
                <p className="text-white/85 text-sm md:text-md leading-relaxed mb-10 font-avenir-regular border-l-2 border-cyan-500/20 pl-8 lowercase italic">
                  Manual audits are industrial risks. Deploy real-time
                  diagnostics for fraud detection and zero-error compliance.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Continuous Audit",
                    desc: "Automated scanning of invoices and logs for missing data or duplicates.",
                    icon: <Workflow className="w-4 h-4" />,
                  },
                  {
                    title: "Fraud Guard",
                    desc: "Instantly flagging payment patterns and suspicious vendor transactions.",
                    icon: <ShieldCheck className="w-4 h-4" />,
                  },
                  {
                    title: "Risk Prediction",
                    desc: "Identifying department process loopholes before they become costly issues.",
                    icon: <Activity className="w-4 h-4" />,
                  },
                  {
                    title: "Compliance Core",
                    desc: "Automated Tax and GST regulation checks with instant mismatch alerts.",
                    icon: <Zap className="w-4 h-4" />,
                  },
                  {
                    title: "Smart Insights",
                    desc: "Direct solutions for internal control and vendor blacklisting.",
                    icon: <BrainCircuit className="w-4 h-4" />,
                  },
                  {
                    title: "Efficiency Factor",
                    desc: "Reduce audit timelines from weeks to minutes, cutting costs significantly.",
                    icon: <Cpu className="w-4 h-4" />,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/30 transition-all group hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                  >
                    <div className="flex items-center   gap-2 mb-2">
                      
                    <div className="text-cyan-500     group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="text-white font-avenir-heavy text-[14px] uppercase tracking-wider mb-1 italic">
                      {item.title}
                    </h4>
                    
                    </div>
                    <p className="text-white/40 text-[11px] leading-relaxed italic">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative lg:order-first"
            >
              <div
                id="audit-comparison-panel"
                className="p-10 rounded-[3rem] bg-[#050505] border border-cyan-500/15 backdrop-blur-3xl relative overflow-hidden group shadow-[0_0_100px_rgba(6,182,212,0.2)]"
              >


                <h4 className="text-white font-geometric font-bold  mb-10 uppercase tracking-widest italic border-b border-cyan-500/20 pb-4">
                  Audit Transformation
                </h4>

                <div className="space-y-12">
                  <div className="relative pl-8 border-l-2 border-white/5">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-white/20" />
                    <div className="text-[15px] text-white/30 font-mono uppercase tracking-widest mb-2">
                      Traditional Audit
                    </div>
                    <div className="text-white/70 text-[14px] italic tracking-tight">
                      Manual checking of past data. Slow processes prone to
                      human error. Issues found too late.
                    </div>
                    <div className="mt-4 flex gap-2">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 font-bold uppercase tracking-tighter">
                        Slow Response
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 font-bold uppercase tracking-tighter">
                        Past-Oriented
                      </span>
                    </div>
                  </div>

                  <div className="relative pl-8 border-l-2 border-cyan-500/40">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    <div className="text-[15px] text-cyan-500   font-mono uppercase tracking-widest mb-2 font-bold">
                      AI Powered Audit
                    </div>
                    <div className="text-white/90 text-[14px] italic tracking-tight">
                      Real-time data scanning. Predictive risk alerts. Instant
                      fraud detection and zero-error compliance.
                    </div>
                    <div className="mt-4 flex gap-2">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-500   border border-cyan-500/20 font-bold uppercase tracking-tighter">
                        Real-Time
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-500   border border-cyan-500/20 font-bold uppercase tracking-tighter">
                        Predictive
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20">
                  <div className="text-[15px] text-cyan-500   font-mono uppercase tracking-widest mb-2 font-bold">
                    Impact Summary
                  </div>
                  <p className="text-white/85 text-[12px] lowercase italic">
                    Traditional Audit = Past Check (Reactionary) <br /> AI Audit
                    = Real-time + Future Prediction (Proactive)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW: AI Resume Analyzer & ATS Optimizer */}
      <section
        id="resume-analyzer"
        className="py-24 px-4 relative overflow-hidden bg-[#020202] border-y border-white/5"
      >
        <div id="resume-analyzer-container" className="max-w-7xl mx-auto">
          <div
            id="resume-analyzer-grid"
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center text-left"
          >
              <motion.div {...fadeInUp}>
                {/* <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-8 bg-cyan-500/40" />
                  <span className="text-cyan-500   font-mono text-[9px] md:text-xs tracking-[0.5em] uppercase font-bold">
                    PROTOCOL_HR::0xATS_SCANNER
                  </span>
                </div> */}
                <h2 className="text-3xl md:text-5xl font-geometric font-bold text-white mb-8 uppercase italic tracking-tighter leading-none">
                  AI Resume <span className="text-cyan-500  ">Analyzer</span>
                </h2>
                <p className="text-white/85 text-sm md:text-md leading-relaxed mb-10 font-avenir-regular border-l-2 border-cyan-500/20 pl-8 lowercase italic">
                  Stop getting ghosted by bots. Reverse-engineer recruiter
                  algorithms for absolute ATS compliance and keyword dominance.
                </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "ATS Score Engine",
                    desc: "Instantly calculate your compatibility score across top-tier Enterprise ATS systems.",
                    icon: <Activity className="w-4 h-4" />,
                  },
                  {
                    title: "Skill Gap Analysis",
                    desc: "Compare your profile against target JDs to highlight missing technical and soft skills.",
                    icon: <BrainCircuit className="w-4 h-4" />,
                  },
                  {
                    title: "Keyword Injection",
                    desc: "Dynamically suggesting industry buzzwords that trigger recruiter search filters.",
                    icon: <Zap className="w-4 h-4" />,
                  },
                  {
                    title: "Formatting Triage",
                    desc: "Cleaning complex layouts that break standard CV scanners and optical readers.",
                    icon: <Layers className="w-4 h-4" />,
                  },
                  {
                    title: "JD Matching Node",
                    desc: "Real-time percentage matching for specific roles with actionable improvement tips.",
                    icon: <Workflow className="w-4 h-4" />,
                  },
                  {
                    title: "Tone Optimization",
                    desc: "Analyzing linguistic precision to ensure your profile sounds professional and elite.",
                    icon: <FileText className="w-4 h-4" />,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/30 transition-all group hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-cyan-500   group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h4 className="text-white font-avenir-heavy text-[14px] uppercase tracking-wider italic">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-white/40 text-[11px] leading-relaxed italic">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative"
            >
              <div
                id="resume-diagnostic-panel"
                className="p-10 rounded-[3rem] bg-[#050505] border border-cyan-500/15 backdrop-blur-3xl relative overflow-hidden group shadow-[0_0_100px_rgba(6,182,212,0.2)]"
              >
                <div className="absolute inset-0 bg-cyan-600/5 blur-[120px] pointer-events-none" />


                <h4 className="text-white font-geometric font-bold mb-10 uppercase tracking-widest italic border-b border-cyan-500/20 pb-4">
                  Diagnostic Result
                </h4>

                <div className="space-y-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[15px] text-white/30 font-mono uppercase tracking-widest mb-2">
                        Overall ATS Score
                      </div>
                      <div className="text-3xl font-geometric font-bold text-cyan-500   italic uppercase">
                        94%
                      </div>
                    </div>

                  </div>

                  <div className="space-y-6">
                    <div className="relative pl-8 border-l-2 border-red-500/20">
                      <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-red-400" />
                      <div className="text-[15px] text-red-400/50 font-mono uppercase tracking-widest mb-2">
                        Classic Resume
                      </div>
                      <div className="text-white/50 text-[14px] italic tracking-tight">
                        Complex tables, inconsistent headers, and generic
                        buzzwords. Blocked by 70% of ATS bots.
                      </div>
                    </div>

                    <div className="relative pl-8 border-l-2 border-cyan-500/40">
                      <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                      <div className="text-[15px] text-cyan-500   font-mono uppercase tracking-widest mb-2 font-bold">
                        AI Optimized Profile
                      </div>
                      <div className="text-white/90 text-[14px] italic tracking-tight">
                        Machine-readable headers. Keyword-dense impact
                        statements. 100% visibility in search pods.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20">
                  <div className="flex gap-4 items-center">
                    <div className="p-2 rounded-lg bg-cyan-500/20">
                      <Activity className="w-5 h-5 text-cyan-500  " />
                    </div>
                    <div>
                      <div className="text-[15px] text-cyan-500   font-mono uppercase tracking-widest font-bold">
                        Real-time Analytics
                      </div>
                      <p className="text-white/40 text-[12px] lowercase italic">
                        Scanning metadata... Keywords optimized (42/45)... ATS
                        Ready.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW: Custom AI Chatbots & Cognitive Agents */}
      <section
        id="custom-chatbots"
        className="py-24 px-4 relative overflow-hidden bg-black border-y border-white/5"
      >
        <div id="chatbots-container" className="max-w-7xl mx-auto">
          <div
            id="chatbots-grid"
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center text-left"
          >
              <motion.div {...fadeInUp}>
                {/* <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-8 bg-cyan-500/40" />
                  <span className="text-cyan-500   font-mono text-[9px] md:text-xs tracking-[0.5em] uppercase font-bold">
                    PROTOCOL_VOICE::0xCHAT_ENGINE
                  </span>
                </div> */}
                <h2 className="text-3xl md:text-5xl font-geometric font-bold text-white mb-8 uppercase italic tracking-tighter leading-none">
                  Custom AI <span className="text-cyan-500  ">Chatbots</span>
                </h2>
                <p className="text-white/85 text-sm md:text-md leading-relaxed mb-10 font-avenir-regular border-l-2 border-cyan-500/20 pl-8 lowercase italic">
                  Deploy human-grade conversational agents with cross-platform
                  memory and enterprise-scale RAG capabilities.
                </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "RAG Knowledge Base",
                    desc: "Training bots on your internal PDFs, Wikis, and Databases with enterprise security.",
                    icon: <Database className="w-4 h-4" />,
                  },
                  {
                    title: "Contextual Memory",
                    desc: "Long-term conversation storage to maintain multi-session user consistency.",
                    icon: <BrainCircuit className="w-4 h-4" />,
                  },
                  {
                    title: "Multimodal Support",
                    desc: "Seamless handling of text, voice commands, and image-based queries.",
                    icon: <Activity className="w-4 h-4" />,
                  },
                  {
                    title: "CRM Integration",
                    desc: "Live sync with Salesforce, HubSpot, and custom APIs for real-time action taking.",
                    icon: <Workflow className="w-4 h-4" />,
                  },
                  {
                    title: "Human Transfer Node",
                    desc: "Seamless hand-off to human support agents when complex logic is required.",
                    icon: <Users className="w-4 h-4" />,
                  },
                  {
                    title: "Sentiment Intelligence",
                    desc: "Real-time emotional tone analysis to adjust response empathy and urgency.",
                    icon: <MessageSquareCode className="w-4 h-4" />,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/30 transition-all group hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-cyan-500   group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h4 className="text-white font-avenir-heavy text-[14px] uppercase tracking-wider italic">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-white/40 text-[11px] leading-relaxed italic">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative lg:order-first"
            >
              <div
                id="chatbot-evolution-panel"
                className="p-10 rounded-[3rem] bg-[#050505] border border-cyan-500/15 backdrop-blur-3xl relative overflow-hidden group shadow-[0_0_100px_rgba(6,182,212,0.2)]"
              >
                <div className="absolute inset-0 bg-cyan-600/5 blur-[120px] pointer-events-none" />


                <h4 className="text-white font-geometric font-bold mb-10 uppercase tracking-widest italic border-b border-cyan-500/20 pb-4">
                  Agent Evolution
                </h4>

                <div className="space-y-12">
                  <div className="relative pl-8 border-l-2 border-white/5">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-white/20" />
                    <div className="text-[15px] text-white/30 font-mono uppercase tracking-widest mb-2">
                      Standard Scripted Bot
                    </div>
                    <div className="text-white/50 text-[14px] italic tracking-tight">
                      Regimented flows, no memory, and high frustration rates.
                      Fails when user deviates.
                    </div>
                  </div>

                  <div className="relative pl-8 border-l-2 border-cyan-500/40">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    <div className="text-[15px] text-cyan-500   font-mono uppercase tracking-widest mb-2 font-bold">
                      Cognitive AI Agent
                    </div>
                    <div className="text-white/90 text-[14px] italic tracking-tight">
                      Fluid intelligence, RAG-enabled accuracy, and proactive
                      problem solving. 98% user satisfaction.
                    </div>
                    <div className="mt-4 flex gap-2">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-500   border border-cyan-500/20 font-bold uppercase tracking-tighter">
                        Self-Learning
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-500   border border-cyan-500/20 font-bold uppercase tracking-tighter">
                        Intent-Focused
                      </span>
                    </div>
                  </div>
                </div>

                {/* Typing Simulator Visual */}
                <div className="mt-12 p-6 rounded-2xl bg-black/40 border border-cyan-500/20 font-mono text-[10px] space-y-3">
                  <div className="flex gap-2 text-cyan-500  /50">
                    <span>[PD-AGENT]:</span>
                    <motion.span
                      animate={{ opacity: [0, 1] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="text-cyan-400"
                    >
                      Processing proprietary knowledge...
                    </motion.span>
                  </div>
                  <div className="text-white/40 italic">
                    {
                      "User intent identified: 'Enterprise Integration Strategy'"
                    }
                  </div>
                  <div className="flex gap-2 text-cyan-500  ">
                    <span>[PD-AGENT]:</span>
                    <span className="text-white">
                      Based on section 4.1 of your internal wiki, here is the
                      roadmap...
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3.6 PREDICTIVE ANALYTICS NODE: DATA-DRIVEN GROWTH ENGINE */}
      <section
        id="predictive-analytics"
        className="py-24 px-4 mb-20 mt-20 relative overflow-hidden bg-[#030303] border-t border-white/5"
      >
        {/* Technical Textures */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #06b6d4 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />

        {/* Animated Corner Brackets (HUD) */}
        <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-cyan-500/20 rounded-tl-3xl pointer-events-none animate-pulse" />
        <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-cyan-500/20 rounded-tr-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-cyan-500/20 rounded-bl-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-cyan-500/20 rounded-br-3xl pointer-events-none animate-pulse" />

        {/* Removed scanning beam for clarity */}

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-start h-auto">
            <div className="flex-1 text-left">
              <motion.div {...fadeInUp} className="mb-8">
                {/* <span className="text-cyan-500   font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4 block font-bold">
                  Predictive Intelligence
                </span> */}
                <h2 className="text-3xl md:text-5xl font-geometric font-bold text-white mb-6 uppercase italic tracking-tighter leading-none">
                  AI Power <span className="text-cyan-500  ">Analytics</span>
                </h2>
                <p className="text-white/85 text-sm md:text-md leading-relaxed font-avenir-regular max-w-2xl italic border-l-2 border-cyan-500/20 pl-8 lowercase">
                  Automatically analyze massive datasets with cognitive speed.
                  Our systems predict trends, detect anomalies, and optimize
                  your business lifecycle.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Data Synthesis",
                    desc: "Fast analysis of massive scale data.",
                    icon: <BarChart3 className="w-4 h-4" />,
                  },
                  {
                    title: "Future Mapping",
                    desc: "Forecasting demand based on history.",
                    icon: <Zap className="w-4 h-4" />,
                  },
                  {
                    title: "Decision Engine",
                    desc: "AI-driven marketing suggestions.",
                    icon: <BrainCircuit className="w-4 h-4" />,
                  },
                  {
                    title: "Fraud Shield",
                    desc: "Detect traffic spikes & fraud.",
                    icon: <ShieldCheck className="w-4 h-4" />,
                  },
                  {
                    title: "Behavioral Intel",
                    desc: "User behavior recommendations.",
                    icon: <Users className="w-4 h-4" />,
                  },
                  {
                    title: "Insight Auto",
                    desc: "Generated reports & daily insights.",
                    icon: <Workflow className="w-4 h-4" />,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/30 transition-all group hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-cyan-500   group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h4 className="text-white font-avenir-heavy text-[14px] uppercase tracking-wider italic">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-white/40 text-[11px] leading-relaxed italic">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Analytics Evolution Panel */}
            <div className="lg:w-[40%] w-full shrink-0">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] min-md:top-20 bg-neutral-900/80 border border-cyan-500/30 backdrop-blur-3xl relative overflow-hidden group flex flex-col gap-8 shadow-[0_0_100px_rgba(6,182,212,0.35)] hover:shadow-[0_0_150px_rgba(6,182,212,0.55)] shadow-cyan-500/20 transition-all duration-700"
              >
                <div className="absolute inset-0 bg-cyan-600/5 blur-[120px] pointer-events-none" />

                <div>
                  <h4 className="text-white font-geometric font-bold mb-10 uppercase tracking-widest italic border-b border-cyan-500/10 pb-3">
                    Transformation_Logic
                  </h4>

                  <div className="space-y-6">
                    <div className="relative pl-6 border-l border-white/5">
                      <div className="absolute -left-[3.5px] top-0 w-1.5 h-1.5 rounded-full bg-white/20" />
                      <div className="text-[15px] text-white/30 font-mono uppercase tracking-widest mb-2">
                        Traditional BI
                      </div>
                      <div className="text-white/85 text-[14px] italic leading-tight">
                        Static charts & lagging indicators. Yesterday's data.
                      </div>
                    </div>

                    <div className="relative pl-6 border-l-2 border-cyan-500/40">
                      <div className="absolute -left-[3.5px] top-0 w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                      <div className="text-[15px] text-cyan-500   font-mono uppercase tracking-widest mb-2 font-bold">
                        Predictive AI
                      </div>
                      <div className="text-white/90 text-[14px] italic leading-tight uppercase font-bold tracking-tighter">
                        Real-time forecasting. Autonomous & proactive.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                  <div className="text-[15px] text-cyan-500   font-mono uppercase tracking-widest mb-2 font-bold">
                    Velocity_Impact
                  </div>
                  <p className="text-white/50 text-[12px] lowercase italic leading-none whitespace-pre-line">
                    Descriptive (Past) → Prescriptive (Future Insights)
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Live Data Ticker - Bottom */}
      </section>

      {/* 4. Enterprise Sovereignty: Privacy & Compliance - TACTICAL CONSOLE */}
      <section
        id="cognitive-shielding-section"
        className="py-24 px-4 relative overflow-hidden bg-[#030303]"
      >
        <div id="cognitive-shielding-container" className="max-w-7xl mx-auto">
          <div
            id="cognitive-shielding-grid"
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch"
          >
            <div className="flex-1 text-left flex flex-col justify-center">
              <motion.div {...fadeInUp}>
                {/* <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-8 bg-cyan-500/40" />
                  <span className="text-cyan-500   font-mono text-xs tracking-[0.5em] uppercase font-bold">
                    Data Sovereignty Protocol
                  </span>
                </div> */}
                <h2 className="text-3xl md:text-5xl font-geometric font-bold text-white mb-8 leading-[0.9] tracking-tighter uppercase italic">
                  Cognitive <br />{" "}
                  <span className="text-cyan-500  ">Shielding</span>
                </h2>
                <p className="text-white/85 text-sm md:text-md leading-relaxed mb-12 font-avenir-regular max-w-lg border-l-2 border-cyan-500/20 pl-8 lowercase italic">
                  Architecting industrial-grade cognitive moats through unified
                  VPC isolation and zero-leak encryption nodes.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Private VPCs",
                    desc: "Isolated Compute Nodes",
                    icon: <Lock className="w-4 h-4" />,
                  },
                  {
                    title: "Zero-Leak Tech",
                    desc: "End-to-End Encryption",
                    icon: <ShieldCheck className="w-4 h-4" />,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/30 transition-all group hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-cyan-500   group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h4 className="text-white font-avenir-heavy text-[14px] uppercase tracking-wider italic">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-white/40 text-[11px] leading-relaxed italic">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div id="tools-technology-stack" className="flex-1 w-full relative">
              <div
                id="tools-deep-stack-card"
                className="h-full p-8 rounded-[2rem] bg-[#050505] border border-cyan-500/15 relative overflow-hidden group shadow-[0_0_100px_rgba(6,182,212,0.2)]"
              >
                <div className="absolute inset-0 bg-cyan-600/5 blur-[120px] pointer-events-none" />
                <div className="flex flex-col gap-12 h-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-[15px] text-cyan-500   font-mono uppercase tracking-[0.5em] mb-4 font-bold">
                        Intelligence_Arch
                      </div>
                      <h4 className="text-2xl font-geometric font-bold text-white italic uppercase tracking-tighter leading-none">
                        Deep Stack <br />
                        <span className="text-cyan-500   opacity-50 text-[14px]">
                          Registry V3.1
                        </span>
                      </h4>
                    </div>
                    <div className="w-10 h-px bg-cyan-500/20 group-hover:w-20 transition-all duration-700 mt-2" />
                  </div>

                  <div className="space-y-12 flex-1">
                    {/* Interactive Tech Categories */}
                    <div className="space-y-8">
                      <div>
                        <div className="text-[15px] text-white/85 uppercase tracking-[0.3em] mb-4 font-avenir-bold">
                          0x01_Deep Learning Frameworks
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "PyTorch",
                            "TensorFlow",
                            "Keras",
                            "Caffe",
                            "Chainer",
                            "Torch",
                            "CNTK",
                          ].map((tech, i) => (
                            <div
                              key={i}
                              className="px-3 py-1.5 rounded-sm border border-white/[0.03] bg-white/[0.01] text-xs text-white/85 font-mono hover:border-cyan-500/30 hover:text-cyan-400 transition-all cursor-crosshair"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-10">
                        <div>
                          <div className="text-[15px] text-white/85 uppercase tracking-[0.3em] mb-4 font-avenir-bold">
                            0x02_Neural Innov
                          </div>
                          <ul className="space-y-3">
                            {[
                              "Generative Models",
                              "ResNet Arch",
                              "Transformer Nodes",
                            ].map((t, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-[14px] text-white/50 font-mono group/li cursor-pointer uppercase"
                              >
                                <div className="h-1 w-1 bg-cyan-500/20 group-hover/li:bg-cyan-500 transition-colors" />
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-[15px] text-white/85 uppercase tracking-[0.3em] mb-4 font-avenir-bold">
                            0x03_Hardware
                          </div>
                          <ul className="space-y-3">
                            {["NVIDIA H100", "Cuda_Opt", "Tensor_Cores"].map(
                              (t, i) => (
                                <li
                                  key={i}
                                  className="flex items-center gap-2 text-[14px] text-white/50 font-mono group/li cursor-pointer uppercase"
                                >
                                  <div className="h-1 w-1 bg-cyan-500/20 group-hover/li:bg-cyan-500 transition-colors" />
                                  {t}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-white/5 opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="text-xs font-mono text-cyan-500   tracking-[0.4em]">
                      
                    </div>
                    <div className="flex gap-1 animate-pulse">
                      <div className="w-1 h-1 rounded-full bg-cyan-500" />
                      <div className="w-1 h-1 rounded-full bg-cyan-500/40" />
                      <div className="w-1 h-1 rounded-full bg-cyan-500/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Tactical Outcomes: DIGITAL PERFORMANCE ARCHITECTURE */}
      <section
        id="tactical-outcomes"
        className="py-32 px-4 bg-black relative overflow-hidden border-t border-white/5"
      >
        <div className="absolute inset-0 bg-[#06b6d4]/[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div
          id="outcomes-container"
          className="max-w-7xl mx-auto relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-cyan-500/40" />
                <span className="text-cyan-500   font-mono text-[9px] md:text-xs tracking-[0.5em] uppercase font-bold">
                  PROTOCOL_LOCK::0xOUTCOME_CORE
                </span>
              </div>
              <h2 className="text-3xl md:text-6xl font-geometric font-bold text-white mb-8 leading-[0.9] tracking-tighter uppercase italic">
                Numerical <span className="text-cyan-500  ">Architecture</span>
              </h2>
              <p className="text-white/50 text-base md:text-lg mb-10 max-w-xl font-avenir-regular leading-relaxed border-l-2 border-cyan-500/20 pl-8 lowercase italic">
                Renowned for our ability to drive tangible business outcomes,
                Pantheon Digital is a leading AI solutions provider engineered
                for the high-data era.
              </p>
              <Link href="/Contact_Us" className={PRIMARY_CTA_CLASS}>
                INITIATE_DEPLOYMENT
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  val: "94.2%",
                  unit: "Acc",
                  label: "Synthetic Reasoning",
                  coord: "X-224 / Y-98",
                },
                {
                  val: "0.1ms",
                  unit: "Lat",
                  label: "Quantized Inference",
                  coord: "X-442 / Y-12",
                },
                {
                  val: "10B+",
                  unit: "Tokens",
                  label: "Agentic Orchestration",
                  coord: "X-998 / Y-55",
                },
                {
                  val: "Zero",
                  unit: "Leak",
                  label: "Private Intelligence",
                  coord: "X-001 / Y-00",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="group p-8 rounded-[2rem] bg-neutral-900/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-3xl relative overflow-hidden"
                >
                  <div className="absolute top-4 right-6 text-[7px] font-mono text-cyan-500  /10 group-hover:text-cyan-400/30 transition-colors uppercase">
                    {stat.coord}
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl md:text-5xl font-geometric font-bold text-cyan-500   block">
                      {stat.val}
                      <span className="text-xs ml-1 opacity-40 font-mono">
                        {stat.unit}
                      </span>
                    </span>
                    <div className="h-[2px] w-10 bg-cyan-500/20 group-hover:w-20 group-hover:bg-cyan-500/50 transition-all duration-500 mt-2" />
                  </div>
                  <h4 className="text-white font-geometric font-bold text-[10px] uppercase tracking-[0.2em] group-hover:text-cyan-400 transition-colors italic">
                    {stat.label}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Why Choose Our Gen AI Solutions - VALUE PROPOSITION */}
      <section id="why-choose-us" className="py-24 px-4 bg-cyan-950/5 relative">
        <div id="why-choose-us-container" className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <motion.div {...fadeInUp}>
              <span className="text-cyan-500   font-mono text-xs tracking-[0.4em] uppercase mb-4 block font-bold">
                The Pantheon Edge
              </span>
              <h2 className="text-3xl md:text-5xl font-geometric font-bold text-white mb-6 uppercase italic tracking-tighter">
                Why <span className="text-cyan-500  ">Choose Our</span> Gen AI
                Solutions
              </h2>
              <p className="text-white/85 text-sm md:text-md max-w-2xl mx-auto font-avenir-regular border-b border-cyan-500/10 pb-8 lowercase italic">
                We deliver excellence through innovation and expertise
              </p>
            </motion.div>
          </div>

          <div
            id="value-prop-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5"
          >
            {[
              {
                num: "01",
                title: "Inference Edge",
                desc: "Optimized model hosting for ultra-low latency.",
              },
              {
                num: "02",
                title: "Hybrid RAG",
                desc: "Multi-vector search across structured and unstructured data.",
              },
              {
                num: "03",
                title: "Elastic Scaling",
                desc: "Dynamic compute allocation for high-burst inference loads.",
              },
              {
                num: "04",
                title: "Active Governance",
                desc: "Continuous drift detection and model bias monitoring.",
              },
            ].map((prop, i) => (
              <motion.div
                key={i}
                className="p-10 bg-black hover:bg-cyan-500/[0.03] transition-all duration-500 group relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <div className="text-[14px] font-mono text-cyan-500   mb-10 tracking-[0.4em] uppercase font-bold">
                  ADV_PROP_0{prop.num}
                </div>
                <h4 className="text-white font-geometric font-bold text-[18px] mb-4 uppercase tracking-widest group-hover:text-cyan-400 transition-colors leading-tight italic">
                  {prop.title}
                </h4>
                <p className="text-white/85 text-[14px] italic tracking-tight font-avenir-regular">
                  {prop.desc}
                </p>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,1)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Why Creator Trust Section - STARK/JARVIS THEME */}
      <section
        id="creator-trust"
        className="py-24 px-4 relative overflow-hidden bg-black border-y border-white/5"
      >
        <div id="creator-trust-container" className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Dynamic Neural Framework Animation */}
            <motion.div
              id="creator-trust-media"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative h-[500px] flex items-center justify-center overflow-hidden"
            >
              {/* Tactical Hexagonal Substrate Texture */}
              <div className="absolute inset-0 opacity-[0.1] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
              <div className="absolute inset-0 bg-cyan-950/10 border border-cyan-500/10 rounded-[3rem] shadow-inner shadow-cyan-500/5 overflow-hidden">
                {/* Animated Neural Network Grid */}
                <svg className="w-full h-full opacity-30">
                  {[...Array(6)].map((_, i) => (
                    <motion.line
                      key={`h-${i}`}
                      x1="0"
                      y1={i * 20 + "%"}
                      x2="100%"
                      y2={i * 20 + "%"}
                      stroke="rgba(6,182,212,0.3)"
                      strokeWidth="0.5"
                      animate={{ opacity: [0.1, 0.4, 0.1] }}
                      transition={{
                        duration: 3,
                        delay: i * 0.5,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                  {[...Array(6)].map((_, i) => (
                    <motion.line
                      key={`v-${i}`}
                      y1="0"
                      x1={i * 20 + "%"}
                      y2="100%"
                      x2={i * 20 + "%"}
                      stroke="rgba(6,182,212,0.3)"
                      strokeWidth="0.5"
                      animate={{ opacity: [0.1, 0.4, 0.1] }}
                      transition={{
                        duration: 3,
                        delay: i * 0.5,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                  {/* Animated Nodes (Rendered client-side only to avoid hydration mismatch) */}
                  {isMounted &&
                    nodes.map((node, i) => (
                      <motion.circle
                        key={i}
                        cx={node.cx}
                        cy={node.cy}
                        r="1.5"
                        fill="cyan"
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0.5, 1.5, 0.5],
                        }}
                        transition={{
                          duration: node.duration,
                          repeat: Infinity,
                          delay: node.delay,
                        }}
                      />
                    ))}
                </svg>

                {/* Central Scanning Beam */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-40 w-full"
                  animate={{ top: ["-100%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Stark HUD Overlays */}
              <div className="relative z-10 text-center">
                <div className="w-40 h-40 border border-cyan-500/20 rounded-full flex items-center justify-center animate-spin-slow">
                  <div className="w-32 h-32 border border-cyan-500/40 rounded-full border-dashed" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cpu className="w-12 h-12 text-cyan-500   drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
                </div>
              </div>

              {/* Floating HUD Accent */}
              <div className="absolute top-6 right-6 p-6 bg-neutral-950/80 border border-cyan-500/30 rounded-2xl backdrop-blur-xl">
                <div className="text-xs text-cyan-500   font-mono tracking-widest font-bold">
                  NODE_ACTIVE
                </div>
                <div className="text-xs text-white/50 font-mono">
                  PD_SYS_V.01
                </div>
              </div>
            </motion.div>

            {/* Right: Feature Matrix */}
            <div id="creator-trust-content" className="text-left lg:order-first">
              <motion.div {...fadeInUp}>
                {/* <span className="text-cyan-500   font-avenir-heavy text-xs tracking-[0.5em] uppercase mb-8 block font-bold">
                  Why Creator Trust
                </span> */}
                <h2 className="text-3xl md:text-5xl font-geometric font-bold text-white mb-6 leading-[0.9] tracking-tighter uppercase italic">
                  Why Creator Trust <br/>
                  Pantheon <span className="text-cyan-500  ">Digital.</span>
                </h2>
              </motion.div>

              <div id="creator-trust-grid" className="space-y-4">
                {[
                  {
                    title: "Zero-Prompt Chains",
                    desc: "Automated reasoning loops that eliminate complex prompt engineering for users.",
                    icon: <Zap className="w-4 h-4" />,
                  },
                  {
                    title: "Parametric Diffusion",
                    desc: "Advanced image synthesis with granular control over brand-aligned styling.",
                    icon: <Sparkles className="w-4 h-4" />,
                  },
                  {
                    title: "Tensor Acceleration",
                    desc: "High-concurrency infrastructure powered by H100 GPU clusters.",
                    icon: <Cpu className="w-4 h-4" />,
                  },
                  {
                    title: "Direct Stack Sync",
                    desc: "Real-time data streaming into your existing Excel, JSON, or SQL pipelines.",
                    icon: <Database className="w-4 h-4" />,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-5 border-b border-white/5 hover:border-cyan-500/20 transition-all group flex items-start gap-6 cursor-crosshair"
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500   group-hover:bg-cyan-500 group-hover:text-black transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-geometric font-bold text-[15px] uppercase tracking-widest mb-1 italic">
                        {item.title}
                      </h4>
                      <p className="text-white/50 text-[13px]  font-avenir-regular tracking-tight italic">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Implementation Roadmap - CYAN THEME */}
      <section
        id="implementation-roadmap"
        className="py-24 px-4 bg-[#050505] border-t border-white/10 relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-cyan-400 to-transparent shadow-[0_0_30px_rgba(6,182,212,0.8)]" />
        <div
          id="roadmap-main-container"
          className="max-w-5xl mx-auto text-center"
        >
          <BrainCircuit className="w-20 h-20 text-cyan-500   mx-auto mb-12 animate-pulse drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]" />
          <h2 className="text-3xl md:text-5xl font-geometric font-bold text-white mb-8 tracking-tighter uppercase italic leading-none">
            The Cyan Transformation.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 border border-white/5 bg-white/5 mb-20 overflow-hidden rounded-2xl">
            {[
              { t: "Deep Nexus Audit", d: "48 Hours", id: "PHASE_01" },
              { t: "Cognitive MVP", d: "4 Weeks", id: "PHASE_02" },
              { t: "Global Scale", d: "Phase II", id: "PHASE_03" },
            ].map((r, i) => (
              <div
                key={i}
                className="p-12 bg-black hover:bg-cyan-500/[0.03] transition-all duration-500 group text-center relative"
              >
                <div className="text-xs font-mono text-cyan-500  /30 mb-8 tracking-[0.6em] uppercase">
                  {r.id}
                </div>
                <div className="text-xs text-white font-avenir-heavy mb-2 uppercase tracking-[0.4em] font-bold opacity-40 group-hover:text-cyan-400 group-hover:opacity-100 transition-all">
                  {r.t}
                </div>
                <div className="text-3xl text-white font-geometric font-bold italic tracking-tighter uppercase">
                  {r.d}
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-white/10" />
                )}
              </div>
            ))}
          </div>
          <Link href="/Contact_Us" className={`${PRIMARY_CTA_CLASS} group`}>
            Start Your Pilot
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* NEW: Gen AI Services - PRODUCT/CAPABILITY SLIDER */}
      <section
        id="gen-ai-services"
        className="py-24 bg-black relative mb-32 border-y border-white/5 overflow-hidden "
      >
        <div
          id="gen-ai-services-container"
          className="max-w-[1440px] mx-auto px-4"
        >
          <div className="flex flex-col items-center mb-20 gap-10">
            <motion.div {...fadeInUp} className="text-center">
              <span className="text-cyan-500   font-avenir-heavy text-[10px] tracking-[0.5em] uppercase mb-4 block font-bold">
                Protocol Repository
              </span>
              <h2 className="text-3xl md:text-5xl font-geometric font-bold text-white mb-6 uppercase tracking-tighter">
                Gen AI <span className="text-cyan-500  ">Service</span> Core
              </h2>
              <p className="text-white/40 text-sm max-w-xl mx-auto font-avenir-regular leading-relaxed">
                Browse our full spectrum of generative intelligence services,
                each engineered for seamless enterprise deployment and scale.
              </p>
            </motion.div>

            {/* Slider Controls */}
            <div className="flex gap-4 ">
              <button
                onClick={() => {
                  const el = document.getElementById("gen-ai-slider-track");
                  if (el) el.scrollBy({ left: -400, behavior: "smooth" });
                }}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("gen-ai-slider-track");
                  if (el) el.scrollBy({ left: 400, behavior: "smooth" });
                }}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <style>{`
            #gen-ai-slider-track::-webkit-scrollbar {
              display: none;
            }
            #gen-ai-slider-track {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          <div
            id="gen-ai-slider-track"
            className="flex gap-8 overflow-x-auto pb-12 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
          >
            {[
              {
                title: "Custom AI Chatbots",
                desc: "Deploy sentient-grade agents with multi-turn memory and recursive RAG integration. Optimized for complex customer journeys and internal knowledge retrieval.",
                icon: <MessageSquareCode className="w-10 h-10 text-cyan-500  " />,
                rating: 4.9,
                category: "Communication",
                tag: "STABLE",
                image: "/genai/chatbot.png",
              },
              {
                title: "AI Content Generation",
                desc: "High-fidelity semantic content engine synthesizing brand voice, SEO latent indexing, and multi-platform formatting for global resonance.",
                icon: <Sparkles className="w-10 h-10 text-cyan-500  " />,
                rating: 4.8,
                category: "Marketing",
                tag: "DEPLOYED",
                image: "/genai/content.png",
              },
              {
                title: "RAG Systems",
                desc: "Architecting multi-vector retrieval pipelines that combine siloed proprietary data with LLMs for hallucination-free enterprise intelligence.",
                icon: <Search className="w-10 h-10 text-cyan-500  " />,
                rating: 4.7,
                category: "Data Science",
                tag: "ENTERPRISE",
                image: "/genai/rag.png",
              },
              {
                title: "AI Power Analytics",
                desc: "Prescriptive insights leveraging automated anomaly detection and behavioral forecasting to accelerate enterprise revenue velocity.",
                icon: <BarChart3 className="w-10 h-10 text-cyan-500  " />,
                rating: 4.9,
                category: "Analytics",
                tag: "ACTIVE",
                image: "/genai/analytics.png",
              },
              {
                title: "AI Resume Analyzer",
                desc: "Reverse-engineering the recruitment filter chain via deep diagnostics for ATS compliance, keyword saturation, and skill gap bridging.",
                icon: <FileText className="w-10 h-10 text-cyan-500  " />,
                rating: 4.7,
                category: "Career",
                tag: "BETA",
                image: "/genai/resume_v2.png",
              },
              {
                title: "AI Code Generation",
                desc: "Autonomous software engineering suites capable of boilerplate reduction, test generation, and complex architecture refactoring via agentic loops.",
                icon: <Database className="w-10 h-10 text-cyan-500  " />,
                rating: 4.9,
                category: "Engineering",
                tag: "V4.2",
                image: "/genai/code.png",
              },
              {
                title: "AI App Development",
                desc: "Custom AI-powered applications built from scratch, including mobile apps, web platforms, and desktop solutions.",
                icon: <Cpu className="w-10 h-10 text-cyan-500  " />,
                rating: 5.0,
                category: "Development",
                tag: "PRODUCTION",
                image: "/genai/content.png",
              },
              {
                title: "AI Voice Assistant",
                desc: "AI-powered voice agents for automated lead qualification and 24/7 outbound scaling with natural speech synthesis.",
                icon: <PhoneCall className="w-10 h-10 text-cyan-500  " />,
                rating: 4.6,
                category: "Sales",
                tag: "ACTIVE",
                image: "/genai/voice.png",
              },
              {
                title: "AI Video Production",
                desc: "Text-to-video generation for marketing and corporate training. Create cinematic grade visuals from simple text prompts.",
                icon: <Film className="w-10 h-10 text-cyan-500  " />,
                rating: 4.8,
                category: "Production",
                tag: "RENDER_CORE",
                image: "/genai/video.png",
              },
              {
                title: "AI Image Generation",
                desc: "AI-powered image generation for marketing, social media, and documentation. Generate high-quality assets at scale.",
                icon: <Image className="w-10 h-10 text-cyan-500  " />,
                rating: 4.9,
                category: "Creative",
                tag: "PRO",
                image: "/genai/vision.png",
              },
              {
                title: "AI Translation",
                desc: "Bridge language barriers with real-time, context-aware localization and translation across 50+ global languages.",
                icon: <Globe className="w-10 h-10 text-cyan-500  " />,
                rating: 4.7,
                category: "Global",
                tag: "NODE",
                image: "/genai/translation.png",
              },
              {
                title: "Enterprise AI Audit",
                desc: "Comprehensive diagnostic of your business infrastructure for AI readiness and ethical compliance benchmarks.",
                icon: <ShieldCheck className="w-10 h-10 text-cyan-500  " />,
                rating: 4.9,
                category: "Security",
                tag: "AUDITED",
                image: "/genai/rag.png",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="w-[270px] md:w-[310px] shrink-0 snap-start"
              >
                <ServiceCard service={service} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="[&_>_footer_>_div:last-child]:mb-0">
        <Footer theme="ai" />
      </div>
    </main>
  );
}

function CheckCircle2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 12 2 2 4-4" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function NexusExplorer() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeBtn = scrollRef.current?.children[active] as HTMLElement;
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [active]);

  const pillars = [
    {
      title: "Predictive Power Analytics",
      desc: "Go beyond historical reports. Our engine identifies lead intensity and forecasts revenue cycles before they happen.",
      icon: <BarChart3 className="w-5 h-5" />,
      features: ["Revenue Forecasting", "Churn Probability", "Lead Intensity"],
      metric: "Prescriptive Hub",
    },
    {
      title: "Enterprise AI Audit",
      desc: "Automated scanning of transactional logs and invoices to identify fraud, risks, and compliance loopholes at scale.",
      icon: <ShieldCheck className="w-5 h-5" />,
      features: ["Fraud Detection", "Risk Assessment", "Continuous Audit"],
      metric: "Risk Secured",
    },
    {
      title: "AI Search Visibility",
      desc: "Engineering your brand authority into the inference path of LLMs to dominate search results in the age of AI.",
      icon: <Search className="w-5 h-5" />,
      features: ["Entity Ranking", "Synthetic SEO", "Citation Mapping"],
      metric: "Authority Rank",
    },
    {
      title: "Sentient AI Chatbots",
      desc: "Cognitive agents trained on your proprietary data with long-term memory and autonomous task execution capabilities.",
      icon: <MessageSquareCode className="w-5 h-5" />,
      features: ["Recursive RAG", "Contextual Memory", "CRM Integration"],
      metric: "98% Sat Rate",
    },
    {
      title: "AI Resume Diagnostics",
      desc: "ATS-compliant profile optimization that reverse-engineers recruiter filters and bridges critical technical skill gaps.",
      icon: <FileText className="w-5 h-5" />,
      features: ["ATS Score Engine", "Gap Analysis", "Keyword Injection"],
      metric: "Hire Ready",
    },
    {
      title: "Synthetic Vocal Intel",
      desc: "Ultra-low latency speech synthesis providing natural, emotionally-aware vocal agents for autonomous sales and support.",
      icon: <Zap className="w-5 h-5" />,
      features: ["Emotional Nuance", "Cloning Node", "Zero-Latency"],
      metric: "Sentient Voice",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="flex flex-col lg:flex-row gap-0.5 border border-white/5 rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden bg-neutral-900/10 backdrop-blur-3xl shadow-[0_30px_100px_rgba(0,0,0,0.8),0_0_80px_rgba(6,182,212,0.05)] min-h-[90vh] lg:min-h-0">
      {/* Sidebar Navigation - Centered via Effect */}
      <div
        ref={scrollRef}
        className="w-full lg:w-[350px] border-b lg:border-b-0 lg:border-r border-white/5 bg-black/40 p-2 lg:p-4 flex lg:flex-col flex-row overflow-x-auto lg:overflow-x-hidden no-scrollbar whitespace-nowrap gap-2"
      >
        {pillars.map((pillar, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 lg:w-full text-left px-5 py-3 lg:p-6 rounded-xl lg:rounded-2xl transition-all duration-300 group flex items-center justify-center lg:justify-between gap-4 ${
              active === i
                ? "bg-cyan-500/10 border border-cyan-400/50 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                : "bg-transparent border border-transparent hover:bg-white/5"
            }`}
          >
            <div className="flex items-center gap-3 lg:gap-4">
              <div
                className={`scale-100 lg:scale-110 transition-colors duration-500 ${active === i ? "text-cyan-400" : "text-white/60"}`}
              >
                {pillar.icon}
              </div>
              <span
                className={`text-xs lg:text-xs font-geometric font-bold uppercase tracking-widest transition-colors ${active === i ? "text-white" : "text-white/60"}`}
              >
                {pillar.title}
              </span>
            </div>
            {active === i && (
              <motion.div
                layoutId="active-indicator"
                className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,1)] hidden lg:block"
              />
            )}
          </button>
        ))}
      </div>

      {/* Main Display Panel */}
      <div className="flex-1 p-6 lg:p-16 relative min-h-[400px] lg:min-h-[500px] flex flex-col justify-start lg:justify-center overflow-hidden">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-left"
        >
          <div className="flex items-center gap-4 lg:gap-6 mb-8 lg:mb-12">
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-[2rem] bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
              <div className="text-cyan-500   scale-125 lg:scale-150">
                {pillars[active].icon}
              </div>
            </div>
            <div>
              <div className="text-xs lg:text-xs font-mono text-cyan-500  /60 uppercase tracking-[0.5em] mb-1">
                Module_0{active + 1}
              </div>
              <div className="text-xs font-mono text-white/60 uppercase tracking-widest italic">
                {pillars[active].metric}
              </div>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-geometric font-bold text-white mb-8 uppercase italic tracking-tighter max-w-xl leading-none">
            {pillars[active].title}
          </h3>

          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-12 font-avenir-regular max-w-2xl lowercase italic border-l-2 border-cyan-500/10 pl-8">
            {pillars[active].desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-white/5">
            {pillars[active].features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-500  /40" />
                <span className="text-xs text-white/60 font-avenir-heavy uppercase tracking-widest">
                  {f}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/Contact_Us"
              className={`${PRIMARY_CTA_CLASS} group overflow-hidden`}
            >
              <span className="relative z-10">Start Your AI Pilot</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>
          </div>
        </motion.div>

        {/* Console Atmosphere Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-geometric font-black text-white/[0.01] pointer-events-none select-none italic">
          CODE_0{active + 1}
        </div>
      </div>
    </div>
  );
}

function InferenceTerminal() {
  const [logs, setLogs] = useState(["[SYSTEM]: INITIALIZING NEURAL NODE..."]);

  useEffect(() => {
    const rawLogs = [
      "[SYSTEM]: Node auth verified (0xPD_777)",
      "[LLM]: Generating response shard #44...",
      "[AUTH]: Isolated VPC established.",
      "[NEURAL]: Mapping synaptic paths...",
      "[INFERENCE]: Load balancing active.",
      "[CORE]: Quantum parity check complete.",
      "[STATUS]: 1.8PB/Sec throughput stable.",
    ];

    let i = 0;
    const interval = setInterval(() => {
      setLogs((prev) => {
        const next = [...prev, rawLogs[i]];
        if (next.length > 3) next.shift();
        return next;
      });
      i = (i + 1) % rawLogs.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-3 rounded-lg bg-black/80 border border-white/5 font-mono text-xs space-y-1 overflow-hidden min-h-[50px]">
      {logs.map((log, idx) => (
        <div
          key={idx}
          className={`${idx === logs.length - 1 ? "text-cyan-400 font-bold animate-pulse" : "text-white/70 font-medium"}`}
        >
          {log}
        </div>
      ))}
    </div>
  );
}
