"use client";

import React from "react";
import { Search, PlusCircle, UserCheck } from "lucide-react";
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
        accentRing: "ring-[#635BFF]/10",
      },
      icon: (
        <div className="relative">
          <Search className="w-14 h-14 sm:w-16 sm:h-16 text-[#635BFF] stroke-[2.5]" />
        </div>
      ),
      description:
        "A business owner reaches out to 1008 Network to share what they are building, the venture vision, and the specific role they need to fill (CTO, GTM Lead, Ops Head).",
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
        accentRing: "ring-[#00D4B2]/10",
      },
      icon: (
        <div className="relative">
          <svg
            className="w-14 h-14 sm:w-16 sm:h-16 text-[#00A389]"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Lightbulb outline */}
            <path
              d="M22 28C22 21.3726 26.4772 16 32 16C37.5228 16 42 21.3726 42 28C42 32.5 39.5 36.5 36 39V45H28V39C24.5 36.5 22 32.5 22 28Z"
              fill="currentColor"
            />
            <path d="M28 49H36" stroke="#00D4B2" strokeWidth="2.5" />
            <path d="M30 53H34" stroke="#00D4B2" strokeWidth="2.5" />
            {/* Puzzle cut lines in lightbulb */}
            <path d="M32 20V26C33.5 26 34.5 27 34.5 28.5C34.5 30 33.5 31 32 31V37" stroke="#F0FDFB" strokeWidth="2.2" />
            <path d="M25 28.5H39" stroke="#F0FDFB" strokeWidth="2.2" />
            {/* Idea spark rays */}
            <path d="M32 8V12" stroke="currentColor" strokeWidth="2.5" />
            <path d="M46 14L43 17" stroke="currentColor" strokeWidth="2.5" />
            <path d="M18 14L21 17" stroke="currentColor" strokeWidth="2.5" />
            <path d="M50 28H46" stroke="currentColor" strokeWidth="2.5" />
            <path d="M18 28H14" stroke="currentColor" strokeWidth="2.5" />
            {/* Small check badge */}
            <circle cx="45" cy="45" r="9" fill="currentColor" />
            <path d="M42 45L44.5 47.5L48.5 42.5" stroke="#F0FDFB" strokeWidth="2.2" />
          </svg>
        </div>
      ),
      description:
        "1008 matching algorithm actively scans the talent pool, evaluating candidate profiles for domain track record, technical depth, and operational synergy.",
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
        accentRing: "ring-[#0A2540]/10",
      },
      icon: (
        <div className="relative">
          <svg
            className="w-14 h-14 sm:w-16 sm:h-16 text-[#0A2540]"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Gear body */}
            <path
              d="M32 18V12M32 52V46M46 32H52M12 32H18M41.9 22.1L46.1 17.9M17.9 46.1L22.1 41.9M41.9 41.9L46.1 46.1M17.9 17.9L22.1 22.1"
              stroke="currentColor"
              strokeWidth="3.5"
            />
            <circle cx="32" cy="32" r="15" fill="currentColor" />
            {/* Checkmark inside gear */}
            <path d="M26 32L30.5 36.5L38 27.5" stroke="#FFFFFF" strokeWidth="3" />
          </svg>
        </div>
      ),
      description:
        "Verified candidate profiles matching the requirements are delivered directly to the business owner to review and consider.",
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
        accentRing: "ring-[#635BFF]/10",
      },
      icon: (
        <div className="relative">
          <svg
            className="w-14 h-14 sm:w-16 sm:h-16 text-[#635BFF]"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Rocket fuselage */}
            <path
              d="M44 14C32 15 23 24 22 36L28 42C40 41 49 32 50 20L44 14Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
            />
            {/* Left fin */}
            <path d="M22 36L14 38L18 46L24 44" fill="currentColor" stroke="currentColor" strokeWidth="2" />
            {/* Right fin */}
            <path d="M28 42L26 50L34 46L36 38" fill="currentColor" stroke="currentColor" strokeWidth="2" />
            {/* Rocket window */}
            <circle cx="36" cy="28" r="3.5" fill="#00D4B2" />
            {/* Thrust flame */}
            <path d="M19 47L13 53L17 55L23 49" fill="#0A2540" />
            <path d="M21 49L17 53" stroke="#00D4B2" strokeWidth="2" />
          </svg>
        </div>
      ),
      description:
        "The business representative can connect directly with the candidate to evaluate chemistry and agree on personal terms with zero broker fees.",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white border-b border-[#E6E8EB]">
      {/* ============================================================ */}
      {/* 1. RETRO-MODERN GRAPHIC BACKGROUND ACCENTS */}
      {/* ============================================================ */}

      {/* Dotted Canvas Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: "radial-gradient(#CBD5E1 1.8px, transparent 1.8px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Ambient Gradient Glow */}
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

      {/* Floating Starburst Stickers */}
      <div className="absolute top-1/4 left-4 sm:left-10 pointer-events-none text-[#0A2540] opacity-70 hidden lg:block">
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L13.8 8.2L22 4.5L16.5 12L24 15.5L15.8 17.2L19.5 24L12 18.5L4.5 24L8.2 17.2L0 15.5L7.5 12L2 4.5L10.2 8.2L12 0Z" />
        </svg>
      </div>
      <div className="absolute top-2/3 right-6 sm:right-12 pointer-events-none text-[#0A2540] opacity-70 hidden lg:block">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L13.8 8.2L22 4.5L16.5 12L24 15.5L15.8 17.2L19.5 24L12 18.5L4.5 24L8.2 17.2L0 15.5L7.5 12L2 4.5L10.2 8.2L12 0Z" />
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
      {/* 2. REPLACED HEADLINE & SUBTEXT (Requested by User) */}
      {/* ============================================================ */}
      <div className="max-w-5xl mx-auto relative z-10 text-center mb-12 sm:mb-14 space-y-5">
        <div className="inline-flex items-center gap-2 flex-wrap justify-center">
          <Badge variant="indigo" size="md" pulse>
            1008 Community • Co-Founders & Talent
          </Badge>
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

        {/* Dual Primary Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onOpenPostModal}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#635BFF] hover:bg-[#5851EA] text-white font-semibold text-sm shadow-[0_4px_14px_rgba(99,91,255,0.28)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <PlusCircle className="h-4 w-4" />
            <span>Post a Requirement (For Business Owners)</span>
          </button>
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-[#F6F9FC] text-[#0A2540] border border-[#CBD5E1] font-semibold text-sm shadow-xs transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <UserCheck className="h-4 w-4 text-[#00A389]" />
            <span>Join Talent Pool (For Individuals)</span>
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. 2x2 MATRIX WITH ARTWORK ARROWS (1008 Colors, No Links) */}
      {/* ============================================================ */}
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Artwork Arrow 1: Box 1 -> Box 2 (Horizontal curve at top, desktop/tablet) */}
        <div className="hidden md:flex absolute top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center">
          <div className="bg-white/90 backdrop-blur-xs p-1.5 rounded-full shadow-xs border border-[#E6E8EB]">
            <svg
              className="w-14 h-8 text-[#635BFF]"
              viewBox="0 0 56 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 16C16 8 34 24 48 16" />
              <path d="M40 10L50 16L42 22" />
            </svg>
          </div>
        </div>

        {/* Artwork Arrow 2: Box 2 -> Box 3 (Diagonal looping connector down-left) */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center">
          <div className="bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full shadow-md border border-[#E6E8EB] flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#0A2540]">
            <span>Next</span>
            <svg
              className="w-5 h-5 text-[#00A389]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 5L5 19M5 19H15M5 19V9" />
            </svg>
          </div>
        </div>

        {/* Artwork Arrow 3: Box 3 -> Box 4 (Horizontal curve at bottom, desktop/tablet) */}
        <div className="hidden md:flex absolute top-[78%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none items-center justify-center">
          <div className="bg-white/90 backdrop-blur-xs p-1.5 rounded-full shadow-xs border border-[#E6E8EB]">
            <svg
              className="w-14 h-8 text-[#00A389]"
              viewBox="0 0 56 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 16C16 8 34 24 48 16" />
              <path d="M40 10L50 16L42 22" />
            </svg>
          </div>
        </div>

        {/* The 2 by 2 Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 lg:gap-10">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`group relative rounded-[28px] sm:rounded-[32px] ${step.theme.cardBg} p-7 sm:p-8 flex flex-col items-center justify-between shadow-[0_8px_24px_rgba(10,37,64,0.06)] border-2 ${step.theme.borderColor} hover:shadow-[0_16px_36px_rgba(10,37,64,0.1)] transition-all duration-300 min-h-[360px] sm:min-h-[380px]`}
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
              <div className="my-5 flex items-center justify-center py-2 transition-transform duration-300 group-hover:scale-108">
                {step.icon}
              </div>

              {/* Static Artwork Pill (NO LINK) + Explanatory Subtext */}
              <div className="w-full space-y-3.5 flex flex-col items-center">
                <span
                  className={`w-full max-w-[210px] py-2 sm:py-2.5 px-4 rounded-full ${step.theme.pillBg} text-white font-black text-xs sm:text-[12.5px] tracking-wider uppercase shadow-xs text-center select-none`}
                >
                  {step.pillText}
                </span>

                <p className="text-xs sm:text-[13px] text-[#425466] font-medium text-center leading-relaxed px-2">
                  {step.description}
                </p>
              </div>

              {/* Mobile Sequential Arrow (Between stacked cards on small screens) */}
              {idx < steps.length - 1 && (
                <div className="md:hidden flex justify-center w-full pt-4 -mb-2 text-[#635BFF]">
                  <svg
                    className="w-5 h-5 animate-bounce"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5V19M19 12L12 19L5 12" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
