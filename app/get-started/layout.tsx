import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Get Started | 1008 Network — Five Growth Pathways",
  description:
    "Connect with 1008 Network. Tell us which growth pathway you want to explore — Co-Founders & Talent, Funding & Investors, Outsource Operations, Gigs & Sprints, or Knowledge Playbooks.",
  keywords: [
    "1008 Network Get Started",
    "Join 1008 Network",
    "Co-Founders India",
    "Angel Investors India",
    "Outsource Operations",
    "Gigs & Sprints",
  ],
  alternates: {
    canonical: "https://www.1008.network/get-started",
  },
  openGraph: {
    title: "Get Started | 1008 Network",
    description:
      "Connect with 1008 Network. Tell us which growth pathway you want to explore.",
    url: "https://www.1008.network/get-started",
    siteName: "1008 Network",
    type: "website",
  },
};

export default function GetStartedLayout({
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
        name: "Get Started",
        item: "https://www.1008.network/get-started",
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
