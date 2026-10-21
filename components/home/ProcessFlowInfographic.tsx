"use client";

import React from "react";
import Link from "next/link";
import {
  Target,
  Workflow,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Rocket,
} from "lucide-react";

export function ProcessFlowInfographic() {
  const steps = [
    {
      num: "01",
      tag: "INTAKE",
      title: "State Your Business Goal",
      description: "Whether you need a technical CTO, growth capital, turnkey factory/ERP setup, or an acute 2-week gig solved — submit your exact requirements in 2 minutes.",
      deliverable: "Confidential brief submitted under NDA",
      color: "#635BFF",
      accentBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
    },
    {
      num: "02",
      tag: "MATCH & SCOPE",
      title: "Curated Solution & Alignment",
      description: "1008 evaluates unit economics, scopes the roadmap, and introduces vetted co-founders, angel syndicates, or deploys our in-house engineering and ops team.",
      deliverable: "Milestone scope & direct partner introduction",
      color: "#00A389",
      accentBg: "bg-[#E6FFFA] text-[#007A66] border-[#B2F5EA]",
    },
    {
      num: "03",
      tag: "EXECUTION",
      title: "Turnkey Milestone Delivery",
      description: "Work commences with 100% mutual alignment. We use standardized milestone equity vesting and fixed sprint deliverables with zero agency retainers.",
      deliverable: "Operating systems & shared equity upside",
      color: "#059669",
      accentBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] text-xs font-mono font-semibold text-[#0A2540]">
            <Workflow className="h-3.5 w-3.5 text-[#635BFF]" />
            <span>HOW WE OPERATE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            From business hurdle to executed reality in three steps.
          </h2>

          <p className="text-base text-[#475569] leading-relaxed max-w-2xl mx-auto">
            A structured, transparent lifecycle designed to save months of fragmented searching, wasted agency retainers, and misaligned partnerships.
          </p>
        </div>

        {/* 3 Step Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="p-7 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs relative flex flex-col justify-between space-y-6 hover:border-[#635BFF]/40 hover:bg-white transition-all duration-200 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-2xl bg-white border border-[#E2E8F0] text-[#0A2540] font-mono font-extrabold text-sm flex items-center justify-center shadow-2xs group-hover:bg-[#635BFF] group-hover:text-white transition-colors">
                    {step.num}
                  </span>
                  <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${step.accentBg}`}>
                    {step.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0A2540] tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-medium text-[#334155]">
                <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                <span>{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Strip */}
        <div className="p-6 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#166534]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-5 w-5 text-[#16A34A] shrink-0" />
            <span className="font-medium text-xs sm:text-sm">
              All co-building engagements, founder matching, and investor discoveries operate under strict NDAs and statutory compliance.
            </span>
          </div>
          <Link
            href="/network"
            className="inline-flex items-center gap-1 font-bold text-[#15803D] hover:underline whitespace-nowrap shrink-0"
          >
            <span>Start Matching</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
