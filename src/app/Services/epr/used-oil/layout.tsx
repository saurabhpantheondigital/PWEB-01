import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Used Oil EPR Management & Compliance | EcoTrace by Pantheon Digital",
  description:
    "Ensure compliance with the latest Used Oil EPR regulations in India. Track collection targets and recycling certificates with EcoTrace.",
  alternates: { canonical: "/Services/epr/used-oil" },
  openGraph: {
    title: "Used Oil EPR Management & Compliance | EcoTrace",
    description:
      "Automated compliance tracking and reporting for Used Oil producers and recyclers.",
    url: "https://pantheondigitals.com/Services/epr/used-oil",
    images: ["/Logo.svg"],
  },
};

export default function UsedOilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
