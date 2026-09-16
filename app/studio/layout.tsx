import type { Metadata } from "next";
import React from "react";
import { studioFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Venture Studio & Turnkey Business Operations | 1008 Network",
  description:
    "1008 Network is the operational co-builder for founders in India. We handle manufacturing plant setup, ERP software deployment, team hiring, and working capital for shared equity with zero retainers.",
  keywords: [
    "Venture Studio India",
    "Turnkey Business Operations",
    "Manufacturing Setup Partner India",
    "Hospital Operations Setup",
    "School Infrastructure Setup India",
    "Equity Partner India",
    "Zero Retainer Consulting",
    "Startup Co-Builder India",
    "Delhi NCR Venture Studio",
    "Operational Co-Founder India",
  ],
  openGraph: {
    title: "Venture Studio & Operational Co-Builder | 1008 Network",
    description:
      "You bring the vision & capital. We handle ground operations, software, and talent for shared equity.",
    url: "https://www.1008.network/studio",
    siteName: "1008.network",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venture Studio & Turnkey Business Operations | 1008 Network",
    description:
      "Turnkey operational execution, factory setup, ERP deployment, and growth hiring for shared venture equity in India.",
  },
  alternates: {
    canonical: "https://www.1008.network/studio",
  },
};

export default function StudioLayout({
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
        name: "Venture Studio",
        item: "https://www.1008.network/studio",
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "1008 Venture Studio Turnkey Operations",
    serviceType: "Venture Studio & Operational Co-Building",
    provider: {
      "@type": "Organization",
      name: "1008 Network",
      url: "https://www.1008.network",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Early-Stage Founders, Industry Originators, Corporate Turnaround Leaders, Industrialists",
    },
    description:
      "End-to-end turnkey business setup, factory commissioning, bespoke software engineering, and working capital advisory for shared equity.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Shared equity partnership model with zero upfront consulting retainers.",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: studioFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
