"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Factory,
  Store,
  DollarSign,
} from "lucide-react";

export function RealBusinessPlaybookPhases() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      phaseNumber: "PHASE 01",
      timeline: "Days 1 to 20",
      title: "High-Utility Need & Margin Validation",
      theme: "Category & Economics",
      themeColor: "text-[#635BFF] bg-[#F0F0FF] border-[#E0E0FF]",
      icon: <DollarSign className="h-5 w-5 text-[#635BFF]" />,
      summary:
        "Select an essential, daily-use category and validate that unit gross margins exceed 60% before distributor cuts.",
      tasks: [
        "Audit consumer/B2B demand: Ensure the product addresses a non-negotiable operational or household friction.",
        "Model contribution margins: Require at least 60% gross margin to comfortably fund 20%–30% retailer/distributor cuts.",
        "Kill discretionary features: Eliminate aesthetic bells-and-whistles that inflate manufacturing BOM without adding utility.",
      ],
      gateDeliverable: "Unit Economic Model with 60%+ Margin Cushion",
    },
    {
      phaseNumber: "PHASE 02",
      timeline: "Days 21 to 50",
      title: "Dedicated Tooling & Quality Moats",
      theme: "Contract Manufacturing",
      themeColor: "text-[#007A66] bg-[#E6FFFA] border-[#B2F5EA]",
      icon: <Factory className="h-5 w-5 text-[#007A66]" />,
      summary:
        "Partner with audited contract manufacturing units with custom molds and proprietary batching rather than trading generic stock.",
      tasks: [
        "Audit OEM manufacturing facilities for production capacity, quality assurance, and batch scalability.",
        "Invest in custom tooling or proprietary formulations to build defensible product moats against generic traders.",
        "Secure statutory clearances: Ensure FSSAI, BIS, CDSCO, or GST classifications are locked on Day 1.",
      ],
      gateDeliverable: "Audited OEM Contract & Pilot Batch Clearance",
    },
    {
      phaseNumber: "PHASE 03",
      timeline: "Days 51 to 80",
      title: "General Trade Beat & Cloud ERP Sync",
      theme: "Distribution & Systems",
      themeColor: "text-[#FF7043] bg-[#FFF4ED] border-[#FFD8C2]",
      icon: <Store className="h-5 w-5 text-[#FF7043]" />,
      summary:
        "Deploy a centralized Cloud ERP to manage distributor beats, stock aging, secondary sales, and 3PL fulfillment hubs.",
      tasks: [
        "Deploy Cloud ERP (ERPNext / Frappe): Integrate live inventory tracking, GST e-Invoicing, and automated vendor POs.",
        "Map regional distributor beats: Appoint local stockists in target Tier-1 and Tier-2 clusters with clear credit limits.",
        "Establish 3PL fulfillment nodes: Position stock in multi-city warehousing hubs to guarantee 48-hour delivery.",
      ],
      gateDeliverable: "Live Cloud ERP + Active Distributor Roster",
    },
    {
      phaseNumber: "PHASE 04",
      timeline: "Ongoing",
      title: "Shared-Equity Scaling & Working Capital",
      theme: "Capital & Scale",
      themeColor: "text-[#059669] bg-[#ECFDF5] border-[#A7F3D0]",
      icon: <ShieldCheck className="h-5 w-5 text-[#059669]" />,
      summary:
        "Scale operations with working capital credit lines (CGTMSE / cash-flow facilities) and partner with venture facilitators for aligned shared equity.",
      tasks: [
        "Tap non-dilutive credit lines: Leverage GST cash-flow history to unlock collateral-free working capital and invoice discounting.",
        "Eliminate retainer advisors: Partner with operational co-builders who align through venture equity rather than cash drains.",
        "Institutionalize governance: Transition to phased management autonomy with auditable financial P&L reporting.",
      ],
      gateDeliverable: "Profitable Run-Rate & Institutional Credit Lines",
    },
  ];

  return (
    <div className="my-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-5 sm:p-7 shadow-xs font-sans">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E6E8EB] pb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#F0F0FF] border border-[#E0E0FF] text-[#635BFF]">
              <Layers className="h-4 w-4" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540]">
              The 4-Phase Cash-Flow Enterprise Roadmap
            </span>
          </div>
          <span className="text-xs font-mono text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-md border border-[#A7F3D0] font-bold">
            Execution Standard
          </span>
        </div>

        {/* Phase Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {phases.map((p, idx) => {
            const isSelected = activePhase === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePhase(idx)}
                className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between gap-1.5 ${
                  isSelected
                    ? "bg-white border-[#635BFF] shadow-sm ring-1 ring-[#635BFF]/30"
                    : "bg-white/70 border-[#E6E8EB] hover:bg-white hover:border-[#CBD5E1]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-extrabold text-[#635BFF]">
                    {p.phaseNumber}
                  </span>
                  <span className="text-[10px] font-mono text-[#829AB1]">
                    {p.timeline}
                  </span>
                </div>
                <div className="text-xs font-bold text-[#0A2540] truncate">
                  {p.theme}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Detail Display */}
        <div className="rounded-2xl bg-white border border-[#E6E8EB] p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F1F5F9] pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#F0F0FF] border border-[#E0E0FF]">
                {phases[activePhase].icon}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#635BFF]">
                    {phases[activePhase].phaseNumber} • {phases[activePhase].timeline}
                  </span>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${phases[activePhase].themeColor}`}>
                    {phases[activePhase].theme}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-extrabold text-[#0A2540] mt-0.5">
                  {phases[activePhase].title}
                </h4>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
            {phases[activePhase].summary}
          </p>

          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono font-bold text-[#627D98] uppercase tracking-wider block">
              Phase Execution Tasks:
            </span>
            {phases[activePhase].tasks.map((task, tIdx) => (
              <div
                key={tIdx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0A2540] bg-[#F8FAFC] p-3 rounded-xl border border-[#E6E8EB]"
              >
                <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                <span className="leading-snug">{task}</span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-[#F1F5F9] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <span className="text-[#627D98] font-mono">
              <strong>Phase Gate Deliverable:</strong> {phases[activePhase].gateDeliverable}
            </span>
            <span className="text-[11px] font-mono text-[#059669] font-bold bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#A7F3D0] inline-block">
              Milestone Gate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
