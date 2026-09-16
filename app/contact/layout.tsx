import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact 1008 Network — Venture Partnerships & Inquiries",
  description:
    "Connect directly with 1008 Network partners in Delhi NCR or submit your startup inquiry for turnkey venture co-building, talent matching, or syndicate investment.",
  keywords: [
    "Contact 1008 Network",
    "Startup Office Hours Delhi NCR",
    "Venture Studio Contact",
    "Pitch Startup 1008 Network",
  ],
  openGraph: {
    title: "Contact 1008 Network — Venture Partnerships & Inquiries",
    description:
      "Reach out to 1008 Network for turnkey venture co-building, talent matching, or syndicate investment.",
    url: "https://www.1008.network/contact",
    siteName: "1008.network",
    type: "website",
  },
  alternates: {
    canonical: "https://www.1008.network/contact",
  },
};

export default function ContactLayout({
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
        name: "Contact",
        item: "https://www.1008.network/contact",
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
