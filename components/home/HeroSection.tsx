"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import dynamic from "next/dynamic";
import {
  Layers,
  Users,
  Coins,
  BookOpen,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Workflow,
  ChevronRight,
  Briefcase,
} from "lucide-react";

const FlowingMeshCanvas = dynamic(
  () =>
    import("@/components/canvas/FlowingMeshCanvas").then(
      (mod) => mod.FlowingMeshCanvas
    ),
  { ssr: false }
);

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"network" | "capital" | "studio" | "gigs">("network");

  const engineFeatures = {
    network: {
      tag: "01 // CO-FOUNDERS & TALENT",
      title: "Find talent or find businesses to work with",
      desc: "Connect with high-caliber technical CTOs, commercial GTM heads, and experienced operators ready to co-build for milestone-vested equity.",
      deliverables: [
        "Curated Co-Founder Matching (Technical & Commercial)",
        "Standardized Milestone Equity & Vesting Frameworks",
        "Join High-Growth Businesses as a Founding Lead",
        "Direct Matchmaking & Introductions Pan-India",
      ],
      link: "/network",
      linkText: "Find Co-Founders & Talent",
      color: "#00A389",
      accentBg: "bg-[#E6FFFA] text-[#007A66] border-[#B2F5EA]",
    },
    capital: {
      tag: "02 // FUNDING & INVESTORS",
      title: "Businesses find investors; investors find evaluated businesses",
      desc: "Connect promising ventures with angels, family offices, and verified capital partners. Direct syndicate discovery with no hidden intermediary commissions.",
      deliverables: [
        "Curated Angel & Family Office Allocator Discovery",
        "16-Point Evaluated Business Intake & Unit Economics",
        "Direct Founder-to-Investor Deal Room Discovery",
        "SEBI Non-Entity Regulatory Compliance Disclosures",
      ],
      link: "/capital",
      linkText: "Explore Funding & Capital",
      color: "#059669",
      accentBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
    },
    studio: {
      tag: "03 // OUTSOURCE OPERATIONS",
      title: "Work with 1008 Network to navigate operations challenges",
      desc: "1008 acts as your hands-on outsourced operations & tech partner. We build your production software, negotiate supplier contracts, and configure cloud ERPs.",
      deliverables: [
        "Turnkey Software & Production Cloud Architecture",
        "OEM Factory Auditing & Supply Chain Sourcing",
        "Self-Hosted ERPNext, GST Automation & Banking Rails",
        "Shared Milestone Equity (Zero Cash Agency Retainers)",
      ],
      link: "/studio",
      linkText: "Outsource Ops to 1008",
      color: "#635BFF",
      accentBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
    },
    gigs: {
      tag: "04 // GIGS & REQUESTS",
      title: "Post acute gig requests or find specialized gigs",
      desc: "Solve immediate business bottlenecks or get hired for high-impact project sprints across software, sales, factory compliance, and accounting.",
      deliverables: [
        "Post Business Gig Requests (ERP, Sales, Design, SOPs)",
        "Find High-Value Milestone & Fixed-Budget Gigs",
        "Direct Business-to-Specialist Connection",
        "Fast 24-48 Hour Turnaround Matchmaking",
      ],
      link: "/gigs",
      linkText: "Explore Gigs & Requests",
      color: "#FF7043",
      accentBg: "bg-[#FFF3EE] text-[#D94814] border-[#FFD8C9]",
    },
  };

  const currentEngine = engineFeatures[activeTab];

  return (
    <section className="relative w-full flex flex-col justify-center items-center pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
      {/* 1. Subtle Architectural Background Grid */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-35 pointer-events-none" />

      {/* 2. Stripe-Grade Flowing Dynamic Mesh Silk Wave */}
      <FlowingMeshCanvas className="absolute inset-0 w-full h-full opacity-90 pointer-events-none z-0" />

      {/* 3. Ambient Lighting Glow Meshes */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-tr from-[#635BFF]/10 via-[#00D4B2]/08 to-transparent blur-[140px] pointer-events-none animate-float-slow" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-[#FF7043]/06 via-[#635BFF]/05 to-transparent blur-[130px] pointer-events-none animate-float-reverse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center space-y-12 sm:space-y-16">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" size="md" pulse className="text-xs sm:text-[13px] px-3.5 py-1 font-medium">
              1008 Network • The Entrepreneur & Business Community
            </Badge>
          </div>

          {/* Primary Headline: Company Vision */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-extrabold tracking-tight text-[#0A2540] leading-[1.1] font-sans">
            <span className="block text-[#64748B] text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
              1008 Community
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] via-[#635BFF] to-[#0D9488]">
              Helping your Business get closer to your Goals.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#425466] leading-relaxed max-w-2xl mx-auto font-normal">
            A collaborative business community where you can find co-founders & talent, access funding, outsource operational bottlenecks to 1008 as an execution partner, or post and find project gigs.
          </p>

          {/* Primary Actions Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/network"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#635BFF] hover:bg-[#5851EA] text-white font-semibold text-sm shadow-[0_4px_14px_rgba(99,91,255,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Join the Community</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/gigs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#0A2540] border border-[#E2E8F0] font-semibold text-sm shadow-xs transition-all hover:border-[#CBD5E1]"
            >
              <span>Explore Gigs & Requests</span>
              <ArrowUpRight className="h-4 w-4 text-[#64748B]" />
            </Link>
          </div>

          {/* Active Openings & Co-Founder Matching Callout */}
          <div className="pt-2 flex items-center justify-center">
            <a
              href="#startup-jobs-matching"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#635BFF]/10 via-[#00D4B2]/10 to-[#635BFF]/10 hover:from-[#635BFF]/20 hover:to-[#00D4B2]/20 text-[#0A2540] font-semibold text-xs border border-[#635BFF]/20 transition-all shadow-xs group"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#00D4B2] animate-pulse" />
              <span className="font-mono text-[#635BFF] font-bold">PORTAL</span>
              <span>Startup Founding Roles, Leadership & Co-Founder Matching (12+ Roles)</span>
              <ChevronRight className="h-3.5 w-3.5 text-[#635BFF] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Quick Playbook Navigation Link */}
          <div className="pt-1 flex items-center justify-center gap-2 text-xs text-[#64748B]">
            <span>Looking for tactical frameworks?</span>
            <Link
              href="/knowledge"
              className="font-semibold text-[#635BFF] hover:text-[#5851EA] inline-flex items-center gap-0.5 hover:underline"
            >
              Explore 1008 Playbook <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Interactive Co-Building Engine Stage (Stripe-Style Interactive Visual Canvas) */}
        <div className="w-full max-w-5xl mx-auto rounded-3xl bg-white/95 backdrop-blur-xl border border-[#E2E8F0] p-4 sm:p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden">
          {/* Subtle Top Accent Border Glow */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#FF7043]" />

          {/* Top Engine Navigation Tabs */}
          <div className="flex items-center justify-between flex-wrap gap-2 pb-6 border-b border-[#E2E8F0]">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#64748B]">
              <Workflow className="h-4 w-4 text-[#635BFF]" />
              <span>How 1008 Community Helps Your Business:</span>
            </div>

            <div className="flex items-center gap-1.5 p-1 bg-[#F1F5F9] rounded-xl border border-[#E2E8F0] overflow-x-auto max-w-full no-scrollbar overflow-touch">
              {[
                { id: "network", label: "01. Talent & Co-Founders", icon: Users, color: "#00A389" },
                { id: "capital", label: "02. Funding & Investors", icon: Coins, color: "#059669" },
                { id: "studio", label: "03. Outsource Operations", icon: Layers, color: "#635BFF" },
                { id: "gigs", label: "04. Gigs & Requests", icon: Briefcase, color: "#FF7043" },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-white text-[#0A2540] shadow-xs border border-[#CBD5E1]"
                        : "text-[#64748B] hover:text-[#0A2540] hover:bg-white/50"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" style={{ color: isActive ? tab.color : undefined }} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Engine Detail Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-6 items-center">
            {/* Left Engine Information */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className={`inline-block text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border ${currentEngine.accentBg}`}>
                {currentEngine.tag}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] tracking-tight font-sans">
                {currentEngine.title}
              </h3>

              <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
                {currentEngine.desc}
              </p>

              <div className="pt-2">
                <Link
                  href={currentEngine.link}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#635BFF] hover:text-[#5851EA] group"
                >
                  <span>{currentEngine.linkText}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Deliverable Matrix */}
            <div className="lg:col-span-6">
              <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-4 sm:p-5 space-y-3 shadow-inner">
                <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#64748B] flex items-center justify-between">
                  <span>Core Operational Deliverables</span>
                  <span className="text-[#059669] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                    Turnkey Execution
                  </span>
                </div>

                <div className="space-y-2.5">
                  {currentEngine.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-2.5 shadow-2xs hover:border-[#CBD5E1] transition-all"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#334155] font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Social Proof / Trust Strip */}
        <div className="w-full max-w-4xl mx-auto pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E2E8F0]/70 text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00A389] animate-pulse" />
            <span className="font-medium text-[#475569]">Pan-India Co-Building Operations</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] font-mono">
            <span>🏭 Industrial & Supply Chain</span>
            <span>⚡ Vertical Software</span>
            <span>🌿 Scaled D2C</span>
            <span>🏥 Healthcare Ops</span>
          </div>
        </div>
      </div>
    </section>
  );
}
