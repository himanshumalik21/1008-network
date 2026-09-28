"use client";

import React, { useState } from "react";
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Scale,
  Zap,
  ShieldCheck,
  TrendingUp,
  Workflow,
  Factory,
  Coins,
  Users,
} from "lucide-react";

export function StartingBusinessGuideGraphic() {
  const [activeTab, setActiveTab] = useState<"stages" | "models">("stages");

  const stages = [
    {
      step: "01",
      title: "Unmet Friction Discovery",
      desc: "Interview 20 target buyers using Mom Test techniques to discover active past spending, not polite opinions.",
      detail: "20 Deep Customer Interviews",
      icon: Users,
    },
    {
      step: "02",
      title: "Unit Economics & Spread",
      desc: "Model landed costs (raw materials + power + scrap + freight) to ensure at least 30%–40% gross contribution margin.",
      detail: "30%–40% Gross Margin Buffer",
      icon: Scale,
    },
    {
      step: "03",
      title: "Concierge / Job-Work MVP",
      desc: "Outsource initial 5–10 batches to an existing open-capacity factory to test product quality and customer collection cycles.",
      detail: "Zero Machine Capex at Inception",
      icon: Factory,
    },
    {
      step: "04",
      title: "Priority Capital Structuring",
      desc: "With proven paying customers, assemble Detailed Project Report (DPR) for PMEGP (15%–35% subsidy) and MUDRA credit.",
      detail: "PMEGP & CGTMSE Subsidies",
      icon: Coins,
    },
    {
      step: "05",
      title: "Lean Plant & Compliance",
      desc: "Secure Udyam, GST, SPCB Consent, and BIS/FSSAI approvals; lease a lean shed sized strictly for 1-shift demand.",
      detail: "Udyam • GST • SPCB • BIS / FSSAI",
      icon: ShieldCheck,
    },
    {
      step: "06",
      title: "Repeatable Sales Engine",
      desc: "Institutionalize regional distributor and direct B2B channels with strict 7-to-15 day payment terms to prevent cash traps.",
      detail: "7–15 Day Cash Collection Discipline",
      icon: TrendingUp,
    },
  ];

  const models = [
    {
      name: "The Mom Test",
      author: "Rob Fitzpatrick",
      coreIdea: "Never ask if they like your idea. Ask how they solve it today, how much they spent last month, and what broke.",
      takeaway: "Past customer behavior is the only reliable signal of commercial demand.",
      icon: Lightbulb,
      color: "#635BFF",
      bgLight: "#F0F0FF",
      borderLight: "#E0E0FF",
    },
    {
      name: "Zero to One",
      author: "Peter Thiel",
      coreIdea: "Escape cut-throat competition by discovering non-obvious supply chain secrets incumbents ignore.",
      takeaway: "Build around geographic freight moats, regulatory QCO shifts, or overlooked B2B contract niches.",
      icon: Compass,
      color: "#00A88F",
      bgLight: "#E6FFFA",
      borderLight: "#B2DFDB",
    },
    {
      name: "Specific Knowledge",
      author: "Naval Ravikant",
      coreIdea: "Build in domains where your authentic curiosities, specialized craft, or operational grit cannot be trained in a classroom.",
      takeaway: "Pair specific knowledge with personal accountability to attract co-founders, debt, and early clients.",
      icon: Zap,
      color: "#FF7043",
      bgLight: "#FFF2ED",
      borderLight: "#FFD8C9",
    },
    {
      name: "Operator Cash Discipline",
      author: "Sridhar Vembu (Zoho)",
      coreIdea: "Gross margin and cash velocity matter infinitely more than vanity GMV. Never subsidize customers with unpaid credit.",
      takeaway: "Avoid 90-day institutional credit traps by prioritizing advance deposits or fast-turnaround channels.",
      icon: Coins,
      color: "#0A2540",
      bgLight: "#F1F5F9",
      borderLight: "#E2E8F0",
    },
  ];

  return (
    <div className="my-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 text-[#0A2540] shadow-xs relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#635BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00D4B2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Header Title & Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6E8EB] pb-4">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-[#635BFF]/10 border border-[#635BFF]/20 text-[#635BFF]">
              <Workflow className="h-5 w-5" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540] block">
                The 1008 De-Risked Venture Engine
              </span>
              <span className="text-[11px] text-[#627D98]">
                From Customer Friction to Repeatable Commercial Cashflow in India
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#E6E8EB] self-start sm:self-auto shadow-2xs">
            <button
              onClick={() => setActiveTab("stages")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "stages"
                  ? "bg-[#0A2540] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540]"
              }`}
            >
              6-Stage Execution Roadmap
            </button>
            <button
              onClick={() => setActiveTab("models")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "models"
                  ? "bg-[#0A2540] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540]"
              }`}
            >
              4 Essential Mental Models
            </button>
          </div>
        </div>

        {activeTab === "stages" ? (
          /* Step-by-Step 6 Stages Grid */
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stages.map((stg, idx) => {
                const IconComponent = stg.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs hover:border-[#CBD5E1] transition-all flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#635BFF] bg-[#F0F0FF] px-2 py-0.5 rounded border border-[#E0E0FF]">
                          STAGE {stg.step}
                        </span>
                        <span className="p-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#627D98]">
                          <IconComponent className="h-4 w-4 text-[#635BFF]" />
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-[#0A2540]">{stg.title}</h4>
                      <p className="text-xs text-[#425466] leading-relaxed">{stg.desc}</p>
                    </div>

                    <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] text-[#627D98] font-mono">
                      <span>{stg.detail}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Status Banner */}
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-[#425466]">
                <ShieldCheck className="h-4 w-4 text-[#00A88F]" />
                <span>
                  Never buy brand-new machines or sign long-term leases before delivering <strong>5 paid customer batches</strong>.
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#627D98] bg-[#F8FAFC] px-2.5 py-1 rounded-md border border-[#E2E8F0]">
                Zero-Capital Pre-Validation Rule
              </span>
            </div>
          </div>
        ) : (
          /* 4 Master Mental Models Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {models.map((m, idx) => {
              const IconComp = m.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 shadow-2xs space-y-4 flex flex-col justify-between hover:border-[#CBD5E1] transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="p-2 rounded-xl"
                          style={{ backgroundColor: m.bgLight, color: m.color }}
                        >
                          <IconComp className="h-4 w-4" />
                        </span>
                        <div>
                          <h4 className="font-bold text-sm text-[#0A2540]">{m.name}</h4>
                          <span className="text-[11px] text-[#627D98] font-mono">{m.author}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#627D98] font-bold">
                        MODEL {idx + 1}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                      &quot;{m.coreIdea}&quot;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F1F5F9] bg-[#F8FAFC] p-3 rounded-xl border border-[#E2E8F0] text-xs text-[#0A2540] font-medium leading-snug">
                    <span className="font-bold block text-[11px] font-mono text-[#635BFF] mb-0.5 uppercase">
                      Operator Rule:
                    </span>
                    {m.takeaway}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
