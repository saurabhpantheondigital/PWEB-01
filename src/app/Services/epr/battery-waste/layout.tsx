import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Battery Waste EPR Compliance Services | EcoTrace by Pantheon Digital",
  description:
    "Track Lead-Acid, Lithium-Ion, and EV battery collection targets. Simplify CPCB battery EPR compliance with EcoTrace's automated platform.",
  alternates: { canonical: "/Services/epr/battery-waste" },
  openGraph: {
    title: "Battery Waste EPR Compliance Services | EcoTrace",
    description:
      "Automate battery waste collection tracking and CPCB return filing with EcoTrace.",
    url: "https://pantheondigitals.com/Services/epr/battery-waste",
    images: ["/Logo.svg"],
  },
};

export default function BatteryWasteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
