"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/brand/Badge";
import {
  ArrowRight,
  Shield,
  Layers,
  Users,
  Terminal,
  Zap,
  CheckCircle2,
  Clock,
  Briefcase,
  ChevronRight,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background Radial Lights & Architectural Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-highlight opacity-70 pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="amber" size="md" pulse>
              Venture Studio & Partner Syndicate
            </Badge>
            <span className="text-xs font-mono text-muted hidden sm:inline-block">
              Delhi NCR • Bengaluru • Mumbai • Pune
            </span>
          </div>

          {/* Primary Punchy Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] font-sans">
            You bring the ambition.{" "}
            <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              We build the business with you.
            </span>
          </h1>

          {/* Core Subtitle Positioning */}
          <p className="text-base sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto font-normal">
            1008 is the temporary venture-building partner for capable Indian corporate leaders, domain experts, and entrepreneurs.
            We provide full-stack execution, missing co-founders, and seed readiness for <span className="text-white font-medium">shared equity upside</span> — not consulting fees.
          </p>

          {/* Dual High-Conversion CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/studio"
              size="lg"
              variant="primary"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto shadow-[0_0_30px_rgba(245,158,11,0.35)]"
            >
              Apply to Build With Us
            </Button>
            <Button
              href="/network"
              size="lg"
              variant="secondary"
              leftIcon={<Users className="h-4 w-4 text-amber-400" />}
              className="w-full sm:w-auto"
            >
              Find a Co-Founder / Partner
            </Button>
          </div>

          {/* Core Proposition Proof Points */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
            <div className="p-3 rounded-lg bg-surface-200/40 border border-white/[0.06]">
              <div className="text-xs font-mono text-amber-400 font-semibold mb-1 flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5" /> Skin In The Game
              </div>
              <p className="text-xs text-muted">Zero hourly consulting fees. Equity & upside aligned.</p>
            </div>

            <div className="p-3 rounded-lg bg-surface-200/40 border border-white/[0.06]">
              <div className="text-xs font-mono text-cyan-400 font-semibold mb-1 flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> 180-Day Handover
              </div>
              <p className="text-xs text-muted">Build with you, then transition complete independence.</p>
            </div>

            <div className="p-3 rounded-lg bg-surface-200/40 border border-white/[0.06]">
              <div className="text-xs font-mono text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5" /> 60-Day Fresh Board
              </div>
              <p className="text-xs text-muted">Auto-expiring listings. Zero dead co-founder ads.</p>
            </div>

            <div className="p-3 rounded-lg bg-surface-200/40 border border-white/[0.06]">
              <div className="text-xs font-mono text-white font-semibold mb-1 flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5" /> 8–20+ Yrs Domain
              </div>
              <p className="text-xs text-muted">Built for seasoned corporate leaders & operators.</p>
            </div>
          </div>
        </div>

        {/* Live Interactive Venture Architecture Preview Box (Linear/Stripe Terminal Aesthetic) */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl bg-surface-100/90 border border-white/[0.12] p-1 shadow-2xl shadow-black/90 backdrop-blur-xl relative group">
          {/* Glow border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 via-cyan-500/10 to-amber-500/20 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition duration-500 pointer-events-none" />

          <div className="relative rounded-[14px] bg-[#0A0C10] p-4 sm:p-6 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4 mb-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-muted text-[11px]">1008-venture-engine // studio-sprint-active</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="amber" size="sm" pulse>Live Cohort Active</Badge>
                <span className="text-muted text-[11px] hidden sm:inline">180d Handover Pipeline</span>
              </div>
            </div>

            {/* Live Terminal Content Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              {/* Box 1: Studio Live Track */}
              <div className="p-3.5 rounded-xl bg-surface-200/60 border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-muted text-[11px]">
                  <span>STUDIO TRACK</span>
                  <span className="text-amber-400 font-semibold">DAY 64 / 180</span>
                </div>
                <div className="text-white font-medium text-sm">MedFlow Clinical Telemetry</div>
                <p className="text-muted text-[11px] font-sans">
                  Ex-Fortis supply chain VP building temperature ledger across 14 hospital trial sites.
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Architecture Deployed
                  </span>
                  <span className="text-amber-400 font-semibold">Pre-Seed</span>
                </div>
              </div>

              {/* Box 2: Network Matchmaking */}
              <div className="p-3.5 rounded-xl bg-surface-200/60 border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-muted text-[11px]">
                  <span>NETWORK MATCH</span>
                  <span className="text-cyan-400 font-semibold">51 DAYS LEFT</span>
                </div>
                <div className="text-white font-medium text-sm">Industrial Spare Parts B2B</div>
                <p className="text-muted text-[11px] font-sans">
                  Pune manufacturing veteran seeking Go-to-Market Co-Founder for Tier-2 machine shops.
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px]">
                  <span className="text-cyan-300">Equity: 18% - 28%</span>
                  <Link href="/network" className="text-white hover:text-amber-400 flex items-center gap-0.5">
                    View <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Box 3: Capital Syndicate */}
              <div className="p-3.5 rounded-xl bg-surface-200/60 border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-muted text-[11px]">
                  <span>CAPITAL SYNDICATE</span>
                  <span className="text-emerald-400 font-semibold">92% COMMITTED</span>
                </div>
                <div className="text-white font-medium text-sm">Fabriqk Systems (Pune)</div>
                <p className="text-muted text-[11px] font-sans">
                  On-demand precision tooling platform. ₹1.15 Cr monthly GMV. Raising ₹2.5 Cr Seed.
                </p>
                <div className="pt-1 flex items-center justify-between text-[11px]">
                  <span className="text-muted">Target: ₹2.5 Cr</span>
                  <Link href="/capital" className="text-amber-400 hover:text-amber-300 font-semibold">
                    Inquire Deal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
