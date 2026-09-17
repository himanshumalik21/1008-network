import type { Metadata } from "next";
import React from "react";
import { capitalFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Capital for Businesses Worth Building | 1008 Capital Network",
  description:
    "1008 connects founders building promising businesses with a curated network of angels, family offices and other eligible capital partners.",
  keywords: [
    "Startup Capital India",
    "Angel Network India",
    "Raise Capital Startups India",
    "Family Office Co-Investment India",
    "Curated Angel Syndicate India",
    "1008 Capital Network",
    "Seed Stage Capital Delhi NCR Bangalore",
    "Venture Studio Capital",
  ],
  openGraph: {
    title: "Capital for Businesses Worth Building | 1008 Capital Network",
    description:
      "1008 connects founders building promising businesses with a curated network of angels, family offices and other eligible capital partners.",
    url: "https://www.1008.network/capital",
    siteName: "1008.network",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital for Businesses Worth Building | 1008 Capital Network",
    description:
      "1008 connects founders building promising businesses with a curated network of angels, family offices and other eligible capital partners.",
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
