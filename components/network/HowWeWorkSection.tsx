"use client";

import React from "react";
import { ArrowRight, Search } from "lucide-react";

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
      icon: (
        <div className="relative">
          <Search className="w-16 h-16 sm:w-20 sm:h-20 text-black stroke-[2.5]" />
        </div>
      ),
      description:
        "A business owner reaches out to share their venture thesis, stage, and the exact role to fill (CTO, GTM Lead, Ops Head).",
      action: onOpenPostModal,
    },
    {
      number: "2",
      title: "Algorithm Scan",
      pillText: "ALGORITHM SCAN",
      icon: (
        <div className="relative">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 text-black"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Lightbulb outline */}
            <path d="M22 28C22 21.3726 26.4772 16 32 16C37.5228 16 42 21.3726 42 28C42 32.5 39.5 36.5 36 39V45H28V39C24.5 36.5 22 32.5 22 28Z" fill="black" />
            <path d="M28 49H36" stroke="white" strokeWidth="2.5" />
            <path d="M30 53H34" stroke="white" strokeWidth="2.5" />
            {/* Puzzle cut lines in lightbulb */}
            <path d="M32 20V26C33.5 26 34.5 27 34.5 28.5C34.5 30 33.5 31 32 31V37" stroke="#D4FF00" strokeWidth="2.2" />
            <path d="M25 28.5H39" stroke="#D4FF00" strokeWidth="2.2" />
            {/* Idea spark rays */}
            <path d="M32 8V12" stroke="black" strokeWidth="2.5" />
            <path d="M46 14L43 17" stroke="black" strokeWidth="2.5" />
            <path d="M18 14L21 17" stroke="black" strokeWidth="2.5" />
            <path d="M50 28H46" stroke="black" strokeWidth="2.5" />
            <path d="M18 28H14" stroke="black" strokeWidth="2.5" />
            {/* Small check badge */}
            <circle cx="45" cy="45" r="9" fill="black" />
            <path d="M42 45L44.5 47.5L48.5 42.5" stroke="#D4FF00" strokeWidth="2.2" />
          </svg>
        </div>
      ),
      description:
        "1008 algorithm scans through the verified talent pool, evaluating track records, technical depth, and operational synergy.",
      action: onOpenJoinModal,
    },
    {
      number: "3",
      title: "Profile Sent",
      pillText: "PROFILE SENT",
      icon: (
        <div className="relative">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 text-black"
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
              stroke="black"
              strokeWidth="4"
            />
            <circle cx="32" cy="32" r="15" fill="black" />
            {/* Checkmark inside gear */}
            <path d="M26 32L30.5 36.5L38 27.5" stroke="#D4FF00" strokeWidth="3" />
          </svg>
        </div>
      ),
      description:
        "Verified candidate profiles matching the requirements are delivered directly to the business owner to review and consider.",
      action: onOpenPostModal,
    },
    {
      number: "4",
      title: "Connect Directly",
      pillText: "CONNECT DIRECTLY",
      icon: (
        <div className="relative">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 text-black"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Rocket fuselage */}
            <path
              d="M44 14C32 15 23 24 22 36L28 42C40 41 49 32 50 20L44 14Z"
              fill="black"
              stroke="black"
              strokeWidth="2"
            />
            {/* Left fin */}
            <path d="M22 36L14 38L18 46L24 44" fill="black" stroke="black" strokeWidth="2" />
            {/* Right fin */}
            <path d="M28 42L26 50L34 46L36 38" fill="black" stroke="black" strokeWidth="2" />
            {/* Rocket window */}
            <circle cx="36" cy="28" r="3.5" fill="#D4FF00" />
            {/* Thrust flame */}
            <path d="M19 47L13 53L17 55L23 49" fill="black" />
            <path d="M21 49L17 53" stroke="#D4FF00" strokeWidth="2" />
          </svg>
        </div>
      ),
      description:
        "The business rep connects directly with the candidate to evaluate chemistry and agree on personal terms with 0 broker fees.",
      action: onOpenJoinModal,
    },
  ];

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white border-y border-[#E6E8EB]">
      {/* ============================================================ */}
      {/* 1. RETRO-MODERN GRAPHIC BACKGROUND ACCENTS */}
      {/* ============================================================ */}

      {/* Dotted Canvas Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: "radial-gradient(#CBD5E1 1.8px, transparent 1.8px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Top-Right Halftone Stipple Pattern */}
      <div
        className="absolute -top-10 -right-10 w-72 sm:w-96 h-72 sm:h-96 pointer-events-none opacity-40"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#635BFF]">
          <defs>
            <pattern id="halftone-tr" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="2.8" fill="currentColor" />
            </pattern>
            <mask id="blob-mask-tr">
              <path
                d="M130,20 C170,30 190,70 185,120 C180,170 140,195 90,185 C40,175 10,135 25,85 C40,35 90,10 130,20 Z"
                fill="white"
              />
            </mask>
          </defs>
          <rect width="200" height="200" fill="url(#halftone-tr)" mask="url(#blob-mask-tr)" />
        </svg>
      </div>

      {/* Bottom-Left Halftone Stipple Pattern */}
      <div
        className="absolute -bottom-16 -left-16 w-80 sm:w-96 h-80 sm:h-96 pointer-events-none opacity-35"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#635BFF]">
          <defs>
            <pattern id="halftone-bl" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="6" cy="6" r="2.8" fill="currentColor" />
            </pattern>
            <mask id="blob-mask-bl">
              <path
                d="M70,15 C120,5 175,40 165,95 C155,150 115,185 65,175 C15,165 5,120 15,70 C25,20 20,25 70,15 Z"
                fill="white"
              />
            </mask>
          </defs>
          <rect width="200" height="200" fill="url(#halftone-bl)" mask="url(#blob-mask-bl)" />
        </svg>
      </div>

      {/* Floating Starburst Stickers */}
      {/* Left Starburst */}
      <div className="absolute top-1/3 left-4 sm:left-12 pointer-events-none text-[#0A2540] opacity-80 hidden md:block">
        <svg className="w-10 h-10 animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L13.8 8.2L22 4.5L16.5 12L24 15.5L15.8 17.2L19.5 24L12 18.5L4.5 24L8.2 17.2L0 15.5L7.5 12L2 4.5L10.2 8.2L12 0Z" />
        </svg>
      </div>

      {/* Right Starburst */}
      <div className="absolute top-2/3 right-6 sm:right-16 pointer-events-none text-[#0A2540] opacity-80 hidden md:block">
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L13.8 8.2L22 4.5L16.5 12L24 15.5L15.8 17.2L19.5 24L12 18.5L4.5 24L8.2 17.2L0 15.5L7.5 12L2 4.5L10.2 8.2L12 0Z" />
        </svg>
      </div>

      {/* Bottom-Right 3D Isometric Wireframe Sphere */}
      <div className="absolute -bottom-24 -right-20 w-80 sm:w-96 h-80 sm:h-96 pointer-events-none opacity-40">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#0A2540]" stroke="currentColor" fill="none">
          {/* Outer circle */}
          <circle cx="100" cy="100" r="85" strokeWidth="1.8" />
          {/* Longitude ellipses */}
          <ellipse cx="100" cy="100" rx="65" ry="85" strokeWidth="1.2" />
          <ellipse cx="100" cy="100" rx="40" ry="85" strokeWidth="1.2" />
          <ellipse cx="100" cy="100" rx="18" ry="85" strokeWidth="1.2" />
          {/* Latitude ellipses */}
          <ellipse cx="100" cy="100" rx="85" ry="65" strokeWidth="1.2" />
          <ellipse cx="100" cy="100" rx="85" ry="40" strokeWidth="1.2" />
          <ellipse cx="100" cy="100" rx="85" ry="18" strokeWidth="1.2" />
        </svg>
      </div>

      {/* ============================================================ */}
      {/* 2. SECTION HEADER (HOW [->] WE WORK) */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto relative z-10 text-center mb-16 sm:mb-20 space-y-3">
        <div className="inline-flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
          <span className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0A2540] tracking-tight uppercase font-sans">
            How
          </span>
          <span className="inline-flex items-center justify-center px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-full border-[2.5px] border-[#635BFF] text-[#635BFF] bg-white shadow-xs">
            <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 stroke-[3]" />
          </span>
        </div>
        <div className="text-4xl sm:text-6xl md:text-7xl font-black text-[#635BFF] tracking-tight uppercase font-sans">
          We Work
        </div>
        <p className="text-sm sm:text-base text-[#425466] max-w-2xl mx-auto pt-3 font-medium leading-relaxed">
          You send the requirement, 1008 algorithm scans the talent pool, and we introduce verified candidate profiles directly to agree on personal terms.
        </p>
      </div>

      {/* ============================================================ */}
      {/* 3. 4-STEP PROCESS CARDS (LIVELY CHARTREUSE & PURPLE PILLS) */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-[32px] sm:rounded-[36px] bg-[#D4FF00] p-7 sm:p-8 flex flex-col items-center justify-between shadow-[0_14px_34px_rgba(0,0,0,0.08)] border-2 border-[#0A2540]/10 hover:shadow-[0_20px_48px_rgba(0,0,0,0.14)] hover:-translate-y-1.5 transition-all duration-300 min-h-[400px] sm:min-h-[440px]"
            >
              {/* Floating Top-Left Black Number Circle */}
              <div className="w-full flex items-center justify-start">
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#0A2540] text-white font-black text-xl sm:text-2xl flex items-center justify-center shadow-md">
                  {step.number}
                </div>
              </div>

              {/* Bold Black Central Graphic Icon */}
              <div className="my-6 flex items-center justify-center py-2 transition-transform duration-300 group-hover:scale-110">
                {step.icon}
              </div>

              {/* Action Pill + Explanatory Subtext */}
              <div className="w-full space-y-3.5 flex flex-col items-center">
                <button
                  type="button"
                  onClick={step.action}
                  className="w-full max-w-[220px] py-2.5 sm:py-3 px-4 rounded-full bg-[#635BFF] hover:bg-[#5349E8] text-white font-black text-xs sm:text-[13px] tracking-wider uppercase shadow-[0_4px_14px_rgba(99,91,255,0.35)] transition-all hover:scale-105 active:scale-95 cursor-pointer text-center"
                >
                  {step.pillText}
                </button>

                <p className="text-xs sm:text-[12.5px] text-[#0A2540] font-semibold text-center leading-relaxed px-1">
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
