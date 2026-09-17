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
} from "lucide-react";

export function HeroSection() {

  const pathways = [
    {
      badge: "Venture Studio",
      persona: "I have a business idea",
      intent: "I want 1008 to help me build it",
      cta: "Build With 1008",
      desc: "Turn domain expertise into an operating company. We handle technology, systems, suppliers, compliance, and core operations for shared equity.",
      href: "/studio",
      accent: "#635BFF",
      bgHover: "hover:border-[#635BFF]/60 hover:shadow-[0_12px_24px_-8px_rgba(99,91,255,0.16)]",
      badgeBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      iconBg: "bg-[#F0F0FF] border-[#E0E0FF] text-[#635BFF]",
      icon: <Layers className="h-4 w-4 text-[#635BFF]" />,
    },
    {
      badge: "Find Co-Founders",
      persona: "I have a business but need someone",
      intent: "I need a CTO, co-founder, or operator",
      cta: "Find a Partner",
      desc: "Post your venture opportunity to connect directly with curated technical CTOs, commercial leaders, and domain operators for shared equity.",
      href: "/network/post",
      accent: "#00A389",
      bgHover: "hover:border-[#00D4B2]/60 hover:shadow-[0_12px_24px_-8px_rgba(0,212,178,0.16)]",
      badgeBg: "bg-[#E6FFFA] text-[#007A66] border-[#B2F5EA]",
      iconBg: "bg-[#E6FFFA] border-[#B2F5EA] text-[#007A66]",
      icon: <UserPlus className="h-4 w-4 text-[#00A389]" />,
    },
    {
      badge: "Join Talent Pool",
      persona: "I have skills & want to build",
      intent: "I want to join a venture",
      cta: "Join the Network",
      desc: "Join our curated talent pool to partner with domain founders building real economy enterprises and software ventures for meaningful equity.",
      href: "/network/join",
      accent: "#059669",
      bgHover: "hover:border-[#059669]/60 hover:shadow-[0_12px_24px_-8px_rgba(5,150,105,0.16)]",
      badgeBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      iconBg: "bg-[#ECFDF5] border-[#A7F3D0] text-[#059669]",
      icon: <Users className="h-4 w-4 text-[#059669]" />,
    },
    {
      badge: "Capital Network",
      persona: "I want to invest",
      intent: "Angel & syndicate co-investments",
      cta: "Join Capital Network",
      desc: "Co-invest in high-conviction startups (₹50K to ₹5Cr+) with itemized use of funds, combined deal meetings, and zero broker fees.",
      href: "/capital",
      accent: "#FF7043",
      bgHover: "hover:border-[#FF7043]/60 hover:shadow-[0_12px_24px_-8px_rgba(255,112,67,0.16)]",
      badgeBg: "bg-[#FFF3EE] text-[#D94814] border-[#FFD8C9]",
      iconBg: "bg-[#FFF3EE] border-[#FFD8C9] text-[#D94814]",
      icon: <Coins className="h-4 w-4 text-[#FF7043]" />,
    },
  ];

  return (
    <section className="relative w-full h-full lg:min-h-[calc(100dvh-4rem)] lg:pb-8 flex flex-col justify-center items-center py-8 sm:py-10 lg:py-4 overflow-hidden bg-white">
      {/* 1. Architectural Box Grid Pattern with Radial Fade */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-40 pointer-events-none" />

      {/* 2. Stripe-Caliber Clean Dynamic Silk Wave Artwork Canvas */}
      <FlowingMeshCanvas className="absolute inset-0 w-full h-full opacity-95 pointer-events-none z-0" />

      {/* 3. Floating Ambient Motion Gradient Meshes */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[760px] h-[520px] bg-gradient-to-tr from-[#635BFF]/10 via-[#00D4B2]/07 to-transparent blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute top-1/4 -right-16 w-[480px] h-[500px] bg-gradient-to-bl from-[#FF7043]/06 via-[#635BFF]/05 to-transparent blur-[120px] pointer-events-none animate-float-reverse" />
      <div className="absolute top-1/3 -left-28 w-[460px] h-[380px] bg-gradient-to-br from-[#00D4B2]/06 via-[#635BFF]/04 to-transparent blur-[120px] pointer-events-none animate-pulse-subtle" />

      {/* 4. Subtle Technical Dot Matrix Accent Corners */}
      <div className="absolute left-6 top-1/4 w-36 h-36 bg-dots-matrix opacity-20 mask-radial-fade pointer-events-none hidden xl:block" />
      <div className="absolute right-6 top-1/3 w-36 h-36 bg-dots-matrix opacity-20 mask-radial-fade pointer-events-none hidden xl:block" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center space-y-4 sm:space-y-5 lg:space-y-5">
        {/* Top Header & Value Proposition Block */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" size="md" pulse className="text-xs sm:text-[13px] px-3.5 py-1 font-medium">
              1008 Network // Venture Studio • Partner Network • Capital
            </Badge>
          </div>

          {/* Primary Platform Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight text-[#0A2540] leading-[1.12] font-sans">
            <span className="block">You know the business.</span>
            <span className="block mt-1 sm:mt-1.5 bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] via-[#635BFF] to-[#0D9488]">
              We&apos;ll help you build the company.
            </span>
          </h1>

          {/* Platform Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-[#334155] leading-relaxed max-w-2xl mx-auto font-normal">
            You bring the industry expertise, ambition and opportunity. 1008 helps build the people, systems, technology, suppliers, sales infrastructure and operations around it.
          </p>
        </div>

        {/* 4 Clear User Intent Pathways Grid */}
        <section aria-label="Choose your pathway on 1008 Network" className="w-full max-w-4xl mx-auto">
          <h2 className="sr-only">Choose Your Pathway</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
            {pathways.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={`p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2E8F0] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xs ${item.bgHover}`}
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
          <div className="mt-3 text-center">
            <Link
              href="/knowledge"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8FAFC]/90 hover:bg-[#F1F5F9] border border-[#E2E8F0] text-xs text-[#475569] hover:text-[#0A2540] transition-colors group"
            >
              <BookOpen className="h-3.5 w-3.5 text-[#FF7043]" />
              <span>Looking for operational frameworks on credit, cap tables, and unit economics?</span>
              <span className="font-semibold text-[#635BFF] inline-flex items-center gap-0.5 group-hover:underline">
                Read 1008 Playbooks <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Semantic SEO Landmarks for Search Console & Crawlers */}
          <div className="sr-only">
            <h2>Turnkey Execution for Indian Enterprises</h2>
            <p>
              1008 Network Venture Studio and Partner Network provide turnkey ground operations, manufacturing setup, open-source ERP deployment, and co-founder matching for shared equity.
            </p>
            <h2>Operational Playbooks & Guides</h2>
            <p>
              Ground-level tactical playbooks, ULI credit guides, working capital frameworks, and cash-flow blueprints for Indian entrepreneurs and business builders.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
