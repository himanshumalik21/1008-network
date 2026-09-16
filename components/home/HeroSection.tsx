"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/brand/Badge";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import dynamic from "next/dynamic";
import { trackStudioModalOpen } from "@/lib/analytics";

const FlowingMeshCanvas = dynamic(
  () =>
    import("@/components/canvas/FlowingMeshCanvas").then(
      (mod) => mod.FlowingMeshCanvas
    ),
  { ssr: false }
);
import {
  ArrowRight,
  Layers,
  Users,
  Coins,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    trackStudioModalOpen("hero_primary_cta");
    setModalOpen(true);
  };

  const pillars = [
    {
      num: "01",
      title: "Venture Studio",
      tagline: "Turnkey Build & Equity",
      cta: "Explore Studio",
      desc: "We architect operational infrastructure, source CXO talent, configure ERPs & build alongside founders for shared equity.",
      href: "/studio",
      accent: "#635BFF",
      bgHover: "hover:border-[#635BFF]/60 hover:shadow-[0_12px_24px_-8px_rgba(99,91,255,0.16)]",
      badgeBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      iconBg: "bg-[#F0F0FF] border-[#E0E0FF] text-[#635BFF]",
      icon: <Layers className="h-4 w-4 text-[#635BFF]" />,
    },
    {
      num: "02",
      title: "Partner Network",
      tagline: "Co-Founders & Talent",
      cta: "Connect Network",
      desc: "Have the business vision? Connect with vetted technical CTOs, GTM leaders & domain operators under mutual NDA.",
      href: "/network",
      accent: "#00A389",
      bgHover: "hover:border-[#00D4B2]/60 hover:shadow-[0_12px_24px_-8px_rgba(0,212,178,0.16)]",
      badgeBg: "bg-[#E6FFFA] text-[#007A66] border-[#B2F5EA]",
      iconBg: "bg-[#E6FFFA] border-[#B2F5EA] text-[#007A66]",
      icon: <Users className="h-4 w-4 text-[#00A389]" />,
    },
    {
      num: "03",
      title: "Capital Network",
      tagline: "Startup & Investor Match",
      cta: "Access Capital",
      desc: "Connect high-conviction startups raising capital with angels & family offices (₹50K to ₹5Cr+) with transparent fund use.",
      href: "/capital",
      accent: "#059669",
      bgHover: "hover:border-[#059669]/60 hover:shadow-[0_12px_24px_-8px_rgba(5,150,105,0.16)]",
      badgeBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      iconBg: "bg-[#ECFDF5] border-[#A7F3D0] text-[#059669]",
      icon: <Coins className="h-4 w-4 text-[#059669]" />,
    },
    {
      num: "04",
      title: "1008 Playbook",
      tagline: "Operational Intelligence",
      cta: "Read Playbook",
      desc: "Field-tested blueprints on zero-retainer survival, working capital credit & building profitable cash-flow enterprises.",
      href: "/knowledge",
      accent: "#FF7043",
      bgHover: "hover:border-[#FF7043]/60 hover:shadow-[0_12px_24px_-8px_rgba(255,112,67,0.16)]",
      badgeBg: "bg-[#FFF3EE] text-[#D94814] border-[#FFD8C9]",
      iconBg: "bg-[#FFF3EE] border-[#FFD8C9] text-[#D94814]",
      icon: <BookOpen className="h-4 w-4 text-[#FF7043]" />,
    },
  ];

  return (
    <section className="relative w-full h-full lg:h-[calc(100dvh-4rem-2.5rem)] flex flex-col justify-center items-center py-6 sm:py-8 lg:py-0 overflow-hidden bg-white">
      {/* 1. Architectural Box Grid Pattern with Radial Fade */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-40 pointer-events-none" />

      {/* 2. Stripe-Caliber Clean Dynamic Silk Wave Artwork Canvas */}
      <FlowingMeshCanvas className="absolute top-0 right-0 w-full md:w-[52%] lg:w-[48%] xl:w-[44%] h-full max-h-[960px] opacity-90 pointer-events-none z-0" />

      {/* 3. Floating Ambient Motion Gradient Meshes */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[760px] h-[520px] bg-gradient-to-tr from-[#635BFF]/10 via-[#00D4B2]/07 to-transparent blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute top-1/4 -right-16 w-[480px] h-[500px] bg-gradient-to-bl from-[#FF7043]/06 via-[#635BFF]/05 to-transparent blur-[120px] pointer-events-none animate-float-reverse" />
      <div className="absolute top-1/3 -left-28 w-[460px] h-[380px] bg-gradient-to-br from-[#00D4B2]/06 via-[#635BFF]/04 to-transparent blur-[120px] pointer-events-none animate-pulse-subtle" />

      {/* 4. Subtle Technical Dot Matrix Accent Corners */}
      <div className="absolute left-6 top-1/4 w-36 h-36 bg-dots-matrix opacity-20 mask-radial-fade pointer-events-none hidden xl:block" />
      <div className="absolute right-6 top-1/3 w-36 h-36 bg-dots-matrix opacity-20 mask-radial-fade pointer-events-none hidden xl:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-evenly h-full max-h-[740px]">
        {/* Top Header & Value Proposition Block */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-2.5">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" size="sm" pulse>
              1008 Network // Venture Studio • Partner Network • Capital • Playbook
            </Badge>
          </div>

          {/* Primary Platform Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold tracking-tight text-[#0A2540] leading-[1.15] font-sans">
            <span className="block">Build, partner, and invest in</span>
            <span className="block mt-0.5 bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00A389] to-[#059669]">
              high-conviction Indian ventures.
            </span>
          </h1>

          {/* Platform Subtitle */}
          <p className="text-xs sm:text-sm text-[#425466] leading-relaxed max-w-xl mx-auto font-normal">
            The integrated ecosystem providing turnkey <strong>Venture Studio</strong> execution, curated <strong>Co-Founder & Talent Matchmaking</strong>, transparent <strong>Capital Rounds</strong>, and field-tested <strong>Operational Playbooks</strong>.
          </p>

          {/* Dual High-Conversion CTAs */}
          <div className="pt-0.5 flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <Button
              size="md"
              variant="primary"
              onClick={handleOpenModal}
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto text-xs sm:text-sm px-6 py-2 font-semibold shadow-[0_4px_14px_rgba(99,91,255,0.25)]"
            >
              Apply to Build With Us
            </Button>
            <Button
              href="/studio"
              size="md"
              variant="secondary"
              className="w-full sm:w-auto text-xs sm:text-sm px-5 py-2 font-semibold"
            >
              Explore Studio Model
            </Button>
          </div>
        </div>

        {/* Four Pillars 2x2 Explanatory Grid */}
        <div className="w-full max-w-4xl mx-auto pt-2 sm:pt-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {pillars.map((pillar) => (
              <Link
                key={pillar.num}
                href={pillar.href}
                className={`p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2E8F0] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-2xs ${pillar.bgHover}`}
              >
                {/* Subtle Top Indicator Line on Hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: pillar.accent }}
                />

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg border flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs shrink-0 ${pillar.iconBg}`}>
                        {pillar.icon}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#0A2540] group-hover:text-[#635BFF] transition-colors">
                        {pillar.title}
                      </h3>
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${pillar.badgeBg}`}>
                      Pillar {pillar.num}
                    </span>
                  </div>

                  <p className="text-xs text-[#425466] leading-relaxed text-left font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-2 mt-2 border-t border-[#F1F4F8] flex items-center justify-between text-[11px] font-mono font-medium text-[#627D98]">
                  <span>{pillar.tagline}</span>
                  <div className="flex items-center gap-1 font-semibold group-hover:text-[#635BFF] transition-colors">
                    <span>{pillar.cta}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#829AB1] group-hover:text-[#635BFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <StudioApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
