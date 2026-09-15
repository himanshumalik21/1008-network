"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { InvestIn1008Modal } from "@/components/capital/InvestIn1008Modal";
import {
  TrendingUp,
  ShieldCheck,
  Building2,
  Factory,
  HeartPulse,
  ShoppingBag,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Lock,
  PieChart,
  UserCheck,
  Rocket,
  DollarSign,
  PlusCircle,
  Coins,
  Users,
  FileCheck2,
  AlertTriangle,
  FileText,
  Target,
  Handshake,
  HelpCircle,
  Clock,
  Layers,
} from "lucide-react";

export default function CapitalPage() {
  const [isStudioInvestModalOpen, setIsStudioInvestModalOpen] = useState(false);

  return (
    <div className="pt-28 pb-20 bg-[#FDFDFE] min-h-screen">
      
      {/* 1. Hero Header Section */}
      <section className="relative py-14 sm:py-20 overflow-hidden border-b border-[#E6E8EB] bg-[#F6F9FC]">
        <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-55 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-gradient-to-r from-[#635BFF]/12 via-[#00D4B2]/08 to-[#FF7043]/06 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center">
            <Badge variant="indigo" size="md" pulse>
              1008 Capital Network
            </Badge>
            <span className="text-xs font-mono font-semibold text-[#00A389] bg-[#E6FFFA] px-2.5 py-0.5 rounded-full border border-[#B2F5EA]">
              Data Intake & Allocation Aggregation Phase
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Democratic startup investing.{" "}
            <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              Direct connections. Transparent use of capital.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#425466] leading-relaxed max-w-3xl mx-auto font-normal">
            1008 Capital Network connects individuals looking to invest in early and growth-stage Indian businesses with founders raising capital. We facilitate discovery, deal meetings, and operational structuring so capital is deployed with clarity.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="/capital/post"
              size="md"
              variant="primary"
              rightIcon={<PlusCircle className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold px-6 shadow-sm"
            >
              Post Capital Requirement (For Startups)
            </Button>
            <Button
              href="/capital/join"
              size="md"
              variant="secondary"
              rightIcon={<TrendingUp className="h-4 w-4 text-[#00A389]" />}
              className="w-full sm:w-auto font-semibold"
            >
              Join Investor Network (For Investors)
            </Button>
            <Button
              onClick={() => setIsStudioInvestModalOpen(true)}
              size="md"
              variant="ghost"
              className="w-full sm:w-auto text-xs text-[#635BFF] font-semibold hover:bg-[#635BFF]/10"
            >
              Invest in 1008 Network Studio →
            </Button>
          </div>

          {/* Quick Informational Highlights */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-[#627D98]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span>Current Status: <strong>Data Collection Active</strong></span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Target className="h-3.5 w-3.5 text-[#635BFF]" />
              <span>Target-Based Rounds (No Expiry)</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#059669]" />
              <span>Zero Intermediary Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pre-Launch Data Gathering Status Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="p-6 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-2xs">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#15803D]">
                Platform Status: Information & Data Gathering Phase
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#166534] leading-relaxed max-w-3xl">
              Currently, there are no public active investments listed. We are gathering data from individuals seeking to invest and startups looking for capital. Once allocations and requirements are collected, live venture rounds and investor directories will be published directly here.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0 self-start md:self-auto">
            <Button
              href="/capital/post"
              variant="primary"
              size="sm"
              className="text-xs font-semibold bg-[#16A34A] hover:bg-[#15803D] border-[#16A34A]"
            >
              Submit Startup
            </Button>
            <Button
              href="/capital/join"
              variant="secondary"
              size="sm"
              className="text-xs font-semibold"
            >
              Submit Investor Profile
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Featured Opportunity: Invest in 1008 Network Parent Studio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0A2540] via-[#1A365D] to-[#0A2540] p-6 sm:p-10 text-white relative overflow-hidden shadow-lg border border-[#2D3748]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#635BFF]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#00D4B2]/20 text-[#00D4B2] text-[10px] font-mono font-bold uppercase tracking-wider border border-[#00D4B2]/30">
                  Featured Opportunity
                </span>
                <span className="text-xs text-[#CBD5E1] font-mono">Portfolio Holding Equity</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Invest Directly in 1008 Network Parent Studio
              </h2>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                Back the venture studio building India&apos;s real economy enterprises. Owning equity in 1008 Network provides diversified portfolio upside across every manufacturing unit, healthcare clinic, retail brand, and tech software venture we co-build for shared equity.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#00D4B2]">
                <span>✓ Diversified across 10+ operational ventures</span>
                <span>✓ Direct equity participation</span>
                <span>✓ Zero management fees</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 w-full lg:w-auto">
              <Button
                onClick={() => setIsStudioInvestModalOpen(true)}
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="font-semibold shadow-md whitespace-nowrap bg-[#635BFF] hover:bg-[#5851EA] border-none"
              >
                Invest in 1008 Network
              </Button>
              <Button
                href="/studio"
                variant="ghost"
                size="sm"
                className="text-xs text-[#CBD5E1] hover:text-white hover:bg-white/10"
              >
                Explore Studio Model →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How Capital Rounds Work (4-Step Workflow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <Badge variant="cyan" size="sm">The 1008 Capital Model</Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            How Capital Rounds Work
          </h2>
          <p className="text-xs sm:text-base text-[#425466]">
            From open allocation to founder-investor deal completion — transparent, structured, and goal-driven.
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
                <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0]">
                  Target Raise
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0A2540]">
                Startup Launches Round & Defines Use of Funds
              </h3>
              <p className="text-xs text-[#425466] leading-relaxed">
                The company initiates a round with an exact funding target (e.g., ₹50 Lakhs or $1M) and clearly states what the money will be used for: setting up manufacturing lines, procuring inventory, or hiring core teams. <strong>Rounds have no time expiry and stay open until the target is fulfilled.</strong>
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#627D98] pt-3 border-t border-[#F1F4F8] flex items-center gap-1.5">
              <FileText className="h-3.5 w-3.5 text-[#635BFF]" /> Goal-based raise (No expiry)
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-white border border-[#E6E8EB] shadow-xs relative flex flex-col justify-between space-y-4 hover:border-[#00A389]/40 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-9 h-9 rounded-xl bg-[#E6FFFA] text-[#00A389] font-mono font-bold text-sm flex items-center justify-center border border-[#B2F5EA]">
                  02
                </span>
                <span className="text-[10px] font-mono text-[#635BFF] bg-[#F0F0FF] px-2.5 py-0.5 rounded-full border border-[#E0E0FF]">
                  Soft Commits
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0A2540]">
                Investors Show Interest & Indicate Check Size
              </h3>
              <p className="text-xs text-[#425466] leading-relaxed">
                Anyone can show interest and specify how much capital they are willing to invest (from ₹50,000 to ₹50 Lakhs+). Allocators indicate their preferred sectors and strategic assistance.
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#627D98] pt-3 border-t border-[#F1F4F8] flex items-center gap-1.5">
              <Coins className="h-3.5 w-3.5 text-[#00A389]" /> Flexible check sizes
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
                  Deal Meeting
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0A2540]">
                Target Reached & Combined Deal Meeting
              </h3>
              <p className="text-xs text-[#425466] leading-relaxed">
                Once the target raise is met, 1008 Network coordinates a combined meeting where the founder and all interested investors meet to review business projections, deal terms, and governance.
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#627D98] pt-3 border-t border-[#F1F4F8] flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-[#FF7043]" /> Combined founder-investor call
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
                  Direct Execution
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0A2540]">
                Independent Due Diligence & Direct Signing
              </h3>
              <p className="text-xs text-[#425466] leading-relaxed">
                Investors perform their own independent due diligence and sign investment agreements directly with the company. 1008 Network acts solely as a discovery and meeting facilitator holding no responsibility.
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#627D98] pt-3 border-t border-[#F1F4F8] flex items-center gap-1.5">
              <FileCheck2 className="h-3.5 w-3.5 text-[#0A2540]" /> Self due diligence & direct contracts
            </div>
          </div>
        </div>
      </section>

      {/* 5. Dual Data Intake Portals (Forms) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <Badge variant="indigo" size="sm">Submit Data</Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
            Participate in 1008 Capital Network
          </h2>
          <p className="text-xs sm:text-sm text-[#425466]">
            Whether you are raising capital or looking to deploy funds, submit your details to be notified of matching opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: For Startups Seeking Capital */}
          <div className="p-8 rounded-3xl bg-white border border-[#E6E8EB] space-y-6 relative overflow-hidden shadow-xs flex flex-col justify-between hover:border-[#635BFF]/50 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F0F0FF] text-[#635BFF] flex items-center justify-center border border-[#E0E0FF]">
                <Rocket className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <Badge variant="indigo" size="sm">For Startups & Founders</Badge>
                <h3 className="text-2xl font-extrabold text-[#0A2540]">Looking to Raise Capital?</h3>
                <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                  Submit your startup requirement, target raise amount, and exact use of capital. Once verified, your requirement will be opened for allocation to aligned investors.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs text-[#425466]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                  <span>Specify target raise (₹10L to ₹5Cr+) and deployment milestones</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                  <span>Zero upfront retainer or placement listing fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                  <span>Confidential pitch deck review under Mutual NDA standard</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F1F4F8]">
              <Button
                href="/capital/post"
                variant="primary"
                size="md"
                className="w-full justify-center font-semibold shadow-xs"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Post Capital Requirement (Fill Form)
              </Button>
            </div>
          </div>

          {/* Card 2: For Individuals & Investors */}
          <div className="p-8 rounded-3xl bg-white border border-[#E6E8EB] space-y-6 relative overflow-hidden shadow-xs flex flex-col justify-between hover:border-[#00A389]/50 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E6FFFA] text-[#00A389] flex items-center justify-center border border-[#B2F5EA]">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <Badge variant="cyan" size="sm">For Individuals & Allocators</Badge>
                <h3 className="text-2xl font-extrabold text-[#0A2540]">Looking to Invest Capital?</h3>
                <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                  Join our investor network. Whether you are an angel investor, working professional, or family office, specify your check size appetite and target sectors to participate in upcoming rounds.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs text-[#425466]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                  <span>Participate in small-scale to large rounds (₹50K to ₹5Cr+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                  <span>Full visibility on itemized use of funds before deal meetings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                  <span>Direct founder interaction & direct contract signing</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F1F4F8]">
              <Button
                href="/capital/join"
                variant="secondary"
                size="md"
                className="w-full justify-center font-semibold shadow-xs"
                rightIcon={<UserCheck className="h-4 w-4 text-[#00A389]" />}
              >
                Join Investor Network (Fill Form)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Key Platform Characteristics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="p-8 rounded-3xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-6">
          <div className="max-w-2xl space-y-1">
            <h3 className="text-xl font-extrabold text-[#0A2540]">Key Principles of 1008 Capital Network</h3>
            <p className="text-xs text-[#627D98]">How we differ from traditional intermediary brokers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-2xl bg-white border border-[#E6E8EB] space-y-2">
              <div className="flex items-center gap-2 text-[#0A2540] font-bold text-sm">
                <Target className="h-4 w-4 text-[#635BFF]" />
                <span>Target-Based (No Expiry)</span>
              </div>
              <p className="text-xs text-[#425466] leading-relaxed">
                Capital campaigns stay open until the startup reaches its declared funding target, with clear operational milestones and transparency.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E6E8EB] space-y-2">
              <div className="flex items-center gap-2 text-[#0A2540] font-bold text-sm">
                <DollarSign className="h-4 w-4 text-[#059669]" />
                <span>Explicit Use of Funds</span>
              </div>
              <p className="text-xs text-[#425466] leading-relaxed">
                Companies must clearly define how every rupee is allocated (machinery, working capital, inventory) prior to holding combined investor deal meetings.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E6E8EB] space-y-2">
              <div className="flex items-center gap-2 text-[#0A2540] font-bold text-sm">
                <Handshake className="h-4 w-4 text-[#FF7043]" />
                <span>Combined Deal Meetings</span>
              </div>
              <p className="text-xs text-[#425466] leading-relaxed">
                When the round target is reached, all interested investors and founders meet in a single structured session to align on final valuations and terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Facilitator & Self-Due Diligence Disclaimer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="p-6 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#92400E]">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-[#D97706] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold font-sans text-sm text-[#78350F]">
                Facilitator Notice & Independent Due Diligence Disclaimer:
              </span>
              <p className="text-xs text-[#A16207] leading-relaxed max-w-4xl">
                1008 Network operates strictly as a discovery and networking facilitator. We do not hold investor capital, manage custodial funds, provide financial advice, or guarantee investment returns. Startup investments carry high risk; all investors must conduct their own independent due diligence and invest at their own risk. All contracts and funds are executed directly between the company and investors.
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

      {/* Invest in 1008 Network Modal */}
      <InvestIn1008Modal
        isOpen={isStudioInvestModalOpen}
        onClose={() => setIsStudioInvestModalOpen(false)}
      />
    </div>
  );
}
