"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { PillarFAQ } from "@/components/ui/PillarFAQ";
import { networkFaqs } from "@/data/faqs";
import { HowWeWorkSection } from "@/components/network/HowWeWorkSection";
import { BusinessRequirementsCarousel } from "@/components/network/BusinessRequirementsCarousel";
import { TalentArchetypesCarousel } from "@/components/network/TalentArchetypesCarousel";
import {
  Users,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  UserCheck,
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
      {/* 2. ACTIVE BUSINESS REQUIREMENTS (CAROUSEL) */}
      {/* ============================================================ */}
      <BusinessRequirementsCarousel />

      {/* ============================================================ */}
      {/* 3. ROLES MATCHED BY 1008 ALGORITHM (TALENT ARCHETYPES CAROUSEL) */}
      {/* ============================================================ */}
      <TalentArchetypesCarousel />

      {/* ============================================================ */}
      {/* 4. DUAL ACTION PORTALS (Business Owners & Operators) */}
      {/* ============================================================ */}
      <section className="relative w-full py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Brand Atmospheric Halos */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#635BFF]/08 blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#00D4B2]/08 blur-[130px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Portal 1: For Business Owners / Founders */}
          <div className="rounded-3xl bg-white border border-[#E6E8EB] relative overflow-hidden shadow-sm hover:border-[#635BFF]/50 hover:shadow-md transition-all group p-6 sm:p-7 lg:p-8 flex flex-col justify-between h-full">
            <div className="space-y-4 sm:space-y-5 flex-1 flex flex-col">
              {/* Header: Icon & Badge */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F0F0FF] text-[#635BFF] flex items-center justify-center border border-[#E0E0FF] shrink-0">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <Badge variant="indigo" size="sm">For Business Owners</Badge>
                </div>

                <div className="space-y-1.5">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight">
                    Post Your Business Requirement
                  </h2>
                  <p className="text-xs sm:text-[13px] text-[#425466] leading-relaxed">
                    Building an operating venture or scaling an enterprise? Share the specific leadership or technical role you need to fill, and let our matching engine introduce verified talent from our network.
                  </p>
                </div>
              </div>

              {/* Graphic Showcase Frame */}
              <div className="relative w-full h-44 sm:h-48 rounded-2xl bg-gradient-to-br from-[#F7F8FF] via-[#FAFAFF] to-[#F0FDFB] border border-[#E6E8EB] flex items-center justify-center p-4 my-1 overflow-hidden group-hover:border-[#635BFF]/30 transition-all">
                <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />
                <div className="absolute w-36 h-36 bg-[#635BFF]/10 blur-xl rounded-full pointer-events-none" />
                <Image
                  src="/images/network/network-brand.png"
                  alt="Post Your Business Requirement"
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
                  <span>Specify role mandates: Technical Co-Founder (CTO), Head of Operations, Commercial Lead, or Fractional CXO</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span>1008 algorithm matches against verified operator profiles with proven domain depth</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span>Receive curated candidate profiles directly to review without recruiter spam or public job boards</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span>Connect directly with candidates to evaluate mutual chemistry and negotiate personal terms</span>
                </div>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-6 mt-auto">
              <Link
                href="/network/post"
                className="w-full py-3 px-6 rounded-full bg-[#635BFF] hover:bg-[#5851EA] text-white font-semibold text-xs sm:text-sm shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>Post Business Requirement</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Portal 2: For Operators & Co-Founders */}
          <div className="rounded-3xl bg-white border border-[#E6E8EB] relative overflow-hidden shadow-sm hover:border-[#00A389]/50 hover:shadow-md transition-all group p-6 sm:p-7 lg:p-8 flex flex-col justify-between h-full">
            <div className="space-y-4 sm:space-y-5 flex-1 flex flex-col">
              {/* Header: Icon & Badge */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E6FFFA] text-[#00A389] flex items-center justify-center border border-[#B2F5EA] shrink-0">
                    <Users className="h-4 w-4" />
                  </div>
                  <Badge variant="cyan" size="sm">For Operators & Co-Founders</Badge>
                </div>

                <div className="space-y-1.5">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight">
                    Join the 1008 Talent Pool
                  </h2>
                  <p className="text-xs sm:text-[13px] text-[#425466] leading-relaxed">
                    Are you a senior engineering leader, proven operator, or commercial director? Join our private talent pool to be introduced directly to business owners building high-conviction ventures.
                  </p>
                </div>
              </div>

              {/* Graphic Showcase Frame */}
              <div className="relative w-full h-44 sm:h-48 rounded-2xl bg-gradient-to-br from-[#F0FDFB] via-[#F5FCFB] to-[#F7F8FF] border border-[#E6E8EB] flex items-center justify-center p-4 my-1 overflow-hidden group-hover:border-[#00A389]/30 transition-all">
                <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />
                <div className="absolute w-36 h-36 bg-[#00D4B2]/12 blur-xl rounded-full pointer-events-none" />
                <Image
                  src="/images/network/growth-brand.png"
                  alt="Join the 1008 Talent Pool"
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
                  <span>Submit your verified pedigree, execution track record, and operational domain expertise</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0 mt-0.5" />
                  <span>Algorithmic matchmaking when business owners post mandates aligned with your background</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0 mt-0.5" />
                  <span>Your profile is presented directly to business owners and decision-makers for consideration</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0 mt-0.5" />
                  <span>Direct introductions with founders to structure equity, milestone vesting, or leadership terms</span>
                </div>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-6 mt-auto">
              <Link
                href="/network/join"
                className="w-full py-3 px-6 rounded-full bg-[#00A389] hover:bg-[#008F79] text-white font-semibold text-xs sm:text-sm shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>Join the Talent Pool</span>
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
          items={networkFaqs}
          badge="Co-Founders & Talent"
          badgeVariant="cyan"
          title="Frequently Asked Questions"
          description="Everything business owners and operators need to know about posting requirements, the talent pool matching algorithm, and agreeing on personal terms."
        />
      </div>

      {/* ============================================================ */}
      {/* 6. TRUST & MATCHING FACILITATOR NOTICE */}
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
                <span>Matching Facilitator Notice</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#0A2540]">
                Direct Founder-to-Operator Governance & Transparency
              </h3>
              <p className="text-xs sm:text-sm text-[#425466] leading-relaxed max-w-2xl">
                1008 Network operates as an algorithmic matching and discovery facilitator connecting verified business owners with senior technical and operational leaders. All equity splits, vesting schedules, and personal contracts are negotiated and executed directly between the parties.
              </p>
            </div>
          </div>

          <div className="shrink-0 relative z-10 w-full md:w-auto">
            <Link
              href="/terms"
              className="w-full md:w-auto py-2.5 px-5 rounded-full bg-white hover:bg-[#F8FAFC] border border-[#CBD5E1] text-[#0A2540] hover:text-[#635BFF] hover:border-[#635BFF] text-xs font-semibold transition-all shadow-2xs flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <span>Review Terms & Disclaimers</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
