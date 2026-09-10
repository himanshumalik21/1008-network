"use client";

import React, { useState } from "react";
import { Code2, Cpu, CheckCircle2, ArrowRight, Sparkles, Terminal } from "lucide-react";

export function DigitalSystemsGraphic() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      code: "POST /api/v1/orders/dispatch",
      label: "Customer B2B Order",
      status: "200 OK • 14ms",
      desc: "Validated digital PO with auto GST compliance check",
      tag: "API Gateway",
      tagColor: "#635BFF",
    },
    {
      code: "db.inventory.reserveStock()",
      label: "Lightweight ERP Ledger",
      status: "Synced • 0ms Delay",
      desc: "Real-time stock reservation across plant warehouses",
      tag: "Custom ERP",
      tagColor: "#00D4B2",
    },
    {
      code: "3pl.telemetry.createWaybill()",
      label: "Automated Logistics",
      status: "Dispatched",
      desc: "Instant barcode generation & transporter allocation",
      tag: "Supply Chain",
      tagColor: "#FF7043",
    },
    {
      code: "analytics.logGrossMargin(+32.4%)",
      label: "Executive P&L Dashboard",
      status: "Logged Realtime",
      desc: "Live contribution margin tracking without bloated agency code",
      tag: "Unit Economics",
      tagColor: "#059669",
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E6E8EB] p-4 sm:p-5 relative overflow-hidden font-sans select-none shadow-xs">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />

      {/* Terminal Window Header */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#E6E8EB]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
          </div>
          <span className="text-[11px] font-mono font-bold text-[#0A2540] ml-1">
            1008-engine // Lean Digital Architecture
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#635BFF] bg-[#F0F0FF] px-2 py-0.5 rounded border border-[#E0E0FF] font-bold">
          100% IP YOURS
        </span>
      </div>

      {/* Pipeline Steps */}
      <div className="relative z-10 my-3.5 space-y-2">
        {steps.map((step, idx) => {
          const isSelected = activeStep === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`w-full p-2.5 rounded-xl text-left transition-all border flex items-center justify-between gap-3 ${
                isSelected
                  ? "bg-white border-[#635BFF] shadow-xs"
                  : "bg-white/80 border-[#E6E8EB] hover:border-[#CBD5E1]"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-5 h-5 rounded-md bg-[#F0F0FF] text-[#635BFF] font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                  0{idx + 1}
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-[#0A2540] truncate flex items-center gap-2">
                    <span>{step.label}</span>
                    <span
                      className="text-[9px] font-mono px-1.5 py-0.2 rounded font-semibold"
                      style={{
                        backgroundColor: `${step.tagColor}15`,
                        color: step.tagColor,
                      }}
                    >
                      {step.tag}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-[#627D98] truncate">
                    {step.code}
                  </div>
                </div>
              </div>

              <span className="text-[10px] font-mono font-bold text-[#059669] shrink-0 bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#A7F3D0]">
                {step.status}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail Footer */}
      <div className="relative z-10 p-2.5 rounded-xl bg-white border border-[#E6E8EB] flex items-center justify-between text-xs shadow-2xs">
        <p className="text-[11px] text-[#425466]">
          {steps[activeStep].desc}
        </p>
        <span className="text-[10px] font-mono font-bold text-[#635BFF] shrink-0">
          Zero Bloat
        </span>
      </div>
    </div>
  );
}
