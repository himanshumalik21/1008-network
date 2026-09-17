"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { PillarFAQ } from "@/components/ui/PillarFAQ";
import { networkFaqs } from "@/data/faqs";
import {
  Users,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  PlusCircle,
  Code2,
  Layers,
  Cpu,
  Building2,
  TrendingUp,
  UserCheck,
  RotateCcw,
  FileCheck2,
  Handshake,
  AlertTriangle,
  FileText,
  Target,
} from "lucide-react";

export default function NetworkPage() {
  return (
    <div className="pt-28 pb-20 bg-[#FDFDFE] min-h-screen">
      
      {/* 1. Hero Header Section */}
      <section className="relative py-14 sm:py-20 overflow-hidden border-b border-[#E6E8EB] bg-[#F6F9FC]">
        {/* Background Architectural Box Grid & Subtle Motion */}
        <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-55 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-gradient-to-r from-[#635BFF]/12 via-[#00D4B2]/08 to-[#FF7043]/06 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center">
            <Badge variant="indigo" size="md" pulse>
              1008 Partner Network
            </Badge>
            <span className="text-xs font-mono font-semibold text-[#00A389] bg-[#E6FFFA] px-2.5 py-0.5 rounded-full border border-[#B2F5EA]">
              Co-Founders & Leadership Talent
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Have the business vision.{" "}
            <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              Find the right co-founder & talent.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#425466] leading-relaxed max-w-3xl mx-auto font-normal">
            Great enterprises are rarely built alone. 1008 Partner Network connects domain founders who have the business vision with curated technical CTOs, operations leads, and commercial sales partners for shared equity.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="/network/post"
              size="md"
              variant="primary"
              rightIcon={<PlusCircle className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold px-6 shadow-sm"
            >
              Post a Requirement (For Founders)
            </Button>
            <Button
              href="/network/join"
              size="md"
              variant="secondary"
              rightIcon={<UserCheck className="h-4 w-4 text-[#635BFF]" />}
              className="w-full sm:w-auto font-semibold"
            >
              Join Talent Pool (For Operators)
            </Button>
          </div>

          {/* Quick Informational Highlights */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-[#627D98]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span>Matching Status: <strong>Direct Introductions</strong></span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#635BFF]" />
              <span>Curated Active Listings</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#059669]" />
              <span>Zero Placement Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How Partner Matching Works (4-Step Workflow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <Badge variant="cyan" size="sm">Matching Lifecycle</Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            How Partner Matching Works
          </h2>
          <p className="text-xs sm:text-base text-[#425466]">
            From posting a role to aligned equity execution — structured, confidential, and milestone-backed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Step 1 */}
          <div className="p-6 rounded-2xl bg-white border border-[#E6E8EB] shadow-xs relative flex flex-col justify-between space-y-4 hover:border-[#635BFF]/40 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-xl bg-[#F0F0FF] text-[#635BFF] font-mono font-bold text-sm flex items-center justify-center border border-[#E0E0FF]">
                  01
                </span>
                <span className="text-[10px] font-mono text-[#635BFF] bg-[#F0F0FF] px-2.5 py-0.5 rounded-full border border-[#E0E0FF]">
                  Role Post
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0A2540]">
                Founder Posts Role & Business Vision
              </h3>
              <p className="text-xs text-[#425466] leading-relaxed">
                Founders define the missing leadership capability (Technical CTO, Operations Lead, GTM Sales Head), business thesis, and equity pool (5% – 25%+). <strong>Listings are actively curated to ensure opportunities remain responsive.</strong>
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#627D98] pt-3 border-t border-[#F1F4F8] flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#635BFF]" /> Curated fresh lifecycle
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-white border border-[#E6E8EB] shadow-xs relative flex flex-col justify-between space-y-4 hover:border-[#00A389]/40 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-xl bg-[#E6FFFA] text-[#00A389] font-mono font-bold text-sm flex items-center justify-center border border-[#B2F5EA]">
                  02
                </span>
                <span className="text-[10px] font-mono text-[#00A389] bg-[#E6FFFA] px-2.5 py-0.5 rounded-full border border-[#B2F5EA]">
                  Candidate Fit
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0A2540]">
                Operators & Co-Founders Apply
              </h3>
              <p className="text-xs text-[#425466] leading-relaxed">
                Experienced operators, senior software engineers, and domain specialists submit their background, detailed past execution track record, and desired compensation/equity preferences.
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#627D98] pt-3 border-t border-[#F1F4F8] flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-[#00A389]" /> Curated talent pool
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl bg-white border border-[#E6E8EB] shadow-xs relative flex flex-col justify-between space-y-4 hover:border-[#FF7043]/40 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-xl bg-[#FFF3EE] text-[#FF7043] font-mono font-bold text-sm flex items-center justify-center border border-[#FFE2D6]">
                  03
                </span>
                <span className="text-[10px] font-mono text-[#FF7043] bg-[#FFF3EE] px-2.5 py-0.5 rounded-full border border-[#FFE2D6]">
                  Intro Call
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0A2540]">
                Curated Match & Private Intro
              </h3>
              <p className="text-xs text-[#425466] leading-relaxed">
                1008 Network curates high-alignment matches and coordinates a private introduction meeting to evaluate chemistry, work styles, and role scoping.
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#627D98] pt-3 border-t border-[#F1F4F8] flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#FF7043]" /> Direct party introductions
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-2xl bg-white border border-[#E6E8EB] shadow-xs relative flex flex-col justify-between space-y-4 hover:border-[#0A2540]/40 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-xl bg-[#F8FAFC] text-[#0A2540] font-mono font-bold text-sm flex items-center justify-center border border-[#CBD5E1]">
                  04
                </span>
                <span className="text-[10px] font-mono text-[#425466] bg-[#F1F5F9] px-2.5 py-0.5 rounded-full border border-[#E2E8F0]">
                  Direct Contract
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0A2540]">
                Milestone Alignment & Direct Agreement
              </h3>
              <p className="text-xs text-[#425466] leading-relaxed">
                Founders and operators establish milestone-based trial periods, vesting schedules (1-year cliff / 4-year vesting), and sign co-founder agreements directly with 100% mutual alignment.
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#627D98] pt-3 border-t border-[#F1F4F8] flex items-center gap-1.5">
              <FileCheck2 className="h-3.5 w-3.5 text-[#0A2540]" /> Direct party agreements
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dual Data Intake Portals (Forms) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <Badge variant="indigo" size="sm">Submit Requirements</Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
            Participate in 1008 Partner Network
          </h2>
          <p className="text-xs sm:text-sm text-[#425466]">
            Whether you have the business vision and need a partner, or you are an operator looking for your next high-conviction venture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: For Founders / Startups */}
          <div className="p-8 rounded-3xl bg-white border border-[#E6E8EB] space-y-6 relative overflow-hidden shadow-xs flex flex-col justify-between hover:border-[#635BFF]/50 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F0F0FF] text-[#635BFF] flex items-center justify-center border border-[#E0E0FF]">
                <Briefcase className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <Badge variant="indigo" size="sm">For Founders & Builders</Badge>
                <h3 className="text-2xl font-extrabold text-[#0A2540]">Looking for a Co-Founder / Talent?</h3>
                <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                  Have the domain vision but need a technical CTO, operations head, or commercial sales partner? Post your requirement to be matched with reviewed operators.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs text-[#425466]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                  <span>Specify role (CTO, Ops, GTM) and equity allocation range</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                  <span>Active talent matching & co-founder introductions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                  <span>Zero upfront recruitment placement fees</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F1F4F8]">
              <Button
                href="/network/post"
                variant="primary"
                size="md"
                className="w-full justify-center font-semibold shadow-xs"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Post Talent Requirement (Fill Form)
              </Button>
            </div>
          </div>

          {/* Card 2: For Operators & Specialists */}
          <div className="p-8 rounded-3xl bg-white border border-[#E6E8EB] space-y-6 relative overflow-hidden shadow-xs flex flex-col justify-between hover:border-[#00A389]/50 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E6FFFA] text-[#00A389] flex items-center justify-center border border-[#B2F5EA]">
                <Users className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <Badge variant="cyan" size="sm">For Operators & Specialists</Badge>
                <h3 className="text-2xl font-extrabold text-[#0A2540]">Looking to Join a Startup?</h3>
                <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                  Join our curated talent & co-founder network. Connect with high-conviction founders building real economy enterprises and software ventures for meaningful equity.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs text-[#425466]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                  <span>Full-time co-founder or fractional CXO leadership roles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                  <span>Direct founder introductions with high-alignment ventures</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                  <span>Shared equity upside and milestone-backed vesting</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F1F4F8]">
              <Button
                href="/network/join"
                variant="secondary"
                size="md"
                className="w-full justify-center font-semibold shadow-xs"
                rightIcon={<UserCheck className="h-4 w-4 text-[#00A389]" />}
              >
                Join Talent Pool (Fill Form)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Principles of Partner Network */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="p-8 rounded-3xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-6">
          <div className="max-w-2xl space-y-1">
            <h3 className="text-xl font-extrabold text-[#0A2540]">Key Principles of 1008 Partner Network</h3>
            <p className="text-xs text-[#627D98]">Why our co-founder matching delivers high-alignment outcomes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-2xl bg-white border border-[#E6E8EB] space-y-2">
              <div className="flex items-center gap-2 text-[#0A2540] font-bold text-sm">
                <Clock className="h-4 w-4 text-[#635BFF]" />
                <span>Active & Curated Roles</span>
              </div>
              <p className="text-xs text-[#425466] leading-relaxed">
                Openings are actively monitored and curated by 1008 Network partners so you never waste time applying to stale or inactive roles.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E6E8EB] space-y-2">
              <div className="flex items-center gap-2 text-[#0A2540] font-bold text-sm">
                <TrendingUp className="h-4 w-4 text-[#00A389]" />
                <span>Equity & Upside Aligned</span>
              </div>
              <p className="text-xs text-[#425466] leading-relaxed">
                We prioritize partners with real skin in the game. All roles feature meaningful equity stakes (5% – 25%+) with milestone-based vesting protections.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E6E8EB] space-y-2">
              <div className="flex items-center gap-2 text-[#0A2540] font-bold text-sm">
                <CheckCircle2 className="h-4 w-4 text-[#059669]" />
                <span>Direct Agreements</span>
              </div>
              <p className="text-xs text-[#425466] leading-relaxed">
                Both founder requirements and applicant profiles are facilitated directly between parties with full clarity and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Partner Network Frequently Answered Questions */}
      <PillarFAQ
        items={networkFaqs}
        badge="Co-Founders & Talent"
        badgeVariant="cyan"
        title="Partner Network Frequently Answered Questions"
        description="Everything you need to know about finding co-founders, posting leadership requirements, review standards, and equity terms."
      />

      {/* 7. Facilitator Notice Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="p-6 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#92400E]">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-[#D97706] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold font-sans text-sm text-[#78350F]">
                Facilitator Notice:
              </span>
              <p className="text-xs text-[#A16207] leading-relaxed max-w-4xl">
                1008 Network is a discovery and matching facilitator connecting entrepreneurs with potential co-founders and operators. All partnership contracts, vesting agreements, and trial terms are negotiated and executed directly between the parties. We hold no fiduciary or employment liability.
              </p>
            </div>
          </div>
          <Link
            href="/terms"
            className="text-xs font-mono font-bold text-[#D97706] hover:underline whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            Review Terms & Disclaimers →
          </Link>
        </div>
      </section>
    </div>
  );
}
