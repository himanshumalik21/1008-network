"use client";

import React from "react";
import Link from "next/link";
import {
  Briefcase,
  Users,
  ArrowRight,
  Sparkles,
  MapPin,
  Flame,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  Building2,
} from "lucide-react";
import { initialOpportunities } from "@/data/opportunities";

export function StartupJobsAndTalentSection() {
  // Grab top 4 featured or recent opportunities for live preview
  const featuredJobs = initialOpportunities.slice(0, 4);

  return (
    <section id="startup-jobs-matching" className="relative py-16 sm:py-24 bg-gradient-to-b from-[#F6F9FC] via-[#FFFFFF] to-[#F6F9FC] border-y border-[#E6E8EB] overflow-hidden scroll-mt-12">
      {/* Decorative background grid and ambient glow */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-40 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#635BFF]/10 via-[#00D4B2]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#635BFF]/10 border border-[#635BFF]/20 text-[#635BFF] text-xs font-mono font-bold tracking-wide uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            <span>1008 Talent Collective & Co-Founder Exchange</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A2540] leading-tight">
            High-Impact Startup Roles &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              Co-Founder Matching
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#425466] leading-relaxed">
            Transparent compensation, meaningful equity upside, and zero recruitment agency middlemen. Whether you are stepping into a founding team or hiring core operators.
          </p>
        </div>

        {/* Dual Primary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Job Seekers & Founding Operators (7 Cols on desktop) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-[#635BFF]/20 shadow-[0_12px_32px_rgba(99,91,255,0.08)] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#635BFF]/40 transition-all">
            {/* Top accent badge */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#635BFF] bg-[#635BFF]/10 px-3 py-1 rounded-md">
                <Briefcase className="h-3.5 w-3.5" />
                For Builders & Operators
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#008774] bg-[#00D4B2]/10 px-2.5 py-1 rounded-md">
                <Flame className="h-3.5 w-3.5 text-[#00D4B2]" />
                {initialOpportunities.length} Active Openings
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2540] tracking-tight mb-3">
                Startup Founding Roles, Leadership & Equity
              </h3>
              <p className="text-sm sm:text-base text-[#425466] mb-6 leading-relaxed">
                Join verified early-stage ventures in Gurgaon, Bengaluru, Mumbai, and Delhi NCR. Every listing comes with disclosed cash brackets, equity grants, and direct founder interview loops.
              </p>

              {/* Live Roles Preview Ticker */}
              <div className="space-y-2.5 mb-8">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#627D98] flex items-center justify-between">
                  <span>Recently Added Verified Openings</span>
                  <span className="text-[#635BFF] font-medium">Updated Weekly</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {featuredJobs.map((job) => (
                    <Link
                      key={job.id}
                      href={`/network/${job.id}`}
                      className="p-3 rounded-xl border border-[#E6E8EB] bg-[#F8FAFC] hover:bg-[#F0F4FF] hover:border-[#635BFF]/30 transition-all flex flex-col justify-between group/role"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[11px] text-[#627D98] font-mono">
                          <span className="font-semibold text-[#0A2540] flex items-center gap-1 truncate max-w-[120px]">
                            <Building2 className="h-3 w-3 text-[#635BFF]" />
                            {job.companyName || "Venture"}
                          </span>
                          <span className="flex items-center gap-0.5 shrink-0">
                            <MapPin className="h-3 w-3 text-[#008774]" />
                            {job.location}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-[#0A2540] group-hover/role:text-[#635BFF] transition-colors line-clamp-1">
                          {job.title}
                        </h4>
                      </div>

                      <div className="pt-2 mt-2 border-t border-[#E6E8EB]/60 flex items-center justify-between text-[11px]">
                        <span className="font-mono font-semibold text-[#008774]">
                          {job.stipendOrSalary?.split("•")[0]}
                        </span>
                        <span className="text-[#635BFF] font-medium text-[10px] bg-[#635BFF]/10 px-1.5 py-0.5 rounded">
                          {job.equityRange?.includes("ESOP") ? "ESOPs" : "Equity"}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Value points */}
              <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] text-center text-xs font-mono text-[#425466] mb-6">
                <div>
                  <span className="block font-bold text-[#0A2540]">Zero Fee</span>
                  <span className="text-[10px] text-[#627D98]">Free for talent</span>
                </div>
                <div className="border-x border-[#E6E8EB]">
                  <span className="block font-bold text-[#0A2540]">Direct CEO</span>
                  <span className="text-[10px] text-[#627D98]">No HR filters</span>
                </div>
                <div>
                  <span className="block font-bold text-[#0A2540]">100% Equity</span>
                  <span className="text-[10px] text-[#627D98]">Disclosed terms</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <Link
                href="/network/startup-jobs-india"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#635BFF] hover:bg-[#5249e0] text-white font-bold text-sm shadow-[0_4px_16px_rgba(99,91,255,0.25)] transition-all hover:scale-[1.01]"
              >
                <span>Browse All {initialOpportunities.length}+ Startup Jobs</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/knowledge/how-to-find-a-cofounder-and-join-early-startup-india"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-white border border-[#E6E8EB] hover:bg-[#F8FAFC] text-[#425466] hover:text-[#0A2540] text-xs font-semibold transition-colors"
              >
                <span>Read Equity Guide</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Founders & Venture Builders (5 Cols on desktop) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0A2540] to-[#071B2F] text-white rounded-2xl border border-[#1E3A5F] shadow-[0_12px_32px_rgba(10,37,64,0.15)] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#00D4B2]/40 transition-all">
            {/* Top accent badge */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#00D4B2] bg-[#00D4B2]/10 px-3 py-1 rounded-md border border-[#00D4B2]/20">
                <Users className="h-3.5 w-3.5" />
                For Founders & Startups
              </span>
              <span className="text-xs font-mono text-[#8898AA]">
                Direct Network
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 text-white">
                Find a Technical Co-Founder or Lead Operator
              </h3>
              <p className="text-sm sm:text-base text-[#C4D1DB] mb-6 leading-relaxed">
                Need a Technical CTO, GTM Co-Founder, or Head of Plant Operations? Tap into our pre-vetted collective of senior engineers and domain operators.
              </p>

              {/* Requirement Checklist */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E2E8F0]">
                  <CheckCircle2 className="h-4 w-4 text-[#00D4B2] shrink-0 mt-0.5" />
                  <span>
                    <strong>Technical Co-Founders:</strong> Full-stack, AI/ML engineering, and hardware IoT leads ready to build MVPs.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E2E8F0]">
                  <CheckCircle2 className="h-4 w-4 text-[#00D4B2] shrink-0 mt-0.5" />
                  <span>
                    <strong>Commercial & Sales Leaders:</strong> Enterprise B2B SaaS, institutional tender specialists, and D2C growth architects.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E2E8F0]">
                  <CheckCircle2 className="h-4 w-4 text-[#00D4B2] shrink-0 mt-0.5" />
                  <span>
                    <strong>Standardized Vesting:</strong> Milestone equity frameworks and 4-stage trial models to eliminate founder disputes.
                  </span>
                </div>
              </div>

              {/* Confidence Callout */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#A0AEC0] space-y-1 mb-6">
                <div className="flex items-center gap-1.5 text-[#00D4B2] font-semibold font-mono text-[11px]">
                  <ShieldCheck className="h-3.5 w-3.5" /> Zero Placement Markup
                </div>
                <p className="text-[11px] leading-relaxed">
                  We do not charge 20% headhunter commissions. 1008 connects aligned builders directly on sweat-equity and milestone terms.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <Link
                href="/network/find-a-co-founder-india"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#00D4B2] hover:bg-[#00BF9F] text-[#0A2540] font-bold text-sm shadow-[0_4px_16px_rgba(0,212,178,0.25)] transition-all hover:scale-[1.01]"
              >
                <span>Find a Co-Founder / Post Role</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/network/post"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-colors"
              >
                <span>Quick Post</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
