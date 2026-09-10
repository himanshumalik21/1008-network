"use client";

import React from "react";
import {
  TrendingDown,
  AlertTriangle,
  Flame,
  ArrowDown,
  Wallet,
  Code2,
  Megaphone,
  Scale,
  XCircle,
  Clock,
  Zap,
} from "lucide-react";

export function FounderCashDrainGraphic() {
  return (
    <div className="my-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 text-[#0A2540] shadow-xs relative overflow-hidden">
      {/* Subtle brand gradient background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#635BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF7043]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E6E8EB] pb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#FFF4ED] border border-[#FFD8C2] text-[#FF7043]">
              <Flame className="h-4 w-4" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540]">
              The Startup Cash Drain Breakdown
            </span>
          </div>
          <span className="text-xs font-mono text-[#627D98] flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-md border border-[#E6E8EB]">
            <Clock className="h-3.5 w-3.5 text-[#635BFF]" />
            Typical Trajectory: Months 1 to 6
          </span>
        </div>

        {/* Step 1: Initial Capital */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md rounded-xl bg-white border-2 border-[#635BFF]/20 p-4 text-center shadow-xs">
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#635BFF] font-bold uppercase tracking-wider mb-1">
              <Wallet className="h-4 w-4" />
              <span>Initial Capital Base</span>
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-[#0A2540]">
              Founder Savings / Seed Pool: <span className="text-[#635BFF]">₹15L – ₹30L</span>
            </div>
          </div>

          <div className="my-2.5 flex flex-col items-center text-[#627D98]">
            <div className="w-0.5 h-5 bg-[#CBD5E1]" />
            <ArrowDown className="h-4 w-4 text-[#635BFF] -mt-1" />
          </div>
        </div>

        {/* Step 2: The Three Outflows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Outflow 1 */}
          <div className="rounded-xl bg-white border border-[#E6E8EB] p-4 space-y-2 hover:border-[#CBD5E1] transition-all shadow-xs">
            <div className="flex items-center justify-between">
              <span className="p-1.5 rounded-md bg-[#FFF4ED] text-[#FF7043]">
                <Code2 className="h-4 w-4" />
              </span>
              <span className="text-xs font-mono font-bold text-[#C2410C] bg-[#FFF4ED] px-2 py-0.5 rounded border border-[#FFD8C2]">
                - ₹6L to ₹12L
              </span>
            </div>
            <h4 className="text-sm font-bold text-[#0A2540]">Dev Agency (Outsourced MVP)</h4>
            <p className="text-xs text-[#425466] leading-relaxed">
              Rigid, undocumented code with zero knowledge transfer. Billed at high hourly rates for minor bug fixes.
            </p>
          </div>

          {/* Outflow 2 */}
          <div className="rounded-xl bg-white border border-[#E6E8EB] p-4 space-y-2 hover:border-[#CBD5E1] transition-all shadow-xs">
            <div className="flex items-center justify-between">
              <span className="p-1.5 rounded-md bg-[#FFF4ED] text-[#FF7043]">
                <Megaphone className="h-4 w-4" />
              </span>
              <span className="text-xs font-mono font-bold text-[#C2410C] bg-[#FFF4ED] px-2 py-0.5 rounded border border-[#FFD8C2]">
                - ₹3L to ₹6L
              </span>
            </div>
            <h4 className="text-sm font-bold text-[#0A2540]">Digital Marketing Retainers</h4>
            <p className="text-xs text-[#425466] leading-relaxed">
              ₹50k–₹1.5L/month in fixed non-performance fees + ad spend. Generates vanity traffic with zero customer retention.
            </p>
          </div>

          {/* Outflow 3 */}
          <div className="rounded-xl bg-white border border-[#E6E8EB] p-4 space-y-2 hover:border-[#CBD5E1] transition-all shadow-xs">
            <div className="flex items-center justify-between">
              <span className="p-1.5 rounded-md bg-[#FFF4ED] text-[#FF7043]">
                <Scale className="h-4 w-4" />
              </span>
              <span className="text-xs font-mono font-bold text-[#C2410C] bg-[#FFF4ED] px-2 py-0.5 rounded border border-[#FFD8C2]">
                - ₹1.5L to ₹3L
              </span>
            </div>
            <h4 className="text-sm font-bold text-[#0A2540]">Advisory & Retainers</h4>
            <p className="text-xs text-[#425466] leading-relaxed">
              Theoretical advice from sideline consultants with zero ground operations or manufacturing execution.
            </p>
          </div>
        </div>

        {/* Step 3: The Outcome */}
        <div className="flex flex-col items-center">
          <div className="my-2.5 flex flex-col items-center text-[#627D98]">
            <div className="w-0.5 h-5 bg-[#CBD5E1]" />
            <ArrowDown className="h-4 w-4 text-[#FF7043] -mt-1" />
          </div>

          <div className="w-full rounded-xl bg-[#FFF8F5] border border-[#FFD8C2] p-5 text-center shadow-xs space-y-1">
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#C2410C] font-bold uppercase tracking-wider">
              <XCircle className="h-4 w-4 text-[#FF7043]" />
              <span>Month 6 Reality Check</span>
            </div>
            <div className="text-base sm:text-lg font-bold text-[#0A2540]">
              ₹0 Cash Remaining • Zero Customer Retention • Founder Exhaustion
            </div>
            <div className="text-xs text-[#627D98] font-sans pt-1 max-w-xl mx-auto">
              <strong>The Lesson:</strong> 82% of early-stage businesses fail because capital was drained on third-party retainers before establishing product-market fit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
