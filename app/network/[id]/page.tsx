import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { initialOpportunities } from "@/data/opportunities";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import {
  Clock,
  MapPin,
  Briefcase,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  Share2,
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return initialOpportunities.map((opp) => ({
    id: opp.id,
  }));
}

export default async function OpportunityDetailPage({ params }: PageProps) {
  const { id } = await params;
  const opp = initialOpportunities.find((o) => o.id === id);

  if (!opp) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/network"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#627D98] hover:text-[#0A2540] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to 1008 Partner Network
          </Link>
        </div>

        {/* Header Capsule */}
        <div className="rounded-3xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 space-y-6 mb-8 relative overflow-hidden shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Badge variant="indigo" size="sm">
                {opp.sector}
              </Badge>
              {opp.studioBacked && (
                <Badge variant="cyan" size="sm">
                  1008 Studio Backed
                </Badge>
              )}
            </div>
            <span className="text-xs font-mono text-[#635BFF] font-semibold flex items-center gap-1 bg-[#F0F0FF] px-2.5 py-1 rounded-md border border-[#E0E0FF]">
              <Clock className="h-3.5 w-3.5" /> Active for next {opp.expiresInDays} days
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] font-sans leading-tight">
            {opp.title}
          </h1>

          {/* Key Terms Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white border border-[#E6E8EB] font-mono text-xs shadow-2xs">
            <div>
              <span className="text-[#829AB1] block text-[10px] uppercase font-bold">TARGET ROLE</span>
              <span className="text-[#0A2540] font-bold">{opp.role}</span>
            </div>
            <div>
              <span className="text-[#829AB1] block text-[10px] uppercase font-bold">EQUITY RANGE</span>
              <span className="text-[#059669] font-bold">{opp.equityRange}</span>
            </div>
            <div>
              <span className="text-[#829AB1] block text-[10px] uppercase font-bold">COMPENSATION</span>
              <span className="text-[#0A2540] font-medium">{opp.stipendOrSalary || "Equity Only"}</span>
            </div>
            <div>
              <span className="text-[#829AB1] block text-[10px] uppercase font-bold">LOCATION</span>
              <span className="text-[#0A2540] font-medium flex items-center gap-1">
                <MapPin className="h-3 w-3 text-[#635BFF]" /> {opp.location}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Breakdown */}
        <div className="space-y-6">
          {/* Section 1: Domain Originator Profile */}
          <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-lg font-bold text-[#0A2540] font-sans flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-[#635BFF]" />
              Domain Originator Profile
            </h2>
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#0A2540] font-bold text-sm">{opp.founderBackground.name}</span>
                <span className="text-[#635BFF] font-semibold">{opp.founderBackground.domainYears} Years Industry Depth</span>
              </div>
              <div className="text-xs text-[#0A2540] font-semibold">{opp.founderBackground.headline}</div>
              <p className="text-xs text-[#425466] leading-relaxed">{opp.founderBackground.priorExperience}</p>
            </div>
          </div>

          {/* Section 2: Venture Thesis & Problem Statement */}
          <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-lg font-bold text-[#0A2540] font-sans">
              The Venture Thesis & Market Bottleneck
            </h2>
            <div className="space-y-4 text-sm text-[#425466] leading-relaxed">
              <div>
                <strong className="text-[#0A2540] block mb-1 font-semibold">Structural Thesis:</strong>
                <p>{opp.ventureThesis}</p>
              </div>
              <div>
                <strong className="text-[#0A2540] block mb-1 font-semibold">The Market Friction / Operational Need:</strong>
                <p>{opp.problemStatement}</p>
              </div>
            </div>
          </div>

          {/* Section 3: Ideal Candidate & Key Responsibilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 space-y-4 shadow-xs">
              <h3 className="text-base font-bold text-[#0A2540] font-sans">
                Ideal Candidate Profile
              </h3>
              <ul className="space-y-2.5 text-xs text-[#425466]">
                {opp.idealCandidateProfile.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 space-y-4 shadow-xs">
              <h3 className="text-base font-bold text-[#0A2540] font-sans">
                Core Day-1 Responsibilities
              </h3>
              <ul className="space-y-2.5 text-xs text-[#425466]">
                {opp.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Action Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-base font-bold text-[#0A2540]">Interested in partnering on this venture?</div>
              <p className="text-xs text-[#627D98]">Applications go directly to the founder for confidential mutual review under NDA.</p>
            </div>
            <Button href="/contact" variant="primary" size="lg" className="shrink-0 font-semibold px-6 shadow-sm">
              Apply to Partner with {opp.founderBackground.name}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
