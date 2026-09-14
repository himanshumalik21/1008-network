"use client";

import React, { useState } from "react";
import { Factory, Truck, CheckCircle2, Zap, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

export function OperationsVelocityGraphic() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      icon: Factory,
      title: "Batch Manufacturing & OEM",
      sub: "Supplier Vetted • Pre-Negotiated MOQs",
      badge: "Production Ready",
      badgeColor: "indigo",
      metric: "30-Day Go-Live",
      highlight: "Direct contract manufacturing partnerships with institutional tooling and ingredient locking.",
    },
    {
      icon: Truck,
      title: "3PL Warehousing & Logistics",
      sub: "Multi-City Hubs • Automated Waybills",
      badge: "Same-Day Dispatch",
      badgeColor: "emerald",
      metric: "99.4% Fulfillment",
      highlight: "Integrated pan-India fulfillment centers with automated courier allocation and inventory sync.",
    },
    {
      icon: Cpu,
      title: "Cloud ERP & GST Pipelines",
      sub: "Real-Time Ledger • Automated E-Invoicing",
      badge: "Zero Manual Entry",
      badgeColor: "cyan",
      metric: "Auto Reconciled",
      highlight: "Custom Frappe/ERPNext pipelines syncing orders, vendor payables, and GST compliance seamlessly.",
    },
    {
      icon: ShieldCheck,
      title: "Statutory & Governance Lock",
      sub: "FSSAI / CDSCO / BIS • IP Protection",
      badge: "100% Compliant",
      badgeColor: "amber",
      metric: "Risk Shielded",
      highlight: "Complete regulatory clearance, trademark assignments, and rock-solid corporate governance.",
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-gradient-to-b from-[#FAFBFD] to-[#F3F6FA] border border-[#E2E8F0] p-4 sm:p-5 relative overflow-hidden font-sans select-none shadow-sm">
      {/* Visual Accent Glow */}
      <div className="absolute top-0 right-0 w-64 h-32 bg-gradient-to-b from-[#635BFF]/10 to-transparent blur-2xl pointer-events-none" />

      {/* Top Header & Live Telemetry Badge */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
          </span>
          <span className="text-xs font-bold tracking-tight text-[#0A2540]">
            Turnkey Operations Engine
          </span>
          <span className="text-[10px] font-mono text-[#627D98] bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">
            Live Workflow
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-semibold text-[#059669]">
          <span className="flex items-center gap-1">
            <Zap className="h-3.5 w-3.5 text-[#059669]" /> Fast-Track Launch
          </span>
        </div>
      </div>

      {/* Interactive Step Timeline */}
      <div className="relative z-10 my-3.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {stages.map((stage, idx) => {
          const isSelected = activeStage === idx;
          const Icon = stage.icon;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between gap-2 relative group ${
                isSelected
                  ? "bg-white border-[#635BFF] shadow-md ring-2 ring-[#635BFF]/15"
                  : "bg-white/80 border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? "bg-[#635BFF] text-white"
                        : "bg-[#F0F0FF] text-[#635BFF] group-hover:bg-[#635BFF] group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-[#0A2540] truncate">
                      {stage.title}
                    </div>
                    <div className="text-[10px] text-[#627D98] truncate">
                      {stage.sub}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-[#F1F5F9] text-[10px] font-mono">
                <span className="font-bold text-[#059669]">{stage.metric}</span>
                <span
                  className={`px-1.5 py-0.5 rounded font-bold ${
                    stage.badgeColor === "indigo"
                      ? "bg-[#F0F0FF] text-[#635BFF]"
                      : stage.badgeColor === "emerald"
                      ? "bg-[#ECFDF5] text-[#059669]"
                      : stage.badgeColor === "cyan"
                      ? "bg-[#E6FFFA] text-[#00A389]"
                      : "bg-[#FFF4ED] text-[#F4511E]"
                  }`}
                >
                  {stage.badge}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Insight Bar */}
      <div className="relative z-10 p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 min-w-0">
          <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0" />
          <p className="text-[11px] text-[#425466] leading-relaxed font-medium truncate sm:whitespace-normal">
            {stages[activeStage].highlight}
          </p>
        </div>
        <span className="text-[10px] font-mono font-bold text-[#635BFF] shrink-0 bg-[#F0F0FF] px-2 py-0.5 rounded border border-[#E0E0FF]">
          Execution Standard
        </span>
      </div>
    </div>
  );
}
