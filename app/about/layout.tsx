import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About 1008 Network — Turnkey Operational Co-Builders",
  description:
    "Headquartered in Delhi NCR with a pan-India execution footprint, 1008 Network partners with founders for turnkey operations, talent matching, and syndicate capital for shared equity.",
  keywords: [
    "About 1008 Network",
    "Operational Co-Builder India",
    "Turnkey Business Partner",
    "Delhi NCR Venture Studio",
    "Equity Partner India",
  ],
  openGraph: {
    title: "About 1008 Network — Turnkey Operational Co-Builders",
    description:
      "Turning business visions into operational reality across India for shared equity with zero retainers.",
    url: "https://www.1008.network/about",
    siteName: "1008.network",
    type: "website",
  },
  alternates: {
    canonical: "https://www.1008.network/about",
  },
};

export default function AboutLayout({
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
        name: "About 1008 Network",
        item: "https://www.1008.network/about",
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
