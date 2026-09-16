import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Post Co-Founder & Executive Talent Requirement | 1008 Partner Network",
  description:
    "Founders can publish verified Co-Founder, CTO, or Head of Department roles for shared equity. Zero placement fees, direct candidate vetting, and curated founder introductions.",
  keywords: [
    "Post Co-Founder Requirement India",
    "Find CTO for Startup",
    "Hire Founding Engineer Equity",
    "Find Sales Co-Founder India",
    "Startup Executive Hiring",
  ],
  openGraph: {
    title: "Post Co-Founder & Executive Talent Requirement | 1008 Partner Network",
    description:
      "Find your Technical Co-Founder, Operations Head, or GTM Sales Partner for shared equity. Zero placement fees.",
    url: "https://www.1008.network/network/post",
    siteName: "1008.network",
    type: "website",
  },
  alternates: {
    canonical: "https://www.1008.network/network/post",
  },
};

export default function NetworkPostLayout({
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
        name: "Post Requirement",
        item: "https://www.1008.network/network/post",
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
