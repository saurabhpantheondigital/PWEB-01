import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waste Tyre EPR Compliance & Recycling Services | EcoTrace by Pantheon Digital",
  description:
    "Meet your Waste Tyre EPR targets with EcoTrace. Manage collection, recycling certificates, and CPCB return filing for tyre manufacturers and importers.",
  alternates: { canonical: "/Services/epr/waste-tyre" },
  openGraph: {
    title: "Waste Tyre EPR Compliance & Recycling Services | EcoTrace",
    description:
      "Simplified EPR compliance for the tyre industry. Track recycling obligations and credits on one platform.",
    url: "https://pantheondigitals.com/Services/epr/waste-tyre",
    images: ["/Logo.svg"],
  },
};

export default function WasteTyreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
