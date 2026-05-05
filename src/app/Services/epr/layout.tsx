import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EPR Certification Services in India | EcoTrace by Pantheon Digital",
  description:
    "Manage CPCB and SPCB Extended Producer Responsibility compliance across Plastic, E-Waste, Battery, Tyre, and Used Oil with EcoTrace by Pantheon Digital.",
  alternates: {
    canonical: "/Services/epr",
  },
  openGraph: {
    title: "EPR Certification Services in India | EcoTrace by Pantheon Digital",
    description:
      "Automate EPR compliance workflows, certificate tracking, and reporting with EcoTrace.",
    url: "https://pantheondigitals.com/Services/epr",
    siteName: "Pantheon Digital",
    images: ["/Logo.svg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EPR Certification Services in India | EcoTrace by Pantheon Digital",
    description:
      "Automate EPR compliance workflows, certificate tracking, and reporting with EcoTrace.",
    images: ["/Logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pantheondigitals.com/#organization",
      name: "Pantheon Digital",
      url: "https://pantheondigitals.com",
      logo: "https://pantheondigitals.com/Logo.svg",
      email: "sales@pantheondigitals.com",
      sameAs: ["https://www.linkedin.com/company/pantheon-digital"],
    },
    {
      "@type": "Service",
      "@id": "https://pantheondigitals.com/Services/epr#service",
      name: "EPR Compliance Services",
      provider: {
        "@id": "https://pantheondigitals.com/#organization",
      },
      serviceType: "Extended Producer Responsibility (EPR) Compliance",
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      url: "https://pantheondigitals.com/Services/epr",
      description:
        "EcoTrace helps brands and manufacturers manage Plastic, E-Waste, Battery, Tyre, and Used Oil EPR obligations with audit-ready workflows.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://pantheondigitals.com/Services/epr#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://pantheondigitals.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://pantheondigitals.com/Services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "EPR",
          item: "https://pantheondigitals.com/Services/epr",
        },
      ],
    },
  ],
};

export default function EprLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}
