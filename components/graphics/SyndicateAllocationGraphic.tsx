"use client";

import React, { useState } from "react";
import { ShieldCheck, TrendingUp, Lock, CheckCircle2, DollarSign } from "lucide-react";

export function SyndicateAllocationGraphic() {
  const [selectedTier, setSelectedTier] = useState<number>(0);

  const tiers = [
    {
      title: "Family Offices & HNWIs",
      share: "45%",
      amount: "₹1.35 Cr",
      tickets: "₹25L - ₹50L Tickets",
      color: "#635BFF",
      bg: "bg-[#635BFF]",
    },
    {
      title: "Active Angel Syndicate",
      share: "35%",
      amount: "₹1.05 Cr",
      tickets: "₹5L - ₹15L Tickets",
      color: "#00D4B2",
      bg: "bg-[#00D4B2]",
    },
    {
      title: "1008 Studio Sweat Equity",
      share: "20%",
      amount: "₹0.60 Cr Equivalent",
      tickets: "Turnkey Execution",
      color: "#059669",
      bg: "bg-[#059669]",
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E6E8EB] p-4 sm:p-5 relative overflow-hidden font-sans select-none shadow-xs">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#E6E8EB]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#635BFF] animate-pulse" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0A2540]">
            Cap Table & Seed Allocation Matrix
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#A7F3D0] font-bold flex items-center gap-1">
          <ShieldCheck className="h-3 w-3" /> SAFE / CCD
        </span>
      </div>

      {/* Round Progress Container */}
      <div className="relative z-10 my-4 p-4 rounded-xl bg-white border border-[#E6E8EB] space-y-3 shadow-2xs">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono font-bold text-[#829AB1] uppercase">SYNDICATED ROUND</span>
            <div className="text-xl font-extrabold text-[#0A2540]">₹3,00,00,000</div>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono font-bold text-[#059669] uppercase">COMMITTED</span>
            <div className="text-sm font-extrabold text-[#059669]">80% Allocated</div>
          </div>
        </div>

        {/* Multi-Segment Color Progress Bar */}
        <div className="h-3 w-full rounded-full bg-[#E6E8EB] overflow-hidden flex p-0.5 gap-0.5">
          <div className="h-full bg-[#635BFF] rounded-l-full w-[45%]" title="Family Offices: 45%" />
          <div className="h-full bg-[#00D4B2] w-[35%]" title="Angel Syndicate: 35%" />
          <div className="h-full bg-[#059669] rounded-r-full w-[20%]" title="1008 Studio: 20%" />
        </div>

        {/* Segment Selectors */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          {tiers.map((t, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedTier(idx)}
              className={`p-2 rounded-lg text-left transition-all border ${
                selectedTier === idx
                  ? "bg-[#F8FAFC] border-[#635BFF] shadow-2xs"
                  : "bg-white border-[#E6E8EB] hover:border-[#CBD5E1]"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className={`w-2 h-2 rounded-full ${t.bg}`} />
                <span className="text-[10px] font-bold text-[#0A2540] truncate">{t.share}</span>
              </div>
              <div className="text-[10px] text-[#627D98] font-mono font-semibold truncate">{t.title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Tier Telemetry */}
      <div className="relative z-10 p-3 rounded-xl bg-white border border-[#E6E8EB] flex items-center justify-between shadow-2xs text-xs">
        <div className="space-y-0.5">
          <div className="font-bold text-[#0A2540]">{tiers[selectedTier].title}</div>
          <div className="text-[11px] text-[#627D98]">{tiers[selectedTier].tickets} • {tiers[selectedTier].amount}</div>
        </div>
        <span className="text-[10px] font-mono font-bold text-[#059669] flex items-center gap-1 bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#A7F3D0]">
          <Lock className="h-3 w-3" /> Founder Control Preserved
        </span>
      </div>
    </div>
  );
}
