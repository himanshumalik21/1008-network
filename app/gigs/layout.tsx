import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gigs & Project Sprints | 1008 Network Marketplace",
  description:
    "Post acute business gigs or pick up paid project sprints across India. Fixed-scope deliverables across ERPNext, B2B sales engines, factory SOPs, Next.js software, and cap tables.",
  keywords: [
    "Project Gigs India",
    "Startup Sprints India",
    "Fiverr for Indian Startups",
    "Upwork Alternative India",
    "Freelance ERPNext Consultant",
    "B2B Sales Pipeline Sprint",
    "BIS Compliance Audit India",
    "Fractional CFO Sprint",
    "Next.js Freelance Developer",
    "1008 Network Gigs",
  ],
  openGraph: {
    title: "Gigs & Project Sprints | 1008 Network Marketplace",
    description:
      "Businesses post acute hurdles with committed INR budgets. Specialists deliver fast 1 to 4 week milestone sprints under 1008 review.",
    url: "https://www.1008.network/gigs",
    siteName: "1008.network",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gigs & Project Sprints | 1008 Network Marketplace",
    description:
      "Deliver or post high-impact business sprints in India. Pre-scoped deliverables and verified milestone budgets.",
  },
  alternates: {
    canonical: "https://www.1008.network/gigs",
  },
};

export default function GigsLayout({
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
        name: "Gigs & Sprints",
        item: "https://www.1008.network/gigs",
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
