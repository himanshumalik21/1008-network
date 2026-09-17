"use client";

import React, { useState } from "react";
import {
  Users2,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Clock,
  ShieldCheck,
  Sparkles,
  Layers,
  Scale,
  Percent,
  TrendingDown,
  TrendingUp,
  FileCheck2,
  Lock,
} from "lucide-react";

export function CoFounderEquitySplitGraphic() {
  const [activeTab, setActiveTab] = useState<"comparison" | "vesting_timeline">("comparison");

  return (
    <div className="my-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 text-[#0A2540] shadow-xs relative overflow-hidden font-sans">
      {/* Subtle brand gradient background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#635BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF7043]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Header Title & Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6E8EB] pb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#F0F0FF] border border-[#E0E0FF] text-[#635BFF]">
              <Scale className="h-4 w-4" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540] block">
                Cap Table Architecture: Handshake Split vs. Institutional Governance
              </span>
              <span className="text-[11px] text-[#627D98]">The 50/50 Dead Equity Trap vs. 4-Year Milestone Vesting</span>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#E6E8EB] self-start sm:self-auto shadow-2xs">
            <button
              onClick={() => setActiveTab("comparison")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "comparison"
                  ? "bg-[#635BFF] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540]"
              }`}
            >
              Side-by-Side Model
            </button>
            <button
              onClick={() => setActiveTab("vesting_timeline")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "vesting_timeline"
                  ? "bg-[#635BFF] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540]"
              }`}
            >
              4-Year Vesting Schedule
            </button>
          </div>
        </div>

        {activeTab === "comparison" ? (
          /* Side-by-Side Comparison Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* The 50/50 Handshake Trap */}
            <div className="rounded-2xl bg-white border-2 border-[#FF7043]/30 p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-xs relative overflow-hidden">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-[#FFF4ED] text-[#C2410C] border border-[#FFD8C2] flex items-center gap-1">
                    <XCircle className="h-3.5 w-3.5 text-[#FF7043]" /> THE HANDSHAKE TRAP
                  </span>
                  <span className="text-[11px] font-mono font-bold text-[#FF7043]">70%+ Deal Collapse</span>
                </div>

                <h4 className="text-base font-extrabold text-[#0A2540]">
                  50/50 Upfront Allotment Without Vesting
                </h4>
                <p className="text-xs text-[#627D98] leading-relaxed">
                  Equal shares stamped at incorporation based on an informal friendly agreement. No cliff, no reverse vesting, and no buyback clause.
                </p>

                <div className="space-y-2 pt-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#FFF8F5] border border-[#FFD8C2] text-[#425466] space-y-1">
                    <div className="flex items-center justify-between font-bold text-[#0A2540]">
                      <span>Founder Quits at Month 8:</span>
                      <span className="text-[#C2410C]">Keeps 50% Permanent Equity</span>
                    </div>
                    <div className="text-[11px] text-[#627D98]">Leaves for corporate job but cannot be legally forced to return unearned shares.</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#FFF8F5] border border-[#FFD8C2] text-[#425466] space-y-1">
                    <div className="flex items-center justify-between font-bold text-[#0A2540]">
                      <span>Angel / Seed Due Diligence:</span>
                      <span className="text-[#C2410C]">Instantly Un-Investable</span>
                    </div>
                    <div className="text-[11px] text-[#627D98]">Investors refuse to fund a cap table where 50% is held by an inactive ex-partner.</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#FFF8F5] border border-[#FFD8C2] text-[#425466] space-y-1">
                    <div className="flex items-center justify-between font-bold text-[#0A2540]">
                      <span>Source Code & IP:</span>
                      <span className="text-[#C2410C]">Trapped in Personal GitHub</span>
                    </div>
                    <div className="text-[11px] text-[#627D98]">Departing founder holds code and domain hostage during exit disputes.</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F1F5F9] text-[11px] font-mono font-bold text-[#C2410C] bg-[#FFF4ED]/50 p-2.5 rounded-lg border border-[#FFD8C2]/50 flex items-center gap-1.5">
                <TrendingDown className="h-4 w-4 shrink-0 text-[#FF7043]" />
                <span>Result: Toxic dead equity, founder burnout, and venture shutdown</span>
              </div>
            </div>

            {/* The 1008 Governance Architecture */}
            <div className="rounded-2xl bg-white border-2 border-[#059669]/30 p-5 sm:p-6 flex flex-col justify-between space-y-4 shadow-xs relative overflow-hidden">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0] flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#059669]" /> 1008 GOVERNANCE MODEL
                  </span>
                  <span className="text-[11px] font-mono font-bold text-[#059669]">Institutional Cap Table</span>
                </div>

                <h4 className="text-base font-extrabold text-[#0A2540]">
                  Dynamic Weighting + 4-Yr Vesting with 1-Yr Cliff
                </h4>
                <p className="text-xs text-[#627D98] leading-relaxed">
                  Equity calculated mathematically across commitment and capital. Backed by legally binding SHA with reverse vesting and 100% IP assignment.
                </p>

                <div className="space-y-2 pt-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] text-[#425466] space-y-1">
                    <div className="flex items-center justify-between font-bold text-[#0A2540]">
                      <span>Founder Quits at Month 8:</span>
                      <span className="text-[#059669]">0% Equity Vested (Cliff Active)</span>
                    </div>
                    <div className="text-[11px] text-[#627D98]">100% of unvested shares bought back at nominal face value (₹10) into pool.</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] text-[#425466] space-y-1">
                    <div className="flex items-center justify-between font-bold text-[#0A2540]">
                      <span>Angel / Seed Due Diligence:</span>
                      <span className="text-[#059669]">Clean Institutional Audit</span>
                    </div>
                    <div className="text-[11px] text-[#627D98]">Investors see protected cap table with 10%–15% reserved ESOP pool.</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] text-[#425466] space-y-1">
                    <div className="flex items-center justify-between font-bold text-[#0A2540]">
                      <span>Source Code & IP:</span>
                      <span className="text-[#059669]">100% Owned by Entity</span>
                    </div>
                    <div className="text-[11px] text-[#627D98]">Executed Day-1 IP Assignment guarantees company continuity and zero lock-in.</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F1F5F9] text-[11px] font-mono font-bold text-[#059669] bg-[#ECFDF5]/50 p-2.5 rounded-lg border border-[#A7F3D0]/50 flex items-center gap-1.5">
                <TrendingUp className="h-4 w-4 shrink-0 text-[#059669]" />
                <span>Result: De-risked co-founder alignment, clean cap table & smooth seed funding</span>
              </div>
            </div>
          </div>
        ) : (
          /* 4-Year Vesting Schedule Breakdown */
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
              {/* Year 1 */}
              <div className="rounded-xl bg-white border border-[#635BFF]/30 p-4 space-y-2 shadow-2xs relative">
                <div className="absolute -top-2.5 right-2">
                  <span className="text-[9px] font-mono font-bold bg-[#635BFF] text-white px-1.5 py-0.5 rounded">
                    1-Year Cliff Gate
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center mx-auto font-mono font-bold text-xs">
                  Yr 1
                </div>
                <h4 className="font-bold text-xs text-[#0A2540]">25% Vests at Month 12</h4>
                <p className="text-[11px] text-[#425466] leading-tight">
                  0% vests before Day 365. On month 12, exactly 25% of equity vests simultaneously.
                </p>
              </div>

              {/* Year 2 */}
              <div className="rounded-xl bg-white border border-[#E6E8EB] p-4 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#00D4B2]/15 text-[#008775] flex items-center justify-center mx-auto font-mono font-bold text-xs">
                  Yr 2
                </div>
                <h4 className="font-bold text-xs text-[#0A2540]">+25% Monthly (1/48th)</h4>
                <p className="text-[11px] text-[#425466] leading-tight">
                  Linear monthly vesting (2.08% per month). Reaches 50% cumulative ownership at month 24.
                </p>
              </div>

              {/* Year 3 */}
              <div className="rounded-xl bg-white border border-[#E6E8EB] p-4 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#00D4B2]/15 text-[#008775] flex items-center justify-center mx-auto font-mono font-bold text-xs">
                  Yr 3
                </div>
                <h4 className="font-bold text-xs text-[#0A2540]">+25% Monthly (1/48th)</h4>
                <p className="text-[11px] text-[#425466] leading-tight">
                  Cumulative 75% vested by month 36. Backed by reverse vesting buyback clauses.
                </p>
              </div>

              {/* Year 4 */}
              <div className="rounded-xl bg-white border border-[#10B981]/30 p-4 space-y-2 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-[#10B981]/10 text-[#059669] flex items-center justify-center mx-auto font-mono font-bold text-xs">
                  Yr 4
                </div>
                <h4 className="font-bold text-xs text-[#0A2540]">100% Fully Vested</h4>
                <p className="text-[11px] text-[#425466] leading-tight">
                  Full equity earned after 48 months of dedicated operating contribution.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#E6E8EB] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-[#627D98]">
              <div className="flex items-start sm:items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5 sm:mt-0" />
                <span className="font-medium leading-relaxed">
                  Institutional standard across high-growth Indian startups and global VC syndicates.
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#635BFF] font-bold shrink-0 self-start sm:self-auto">
                1008 GOVERNANCE ARCHITECTURE
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
