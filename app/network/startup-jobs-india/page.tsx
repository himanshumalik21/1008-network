"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import {
  Users,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Building2,
  Lock,
  Workflow,
  PlusCircle,
} from "lucide-react";

export default function StartupJobsIndiaPage() {
  const roles = [
    {
      title: "Technical Co-Founder (CTO)",
      desc: "Full-stack software architects, AI/ML engineers, and technical leads stepping in as founding tech partners for meaningful equity.",
      deliverable: "Core architecture, product builds & tech team setup",
    },
    {
      title: "Go-to-Market / Sales Co-Founder",
      desc: "B2B sales leaders, corporate BD directors, and enterprise GTM heads driving customer acquisition, distributor contracts, and revenue.",
      deliverable: "Enterprise sales pipelines, distribution rails & partnerships",
    },
    {
      title: "Operations & Supply Chain Lead",
      desc: "Industrial plant heads, logistics veterans, and supply chain managers handling manufacturing, warehousing, and vendor negotiations.",
      deliverable: "Factory audits, OEM contracts, logistics & day-1 SOPs",
    },
    {
      title: "Product & Growth Architect",
      desc: "Seasoned product designers, growth marketers, and CXO operators scaling CAC-efficient acquisition channels.",
      deliverable: "Conversion funnels, retention engines & product telemetry",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FDFDFE] min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative py-14 sm:py-20 overflow-hidden border-b border-[#E6E8EB] bg-[#F6F9FC]">
        <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-40 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center">
            <Badge variant="indigo" size="md">
              1008 Community • Founding Leadership Exchange
            </Badge>
            <span className="text-xs font-mono font-semibold text-[#00A389] bg-[#E6FFFA] px-2.5 py-0.5 rounded-full border border-[#B2F5EA]">
              Founding Teams & Equity
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Step into a founding role.{" "}
            <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              Or hire core leadership for equity.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#425466] leading-relaxed max-w-3xl mx-auto font-normal">
            We don't post low-signal job boards. 1008 Network directly matches experienced domain entrepreneurs with battle-tested technical CTOs, GTM commercial heads, and founding operators under structured milestone equity contracts.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              href="/network/join"
              size="md"
              variant="primary"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold px-6 shadow-sm"
            >
              Join Talent Network (For Operators)
            </Button>
            <Button
              href="/network/post"
              size="md"
              variant="secondary"
              rightIcon={<PlusCircle className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold px-6 shadow-xs"
            >
              Post Leadership Requirement (For Founders)
            </Button>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#64748B] font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#00D4B2]" /> Zero Recruitment Agency Cuts
            </span>
            <span>•</span>
            <span>Standardized Milestone Vesting</span>
            <span>•</span>
            <span>Direct Founder Matching</span>
          </div>
        </div>
      </section>

      {/* 2. Key Leadership Roles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="indigo" size="sm">Leadership Exchange</Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
            Key Founding Capabilities We Match
          </h2>
          <p className="text-xs sm:text-sm text-[#475569]">
            Connecting verified founders with seasoned executives across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((r, i) => (
            <div
              key={i}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs space-y-4 hover:border-[#635BFF]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#F0F0FF] text-[#635BFF] flex items-center justify-center font-bold text-sm">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-[#0A2540]">{r.title}</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {r.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F1F5F9] flex items-center gap-2 text-xs font-medium text-[#334155]">
                <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                <span>{r.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-[#0A2540]">Ready to Build or Hire?</h3>
          <p className="text-xs sm:text-sm text-[#475569] max-w-xl mx-auto leading-relaxed">
            All introductions are conducted under strict mutual confidentiality. Whether you are stepping into a founding team or hiring core leadership, participate in our curated network.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/network/join" variant="primary" size="md">
              Apply to Talent Pool
            </Button>
            <Button href="/network/post" variant="secondary" size="md">
              Post Leadership Need
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
