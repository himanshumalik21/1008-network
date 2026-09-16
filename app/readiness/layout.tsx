import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Venture Readiness Assessment & Diagnostic | 1008 Network",
  description:
    "Evaluate your venture readiness across 8 critical dimensions: domain authority, customer financial bleed, technical execution runway, and founder-venture fit.",
  keywords: [
    "Venture Readiness Assessment",
    "Startup Diagnostic Tool India",
    "Founder Readiness Quiz",
    "Startup Viability Check",
  ],
  openGraph: {
    title: "Venture Readiness Assessment & Diagnostic | 1008 Network",
    description:
      "Interactive 2-minute diagnostic tool evaluating domain authority, customer pain, and operational runway.",
    url: "https://www.1008.network/readiness",
    siteName: "1008.network",
    type: "website",
  },
  alternates: {
    canonical: "https://www.1008.network/readiness",
  },
};

export default function ReadinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.1008.network",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Venture Readiness",
        item: "https://www.1008.network/readiness",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
