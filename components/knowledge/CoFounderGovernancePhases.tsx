"use client";

import React, { useState } from "react";
import { Badge } from "@/components/brand/Badge";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  FileCheck2,
  Users,
  Scale,
  Percent,
  Lock,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function CoFounderGovernancePhases() {
  const [activeTab, setActiveTab] = useState(0);

  const phases = [
    {
      id: 1,
      phaseLabel: "PHASE 01",
      timeline: "Days 1–7",
      name: "Phase 1: Dynamic Contribution Weighting",
      headline: "Weight initial equity mathematically across 4 objective pillars rather than an arbitrary 50/50 handshake.",
      deliverables: [
        "Weight Full-Time Commitment (40%): Differentiate full-time operational builders from part-time advisors.",
        "Weight Seed Capital Contribution (25%): Factor in upfront cash injected into the company bank account.",
        "Weight Technical & Domain Execution Muscle (20%): Value core software architecture, plant setup, and GTM sales.",
        "Weight Pre-Incorporation IP & Assets (15%): Value pre-existing prototypes, code, and customer relationships.",
      ],
      tag: "Allocation Gate",
      badgeColor: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
    },
    {
      id: 2,
      phaseLabel: "PHASE 02",
      timeline: "Days 8–15",
      name: "Phase 2: 4-Year Vesting with a 1-Year Cliff",
      headline: "Implement institutional 48-month linear vesting with a non-negotiable 12-month cliff.",
      deliverables: [
        "1-Year Cliff Gate: 0% equity vests if a founder leaves before completing 12 consecutive months.",
        "25% First Milestone: Exactly 25% of total shares vest simultaneously on Month 12.",
        "Monthly Linear Accrual: Remaining 75% vests in equal monthly increments (1/48th per month) across Years 2–4.",
        "Board & Milestone Checkpoints: Tie equity release to active executive director and founder employment contracts.",
      ],
      tag: "Vesting Gate",
      badgeColor: "bg-[#E6FFFA] text-[#007A66] border-[#B2F5EA]",
    },
    {
      id: 3,
      phaseLabel: "PHASE 03",
      timeline: "Days 16–22",
      name: "Phase 3: Reverse Vesting & Pre-Set Buyback Terms",
      headline: "Define explicit 'Good Leaver' vs. 'Bad Leaver' contractual mechanisms under Indian Company Law.",
      deliverables: [
        "Reverse Vesting Covenant: Company or remaining founders retain irrevocable right to repossess unvested shares.",
        "Nominal Buyback Price: Unvested shares repurchased at face value (e.g. ₹10/share) upon early exit.",
        "Good Leaver vs. Bad Leaver: Define clear terms for voluntary departure, disability, breach of NDA, or gross misconduct.",
        "Drag-Along & Tag-Along Rights: Prevent minority deadlock during future institutional M&A or equity financing.",
      ],
      tag: "Buyback Gate",
      badgeColor: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
    },
    {
      id: 4,
      phaseLabel: "PHASE 04",
      timeline: "Days 23–30",
      name: "Phase 4: Institutional SHA & Complete IP Assignment",
      headline: "Execute binding Shareholders' Agreement (SHA), 100% corporate IP assignment, and formalize a 10%–15% ESOP pool.",
      deliverables: [
        "100% Corporate IP Assignment: Transfer all source code, patents, logos, domains, and supplier contracts to the Private Limited entity.",
        "ESOP Pool Creation: Carve out a 10%–15% unallocated ESOP option pool to attract future VP Engineering and GTM hires.",
        "Cap Table Data Room: Clean up MCA share allotment records and stamp duty filings for seamless investor diligence.",
        "Transition to Build: Partner with 1008 Venture Studio for turnkey ground execution on shared equity.",
      ],
      tag: "Governance Gate",
      badgeColor: "bg-[#FFF4ED] text-[#C2410C] border-[#FFD8C2]",
    },
  ];

  const currentPhase = phases[activeTab];

  return (
    <div className="space-y-6 my-8 font-sans">
      {/* Interactive Phase Selectors */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {phases.map((p, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={p.id}
              onClick={() => setActiveTab(idx)}
              className={cn(
                "p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between shadow-xs",
                isActive
                  ? "bg-white border-[#635BFF] shadow-sm ring-1 ring-[#635BFF]/30"
                  : "bg-white/80 border-[#E6E8EB] hover:border-[#CBD5E1] text-[#627D98]"
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={cn(
                    "text-xs font-mono font-bold",
                    isActive ? "text-[#635BFF]" : "text-[#627D98]"
                  )}
                >
                  {p.phaseLabel}
                </span>
                <span
                  className={cn(
                    "text-[10px] font-mono px-2 py-0.5 rounded border",
                    p.badgeColor
                  )}
                >
                  {p.timeline}
                </span>
              </div>
              <div
                className={cn(
                  "text-xs font-semibold leading-snug",
                  isActive ? "text-[#0A2540]" : "text-[#425466]"
                )}
              >
                {p.name.split(":")[1]}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Phase Detail Card */}
      <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E6E8EB] pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#635BFF] uppercase tracking-wider">
                {currentPhase.phaseLabel}
              </span>
              <span className="text-[#CBD5E1]">•</span>
              <span className="text-xs font-medium text-[#627D98]">
                {currentPhase.tag}
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0]">
              Timeline: {currentPhase.timeline}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] font-sans">
            {currentPhase.name}
          </h3>

          <p className="text-sm text-[#425466] leading-relaxed">
            {currentPhase.headline}
          </p>

          <div className="space-y-2.5 pt-3">
            <div className="text-xs uppercase tracking-wider text-[#627D98] font-bold">
              Core Execution Deliverables:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {currentPhase.deliverables.map((item, dIdx) => (
                <div
                  key={dIdx}
                  className="p-3.5 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] flex items-start gap-2.5 text-xs text-[#0A2540]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
