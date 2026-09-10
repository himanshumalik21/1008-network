"use client";

import React, { useState } from "react";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { StudioSprintTimeline } from "@/components/home/StudioSprintTimeline";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
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
      dimension: "Operations, Feasibility & Tech Sourcing",
      studio1008: "0-to-1 operational systems, feasibility MVPs + vetted tech hiring based on budget",
      agency: "Outsourced developers without product or operational intuition",
      accelerator: "Zero operational or build support; founder must recruit alone",
      solo: "Struggles with freelancer churn, disorganized ops & high cash burn",
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
      studio1008: "New founders, entrepreneurs, struggling businesses & domain builders",
      agency: "Anyone who pays invoices",
      accelerator: "Broad batch cohorts without dedicated full-stack code",
      solo: "Solo operators with high execution friction",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Studio Header */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-[#E6E8EB] bg-[#F6F9FC]">
        {/* Background Architectural Box Grid & Ambient Motion */}
        <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-65 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-gradient-to-r from-[#635BFF]/12 via-[#00D4B2]/08 to-transparent blur-[130px] pointer-events-none animate-float-slow" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-l from-[#FF7043]/07 to-transparent blur-[120px] pointer-events-none animate-float-reverse" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" size="md" pulse>
              1008 Network // Turnkey Operations & Venture Studio
            </Badge>
            <span className="text-xs font-semibold text-[#627D98]">180-Day Venture Execution Engine</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            You bring the vision & industry drive.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              We build the operational machine to make it thrive.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[#425466] leading-relaxed max-w-3xl mx-auto font-normal">
            Whether establishing a manufacturing line, founding a hospital or clinic, setting up a boutique resort, launching a consumer product, or engineering a turnaround for a troubled enterprise—1008 Network stands shoulder-to-shoulder with you. We execute physical commissioning, machinery procurement, statutory clearances, hiring, digital architecture, and commercial GTM for <strong className="text-[#0A2540]">shared equity upside</strong>.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              size="lg"
              variant="primary"
              onClick={() => setModalOpen(true)}
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold px-8"
            >
              Pitch Your Venture Vision
            </Button>
            <Button
              href="/capital"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto font-semibold"
            >
              Explore Investor Syndicates
            </Button>
          </div>
        </div>
      </section>

      {/* The 180-Day Sprint Breakdown */}
      <StudioSprintTimeline />

      {/* Comparison Matrix Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <Badge variant="cyan" size="sm">Alignment & Incentives</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] font-sans">
              Why 1008 Network is radically different
            </h2>
            <p className="text-[#425466] text-base">
              Comparing the 1008 Network Studio model against traditional consulting agencies, standard incubators, and solo bootstrapping.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E6E8EB] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-[#E6E8EB] bg-[#F6F9FC] text-[#627D98] uppercase text-[11px] font-semibold tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5">Dimension</th>
                  <th className="p-4 sm:p-5 text-[#635BFF] bg-[#F0F0FF] border-x border-[#E0E0FF] font-bold">
                    1008 Network
                  </th>
                  <th className="p-4 sm:p-5">Consulting Agency</th>
                  <th className="p-4 sm:p-5">Traditional Accelerator</th>
                  <th className="p-4 sm:p-5">Solo Bootstrapping</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6E8EB]">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F6F9FC]/60 transition-colors">
                    <td className="p-4 sm:p-5 font-semibold text-[#0A2540]">
                      {row.dimension}
                    </td>
                    <td className="p-4 sm:p-5 bg-[#F0F0FF]/40 border-x border-[#E0E0FF] text-[#0A2540] font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                        <span>{row.studio1008}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-[#627D98]">
                      {row.agency}
                    </td>
                    <td className="p-4 sm:p-5 text-[#627D98]">
                      {row.accelerator}
                    </td>
                    <td className="p-4 sm:p-5 text-[#627D98]">
                      {row.solo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA Box */}
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-2xl font-bold text-[#0A2540] font-sans">
                Ready to evaluate your business idea with 1008 Network?
              </h3>
              <p className="text-sm text-[#425466]">
                We take on a limited number of bespoke venture partnerships to maintain execution excellence. All applications reviewed under mutual NDA.
              </p>
            </div>
            <Button
              size="lg"
              variant="primary"
              onClick={() => setModalOpen(true)}
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="shrink-0 font-semibold"
            >
              Apply to Build With Us
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
