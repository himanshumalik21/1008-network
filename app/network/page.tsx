"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { PillarFAQ } from "@/components/ui/PillarFAQ";
import { networkFaqs } from "@/data/faqs";
import { HowWeWorkSection } from "@/components/network/HowWeWorkSection";
import { BusinessRequirementsCarousel } from "@/components/network/BusinessRequirementsCarousel";
import { TalentArchetypesCarousel } from "@/components/network/TalentArchetypesCarousel";
import {
  Users,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  PlusCircle,
  UserCheck,
  AlertTriangle,
} from "lucide-react";

export default function NetworkPage() {

  return (
    <div className="relative pt-20 sm:pt-24 pb-20 bg-white min-h-screen font-sans overflow-hidden">
      {/* Continuous Streamlined Micro-Dot Canvas across entire page */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: "radial-gradient(#CBD5E1 1.8px, transparent 1.8px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* ============================================================ */}
      {/* 1. HERO & 2x2 TALENT MATCHING MATRIX (1008 Brand Colors) */}
      {/* ============================================================ */}
      <HowWeWorkSection />

      {/* ============================================================ */}
      {/* 2. DUAL ACTION PORTALS (Business Owners & Operators) */}
      {/* ============================================================ */}
      <section className="relative w-full py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Brand Atmospheric Halos */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#635BFF]/08 blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#00D4B2]/08 blur-[130px] pointer-events-none" />

        {/* Left Side Graphic: Co-Founder & Network Connections */}
        <div
          className="absolute -left-20 sm:-left-14 lg:-left-8 xl:left-2 2xl:left-12 top-1/2 -translate-y-1/2 w-64 sm:w-72 lg:w-80 xl:w-[360px] pointer-events-none select-none z-0 opacity-20 sm:opacity-30 lg:opacity-45 xl:opacity-60 transition-opacity"
          aria-hidden="true"
        >
          <Image
            src="/images/network/network-brand.png"
            alt=""
            width={400}
            height={400}
            className="w-full h-auto drop-shadow-[0_20px_40px_rgba(99,91,255,0.12)]"
          />
        </div>

        {/* Right Side Graphic: Leadership & Venture Growth */}
        <div
          className="absolute -right-20 sm:-right-14 lg:-right-8 xl:right-2 2xl:right-12 top-1/2 -translate-y-1/2 w-56 sm:w-64 lg:w-72 xl:w-[320px] pointer-events-none select-none z-0 opacity-20 sm:opacity-30 lg:opacity-45 xl:opacity-60 transition-opacity"
          aria-hidden="true"
        >
          <Image
            src="/images/network/growth-brand.png"
            alt=""
            width={340}
            height={450}
            className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,212,178,0.12)]"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Portal 1: For Business Owners / Founders */}
            <div className="p-8 sm:p-9 rounded-3xl bg-white/95 backdrop-blur-xs border border-[#E6E8EB] relative overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#635BFF]/50 hover:shadow-md transition-all space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F0FF] text-[#635BFF] flex items-center justify-center border border-[#E0E0FF]">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <Badge variant="indigo" size="sm">For Business Owners</Badge>
                  <h2 className="text-2xl font-extrabold text-[#0A2540]">
                    Post Your Business Requirement
                  </h2>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                    Building an operating venture or scaling an enterprise? Share the specific leadership or technical role you need to fill, and let our matching engine introduce verified talent from our network.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 text-xs sm:text-[13px] text-[#425466]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                    <span>Specify role mandates: Technical Co-Founder (CTO), Head of Operations, Commercial Lead, or Fractional CXO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                    <span>1008 algorithm matches against verified operator profiles with proven domain depth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                    <span>Receive curated candidate profiles directly to review without recruiter spam or public job boards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                    <span>Connect directly with candidates to evaluate mutual chemistry and negotiate personal terms</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F1F4F8]">
                <Link
                  href="/network/post"
                  className="w-full py-3.5 px-6 rounded-full bg-[#635BFF] hover:bg-[#5851EA] text-white font-semibold text-sm shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <span>Post Business Requirement</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Portal 2: For Operators & Co-Founders */}
            <div className="p-8 sm:p-9 rounded-3xl bg-white/95 backdrop-blur-xs border border-[#E6E8EB] relative overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#00A389]/50 hover:shadow-md transition-all space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E6FFFA] text-[#00A389] flex items-center justify-center border border-[#B2F5EA]">
                  <Users className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <Badge variant="cyan" size="sm">For Operators & Co-Founders</Badge>
                  <h2 className="text-2xl font-extrabold text-[#0A2540]">
                    Join the 1008 Talent Pool
                  </h2>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                    Are you a senior engineering leader, proven operator, or commercial director? Join our private talent pool to be introduced directly to business owners building high-conviction ventures.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 text-xs sm:text-[13px] text-[#425466]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                    <span>Submit your verified pedigree, execution track record, and operational domain expertise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                    <span>Algorithmic matchmaking when business owners post mandates aligned with your background</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                    <span>Your profile is presented directly to business owners and decision-makers for consideration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                    <span>Direct introductions with founders to structure equity, milestone vesting, or leadership terms</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F1F4F8]">
                <Link
                  href="/network/join"
                  className="w-full py-3.5 px-6 rounded-full bg-[#00A389] hover:bg-[#008F79] text-white font-semibold text-sm shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <span>Join the Talent Pool</span>
                  <UserCheck className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. ACTIVE BUSINESS REQUIREMENTS (CAROUSEL) */}
      {/* ============================================================ */}
      <BusinessRequirementsCarousel />

      {/* ============================================================ */}
      {/* 4. ROLES MATCHED BY 1008 ALGORITHM (TALENT ARCHETYPES CAROUSEL) */}
      {/* ============================================================ */}
      <TalentArchetypesCarousel />

      {/* ============================================================ */}
      {/* 5. FAQS */}
      {/* ============================================================ */}
      <div className="relative overflow-hidden py-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-80 bg-gradient-to-r from-[#635BFF]/06 via-[#00D4B2]/06 to-transparent blur-[140px] pointer-events-none" />

        {/* Left Side Graphic: Operator Growth */}
        <div
          className="absolute -left-20 sm:-left-14 lg:-left-6 xl:left-4 2xl:left-16 top-1/2 -translate-y-1/2 w-56 sm:w-64 lg:w-72 xl:w-[320px] pointer-events-none select-none z-0 opacity-20 sm:opacity-30 lg:opacity-45 xl:opacity-55 transition-opacity"
          aria-hidden="true"
        >
          <Image
            src="/images/network/growth-brand.png"
            alt=""
            width={340}
            height={450}
            className="w-full h-auto drop-shadow-[0_20px_40px_rgba(99,91,255,0.12)]"
          />
        </div>

        {/* Right Side Graphic: Verified Trust Shield */}
        <div
          className="absolute -right-20 sm:-right-14 lg:-right-6 xl:right-4 2xl:right-16 top-1/2 -translate-y-1/2 w-64 sm:w-72 lg:w-80 xl:w-[350px] pointer-events-none select-none z-0 opacity-20 sm:opacity-30 lg:opacity-45 xl:opacity-55 transition-opacity"
          aria-hidden="true"
        >
          <Image
            src="/images/network/trust-brand.png"
            alt=""
            width={400}
            height={440}
            className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,163,137,0.12)]"
          />
        </div>
        <PillarFAQ
          items={networkFaqs}
          badge="Co-Founders & Talent"
          badgeVariant="cyan"
          title="Frequently Asked Questions"
          description="Everything business owners and operators need to know about posting requirements, the talent pool matching algorithm, and agreeing on personal terms."
        />
      </div>

      {/* ============================================================ */}
      {/* 7. FACILITATOR NOTICE */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="p-6 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#92400E]">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-[#D97706] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold font-sans text-sm text-[#78350F]">
                Matching Facilitator Notice:
              </span>
              <p className="text-xs text-[#A16207] leading-relaxed max-w-4xl">
                1008 Network acts as an algorithmic matching and discovery facilitator connecting business owners with potential co-founders and operators. All partnership contracts, vesting agreements, and personal terms are negotiated and executed directly between the parties.
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
