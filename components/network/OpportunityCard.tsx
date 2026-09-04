"use client";

import React from "react";
import Link from "next/link";
import { Opportunity } from "@/lib/types";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import {
  Clock,
  MapPin,
  Briefcase,
  Users,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

interface OpportunityCardProps {
  opportunity: Opportunity;
  onConnect?: (opp: Opportunity) => void;
}

export function OpportunityCard({ opportunity, onConnect }: OpportunityCardProps) {
  return (
    <div className="rounded-2xl bg-surface-100/70 border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 relative group">
      <div>
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <Badge variant="cyan" size="sm">
              {opportunity.sector}
            </Badge>
            {opportunity.studioBacked && (
              <Badge variant="amber" size="sm">
                1008 Studio Venture
              </Badge>
            )}
          </div>
          <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {opportunity.expiresInDays}d remaining
          </span>
        </div>

        {/* Opportunity Title */}
        <Link href={`/network/${opportunity.id}`} className="group-hover:text-cyan-300 transition-colors">
          <h3 className="text-xl font-bold text-white mb-2 leading-snug">
            {opportunity.title}
          </h3>
        </Link>

        {/* Founder Background Pill */}
        <div className="p-3.5 rounded-xl bg-surface-200/60 border border-white/[0.05] mb-4 text-xs space-y-1">
          <div className="flex items-center justify-between text-muted-foreground font-mono text-[10px]">
            <span>DOMAIN ORIGINATOR</span>
            <span className="text-amber-400 font-semibold">{opportunity.founderBackground.domainYears} YRS EXP</span>
          </div>
          <div className="text-white font-medium text-xs sm:text-sm">
            {opportunity.founderBackground.name} • {opportunity.founderBackground.headline}
          </div>
          <p className="text-muted text-[11px] leading-relaxed">
            {opportunity.founderBackground.priorExperience}
          </p>
        </div>

        {/* Venture Thesis */}
        <div className="space-y-1.5 mb-5 text-xs text-muted">
          <span className="text-[10px] font-mono text-muted-foreground uppercase">VENTURE THESIS</span>
          <p className="leading-relaxed line-clamp-3">
            {opportunity.ventureThesis}
          </p>
        </div>
      </div>

      {/* Footer Metrics & Actions */}
      <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-4">
          <div>
            <span className="text-[10px] font-mono text-muted block">EQUITY RANGE</span>
            <span className="text-amber-400 font-mono font-semibold text-sm">
              {opportunity.equityRange}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono text-muted block">LOCATION</span>
            <span className="text-white font-mono flex items-center gap-1">
              <MapPin className="h-3 w-3 text-muted" /> {opportunity.location}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            href={`/network/${opportunity.id}`}
            variant="ghost"
            size="sm"
            className="text-xs"
          >
            View Details
          </Button>
          {onConnect ? (
            <Button
              onClick={() => onConnect(opportunity)}
              variant="secondary"
              size="sm"
              rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
            >
              Apply to Partner
            </Button>
          ) : (
            <Button
              href={`/network/${opportunity.id}`}
              variant="secondary"
              size="sm"
              rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
            >
              Apply to Partner
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
