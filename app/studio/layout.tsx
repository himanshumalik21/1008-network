import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Venture Studio & Turnkey Business Operations | 1008 Network",
  description:
    "1008 Network is the operational co-builder for founders in India. We handle manufacturing plant setup, ERP software deployment, team hiring, and working capital for shared equity with zero retainers.",
  keywords: [
    "Venture Studio India",
    "Turnkey Business Operations",
    "Manufacturing Setup Partner India",
    "Hospital Operations Setup",
    "School Infrastructure Setup India",
    "Equity Partner India",
    "Zero Retainer Consulting",
    "Startup Co-Builder India",
  ],
  openGraph: {
    title: "Venture Studio & Operational Co-Builder | 1008 Network",
    description:
      "You bring the vision & capital. We handle ground operations, software, and talent for shared equity.",
    url: "https://www.1008.network/studio",
  },
  alternates: {
    canonical: "https://www.1008.network/studio",
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Venture Studio & Operational Co-Building",
    provider: {
      "@type": "Organization",
      name: "1008 Network",
      url: "https://www.1008.network",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description:
      "End-to-end turnkey business setup, factory commissioning, bespoke software engineering, and working capital advisory for shared equity.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Shared equity partnership model with zero upfront consulting retainers.",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </>
  );
}
