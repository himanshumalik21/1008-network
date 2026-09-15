import type { Metadata } from "next";
import React from "react";
import { initialOpportunities } from "@/data/opportunities";

export const metadata: Metadata = {
  title: "Co-Founder Matching & Startup Talent Network | 1008 Network",
  description:
    "Find a Technical Co-Founder (CTO), GTM Sales Lead, Operations Partner, or explore high-conviction startup roles for shared equity in India. Zero placement fees.",
  keywords: [
    "Co Founder Matching India",
    "Find Technical Co-Founder",
    "Find CTO India",
    "Jobs for Equity India",
    "Shared Equity Startup Roles",
    "Startup Operator Network",
    "Find Cofounder Bangalore",
    "Find Cofounder Delhi NCR",
    "Fractional CXO India",
    "1008 Partner Network",
  ],
  openGraph: {
    title: "Find Co-Founders & Shared Equity Startup Roles | 1008 Network",
    description:
      "Join India's curated co-founder matching platform. Connect with domain leaders, CTOs, and operators building for equity upside.",
    url: "https://1008.network/network",
  },
  alternates: {
    canonical: "https://1008.network/network",
  },
};

export default function NetworkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "1008 Co-Founder & Startup Talent Network",
    url: "https://1008.network/network",
    description:
      "Curated marketplace matching founders with Technical Co-Founders, Operations Leads, and Sales Partners for shared equity.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: initialOpportunities.map((opp, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `https://1008.network/network/${opp.id}`,
        name: `${opp.role} — ${opp.title}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      {children}
    </>
  );
}
