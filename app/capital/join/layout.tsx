import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Join Investor Syndicate & Angel Pool | 1008 Capital Network",
  description:
    "Register as an accredited angel investor, corporate CXO, or family office. Access curated target-based startup rounds in India from ₹50K to ₹5Cr+ with transparent fund use.",
  keywords: [
    "Join Startup Investor Network India",
    "Angel Investor Registration India",
    "Startup Syndicate Pool India",
    "Co-Invest in Indian Startups",
    "Family Office Deals India",
  ],
  openGraph: {
    title: "Join Investor Syndicate & Angel Pool | 1008 Capital Network",
    description:
      "Access curated target-based startup rounds in India from ₹50K to ₹5Cr+ with transparent fund use and direct deal meetings.",
    url: "https://www.1008.network/capital/join",
    siteName: "1008.network",
    type: "website",
  },
  alternates: {
    canonical: "https://www.1008.network/capital/join",
  },
};

export default function CapitalJoinLayout({
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
      {
        "@type": "ListItem",
        position: 3,
        name: "Join Investor Pool",
        item: "https://www.1008.network/capital/join",
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
