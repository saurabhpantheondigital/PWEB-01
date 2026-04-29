import type { Metadata } from "next";
import "./globals.css";
import LayoutShell from "@/components/layout/LayoutShell";

export const metadata: Metadata = {
  title: {
    template:
      "Digital Solutions Agency | Web, Branding & Software | Pantheon Digital",
    default: "Pantheon Digital",
  },
  description:
    "Empowering your business with end-to-end digital solutions—web development, branding, marketing, and software. Discover how Pantheon Digitals drives results.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Pantheon Digital",
    description:
      "Empowering your business with end-to-end digital solutions—web development, branding, marketing, and software. Discover how Pantheon Digitals drives results.",
    images: ["/Logo.svg"],
  },
  metadataBase: new URL("https://pantheondigitals.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased bg-black overflow-x-hidden`}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
