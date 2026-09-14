"use client";

import React, { useState } from "react";
import { Code2, Database, BarChart3, CheckCircle2, Lock, Layers } from "lucide-react";

export function TechArchitectureGraphic() {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      icon: Code2,
      title: "Custom Software & Sourced Dev Talent",
      stack: "Next.js • React Native • Vetted Hires",
      status: "Sourced & Deployed",
      metric: "Direct Hires",
      detail: "We design the architecture, hire vetted engineers directly for your entity, and manage milestone delivery.",
      color: "#00D4B2",
    },
    {
      icon: Database,
      title: "Configured Cloud ERP & Tools",
      stack: "ERPNext • Frappe • GST E-Invoicing Tools",
      status: "Configured Stack",
      metric: "Cloud Tools",
      detail: "We configure and customize open-source ERP systems (ERPNext) and operational software tailored to your workflow.",
      color: "#635BFF",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence & P&L Dashboards",
      stack: "Automated Reporting • Margin Telemetry Tools",
      status: "Live Visibility",
      metric: "Analytics Stack",
      detail: "We install automated financial reporting tools so founders and investors have real-time visibility into unit economics.",
      color: "#059669",
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-gradient-to-b from-[#FAFBFD] to-[#F3F6FA] border border-[#E2E8F0] p-4 sm:p-5 relative overflow-hidden font-sans select-none shadow-sm">
      {/* Visual Accent Glow */}
      <div className="absolute top-0 right-0 w-64 h-32 bg-gradient-to-b from-[#00D4B2]/10 to-transparent blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4B2] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D4B2]" />
          </span>
          <span className="text-xs font-bold tracking-tight text-[#0A2540]">
            Digital Engine Architecture
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#635BFF] bg-[#F0F0FF] px-2 py-0.5 rounded border border-[#E0E0FF] font-bold">
          100% IP YOURS
        </span>
      </div>

      {/* Stack Layers List */}
      <div className="relative z-10 my-3.5 space-y-2">
        {layers.map((layer, idx) => {
          const isSelected = activeLayer === idx;
          const Icon = layer.icon;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveLayer(idx)}
              className={`w-full p-2.5 sm:p-3 rounded-xl text-left transition-all border flex items-center justify-between gap-3 ${
                isSelected
                  ? "bg-white border-[#00A389] shadow-sm ring-2 ring-[#00D4B2]/20"
                  : "bg-white/80 border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-white"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? "bg-[#E6FFFA] text-[#00A389] border border-[#B2F5EA]"
                      : "bg-[#F8FAFC] text-[#627D98] border border-[#E2E8F0]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-[#0A2540] truncate">
                    {layer.title}
                  </div>
                  <div className="text-[10px] font-mono text-[#627D98] truncate">
                    {layer.stack}
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="text-[10px] font-mono font-bold text-[#059669]">
                  {layer.metric}
                </div>
                <div className="text-[9px] font-mono text-[#627D98]">
                  {layer.status}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Layer Detail */}
      <div className="relative z-10 p-2.5 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-between text-xs shadow-xs gap-3">
        <p className="text-[11px] text-[#425466] leading-relaxed truncate sm:whitespace-normal font-medium">
          {layers[activeLayer].detail}
        </p>
        <span className="text-[10px] font-mono font-bold text-[#00A389] shrink-0 bg-[#E6FFFA] px-2 py-0.5 rounded border border-[#B2F5EA] flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3" /> Day 1 Code Handover
        </span>
      </div>
    </div>
  );
}
