"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import {
  Layers,
  Code2,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  Sparkles,
  Lock,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

export function PillarsBento() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 bg-surface-100/60 border-y border-border relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="amber" size="sm">The Venture Studio Model</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground font-sans">
            Everything you need to turn domain insight into an enterprise.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            We don&apos;t advise from the sidelines. We write production code, design the product, build standard operating procedures, and set up your initial revenue pipeline.
          </p>
        </div>

        {/* Studio Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: In-House Tech Team (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-surface-50 border border-border p-6 sm:p-8 relative group hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wider font-bold">
                    FULL-STACK EXECUTION
                  </span>
                </div>
                <Badge variant="amber" size="sm">Production-Grade</Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Full-Stack Tech & Product Architecture
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                Never waste months searching for a technical co-founder or overpaying low-quality dev agencies. 1008 provides a battle-tested engineering and design team from Day 1.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-muted-foreground font-sans">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Next.js 15 & React 19:</strong> Blazing fast web apps & APIs.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Linear-Grade UI/UX:</strong> World-class design systems.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Enterprise Security:</strong> Role-based auth, DB backups & SOC2 ready.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">100% IP Ownership:</strong> Transferred entirely to your entity.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs font-mono text-muted-foreground">Zero freelance headache</span>
              <button
                onClick={() => setModalOpen(true)}
                className="text-xs font-semibold text-amber-500 hover:underline flex items-center gap-1"
              >
                Explore Tech Stack <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Shared Equity & Upside (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-surface-50 border border-border p-6 sm:p-8 relative group hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-bold">
                    SKIN IN THE GAME
                  </span>
                </div>
                <Badge variant="emerald" size="sm">Equity Aligned</Badge>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3">
                No Consulting Invoices. True Equity Partnership.
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Consultants get paid whether your business succeeds or fails. 1008 partners for shared equity and long-term valuation upside. Our incentives are 100% aligned with yours.
              </p>

              <div className="p-4 rounded-xl bg-surface-100 border border-border space-y-2 mb-6 text-xs">
                <div className="flex items-center justify-between text-muted-foreground text-[11px] font-mono">
                  <span>FINANCIAL MODEL</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">ZERO FEES</span>
                </div>
                <p className="text-muted-foreground font-sans">
                  We invest development, design, and venture architecture for equity upside (8%–18%).
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs font-mono text-muted-foreground">Aligned from Day 1</span>
              <button
                onClick={() => setModalOpen(true)}
                className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                Review Equity Terms <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: 180-Day Handover (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-surface-50 border border-border p-6 sm:p-8 relative group hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                    <Clock className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider font-bold">
                    FOUNDER AUTONOMY
                  </span>
                </div>
                <Badge variant="cyan" size="sm">180d Standard</Badge>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3">
                Build With You. Not Forever For You.
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                A great venture studio makes founders self-sustaining, not dependent. Over 180 days, we stabilize the business, recruit your permanent core hires, and transition complete autonomy back to you.
              </p>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs font-mono text-muted-foreground">No agency lock-in</span>
              <Link href="/#blueprint" className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1">
                View Sprint Stages <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 4: Confidential Corporate Transition (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-surface-50 border border-border p-6 sm:p-8 relative group hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    <Lock className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wider font-bold">
                    CONFIDENTIALITY & NDA
                  </span>
                </div>
                <Badge variant="amber" size="sm">Mutual NDA</Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Validate Before You Resign
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                Leaving a VP or Director salary without validation is unnecessarily risky. We sign a strict mutual NDA on Day 1, helping you quantify customer willingness-to-pay before you make any public career transition.
              </p>

              <div className="p-4 rounded-xl bg-surface-100 border border-border text-xs text-muted-foreground leading-relaxed font-sans mb-6">
                <strong className="text-foreground block mb-1">De-Risked Career Transition:</strong>
                Complete 25+ discovery interviews and architectural blueprints quietly. When customer pull is proven with 3 advance LOIs, execute your full-time transition with absolute conviction.
              </div>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs font-mono text-muted-foreground">Strict confidentiality guaranteed</span>
              <Button
                onClick={() => setModalOpen(true)}
                variant="primary"
                size="sm"
                className="font-semibold"
                rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
              >
                Confidential Intake Call
              </Button>
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
