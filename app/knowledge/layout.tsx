import type { Metadata } from "next";
import React from "react";
import { initialKnowledgeResources } from "@/data/knowledgeResources";

export const metadata: Metadata = {
  title: "The 1008 Playbook — Practical Frameworks for Turning Ideas into Operating Businesses | 1008 Network",
  description:
    "Practical playbooks, cash-flow architectures, working capital frameworks, and founder governance guides for building businesses in India.",
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
    title: "The 1008 Playbook — Practical Frameworks for Building Businesses | 1008 Network",
    description:
      "Practical playbooks and execution frameworks for turning ideas into operating, cashflow-positive businesses in India.",
    url: "https://www.1008.network/knowledge",
    siteName: "1008.network",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 1008 Playbook — Practical Frameworks for Building Businesses | 1008 Network",
    description:
      "Practical frameworks for turning ideas into operating businesses.",
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
        name: "Playbooks",
        item: "https://www.1008.network/knowledge",
      },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "The 1008 Playbook — Practical Frameworks for Turning Ideas into Operating Businesses",
    url: "https://www.1008.network/knowledge",
    description:
      "Practical playbooks, cash-flow architectures, and founder frameworks for building enduring businesses in India.",
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
