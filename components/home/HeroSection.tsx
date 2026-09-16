"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import dynamic from "next/dynamic";

const FlowingMeshCanvas = dynamic(
  () =>
    import("@/components/canvas/FlowingMeshCanvas").then(
      (mod) => mod.FlowingMeshCanvas
    ),
  { ssr: false }
);
import {
  Layers,
  Users,
  Coins,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export function HeroSection() {

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
      desc: "Have the business vision? Connect with vetted technical CTOs, GTM leaders & domain operators for shared equity.",
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
    <section className="relative w-full h-full lg:h-[calc(100dvh-4rem)] lg:pb-10 flex flex-col justify-end items-center py-6 sm:py-8 lg:py-0 overflow-hidden bg-white">
      {/* 1. Architectural Box Grid Pattern with Radial Fade */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-40 pointer-events-none" />

      {/* 2. Stripe-Caliber Clean Dynamic Silk Wave Artwork Canvas - Spans all the way down to Footer */}
      <FlowingMeshCanvas className="absolute inset-0 w-full h-full opacity-95 pointer-events-none z-0" />

      {/* 3. Floating Ambient Motion Gradient Meshes */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[760px] h-[520px] bg-gradient-to-tr from-[#635BFF]/10 via-[#00D4B2]/07 to-transparent blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute top-1/4 -right-16 w-[480px] h-[500px] bg-gradient-to-bl from-[#FF7043]/06 via-[#635BFF]/05 to-transparent blur-[120px] pointer-events-none animate-float-reverse" />
      <div className="absolute top-1/3 -left-28 w-[460px] h-[380px] bg-gradient-to-br from-[#00D4B2]/06 via-[#635BFF]/04 to-transparent blur-[120px] pointer-events-none animate-pulse-subtle" />

      {/* 4. Subtle Technical Dot Matrix Accent Corners */}
      <div className="absolute left-6 top-1/4 w-36 h-36 bg-dots-matrix opacity-20 mask-radial-fade pointer-events-none hidden xl:block" />
      <div className="absolute right-6 top-1/3 w-36 h-36 bg-dots-matrix opacity-20 mask-radial-fade pointer-events-none hidden xl:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-end h-full pb-3 sm:pb-4 space-y-4 sm:space-y-6 lg:space-y-6">
        {/* Top Header & Value Proposition Block - Positioned directly above the boxes with enlarged typography */}
        <div className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" size="md" pulse className="text-xs sm:text-[13px] px-3.5 py-1 font-medium">
              1008 Network // Venture Studio • Partner Network • Capital • Playbook
            </Badge>
          </div>

          {/* Primary Platform Headline - Big, Bold, Crisp & Commanding */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold tracking-tight text-[#0A2540] leading-[1.12] font-sans">
            <span className="block">Build, partner, and invest in{" "}</span>
            <span className="block mt-1 sm:mt-1.5 bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] via-[#635BFF] to-[#0D9488]">
              high-conviction Indian ventures.
            </span>
          </h1>

          {/* Platform Subtitle - Enlarged & Highly Legible */}
          <p className="text-sm sm:text-base md:text-lg lg:text-[18.5px] text-[#334155] leading-relaxed max-w-3xl mx-auto font-normal pt-0.5">
            The integrated ecosystem providing turnkey <strong>Venture Studio</strong> execution, curated <strong>Co-Founder & Talent Matchmaking</strong>, transparent <strong>Capital Rounds</strong>, and field-tested <strong>Operational Playbooks</strong>.
          </p>
        </div>

        {/* Four Pillars 2x2 Explanatory Grid - Sits right below the header at the bottom */}
        <section aria-label="The 4 Pillars of 1008 Network" className="w-full max-w-4xl mx-auto pb-1 sm:pb-2">
          <h2 className="sr-only">The 4 Pillars of 1008 Network</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
            {pillars.map((pillar) => (
              <Link
                key={pillar.num}
                href={pillar.href}
                className={`p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2E8F0] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xs ${pillar.bgHover}`}
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

                  <p className="text-xs text-[#475569] leading-relaxed text-left font-normal">
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

          {/* Semantic SEO Landmarks for Search Console & Crawlers */}
          <div className="sr-only">
            <h2>Turnkey Execution for Indian Enterprises</h2>
            <p>
              1008 Network Venture Studio and Partner Network provide turnkey ground operations, manufacturing setup, open-source ERP deployment, and co-founder matching for shared equity.
            </p>
            <h2>Operational Playbooks & Guides</h2>
            <p>
              Field-tested tactical playbooks, ULI credit guides, working capital frameworks, and cash-flow blueprints for Indian entrepreneurs and business builders.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
