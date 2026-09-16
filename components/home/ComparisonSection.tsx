"use client";

import React, { useState } from "react";
import { Badge } from "@/components/brand/Badge";
import { CheckCircle2, XCircle, AlertTriangle, ArrowRight, ShieldCheck, Zap, Users, Building2, UserX } from "lucide-react";

type AlternativeKey = "agency" | "incubator" | "solo";

export function ComparisonSection() {
  const [selectedAlt, setSelectedAlt] = useState<AlternativeKey>("agency");

  const alternatives: Record<
    AlternativeKey,
    {
      name: string;
      shortLabel: string;
      tag: string;
      icon: React.ReactNode;
      summary: string;
      badgeVariant: "rose" | "amber" | "slate";
    }
  > = {
    agency: {
      name: "Consulting Agencies",
      shortLabel: "Consulting Agency",
      tag: "Hourly Fees • Zero Risk Alignment",
      icon: <Building2 className="h-4 w-4" />,
      summary: "Incentivized by billable hours and ongoing retainers, with zero financial risk if your business stalls.",
      badgeVariant: "rose",
    },
    incubator: {
      name: "Standard Incubators",
      shortLabel: "Incubator / Accelerator",
      tag: "Equity for Lectures • Zero Build Muscle",
      icon: <Users className="h-4 w-4" />,
      summary: "Takes 7%–10% equity for 3 months of lecture cohorts, offering zero on-the-ground operational execution.",
      badgeVariant: "amber",
    },
    solo: {
      name: "Solo Bootstrapping",
      shortLabel: "Solo Bootstrapping",
      tag: "100% Personal Burn • High Risk",
      icon: <UserX className="h-4 w-4" />,
      summary: "Heavy personal capital burn, juggling fragmented freelancers, and extreme execution fatigue alone.",
      badgeVariant: "slate",
    },
  };

  const comparisonData = [
    {
      dimension: "Incentive Alignment & Venture Model",
      studio1008: "Shared Venture Equity & Milestone Upside. We act as your operating partner—orchestrating talent, tools, and vendors to build real enterprise value.",
      agency: "High billable hourly fees & monthly retainer invoices. Zero financial risk if your business fails.",
      incubator: "Takes 7%–10% equity for lecture cohorts and pitch days; provides zero physical build or operational muscle.",
      solo: "100% personal capital burn; high risk of costly trial-and-error mistakes and contractor exploitation.",
    },
    {
      dimension: "Vendor Sourcing & Supply Chain",
      studio1008: "Direct Facilitation: We audit OEM factories, negotiate commercial vendor terms, and onboard 3PL fulfillment directly for your entity.",
      agency: "None. Strictly limited to PowerPoint decks, brand logos, or superficial digital mockups.",
      incubator: "None. The founder is left alone to navigate zoning, factory clearances, and contractor disputes.",
      solo: "Extremely vulnerable to vendor fraud, extortionate middleman markups, and regulatory delays.",
    },
    {
      dimension: "Software Stacks & Developer Talent",
      studio1008: "Curated Tech & Sourced Talent: We architect the stack, configure open-source ERPs, and recruit vetted engineers for your team.",
      agency: "Junior outsourced developers who over-engineer brittle systems to maximize billable development hours.",
      incubator: "None. Gives generic product advice without building production code or managing infrastructure.",
      solo: "Disorganized freelancer churn resulting in fractured codebases and massive wasted cash burn.",
    },
    {
      dimension: "Key Operator Hiring & GTM Tooling",
      studio1008: "We recruit vetted operational leads and configure outbound sales engines to drive inaugural customer revenue.",
      agency: "Vanity social media posts without sales pipelines, distributor tie-ups, or commercial purchase orders.",
      incubator: "Demo Day pitch with no direct assistance in closing commercial clients or B2B distributors.",
      solo: "Founder is stretched thin between hiring, managing daily fires, and trying to close sales alone.",
    },
    {
      dimension: "Capital Access & Syndicate Facilitation",
      studio1008: "We syndicate co-investment and non-dilutive credit lines from our network of 250+ angel investors and family offices.",
      agency: "Zero investor introductions or syndication support.",
      incubator: "Broad investor demo day with low individual attention and intense competition for attention.",
      solo: "Cold email pitches to VCs that rarely understand non-software operational unit economics.",
    },
    {
      dimension: "Duration & Exit to Autonomy",
      studio1008: "Structured phased handover engineered to make the founder completely self-reliant with zero vendor lock-in.",
      agency: "Incentivized to create vendor dependency and extend monthly retainer contracts indefinitely.",
      incubator: "3-month cohort ending in a presentation, after which operational support disappears.",
      solo: "Indefinite survival battle leading to founder burnout and operational stagnation.",
    },
  ];

  const currentAlt = alternatives[selectedAlt];

  return (
    <section id="comparison" className="py-24 bg-white border-t border-[#E6E8EB] relative overflow-hidden">
      {/* Subtle Architectural Box Grid & Ambient Motion */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-[#635BFF]/05 via-[#00D4B2]/04 to-transparent blur-[140px] pointer-events-none animate-pulse-subtle" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <Badge variant="indigo" size="sm">The Direct Comparison</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Why traditional paths fail ambitious businesses.
          </h2>
          <p className="text-[#425466] text-base sm:text-lg">
            Great businesses don&apos;t fail from lack of vision. They fail from execution fatigue, contractor markups, and disconnected operational silos.
          </p>
        </div>

        {/* Interactive Alternative Model Selector */}
        <div className="flex flex-col items-center justify-center space-y-3 mb-8">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#627D98]">
            Select an alternative to compare vs 1008 Venture Studio:
          </div>
          <div className="inline-flex p-1.5 bg-[#F1F4F9] rounded-2xl border border-[#E2E8F0] gap-1.5 flex-wrap justify-center shadow-2xs">
            {(Object.keys(alternatives) as AlternativeKey[]).map((key) => {
              const alt = alternatives[key];
              const isActive = selectedAlt === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedAlt(key)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-white text-[#0A2540] shadow-sm border border-[#CBD5E1]"
                      : "text-[#627D98] hover:text-[#0A2540] hover:bg-white/60"
                  }`}
                >
                  <span className={isActive ? "text-[#635BFF]" : "text-[#829AB1]"}>
                    {alt.icon}
                  </span>
                  <span>{alt.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="space-y-4">
          {/* Column Header Titles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
            {/* 1008 Venture Studio Header Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#F0F0FF] to-[#F8F9FE] border-2 border-[#635BFF]/30 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#635BFF] animate-pulse" />
                <div>
                  <h3 className="font-extrabold text-[#0A2540] text-base sm:text-lg">1008 Venture Studio</h3>
                  <p className="text-xs text-[#635BFF] font-medium">Turnkey Venture Partner • Shared Equity</p>
                </div>
              </div>
              <span className="text-[10px] bg-[#635BFF] text-white px-2.5 py-1 rounded-full font-bold uppercase tracking-wider font-mono">
                Skin In The Game
              </span>
            </div>

            {/* Alternative Model Header Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#94A3B8]" />
                <div>
                  <h3 className="font-extrabold text-[#475569] text-base sm:text-lg">{currentAlt.name}</h3>
                  <p className="text-xs text-[#64748B] font-medium">{currentAlt.tag}</p>
                </div>
              </div>
              <span className="text-[10px] bg-[#E2E8F0] text-[#475569] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider font-mono">
                Traditional Model
              </span>
            </div>
          </div>

          {/* Comparative Feature Rows */}
          <div className="space-y-3 pt-2">
            {comparisonData.map((row, idx) => {
              const altText = row[selectedAlt];
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E6E8EB] bg-white p-4 sm:p-5 hover:border-[#CBD5E1] transition-all duration-200 shadow-2xs"
                >
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#829AB1] mb-3 pb-2 border-b border-[#F1F4F8] flex items-center justify-between">
                    <span>{`0${idx + 1}. ${row.dimension}`}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                    {/* 1008 Network Solution */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#F0F0FF]/50 border border-[#635BFF]/20 flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm text-[#0A2540] font-medium leading-relaxed">
                        {row.studio1008}
                      </div>
                    </div>

                    {/* Alternative Model Pain Point */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3">
                      {selectedAlt === "incubator" ? (
                        <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-500/80 shrink-0 mt-0.5" />
                      )}
                      <div className="text-xs sm:text-sm text-[#627D98] leading-relaxed">
                        {altText}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
