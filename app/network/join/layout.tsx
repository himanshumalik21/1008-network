import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Join Co-Founder & Startup Talent Network | 1008 Partner Network",
  description:
    "Register confidentially as a Technical Co-Founder (CTO), GTM Sales Leader, or Operations Partner. Get matched with high-conviction domain founders building for shared equity in India.",
  keywords: [
    "Join Co-Founder Network India",
    "Find CTO Jobs for Equity",
    "Startup Operator Registration",
    "Fractional CXO Platform India",
    "Founding Engineer Roles Bangalore Delhi",
  ],
  openGraph: {
    title: "Join Co-Founder & Startup Talent Network | 1008 Partner Network",
    description:
      "Connect directly with vetted domain founders building high-growth enterprises for shared equity upside.",
    url: "https://www.1008.network/network/join",
    siteName: "1008.network",
    type: "website",
  },
  alternates: {
    canonical: "https://www.1008.network/network/join",
  },
};

export default function NetworkJoinLayout({
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
        name: "Join Talent Pool",
        item: "https://www.1008.network/network/join",
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
