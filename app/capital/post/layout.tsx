import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Post Startup Capital Requirement & Raise Funding | 1008 Capital Network",
  description:
    "Founders can submit target-based capital requirements (₹10L to ₹5Cr+) with itemized use of funds. Connect with active angel investors and family offices with zero broker fees.",
  keywords: [
    "Raise Startup Funding India",
    "Post Capital Requirement",
    "Startup Seed Capital India",
    "Angel Syndicate Funding India",
    "Non Dilutive Credit & Equity",
  ],
  openGraph: {
    title: "Post Startup Capital Requirement & Raise Funding | 1008 Capital Network",
    description:
      "Submit your venture thesis and target capital raise. Connect with vetted investors with itemized fund deployment.",
    url: "https://www.1008.network/capital/post",
    siteName: "1008.network",
    type: "website",
  },
  alternates: {
    canonical: "https://www.1008.network/capital/post",
  },
};

export default function CapitalPostLayout({
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
        name: "Raise Capital",
        item: "https://www.1008.network/capital/post",
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
