import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronic Waste (E-Waste) EPR Compliance | EcoTrace by Pantheon Digital",
  description:
    "Manage E-Waste EPR obligations for IT and telecommunication equipment. Automate CPCB registrations and annual return filing with EcoTrace.",
  alternates: { canonical: "/Services/epr/e-waste" },
  openGraph: {
    title: "Electronic Waste (E-Waste) EPR Compliance | EcoTrace",
    description:
      "End-to-end E-Waste compliance management for producers, importers, and brand owners.",
    url: "https://pantheondigitals.com/Services/epr/e-waste",
    images: ["/Logo.svg"],
  },
};

export default function EWasteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
