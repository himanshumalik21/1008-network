"use client";

import React from "react";
import { Badge } from "@/components/brand/Badge";

interface HowWeWorkSectionProps {
  onOpenPostModal?: () => void;
  onOpenJoinModal?: () => void;
}

export function HowWeWorkSection({
  onOpenPostModal,
  onOpenJoinModal,
}: HowWeWorkSectionProps) {
  const steps = [
    {
      number: "1",
      title: "Send Requirement",
      pillText: "Requirement",
      theme: {
        cardBg: "bg-[#F8F9FE]",
        borderColor: "border-[#635BFF]/25 hover:border-[#635BFF]",
        numberBg: "bg-[#635BFF]",
        pillBg: "bg-[#635BFF]",
        iconBg: "bg-[#F0F0FF]",
        iconBorder: "border-[#E0E0FF]",
        accentColor: "text-[#635BFF]",
      },
      icon: (
        <svg
          className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#635BFF]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Document with folded corner */}
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          {/* Requirement checklist lines */}
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="13" y2="17" />
          {/* Tiny target spark */}
          <circle cx="16" cy="17" r="1.5" className="fill-[#635BFF]" />
        </svg>
      ),
      description:
        "A business owner reaches out to 1008 Network detailing what they are building, their venture vision, and the specific role needed (CTO, GTM Lead, Ops Head).",
    },
    {
      number: "2",
      title: "Algorithm Scan",
      pillText: "Algorithmic Match",
      theme: {
        cardBg: "bg-[#F0FDFB]",
        borderColor: "border-[#00D4B2]/35 hover:border-[#00A389]",
        numberBg: "bg-[#00A389]",
        pillBg: "bg-[#00A389]",
        iconBg: "bg-[#E6FFFA]",
        iconBorder: "border-[#B2F5EA]",
        accentColor: "text-[#00A389]",
      },
      icon: (
        <svg
          className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#00A389]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Algorithmic neural CPU / matching chip */}
          <rect x="5" y="5" width="14" height="14" rx="3" />
          <circle cx="12" cy="12" r="2.5" className="fill-[#00A389]" />
          {/* Radar scan rays */}
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="2" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="22" y2="12" />
          <circle cx="17" cy="7" r="1" className="fill-[#00D4B2]" />
          <circle cx="7" cy="17" r="1" className="fill-[#00D4B2]" />
        </svg>
      ),
      description:
        "1008 matching algorithm actively scans the curated talent pool, evaluating candidate profiles for domain track record, technical depth, and synergy.",
    },
    {
      number: "3",
      title: "Profile Sent",
      pillText: "Direct Delivery",
      theme: {
        cardBg: "bg-[#F8FAFC]",
        borderColor: "border-[#0A2540]/20 hover:border-[#0A2540]",
        numberBg: "bg-[#0A2540]",
        pillBg: "bg-[#0A2540]",
        iconBg: "bg-[#F1F5F9]",
        iconBorder: "border-[#CBD5E1]",
        accentColor: "text-[#0A2540]",
      },
      icon: (
        <svg
          className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#0A2540]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* User profile card with verified badge */}
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <circle cx="9" cy="11" r="2.5" />
          <path d="M5 17c0-2 1.8-3 4-3s4 1 4 3" />
          <line x1="15" y1="9" x2="18" y2="9" />
          <line x1="15" y1="13" x2="18" y2="13" />
          {/* Verified green check dot */}
          <circle cx="17" cy="17" r="2.5" className="fill-[#10B981] stroke-white" strokeWidth="1" />
        </svg>
      ),
      description:
        "Verified candidate profiles matching the requirements are delivered directly to the business owner's inbox to review and consider.",
    },
    {
      number: "4",
      title: "Connect Directly",
      pillText: "Personal Terms",
      theme: {
        cardBg: "bg-gradient-to-br from-[#F8F9FE] via-white to-[#F0FDFB]",
        borderColor: "border-[#635BFF]/30 hover:border-[#00D4B2]",
        numberBg: "bg-gradient-to-r from-[#635BFF] to-[#00A389]",
        pillBg: "bg-gradient-to-r from-[#635BFF] to-[#00A389]",
        iconBg: "bg-[#F0F0FF]",
        iconBorder: "border-[#E0E0FF]",
        accentColor: "text-[#635BFF]",
      },
      icon: (
        <svg
          className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#635BFF]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Handshake / Direct Partnership icon */}
          <path d="M7 16l3-3a2.5 2.5 0 0 1 3.5 0l1 1a2.5 2.5 0 0 1 0 3.5L12 20" />
          <path d="M12 8l3-3a2.5 2.5 0 0 1 3.5 0l1 1a2.5 2.5 0 0 1 0 3.5L17 12" />
          <path d="M3 13l3-3a2 2 0 0 1 2.8 0l1 1" />
          <circle cx="12" cy="4" r="1.5" className="fill-[#00D4B2]" />
        </svg>
      ),
      description:
        "The business representative connects directly with the candidate to evaluate mutual chemistry and agree on personal terms with zero broker fees.",
    },
  ];

  return (
    <section className="relative w-full pt-4 pb-8 sm:pt-6 sm:pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white border-b border-[#E6E8EB]">
      {/* Background Micro-Dot Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(#CBD5E1 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Soft Ambient Radiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-64 bg-gradient-to-r from-[#635BFF]/08 via-[#00D4B2]/06 to-[#4F46E5]/05 blur-[100px] pointer-events-none" />

      {/* ============================================================ */}
      {/* 1. HEADER (Compact, Responsive, Fits in Viewport) */}
      {/* ============================================================ */}
      <div className="max-w-4xl mx-auto relative z-10 text-center mb-5 sm:mb-6 space-y-2.5">
        <div className="inline-flex items-center gap-2 flex-wrap justify-center">
          <Badge variant="indigo" size="sm" pulse>
            1008 Community • Co-Founders & Talent
          </Badge>
          <span className="text-[11px] font-mono font-semibold text-[#00A389] bg-[#E6FFFA] px-2.5 py-0.5 rounded-full border border-[#B2F5EA]">
            How It Works
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold tracking-tight text-[#0A2540] font-sans leading-tight">
          Have the business vision.{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
            Find talent, co-founders, or join a business.
          </span>
        </h1>

        <p className="text-xs sm:text-[13.5px] text-[#425466] leading-relaxed max-w-2xl mx-auto font-normal">
          A business owner can reach out to 1008 Network to post what they are building and what role they need to fill. Individuals can join our curated talent pool. Our algorithm matches requirements and introduces the parties directly.
        </p>
      </div>

      {/* ============================================================ */}
      {/* 2. 2x2 MATRIX OF COMPACT BOXES (1008 Colors, No Links, No Arrows) */}
      {/* ============================================================ */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`relative rounded-2xl ${step.theme.cardBg} p-4 sm:p-4.5 flex flex-col justify-between border-2 ${step.theme.borderColor} shadow-2xs hover:shadow-xs transition-all duration-200`}
            >
              {/* Header: Icon + Number + Title on Left, Static Pill on Right */}
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${step.theme.iconBg} flex items-center justify-center shrink-0 border ${step.theme.iconBorder} shadow-2xs`}
                  >
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`w-5 h-5 rounded-md ${step.theme.numberBg} text-white text-[11px] font-black flex items-center justify-center shadow-2xs shrink-0`}
                    >
                      {step.number}
                    </span>
                    <h3 className="text-sm sm:text-[14.5px] font-bold text-[#0A2540] leading-none">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Static Artwork Pill (NO LINK) */}
                <span
                  className={`text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full uppercase ${step.theme.pillBg} text-white shrink-0 select-none`}
                >
                  {step.pillText}
                </span>
              </div>

              {/* Crisp Explanatory Subtext */}
              <p className="text-xs sm:text-[12.5px] text-[#425466] leading-relaxed pl-0.5">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
