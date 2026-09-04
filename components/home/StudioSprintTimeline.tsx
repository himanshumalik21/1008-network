"use client";

import React, { useState } from "react";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  Layers,
  ArrowRight,
  Shield,
  Clock,
  Terminal,
  FileCheck,
  TrendingUp,
} from "lucide-react";

export function StudioSprintTimeline() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 1,
      name: "Phase 1: Validation & Architecture",
      days: "Days 1–45",
      headline: "Problem discovery, customer pain ledger & technical architecture.",
      deliverables: [
        "25+ customer discovery interviews under strict mutual NDA",
        "Problem Financial Bleed quantification (validating >₹10L/yr customer cost)",
        "System architecture specification & database entity relationships",
        "Co-founder alignment agreement & clean IP separation",
      ],
      tag: "Validation Gate",
    },
    {
      id: 2,
      name: "Phase 2: MVP & Operational Stack",
      days: "Days 46–90",
      headline: "Full-stack code deployment, brand design system & internal tools.",
      deliverables: [
        "Production Next.js 15 / React 19 web application & mobile endpoints",
        "Modular design system & Linear-grade user experience",
        "Security, auth, and database migrations (PostgreSQL/Prisma)",
        "Early operational SOPs & customer onboarding pipelines",
      ],
      tag: "Build Gate",
    },
    {
      id: 3,
      name: "Phase 3: Commercial Pilot & 3-LOI Gate",
      days: "Days 91–135",
      headline: "Go-to-market execution, pilot contracts & early revenue proof.",
      deliverables: [
        "Securing 3 paid pilots or signed enterprise Letters of Intent (LOIs)",
        "Customer feedback iteration sprints & unit economic modeling",
        "Pricing validation & GST/payment gateway integrations",
        "Recruiting initial full-time engineering & sales hires",
      ],
      tag: "Revenue Gate",
    },
    {
      id: 4,
      name: "Phase 4: Handover & Independence",
      days: "Days 136–180",
      headline: "Full code handover, entity governance, cap table & seed prep.",
      deliverables: [
        "100% intellectual property (IP) assignment to founder entity",
        "Clean capitalization table structuring with 10%-12% ESOP pool",
        "Seed investor data room & syndication on 1008 Capital board",
        "Complete transition to founder operational autonomy",
      ],
      tag: "Handover Gate",
    },
  ];

  return (
    <section className="py-24 bg-[#060709] border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="amber" size="sm">The 180-Day Blueprint</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            Build with you. Not forever for you.
          </h2>
          <p className="text-muted text-base sm:text-lg">
            A temporary, high-intensity 180-day venture-building partnership engineered to make you completely self-sustaining.
          </p>
        </div>

        {/* Interactive Sprint Phase Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {phases.map((phase, idx) => {
            const isSelected = activePhase === idx;
            return (
              <button
                key={phase.id}
                onClick={() => setActivePhase(idx)}
                className={cn(
                  "p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between",
                  isSelected
                    ? "bg-surface-100 border-amber-400/60 shadow-[0_0_25px_rgba(245,158,11,0.15)]"
                    : "bg-surface-200/40 border-white/[0.06] hover:border-white/[0.15] text-muted"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={cn("text-xs font-mono font-semibold", isSelected ? "text-amber-400" : "text-muted")}>
                    {phase.days}
                  </span>
                  <Badge variant={isSelected ? "amber" : "slate"} size="sm">
                    {phase.tag}
                  </Badge>
                </div>
                <div className={cn("text-sm font-medium", isSelected ? "text-white font-semibold" : "text-foreground")}>
                  {phase.name.split(":")[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Details Box */}
        <div className="rounded-2xl bg-surface-100/90 border border-white/[0.1] p-6 sm:p-10 backdrop-blur-xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                  {phases[activePhase].days}
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs font-mono text-muted">{phases[activePhase].tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                {phases[activePhase].name}
              </h3>

              <p className="text-muted text-base leading-relaxed">
                {phases[activePhase].headline}
              </p>

              <div className="pt-2 space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Key Sprint Deliverables:
                </div>
                {phases[activePhase].deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-xl bg-surface-200/80 border border-white/[0.08] space-y-4">
              <div className="text-xs font-mono text-muted uppercase tracking-wider flex items-center gap-2">
                <Shield className="h-4 w-4 text-emerald-400" />
                <span>The 1008 Studio Commitment</span>
              </div>
              <p className="text-xs text-muted leading-relaxed font-sans">
                By Day 180, 1008 transitions out of daily operations. You walk away with full equity ownership, an operational business, customer revenue, production code, and zero vendor lock-in.
              </p>
              <div className="pt-2">
                <Button href="/studio" variant="primary" size="md" className="w-full justify-center">
                  Apply for Next Studio Cohort
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
