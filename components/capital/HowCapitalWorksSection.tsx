"use client";

import React from "react";
import { Badge } from "@/components/brand/Badge";
import { CapitalTopographicWave } from "./CapitalTopographicWave";

// Large stylized illustrated number component matching reference image style
function StylizedNumber({
  num,
  fill,
  strokeColor = "#0A2540",
  shadowColor = "rgba(10,37,64,0.18)",
}: {
  num: string;
  fill: string;
  strokeColor?: string;
  shadowColor?: string;
}) {
  return (
    <svg
      viewBox="0 0 76 96"
      className="w-12 h-16 sm:w-16 sm:h-20 md:w-20 md:h-24 select-none shrink-0 drop-shadow-sm transition-transform duration-300 hover:scale-105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`Step ${num}`}
    >
      <defs>
        <filter id={`num-shadow-${num}`} x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="3" dy="4" stdDeviation="0" floodColor={shadowColor} />
        </filter>
        {num === "4" && (
          <linearGradient id="grad-num-4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#635BFF" />
            <stop offset="100%" stopColor="#00A389" />
          </linearGradient>
        )}
      </defs>
      <text
        x="38"
        y="76"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
        fontWeight="900"
        fontSize="78"
        fill={num === "4" ? "url(#grad-num-4)" : fill}
        stroke={strokeColor}
        strokeWidth="6"
        strokeLinejoin="round"
        paintOrder="stroke fill"
        filter={`url(#num-shadow-${num})`}
      >
        {num}
      </text>
    </svg>
  );
}

export function HowCapitalWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Submit Venture & Use of Funds",
      badge: {
        label: "Submit Venture",
        color: "bg-[#635BFF] text-white border border-[#5349DF]",
        rotation: "-rotate-2",
      },
      numberFill: "#635BFF",
      nodeColor: "bg-[#635BFF]",
      theme: {
        cardBg: "bg-gradient-to-br from-[#F7F8FF] via-white to-[#FAF5FF]",
        borderColor: "border-[#E0E0FF] hover:border-[#635BFF]/50",
        iconColor: "text-[#635BFF]",
        iconBg: "bg-[#F0F0FF]",
      },
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12 text-[#635BFF]"
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
      badge: {
        label: "Thesis Match",
        color: "bg-[#00A389] text-white border border-[#008F77]",
        rotation: "rotate-2",
      },
      numberFill: "#00A389",
      nodeColor: "bg-[#00A389]",
      theme: {
        cardBg: "bg-gradient-to-br from-[#F0FDFB] via-white to-[#E6FFFA]",
        borderColor: "border-[#B2F5EA] hover:border-[#00A389]/60",
        iconColor: "text-[#00A389]",
        iconBg: "bg-[#E6FFFA]",
      },
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12 text-[#00A389]"
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
          <line x1="24" y1="4" x2="24" y2="11" stroke="#00A389" strokeWidth="2.4" />
          <line x1="24" y1="37" x2="24" y2="44" stroke="#00A389" strokeWidth="2.4" />
          <line x1="4" y1="24" x2="11" y2="24" stroke="#00A389" strokeWidth="2.4" />
          <line x1="37" y1="24" x2="44" y2="24" stroke="#00A389" strokeWidth="2.4" />
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
      title: "Structured Deal Meetings",
      badge: {
        label: "Deal Meetings",
        color: "bg-[#0A2540] text-white border border-black/20",
        rotation: "-rotate-1",
      },
      numberFill: "#0A2540",
      nodeColor: "bg-[#0A2540]",
      theme: {
        cardBg: "bg-gradient-to-br from-[#F8FAFC] via-white to-[#F1F5F9]",
        borderColor: "border-[#E2E8F0] hover:border-[#0A2540]/50",
        iconColor: "text-[#0A2540]",
        iconBg: "bg-[#F1F5F9]",
      },
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12 text-[#0A2540]"
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
          <polyline points="27,27 31,23 35,25 39,19" stroke="#0A2540" strokeWidth="2.2" />
          <circle cx="36" cy="32" r="5" className="fill-[#10B981] stroke-white" strokeWidth="2" />
          <path d="M34.5 32l1 1 2.5-2.5" stroke="white" strokeWidth="1.8" />
        </svg>
      ),
      description:
        "Interested capital partners participate in direct, structured deal meetings with founders to evaluate unit economics, expansion milestones, and commercial terms.",
    },
    {
      number: "4",
      title: "Direct Contract Execution",
      badge: {
        label: "Direct Contract",
        color: "bg-gradient-to-r from-[#635BFF] to-[#00A389] text-white border border-[#635BFF]/30",
        rotation: "rotate-2",
      },
      numberFill: "#00D4B2",
      nodeColor: "bg-gradient-to-r from-[#635BFF] to-[#00A389]",
      theme: {
        cardBg: "bg-gradient-to-br from-[#F7F8FF] via-white to-[#F0FDFB]",
        borderColor: "border-[#CBD5E1] hover:border-[#00D4B2]",
        iconColor: "text-[#635BFF]",
        iconBg: "bg-[#F0F0FF]",
      },
      hasStickyNote: true,
      stickyNoteText:
        "Investors execute their independent due diligence and contract directly with the company entity. Direct facilitation with 100% operational transparency.",
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12 text-[#635BFF]"
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
          <circle cx="24" cy="9" r="3" className="fill-[#00D4B2]" />
        </svg>
      ),
      description:
        "Investors execute their independent due diligence and contract directly with the company entity.",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
      {/* Background Dot-Grid Texture (Inspired by Reference Image Design) */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

      {/* Dynamic 3D Undulating Topographical Mesh */}
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
      <div className="max-w-4xl mx-auto relative z-10 text-center mb-14 sm:mb-20 space-y-4">
        {/* Top Floating Badge Row */}
        <div className="inline-flex items-center gap-2.5 flex-wrap justify-center">
          <Badge variant="indigo" size="md" pulse>
            1008 Community • Capital & Investors
          </Badge>
          <span className="text-xs font-mono font-semibold text-[#00A389] bg-[#E6FFFA] px-3 py-1 rounded-full border border-[#B2F5EA]">
            Curated Direct Discovery
          </span>

          {/* Reference Image Signature: Tilted "4 steps" Tape Badge */}
          <span className="inline-flex items-center text-xs font-mono font-extrabold uppercase px-3 py-1 rounded-xs bg-[#635BFF] text-white shadow-xs -rotate-2 select-none border border-[#5349DF]">
            4 steps
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
      </div>

      {/* ============================================================ */}
      {/* 2. REDESIGNED VERTICAL TIMELINE PROCESS (Reference Image Style) */}
      {/* ============================================================ */}
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Continuous Connecting Timeline Spine (Dark connecting line from Step 1 to Step 4) */}
        <div
          className="absolute left-[7px] sm:left-[9px] md:left-[11px] top-10 sm:top-12 bottom-16 sm:bottom-20 w-[3px] sm:w-[3.5px] bg-[#0A2540] rounded-full z-0 pointer-events-none"
          aria-hidden="true"
        />

        <div className="space-y-8 sm:space-y-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex items-start gap-3 sm:gap-6 lg:gap-8 group"
            >
              {/* Left Column: Timeline Node Dot + Big Stylized Number */}
              <div className="flex items-center gap-2 sm:gap-4 shrink-0 pt-2 sm:pt-4 z-10">
                {/* Colored Node Circle centered right over the vertical track line */}
                <div
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full ${step.nodeColor} ring-4 ring-white shadow-xs shrink-0 transition-transform duration-300 group-hover:scale-125`}
                  aria-hidden="true"
                />

                {/* Big Stylized Number (Hand-drawn / comic display contour style from reference image) */}
                <StylizedNumber num={step.number} fill={step.numberFill} />
              </div>

              {/* Right Column: Soft Rounded Process Card */}
              <div
                className={`flex-1 rounded-[24px] sm:rounded-[32px] ${step.theme.cardBg} border-2 ${step.theme.borderColor} shadow-[0_4px_20px_rgba(10,37,64,0.06)] hover:shadow-[0_12px_32px_rgba(10,37,64,0.09)] transition-all duration-300 p-5 sm:p-7 relative overflow-hidden`}
              >
                {/* Washi Tape Badge (Top-right corner accent matching reference image) */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-5 z-20 pointer-events-none">
                  <span
                    className={`inline-block px-3 py-1 rounded-xs font-mono font-bold text-xs sm:text-[12.5px] shadow-xs select-none uppercase tracking-wider ${step.badge.color} ${step.badge.rotation} transition-transform duration-300 group-hover:rotate-0`}
                  >
                    {step.badge.label}
                  </span>
                </div>

                {/* Card Header: Icon + Title */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-4 pr-24 sm:pr-36">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 sm:w-13 sm:h-13 rounded-2xl ${step.theme.iconBg} flex items-center justify-center p-2 shrink-0 border border-black/5 shadow-2xs transition-transform duration-300 group-hover:scale-105`}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-2xl font-extrabold text-[#0A2540] tracking-tight leading-snug">
                        {step.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Step Description */}
                <p className="text-xs sm:text-[14.5px] text-[#425466] font-medium leading-relaxed max-w-2xl">
                  {step.description}
                </p>

                {/* Step 4 Specific: Signature Pinned Sticky Note (Reference Image Step 3 Style) */}
                {step.hasStickyNote && (
                  <div className="relative mt-5 sm:mt-6 pt-3">
                    <div className="relative rounded-2xl bg-gradient-to-br from-[#FEFCE8] via-[#FFFBEB] to-[#FEF9C3] border-2 border-[#FDE047] p-4 sm:p-5 shadow-sm max-w-xl rotate-[-0.8deg] transition-transform duration-300 group-hover:rotate-0">
                      {/* Left Translucent Frosted Washi Tape Strip */}
                      <div
                        className="absolute -top-2.5 left-6 w-12 sm:w-14 h-4 sm:h-5 bg-white/70 backdrop-blur-xs border border-white/80 shadow-2xs -rotate-12 rounded-2xs pointer-events-none"
                        aria-hidden="true"
                      />
                      {/* Right Translucent Frosted Washi Tape Strip */}
                      <div
                        className="absolute -top-2.5 right-6 w-12 sm:w-14 h-4 sm:h-5 bg-white/70 backdrop-blur-xs border border-white/80 shadow-2xs rotate-12 rounded-2xs pointer-events-none"
                        aria-hidden="true"
                      />

                      <div className="flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#00A389] mt-1.5 shrink-0" />
                        <div>
                          <p className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#854D0E] mb-1">
                            Direct &amp; Non-Custodial Facilitation
                          </p>
                          <p className="text-xs sm:text-[13px] text-[#713F12] leading-relaxed font-medium">
                            {step.stickyNoteText}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
