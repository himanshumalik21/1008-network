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
      pillText: "SEND REQUIREMENT",
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
          className="w-16 h-16 sm:w-20 sm:h-20 text-[#635BFF]"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Requirement Document */}
          <rect x="10" y="6" width="28" height="36" rx="5" className="fill-[#635BFF]/08 stroke-[#635BFF]" strokeWidth="2.4" />
          <path d="M16 14h16M16 20h12M16 26h8" stroke="#635BFF" strokeWidth="2.4" />
          {/* Target / Spark badge */}
          <circle cx="32" cy="30" r="7" className="fill-white stroke-[#635BFF]" strokeWidth="2.2" />
          <path d="M29.5 30l2 2 3.5-4" stroke="#635BFF" strokeWidth="2.2" />
        </svg>
      ),
      description:
        "A business owner reaches out to 1008 Network detailing what they are building, the venture vision, and the specific role needed (CTO, GTM Lead, Ops Head).",
    },
    {
      number: "2",
      title: "Algorithm Scan",
      pillText: "ALGORITHM SCAN",
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
          className="w-16 h-16 sm:w-20 sm:h-20 text-[#00A389]"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Algorithmic neural CPU / matching chip */}
          <rect x="11" y="11" width="26" height="26" rx="5" className="fill-[#00D4B2]/10 stroke-[#00A389]" strokeWidth="2.4" />
          <circle cx="24" cy="24" r="5" className="fill-[#00A389] stroke-[#00A389]" />
          {/* Radar scan lines */}
          <line x1="24" y1="4" x2="24" y2="11" stroke="#00A389" strokeWidth="2.4" />
          <line x1="24" y1="37" x2="24" y2="44" stroke="#00A389" strokeWidth="2.4" />
          <line x1="4" y1="24" x2="11" y2="24" stroke="#00A389" strokeWidth="2.4" />
          <line x1="37" y1="24" x2="44" y2="24" stroke="#00A389" strokeWidth="2.4" />
          {/* Diagonal scan nodes */}
          <circle cx="16" cy="16" r="2" className="fill-[#00D4B2]" />
          <circle cx="32" cy="32" r="2" className="fill-[#00D4B2]" />
          <circle cx="16" cy="32" r="2" className="fill-[#00D4B2]" />
          <circle cx="32" cy="16" r="2" className="fill-[#00D4B2]" />
        </svg>
      ),
      description:
        "1008 matching algorithm actively scans the curated talent pool, evaluating candidate profiles for domain track record, technical depth, and operational synergy.",
    },
    {
      number: "3",
      title: "Profile Sent",
      pillText: "PROFILE SENT",
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
          className="w-16 h-16 sm:w-20 sm:h-20 text-[#0A2540]"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* User profile card */}
          <rect x="8" y="9" width="32" height="30" rx="5" className="fill-[#0A2540]/06 stroke-[#0A2540]" strokeWidth="2.4" />
          <circle cx="19" cy="20" r="4.5" stroke="#0A2540" strokeWidth="2.2" />
          <path d="M12 31c0-3.5 3-5.5 7-5.5s7 2 7 5.5" stroke="#0A2540" strokeWidth="2.2" />
          <line x1="28" y1="17" x2="35" y2="17" stroke="#0A2540" strokeWidth="2.2" />
          <line x1="28" y1="23" x2="35" y2="23" stroke="#0A2540" strokeWidth="2.2" />
          {/* Verified green delivery badge */}
          <circle cx="35" cy="31" r="5.5" className="fill-[#10B981] stroke-white" strokeWidth="2" />
          <path d="M33 31l1.5 1.5 3-3" stroke="white" strokeWidth="2" />
        </svg>
      ),
      description:
        "Verified candidate profiles matching the requirements are delivered directly to the business owner's inbox to review and consider.",
    },
    {
      number: "4",
      title: "Connect Directly",
      pillText: "CONNECT DIRECTLY",
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
          className="w-16 h-16 sm:w-20 sm:h-20 text-[#635BFF]"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Partnership handshake */}
          <path d="M16 26l6-6a4 4 0 0 1 5.6 0l2.5 2.5a4 4 0 0 1 0 5.6L24 34l-8-8z" className="fill-[#635BFF]/10 stroke-[#635BFF]" strokeWidth="2.4" />
          <path d="M26 18l4.5-4.5a3 3 0 0 1 4.2 0l3 3a3 3 0 0 1 0 4.2L33 25" stroke="#635BFF" strokeWidth="2.2" />
          <path d="M8 20l6-6a3 3 0 0 1 4.2 0l2 2" stroke="#635BFF" strokeWidth="2.2" />
          {/* Mutual synergy spark */}
          <circle cx="24" cy="9" r="3" className="fill-[#00D4B2]" />
        </svg>
      ),
      description:
        "The business representative connects directly with the candidate to evaluate mutual chemistry and agree on personal terms.",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Background Micro-Dot Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: "radial-gradient(#CBD5E1 1.8px, transparent 1.8px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-[#635BFF]/10 via-[#00D4B2]/08 to-[#4F46E5]/06 blur-[130px] pointer-events-none" />

      {/* Top-Right Halftone Stipple Pattern */}
      <div
        className="absolute -top-10 -right-10 w-72 sm:w-96 h-72 sm:h-96 pointer-events-none opacity-30"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#635BFF]">
          <defs>
            <pattern id="hw-tr" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="2.6" fill="currentColor" />
            </pattern>
            <mask id="blob-mask-tr">
              <path
                d="M130,20 C170,30 190,70 185,120 C180,170 140,195 90,185 C40,175 10,135 25,85 C40,35 90,10 130,20 Z"
                fill="white"
              />
            </mask>
          </defs>
          <rect width="200" height="200" fill="url(#hw-tr)" mask="url(#blob-mask-tr)" />
        </svg>
      </div>

      {/* Bottom-Left Halftone Stipple Pattern */}
      <div
        className="absolute -bottom-16 -left-16 w-80 sm:w-96 h-80 sm:h-96 pointer-events-none opacity-25"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#00A389]">
          <defs>
            <pattern id="hw-bl" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="2.6" fill="currentColor" />
            </pattern>
            <mask id="blob-mask-bl">
              <path
                d="M70,15 C120,5 175,40 165,95 C155,150 115,185 65,175 C15,165 5,120 15,70 C25,20 20,25 70,15 Z"
                fill="white"
              />
            </mask>
          </defs>
          <rect width="200" height="200" fill="url(#hw-bl)" mask="url(#blob-mask-bl)" />
        </svg>
      </div>

      {/* Bottom-Right 3D Isometric Wireframe Sphere */}
      <div className="absolute -bottom-24 -right-20 w-80 sm:w-96 h-80 sm:h-96 pointer-events-none opacity-30">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#0A2540]" stroke="currentColor" fill="none">
          <circle cx="100" cy="100" r="85" strokeWidth="1.8" />
          <ellipse cx="100" cy="100" rx="65" ry="85" strokeWidth="1.2" />
          <ellipse cx="100" cy="100" rx="40" ry="85" strokeWidth="1.2" />
          <ellipse cx="100" cy="100" rx="18" ry="85" strokeWidth="1.2" />
          <ellipse cx="100" cy="100" rx="85" ry="65" strokeWidth="1.2" />
          <ellipse cx="100" cy="100" rx="85" ry="40" strokeWidth="1.2" />
          <ellipse cx="100" cy="100" rx="85" ry="18" strokeWidth="1.2" />
        </svg>
      </div>

      {/* ============================================================ */}
      {/* 1. HEADER & HOW IT WORKS BADGE */}
      {/* ============================================================ */}
      <div className="max-w-5xl mx-auto relative z-10 text-center mb-12 sm:mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 flex-wrap justify-center">
          <Badge variant="indigo" size="md" pulse>
            1008 Community • Co-Founders & Talent
          </Badge>
          <span className="text-xs font-mono font-semibold text-[#00A389] bg-[#E6FFFA] px-3 py-1 rounded-full border border-[#B2F5EA]">
            How It Works
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans leading-tight">
          Have the business vision.{" "}
          <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
            Find talent, co-founders, or join a business.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#425466] leading-relaxed max-w-3xl mx-auto font-normal">
          A business owner can reach out to 1008 Network to post what they are building and what role they need to fill. Individuals can join our curated talent pool. Our algorithm matches requirements and introduces the parties directly.
        </p>
      </div>

      {/* ============================================================ */}
      {/* 2. 2x2 MATRIX OF CARDS (1008 Brand Colors, High Quality Icons, No Arrows, No Links) */}
      {/* ============================================================ */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`group relative rounded-[28px] sm:rounded-[34px] ${step.theme.cardBg} p-7 sm:p-9 flex flex-col items-center justify-between shadow-[0_8px_24px_rgba(10,37,64,0.06)] border-2 ${step.theme.borderColor} hover:shadow-[0_16px_36px_rgba(10,37,64,0.1)] transition-all duration-300 min-h-[360px] sm:min-h-[390px]`}
            >
              {/* Floating Top-Left Number Circle */}
              <div className="w-full flex items-center justify-start">
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${step.theme.numberBg} text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-md`}
                >
                  {step.number}
                </div>
              </div>

              {/* Bold Center Graphic Icon */}
              <div className="my-6 flex items-center justify-center py-2 transition-transform duration-300 group-hover:scale-110">
                {step.icon}
              </div>

              {/* Static Artwork Pill (NO LINK) + Explanatory Subtext */}
              <div className="w-full space-y-3.5 flex flex-col items-center">
                <span
                  className={`w-full max-w-[210px] py-2.5 sm:py-3 px-4 rounded-full ${step.theme.pillBg} text-white font-black text-xs sm:text-[12.5px] tracking-wider uppercase shadow-xs text-center select-none`}
                >
                  {step.pillText}
                </span>

                <p className="text-xs sm:text-[13px] text-[#425466] font-medium text-center leading-relaxed px-2">
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
