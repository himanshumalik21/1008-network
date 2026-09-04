"use client";

import React, { useState } from "react";
import { initialDealCards } from "@/data/dealCards";
import { DealCard as DealCardType } from "@/lib/types";
import { DealCard } from "@/components/capital/DealCard";
import { EOIModal } from "@/components/capital/EOIModal";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import {
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function CapitalPage() {
  const [selectedDeal, setSelectedDeal] = useState<DealCardType | null>(null);

  return (
    <div className="pt-28 pb-20">
      {/* Capital Header */}
      <section className="relative py-14 border-b border-white/[0.06] bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2">
                <Badge variant="emerald" size="md" pulse>
                  1008 Capital // Seed Syndicate Board
                </Badge>
                <span className="text-xs font-mono text-muted">Curated Domain Deals</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
                Back mature operators building in Bharat.
              </h1>

              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Access pre-screened seed-stage deal flow from 1008 Studio cohorts and network ventures.
                Every deal features reference-checked corporate veterans, verified codebases, and audited unit economics.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Badge variant="slate" size="md">
                Min. Ticket: ₹2–5 Lakhs
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Deals Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Syndicate Standards Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-surface-100/60 border border-white/[0.06] flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono uppercase text-white font-semibold mb-0.5">
                Audited Codebases
              </div>
              <p className="text-xs text-muted">
                Production-grade Next.js, clean DB schemas, and full IP assignment to the Indian corporate entity.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface-100/60 border border-white/[0.06] flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono uppercase text-white font-semibold mb-0.5">
                Domain Veteran Founders
              </div>
              <p className="text-xs text-muted">
                Founders average 14+ years of leadership at Fortis, Marico, DLF, Bharat Forge, or Tier-1 banks.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface-100/60 border border-white/[0.06] flex items-start gap-3">
            <TrendingUp className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono uppercase text-white font-semibold mb-0.5">
                Standardized Term Sheets
              </div>
              <p className="text-xs text-muted">
                Clean founder reverse-vesting, 10%-12% ESOP trust, and transparent reporting governance.
              </p>
            </div>
          </div>
        </div>

        {/* Live Deal Cards */}
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-muted">
            <span>ACTIVE SEED ALLOCATIONS ({initialDealCards.length})</span>
            <span>Allocations open to accredited angels & CXOs</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {initialDealCards.map((deal) => (
              <DealCard
                key={deal.id}
                deal={deal}
                onExpressInterest={(d) => setSelectedDeal(d)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Expression of Interest Modal */}
      <EOIModal
        deal={selectedDeal}
        isOpen={Boolean(selectedDeal)}
        onClose={() => setSelectedDeal(null)}
      />
    </div>
  );
}
