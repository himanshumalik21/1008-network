"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Opportunity } from "@/lib/types";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { ExpressInterestModal } from "@/components/network/ExpressInterestModal";
import {
  Clock,
  MapPin,
  Briefcase,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Share2,
  Sparkles,
  Send,
  Layers,
  ArrowUpRight,
} from "lucide-react";

interface OpportunityDetailClientProps {
  opp: Opportunity;
  relatedOpportunities: Opportunity[];
}

export function OpportunityDetailClient({
  opp,
  relatedOpportunities,
}: OpportunityDetailClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-[#FDFDFE] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link & Share */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/network"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#627D98] hover:text-[#0A2540] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to 1008 Partner Network
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#627D98] hover:text-[#0A2540] px-3 py-1.5 rounded-lg border border-[#E6E8EB] bg-white hover:bg-[#F8FAFC] transition-colors"
          >
            <Share2 className="h-3 w-3" />
            <span>{copied ? "Link Copied!" : "Share Opportunity"}</span>
          </button>
        </div>

        {/* Header Capsule */}
        <div className="rounded-3xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 space-y-6 mb-8 relative overflow-hidden shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="indigo" size="sm">
                {opp.roleType || "Co-Founder"}
              </Badge>
              <Badge variant="cyan" size="sm">
                {opp.sector}
              </Badge>
              {opp.studioBacked && (
                <span className="px-2.5 py-1 rounded-full bg-[#00D4B2]/15 text-[#007A66] text-xs font-mono font-bold flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> 1008 Studio Backed
                </span>
              )}
            </div>
            <span className="text-xs font-mono text-[#007A66] font-semibold flex items-center gap-1 bg-[#E6FFFA] px-2.5 py-1 rounded-md border border-[#B2F5EA]">
              <CheckCircle2 className="h-3.5 w-3.5" /> Active Requirement
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

          {/* Quick Apply Action Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto font-semibold px-8 shadow-sm"
              rightIcon={<Send className="h-4 w-4" />}
            >
              Express Interest / Apply (Confidential)
            </Button>
            <div className="flex items-center gap-1.5 text-xs text-[#627D98] font-mono">
              <ShieldCheck className="h-4 w-4 text-[#059669]" />
              <span>Direct introduction to founder for verified opportunities</span>
            </div>
          </div>
        </div>

        {/* Main Content Breakdown */}
        <div className="space-y-6">
          {/* Section 1: Domain Originator Profile */}
          <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-lg font-bold text-[#0A2540] font-sans flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-[#635BFF]" />
              Domain Originator & Founder Profile
            </h2>
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#0A2540] font-bold text-base">{opp.founderBackground.name}</span>
                <span className="text-[#635BFF] font-semibold bg-[#F0F0FF] px-2.5 py-1 rounded-md border border-[#E0E0FF]">
                  {opp.founderBackground.domainYears} Years Industry Depth
                </span>
              </div>
              <div className="text-xs text-[#0A2540] font-semibold">{opp.founderBackground.headline}</div>
              <p className="text-xs text-[#425466] leading-relaxed">{opp.founderBackground.priorExperience}</p>
            </div>
          </div>

          {/* Section 2: Venture Thesis & Problem Statement */}
          <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-8 space-y-5 shadow-xs">
            <h2 className="text-lg font-bold text-[#0A2540] font-sans">
              The Venture Thesis & Ground Operational Reality
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#425466] leading-relaxed">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                <strong className="text-[#0A2540] block font-bold text-xs uppercase tracking-wider font-mono">
                  Core Venture Thesis:
                </strong>
                <p className="text-xs sm:text-sm text-[#0A2540]">{opp.ventureThesis}</p>
              </div>

              <div>
                <strong className="text-[#0A2540] block mb-1 font-semibold text-xs sm:text-sm">
                  The Market Bottleneck / Operational Need:
                </strong>
                <p>{opp.problemStatement}</p>
              </div>

              {opp.skills && opp.skills.length > 0 && (
                <div className="pt-3 border-t border-[#E6E8EB]">
                  <span className="text-xs font-mono text-[#829AB1] uppercase font-bold block mb-2">
                    Key Domains, Skills & Technologies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {opp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-[#F0F0FF] text-[#635BFF] text-xs font-mono font-medium border border-[#E0E0FF]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Ideal Candidate & Key Responsibilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 space-y-4 shadow-xs">
              <h3 className="text-base font-bold text-[#0A2540] font-sans">
                Ideal Candidate Profile
              </h3>
              <ul className="space-y-3 text-xs text-[#425466]">
                {opp.idealCandidateProfile.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
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
              <ul className="space-y-3 text-xs text-[#425466]">
                {opp.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Action Card */}
          <div className="p-8 rounded-3xl bg-[#F6F9FC] border border-[#E6E8EB] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1.5 text-center sm:text-left">
              <Badge variant="indigo" size="sm">Confidential Process</Badge>
              <div className="text-xl font-bold text-[#0A2540]">
                Ready to co-build with {opp.founderBackground.name}?
              </div>
              <p className="text-xs text-[#627D98] max-w-md">
                Submissions are reviewed by our venture partner team within 24 hours. Intros are coordinated directly with the founding team.
              </p>
            </div>
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="primary"
              size="lg"
              className="shrink-0 font-semibold px-8 shadow-sm"
              rightIcon={<Send className="h-4 w-4" />}
            >
              Express Interest
            </Button>
          </div>

          {/* Related Opportunities Section */}
          {relatedOpportunities.length > 0 && (
            <div className="pt-8 space-y-4">
              <h3 className="text-lg font-bold text-[#0A2540]">Other Active Partnerships</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedOpportunities.slice(0, 2).map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/network/${rel.id}`}
                    className="p-5 rounded-2xl bg-white border border-[#E6E8EB] hover:border-[#635BFF]/40 hover:shadow-md transition-all group space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#635BFF]">{rel.role}</span>
                      <span className="text-mono text-[#059669] font-bold">{rel.equityRange}</span>
                    </div>
                    <div className="text-sm font-bold text-[#0A2540] group-hover:text-[#635BFF] transition-colors leading-snug">
                      {rel.title}
                    </div>
                    <div className="text-xs text-[#627D98] flex items-center justify-between pt-1">
                      <span>{rel.location}</span>
                      <span className="font-medium text-[#0A2540] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        Explore <ArrowRight className="h-3 w-3 text-[#635BFF]" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Express Interest Modal */}
      <ExpressInterestModal
        opportunity={opp}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
