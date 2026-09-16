"use client";

import React, { useState } from "react";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { StudioSprintTimeline } from "@/components/home/StudioSprintTimeline";
import { PersonaMatrix } from "@/components/home/PersonaMatrix";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function StudioPage() {
  const [modalOpen, setModalOpen] = useState(false);

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
            <span className="text-xs font-semibold text-[#627D98]">Phased Venture Execution Engine</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            You bring the vision & industry drive.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              We build the operational machine to make it thrive.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[#425466] leading-relaxed max-w-3xl mx-auto font-normal">
            We architect turnkey operational infrastructure, source specialized talent, configure modern software tools, and facilitate syndicate capital alongside ambitious founders—<strong className="text-[#0A2540]">aligned on long-term venture equity</strong>.
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

      {/* Turnkey Capabilities & Use Cases */}
      <PersonaMatrix />

      {/* Comparison Section (1008 Venture Studio vs Alternatives) */}
      <ComparisonSection />

      {/* CTA Box */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
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
