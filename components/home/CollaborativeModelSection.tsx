"use client";

import React from "react";
import { FileText, Cpu, Handshake, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

export function CollaborativeModelSection() {
  const steps = [
    {
      num: "01",
      title: "Submit Mandate",
      subtitle: "Define what your business needs",
      desc: "Share your venture background, commercial metrics, and whether you need an operating co-founder, angel check, or turnkey setup.",
      icon: FileText,
      color: "text-[#635BFF]",
      badgeBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
    },
    {
      num: "02",
      title: "Thesis Match",
      subtitle: "Algorithmic domain pairing",
      desc: "We cross-reference your submission against verified operators, angel syndicates, or execution specialists with real industry depth.",
      icon: Cpu,
      color: "text-[#00A389]",
      badgeBg: "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]",
    },
    {
      num: "03",
      title: "Structured Deal Meetings",
      subtitle: "Direct founder chemistry",
      desc: "Meet directly with vetted decision-makers. Evaluate mutual chemistry, clarify commercial milestones, and negotiate equity or capital terms.",
      icon: Handshake,
      color: "text-[#FF6B4A]",
      badgeBg: "bg-[#FFF3EE] text-[#FF6B4A] border-[#FFE2D6]",
    },
    {
      num: "04",
      title: "Turnkey Execution",
      subtitle: "Scale with zero broker fees",
      desc: "Access plug-and-play engineering stacks, vendor networks, and verified sprint specialists to execute with zero placement overhead.",
      icon: Rocket,
      color: "text-[#0A2540]",
      badgeBg: "bg-[#F1F5F9] text-[#0A2540] border-[#E2E8F0]",
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 z-20">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] shadow-2xs text-[#0A2540] text-xs font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#635BFF] animate-pulse" />
            <span>The 1008 Operating Model</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0A2540] tracking-tight">
            How 1008 Connects Vision with Execution
          </h2>
          <p className="text-sm sm:text-base text-[#425466] max-w-2xl mx-auto leading-relaxed">
            A structured, 4-stage pipeline that eliminates recruiter spam, broker markups, and unverified promises.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 items-stretch">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative p-6 sm:p-7 rounded-[24px] bg-white border border-[#CBD5E1]/90 shadow-xs hover:shadow-md hover:border-[#635BFF] transition-all flex flex-col justify-between text-left group overflow-hidden"
              >
                {/* Step Top: Number Pill & Icon */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${step.badgeBg}`}>
                      STEP {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0A2540] shadow-2xs group-hover:scale-105 transition-transform">
                      <Icon className={`h-5 w-5 ${step.color}`} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] leading-snug">
                      {step.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#00A389] pt-0.5 font-mono">
                      {step.subtitle}
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#425466] leading-relaxed pt-2 font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Indicator */}
                <div className="pt-4 mt-6 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#64748B]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#00A389]" />
                    <span>Stage {idx + 1} of 4</span>
                  </span>
                  {idx < 3 && (
                    <ArrowRight className="h-3.5 w-3.5 text-[#CBD5E1] group-hover:text-[#635BFF] group-hover:translate-x-1 transition-all hidden lg:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
