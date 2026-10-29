"use client";

import React from "react";
import { GigItem } from "@/lib/types";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  MapPin,
  Sparkles,
  ArrowRight,
  Flame,
  Briefcase,
  Layers,
} from "lucide-react";

interface GigCardProps {
  gig: GigItem;
  onApply: (gig: GigItem) => void;
}

export function GigCard({ gig, onApply }: GigCardProps) {
  // Category badge color accents
  const getCategoryTheme = (category: string) => {
    switch (category) {
      case "Tech & Cloud Development":
        return { variant: "indigo" as const, dot: "#635BFF" };
      case "ERP, Accounts & GST Compliance":
        return { variant: "emerald" as const, dot: "#059669" };
      case "B2B Sales & GTM Outreach":
        return { variant: "cyan" as const, dot: "#00A389" };
      case "Supply Chain & Factory Audits":
        return { variant: "amber" as const, dot: "#D97706" };
      case "Legal, Contracts & Cap Table":
        return { variant: "slate" as const, dot: "#475569" };
      case "UI/UX & Product Design":
        return { variant: "indigo" as const, dot: "#635BFF" };
      default:
        return { variant: "slate" as const, dot: "#64748B" };
    }
  };

  const theme = getCategoryTheme(gig.category);

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#635BFF]/30 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      <div className="p-5 sm:p-6 space-y-4">
        {/* Top Badges & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant={theme.variant} size="sm">
              {gig.category}
            </Badge>

            {gig.verifiedBusiness && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#00A389] bg-[#E6FFFA] px-2 py-0.5 rounded-full border border-[#B2F5EA]">
                <ShieldCheck className="h-3 w-3 text-[#00A389]" />
                Verified Business
              </span>
            )}

            {gig.urgency === "Immediate" && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#DC2626] bg-[#FEF2F2] px-2 py-0.5 rounded-full border border-[#FECACA]">
                <Flame className="h-3 w-3 text-[#DC2626]" />
                Immediate Start
              </span>
            )}
          </div>

          <span className="text-[11px] font-mono text-[#64748B]">
            {gig.postedAt}
          </span>
        </div>

        {/* Gig Title */}
        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] group-hover:text-[#635BFF] transition-colors leading-snug">
            {gig.title}
          </h3>

          <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-[#64748B]">
            <span className="font-semibold text-[#334155] flex items-center gap-1">
              <Building2 className="h-3.5 w-3.5 text-[#635BFF]" />
              {gig.businessName}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {gig.location} ({gig.workMode})
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-[#00A389]" />
              {gig.duration}
            </span>
          </div>
        </div>

        {/* Goal / Context Summary */}
        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3">
          {gig.goalSummary}
        </p>

        {/* Scope of Work & Deliverables Container */}
        <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#475569] flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-[#635BFF]" />
            Scope of Work & Deliverables:
          </span>
          <div className="space-y-1.5">
            {gig.deliverables.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#334155] leading-snug">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#00A389] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
            {gig.deliverables.length > 3 && (
              <span className="text-[11px] font-mono text-[#635BFF] pl-5 block">
                + {gig.deliverables.length - 3} more deliverables
              </span>
            )}
          </div>
        </div>

        {/* Required Skills Tags */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {gig.skillsRequired.map((skill, sIdx) => (
            <span
              key={sIdx}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Footer / Pay and Action */}
      <div className="p-5 sm:p-6 bg-[#FAFBFD] border-t border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block">
            Scope Budget / Pay
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-bold font-mono text-[#059669]">
              {gig.budgetINR}
            </span>
          </div>
          <span className="text-[10px] text-[#64748B] flex items-center gap-1 font-mono">
            <ShieldCheck className="h-3 w-3 text-[#00D4B2]" />
            1008 Escrow • Milestone Sign-off
          </span>
        </div>

        <Button
          onClick={() => onApply(gig)}
          variant="primary"
          size="md"
          className="w-full sm:w-auto font-semibold px-5 shadow-xs whitespace-nowrap cursor-pointer"
          rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
        >
          Pick Up Gig / Express Interest
        </Button>
      </div>
    </div>
  );
}
