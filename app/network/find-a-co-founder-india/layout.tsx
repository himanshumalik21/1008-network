import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Find a Co-Founder in India: Technical CTOs, GTM & Operations Leads | 1008 Network",
  description:
    "India's curated co-founder matching platform. Connect with vetted Technical Co-Founders (CTO), GTM Sales Partners, and Operations Leads for milestone equity in Gurgaon, Bengaluru, Delhi NCR, and Pan-India.",
  keywords: [
    "how to find a co founder in india",
    "find technical co-founder",
    "find CTO india",
    "co founder matching platform bangalore",
    "co founder matching delhi ncr",
    "find co-founder gurgaon",
    "startup equity co-founder agreement",
    "1008 Partner Network",
  ],
  openGraph: {
    title: "Find a Co-Founder in India | 1008 Partner Network",
    description:
      "Connect with vetted Technical Co-Founders, CTOs, and GTM Leaders building for milestone equity across India.",
    url: "https://www.1008.network/network/find-a-co-founder-india",
    siteName: "1008.network",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find a Co-Founder in India | 1008 Partner Network",
    description:
      "Vetted co-founder matching for domain founders. Connect with technical and commercial operators for shared equity.",
  },
  alternates: {
    canonical: "https://www.1008.network/network/find-a-co-founder-india",
  },
};

export default function FindCoFounderLayout({
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Find a Co-Founder in India",
        item: "https://www.1008.network/network/find-a-co-founder-india",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does 1008 Network match founders with co-founders?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We evaluate domain founders who have proprietary industry knowledge, validated customer demand, or existing business traction, and introduce them directly to curated technical CTOs and commercial GTM leads who want to build for milestone equity.",
        },
      },
      {
        "@type": "Question",
        name: "How is co-founder equity typically structured in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We advocate a 4-year reverse vesting schedule with a 1-year cliff, tied to concrete commercial and technical milestones to protect the cap table and ensure long-term alignment.",
        },
      },
      {
        "@type": "Question",
        name: "Does 1008 Network charge a placement fee for co-founder matching?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The 1008 Partner Network does not charge traditional recruitment agency fees. For studio co-built ventures, we align our incentives via shared equity upside.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
