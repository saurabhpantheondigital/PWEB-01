"use client";

import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
      <div className="relative flex flex-col items-center">
        {/* Logo with subtle pulse */}
        <div className="relative mb-8 animate-pulse">
          <Image
            src="/Logo.svg"
            alt="Pantheon Digital Logo"
            width={300}
            height={100}
            className="w-[200px] md:w-[300px] h-auto"
            priority
          />
        </div>

        {/* Cyber-Glass Loading Indicator */}
        <div className="relative w-48 h-1 bg-neutral-800 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-scroll" 
               style={{ "--animation-duration": "1.5s" } as React.CSSProperties} />
        </div>
        
        <p className="mt-4 text-white/40 font-avenir-medium text-xs tracking-[0.3em] uppercase animate-pulse">
          Initializing Digital Excellence
        </p>
      </div>
    </div>
  );
}
