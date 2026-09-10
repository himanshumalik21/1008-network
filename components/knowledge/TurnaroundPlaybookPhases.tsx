"use client";

import React from "react";
import {
  ShieldAlert,
  FileSpreadsheet,
  Database,
  Rocket,
  CheckCircle2,
  Clock,
  ArrowRight,
  Zap,
  Layers,
  Sparkles,
} from "lucide-react";

interface PhaseData {
  step: string;
  timeframe: string;
  title: string;
  headline: string;
  badgeBg: string;
  badgeColor: string;
  iconBg: string;
  icon: React.ReactNode;
  actions: string[];
}

export function TurnaroundPlaybookPhases() {
  const phases: PhaseData[] = [
    {
      step: "01",
      timeframe: "Days 1 – 7",
      title: "Immediate Cash Triage & Retainer Freeze",
      headline: "Stop the financial drain and calculate true unit contribution margins.",
      badgeBg: "bg-[#FFF4ED] border-[#FFD8C2]",
      badgeColor: "text-[#C2410C]",
      iconBg: "bg-[#FFF4ED] border-[#FFD8C2] text-[#FF7043]",
      icon: <ShieldAlert className="h-5 w-5 text-[#FF7043]" />,
      actions: [
        "Terminate all non-performance marketing, PR, and advisory retainers immediately.",
        "Calculate True Contribution Margin per unit (Revenue minus direct COGS, gateway fees, and shipping).",
        "Strip monthly overhead to pure essentials (servers, core raw stock, minimal stipends).",
      ],
    },
    {
      step: "02",
      timeframe: "Days 8 – 21",
      title: "Cap Table & Governance Restructuring",
      headline: "Fix broken founder equity splits and secure corporate IP ownership.",
      badgeBg: "bg-[#F0F0FF] border-[#E0E0FF]",
      badgeColor: "text-[#635BFF]",
      iconBg: "bg-[#F0F0FF] border-[#E0E0FF] text-[#635BFF]",
      icon: <FileSpreadsheet className="h-5 w-5 text-[#635BFF]" />,
      actions: [
        "Institute standard 4-year equity reverse vesting with a 1-year cliff for all active founders.",
        "Clean up inactive equity holdings through formal buyback or sweat equity cancellation agreements.",
        "Execute explicit IP Assignment Agreements ensuring all code, designs, and domains belong to the entity.",
      ],
    },
    {
      step: "03",
      timeframe: "Days 22 – 45",
      title: "Day-1 Digital Cloud ERP Backbone",
      headline: "Eliminate spreadsheet chaos with centralized automated enterprise operations.",
      badgeBg: "bg-[#E6FFFA] border-[#B2F5EA]",
      badgeColor: "text-[#007A66]",
      iconBg: "bg-[#E6FFFA] border-[#B2F5EA] text-[#00D4B2]",
      icon: <Database className="h-5 w-5 text-[#007A66]" />,
      actions: [
        "Deploy a customized cloud ERP (Frappe/ERPNext or tailored Odoo core).",
        "Centralize billing, vendor ledgers, inventory tracking, and CRM into one single dashboard.",
        "Automate customer order tracking and fulfillment alerts via WhatsApp Business API workflows.",
      ],
    },
    {
      step: "04",
      timeframe: "Ongoing Scale",
      title: "Shared-Equity Co-Building & Capital Alignment",
      headline: "Scale with true operators on the ground with zero consulting fees.",
      badgeBg: "bg-[#ECFDF5] border-[#A7F3D0]",
      badgeColor: "text-[#047857]",
      iconBg: "bg-[#ECFDF5] border-[#A7F3D0] text-[#10B981]",
      icon: <Rocket className="h-5 w-5 text-[#047857]" />,
      actions: [
        "Partner with vetted operational and technical co-founders via dedicated equity pools.",
        "Align with 1008 Network for execution muscle, manufacturing setup, and seed capital for shared equity.",
        "Scale with ₹0 consulting retainers—every partner wins only when the business achieves profitable scale.",
      ],
    },
  ];

  return (
    <div className="my-8 space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E6E8EB] pb-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-[#F0F0FF] border border-[#E0E0FF] text-[#635BFF]">
            <Layers className="h-4 w-4" />
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540]">
            The 4-Phase Turnkey Action Plan
          </span>
        </div>
        <span className="text-xs font-mono text-[#627D98] bg-[#F6F9FC] px-2.5 py-1 rounded-md border border-[#E6E8EB] self-start sm:self-auto">
          Operational Roadmap Sequence
        </span>
      </div>

      {/* Connected Vertical Timeline Cards */}
      <div className="relative space-y-4 before:absolute before:inset-0 before:left-5 sm:before:left-7 before:w-0.5 before:bg-gradient-to-b before:from-[#635BFF] before:via-[#00D4B2] before:to-[#10B981] before:hidden md:before:block">
        {phases.map((phase) => (
          <div
            key={phase.step}
            className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-7 shadow-xs hover:border-[#CBD5E1] transition-all space-y-4 relative md:ml-12"
          >
            {/* Left step badge for desktop connector */}
            <div className="hidden md:flex absolute -left-12 top-6 w-8 h-8 rounded-full bg-[#0A2540] text-white font-mono text-xs font-bold items-center justify-center shadow-sm border-2 border-white ring-2 ring-[#E6E8EB]">
              {phase.step}
            </div>

            {/* Top Bar inside Card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F1F5F9] pb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl border ${phase.iconBg} shrink-0`}>
                  {phase.icon}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="md:hidden text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#0A2540] text-white">
                      PHASE {phase.step}
                    </span>
                    <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border ${phase.badgeBg} ${phase.badgeColor}`}>
                      {phase.timeframe}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0A2540] tracking-tight">
                    {phase.title}
                  </h3>
                </div>
              </div>

              <div className="text-xs text-[#627D98] font-medium sm:text-right max-w-xs">
                {phase.headline}
              </div>
            </div>

            {/* Action Items List */}
            <div className="space-y-2 pt-1">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#829AB1]">
                Core Operational Deliverables:
              </div>
              <div className="grid grid-cols-1 gap-2">
                {phase.actions.map((action, aIdx) => (
                  <div
                    key={aIdx}
                    className="flex items-start gap-3 rounded-lg bg-[#F8FAFC] border border-[#E6E8EB] p-3 text-xs sm:text-sm text-[#0A2540]"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
