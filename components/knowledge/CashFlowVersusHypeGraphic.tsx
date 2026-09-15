"use client";

import React from "react";
import {
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  Flame,
  CheckCircle2,
  XCircle,
  ShoppingBag,
  Store,
  DollarSign,
  Layers,
  ArrowRight,
} from "lucide-react";

export function CashFlowVersusHypeGraphic() {
  return (
    <div className="my-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-5 sm:p-7 text-[#0A2540] shadow-xs relative overflow-hidden font-sans">
      {/* Background Subtle Gradient Glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#635BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#059669]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E6E8EB] pb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#F0F0FF] border border-[#E0E0FF] text-[#635BFF]">
              <Layers className="h-4 w-4" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540]">
              Strategic Architecture: The Glamour Trap vs. Cash-Flow Reality
            </span>
          </div>
          <span className="text-xs font-mono text-[#627D98] bg-white px-2.5 py-1 rounded-md border border-[#E6E8EB]">
            Unit Economic Breakdown
          </span>
        </div>

        {/* 2-Column Comparison Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left Column: The Hype Trap */}
          <div className="rounded-2xl bg-white border-2 border-[#FF7043]/30 p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-xs relative overflow-hidden">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-[#FFF4ED] text-[#C2410C] border border-[#FFD8C2] flex items-center gap-1">
                  <XCircle className="h-3.5 w-3.5 text-[#FF7043]" /> THE GLAMOUR TRAP
                </span>
                <span className="text-[11px] font-mono font-bold text-[#FF7043]">50%+ CAC Burn</span>
              </div>

              <h4 className="text-base font-extrabold text-[#0A2540]">
                Discretionary Wants & Online Hype
              </h4>
              <p className="text-xs text-[#627D98] leading-relaxed">
                Niche artisanal coffee, luxury streetwear, or designer lifestyle apps reliant entirely on paid ad clicks.
              </p>

              <div className="space-y-2 pt-2 text-xs">
                <div className="p-2.5 rounded-lg bg-[#FFF8F5] border border-[#FFD8C2] text-[#425466] space-y-1">
                  <div className="flex items-center justify-between font-bold text-[#0A2540]">
                    <span>Meta / Google CAC:</span>
                    <span className="text-[#C2410C]">50% - 65% of Sale</span>
                  </div>
                  <div className="text-[11px] text-[#627D98]">Ad fatigue causes customer acquisition costs to spike continuously.</div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#FFF8F5] border border-[#FFD8C2] text-[#425466] space-y-1">
                  <div className="flex items-center justify-between font-bold text-[#0A2540]">
                    <span>Distribution Rails:</span>
                    <span className="text-[#C2410C]">100% Online Squeeze</span>
                  </div>
                  <div className="text-[11px] text-[#627D98]">Zero presence in Kiranas, Tier-2 stockists, or physical distribution.</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#F1F5F9] text-[11px] font-mono font-bold text-[#C2410C] bg-[#FFF4ED]/50 p-2.5 rounded-lg border border-[#FFD8C2]/50 flex items-center gap-1.5">
              <TrendingDown className="h-4 w-4 shrink-0 text-[#FF7043]" />
              <span>Result: Hard growth ceiling at ₹5L–₹10L/mo with severe cash bleed</span>
            </div>
          </div>

          {/* Right Column: The Real Cash-Flow Enterprise */}
          <div className="rounded-2xl bg-white border-2 border-[#059669]/30 p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-xs relative overflow-hidden">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0] flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#059669]" /> THE CASH-FLOW MODEL
                </span>
                <span className="text-[11px] font-mono font-bold text-[#059669]">60%+ Gross Margin</span>
              </div>

              <h4 className="text-base font-extrabold text-[#0A2540]">
                High-Utility Essentials & General Trade
              </h4>
              <p className="text-xs text-[#627D98] leading-relaxed">
                Industrial packaging, daily food ingredients, electrical consumables, and contract batch manufacturing.
              </p>

              <div className="space-y-2 pt-2 text-xs">
                <div className="p-2.5 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] text-[#425466] space-y-1">
                  <div className="flex items-center justify-between font-bold text-[#0A2540]">
                    <span>Customer Repeat Rate:</span>
                    <span className="text-[#059669]">High Organic Velocity</span>
                  </div>
                  <div className="text-[11px] text-[#627D98]">Customers order repeatedly out of daily operational necessity.</div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] text-[#425466] space-y-1">
                  <div className="flex items-center justify-between font-bold text-[#0A2540]">
                    <span>Distribution Rails:</span>
                    <span className="text-[#059669]">60% Offline GT + 40% Digital</span>
                  </div>
                  <div className="text-[11px] text-[#627D98]">Regional Kiranas, B2B wholesale dealers & Cloud ERP beat tracking.</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#F1F5F9] text-[11px] font-mono font-bold text-[#059669] bg-[#ECFDF5]/50 p-2.5 rounded-lg border border-[#A7F3D0]/50 flex items-center gap-1.5">
              <TrendingUp className="h-4 w-4 shrink-0 text-[#059669]" />
              <span>Result: Self-sustaining profitability, positive working capital & scalable exit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
