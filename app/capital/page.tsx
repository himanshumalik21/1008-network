"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { InvestIn1008Modal } from "@/components/capital/InvestIn1008Modal";
import { PillarFAQ } from "@/components/ui/PillarFAQ";
import { capitalFaqs } from "@/data/faqs";
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
              Syndicate Capital & Verified Rounds
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
              <span>Syndicate Status: <strong>Active Capital Allocations</strong></span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Target className="h-3.5 w-3.5 text-[#635BFF]" />
              <span>Target-Based Capital Rounds</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#059669]" />
              <span>Zero Intermediary Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. How Capital Rounds Work (4-Step Workflow) - Elevated Modern Blueprint */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <Badge variant="cyan" size="sm">The 1008 Capital Model</Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight font-sans">
            How Capital Rounds Work
          </h2>
          <p className="text-xs sm:text-base text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal">
            From open allocation to founder-investor deal completion — transparent, structured, and goal-driven.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Step 1 */}
          <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-xs hover:shadow-xl hover:border-[#635BFF]/60 hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#635BFF] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="space-y-3.5">
              <div className="flex items-center justify-between gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#F0F0FF] text-[#635BFF] font-mono font-bold text-xs flex items-center justify-center border border-[#E0E0FF] group-hover:scale-105 transition-transform shadow-2xs">
                  01
                </span>
                <span className="text-[10px] font-mono font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-1 rounded-full border border-[#A7F3D0]">
                  Target Raise
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0A2540] group-hover:text-[#635BFF] transition-colors leading-snug">
                Startup Launches Round & Defines Use of Funds
              </h3>
              <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed">
                The company initiates a round with an exact funding target (e.g., ₹50L to ₹5Cr+) and clearly declares capital deployment milestones: setting up production lines, inventory, or hiring core CXOs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-mono font-medium text-[#627D98]">
              <span className="flex items-center gap-1.5 text-[#635BFF]">
                <FileText className="h-3.5 w-3.5" /> Goal-Based Raise
              </span>
              <span className="text-[#94A3B8]">Stage 1</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-xs hover:shadow-xl hover:border-[#00D4B2]/60 hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00D4B2] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="space-y-3.5">
              <div className="flex items-center justify-between gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#E6FFFA] text-[#00A389] font-mono font-bold text-xs flex items-center justify-center border border-[#B2F5EA] group-hover:scale-105 transition-transform shadow-2xs">
                  02
                </span>
                <span className="text-[10px] font-mono font-bold text-[#635BFF] bg-[#F0F0FF] px-2.5 py-1 rounded-full border border-[#E0E0FF]">
                  Soft Commits
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0A2540] group-hover:text-[#00A389] transition-colors leading-snug">
                Investors Show Interest & Indicate Check Size
              </h3>
              <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed">
                Allocators specify their investment appetite, sector preferences, and strategic value-add without upfront lock-ins. Rounds remain open until the target is fulfilled.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-mono font-medium text-[#627D98]">
              <span className="flex items-center gap-1.5 text-[#00A389]">
                <Coins className="h-3.5 w-3.5" /> Flexible Allocation
              </span>
              <span className="text-[#94A3B8]">Stage 2</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-xs hover:shadow-xl hover:border-[#FF7043]/60 hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FF7043] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="space-y-3.5">
              <div className="flex items-center justify-between gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#FFF3EE] text-[#FF7043] font-mono font-bold text-xs flex items-center justify-center border border-[#FFE2D6] group-hover:scale-105 transition-transform shadow-2xs">
                  03
                </span>
                <span className="text-[10px] font-mono font-bold text-[#D94814] bg-[#FFF3EE] px-2.5 py-1 rounded-full border border-[#FFD8C9]">
                  Deal Meeting
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0A2540] group-hover:text-[#FF7043] transition-colors leading-snug">
                Target Reached & Combined Deal Session
              </h3>
              <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed">
                Once the target raise is fulfilled, 1008 Network coordinates a structured combined meeting where the founder and all interested investors align on unit metrics, terms, and governance.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-mono font-medium text-[#627D98]">
              <span className="flex items-center gap-1.5 text-[#FF7043]">
                <Users className="h-3.5 w-3.5" /> Combined Pitch Call
              </span>
              <span className="text-[#94A3B8]">Stage 3</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-xs hover:shadow-xl hover:border-[#0A2540]/60 hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#0A2540] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="space-y-3.5">
              <div className="flex items-center justify-between gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#F8FAFC] text-[#0A2540] font-mono font-bold text-xs flex items-center justify-center border border-[#CBD5E1] group-hover:scale-105 transition-transform shadow-2xs">
                  04
                </span>
                <span className="text-[10px] font-mono font-bold text-[#425466] bg-[#F1F5F9] px-2.5 py-1 rounded-full border border-[#E2E8F0]">
                  Direct Contract
                </span>
              </div>
              <h3 className="text-base font-bold text-[#0A2540] group-hover:text-[#635BFF] transition-colors leading-snug">
                Independent Due Diligence & Direct Signing
              </h3>
              <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed">
                Investors perform their independent due diligence and sign investment agreements directly with the company entity with 100% clarity and zero intermediary markups.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-mono font-medium text-[#627D98]">
              <span className="flex items-center gap-1.5 text-[#0A2540]">
                <FileCheck2 className="h-3.5 w-3.5" /> Direct Entity Execution
              </span>
              <span className="text-[#94A3B8]">Stage 4</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Dual Data Intake Portals - Redesigned Enterprise Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <Badge variant="indigo" size="sm">Syndicate Portals</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight font-sans">
            Participate in 1008 Capital Network
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] max-w-xl mx-auto">
            Whether you are raising capital for your venture or looking to deploy capital alongside aligned syndicate partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: For Startups Seeking Capital */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2E8F0] space-y-6 relative overflow-hidden shadow-xs hover:shadow-xl hover:border-[#635BFF]/50 transition-all duration-300 flex flex-col justify-between group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#635BFF] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F0FF] text-[#635BFF] flex items-center justify-center border border-[#E0E0FF] group-hover:scale-105 transition-transform shadow-2xs">
                  <Rocket className="h-6 w-6" />
                </div>
                <Badge variant="indigo" size="sm">For Startups & Founders</Badge>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-[#0A2540] font-sans group-hover:text-[#635BFF] transition-colors">
                  Looking to Raise Capital?
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                  Submit your startup requirement, target funding goal, and itemized use of capital. Once vetted, your round will be opened for allocation to aligned investors.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs sm:text-[13px] text-[#0A2540]">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#F1F5F9]">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                  <span>Define target raise and explicit deployment milestones</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#F1F5F9]">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                  <span>Zero upfront retainer or broker listing fees</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#F1F5F9]">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                  <span>Direct founder interaction with verified investors</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#F1F4F8]">
              <Button
                href="/capital/post"
                variant="primary"
                size="md"
                className="w-full justify-center font-semibold shadow-xs py-3 text-sm"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Post Capital Requirement (Fill Form)
              </Button>
            </div>
          </div>

          {/* Card 2: For Individuals & Investors */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2E8F0] space-y-6 relative overflow-hidden shadow-xs hover:shadow-xl hover:border-[#00D4B2]/50 transition-all duration-300 flex flex-col justify-between group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00D4B2] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E6FFFA] text-[#00A389] flex items-center justify-center border border-[#B2F5EA] group-hover:scale-105 transition-transform shadow-2xs">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <Badge variant="cyan" size="sm">For Individuals & Allocators</Badge>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-[#0A2540] font-sans group-hover:text-[#00A389] transition-colors">
                  Looking to Invest Capital?
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                  Join our investor network. Whether you are an angel investor, working professional, or family office, specify your sector preferences to participate in upcoming rounds.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs sm:text-[13px] text-[#0A2540]">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#F1F5F9]">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                  <span>Participate in small-scale to large growth rounds</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#F1F5F9]">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                  <span>Full visibility on itemized use of funds before deal calls</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#F1F5F9]">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                  <span>Direct founder engagement & direct contract signing</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#F1F4F8]">
              <Button
                href="/capital/join"
                variant="secondary"
                size="md"
                className="w-full justify-center font-semibold shadow-xs py-3 text-sm"
                rightIcon={<UserCheck className="h-4 w-4 text-[#00A389]" />}
              >
                Join Investor Network (Fill Form)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Key Principles of Capital Network */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-6">
          <div className="max-w-2xl space-y-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] font-sans">
              Key Principles of 1008 Capital Network
            </h3>
            <p className="text-xs sm:text-sm text-[#627D98]">
              How our structured syndicate model differs from traditional broker networks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-white border border-[#E6E8EB] space-y-2.5 shadow-xs hover:border-[#635BFF]/40 transition-all">
              <div className="flex items-center gap-2 text-[#0A2540] font-bold text-sm">
                <Target className="h-4 w-4 text-[#635BFF]" />
                <span>Target-Based Allocation</span>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Capital campaigns stay open until the startup reaches its declared funding target, with clear operational milestones and transparency.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E6E8EB] space-y-2.5 shadow-xs hover:border-[#00A389]/40 transition-all">
              <div className="flex items-center gap-2 text-[#0A2540] font-bold text-sm">
                <DollarSign className="h-4 w-4 text-[#059669]" />
                <span>Explicit Use of Funds</span>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Companies must clearly define how capital is allocated (machinery, working capital, inventory) prior to holding combined investor deal meetings.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E6E8EB] space-y-2.5 shadow-xs hover:border-[#FF7043]/40 transition-all">
              <div className="flex items-center gap-2 text-[#0A2540] font-bold text-sm">
                <Handshake className="h-4 w-4 text-[#FF7043]" />
                <span>Combined Deal Meetings</span>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                When the round target is reached, all interested investors and founders meet in a single structured session to align on final valuations and terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Syndicate Opportunity: Invest Directly in 1008 Network Parent Studio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl bg-[#0A2540] p-8 sm:p-12 text-white relative overflow-hidden shadow-[0_20px_50px_rgba(10,37,64,0.25)] border border-[#1E293B]">
          {/* Architectural Box Grid Pattern with Radial Fade */}
          <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-15 pointer-events-none" />
          
          {/* Ambient Radial Mesh Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#635BFF]/30 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00D4B2]/20 rounded-full blur-[110px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Core Value Proposition & Metrics */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-[#00D4B2]/15 text-[#00D4B2] text-xs font-mono font-bold uppercase tracking-wider border border-[#00D4B2]/30 flex items-center gap-1.5 shadow-2xs">
                  <Sparkles className="h-3.5 w-3.5" />
                  Featured Syndicate Opportunity
                </span>
                <span className="text-xs text-[#94A3B8] font-mono">
                  Parent Holding Equity
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-extrabold tracking-tight text-white font-sans leading-[1.15]">
                  Invest Directly in{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#38BDF8]">
                    1008 Network Parent Studio
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
                  Back the venture studio building India&apos;s real economy enterprises. Owning equity in 1008 Network provides diversified portfolio upside across every manufacturing unit, healthcare clinic, retail brand, and tech software venture we co-build for shared equity.
                </p>
              </div>

              {/* 3 Pillar Value Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-xs flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-[#00D4B2] text-xs font-mono font-bold">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>10+ Ventures</span>
                  </div>
                  <span className="text-[11px] text-[#94A3B8] mt-1">Diversified portfolio upside</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-xs flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-[#00D4B2] text-xs font-mono font-bold">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Direct Equity</span>
                  </div>
                  <span className="text-[11px] text-[#94A3B8] mt-1">Cap-table shareholding</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-xs flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-[#00D4B2] text-xs font-mono font-bold">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>0% Fees</span>
                  </div>
                  <span className="text-[11px] text-[#94A3B8] mt-1">Zero management deductions</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Glass Action Card */}
            <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-md space-y-5 flex flex-col justify-between shadow-xl">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                  <span>Round Type</span>
                  <span className="text-white font-bold">Syndicate Equity</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                  <span>Structure</span>
                  <span className="text-[#00D4B2] font-semibold">Direct Holding Corp</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] pt-2 border-t border-white/10">
                  <span>Allocation</span>
                  <span className="text-white font-bold">By Invitation & Review</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Button
                  onClick={() => setIsStudioInvestModalOpen(true)}
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                  className="w-full justify-center font-semibold text-sm shadow-[0_4px_16px_rgba(99,91,255,0.4)] bg-[#635BFF] hover:bg-[#5851EA] border-none py-3"
                >
                  Invest in 1008 Network
                </Button>
                <div className="text-[11px] text-center font-mono text-[#64748B] pt-1">
                  Private round allocation • Direct partner review
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Capital Network Frequently Answered Questions */}
      <PillarFAQ
        items={capitalFaqs}
        badge="Direct Investment & Syndicates"
        badgeVariant="cyan"
        title="Capital Network Frequently Answered Questions"
        description="Everything you need to know about target-based rounds, check sizes, combined deal meetings, and independent due diligence."
      />

      {/* 8. Facilitator & Self-Due Diligence Disclaimer Banner */}
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
