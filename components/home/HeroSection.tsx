"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/brand/Badge";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { trackStudioModalOpen } from "@/lib/analytics";
import {
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  Clock,
  Briefcase,
  Code2,
  Lock,
  ChevronRight,
} from "lucide-react";

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    trackStudioModalOpen("hero_primary_cta");
    setModalOpen(true);
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-white">
      {/* 1. Architectural Box Grid Pattern with Radial Fade */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-65 pointer-events-none" />

      {/* 2. Floating Ambient Motion Gradient Meshes */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[760px] h-[520px] bg-gradient-to-tr from-[#635BFF]/12 via-[#00D4B2]/08 to-transparent blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute top-1/4 -right-24 w-[520px] h-[420px] bg-gradient-to-bl from-[#FF7043]/08 via-[#635BFF]/07 to-transparent blur-[120px] pointer-events-none animate-float-reverse" />
      <div className="absolute top-1/3 -left-28 w-[460px] h-[380px] bg-gradient-to-br from-[#00D4B2]/08 via-[#635BFF]/06 to-transparent blur-[120px] pointer-events-none animate-pulse-subtle" />

      {/* 3. Subtle Technical Dot Matrix Accent Corners */}
      <div className="absolute left-8 top-1/4 w-44 h-44 bg-dots-matrix opacity-35 mask-radial-fade pointer-events-none hidden xl:block" />
      <div className="absolute right-8 top-1/3 w-44 h-44 bg-dots-matrix opacity-35 mask-radial-fade pointer-events-none hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" size="md" pulse>
              1008 Venture Studio // Cohort Open
            </Badge>
            <span className="text-xs font-semibold text-[#627D98] hidden sm:inline-block">
              For 10–20+ Yr Indian Corporate Leaders & Domain Veterans
            </span>
          </div>

          {/* Primary Razor-Sharp Hook Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A2540] leading-[1.08] font-sans">
            You know where the industry bleeds money.{" "}
            <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              We build the tech to capture it.
            </span>
          </h1>

          {/* Core Subtitle Positioning */}
          <p className="text-base sm:text-xl text-[#425466] leading-relaxed max-w-3xl mx-auto font-normal">
            1008 is the dedicated, hands-on venture-building partner for senior Indian corporate executives, VPs, and domain veterans.
            We provide full-stack technical architecture, product design, and 0-to-1 operational systems for <span className="text-[#0A2540] font-semibold">shared equity upside—zero consulting retainers</span>.
          </p>

          {/* Dual High-Conversion CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              size="lg"
              variant="primary"
              onClick={handleOpenModal}
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto text-base px-8 font-semibold"
            >
              Apply to Build With Us
            </Button>
            <Button
              href="/#blueprint"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-base font-semibold"
            >
              Explore 180-Day Blueprint
            </Button>
          </div>

          {/* Core Proposition Proof Points */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E6E8EB] shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-[#CBD5E1] transition-colors">
              <div className="text-xs text-[#635BFF] font-bold mb-1 flex items-center gap-1.5 font-sans">
                <Shield className="h-3.5 w-3.5" /> Skin In The Game
              </div>
              <p className="text-xs text-[#627D98] leading-relaxed">Zero hourly consulting fees. Equity & upside aligned from Day 1.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E6E8EB] shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-[#CBD5E1] transition-colors">
              <div className="text-xs text-[#00A389] font-bold mb-1 flex items-center gap-1.5 font-sans">
                <Clock className="h-3.5 w-3.5" /> 180-Day Handover
              </div>
              <p className="text-xs text-[#627D98] leading-relaxed">Engineered for complete founder independence, not agency lock-in.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E6E8EB] shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-[#CBD5E1] transition-colors">
              <div className="text-xs text-[#059669] font-bold mb-1 flex items-center gap-1.5 font-sans">
                <Lock className="h-3.5 w-3.5" /> 100% Confidential NDA
              </div>
              <p className="text-xs text-[#627D98] leading-relaxed">Validate your thesis quietly before transitioning from corporate roles.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E6E8EB] shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-[#CBD5E1] transition-colors">
              <div className="text-xs text-[#0A2540] font-bold mb-1 flex items-center gap-1.5 font-sans">
                <Code2 className="h-3.5 w-3.5 text-[#635BFF]" /> Full Tech Team
              </div>
              <p className="text-xs text-[#627D98] leading-relaxed">Production Next.js code, UI/UX design, cloud infra & GTM included.</p>
            </div>
          </div>
        </div>

        {/* Live Interactive Venture Studio Sprint Preview Box */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl bg-white border border-[#E6E8EB] p-2 shadow-[0_20px_40px_-15px_rgba(10,37,64,0.1)] relative">
          <div className="relative rounded-xl bg-[#F6F9FC] p-5 sm:p-7 overflow-hidden border border-[#E6E8EB]/60">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E6E8EB] pb-4 mb-5 text-xs">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-2 text-[#0A2540] font-bold font-sans">1008 Studio Execution Engine</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="indigo" size="sm" pulse>Active Cohort Sprints</Badge>
                <span className="text-[#627D98] text-[11px] font-medium hidden sm:inline">180-Day Build & Handover</span>
              </div>
            </div>

            {/* 4 Interactive Sprint Phases Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-left font-sans text-xs">
              {/* Phase 1 */}
              <div className="p-4 rounded-xl bg-white border border-[#E6E8EB] space-y-2 shadow-xs">
                <div className="flex items-center justify-between text-[#627D98] text-[11px]">
                  <span className="text-[#635BFF] font-bold">PHASE 01</span>
                  <span className="font-semibold">DAYS 1–45</span>
                </div>
                <div className="text-[#0A2540] font-bold text-sm">Validation & Architecture</div>
                <p className="text-[#425466] text-xs leading-relaxed">
                  25+ customer discovery calls under NDA, financial bleed quantification, and system architecture.
                </p>
                <div className="text-[11px] text-[#059669] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Validation Gate
                </div>
              </div>

              {/* Phase 2 */}
              <div className="p-4 rounded-xl bg-white border border-[#E6E8EB] space-y-2 shadow-xs">
                <div className="flex items-center justify-between text-[#627D98] text-[11px]">
                  <span className="text-[#00A389] font-bold">PHASE 02</span>
                  <span className="font-semibold">DAYS 46–90</span>
                </div>
                <div className="text-[#0A2540] font-bold text-sm">MVP & Operational Stack</div>
                <p className="text-[#425466] text-xs leading-relaxed">
                  Full-stack Next.js deployment, world-class design system, security auth, and DB migrations.
                </p>
                <div className="text-[11px] text-[#00A389] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Build Gate
                </div>
              </div>

              {/* Phase 3 */}
              <div className="p-4 rounded-xl bg-white border border-[#E6E8EB] space-y-2 shadow-xs">
                <div className="flex items-center justify-between text-[#627D98] text-[11px]">
                  <span className="text-[#F4511E] font-bold">PHASE 03</span>
                  <span className="font-semibold">DAYS 91–135</span>
                </div>
                <div className="text-[#0A2540] font-bold text-sm">3 Paid Pilots & GTM Proof</div>
                <p className="text-[#425466] text-xs leading-relaxed">
                  Securing 3 paid enterprise pilots or binding LOIs, unit economics modeling, and initial hiring.
                </p>
                <div className="text-[11px] text-[#F4511E] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Revenue Gate
                </div>
              </div>

              {/* Phase 4 */}
              <div className="p-4 rounded-xl bg-white border border-[#E6E8EB] space-y-2 shadow-xs">
                <div className="flex items-center justify-between text-[#627D98] text-[11px]">
                  <span className="text-[#059669] font-bold">PHASE 04</span>
                  <span className="font-semibold">DAYS 136–180</span>
                </div>
                <div className="text-[#0A2540] font-bold text-sm">Handover & Independence</div>
                <p className="text-[#425466] text-xs leading-relaxed">
                  100% source code and IP assignment, 10%-12% ESOP trust, cap table structuring, and full autonomy.
                </p>
                <div className="text-[11px] text-[#059669] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Handover Gate
                </div>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-5 pt-4 border-t border-[#E6E8EB] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-[#627D98]">
                <strong className="text-[#0A2540]">Result:</strong> You walk away with a live product, paying customers, and complete independence.
              </span>
              <button
                onClick={() => setModalOpen(true)}
                className="text-[#635BFF] hover:underline font-semibold flex items-center gap-1 shrink-0"
              >
                Apply for Next Studio Cohort <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <StudioApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
