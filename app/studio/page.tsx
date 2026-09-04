"use client";

import React, { useState } from "react";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { StudioSprintTimeline } from "@/components/home/StudioSprintTimeline";
import {
  Layers,
  ShieldCheck,
  Zap,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowRight,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function StudioPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const comparison = [
    {
      dimension: "Primary Business Model",
      studio1008: "Equity & Shared Upside (Skin in the game)",
      agency: "High hourly or monthly consulting retainers",
      accelerator: "Fixed standard equity (7%–10%) with no code/build",
      solo: "100% out-of-pocket personal savings burn",
    },
    {
      dimension: "Software Engineering & Architecture",
      studio1008: "Production-grade Next.js/React full-stack team included",
      agency: "Outsourced developers without product intuition",
      accelerator: "Zero build support; founder must recruit CTO",
      solo: "Struggles with freelancer churn or low-quality code",
    },
    {
      dimension: "Duration & Handover",
      studio1008: "180-Day Handover (Engineered for founder autonomy)",
      agency: "Incentivized to keep you on endless retainers",
      accelerator: "3-month cohort ending in Demo Day pitch",
      solo: "Indefinite timeline with high execution fatigue",
    },
    {
      dimension: "Intellectual Property Ownership",
      studio1008: "100% assigned to founder entity from Day 1",
      agency: "Often disputed or held hostage for final invoice",
      accelerator: "Owned by entity",
      solo: "Disorganized IP across individual freelancers",
    },
    {
      dimension: "Target Founder Profile",
      studio1008: "Senior corporate leaders & domain veterans (8–20+ yrs)",
      agency: "Anyone who pays invoices",
      accelerator: "Primarily 20-something college graduates",
      solo: "Solo operators with high opportunity cost",
    },
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Studio Header */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-white/[0.06]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-highlight opacity-60 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2">
            <Badge variant="amber" size="md" pulse>
              Build With 1008 // Studio Cohort
            </Badge>
            <span className="text-xs font-mono text-muted">180-Day Execution Engine</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-sans">
            We partner with domain leaders to build{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              defensible venture-scale businesses.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-muted leading-relaxed max-w-3xl mx-auto font-normal">
            You bring 8–20+ years of sector expertise, customer trust, and structural insights. 1008 provides the full-stack engineering, product design, commercial systems, and seed readiness for <strong className="text-white">shared equity upside</strong>.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="primary"
              onClick={() => setModalOpen(true)}
              rightIcon={<ArrowUpRight className="h-4 w-4" />}
              className="w-full sm:w-auto shadow-[0_0_30px_rgba(245,158,11,0.35)]"
            >
              Apply to Build With Us
            </Button>
            <Button
              href="/readiness"
              size="lg"
              variant="secondary"
              leftIcon={<Sparkles className="h-4 w-4 text-amber-400" />}
              className="w-full sm:w-auto"
            >
              Check Venture Readiness Score
            </Button>
          </div>
        </div>
      </section>

      {/* The 180-Day Sprint Breakdown */}
      <StudioSprintTimeline />

      {/* Comparison Matrix Section */}
      <section className="py-24 bg-[#090A0C] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <Badge variant="cyan" size="sm">Alignment & Incentives</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
              Why 1008 is radically different
            </h2>
            <p className="text-muted text-base">
              Comparing the 1008 Studio model against traditional consulting agencies, standard incubators, and solo bootstrapping.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-surface-100/70 shadow-2xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-white/[0.08] bg-[#0C0E13] text-muted font-mono uppercase text-[11px]">
                <tr>
                  <th className="p-4 sm:p-5">Dimension</th>
                  <th className="p-4 sm:p-5 text-amber-400 bg-amber-500/10 border-x border-amber-500/20 font-bold">
                    1008 Venture Studio
                  </th>
                  <th className="p-4 sm:p-5">Consulting Agency</th>
                  <th className="p-4 sm:p-5">Traditional Accelerator</th>
                  <th className="p-4 sm:p-5">Solo Bootstrapping</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-white">
                      {row.dimension}
                    </td>
                    <td className="p-4 sm:p-5 bg-amber-500/[0.04] border-x border-amber-500/20 text-white font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{row.studio1008}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-muted">
                      {row.agency}
                    </td>
                    <td className="p-4 sm:p-5 text-muted">
                      {row.accelerator}
                    </td>
                    <td className="p-4 sm:p-5 text-muted">
                      {row.solo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA Box */}
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-surface-100/90 border border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white font-sans">
                Ready to evaluate your domain thesis with 1008?
              </h3>
              <p className="text-sm text-muted">
                Cohort slots are strictly limited to maintain execution quality. Applications reviewed under mutual NDA.
              </p>
            </div>
            <Button
              size="lg"
              variant="primary"
              onClick={() => setModalOpen(true)}
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="shrink-0"
            >
              Apply to Studio Cohort
            </Button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <StudioApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
