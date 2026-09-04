"use client";

import React from "react";
import { DealCard as DealCardType } from "@/lib/types";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { formatCurrencyINR } from "@/lib/utils";
import {
  TrendingUp,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Users,
  ArrowUpRight,
} from "lucide-react";

interface DealCardProps {
  deal: DealCardType;
  onExpressInterest: (deal: DealCardType) => void;
}

export function DealCard({ deal, onExpressInterest }: DealCardProps) {
  return (
    <div className="rounded-2xl bg-surface-100/80 border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 relative group">
      <div>
        {/* Deal Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Badge variant="emerald" size="sm">
              {deal.sector}
            </Badge>
            <Badge variant="slate" size="sm">
              {deal.stage}
            </Badge>
          </div>
          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> Closing in {deal.closingInDays}d
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
          {deal.name}
        </h3>
        <p className="text-xs font-mono text-muted mb-4">{deal.oneLiner}</p>

        {/* Financial Highlights Bar */}
        <div className="grid grid-cols-3 gap-2 p-3.5 rounded-xl bg-surface-200/70 border border-white/[0.06] mb-6 font-mono text-center">
          <div>
            <span className="text-[10px] text-muted block uppercase">TARGET RAISE</span>
            <span className="text-sm font-bold text-white">
              {formatCurrencyINR(deal.targetRaiseINR)}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-muted block uppercase">VALUATION CAP</span>
            <span className="text-sm font-bold text-amber-400">
              {formatCurrencyINR(deal.valuationCapINR)}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-muted block uppercase">1008 ALLOCATION</span>
            <span className="text-sm font-bold text-emerald-400">
              {formatCurrencyINR(deal.syndicateAllocationINR)}
            </span>
          </div>
        </div>

        {/* Allocation Progress Bar */}
        <div className="space-y-1.5 mb-6">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-muted">Syndicate Allocation</span>
            <span className="text-emerald-400 font-semibold">{deal.committedPercentage}% Committed</span>
          </div>
          <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full transition-all duration-500"
              style={{ width: `${deal.committedPercentage}%` }}
            />
          </div>
        </div>

        {/* Traction Highlights */}
        <div className="space-y-2 mb-6">
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider block">
            VERIFIED TRACTION METRICS
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            {deal.tractionHighlights.map((t, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-surface-200/40 border border-white/[0.04]">
                <div className="text-white font-semibold">{t.value}</div>
                <div className="text-[11px] text-muted">{t.metric}</div>
                {t.growth && <div className="text-[10px] text-emerald-400 font-mono mt-0.5">{t.growth}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Founders Pedigree */}
        <div className="space-y-2 mb-6 text-xs">
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider block">
            FOUNDING PEDIGREE
          </span>
          <div className="space-y-1.5">
            {deal.founders.map((f, idx) => (
              <div key={idx} className="flex items-start gap-2 text-muted">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong className="text-foreground">{f.role}:</strong> {f.background}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
        <span className="text-xs font-mono text-muted flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" /> {deal.location}
        </span>
        <Button
          onClick={() => onExpressInterest(deal)}
          variant="primary"
          size="sm"
          rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
        >
          Express Interest / Request Data Room
        </Button>
      </div>
    </div>
  );
}
