import type { Metadata } from "next";
import React from "react";
import { initialKnowledgeResources } from "@/data/knowledgeResources";

export const metadata: Metadata = {
  title: "1008 Playbook — Operational Intelligence & Execution Guides | 1008 Network",
  description:
    "Actionable, battle-tested operational playbooks, working capital frameworks, and high-cashflow business models for Indian founders.",
  keywords: [
    "1008 Playbook",
    "Startup Playbooks India",
    "How to start a business in India",
    "Working Capital Financing India",
    "Cashflow Business Models India",
    "Venture Building Frameworks",
    "Founder Resources India",
    "Manufacturing Setup Guide India",
    "ULI Unified Lending Interface for Startups",
  ],
  openGraph: {
    title: "1008 Playbook — Operational Intelligence & Execution Guides | 1008 Network",
    description:
      "Deep-dive playbooks and execution guides for building profitable enterprises in India without burning cash.",
    url: "https://www.1008.network/knowledge",
    siteName: "1008.network",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1008 Playbook — Operational Intelligence & Execution Guides | 1008 Network",
    description:
      "Actionable blueprints for building profitable businesses in India without burning cash.",
  },
  alternates: {
    canonical: "https://www.1008.network/knowledge",
  },
};

export default function KnowledgeLayout({
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
        name: "Knowledge Hub",
        item: "https://www.1008.network/knowledge",
      },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "1008 Playbook — Operational Intelligence & Founder Blueprints",
    url: "https://www.1008.network/knowledge",
    description:
      "Actionable, battle-tested operational playbooks, regulatory guides, and high-cashflow frameworks for founders building in India.",
    audience: {
      "@type": "Audience",
      audienceType: "Entrepreneurs, Startup Founders, Industrialists, Business Operators",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: initialKnowledgeResources.map((res, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `https://www.1008.network/knowledge/${res.slug}`,
        name: res.title,
        description: res.subtitle || res.summary,
      })),
    },
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
      {children}
    </>
  );
}
