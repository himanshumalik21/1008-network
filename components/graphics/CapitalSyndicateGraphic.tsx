"use client";

import React, { useState } from "react";
import { ShieldCheck, Coins, Lock, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

export function CapitalSyndicateGraphic() {
  const [activeTier, setActiveTier] = useState(0);

  const pools = [
    {
      title: "Active Angel Syndicate",
      amount: "₹1.50 Cr Allocation",
      desc: "Curated HNIs, operators & industry leaders with domain expertise.",
      tickets: "₹5L – ₹25L Check Sizes",
      status: "Direct Co-Invest",
      color: "#635BFF",
      tag: "SAFE / CCD",
    },
    {
      title: "Non-Dilutive Credit Lines",
      amount: "₹1.00 Cr Facility",
      desc: "Working capital via RBI ULI & GST-backed collateral-free credit lines.",
      tickets: "Working Capital",
      status: "Zero Equity Dilution",
      color: "#059669",
      tag: "ULI Credit Rails",
    },
    {
      title: "Venture Orchestration & Advisory",
      amount: "Aligned Equity Stake",
      desc: "We facilitate end-to-end tooling, talent sourcing, vendor selection & venture strategy.",
      tickets: "Turnkey Orchestration",
      status: "Aligned Incentives",
      color: "#00D4B2",
      tag: "Venture Facilitation",
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-gradient-to-b from-[#FAFBFD] to-[#F3F6FA] border border-[#E2E8F0] p-4 sm:p-5 relative overflow-hidden font-sans select-none shadow-sm">
      {/* Visual Accent Glow */}
      <div className="absolute top-0 right-0 w-64 h-32 bg-gradient-to-b from-[#059669]/10 to-transparent blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#059669]" />
          </span>
          <span className="text-xs font-bold tracking-tight text-[#0A2540]">
            Syndicate Capital Stack
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#A7F3D0] font-bold flex items-center gap-1">
          <ShieldCheck className="h-3 w-3" /> Founder Control
        </span>
      </div>

      {/* Capital Structure Progress Bar */}
      <div className="relative z-10 my-3.5 p-3 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <div>
            <span className="text-[10px] font-mono text-[#627D98] uppercase font-bold">Syndicate Round Capacity</span>
            <div className="text-base sm:text-lg font-black text-[#0A2540]">₹2.50 Cr – ₹5.00 Cr+</div>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono text-[#059669] uppercase font-bold">Execution Model</span>
            <div className="text-xs font-bold text-[#059669]">De-risked & Vetted</div>
          </div>
        </div>

        {/* Multi-tier Allocation Visualizer */}
        <div className="h-2.5 w-full rounded-full bg-[#F1F5F9] overflow-hidden flex p-0.5 gap-0.5">
          <div className="h-full bg-[#635BFF] rounded-l-full w-[50%]" />
          <div className="h-full bg-[#059669] w-[30%]" />
          <div className="h-full bg-[#00D4B2] rounded-r-full w-[20%]" />
        </div>

        {/* Interactive Capital Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
          {pools.map((p, idx) => {
            const isSelected = activeTier === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTier(idx)}
                className={`p-2 rounded-lg text-left transition-all border ${
                  isSelected
                    ? "bg-[#FAFBFD] border-[#059669] ring-2 ring-[#059669]/15 shadow-xs"
                    : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1]"
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                  <span className="text-[10px] font-bold text-[#0A2540] truncate">{p.tag}</span>
                </div>
                <div className="text-[10px] text-[#627D98] font-mono font-medium truncate">{p.title}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Capital Tier Insight */}
      <div className="relative z-10 p-2.5 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-between text-xs shadow-xs gap-3">
        <div className="min-w-0">
          <div className="font-bold text-[#0A2540] text-[11px] truncate">
            {pools[activeTier].title} • {pools[activeTier].amount}
          </div>
          <div className="text-[10px] text-[#627D98] truncate">{pools[activeTier].desc}</div>
        </div>
        <span className="text-[10px] font-mono font-bold text-[#059669] shrink-0 bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#A7F3D0]">
          {pools[activeTier].status}
        </span>
      </div>
    </div>
  );
}
