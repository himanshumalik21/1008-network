"use client";

import React from "react";
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
    <div className="pt-20 sm:pt-24 pb-20 bg-[#FDFDFE] min-h-screen font-sans">
      {/* ============================================================ */}
      {/* 1. HERO & 2x2 TALENT MATCHING MATRIX (1008 Brand Colors) */}
      {/* ============================================================ */}
      <HowWeWorkSection />

      {/* ============================================================ */}
      {/* 2. DUAL ACTION PORTALS (Business Owners & Individual Talent) */}
      {/* ============================================================ */}
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F6F9FC] border-y border-[#E6E8EB]">
        {/* Subtle Micro-Dot Canvas */}
        <div
          className="absolute inset-0 pointer-events-none opacity-45"
          style={{
            backgroundImage: "radial-gradient(#CBD5E1 1.6px, transparent 1.6px)",
            backgroundSize: "26px 26px",
          }}
          aria-hidden="true"
        />

        {/* Ambient Brand Atmospheric Radiance */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#635BFF]/08 blur-[110px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#00D4B2]/08 blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Portal 1: For Business Owners / Founders */}
            <div className="p-8 sm:p-9 rounded-3xl bg-white border border-[#E6E8EB] relative overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#635BFF]/50 hover:shadow-md transition-all space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F0FF] text-[#635BFF] flex items-center justify-center border border-[#E0E0FF]">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <Badge variant="indigo" size="sm">For Business Owners</Badge>
                  <h3 className="text-2xl font-extrabold text-[#0A2540]">
                    Post What You Are Building
                  </h3>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                    Have the business vision but need a key operator or technical co-founder? Reach out to 1008 Network to post your role requirement.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 text-xs sm:text-[13px] text-[#425466]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                    <span>Specify the role: Technical CTO, Ops Head, GTM Co-Founder, etc.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                    <span>1008 algorithm scans the talent pool for aligned candidates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                    <span>Receive candidate profiles directly to review & consider</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                    <span>Connect directly and agree on your personal terms</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F1F4F8]">
                <Link
                  href="/network/post"
                  className="w-full py-3.5 px-6 rounded-full bg-[#635BFF] hover:bg-[#5851EA] text-white font-semibold text-sm shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <span>Post Your Requirement</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Portal 2: For Individuals / Operators / Leaders */}
            <div className="p-8 sm:p-9 rounded-3xl bg-white border border-[#E6E8EB] relative overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#00A389]/50 hover:shadow-md transition-all space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E6FFFA] text-[#00A389] flex items-center justify-center border border-[#B2F5EA]">
                  <Users className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <Badge variant="cyan" size="sm">For Individuals & Operators</Badge>
                  <h3 className="text-2xl font-extrabold text-[#0A2540]">
                    Join the 1008 Talent Pool
                  </h3>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                    Join our curated pool of operators, software leaders, and specialists. Get discovered when business owners need leaders with your exact background.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 text-xs sm:text-[13px] text-[#425466]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                    <span>Share your LinkedIn, past track record, and core expertise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                    <span>Matched automatically when relevant business roles are posted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                    <span>Your profile is presented to the business owner for consideration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                    <span>Connect directly with the business rep to discuss terms</span>
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
      {/* 6. FAQS */}
      {/* ============================================================ */}
      <PillarFAQ
        items={networkFaqs}
        badge="Co-Founders & Talent"
        badgeVariant="cyan"
        title="Frequently Asked Questions"
        description="Everything you need to know about posting requirements, the talent pool matching algorithm, and agreeing on personal terms."
      />

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
