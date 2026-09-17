import type { Metadata } from "next";
import React from "react";
import { capitalFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Startup Capital & Co-Investment Syndicate | 1008 Network",
  description:
    "Discover high-conviction Indian startups or raise capital for your venture. Direct syndicate allocations from ₹50K to ₹5Cr+ with transparent fund utilization, turnkey ground operations, and zero broker fees.",
  keywords: [
    "Invest in Startups India",
    "Angel Investment Platform India",
    "Startup Capital India",
    "Raise Startup Funding India",
    "Venture Syndicate India",
    "Asset Backed Startup Investment",
    "1008 Capital Network",
    "Angel Investor Network India",
    "Family Office Co-Investment India",
    "Seed Stage Capital Delhi NCR Bangalore",
  ],
  openGraph: {
    title: "Startup Capital & Co-Investment Syndicate | 1008 Network",
    description:
      "Join curated investor syndicates (₹50K to ₹5Cr+) backing high-conviction Indian businesses with turnkey operational execution.",
    url: "https://www.1008.network/capital",
    siteName: "1008.network",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Capital & Co-Investment Syndicate | 1008 Network",
    description:
      "Curated startup syndicate rounds with itemized use-of-funds and combined deal meetings. Zero intermediary fees.",
  },
  alternates: {
    canonical: "https://www.1008.network/capital",
  },
};

export default function CapitalLayout({
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
        name: "Capital Network",
        item: "https://www.1008.network/capital",
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "1008 Capital Network Syndicate & Startup Funding Discovery",
    serviceType: "Startup Syndicate Matchmaking & Capital Discovery",
    provider: {
      "@type": "Organization",
      name: "1008 Network",
      url: "https://www.1008.network",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Angel Investors, Family Offices, Working Professionals, Startup Founders",
    },
    description:
      "Target-based startup capital rounds connecting high-conviction businesses with accredited co-investors. Features itemized use of funds, combined deal meetings, and zero intermediary fees.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: capitalFaqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
