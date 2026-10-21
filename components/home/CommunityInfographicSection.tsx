"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Coins,
  Layers,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Workflow,
  Target,
  Building2,
  Briefcase,
  ChevronRight,
} from "lucide-react";

export function CommunityInfographicSection() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: "talent",
      num: "01",
      name: "Co-Founders & Key Talent",
      headline: "Find high-caliber leaders or join a high-growth venture.",
      tag: "TALENT MATCHING",
      color: "#00A389",
      accentBg: "bg-[#E6FFFA] text-[#007A66] border-[#B2F5EA]",
      icon: Users,
      businessPerspective: {
        title: "For Operating Businesses",
        description: "Need a technical CTO, commercial sales head, or operations lead? Post your requirement to get introduced to vetted leaders ready to co-build for milestone equity.",
        points: [
          "Curated Technical CTOs & Commercial Sales Heads",
          "Standardized milestone equity vesting templates",
          "Zero recruiter commissions or placement agency cuts",
        ],
        actionText: "Post Talent Requirement",
        actionHref: "/network/post",
      },
      operatorPerspective: {
        title: "For Builders & Operators",
        description: "Looking to step into a founding leadership role? Connect with verified businesses building real-economy products with pre-existing market traction.",
        points: [
          "Direct introductions to vetted founding teams",
          "Meaningful equity upside and milestone contracts",
          "Pan-India ventures across tech, manufacturing & D2C",
        ],
        actionText: "Join Talent Pool",
        actionHref: "/network/join",
      },
    },
    {
      id: "capital",
      num: "02",
      name: "Funding & Investors",
      headline: "Businesses find investors; investors find evaluated businesses.",
      tag: "CAPITAL DISCOVERY",
      color: "#059669",
      accentBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      icon: Coins,
      businessPerspective: {
        title: "For Startups Seeking Capital",
        description: "Present your business model, traction, and unit economics to an exclusive syndicate of angels, family offices, and verified capital partners.",
        points: [
          "16-point unit economics and business intake evaluation",
          "Zero broker fees, success cuts, or finder commissions",
          "Direct founder-to-investor deal room discovery",
        ],
        actionText: "Submit Venture for Funding",
        actionHref: "/capital/post",
      },
      operatorPerspective: {
        title: "For Angels & Family Offices",
        description: "Access a curated pipeline of evaluated Indian businesses with audited unit economics, realistic valuations, and verified founders.",
        points: [
          "Pre-evaluated business models with real traction",
          "SEBI statutory non-entity compliance transparency",
          "Direct co-investment syndicates from ₹5L to ₹5Cr+",
        ],
        actionText: "Join Investor Network",
        actionHref: "/capital/join",
      },
    },
    {
      id: "studio",
      num: "03",
      name: "Outsourced Operations",
      headline: "Work with 1008 as your turnkey tech and execution arm.",
      tag: "OPERATIONS AS A SERVICE",
      color: "#635BFF",
      accentBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      icon: Layers,
      businessPerspective: {
        title: "Turnkey Execution Partner",
        description: "Have the industry expertise but lack software engineers or supply chain teams? 1008 acts as your hands-on outsourced operations partner.",
        points: [
          "Production web & mobile software architecture",
          "Factory audits, OEM negotiations & supplier terms",
          "Self-hosted ERPNext, automated ledgers & GST compliance",
        ],
        actionText: "Outsource Ops to 1008",
        actionHref: "/studio",
      },
      operatorPerspective: {
        title: "Zero Agency Cash Retainers",
        description: "We don't charge high consulting retainers. We align long-term with your company by taking shared milestone equity as an aligned partner.",
        points: [
          "Skin-in-the-game shared milestone equity alignment",
          "Day-1 operational systems, banking rails, and SOPs",
          "Continuous hands-on execution from pre-seed to scale",
        ],
        actionText: "Explore 1008 Studio",
        actionHref: "/studio",
      },
    },
    {
      id: "gigs",
      num: "04",
      name: "Project Gigs & Sprints",
      headline: "Post acute gig requests or deliver high-impact project sprints.",
      tag: "FAST-TURNAROUND SPRINTS",
      color: "#FF7043",
      accentBg: "bg-[#FFF3EE] text-[#D94814] border-[#FFD8C9]",
      icon: Zap,
      businessPerspective: {
        title: "For Urgent Business Challenges",
        description: "Need an ERP ledger migration, cold outbound sales machine, or factory BIS audit completed in 2 to 4 weeks? Post your acute requirement to get matched.",
        points: [
          "Rapid 24-48 hour specialist matchmaking",
          "Fixed milestone INR budgets and clear deliverables",
          "Zero agency markups or middleman overhead",
        ],
        actionText: "Post a Gig Request",
        actionHref: "/gigs/post",
      },
      operatorPerspective: {
        title: "For Specialized Operators",
        description: "Take on high-value project sprints for operating businesses. Get compensated cleanly on milestone completion without endless scope creep.",
        points: [
          "High-urgency briefs with verified operating businesses",
          "Direct communication with founders and decision makers",
          "Sprints across tech, sales, accounting & compliance",
        ],
        actionText: "Browse Capabilities",
        actionHref: "/gigs",
      },
    },
  ];

  const current = pillars[activePillar];
  const CurrentIcon = current.icon;

  return (
    <section id="what-we-do" className="py-20 sm:py-28 bg-[#F8FAFC] border-y border-[#E2E8F0] relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-mono font-semibold text-[#0A2540] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#635BFF]" />
            <span>HOW 1008 COMMUNITY WORKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Four clear ways we help your business{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              get closer to your goals.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Choose your requirement below to see how our community connects you with the right people, capital, or execution systems.
          </p>
        </div>

        {/* 4 Interactive Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            const isSelected = activePillar === idx;
            return (
              <button
                key={p.id}
                onClick={() => setActivePillar(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between gap-3 cursor-pointer ${
                  isSelected
                    ? "bg-white border-[#635BFF] shadow-[0_8px_24px_rgba(99,91,255,0.12)] ring-1 ring-[#635BFF]"
                    : "bg-white/80 hover:bg-white border-[#E2E8F0] hover:border-[#CBD5E1] shadow-2xs"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs ${
                      isSelected ? "bg-[#F0F0FF] text-[#635BFF]" : "bg-[#F1F5F9] text-[#64748B]"
                    }`}
                  >
                    {p.num}
                  </span>
                  <Icon
                    className={`h-5 w-5 ${isSelected ? "text-[#635BFF]" : "text-[#94A3B8]"}`}
                  />
                </div>
                <div>
                  <h3 className={`text-sm sm:text-base font-bold ${isSelected ? "text-[#0A2540]" : "text-[#475569]"}`}>
                    {p.name}
                  </h3>
                  <span className="text-[11px] font-mono font-medium text-[#64748B]">
                    {p.tag}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Infographic Showcase Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-[#E2E8F0] shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden">
          {/* Top colored accent line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#FF7043]" />

          <div className="p-6 sm:p-10 space-y-8">
            {/* Header of Active Pillar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#F1F5F9]">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-md border ${current.accentBg}`}>
                    PILLAR {current.num}
                  </span>
                  <span className="text-xs font-mono text-[#64748B] font-semibold">{current.tag}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] font-sans">
                  {current.name}
                </h3>
                <p className="text-sm sm:text-base text-[#475569] font-medium">
                  {current.headline}
                </p>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0">
                <CurrentIcon className="h-7 w-7 text-[#635BFF]" />
              </div>
            </div>

            {/* Dual Perspective Grid (Business vs Operator) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Card 1: Business View */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#635BFF] bg-[#F0F0FF] px-2.5 py-1 rounded-md border border-[#E0E0FF]">
                    <Building2 className="h-3.5 w-3.5" />
                    <span>{current.businessPerspective.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {current.businessPerspective.description}
                  </p>
                  <div className="space-y-2 pt-2">
                    {current.businessPerspective.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#334155]">
                        <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={current.businessPerspective.actionHref}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#635BFF] hover:bg-[#5851EA] text-white font-semibold text-xs sm:text-sm shadow-xs transition-all hover:scale-[1.01]"
                  >
                    <span>{current.businessPerspective.actionText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Operator / Investor / Specialist View */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#00A389] bg-[#E6FFFA] px-2.5 py-1 rounded-md border border-[#B2F5EA]">
                    <Users className="h-3.5 w-3.5" />
                    <span>{current.operatorPerspective.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {current.operatorPerspective.description}
                  </p>
                  <div className="space-y-2 pt-2">
                    {current.operatorPerspective.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#334155]">
                        <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={current.operatorPerspective.actionHref}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#F1F5F9] text-[#0A2540] border border-[#CBD5E1] font-semibold text-xs sm:text-sm shadow-2xs transition-all"
                  >
                    <span>{current.operatorPerspective.actionText}</span>
                    <ChevronRight className="h-4 w-4 text-[#64748B]" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Trust & Transparency Footer */}
            <div className="pt-4 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between gap-4 text-xs text-[#64748B]">
              <div className="flex items-center gap-2 font-medium">
                <ShieldCheck className="h-4 w-4 text-[#00A389]" />
                <span>Zero Hidden Brokerage • Milestone Equity Vesting • Direct Contract Execution</span>
              </div>
              <Link
                href="/knowledge"
                className="font-semibold text-[#635BFF] hover:underline inline-flex items-center gap-1"
              >
                Read 1008 Playbook Blueprints <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
