"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/brand/Badge";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
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
  ArrowUpRight,
  ChevronRight,
  Lock,
} from "lucide-react";

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden transition-colors">
      {/* Background Radial Lights & Architectural Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[620px] bg-amber-500/[0.09] dark:bg-amber-500/[0.14] blur-[150px] pointer-events-none" />
      <div className="absolute top-28 right-10 w-96 h-96 bg-cyan-500/[0.05] dark:bg-cyan-500/[0.09] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="amber" size="md" pulse>
              1008 Venture Studio // Cohort Open
            </Badge>
            <span className="text-xs font-mono text-muted-foreground hidden sm:inline-block">
              For 10–20+ Yr Indian Corporate Leaders & Domain Experts
            </span>
          </div>

          {/* Primary Razor-Sharp Hook Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08] font-sans">
            You know where the industry bleeds money.{" "}
            <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 dark:from-amber-300 dark:via-amber-400 dark:to-amber-500">
              We build the tech to capture it.
            </span>
          </h1>

          {/* Core Subtitle Positioning */}
          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal">
            1008 is the dedicated, hands-on venture-building partner for senior Indian corporate executives, VPs, and domain veterans.
            We provide full-stack technical architecture, product design, and 0-to-1 operational systems for <span className="text-foreground font-semibold">shared equity upside—zero consulting retainers</span>.
          </p>

          {/* Dual High-Conversion CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="primary"
              onClick={() => setModalOpen(true)}
              rightIcon={<ArrowUpRight className="h-4 w-4" />}
              className="w-full sm:w-auto shadow-md font-semibold text-base px-7"
            >
              Apply to Build With Us
            </Button>
            <Button
              href="/readiness"
              size="lg"
              variant="secondary"
              leftIcon={<Sparkles className="h-4 w-4 text-amber-500" />}
              className="w-full sm:w-auto text-base"
            >
              Take 2-Min Venture Readiness Quiz
            </Button>
          </div>

          {/* Core Proposition Proof Points */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto text-left">
            <div className="p-3.5 rounded-xl bg-surface-50 border border-border shadow-xs">
              <div className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold mb-1 flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5" /> Skin In The Game
              </div>
              <p className="text-xs text-muted-foreground">Zero hourly consulting fees. Equity & upside aligned from Day 1.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-50 border border-border shadow-xs">
              <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold mb-1 flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> 180-Day Handover
              </div>
              <p className="text-xs text-muted-foreground">Engineered for complete founder independence, not agency lock-in.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-50 border border-border shadow-xs">
              <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold mb-1 flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5" /> 100% Confidential NDA
              </div>
              <p className="text-xs text-muted-foreground">Validate your thesis quietly before transitioning from corporate roles.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-surface-50 border border-border shadow-xs">
              <div className="text-xs font-mono text-foreground font-bold mb-1 flex items-center gap-1.5">
                <Code2 className="h-3.5 w-3.5 text-amber-500" /> Full Tech Team
              </div>
              <p className="text-xs text-muted-foreground">Production Next.js code, UI/UX design, cloud infra & GTM included.</p>
            </div>
          </div>
        </div>

        {/* Live Interactive Venture Studio Sprint Preview Box */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl bg-surface-100 border border-border p-1 shadow-2xl backdrop-blur-xl relative group">
          <div className="relative rounded-xl bg-surface-50 p-5 sm:p-7 overflow-hidden">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 mb-5 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-foreground font-semibold">1008 Studio Execution Engine</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="amber" size="sm" pulse>Active Cohort Sprints</Badge>
                <span className="text-muted-foreground text-[11px] hidden sm:inline">180-Day Build & Handover</span>
              </div>
            </div>

            {/* 4 Interactive Sprint Phases Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-left font-sans text-xs">
              {/* Phase 1 */}
              <div className="p-4 rounded-xl bg-surface-100 border border-border space-y-2">
                <div className="flex items-center justify-between text-muted-foreground text-[11px] font-mono">
                  <span className="text-amber-500 font-bold">PHASE 01</span>
                  <span>DAYS 1–45</span>
                </div>
                <div className="text-foreground font-bold text-sm">Validation & Architecture</div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  25+ customer discovery calls under NDA, financial bleed quantification, and system architecture.
                </p>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Validation Gate
                </div>
              </div>

              {/* Phase 2 */}
              <div className="p-4 rounded-xl bg-surface-100 border border-border space-y-2">
                <div className="flex items-center justify-between text-muted-foreground text-[11px] font-mono">
                  <span className="text-cyan-500 font-bold">PHASE 02</span>
                  <span>DAYS 46–90</span>
                </div>
                <div className="text-foreground font-bold text-sm">MVP & Operational Stack</div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Full-stack Next.js 15 deployment, Linear-grade design system, security auth, and DB migrations.
                </p>
                <div className="text-[11px] text-cyan-600 dark:text-cyan-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Build Gate
                </div>
              </div>

              {/* Phase 3 */}
              <div className="p-4 rounded-xl bg-surface-100 border border-border space-y-2">
                <div className="flex items-center justify-between text-muted-foreground text-[11px] font-mono">
                  <span className="text-amber-500 font-bold">PHASE 03</span>
                  <span>DAYS 91–135</span>
                </div>
                <div className="text-foreground font-bold text-sm">3 Paid Pilots & GTM Proof</div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Securing 3 paid enterprise pilots or binding LOIs, unit economics modeling, and initial hiring.
                </p>
                <div className="text-[11px] text-amber-600 dark:text-amber-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Revenue Gate
                </div>
              </div>

              {/* Phase 4 */}
              <div className="p-4 rounded-xl bg-surface-100 border border-border space-y-2">
                <div className="flex items-center justify-between text-muted-foreground text-[11px] font-mono">
                  <span className="text-emerald-500 font-bold">PHASE 04</span>
                  <span>DAYS 136–180</span>
                </div>
                <div className="text-foreground font-bold text-sm">Handover & Independence</div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  100% source code and IP assignment, 10%-12% ESOP trust, cap table structuring, and full autonomy.
                </p>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Handover Gate
                </div>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-5 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-muted-foreground">
                <strong className="text-foreground">Result:</strong> You walk away with a live product, paying customers, and complete independence.
              </span>
              <button
                onClick={() => setModalOpen(true)}
                className="text-amber-500 hover:underline font-semibold flex items-center gap-1 shrink-0"
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
