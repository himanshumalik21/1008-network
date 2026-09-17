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
  UserPlus,
  ArrowRight,
  Briefcase,
  Code2,
  TrendingUp,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function HeroSection() {
  const archetypes = [
    {
      title: "The Domain Specialist",
      subtitle: "Manufacturing, Logistics, Healthcare, B2B",
      icon: <Briefcase className="h-4 w-4 text-[#635BFF]" />,
      iconBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      quote: "“I know the customers and industry bottlenecks inside out, but I don't have the time or team to write software, manage legal compliance, or set up ground operations.”",
      solution: "1008 builds the software, operations, and back-office from scratch for shared equity.",
    },
    {
      title: "The Technical Architect",
      subtitle: "Senior Engineers, CTOs, System Builders",
      icon: <Code2 className="h-4 w-4 text-[#00A389]" />,
      iconBg: "bg-[#E6FFFA] text-[#007A66] border-[#B2F5EA]",
      quote: "“I can build the platform in weeks, but I don't know how to run enterprise B2B sales, negotiate supply agreements, or structure regulatory licensing.”",
      solution: "1008 pairs you with commercial operators, opens enterprise sales channels, and structures governance.",
    },
    {
      title: "The Bootstrapped Operator",
      subtitle: "Early Revenue, Rebooting Ventures",
      icon: <TrendingUp className="h-4 w-4 text-[#FF7043]" />,
      iconBg: "bg-[#FFF3EE] text-[#D94814] border-[#FFD8C9]",
      quote: "“I've proven customer demand, but I'm trapped firefighting administrative chaos and need structured execution and working capital to scale.”",
      solution: "1008 installs open-source ERP systems, eliminates agency retainers, and facilitates syndicate capital.",
    },
  ];

  const pathways = [
    {
      badge: "01 // BUILD",
      persona: "I have an idea / expertise",
      intent: "Build the business with 1008",
      cta: "Build With 1008",
      desc: "Turn your industry knowledge into an operating company. We handle software, systems, suppliers, compliance, and core operations for shared equity.",
      href: "/studio",
      accent: "#635BFF",
      bgHover: "hover:border-[#635BFF]/60 hover:shadow-[0_12px_24px_-8px_rgba(99,91,255,0.16)]",
      badgeBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      iconBg: "bg-[#F0F0FF] border-[#E0E0FF] text-[#635BFF]",
      icon: <Layers className="h-4 w-4 text-[#635BFF]" />,
    },
    {
      badge: "02 // FIND",
      persona: "I'm missing people",
      intent: "Find co-founders & operators",
      cta: "Find a Partner",
      desc: "Post your opportunity or join to connect with reviewed technical CTOs, commercial leaders, and domain operators building for equity.",
      href: "/network",
      accent: "#00A389",
      bgHover: "hover:border-[#00D4B2]/60 hover:shadow-[0_12px_24px_-8px_rgba(0,212,178,0.16)]",
      badgeBg: "bg-[#E6FFFA] text-[#007A66] border-[#B2F5EA]",
      iconBg: "bg-[#E6FFFA] border-[#B2F5EA] text-[#007A66]",
      icon: <UserPlus className="h-4 w-4 text-[#00A389]" />,
    },
    {
      badge: "03 // FUND",
      persona: "I need capital / want to invest",
      intent: "Find curated capital & syndicates",
      cta: "Capital Network",
      desc: "Connect promising businesses with a curated network of angels, family offices, and eligible capital partners. Zero broker fees.",
      href: "/capital",
      accent: "#059669",
      bgHover: "hover:border-[#059669]/60 hover:shadow-[0_12px_24px_-8px_rgba(5,150,105,0.16)]",
      badgeBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      iconBg: "bg-[#ECFDF5] border-[#A7F3D0] text-[#059669]",
      icon: <Coins className="h-4 w-4 text-[#059669]" />,
    },
    {
      badge: "04 // LEARN",
      persona: "I want to understand how to build",
      intent: "Learn operational frameworks",
      cta: "Read Playbook",
      desc: "Practical frameworks on cash-flow architecture, working capital credit, co-founder equity agreements, and building enduring enterprises in India.",
      href: "/knowledge",
      accent: "#FF7043",
      bgHover: "hover:border-[#FF7043]/60 hover:shadow-[0_12px_24px_-8px_rgba(255,112,67,0.16)]",
      badgeBg: "bg-[#FFF3EE] text-[#D94814] border-[#FFD8C9]",
      iconBg: "bg-[#FFF3EE] border-[#FFD8C9] text-[#D94814]",
      icon: <BookOpen className="h-4 w-4 text-[#FF7043]" />,
    },
  ];

  return (
    <section className="relative w-full flex flex-col justify-center items-center py-12 sm:py-16 lg:py-20 overflow-hidden bg-white">
      {/* 1. Architectural Box Grid Pattern with Radial Fade */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-40 pointer-events-none" />

      {/* 2. Stripe-Caliber Clean Dynamic Silk Wave Artwork Canvas */}
      <FlowingMeshCanvas className="absolute inset-0 w-full h-full opacity-95 pointer-events-none z-0" />

      {/* 3. Floating Ambient Motion Gradient Meshes */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[760px] h-[520px] bg-gradient-to-tr from-[#635BFF]/10 via-[#00D4B2]/07 to-transparent blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute top-1/4 -right-16 w-[480px] h-[500px] bg-gradient-to-bl from-[#FF7043]/06 via-[#635BFF]/05 to-transparent blur-[120px] pointer-events-none animate-float-reverse" />
      <div className="absolute top-1/3 -left-28 w-[460px] h-[380px] bg-gradient-to-br from-[#00D4B2]/06 via-[#635BFF]/04 to-transparent blur-[120px] pointer-events-none animate-pulse-subtle" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center space-y-10 sm:space-y-12">
        {/* Top Header & Value Proposition Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" size="md" pulse className="text-xs sm:text-[13px] px-3.5 py-1 font-medium">
              1008 Network // Co-Building & Partner Network
            </Badge>
          </div>

          {/* Primary Platform Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px] font-extrabold tracking-tight text-[#0A2540] leading-[1.12] font-sans">
            <span className="block">Build the business you know</span>
            <span className="block mt-1 sm:mt-1.5 bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] via-[#635BFF] to-[#0D9488]">
              should exist.
            </span>
          </h1>

          {/* Platform Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#334155] leading-relaxed max-w-2xl mx-auto font-normal">
            1008 Network helps experienced professionals and entrepreneurs turn industry expertise into operating businesses — with the people, systems, and execution needed to make them real.
          </p>

          {/* Direct Hero Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/studio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#635BFF] hover:bg-[#5851EA] text-white font-semibold text-sm shadow-[0_2px_8px_rgba(99,91,255,0.25)] transition-all"
            >
              <span>Build With 1008</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/network/post"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#0A2540] border border-[#E2E8F0] font-semibold text-sm shadow-xs transition-all"
            >
              <span>Find a Partner</span>
              <ArrowUpRight className="h-4 w-4 text-[#64748B]" />
            </Link>
          </div>
        </div>

        {/* The Human Story Spotlight Card ("That's Me" Conversion Engine) */}
        <div className="w-full max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-white to-[#F8FAFC] border border-[#E2E8F0] p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#635BFF]/05 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#635BFF]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#635BFF]">
                  A Story You Might Recognize
                </span>
              </div>
              <span className="text-xs font-semibold text-[#64748B] bg-white px-2.5 py-1 rounded-full border border-[#E2E8F0]">
                Sound familiar?
              </span>
            </div>

            <div className="space-y-4 text-[#334155] text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-base sm:text-lg text-[#0A2540]">
                You&apos;re a senior engineer, operations head, or domain executive.
              </p>
              <p>
                You know your industry inside out. You&apos;ve spent years working on the frontlines, you&apos;ve lived through the operational bottlenecks firsthand, and you have a clear idea for a business that solves a genuine customer problem.
              </p>
              <div className="p-4 rounded-xl bg-[#F1F5F9]/80 border-l-4 border-[#FF7043] text-xs sm:text-sm text-[#475569] space-y-1">
                <p className="font-bold text-[#0A2540]">The catch?</p>
                <p>
                  You don&apos;t know how to build the sales team, hire the CTO, set up operations, find suppliers, create the technology, or get the first customers without burning through your savings or quitting your career blindly.
                </p>
              </div>
              <p className="pt-1 text-[#0A2540] font-medium">
                <strong className="text-[#635BFF] font-bold">That&apos;s where 1008 comes in.</strong> You bring the industry expertise, customer relationships, and domain opportunity. 1008 steps in as your turnkey co-builder—building the software, running the operations, sourcing suppliers, and assembling the missing team around you for shared equity upside.
              </p>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/studio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#635BFF] hover:bg-[#5851EA] text-white font-semibold text-sm shadow-[0_2px_8px_rgba(99,91,255,0.25)] transition-all"
              >
                <span>Build With 1008 (Venture Studio)</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/network/post"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#0A2540] border border-[#E2E8F0] font-semibold text-sm transition-all"
              >
                <span>Find a Co-Founder / Operator</span>
                <ArrowUpRight className="h-4 w-4 text-[#64748B]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Who We Build With (3 Relatable Archetypes) */}
        <div className="w-full max-w-4xl mx-auto space-y-4">
          <div className="text-center space-y-1">
            <h2 className="text-lg sm:text-xl font-bold text-[#0A2540]">
              Who We Co-Build With
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Real people with deep industry knowledge, paired with our turnkey execution machinery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {archetypes.map((arch, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col justify-between space-y-3 shadow-2xs hover:border-[#CBD5E1] transition-all"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${arch.iconBg}`}>
                      {arch.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0A2540] leading-tight">
                        {arch.title}
                      </h3>
                      <p className="text-[11px] text-[#64748B] font-medium leading-tight">
                        {arch.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#475569] italic leading-relaxed">
                    {arch.quote}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F1F5F9] flex items-start gap-1.5 text-[11px] text-[#0A2540] font-medium leading-tight">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#059669] shrink-0 mt-0.5" />
                  <span>{arch.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Clear User Intent Pathways Grid */}
        <section aria-label="Choose your pathway on 1008 Network" className="w-full max-w-4xl mx-auto space-y-4">
          <div className="text-center space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-[#0A2540]">
              The 1008 Ecosystem
            </h2>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#64748B] bg-[#F8FAFC] px-3.5 py-1.5 rounded-full border border-[#E2E8F0]">
              <span className="text-[#635BFF] font-bold">Idea</span>
              <span>→</span>
              <span className="text-[#00A389] font-bold">People</span>
              <span>→</span>
              <span className="text-[#059669] font-bold">Capital</span>
              <span>→</span>
              <span className="text-[#D94814] font-bold">Execution</span>
              <span>→</span>
              <span className="text-[#0A2540] font-bold">Business</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {pathways.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={`p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2E8F0] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xs ${item.bgHover}`}
              >
                {/* Subtle Top Indicator Line on Hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: item.accent }}
                />

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-lg border flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs shrink-0 ${item.iconBg}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-[#0A2540] group-hover:text-[#635BFF] transition-colors leading-tight">
                          {item.persona}
                        </h3>
                        <p className="text-[11px] font-medium text-[#627D98] leading-tight">
                          {item.intent}
                        </p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border shrink-0 ${item.badgeBg}`}>
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed text-left font-normal pt-0.5">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 mt-2 border-t border-[#F1F4F8] flex items-center justify-between text-[11px] font-mono font-medium text-[#627D98]">
                  <span className="text-[#829AB1]">Direct Pathway</span>
                  <div className="flex items-center gap-1 font-semibold group-hover:text-[#635BFF] transition-colors">
                    <span className="text-[#0A2540] group-hover:text-[#635BFF]">{item.cta}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#829AB1] group-hover:text-[#635BFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Secondary Playbook Navigation Strip */}
          <div className="pt-2 text-center">
            <Link
              href="/knowledge"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8FAFC]/90 hover:bg-[#F1F5F9] border border-[#E2E8F0] text-xs text-[#475569] hover:text-[#0A2540] transition-colors group"
            >
              <BookOpen className="h-3.5 w-3.5 text-[#FF7043]" />
              <span>Looking for operational frameworks on credit, cap tables, and unit economics?</span>
              <span className="font-semibold text-[#635BFF] inline-flex items-center gap-0.5 group-hover:underline">
                Read 1008 Playbooks <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
