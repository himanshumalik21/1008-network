"use client";

import React from "react";
import Link from "next/link";
import {
  Factory,
  Cpu,
  ShoppingBag,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function DomainsGridSection() {
  const domains = [
    {
      icon: Factory,
      title: "Industrial & Manufacturing",
      badge: "Heavy & Light Engineering",
      color: "#635BFF",
      accentBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      desc: "Precision tooling, factory automation, spare parts distribution, industrial ancillaries, and B2B supply chains.",
      examples: [
        "Automated vendor dispatch & CAD quotation engines",
        "Factory batch inspection tooling & IoT telemetry",
        "Tier-1 & Tier-2 automotive supply network portals",
      ],
    },
    {
      icon: Cpu,
      title: "Vertical Software & Tech",
      badge: "B2B SaaS & Workflows",
      color: "#00A389",
      accentBg: "bg-[#E6FFFA] text-[#007A66] border-[#B2F5EA]",
      desc: "Enterprise workflow platforms, logistics middleware, trade finance rails, and specialized industry software.",
      examples: [
        "Cloud ERPs with GST e-invoicing & automated ledgers",
        "Cold-chain temperature tracking & clinical trial audits",
        "Contract logistics freight bidding & fleet telemetry",
      ],
    },
    {
      icon: ShoppingBag,
      title: "Consumer & D2C Brands",
      badge: "Formulations & Retail",
      color: "#FF7043",
      accentBg: "bg-[#FFF3EE] text-[#D94814] border-[#FFD8C9]",
      desc: "Clean-label consumer goods, wellness formulations, specialized personal care, and modern retail trade distribution.",
      examples: [
        "Contract batch manufacturing & GMP plant leasing",
        "Quick commerce fulfillment & warehouse logistics",
        "Omnichannel B2B retail distribution & working capital",
      ],
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Services",
      badge: "Clinical & Operations",
      color: "#059669",
      accentBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      desc: "Specialized diagnostic networks, clinical operations, NABH compliance systems, and domain service chains.",
      examples: [
        "Multi-site hospital lab integrations & chain SOPs",
        "Regulatory compliance & licensing governance",
        "Local customer acquisition & referral billing rails",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2E8F0] text-xs font-semibold text-[#0A2540]">
            <Sparkles className="h-3.5 w-3.5 text-[#635BFF]" />
            <span>Sectors & Domain Verticals</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Where we co-build enduring businesses.
          </h2>

          <p className="text-base sm:text-lg text-[#425466]">
            We partner with experienced leaders across India’s highest-potential real-economy and software sectors.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {domains.map((dom, idx) => {
            const Icon = dom.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E2E8F0] p-6 flex flex-col justify-between shadow-2xs hover:border-[#CBD5E1] hover:shadow-md transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${dom.accentBg}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-[#64748B] bg-[#F1F5F9] px-2 py-0.5 rounded-full border border-[#E2E8F0]">
                      {dom.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0A2540] group-hover:text-[#635BFF] transition-colors">
                      {dom.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed pt-1.5">
                      {dom.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#F1F5F9]">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#94A3B8]">
                      Operational Scope
                    </span>
                    {dom.examples.map((ex, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#334155] leading-snug">
                        <CheckCircle2 className="h-3 w-3 text-[#059669] shrink-0 mt-0.5" />
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="text-center pt-2">
          <Link
            href="/studio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold text-[#0A2540] shadow-2xs hover:border-[#CBD5E1] transition-all"
          >
            <span>Have deep expertise in one of these sectors? Apply to Co-Build with 1008</span>
            <ArrowRight className="h-3.5 w-3.5 text-[#635BFF]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
