"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import {
  Layers,
  Users,
  BookOpen,
  TrendingUp,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

export function PillarsBento() {
  return (
    <section className="py-24 bg-[#07080A] border-y border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="amber" size="sm">The Integrated Venture Engine</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            Four unified pillars. One high-conviction partner.
          </h2>
          <p className="text-muted text-base sm:text-lg">
            Whether you need hands-on execution muscle, a missing co-founder, operational playbooks, or seed capital — 1008 is engineered for venture creation in India.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          {/* Pillar 1: BUILD WITH 1008 (Large Feature 7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-surface-100/70 border border-white/[0.08] p-6 sm:p-8 relative group hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[90px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Layers className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                    PILLAR 01 // VENTURE STUDIO
                  </span>
                </div>
                <Badge variant="amber" size="sm">180-Day Handover</Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Build With 1008 (Venture Studio)
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                Hands-on execution partner for experienced corporate leaders. We design, build, and deploy the entire product architecture, systems, and initial commercial traction alongside you.
              </p>

              {/* Differentiators list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-muted-foreground font-sans">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Equity Upside:</strong> No hourly consulting invoices. True skin in the game.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">180-Day Exit:</strong> Engineered for founder independence, not endless retainers.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Full Tech & Design Stack:</strong> Production code, UI/UX, and cloud infrastructure.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Strict NDA:</strong> Test & validate while transitioning from corporate roles.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-muted">Cohort-based selection</span>
              <Button href="/studio" variant="primary" size="sm" rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}>
                Explore Studio Model
              </Button>
            </div>
          </div>

          {/* Pillar 2: 1008 NETWORK (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-surface-100/70 border border-white/[0.08] p-6 sm:p-8 relative group hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-500/10 blur-[80px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Users className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    PILLAR 02 // TALENT HUB
                  </span>
                </div>
                <Badge variant="cyan" size="sm">60-Day Active Lifecycle</Badge>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                1008 Partner Network
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Have the idea, missing the person? We match domain founders with vetted Technical CTOs, GTM co-founders, and operational leads offering meaningful equity.
              </p>

              <div className="p-3.5 rounded-xl bg-surface-200/60 border border-white/[0.06] space-y-2 mb-6 text-xs">
                <div className="flex items-center justify-between text-muted text-[11px] font-mono">
                  <span>CURATION STANDARD</span>
                  <span className="text-cyan-400 font-semibold">NO DEAD LISTINGS</span>
                </div>
                <p className="text-muted font-sans">
                  Listings auto-expire in 60 days to keep the talent pipeline ultra-high signal and responsive.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <Link href="/network/post" className="text-xs font-mono text-muted hover:text-white transition-colors">
                + Post Opportunity
              </Link>
              <Button href="/network" variant="secondary" size="sm" rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}>
                Browse Network
              </Button>
            </div>
          </div>

          {/* Pillar 3: KNOWLEDGE HUB (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-surface-100/70 border border-white/[0.08] p-6 sm:p-8 relative group hover:border-white/[0.2] transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-white/[0.06] text-white border border-white/[0.1]">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono text-muted uppercase tracking-wider font-semibold">
                    PILLAR 03 // RESOURCES
                  </span>
                </div>
                <Badge variant="slate" size="sm">Actionable Playbooks</Badge>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                1008 Knowledge Hub
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Zero fluff. Curated operational playbooks, legal & ESOP frameworks, book summaries (Andy Grove, Ben Horowitz), masterclasses, and India-specific venture tactics.
              </p>

              <div className="space-y-2 mb-6">
                <div className="text-xs text-foreground p-2 rounded bg-surface-200/50 border border-white/[0.04] flex items-center justify-between">
                  <span>180-Day Corporate-to-Venture Transition</span>
                  <span className="text-amber-400 font-mono text-[10px]">14 min</span>
                </div>
                <div className="text-xs text-foreground p-2 rounded bg-surface-200/50 border border-white/[0.04] flex items-center justify-between">
                  <span>ESOP Structuring & Vesting under Indian Law</span>
                  <span className="text-amber-400 font-mono text-[10px]">11 min</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-muted">Free & open access</span>
              <Button href="/knowledge" variant="outline" size="sm" rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}>
                Read Playbooks
              </Button>
            </div>
          </div>

          {/* Pillar 4: 1008 CAPITAL (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-surface-100/70 border border-white/[0.08] p-6 sm:p-8 relative group hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[90px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                    PILLAR 04 // SEED SYNDICATE
                  </span>
                </div>
                <Badge variant="emerald" size="sm">Pre-Screened Deals</Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                1008 Capital (Deal Board)
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                Curated seed-stage startup deal cards for vetted 1008-built and network ventures. Back seasoned Indian operators with validated unit economics, audited codebases, and institutional governance.
              </p>

              <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-surface-200/60 border border-white/[0.06] mb-6 text-center font-mono">
                <div>
                  <div className="text-[10px] text-muted">AVG STAGE</div>
                  <div className="text-sm text-white font-semibold">Pre-Seed / Seed</div>
                </div>
                <div>
                  <div className="text-[10px] text-muted">FOUNDER PROFILE</div>
                  <div className="text-sm text-amber-400 font-semibold">12+ Yrs Domain</div>
                </div>
                <div>
                  <div className="text-[10px] text-muted">COMMITTED AVG</div>
                  <div className="text-sm text-emerald-400 font-semibold">75%+ Allocation</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-muted">For accredited angels & CXOs</span>
              <Button href="/capital" variant="secondary" size="sm" rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}>
                View Deal Board
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
