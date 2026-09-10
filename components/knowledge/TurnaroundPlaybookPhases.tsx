"use client";

import React, { useState } from "react";
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
  phaseNumber: number;
  timeframe: string;
  title: string;
  shortDesc: string;
  badgeColor: string;
  badgeBg: string;
  iconBg: string;
  icon: React.ReactNode;
  actions: string[];
}

export function TurnaroundPlaybookPhases() {
  const [activePhase, setActivePhase] = useState<number>(1);

  const phases: PhaseData[] = [
    {
      phaseNumber: 1,
      timeframe: "Days 1–7",
      title: "Immediate Cash Triage & Retainer Freeze",
      shortDesc: "Stop the financial drain and calculate true unit contribution margins.",
      badgeColor: "text-[#C2410C]",
      badgeBg: "bg-[#FFF4ED] border-[#FFD8C2]",
      iconBg: "bg-[#FFF4ED] border-[#FFD8C2] text-[#FF7043]",
      icon: <ShieldAlert className="h-5 w-5 text-[#FF7043]" />,
      actions: [
        "Terminate all non-performance marketing, PR, and advisory retainers immediately.",
        "Calculate True Contribution Margin (Revenue minus direct COGS, payment gateway fees, and freight).",
        "Strip monthly overhead to pure essentials: cloud servers, essential raw materials, and core stipends.",
      ],
    },
    {
      phaseNumber: 2,
      timeframe: "Days 8–21",
      title: "Cap Table & Governance Restructuring",
      shortDesc: "Fix broken founder equity splits and secure corporate IP ownership.",
      badgeColor: "text-[#635BFF]",
      badgeBg: "bg-[#F0F0FF] border-[#E0E0FF]",
      iconBg: "bg-[#F0F0FF] border-[#E0E0FF] text-[#635BFF]",
      icon: <FileSpreadsheet className="h-5 w-5 text-[#635BFF]" />,
      actions: [
        "Institute standard 4-year equity reverse vesting with a 1-year cliff for all active founders.",
        "Clean up inactive equity holdings through formal buyback or sweat equity cancellation agreements.",
        "Execute explicit IP Assignment Agreements ensuring code, patents, brand designs, and domains belong to the entity.",
      ],
    },
    {
      phaseNumber: 3,
      timeframe: "Days 22–45",
      title: "Day-1 Digital Cloud ERP Backbone",
      shortDesc: "Eliminate spreadsheet chaos with centralized automated enterprise operations.",
      badgeColor: "text-[#007A66]",
      badgeBg: "bg-[#E6FFFA] border-[#B2F5EA]",
      iconBg: "bg-[#E6FFFA] border-[#B2F5EA] text-[#00D4B2]",
      icon: <Database className="h-5 w-5 text-[#007A66]" />,
      actions: [
        "Deploy a customized cloud ERP (Frappe/ERPNext or tailored Odoo core).",
        "Centralize billing, vendor ledgers, warehouse inventory tracking, and CRM into one single dashboard.",
        "Automate customer order tracking and fulfillment alerts via WhatsApp Business API workflows.",
      ],
    },
    {
      phaseNumber: 4,
      timeframe: "Ongoing Scale",
      title: "Shared-Equity Co-Building & Capital Alignment",
      shortDesc: "Scale with true operators on the ground with zero consulting fees.",
      badgeColor: "text-[#047857]",
      badgeBg: "bg-[#ECFDF5] border-[#A7F3D0]",
      iconBg: "bg-[#ECFDF5] border-[#A7F3D0] text-[#10B981]",
      icon: <Rocket className="h-5 w-5 text-[#047857]" />,
      actions: [
        "Partner with vetted operational and technical co-founders through dedicated equity pools.",
        "Align with 1008 Network for execution muscle, manufacturing setup, and seed capital for shared equity.",
        "Scale with ₹0 consulting retainers—every partner wins only when the business achieves profitable scale.",
      ],
    },
  ];

  return (
    <div className="my-10 space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E6E8EB] pb-4">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-[#F0F0FF] border border-[#E0E0FF] text-[#635BFF]">
            <Layers className="h-4 w-4" />
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540]">
            The 4-Phase Turnkey Framework
          </span>
        </div>
        <span className="text-xs font-mono text-[#627D98] bg-[#F6F9FC] px-2.5 py-1 rounded-md border border-[#E6E8EB]">
          Venture Architecture Sequence
        </span>
      </div>

      {/* Top Interactive Phase Step Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {phases.map((phase) => {
          const isSelected = activePhase === phase.phaseNumber;
          return (
            <button
              key={phase.phaseNumber}
              onClick={() => setActivePhase(phase.phaseNumber)}
              className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between space-y-2 ${
                isSelected
                  ? "bg-white border-[#635BFF] shadow-sm ring-2 ring-[#635BFF]/15"
                  : "bg-[#F8FAFC] border-[#E6E8EB] hover:bg-white hover:border-[#CBD5E1]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${phase.badgeBg} ${phase.badgeColor}`}
                >
                  PHASE {phase.phaseNumber}
                </span>
                <span className="text-[11px] font-mono text-[#627D98]">
                  {phase.timeframe}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0A2540] line-clamp-1">
                {phase.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Phase Cards Display */}
      <div className="space-y-4 pt-2">
        {phases.map((phase) => {
          const isSelected = activePhase === phase.phaseNumber;
          return (
            <div
              key={phase.phaseNumber}
              onClick={() => setActivePhase(phase.phaseNumber)}
              className={`rounded-2xl border p-6 sm:p-7 transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-white border-[#635BFF] shadow-sm ring-1 ring-[#635BFF]/15"
                  : "bg-white border-[#E6E8EB] hover:border-[#CBD5E1] shadow-xs"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F1F5F9] pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${phase.iconBg}`}>
                    {phase.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#635BFF] uppercase tracking-wider">
                        Phase {phase.phaseNumber}
                      </span>
                      <span className="text-xs text-[#CBD5E1]">•</span>
                      <span className="text-xs font-mono font-semibold text-[#627D98] flex items-center gap-1">
                        <Clock className="h-3 w-3 text-[#635BFF]" /> {phase.timeframe}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-extrabold text-[#0A2540]">
                      {phase.title}
                    </h4>
                  </div>
                </div>

                <span
                  className={`self-start sm:self-auto text-xs font-mono font-semibold px-2.5 py-1 rounded-md border ${phase.badgeBg} ${phase.badgeColor}`}
                >
                  {phase.shortDesc}
                </span>
              </div>

              {/* Action Checkpoints */}
              <div className="space-y-2.5">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#829AB1]">
                  Action Items & Deliverables:
                </div>
                <div className="grid grid-cols-1 gap-2.5">
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
          );
        })}
      </div>
    </div>
  );
}
