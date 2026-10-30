"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { PillarFAQ } from "@/components/ui/PillarFAQ";
import { capitalFaqs } from "@/data/faqs";
import { HowCapitalWorksSection } from "@/components/capital/HowCapitalWorksSection";
import { ActiveVenturesCarousel } from "@/components/capital/ActiveVenturesCarousel";
import { InvestorThesesCarousel } from "@/components/capital/InvestorThesesCarousel";
import { CapitalBackgroundCanvas } from "@/components/capital/CapitalBackgroundCanvas";
import {
  Rocket,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  UserCheck,
} from "lucide-react";

export default function CapitalPage() {
  return (
    <div className="relative pt-20 sm:pt-24 pb-20 bg-white min-h-screen font-sans overflow-hidden">
      {/* Topographical & Isometric Vector Background Canvas (Slide 1 & Slide 14 Inspired) */}
      <CapitalBackgroundCanvas />

      {/* ============================================================ */}
      {/* 1. HERO & 4-STEP CAPITAL MATCHING MATRIX */}
      {/* ============================================================ */}
      <HowCapitalWorksSection />

      {/* ============================================================ */}
      {/* 2. ACTIVE CAPITAL MANDATES (CAROUSEL) */}
      {/* ============================================================ */}
      <ActiveVenturesCarousel />

      {/* ============================================================ */}
      {/* 3. CURATED ALLOCATORS & INVESTMENT THESES (CAROUSEL) */}
      {/* ============================================================ */}
      <InvestorThesesCarousel />

      {/* ============================================================ */}
      {/* 4. DUAL ACTION PORTALS (Founders & Investors) */}
      {/* ============================================================ */}
      <section className="relative w-full py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Brand Atmospheric Halos */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#635BFF]/08 blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#00D4B2]/08 blur-[130px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Portal 1: For Business Owners / Founders */}
          <div
            id="for-founders"
            className="rounded-3xl bg-white border border-[#E6E8EB] relative overflow-hidden shadow-sm hover:border-[#635BFF]/50 hover:shadow-md transition-all group p-6 sm:p-7 lg:p-8 flex flex-col justify-between h-full"
          >
            <div className="space-y-4 sm:space-y-5 flex-1 flex flex-col">
              {/* Header: Icon & Badge */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F0F0FF] text-[#635BFF] flex items-center justify-center border border-[#E0E0FF] shrink-0">
                    <Rocket className="h-4 w-4" />
                  </div>
                  <Badge variant="indigo" size="sm">For Business Owners</Badge>
                </div>

                <div className="space-y-1.5">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight">
                    Raise Capital for Your Venture
                  </h2>
                  <p className="text-xs sm:text-[13px] text-[#425466] leading-relaxed">
                    Building an operating venture or scaling an enterprise? Submit your business model, current traction, and use of funds to connect directly with aligned angel investors and family offices.
                  </p>
                </div>
              </div>

              {/* Graphic Showcase Frame */}
              <div className="relative w-full h-44 sm:h-48 rounded-2xl bg-gradient-to-br from-[#F7F8FF] via-[#FAFAFF] to-[#F0FDFB] border border-[#E6E8EB] flex items-center justify-center p-4 my-1 overflow-hidden group-hover:border-[#635BFF]/30 transition-all">
                <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />
                <div className="absolute w-36 h-36 bg-[#635BFF]/10 blur-xl rounded-full pointer-events-none" />
                <Image
                  src="/images/network/network-brand.png"
                  alt="Raise Capital for Your Venture"
                  width={240}
                  height={240}
                  className="relative z-10 w-auto h-full max-h-36 sm:max-h-40 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Verified Checklist */}
              <div className="space-y-2.5 pt-1 text-xs sm:text-[12.5px] text-[#425466] flex-1">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span>Specify fundraising mandates: Seed, Pre-Series A, Capex Expansion, or Working Capital</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span>1008 evaluates venture viability and matches against angels with domain interest</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span>Receive curated allocator introductions directly without public pitch blasts</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span>Participate in structured deal sessions to discuss metrics and negotiate commercial terms</span>
                </div>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-6 mt-auto">
              <Link
                href="/capital/post"
                className="w-full py-3 px-6 rounded-full bg-[#635BFF] hover:bg-[#5851EA] text-white font-semibold text-xs sm:text-sm shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>Submit Your Venture</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Portal 2: For Investors & Allocators */}
          <div
            id="for-investors"
            className="rounded-3xl bg-white border border-[#E6E8EB] relative overflow-hidden shadow-sm hover:border-[#00A389]/50 hover:shadow-md transition-all group p-6 sm:p-7 lg:p-8 flex flex-col justify-between h-full"
          >
            <div className="space-y-4 sm:space-y-5 flex-1 flex flex-col">
              {/* Header: Icon & Badge */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E6FFFA] text-[#00A389] flex items-center justify-center border border-[#B2F5EA] shrink-0">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <Badge variant="cyan" size="sm">For Angels & Family Offices</Badge>
                </div>

                <div className="space-y-1.5">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight">
                    Join the 1008 Capital Network
                  </h2>
                  <p className="text-xs sm:text-[13px] text-[#425466] leading-relaxed">
                    Looking for high-conviction operating businesses? Join our private allocator network to receive curated deal teasers with complete operational clarity and transparent unit economics.
                  </p>
                </div>
              </div>

              {/* Graphic Showcase Frame */}
              <div className="relative w-full h-44 sm:h-48 rounded-2xl bg-gradient-to-br from-[#F0FDFB] via-[#F5FCFB] to-[#F7F8FF] border border-[#E6E8EB] flex items-center justify-center p-4 my-1 overflow-hidden group-hover:border-[#00A389]/30 transition-all">
                <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />
                <div className="absolute w-36 h-36 bg-[#00D4B2]/12 blur-xl rounded-full pointer-events-none" />
                <Image
                  src="/images/network/growth-brand.png"
                  alt="Join the 1008 Capital Network"
                  width={240}
                  height={240}
                  className="relative z-10 w-auto h-full max-h-36 sm:max-h-40 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Verified Checklist */}
              <div className="space-y-2.5 pt-1 text-xs sm:text-[12.5px] text-[#425466] flex-1">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0 mt-0.5" />
                  <span>Define your sector moats, stage preferences, and check size (₹5L to ₹2Cr+)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0 mt-0.5" />
                  <span>Algorithmic discovery when operating businesses match your investment thesis</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0 mt-0.5" />
                  <span>Direct, structured deal calls with founders to evaluate unit metrics and expansion moats</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0 mt-0.5" />
                  <span>Independent legal due diligence and direct contract execution</span>
                </div>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-6 mt-auto">
              <Link
                href="/capital/join"
                className="w-full py-3 px-6 rounded-full bg-[#00A389] hover:bg-[#008F79] text-white font-semibold text-xs sm:text-sm shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>Join the Capital Network</span>
                <UserCheck className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. FAQS */}
      {/* ============================================================ */}
      <div className="relative overflow-hidden py-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-80 bg-gradient-to-r from-[#635BFF]/06 via-[#00D4B2]/06 to-transparent blur-[140px] pointer-events-none" />
        <PillarFAQ
          items={capitalFaqs}
          badge="Capital Network FAQs"
          badgeVariant="cyan"
          title="Frequently Asked Questions"
          description="Everything founders and capital partners need to know about submissions, investor criteria, deal calls, and independent due diligence."
        />
      </div>

      {/* ============================================================ */}
      {/* 6. STATUTORY NOTICE & REGULATORY FACILITATOR NOTICE */}
      {/* ============================================================ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="rounded-3xl bg-gradient-to-br from-[#F0FDFB]/70 via-white to-[#F7F8FF]/70 border border-[#CBD5E1] p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs relative overflow-hidden">
          {/* Ambient radiance */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#00D4B2]/08 blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 relative z-10">
            {/* Big Trust Shield Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#F0FDFB] via-[#E6FFFA] to-[#F7F8FF] text-[#00A389] flex items-center justify-center border-2 border-[#B2F5EA] shadow-[0_4px_16px_rgba(0,163,137,0.12)]">
              <ShieldCheck className="h-9 w-9 sm:h-11 sm:w-11 text-[#00A389]" strokeWidth={2.2} />
            </div>

            <div className="space-y-1.5 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFFBEB] text-[#92400E] border border-[#FDE68A] text-xs font-semibold">
                <ShieldCheck className="h-3.5 w-3.5 text-[#D97706]" />
                <span>Statutory Notice & Regulatory Exclusions</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0A2540]">
                Direct Discovery & Non-Broker Facilitator Governance
              </h3>
              <p className="text-xs sm:text-sm text-[#425466] leading-relaxed max-w-2xl">
                1008 Network operates strictly as a discovery and networking facilitator. 1008 is not a stock broker, investment adviser, portfolio manager, Alternative Investment Fund (AIF), mutual fund, merchant banker, custodian, or escrow provider. We do not hold investor capital, manage custodial funds, provide financial advice, or guarantee returns. All contracts and due diligence are executed directly between companies and investors.
              </p>
            </div>
          </div>

          <div className="shrink-0 relative z-10 w-full md:w-auto">
            <Link
              href="/terms#regulatory-disclaimer"
              className="w-full md:w-auto py-2.5 px-5 rounded-full bg-white hover:bg-[#F8FAFC] border border-[#CBD5E1] text-[#0A2540] hover:text-[#635BFF] hover:border-[#635BFF] text-xs font-semibold transition-all shadow-2xs flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <span>Review Disclaimers</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
