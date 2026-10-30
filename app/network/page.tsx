"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { PillarFAQ } from "@/components/ui/PillarFAQ";
import { networkFaqs } from "@/data/faqs";
import { PostRequirementModal } from "@/components/network/PostRequirementModal";
import { JoinTalentPoolModal } from "@/components/network/JoinTalentPoolModal";
import { HowWeWorkSection } from "@/components/network/HowWeWorkSection";
import {
  Users,
  Clock,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  PlusCircle,
  Cpu,
  TrendingUp,
  UserCheck,
  FileCheck2,
  AlertTriangle,
  Layers,
  Factory,
  Search,
  Send,
  Handshake,
} from "lucide-react";

export default function NetworkPage() {
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  const matchedRoles = [
    {
      title: "Technical Co-Founder (CTO)",
      tag: "Technology & AI",
      badgeColor: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      icon: Cpu,
      description: "Senior engineering leaders, architects, and technical builders to design systems, build MVPs, and scale core technology.",
    },
    {
      title: "Operations & Supply Chain Lead",
      tag: "Operations & Execution",
      badgeColor: "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]",
      icon: Layers,
      description: "Hands-on COOs and operating specialists managing procurement, logistics, vendor networks, and daily business delivery.",
    },
    {
      title: "Go-to-Market & Sales Partner",
      tag: "Revenue & Growth",
      badgeColor: "bg-[#FFF3EE] text-[#FF7043] border-[#FFE2D6]",
      icon: TrendingUp,
      description: "Enterprise sales leaders and commercial directors with established industry relationships, distribution channels, and B2B pipelines.",
    },
    {
      title: "Manufacturing & Factory Setup Head",
      tag: "Industrial & Plants",
      badgeColor: "bg-[#F8FAFC] text-[#0A2540] border-[#CBD5E1]",
      icon: Factory,
      description: "Industrial veterans experienced in machinery procurement, factory licensing, site execution, and quality control.",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FDFDFE] min-h-screen font-sans">
      
      {/* ============================================================ */}
      {/* 1. HERO HEADER */}
      {/* ============================================================ */}
      <section className="relative py-14 sm:py-20 overflow-hidden border-b border-[#E6E8EB] bg-[#F6F9FC]">
        {/* Ambient Grid Lines & Soft Radiant Glow */}
        <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-50 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-gradient-to-r from-[#635BFF]/12 via-[#00D4B2]/08 to-[#4F46E5]/06 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center">
            <Badge variant="indigo" size="md" pulse>
              1008 Community • Co-Founders & Talent
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans leading-tight">
            Have the business vision.{" "}
            <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              Find talent, co-founders, or join a business.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#425466] leading-relaxed max-w-3xl mx-auto font-normal">
            A business owner can reach out to 1008 Network to post what they are building and what role they need to fill. Individuals can join our curated talent pool. Our algorithm matches requirements and introduces the parties directly.
          </p>

          {/* Primary Action Buttons (Open Modals or Direct Forms) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => setPostModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#635BFF] hover:bg-[#5851EA] text-white font-semibold text-sm shadow-[0_4px_14px_rgba(99,91,255,0.28)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <PlusCircle className="h-4 w-4" />
              <span>Post a Requirement (For Business Owners)</span>
            </button>
            <button
              onClick={() => setJoinModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-[#F6F9FC] text-[#0A2540] border border-[#CBD5E1] font-semibold text-sm shadow-xs transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <UserCheck className="h-4 w-4 text-[#00A389]" />
              <span>Join Talent Pool (For Individuals)</span>
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. HOW IT WORKS / HOW WE WORK (Modern Lively Section) */}
      {/* ============================================================ */}
      <HowWeWorkSection
        onOpenPostModal={() => setPostModalOpen(true)}
        onOpenJoinModal={() => setJoinModalOpen(true)}
      />

      {/* ============================================================ */}
      {/* 3. DUAL ACTION PORTALS (Business Owners & Individual Talent) */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Portal 1: For Business Owners / Founders */}
          <div className="p-8 sm:p-9 rounded-3xl bg-white border border-[#E6E8EB] relative overflow-hidden shadow-xs flex flex-col justify-between hover:border-[#635BFF]/50 transition-all space-y-6">
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

            <div className="pt-4 border-t border-[#F1F4F8] flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => setPostModalOpen(true)}
                className="w-full sm:flex-1 py-3 px-5 rounded-full bg-[#635BFF] hover:bg-[#5851EA] text-white font-semibold text-xs sm:text-sm shadow-xs transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Post Your Requirement</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                href="/network/post"
                className="text-xs text-[#627D98] hover:text-[#635BFF] font-medium transition-colors"
              >
                Or open full page form →
              </Link>
            </div>
          </div>

          {/* Portal 2: For Individuals / Operators / Leaders */}
          <div className="p-8 sm:p-9 rounded-3xl bg-white border border-[#E6E8EB] relative overflow-hidden shadow-xs flex flex-col justify-between hover:border-[#00A389]/50 transition-all space-y-6">
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

            <div className="pt-4 border-t border-[#F1F4F8] flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => setJoinModalOpen(true)}
                className="w-full sm:flex-1 py-3 px-5 rounded-full bg-[#00A389] hover:bg-[#008F79] text-white font-semibold text-xs sm:text-sm shadow-xs transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join the Talent Pool</span>
                <UserCheck className="h-4 w-4" />
              </button>
              <Link
                href="/network/join"
                className="text-xs text-[#627D98] hover:text-[#00A389] font-medium transition-colors"
              >
                Or open full page form →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. ROLES MATCHED BY 1008 ALGORITHM */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <Badge variant="indigo" size="sm">Talent Archetypes</Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
            Roles We Match For Businesses
          </h2>
          <p className="text-xs sm:text-sm text-[#425466]">
            Whether you need a full-time co-founder or an operational lead, our talent pool covers critical execution pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {matchedRoles.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                className="p-5.5 rounded-2xl bg-white border border-[#E6E8EB] space-y-3 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[#F6F9FC] flex items-center justify-center text-[#0A2540] border border-[#E2E8F0]">
                    <Icon className="h-5 w-5 text-[#635BFF]" />
                  </div>
                  <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${role.badgeColor}`}>
                    {role.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0A2540]">
                  {role.title}
                </h3>
                <p className="text-xs text-[#425466] leading-relaxed">
                  {role.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. KEY PRINCIPLES OF 1008 NETWORK */}
      {/* ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-6">
          <div className="max-w-2xl space-y-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
              Key Principles of 1008 Talent Matching
            </h3>
            <p className="text-xs sm:text-sm text-[#627D98]">
              Why business owners and talented operators choose 1008 Network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-[#E6E8EB] space-y-2">
              <div className="flex items-center gap-2 text-[#0A2540] font-bold text-sm">
                <Clock className="h-4 w-4 text-[#635BFF]" />
                <span>Responsive & Active</span>
              </div>
              <p className="text-xs text-[#425466] leading-relaxed">
                Requirements are actively processed by our algorithm so business owners receive profiles quickly, without waiting weeks for sluggish headhunters.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E6E8EB] space-y-2">
              <div className="flex items-center gap-2 text-[#0A2540] font-bold text-sm">
                <Handshake className="h-4 w-4 text-[#00A389]" />
                <span>Direct Personal Terms</span>
              </div>
              <p className="text-xs text-[#425466] leading-relaxed">
                No third-party interference. You connect directly with the candidate, negotiate equity, salary, and trial periods, and execute direct agreements.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E6E8EB] space-y-2">
              <div className="flex items-center gap-2 text-[#0A2540] font-bold text-sm">
                <CheckCircle2 className="h-4 w-4 text-[#059669]" />
                <span>Zero Broker Markups</span>
              </div>
              <p className="text-xs text-[#425466] leading-relaxed">
                Both posting a requirement and joining the talent pool are free. We focus on long-term ecosystem alignment, not transactional broker commissions.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* Interactive Modals */}
      <PostRequirementModal
        isOpen={postModalOpen}
        onClose={() => setPostModalOpen(false)}
      />
      <JoinTalentPoolModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
      />
    </div>
  );
}
