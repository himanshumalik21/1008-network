import type { Metadata } from "next";
import React from "react";
import { initialOpportunities } from "@/data/opportunities";

export const metadata: Metadata = {
  title: "Startup Jobs in Gurgaon & Pan-India (2026) | Verified Roles & Equity | 1008 Network",
  description:
    "Discover high-conviction startup jobs, founding engineer roles, and executive opportunities in Gurgaon, Bengaluru, Delhi NCR, and remote. Competitive salary + equity packages with direct founder access.",
  keywords: [
    "Startup Jobs Gurgaon",
    "Startup Jobs in Gurugram",
    "Startup Jobs India",
    "Early Stage Startup Roles",
    "Founding Engineer Jobs",
    "AI Startup Jobs Gurgaon",
    "Startup Jobs with Equity",
    "CTO Jobs India",
    "B2B SaaS Startup Jobs",
    "1008 Network Talent",
  ],
  openGraph: {
    title: "Startup Jobs in Gurgaon & Pan-India (2026) | 1008 Network",
    description:
      "Curated startup job openings in Gurgaon, Bengaluru, and Pan-India. Filter by equity, salary, and domain.",
    url: "https://www.1008.network/network/startup-jobs-india",
    siteName: "1008.network",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Jobs in Gurgaon & Pan-India (2026) | 1008 Network",
    description:
      "Find your next high-impact startup role. Verified opportunities in Gurgaon, Bengaluru, and NCR with transparent equity & compensation.",
  },
  alternates: {
    canonical: "https://www.1008.network/network/startup-jobs-india",
  },
};

export default function StartupJobsLayout({
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
        name: "Startup Jobs in India",
        item: "https://www.1008.network/network/startup-jobs-india",
      },
    ],
  };

  const jobCollectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Startup Jobs in Gurgaon & India — 1008 Network",
    url: "https://www.1008.network/network/startup-jobs-india",
    description:
      "Directory of verified early-stage startup jobs, founding engineer positions, and leadership roles in Gurgaon, Bengaluru, and Pan-India.",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: initialOpportunities.length,
      itemListElement: initialOpportunities.map((opp, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "JobPosting",
          title: opp.title,
          description: opp.ventureThesis + " — " + opp.problemStatement,
          datePosted: opp.createdAt,
          validThrough: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
          employmentType: "FULL_TIME",
          hiringOrganization: {
            "@type": "Organization",
            name: opp.companyName || "1008 Network Portfolio",
            sameAs: "https://www.1008.network",
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: opp.location,
              addressCountry: "IN",
            },
          },
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: "INR",
            value: {
              "@type": "QuantitativeValue",
              value: opp.stipendOrSalary || "Competitive",
              unitText: "YEAR",
            },
          },
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobCollectionJsonLd) }}
      />
      {children}
    </>
  );
}
