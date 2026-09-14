"use client";

import React, { useState } from "react";
import { Code2, Database, BarChart3, CheckCircle2 } from "lucide-react";

export function DigitalSystemsGraphic() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const modules = [
    {
      icon: Code2,
      label: "Production MVP & APIs",
      stack: "Next.js • Node / Python • REST APIs",
      status: "Production Ready",
      statusColor: "emerald",
      detail: "Clean-code web & mobile apps with resilient API gateways, auth & payment rails.",
      tag: "Full-Stack Core",
    },
    {
      icon: Database,
      label: "Automated Cloud ERP",
      stack: "ERPNext • Postgres • Webhooks",
      status: "Auto-Synced",
      statusColor: "indigo",
      detail: "Real-time inventory management, vendor purchase orders, and automated GST e-Invoicing.",
      tag: "Operations Core",
    },
    {
      icon: BarChart3,
      label: "Unit Economics & Analytics",
      stack: "P&L Telemetry • CAC / LTV Logs",
      status: "Live Tracking",
      statusColor: "cyan",
      detail: "Automated contribution margin tracking and executive financial dashboards with zero bloat.",
      tag: "Executive View",
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E6E8EB] p-4 sm:p-5 relative overflow-hidden font-sans select-none shadow-xs">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />

      {/* Terminal Header */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#E6E8EB]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
          </div>
          <span className="text-[11px] font-mono font-bold text-[#0A2540] ml-1">
            1008-engine // Systems & Cloud Architecture
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#635BFF] bg-[#F0F0FF] px-2 py-0.5 rounded border border-[#E0E0FF] font-bold">
          100% IP YOURS
        </span>
      </div>

      {/* Architecture Modules */}
      <div className="relative z-10 my-3.5 space-y-2">
        {modules.map((mod, idx) => {
          const isSelected = activeStep === idx;
          const Icon = mod.icon;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`w-full p-2.5 sm:p-3 rounded-xl text-left transition-all border flex items-center justify-between gap-3 ${
                isSelected
                  ? "bg-white border-[#635BFF] shadow-xs ring-1 ring-[#635BFF]/20"
                  : "bg-white/80 border-[#E6E8EB] hover:border-[#CBD5E1] hover:bg-white"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border ${
                    isSelected
                      ? "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]"
                      : "bg-[#F8FAFC] text-[#627D98] border-[#E6E8EB]"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#0A2540] truncate">
                      {mod.label}
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded font-semibold bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0] shrink-0">
                      {mod.tag}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-[#627D98] truncate">
                    {mod.stack}
                  </div>
                </div>
              </div>

              <span
                className={`text-[10px] font-mono font-bold shrink-0 px-2 py-0.5 rounded border ${
                  mod.statusColor === "emerald"
                    ? "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]"
                    : mod.statusColor === "indigo"
                    ? "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]"
                    : "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]"
                }`}
              >
                {mod.status}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Module Detail */}
      <div className="relative z-10 p-2.5 rounded-xl bg-white border border-[#E6E8EB] flex items-center justify-between text-xs shadow-2xs gap-3">
        <p className="text-[11px] text-[#425466] leading-relaxed truncate">
          {modules[activeStep].detail}
        </p>
        <span className="text-[10px] font-mono font-bold text-[#059669] shrink-0 bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#A7F3D0] flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3" /> Day 1 Handover
        </span>
      </div>
    </div>
  );
}
