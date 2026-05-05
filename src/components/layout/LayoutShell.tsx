"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

type LayoutShellProps = {
  children: ReactNode;
};

export default function LayoutShell({ children }: LayoutShellProps) {
  const pathname = usePathname();
  const hideFooter = pathname?.startsWith("/Ai");

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-slate-900 focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">{children}</main>
      {!hideFooter && <Footer />}
    </>
  );
}
