"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  Code2,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export function HumanStorySection() {
  const [selectedArchetype, setSelectedArchetype] = useState<number>(0);

  const archetypes = [
    {
      id: "domain-specialist",
      role: "The Domain Specialist",
      domain: "Manufacturing, Logistics, Healthcare, Industrial B2B",
      icon: Briefcase,
      color: "#635BFF",
      accentBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      quote:
        "“I’ve run supply chains and plant operations for 15 years. I know exactly where the industry is bleeding money and have pre-existing buyer trust. But I can't code software, structure complex legal agreements, or build a digital product alone.”",
      bottleneck: "Lacks technical build muscle, cloud software stack, and startup legal architecture.",
      solution:
        "1008 steps in as turnkey tech & ops co-builder—building cloud ERPs, developer teams, and back-office governance for shared equity upside.",
      metrics: "Pre-existing industry relationships + 1008 turnkey execution",
    },
    {
      id: "technical-architect",
      role: "The Technical Architect",
      domain: "Senior Engineers, Staff Tech Leads, CTOs",
      icon: Code2,
      color: "#00A389",
      accentBg: "bg-[#E6FFFA] text-[#007A66] border-[#B2F5EA]",
      quote:
        "“I can architect and deploy a robust distributed system in weeks. But I don’t have enterprise B2B sales pipelines, ground vendor contracts, or patience for government regulatory filings.”",
      bottleneck: "Lacks enterprise GTM channels, physical operational logistics, and commercial sales leadership.",
      solution:
        "1008 connects you with vetted commercial operators, secures enterprise pilot agreements, and handles physical back-office logistics.",
      metrics: "Robust tech stack + 1008 commercial enterprise distribution",
    },
    {
      id: "bootstrapped-operator",
      role: "The Bootstrapped Operator",
      domain: "Early Revenue Founders, Scaled D2C, Turnaround Ventures",
      icon: TrendingUp,
      color: "#FF7043",
      accentBg: "bg-[#FFF3EE] text-[#D94814] border-[#FFD8C9]",
      quote:
        "“We crossed early revenue, but I’m burning 16 hours a day firefighting invoicing errors, untangling vendor markups, and managing agency retainers instead of scaling high-margin sales.”",
      bottleneck: "Trapped in administrative chaos, costly retainers, and fragmented freelance contractors.",
      solution:
        "1008 eliminates cash retainers, installs institutional ERP infrastructure, audits factory suppliers, and facilitates syndicate growth capital.",
      metrics: "Proven product demand + 1008 institutional scaling machinery",
    },
  ];

  const current = archetypes[selectedArchetype];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0] relative overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#635BFF]/04 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00D4B2]/04 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-semibold text-[#635BFF] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>The Human Dilemma</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            A story you might recognize.
          </h2>
          <p className="text-base sm:text-lg text-[#425466] leading-relaxed">
            Ambitious businesses don&apos;t fail from lack of domain insight. They fail when an experienced person is forced to do ten jobs they were never meant to do alone.
          </p>
        </div>

        {/* Narrative & Interactive Story Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: The Narrative Story Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-8 flex flex-col justify-between shadow-xs space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#64748B]">
                The Core Insight
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] leading-snug">
                You know the industry. <br />
                <span className="text-[#635BFF]">We build the company around you.</span>
              </h3>

              <div className="space-y-3 text-sm text-[#475569] leading-relaxed">
                <p>
                  You’ve spent 10–15 years on the frontlines. You know the exact bottlenecks, you know what buyers need, and you have an idea for a business that should exist.
                </p>
                <div className="p-3.5 rounded-xl bg-[#FFF4ED] border border-[#FFD8C9] text-xs text-[#9A3412] space-y-1">
                  <p className="font-bold flex items-center gap-1.5 text-[#C2410C]">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    The Founder&apos;s Trap
                  </p>
                  <p>
                    Hiring agency retainers, managing brittle freelance code, setting up legal compliance, and burning personal savings alone often leads to premature fatigue.
                  </p>
                </div>
                <p className="text-[#0A2540] font-medium pt-1">
                  1008 aligns incentives through shared equity. You bring the domain insight; we bring the software, operations, suppliers, and people.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F1F5F9] flex flex-col sm:flex-row gap-2.5">
              <Link
                href="/studio"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#635BFF] hover:bg-[#5851EA] text-white font-semibold text-xs shadow-2xs transition-all"
              >
                <span>Apply to Venture Studio</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/network"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#0A2540] border border-[#E2E8F0] font-semibold text-xs transition-all"
              >
                <span>Find a Co-Founder</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#64748B]" />
              </Link>
            </div>
          </div>

          {/* Right: Interactive Archetype Switcher & Deep Dive */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-8 flex flex-col justify-between shadow-xs space-y-6">
            <div className="space-y-5">
              {/* Archetype Selector Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {archetypes.map((arch, idx) => {
                  const Icon = arch.icon;
                  const isSelected = selectedArchetype === idx;
                  return (
                    <button
                      key={arch.id}
                      onClick={() => setSelectedArchetype(idx)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 shrink-0 cursor-pointer ${
                        isSelected
                          ? "bg-[#0A2540] text-white shadow-xs"
                          : "bg-[#F1F5F9] text-[#64748B] hover:text-[#0A2540] hover:bg-[#E2E8F0]"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" style={{ color: isSelected ? "#00D4B2" : undefined }} />
                      <span>{arch.role}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Profile Card */}
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-[#0A2540]">
                      {current.role}
                    </h4>
                    <p className="text-xs text-[#64748B] font-medium">
                      {current.domain}
                    </p>
                  </div>
                  <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border ${current.accentBg}`}>
                    Archetype 0{selectedArchetype + 1}
                  </span>
                </div>

                {/* Quote */}
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] italic text-xs sm:text-sm text-[#334155] leading-relaxed">
                  {current.quote}
                </div>

                {/* Bottleneck vs Solution Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-red-50/50 border border-red-100 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-600">
                      The Missing Piece
                    </span>
                    <p className="text-xs text-[#475569] leading-snug">
                      {current.bottleneck}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700">
                      How 1008 Steps In
                    </span>
                    <p className="text-xs text-[#334155] font-medium leading-snug">
                      {current.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Proof Strip */}
            <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#64748B]">
              <div className="flex items-center gap-1.5 font-medium text-[#0A2540]">
                <UserCheck className="h-4 w-4 text-[#00A389]" />
                <span>Formula: {current.metrics}</span>
              </div>
              <Link
                href="/studio"
                className="text-xs font-semibold text-[#635BFF] hover:underline inline-flex items-center gap-1"
              >
                Learn more <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
