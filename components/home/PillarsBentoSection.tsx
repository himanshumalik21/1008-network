"use client";

import React from "react";
import Link from "next/link";
import {
  Layers,
  Users,
  Coins,
  BookOpen,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Workflow,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Boxes,
  FileCode2,
} from "lucide-react";

export function PillarsBentoSection() {
  const pillars = [
    {
      id: "studio",
      pillarNumber: "01",
      verb: "BUILD",
      name: "Venture Studio",
      tagline: "Build the business.",
      intent: "I have an idea / deep domain expertise",
      desc: "Turn your industry knowledge into an operating company. We handle software, systems, suppliers, compliance, and core operations for shared equity.",
      features: [
        "Full-stack software engineering & cloud architecture",
        "Factory auditing, supplier terms & supply chain setup",
        "Open-source ERPs, automated ledgers & banking rails",
        "Zero consulting retainers — shared milestone equity",
      ],
      cta: "Explore Venture Studio",
      href: "/studio",
      accent: "#635BFF",
      borderHover: "hover:border-[#635BFF]/50",
      accentBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      icon: Layers,
      colSpan: "lg:col-span-6",
    },
    {
      id: "network",
      pillarNumber: "02",
      verb: "FIND",
      name: "Partner Network",
      tagline: "Find the people.",
      intent: "I'm missing people / co-founders",
      desc: "Connect with high-caliber technical CTOs, commercial heads, and domain operators ready to co-build for milestone-vested equity.",
      features: [
        "Curated technical CTOs & commercial leaders",
        "Standardized milestone equity co-founder agreements",
        "Post open opportunities or register as an operator",
        "Direct introductions to potential partners across India",
      ],
      cta: "Explore Partner Network",
      href: "/network",
      accent: "#00A389",
      borderHover: "hover:border-[#00D4B2]/50",
      accentBg: "bg-[#E6FFFA] text-[#007A66] border-[#B2F5EA]",
      icon: Users,
      colSpan: "lg:col-span-6",
    },
    {
      id: "capital",
      pillarNumber: "03",
      verb: "FUND",
      name: "Capital Network",
      tagline: "Find the capital.",
      intent: "I need capital / want to invest",
      desc: "Connect promising businesses with a curated network of angels, family offices, and eligible capital partners. No placement or intermediary fees.",
      features: [
        "16-point evaluated venture parameter intake",
        "Angel syndicates & family office network discovery",
        "No placement fees, broker commissions, or success cuts",
        "Strict SEBI non-entity statutory compliance",
      ],
      cta: "Explore Capital Network",
      href: "/capital",
      accent: "#059669",
      borderHover: "hover:border-[#059669]/50",
      accentBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      icon: Coins,
      colSpan: "lg:col-span-6",
    },
    {
      id: "playbook",
      pillarNumber: "04",
      verb: "LEARN",
      name: "1008 Playbook",
      tagline: "Learn how to build.",
      intent: "I want to understand how to build",
      desc: "Practical frameworks on cash-flow architecture, working capital credit rails, co-founder equity splits, and building enduring enterprises in India.",
      features: [
        "Cash-flow vs hype business validation frameworks",
        "Collateral-free credit via Unified Lending Interface (ULI)",
        "Co-founder equity split calculations & vesting clauses",
        "Zero-retainer operating survival manuals",
      ],
      cta: "Read the Playbook",
      href: "/knowledge",
      accent: "#FF7043",
      borderHover: "hover:border-[#FF7043]/50",
      accentBg: "bg-[#FFF3EE] text-[#D94814] border-[#FFD8C9]",
      icon: BookOpen,
      colSpan: "lg:col-span-6",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] text-xs font-mono font-semibold text-[#0A2540]">
            <span>THE 4-PILLAR ECOSYSTEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            One connected architecture for building businesses.
          </h2>

          {/* Formula Strip */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#64748B] bg-[#F8FAFC] px-4 py-2 rounded-full border border-[#E2E8F0] shadow-2xs flex-wrap justify-center">
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
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`${pillar.colSpan} rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xs group ${pillar.borderHover} hover:shadow-lg relative overflow-hidden`}
              >
                {/* Top Accent Line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: pillar.accent }}
                />

                <div className="space-y-5">
                  {/* Header Row */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${pillar.accentBg}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-[#0A2540]">
                            {pillar.name}
                          </h3>
                        </div>
                        <p className="text-xs text-[#64748B] font-medium">
                          {pillar.tagline}
                        </p>
                      </div>
                    </div>

                    <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border shrink-0 ${pillar.accentBg}`}>
                      {pillar.pillarNumber} // {pillar.verb}
                    </span>
                  </div>

                  {/* Intent / Persona indicator */}
                  <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-mono text-[#475569]">
                    <span className="text-[#64748B]">Intent: </span>
                    <span className="font-semibold text-[#0A2540]">{pillar.intent}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {pillar.desc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-1">
                    {pillar.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#334155]">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: pillar.accent }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-6 mt-6 border-t border-[#F1F5F9] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#94A3B8]">
                    1008 Pillar {pillar.pillarNumber}
                  </span>
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0A2540] group-hover:text-[#635BFF] transition-colors"
                  >
                    <span>{pillar.cta}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
