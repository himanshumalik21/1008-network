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
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/network"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to 1008 Partner Network
          </Link>
        </div>

        {/* Header Capsule */}
        <div className="rounded-2xl bg-surface-100/90 border border-white/[0.1] p-6 sm:p-8 space-y-6 backdrop-blur-xl mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Badge variant="cyan" size="sm">
                {opp.sector}
              </Badge>
              {opp.studioBacked && (
                <Badge variant="amber" size="sm">
                  1008 Studio Cohort
                </Badge>
              )}
            </div>
            <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> Active for next {opp.expiresInDays} days
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-white font-sans leading-tight">
            {opp.title}
          </h1>

          {/* Key Terms Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-surface-200/80 border border-white/[0.06] font-mono text-xs">
            <div>
              <span className="text-muted block text-[10px] uppercase">TARGET ROLE</span>
              <span className="text-white font-semibold">{opp.role}</span>
            </div>
            <div>
              <span className="text-muted block text-[10px] uppercase">EQUITY RANGE</span>
              <span className="text-amber-400 font-semibold">{opp.equityRange}</span>
            </div>
            <div>
              <span className="text-muted block text-[10px] uppercase">COMPENSATION</span>
              <span className="text-white">{opp.stipendOrSalary || "Equity Only"}</span>
            </div>
            <div>
              <span className="text-muted block text-[10px] uppercase">LOCATION</span>
              <span className="text-white flex items-center gap-1">
                <MapPin className="h-3 w-3 text-muted" /> {opp.location}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Breakdown */}
        <div className="space-y-8">
          {/* Section 1: Domain Originator Profile */}
          <div className="rounded-2xl bg-surface-100/60 border border-white/[0.08] p-6 sm:p-8 space-y-4">
            <h2 className="text-lg font-bold text-white font-sans flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-amber-400" />
              Domain Originator Profile
            </h2>
            <div className="p-4 rounded-xl bg-surface-200/50 border border-white/[0.04] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white font-semibold text-sm">{opp.founderBackground.name}</span>
                <span className="text-amber-400">{opp.founderBackground.domainYears} Years Industry Depth</span>
              </div>
              <div className="text-xs text-muted font-medium">{opp.founderBackground.headline}</div>
              <p className="text-xs text-muted leading-relaxed">{opp.founderBackground.priorExperience}</p>
            </div>
          </div>

          {/* Section 2: Venture Thesis & Problem Statement */}
          <div className="rounded-2xl bg-surface-100/60 border border-white/[0.08] p-6 sm:p-8 space-y-4">
            <h2 className="text-lg font-bold text-white font-sans">
              The Venture Thesis & Market Bottleneck
            </h2>
            <div className="space-y-4 text-sm text-muted leading-relaxed">
              <div>
                <strong className="text-foreground block mb-1">Structural Thesis:</strong>
                <p>{opp.ventureThesis}</p>
              </div>
              <div>
                <strong className="text-foreground block mb-1">The Financial Bleed:</strong>
                <p>{opp.problemStatement}</p>
              </div>
            </div>
          </div>

          {/* Section 3: Ideal Candidate & Key Responsibilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-surface-100/60 border border-white/[0.08] p-6 space-y-4">
              <h3 className="text-base font-bold text-white font-sans">
                Ideal Candidate Profile
              </h3>
              <ul className="space-y-2 text-xs text-muted">
                {opp.idealCandidateProfile.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-surface-100/60 border border-white/[0.08] p-6 space-y-4">
              <h3 className="text-base font-bold text-white font-sans">
                Core Day-1 Responsibilities
              </h3>
              <ul className="space-y-2 text-xs text-muted">
                {opp.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Action Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-100/90 border border-white/[0.12] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-base font-bold text-white">Interested in partnering on this venture?</div>
              <p className="text-xs text-muted">Applications go directly to the founder for confidential mutual review.</p>
            </div>
            <Button href={`/network?connect=${opp.id}`} variant="primary" size="lg" className="shrink-0">
              Apply to Partner with {opp.founderBackground.name}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
