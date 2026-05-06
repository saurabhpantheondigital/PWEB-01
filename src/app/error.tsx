"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Check if it's a ChunkLoadError
    if (error.message && error.message.includes("Loading chunk")) {
      console.warn("ChunkLoadError detected. Attempting automatic reload...");
      window.location.reload();
    }
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black p-6 text-center">
      <div className="relative max-w-xl flex flex-col items-center">
        <div className="mb-8">
          <Image
            src="/Logo.svg"
            alt="Pantheon Digital"
            width={200}
            height={60}
            className="w-[150px] h-auto opacity-50 grayscale"
          />
        </div>

        <h1 className="font-clash font-black text-3xl md:text-5xl text-white mb-4 tracking-tighter">
          Something went <span className="text-red-500">unexpected.</span>
        </h1>
        
        <p className="text-white/60 font-avenir-medium text-base md:text-lg mb-10 leading-relaxed">
          We encountered a digital anomaly. This could be due to a connection issue or a temporary system glitch.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={() => reset()}
            className="px-8 py-4 bg-white text-black font-avenir-heavy rounded-full hover:bg-white/90 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Attempt Recovery
          </button>
          
          <Link
            href="/"
            className="px-8 py-4 border border-white/20 text-white font-avenir-heavy rounded-full hover:bg-white/5 transition-all active:scale-95"
          >
            Back to Home
          </Link>
        </div>

        {error.digest && (
          <p className="mt-12 text-white/20 font-mono text-[10px] tracking-widest uppercase">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
