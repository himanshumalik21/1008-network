"use client";

import React, { useState } from "react";
import {
  Users,
  Code2,
  TrendingUp,
  Scale,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  AlertTriangle,
  ArrowRight,
  HelpCircle,
  Coins,
  FileCheck,
  Briefcase,
} from "lucide-react";

export function StartupHiringEquityGraphic() {
  const [activeTab, setActiveTab] = useState<"benchmarks" | "diligence" | "framework">("benchmarks");

  const equityBenchmarks = [
    {
      tier: "Equal Technical Co-Founder (CTO)",
      timing: "Day 0 (Idea / Feasibility)",
      equity: "20.0% – 35.0%",
      cash: "Zero or Minimal living stipend",
      vesting: "4-year reverse vesting with 1-year cliff",
      role: "Architects full codebase, builds MVP, recruits engineering pod.",
      color: "#635BFF",
    },
    {
      tier: "Founding Engineer (Employee #1 – #3)",
      timing: "Post-MVP / Angel Stage",
      equity: "1.5% – 3.5% ESOPs",
      cash: "60% – 80% market cash salary",
      vesting: "4-year monthly vesting with 1-year cliff",
      role: "Ships high-velocity features, manages production deployments.",
      color: "#00D4B2",
    },
    {
      tier: "Commercial / GTM Co-Founder",
      timing: "Pre-Revenue / Seed",
      equity: "15.0% – 25.0%",
      cash: "Commission on collections + equity",
      vesting: "Tied to signed LOIs and closed revenue milestones",
      role: "Opens enterprise B2B sales pipelines, closes anchor buyers.",
      color: "#FF7043",
    },
    {
      tier: "Key Early Hire (Lead PM / Ops Head)",
      timing: "Seed Funded (₹3 Cr – ₹10 Cr)",
      equity: "0.5% – 1.5% ESOPs",
      cash: "80% – 95% market competitive cash",
      vesting: "Standard 4-year ESOP pool grant",
      role: "Standardizes operating processes, scales customer support.",
      color: "#059669",
    },
  ];

  const candidateQuestions = [
    {
      question: "What is your real, unencumbered runway in the bank today?",
      why: "Never rely on verbal promises from investors. A startup with less than 6 months of verified cash runway must offer clear downside protections.",
      trap: "Red Flag: Founders who hide bank balances or claim term sheets are imminent for months.",
    },
    {
      question: "What percentage of the cap table is owned by non-operating founders?",
      why: "Dead equity (>20% owned by people who no longer work in the company) prevents future venture capital funding and demotivates operating builders.",
      trap: "Red Flag: 50% owned by an inactive sleeping investor with no subsequent capital commitment.",
    },
    {
      question: "Can I speak directly with 2 past employees or co-founders?",
      why: "Leadership temperament under extreme pressure is the #1 predictor of startup survival. Reference checks work both ways.",
      trap: "Red Flag: High turnover in the first 12 months with defensive explanations.",
    },
    {
      question: "What is the exact vesting acceleration clause upon acquisition?",
      why: "Ensure double-trigger acceleration (if the startup is acquired and your role is terminated, 100% of your equity vests immediately).",
      trap: "Red Flag: Single-discretion cancellation clauses where founders can cancel unvested stock arbitrarily.",
    },
  ];

  return (
    <div className="my-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 text-[#0A2540] shadow-xs relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#635BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00D4B2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E6E8EB] pb-4">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-[#635BFF]/10 border border-[#635BFF]/20 text-[#635BFF]">
              <Scale className="h-6 w-6" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#635BFF]">
                  1008 Talent & Governance Framework
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00D4B2]/10 text-[#008774] font-semibold border border-[#00D4B2]/20">
                  2026 Benchmarks
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#0A2540] tracking-tight">
                Startup Equity & Co-Founder Alignment Architecture
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E6E8EB] rounded-xl shadow-2xs self-start sm:self-auto">
            <button
              onClick={() => setActiveTab("benchmarks")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "benchmarks"
                  ? "bg-[#635BFF] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540] hover:bg-[#F8FAFC]"
              }`}
            >
              <Coins className="h-3.5 w-3.5" />
              <span>Equity Benchmarks</span>
            </button>
            <button
              onClick={() => setActiveTab("diligence")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "diligence"
                  ? "bg-[#635BFF] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540] hover:bg-[#F8FAFC]"
              }`}
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Candidate Diligence</span>
            </button>
            <button
              onClick={() => setActiveTab("framework")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "framework"
                  ? "bg-[#635BFF] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540] hover:bg-[#F8FAFC]"
              }`}
            >
              <FileCheck className="h-3.5 w-3.5" />
              <span>Co-Founder Trial</span>
            </button>
          </div>
        </div>

        {activeTab === "benchmarks" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {equityBenchmarks.map((b, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-[#E6E8EB] shadow-2xs hover:border-[#635BFF]/30 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-[#F1F4F8] pb-2.5">
                    <div>
                      <span className="text-[10px] font-mono text-[#627D98] uppercase">Timing: {b.timing}</span>
                      <h5 className="font-bold text-sm text-[#0A2540]">{b.tier}</h5>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-[#627D98] block">Equity Range</span>
                      <span className="text-sm font-extrabold text-[#059669] font-mono">{b.equity}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#425466] leading-relaxed">{b.role}</p>

                  <div className="pt-2 border-t border-[#F1F4F8] grid grid-cols-2 gap-2 text-[11px]">
                    <div>
                      <span className="font-mono text-[#627D98] block">Cash Structure:</span>
                      <span className="font-semibold text-[#0A2540]">{b.cash}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[#627D98] block">Vesting Terms:</span>
                      <span className="font-semibold text-[#0A2540]">{b.vesting}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-[#635BFF]/5 border border-[#635BFF]/20 flex items-center justify-between text-xs">
              <span className="text-[#425466]">
                <strong>The 1008 Vesting Principle:</strong> Never grant unvested equity on day zero. Always enforce a 1-year cliff and monthly vesting tied to operational milestones.
              </span>
              <span className="font-mono text-[#635BFF] font-bold shrink-0 ml-3">4-Year Standard</span>
            </div>
          </div>
        )}

        {activeTab === "diligence" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {candidateQuestions.map((q, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-[#E6E8EB] shadow-2xs space-y-3"
                >
                  <div className="flex items-start gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#635BFF]/10 text-[#635BFF]">
                      0{idx + 1}
                    </span>
                    <h5 className="font-bold text-sm text-[#0A2540] leading-snug">{q.question}</h5>
                  </div>
                  <p className="text-xs text-[#425466] leading-relaxed">{q.why}</p>
                  <div className="p-2.5 rounded-lg bg-[#FFF3EE] border border-[#FFD8C9] text-[11px] text-[#D94814] flex items-start gap-2">
                    <AlertTriangle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                    <span>{q.trap}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "framework" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-xl bg-white border border-[#E6E8EB] shadow-2xs space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#635BFF] uppercase">Phase 1 // 14 Days</span>
                <h5 className="font-bold text-sm text-[#0A2540]">Weekend Sprint Trial</h5>
                <p className="text-xs text-[#425466]">
                  Work together on a tangible mini-project (e.g. building an API demo or interviewing 5 customers). Test communication rhythm under zero capital pressure.
                </p>
                <span className="text-[10px] font-mono text-[#627D98] block pt-2 border-t border-[#F1F4F8]">
                  Equity Grant: 0%
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E6E8EB] shadow-2xs space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#00D4B2] uppercase">Phase 2 // 30–60 Days</span>
                <h5 className="font-bold text-sm text-[#0A2540]">Paid Project Consulting</h5>
                <p className="text-xs text-[#425466]">
                  Engage on a milestone-based consultant agreement. Verify real-world speed, code cleanliness, commercial closing tenacity, and cultural alignment.
                </p>
                <span className="text-[10px] font-mono text-[#627D98] block pt-2 border-t border-[#F1F4F8]">
                  Compensation: Stipend / Milestone
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E6E8EB] shadow-2xs space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#FF7043] uppercase">Phase 3 // Month 3</span>
                <h5 className="font-bold text-sm text-[#0A2540]">Reverse Vesting Deed</h5>
                <p className="text-xs text-[#425466]">
                  Sign standard Co-Founder Agreement with IP assignment and 4-year reverse vesting schedule with a mandatory 1-year cliff before any shares lock in.
                </p>
                <span className="text-[10px] font-mono text-[#627D98] block pt-2 border-t border-[#F1F4F8]">
                  Legal Agreement Executed
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E6E8EB] shadow-2xs space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#059669] uppercase">Phase 4 // Year 1+</span>
                <h5 className="font-bold text-sm text-[#0A2540]">Cap Table Incorporation</h5>
                <p className="text-xs text-[#425466]">
                  Cliff clears. Shares vest monthly. Venture raises seed capital or reinvests operating gross cashflows with full institutional governance alignment.
                </p>
                <span className="text-[10px] font-mono text-[#059669] font-bold block pt-2 border-t border-[#F1F4F8]">
                  Aligned Long-Term Equity
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
