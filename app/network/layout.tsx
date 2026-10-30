import type { Metadata } from "next";
import React from "react";
import { networkFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Find a Co-Founder in India | Startup Talent & Executive Matching | 1008 Network",
  description:
    "Connect directly with Technical Co-Founders (CTO), Operations Leads, and B2B Sales Partners in India. Algorithmic matching for business owners and verified startup operators.",
  keywords: [
    "Find a Co-Founder in India",
    "Technical Co-Founder India",
    "Hire CTO India",
    "Startup Co-Founder Matching",
    "Find Cofounder Bangalore",
    "Find Cofounder Delhi NCR",
    "Find Cofounder Mumbai",
    "Operations Co-Founder India",
    "B2B Sales Co-Founder India",
    "Startup Equity Partner Matching",
    "Fractional CXO India",
    "Founding Engineer Jobs India",
    "1008 Partner Network",
  ],
  openGraph: {
    title: "Find a Co-Founder in India | 1008 Network Co-Founder Matching",
    description:
      "Connect directly with verified Technical Co-Founders (CTO), Operations Leads, and Commercial Partners. Algorithmic matching for business owners and builders in India.",
    url: "https://www.1008.network/network",
    siteName: "1008 Network",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.1008.network/og-image.png",
        width: 1200,
        height: 630,
        alt: "1008 Network - Co-Founder & Startup Talent Matching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find a Co-Founder in India | 1008 Network",
    description:
      "Connect directly with Technical Co-Founders, Operations Leads, and Sales Partners for high-conviction ventures in India.",
    images: ["https://www.1008.network/og-image.png"],
  },
  alternates: {
    canonical: "https://www.1008.network/network",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function NetworkLayout({
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
        name: "Co-Founders & Talent",
        item: "https://www.1008.network/network",
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "1008 Co-Founder & Talent Matching Network",
    serviceType: "Executive Search & Co-Founder Matching",
    description:
      "Algorithmic talent matching connecting business owners and founders with verified technical co-founders (CTO), operations heads, and commercial partners across India.",
    provider: {
      "@type": "Organization",
      name: "1008 Network",
      url: "https://www.1008.network",
      logo: "https://www.1008.network/icon.svg",
      sameAs: [
        "https://www.linkedin.com/company/1008-network",
        "https://twitter.com/1008network",
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Business Owners, Startup Founders, Technical Co-Founders, CTOs, Operations Heads, Commercial Leads",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Co-Founder & Leadership Roles Matched",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical Co-Founder (CTO) Matching",
            description: "Engineering leaders and system architects building scalable MVPs and technical foundations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Operations & Supply Chain Lead Matching",
            description: "COOs and operating specialists managing procurement, logistics, and delivery execution.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Go-to-Market & B2B Sales Partner Matching",
            description: "Commercial directors with enterprise distribution pipelines and buyer relationships.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Manufacturing & Plant Setup Head Matching",
            description: "Industrial veterans experienced in machinery procurement, plant execution, and quality control.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CFO & Debt Syndication Head Matching",
            description: "Financial leaders structuring debt facilities, cash flow modeling, and investor reporting.",
          },
        },
      ],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: networkFaqs.map((faq) => ({
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
