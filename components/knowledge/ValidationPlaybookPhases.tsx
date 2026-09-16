"use client";

import React, { useState } from "react";
import { Badge } from "@/components/brand/Badge";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  FileCheck2,
  Users,
  Search,
  Target,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ValidationPlaybookPhases() {
  const [activeTab, setActiveTab] = useState(0);

  const phases = [
    {
      id: 1,
      phaseLabel: "PHASE 01",
      timeline: "Days 1–7",
      name: "Phase 1: Problem & Past Expense Audit",
      headline: "Conduct 20 customer discovery interviews with target buyers without mentioning your product.",
      deliverables: [
        "Uncover target buyers' top 3 budget line items and operational bottlenecks from the last 12 months.",
        "Disqualify problems where the customer has spent ₹0 and allocated zero manpower to fix it.",
        "Map the exact decision-maker hierarchy: User vs. Recommender vs. Economic Buyer.",
        "Document competitor alternatives and current vendor contract pricing.",
      ],
      tag: "Discovery Gate",
      badgeColor: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
    },
    {
      id: 2,
      phaseLabel: "PHASE 02",
      timeline: "Days 8–15",
      name: "Phase 2: Lean Pre-Order & Waitlist Funnel",
      headline: "Build a high-converting landing page or B2B presentation deck with exact product specs and pricing.",
      deliverables: [
        "Launch an ultra-lean landing page or deck detailing specifications, deliverables, and timelines under ₹10,000.",
        "Include transparent commercial pricing (no hidden quotes or vague promises).",
        "Set up a structured pre-order / waitlist intake with qualifying business questions.",
        "Run targeted outbound messages to 50 target ICP profiles across LinkedIn and WhatsApp.",
      ],
      tag: "Funnel Gate",
      badgeColor: "bg-[#E6FFFA] text-[#007A66] border-[#B2F5EA]",
    },
    {
      id: 3,
      phaseLabel: "PHASE 03",
      timeline: "Days 16–25",
      name: "Phase 3: Secure Signed LOIs & Deposit Commitments",
      headline: "Present the solution to interviewed buyers and demand real commercial skin in the game.",
      deliverables: [
        "Secure signed non-binding B2B Letters of Intent (LOIs) with volume and price benchmarks.",
        "Collect token advance deposits (₹500 to ₹5,000) or pilot trial payments.",
        "Obtain warm introductions to Procurement Heads or VP Finance for formal vendor onboarding review.",
        "Enforce the 20% Rule: If less than 20% commit, pivot the proposition before spending money.",
      ],
      tag: "Commitment Gate",
      badgeColor: "bg-[#FFF3EE] text-[#D94814] border-[#FFD8C9]",
    },
    {
      id: 4,
      phaseLabel: "PHASE 04",
      timeline: "Days 26–30+",
      name: "Phase 4: Shared-Equity Manufacturing & Venture Build",
      headline: "Once validation is proven, partner with an operational venture builder to execute turnkey ground operations.",
      deliverables: [
        "Audit and lock OEM contract manufacturing facilities or industrial tooling with locked terms.",
        "Deploy Day-1 Cloud ERP (ERPNext/Frappe) to track orders, procurement ledgers, and GST billing.",
        "Source vetted technical CTOs, operations leads, or commercial sales partners for shared equity.",
        "Scale with zero expensive consulting retainers and aligned venture execution.",
      ],
      tag: "Venture Gate",
      badgeColor: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
    },
  ];

  return (
    <div className="my-8 rounded-2xl bg-[#F8FAFC] border border-[#E6E8EB] p-5 sm:p-7 shadow-xs font-sans space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6E8EB] pb-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#635BFF]">
            30-Day Execution Protocol
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mt-0.5">
            The 1008 Pre-Launch Validation Roadmap
          </h3>
        </div>
        <Badge variant="indigo" size="sm">
          De-Risked 4-Phase Gate
        </Badge>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {phases.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setActiveTab(idx)}
            className={cn(
              "p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-1",
              activeTab === idx
                ? "bg-white border-[#635BFF] shadow-xs ring-2 ring-[#635BFF]/10"
                : "bg-[#F1F4F8] border-transparent hover:bg-white text-[#627D98]"
            )}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase text-[#635BFF]">
                {p.phaseLabel}
              </span>
              <span className="text-[10px] font-mono text-[#627D98]">{p.timeline}</span>
            </div>
            <span className={cn("text-xs font-bold leading-snug line-clamp-1", activeTab === idx ? "text-[#0A2540]" : "text-[#425466]")}>
              {p.name.split(": ")[1]}
            </span>
          </button>
        ))}
      </div>

      {/* Active Phase Card */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E6E8EB] space-y-4 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F1F4F8] pb-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className={cn("text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border", phases[activeTab].badgeColor)}>
                {phases[activeTab].phaseLabel} • {phases[activeTab].timeline}
              </span>
              <span className="text-xs font-mono font-semibold text-[#059669]">
                {phases[activeTab].tag}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-[#0A2540]">
              {phases[activeTab].name}
            </h4>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#425466] leading-relaxed font-medium">
          {phases[activeTab].headline}
        </p>

        <div className="space-y-2.5 pt-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#627D98] block">
            Milestone Deliverables & Gate Verification:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {phases[activeTab].deliverables.map((d, dIdx) => (
              <div
                key={dIdx}
                className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] flex items-start gap-2.5 text-xs text-[#425466]"
              >
                <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
