"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/brand/Badge";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { FlowingMeshCanvas } from "@/components/canvas/FlowingMeshCanvas";
import { trackStudioModalOpen } from "@/lib/analytics";
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
      desc: "We architect operational infrastructure, source talent, configure ERPs & build alongside founders for shared equity.",
      href: "/studio",
      accent: "#635BFF",
      bgHover: "hover:border-[#635BFF]/60 hover:shadow-[0_8px_20px_-6px_rgba(99,91,255,0.15)]",
      badgeBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      icon: <Layers className="h-4 w-4 text-[#635BFF]" />,
    },
    {
      num: "02",
      title: "Partner Network",
      tagline: "Co-Founders & Talent",
      desc: "Have the business vision? Connect with vetted technical CTOs, GTM leaders & domain operators under mutual NDA.",
      href: "/network",
      accent: "#00A389",
      bgHover: "hover:border-[#00D4B2]/60 hover:shadow-[0_8px_20px_-6px_rgba(0,212,178,0.15)]",
      badgeBg: "bg-[#E6FFFA] text-[#007A66] border-[#B2F5EA]",
      icon: <Users className="h-4 w-4 text-[#00A389]" />,
    },
    {
      num: "03",
      title: "Capital Network",
      tagline: "Startup & Investor Match",
      desc: "Connect startups raising capital with angels & family offices (₹50K to ₹5Cr+) with transparent use of funds.",
      href: "/capital",
      accent: "#059669",
      bgHover: "hover:border-[#059669]/60 hover:shadow-[0_8px_20px_-6px_rgba(5,150,105,0.15)]",
      badgeBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      icon: <Coins className="h-4 w-4 text-[#059669]" />,
    },
    {
      num: "04",
      title: "1008 Playbook",
      tagline: "Operational Intelligence",
      desc: "Field-tested blueprints on zero-retainer survival, working capital credit & building profitable cash-flow enterprises.",
      href: "/knowledge",
      accent: "#FF7043",
      bgHover: "hover:border-[#FF7043]/60 hover:shadow-[0_8px_20px_-6px_rgba(255,112,67,0.15)]",
      badgeBg: "bg-[#FFF3EE] text-[#D94814] border-[#FFD8C9]",
      icon: <BookOpen className="h-4 w-4 text-[#FF7043]" />,
    },
  ];

  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] sm:min-h-screen flex flex-col justify-center items-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden bg-white">
      {/* 1. Architectural Box Grid Pattern with Radial Fade */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-55 pointer-events-none" />

      {/* 2. Stripe-Caliber Flowing Mesh Wave Artwork Canvas */}
      <FlowingMeshCanvas className="absolute top-0 right-0 w-full md:w-[50%] lg:w-[46%] xl:w-[42%] h-[100vh] max-h-[960px] opacity-75 pointer-events-none z-0" />

      {/* 3. Floating Ambient Motion Gradient Meshes */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[760px] h-[520px] bg-gradient-to-tr from-[#635BFF]/12 via-[#00D4B2]/08 to-transparent blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute top-1/4 -right-16 w-[480px] h-[500px] bg-gradient-to-bl from-[#FF7043]/08 via-[#635BFF]/07 to-transparent blur-[120px] pointer-events-none animate-float-reverse" />
      <div className="absolute top-1/3 -left-28 w-[460px] h-[380px] bg-gradient-to-br from-[#00D4B2]/08 via-[#635BFF]/06 to-transparent blur-[120px] pointer-events-none animate-pulse-subtle" />

      {/* 4. Subtle Technical Dot Matrix Accent Corners */}
      <div className="absolute left-8 top-1/4 w-44 h-44 bg-dots-matrix opacity-30 mask-radial-fade pointer-events-none hidden xl:block" />
      <div className="absolute right-8 top-1/3 w-44 h-44 bg-dots-matrix opacity-30 mask-radial-fade pointer-events-none hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" size="md" pulse>
              1008 Network // Venture Studio • Partner Network • Capital • Playbook
            </Badge>
          </div>

          {/* Primary Platform Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] leading-[1.15] font-sans">
            <span className="block">Build, partner, and invest in</span>
            <span className="block mt-1 sm:mt-1.5 bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#059669]">
              high-conviction Indian ventures.
            </span>
          </h1>

          {/* Platform Subtitle */}
          <p className="text-base sm:text-lg text-[#425466] leading-relaxed max-w-2xl mx-auto font-normal">
            The integrated ecosystem providing turnkey <strong>Venture Studio</strong> execution, curated <strong>Co-Founder & Talent Matchmaking</strong>, transparent <strong>Capital Rounds</strong>, and field-tested <strong>Operational Playbooks</strong>.
          </p>

          {/* Dual High-Conversion CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              href="#pillars"
              size="lg"
              variant="primary"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto text-base px-8 font-semibold shadow-[0_4px_14px_rgba(99,91,255,0.25)]"
            >
              Explore Four Pillars ↓
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={handleOpenModal}
              className="w-full sm:w-auto text-base font-semibold"
            >
              Apply to Build With Us
            </Button>
          </div>
        </div>

        {/* Four Pillars 2x2 Explanatory Grid */}
        <div className="w-full max-w-4xl mx-auto pt-8 sm:pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {pillars.map((pillar) => (
              <Link
                key={pillar.num}
                href={pillar.href}
                className={`p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-xs border border-[#E6E8EB] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-2xs ${pillar.bgHover}`}
              >
                {/* Subtle Top Indicator Line on Hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: pillar.accent }}
                />

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs shrink-0">
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

                  <p className="text-xs text-[#425466] leading-relaxed text-left">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#F1F4F8] flex items-center justify-between text-[11px] font-mono font-medium text-[#627D98]">
                  <span>{pillar.tagline}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#829AB1] group-hover:text-[#635BFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
