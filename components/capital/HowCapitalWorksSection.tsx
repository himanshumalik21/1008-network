"use client";

import React from "react";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { CapitalTopographicWave } from "./CapitalTopographicWave";
import {
  Rocket,
  TrendingUp,
  Target,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export function HowCapitalWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Submit Venture & Use of Funds",
      pillText: "SUBMIT VENTURE",
      theme: {
        cardBg: "bg-[#F7F8FF]",
        borderColor: "border-[#635BFF]/30 hover:border-[#635BFF]",
        numberBg: "bg-[#635BFF]",
        pillBg: "bg-[#635BFF]",
        iconColor: "text-[#635BFF]",
        iconBg: "bg-[#F0F0FF]",
      },
      icon: (
        <svg
          className="w-12 h-12 sm:w-14 sm:h-14 text-[#635BFF]"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Business Pitch & Cap Sheet Document */}
          <rect x="10" y="6" width="28" height="36" rx="5" className="fill-[#635BFF]/08 stroke-[#635BFF]" strokeWidth="2.4" />
          <path d="M16 14h16M16 20h10M16 26h6" stroke="#635BFF" strokeWidth="2.4" />
          {/* Capital growth coin badge */}
          <circle cx="32" cy="30" r="7" className="fill-white stroke-[#635BFF]" strokeWidth="2.2" />
          <path d="M32 26v8M30 28h3.5a1.5 1.5 0 0 1 0 3H30.5a1.5 1.5 0 0 0 0 3H34" stroke="#635BFF" strokeWidth="2" />
        </svg>
      ),
      description:
        "Founders submit their business model, current traction, and itemized use of funds (e.g. machinery setup, working capital, or distribution expansion).",
    },
    {
      number: "2",
      title: "Thesis Review & Allocation Match",
      pillText: "THESIS MATCH",
      theme: {
        cardBg: "bg-[#F0FDFB]",
        borderColor: "border-[#00D4B2]/40 hover:border-[#00A389]",
        numberBg: "bg-[#00A389]",
        pillBg: "bg-[#00A389]",
        iconColor: "text-[#00A389]",
        iconBg: "bg-[#E6FFFA]",
      },
      icon: (
        <svg
          className="w-12 h-12 sm:w-14 sm:h-14 text-[#00A389]"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Radar allocation chip */}
          <rect x="11" y="11" width="26" height="26" rx="5" className="fill-[#00D4B2]/10 stroke-[#00A389]" strokeWidth="2.4" />
          <circle cx="24" cy="24" r="5" className="fill-[#00A389] stroke-[#00A389]" />
          {/* Scan coordinates */}
          <line x1="24" y1="4" x2="24" y2="11" stroke="#00A389" strokeWidth="2.4" />
          <line x1="24" y1="37" x2="24" y2="44" stroke="#00A389" strokeWidth="2.4" />
          <line x1="4" y1="24" x2="11" y2="24" stroke="#00A389" strokeWidth="2.4" />
          <line x1="37" y1="24" x2="44" y2="24" stroke="#00A389" strokeWidth="2.4" />
          {/* Aligned capital nodes */}
          <circle cx="16" cy="16" r="2" className="fill-[#00D4B2]" />
          <circle cx="32" cy="32" r="2" className="fill-[#00D4B2]" />
          <circle cx="16" cy="32" r="2" className="fill-[#00D4B2]" />
          <circle cx="32" cy="16" r="2" className="fill-[#00D4B2]" />
        </svg>
      ),
      description:
        "1008 evaluates venture feasibility and introduces vetted opportunities directly to aligned angel investors and family offices based on sector focus and check size.",
    },
    {
      number: "3",
      title: "Structured Deal Calls",
      pillText: "DEAL SESSIONS",
      theme: {
        cardBg: "bg-[#F8FAFC]",
        borderColor: "border-[#0A2540]/25 hover:border-[#0A2540]",
        numberBg: "bg-[#0A2540]",
        pillBg: "bg-[#0A2540]",
        iconColor: "text-[#0A2540]",
        iconBg: "bg-[#F1F5F9]",
      },
      icon: (
        <svg
          className="w-12 h-12 sm:w-14 sm:h-14 text-[#0A2540]"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Deal presentation frame */}
          <rect x="8" y="9" width="32" height="30" rx="5" className="fill-[#0A2540]/06 stroke-[#0A2540]" strokeWidth="2.4" />
          <circle cx="19" cy="20" r="4.5" stroke="#0A2540" strokeWidth="2.2" />
          <path d="M12 31c0-3.5 3-5.5 7-5.5s7 2 7 5.5" stroke="#0A2540" strokeWidth="2.2" />
          {/* Growth chart line */}
          <polyline points="27,27 31,23 35,25 39,19" stroke="#0A2540" strokeWidth="2.2" />
          {/* Verified green delivery badge */}
          <circle cx="36" cy="32" r="5" className="fill-[#10B981] stroke-white" strokeWidth="2" />
          <path d="M34.5 32l1 1 2.5-2.5" stroke="white" strokeWidth="1.8" />
        </svg>
      ),
      description:
        "Interested capital partners participate in direct, structured deal calls with founders to evaluate unit economics, expansion milestones, and commercial terms.",
    },
    {
      number: "4",
      title: "Direct Contract Execution",
      pillText: "DIRECT CONTRACT",
      theme: {
        cardBg: "bg-gradient-to-br from-[#F7F8FF] via-white to-[#F0FDFB]",
        borderColor: "border-[#635BFF]/35 hover:border-[#00D4B2]",
        numberBg: "bg-gradient-to-r from-[#635BFF] to-[#00A389]",
        pillBg: "bg-gradient-to-r from-[#635BFF] to-[#00A389]",
        iconColor: "text-[#635BFF]",
        iconBg: "bg-[#F0F0FF]",
      },
      icon: (
        <svg
          className="w-12 h-12 sm:w-14 sm:h-14 text-[#635BFF]"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Direct signing handshake & contract */}
          <path d="M16 26l6-6a4 4 0 0 1 5.6 0l2.5 2.5a4 4 0 0 1 0 5.6L24 34l-8-8z" className="fill-[#635BFF]/10 stroke-[#635BFF]" strokeWidth="2.4" />
          <path d="M26 18l4.5-4.5a3 3 0 0 1 4.2 0l3 3a3 3 0 0 1 0 4.2L33 25" stroke="#635BFF" strokeWidth="2.2" />
          <path d="M8 20l6-6a3 3 0 0 1 4.2 0l2 2" stroke="#635BFF" strokeWidth="2.2" />
          {/* Mutual trust spark */}
          <circle cx="24" cy="9" r="3" className="fill-[#00D4B2]" />
        </svg>
      ),
      description:
        "Investors execute their independent due diligence and contract directly with the company entity.",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
      {/* Dynamic 3D Undulating Topographical Mesh (Slide 1 & Slide 14 Inspired) */}
      <div className="absolute -top-10 -right-16 sm:top-2 sm:-right-8 lg:top-4 lg:right-0 w-[420px] sm:w-[620px] lg:w-[760px] h-[340px] sm:h-[440px] lg:h-[480px] pointer-events-none opacity-60 sm:opacity-80 z-0">
        <CapitalTopographicWave />
      </div>

      {/* Symmetrical Subtle Lower Wave Accent */}
      <div className="absolute -bottom-16 -left-20 w-[380px] sm:w-[500px] h-[300px] sm:h-[380px] pointer-events-none opacity-35 sm:opacity-50 z-0">
        <CapitalTopographicWave intensity="subtle" />
      </div>

      {/* Ambient Radial Radiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-[#00D4B2]/10 via-[#00A389]/06 to-[#635BFF]/08 blur-[130px] pointer-events-none" />

      {/* ============================================================ */}
      {/* 1. HEADER & BADGES */}
      {/* ============================================================ */}
      <div className="max-w-5xl mx-auto relative z-10 text-center mb-12 sm:mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 flex-wrap justify-center">
          <Badge variant="indigo" size="md" pulse>
            1008 Community • Capital & Investors
          </Badge>
          <span className="text-xs font-mono font-semibold text-[#00A389] bg-[#E6FFFA] px-3 py-1 rounded-full border border-[#B2F5EA]">
            Curated Direct Discovery
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans leading-tight">
          Businesses find capital.{" "}
          <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A389] via-[#00D4B2] to-[#635BFF]">
            Investors find evaluated businesses.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#425466] leading-relaxed max-w-3xl mx-auto font-normal">
          Whether your business needs growth funding or you are an angel investor looking for vetted high-conviction businesses — the 1008 community connects capital directly.
        </p>

        {/* Ecosystem Flow Formula */}
        <div className="pt-2 pb-1 inline-flex items-center gap-2 text-xs font-mono text-[#64748B] bg-white/95 px-4 py-2 rounded-full border border-[#E2E8F0] shadow-xs">
          <span className="text-[#635BFF] font-semibold">Idea</span>
          <span>→</span>
          <span className="text-[#00A389] font-semibold">People</span>
          <span>→</span>
          <span className="text-[#059669] font-semibold">Capital</span>
          <span>→</span>
          <span className="text-[#D94814] font-semibold">Execution</span>
          <span>→</span>
          <span className="text-[#0A2540] font-bold">Business</span>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href="#for-founders"
            size="md"
            variant="primary"
            rightIcon={<Rocket className="h-4 w-4" />}
            className="w-full sm:w-auto font-semibold px-6 shadow-sm"
          >
            For Founders (Submit Venture)
          </Button>
          <Button
            href="#for-investors"
            size="md"
            variant="secondary"
            rightIcon={<TrendingUp className="h-4 w-4 text-[#00A389]" />}
            className="w-full sm:w-auto font-semibold"
          >
            For Investors (Join Network)
          </Button>
        </div>

        {/* Quick Highlights Ribbon */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-[#627D98]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span>Curated Introductions</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Target className="h-3.5 w-3.5 text-[#635BFF]" />
            <span>Transparent Use of Funds</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-[#059669]" />
            <span>Independent Due Diligence</span>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. 2x2 PROTOCOL MATRIX (1008 Brand Colors) */}
      {/* ============================================================ */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`group relative rounded-[22px] sm:rounded-[26px] ${step.theme.cardBg} p-5 sm:p-6 lg:p-7 flex flex-col items-center justify-between shadow-[0_4px_16px_rgba(10,37,64,0.05)] border-2 ${step.theme.borderColor} hover:shadow-[0_12px_28px_rgba(10,37,64,0.08)] transition-all duration-300 min-h-[290px] sm:min-h-[310px]`}
            >
              {/* Floating Top-Left Number Circle */}
              <div className="w-full flex items-center justify-start">
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full ${step.theme.numberBg} text-white font-extrabold text-sm sm:text-base flex items-center justify-center shadow-xs`}
                >
                  {step.number}
                </div>
              </div>

              {/* Bold Center Graphic Icon */}
              <div className="my-3 sm:my-4 flex items-center justify-center py-1 transition-transform duration-300 group-hover:scale-110">
                {step.icon}
              </div>

              {/* Static Artwork Pill + Explanatory Subtext */}
              <div className="w-full space-y-2.5 flex flex-col items-center">
                <span
                  className={`w-full max-w-[195px] py-2 px-3 rounded-full ${step.theme.pillBg} text-white font-black text-[11px] sm:text-[11.5px] tracking-wider uppercase shadow-2xs text-center select-none`}
                >
                  {step.pillText}
                </span>

                <p className="text-xs sm:text-[12.5px] text-[#425466] font-medium text-center leading-relaxed px-1 sm:px-2">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
