import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "The 1008 Manifesto — Real Operations, Shared Risk & Skin in the Game",
  description:
    "Why sustainable Indian enterprises are forged through rigorous 0-to-1 operational systems, clear unit economics, and shared skin in the game.",
  keywords: [
    "1008 Manifesto",
    "Startup Operations Philosophy",
    "Shared Risk Venture Builder",
    "Anti Hype Startup Model India",
  ],
  openGraph: {
    title: "The 1008 Manifesto — Real Operations, Shared Risk & Skin in the Game",
    description:
      "Why sustainable Indian enterprises are forged through rigorous 0-to-1 operational systems and shared skin in the game.",
    url: "https://www.1008.network/manifesto",
    siteName: "1008.network",
    type: "website",
  },
  alternates: {
    canonical: "https://www.1008.network/manifesto",
  },
};

export default function ManifestoLayout({
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
        name: "Manifesto",
        item: "https://www.1008.network/manifesto",
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
