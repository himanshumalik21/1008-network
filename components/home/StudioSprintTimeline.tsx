"use client";

import React, { useState } from "react";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
} from "lucide-react";

export function StudioSprintTimeline() {
  const [activePhase, setActivePhase] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

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
        "Production Next.js / React web application & mobile endpoints",
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
        "Seed investor data room & institutional governance pack",
        "Complete transition to founder operational autonomy",
      ],
      tag: "Handover Gate",
    },
  ];

  return (
    <section id="blueprint" className="py-24 bg-[#F6F9FC] border-t border-[#E6E8EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="indigo" size="sm">The 180-Day Blueprint</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Build with you. Not forever for you.
          </h2>
          <p className="text-[#425466] text-base sm:text-lg">
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
                  "p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between shadow-xs",
                  isSelected
                    ? "bg-white border-[#635BFF] shadow-md ring-1 ring-[#635BFF]/30"
                    : "bg-white/80 border-[#E6E8EB] hover:border-[#CBD5E1] text-[#627D98]"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={cn("text-xs font-semibold", isSelected ? "text-[#635BFF]" : "text-[#627D98]")}>
                    {phase.days}
                  </span>
                  <Badge variant={isSelected ? "indigo" : "slate"} size="sm">
                    {phase.tag}
                  </Badge>
                </div>
                <div className={cn("text-sm font-semibold", isSelected ? "text-[#0A2540]" : "text-[#425466]")}>
                  {phase.name.split(":")[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Details Box */}
        <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-10 relative shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#635BFF] font-bold uppercase tracking-wider">
                  {phases[activePhase].days}
                </span>
                <span className="text-[#CBD5E1]">•</span>
                <span className="text-xs font-medium text-[#627D98]">{phases[activePhase].tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2540] font-sans">
                {phases[activePhase].name}
              </h3>

              <p className="text-[#425466] text-base leading-relaxed">
                {phases[activePhase].headline}
              </p>

              <div className="pt-2 space-y-2.5">
                <div className="text-xs uppercase tracking-wider text-[#627D98] font-bold">
                  Key Sprint Deliverables:
                </div>
                {phases[activePhase].deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-sm text-[#0A2540]">
                    <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-4">
              <div className="text-xs font-bold text-[#059669] uppercase tracking-wider flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>The 1008 Studio Commitment</span>
              </div>
              <p className="text-xs text-[#425466] leading-relaxed font-sans">
                By Day 180, 1008 transitions out of daily operations. You walk away with full equity ownership, an operational business, customer revenue, production code, and zero vendor lock-in.
              </p>
              <div className="pt-2">
                <Button
                  onClick={() => setModalOpen(true)}
                  variant="primary"
                  size="md"
                  className="w-full justify-center font-semibold"
                >
                  Apply for Next Studio Cohort
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StudioApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
