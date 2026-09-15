import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { initialOpportunities } from "@/data/opportunities";
import { OpportunityDetailClient } from "@/components/network/OpportunityDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return initialOpportunities.map((opp) => ({
    id: opp.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const opp = initialOpportunities.find((o) => o.id === id);

  if (!opp) {
    return {
      title: "Opportunity Not Found | 1008 Partner Network",
    };
  }

  return {
    title: `${opp.title} | 1008 Partner Network`,
    description: `${opp.role} needed for ${opp.sector} venture in ${opp.location}. Equity Offer: ${opp.equityRange}.`,
    openGraph: {
      title: `${opp.title} | 1008 Partner Network`,
      description: opp.ventureThesis,
      type: "website",
    },
  };
}

export default async function OpportunityDetailPage({ params }: PageProps) {
  const { id } = await params;
  const opp = initialOpportunities.find((o) => o.id === id);

  if (!opp) {
    notFound();
  }

  const relatedOpportunities = initialOpportunities.filter((o) => o.id !== opp.id);

  // Calculate validThrough date (60 days from creation or expiry)
  const postDate = new Date(opp.createdAt || "2025-01-01");
  const validThroughDate = new Date(postDate.getTime() + (opp.expiresInDays || 60) * 24 * 60 * 60 * 1000);

  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: `${opp.role} — ${opp.title}`,
    description: `
      <h3>Venture Thesis</h3>
      <p>${opp.ventureThesis}</p>
      <h3>Role & Scope</h3>
      <p>${opp.role} (${opp.roleType})</p>
      <h3>Equity & Compensation</h3>
      <p>Equity Offer: ${opp.equityRange} | Compensation: ${opp.stipendOrSalary || "Equity Only"}</p>
      <h3>Founder Pedigree</h3>
      <p>${opp.founderBackground.headline} (${opp.founderBackground.domainYears}+ years domain experience)</p>
      <h3>Required Expertise</h3>
      <p>${opp.skills?.join(", ") || "Domain Execution"}</p>
      <h3>About 1008 Network</h3>
      <p>1008 Network curates high-conviction partnerships for shared equity and turnkey venture co-building across India.</p>
    `.trim(),
    datePosted: postDate.toISOString(),
    validThrough: validThroughDate.toISOString(),
    employmentType: ["FULL_TIME", "OTHER"],
    hiringOrganization: {
      "@type": "Organization",
      name: `1008 Network / ${opp.title}`,
      sameAs: "https://www.1008.network",
      logo: "https://www.1008.network/logo.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: opp.location,
        addressCountry: "IN",
      },
    },
    ...(opp.location.toLowerCase().includes("remote")
      ? { jobLocationType: "TELECOMMUTE" }
      : {}),
    applicantLocationRequirements: {
      "@type": "Country",
      name: "India",
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: {
        "@type": "QuantitativeValue",
        value: 0,
        unitText: `${opp.equityRange} Shared Equity`,
      },
    },
    skills: opp.skills?.join(", "),
    industry: opp.sector,
    directApply: true,
  };

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
        name: opp.title,
        item: `https://www.1008.network/network/${opp.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <OpportunityDetailClient
        opp={opp}
        relatedOpportunities={relatedOpportunities}
      />
    </>
  );
}
