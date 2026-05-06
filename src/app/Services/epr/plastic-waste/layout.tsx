import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plastic Waste Management & EPR Compliance | EcoTrace by Pantheon Digital",
  description:
    "Streamline Plastic Waste EPR compliance for Categories I, II, III, and IV. Track recycling targets and manage PWMR compliance effortlessly.",
  alternates: { canonical: "/Services/epr/plastic-waste" },
  openGraph: {
    title: "Plastic Waste Management & EPR Compliance | EcoTrace",
    description:
      "Comprehensive plastic waste compliance solutions for brands, producers, and importers.",
    url: "https://pantheondigitals.com/Services/epr/plastic-waste",
    images: ["/Logo.svg"],
  },
};

export default function PlasticWasteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
