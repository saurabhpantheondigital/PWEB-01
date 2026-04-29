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
      <Header />
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
