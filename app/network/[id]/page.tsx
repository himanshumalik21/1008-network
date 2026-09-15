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

  return (
    <OpportunityDetailClient
      opp={opp}
      relatedOpportunities={relatedOpportunities}
    />
  );
}
