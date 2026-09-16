import type { Metadata } from "next";
import React from "react";
import { initialOpportunities } from "@/data/opportunities";
import { networkFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Co-Founder Matching & Startup Talent Network | 1008 Network",
  description:
    "Find a Technical Co-Founder (CTO), GTM Sales Lead, Operations Partner, or explore high-conviction startup roles for shared equity in India. Direct founder matching and zero placement fees.",
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
    url: "https://www.1008.network/network",
    siteName: "1008.network",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Co-Founders & Shared Equity Startup Roles | 1008 Network",
    description:
      "Curated co-founder matching for technical leads, GTM partners, and operators for shared startup equity.",
  },
  alternates: {
    canonical: "https://www.1008.network/network",
  },
};

export default function NetworkLayout({
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
        name: "Partner Network",
        item: "https://www.1008.network/network",
      },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "1008 Co-Founder & Startup Talent Network",
    url: "https://www.1008.network/network",
    description:
      "Curated marketplace matching founders with Technical Co-Founders, Operations Leads, and Sales Partners for shared equity.",
    audience: {
      "@type": "Audience",
      audienceType: "Technical Co-Founders, CTOs, Founding Engineers, Growth Leads, Domain Founders",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: initialOpportunities.map((opp, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `https://www.1008.network/network/${opp.id}`,
        name: `${opp.role} — ${opp.title}`,
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: networkFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
