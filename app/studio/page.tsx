"use client";

import React, { useState } from "react";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { StudioSprintTimeline } from "@/components/home/StudioSprintTimeline";
import { PersonaMatrix } from "@/components/home/PersonaMatrix";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { PillarFAQ } from "@/components/ui/PillarFAQ";
import { studioFaqs } from "@/data/faqs";
import { InteractiveNetworkGlobe } from "@/components/canvas/InteractiveNetworkGlobe";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Lock,
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

      {/* Venture Studio Frequently Answered Questions */}
      <PillarFAQ
        items={studioFaqs}
        badge="Studio Execution & Equity"
        badgeVariant="indigo"
        title="Venture Studio Frequently Answered Questions"
        description="Everything you need to know about our 180-day operational build sprint, Day-1 IP assignment, and shared-equity model."
      />

      {/* Global Conversion Banner */}
      <section className="py-24 bg-[#F6F9FC] border-t border-[#E6E8EB] relative overflow-hidden">
        {/* Background Architectural Box Grid & Ambient Motion */}
        <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-gradient-to-r from-[#635BFF]/12 via-[#00D4B2]/08 to-[#FF7043]/06 blur-[130px] pointer-events-none animate-pulse-subtle" />
        
        {/* Interactive 3D Point-Cloud Globe Artwork on Right */}
        <InteractiveNetworkGlobe className="absolute -right-20 lg:-right-32 xl:-right-40 top-1/2 -translate-y-1/2 w-[650px] h-[650px] lg:w-[800px] lg:h-[800px] xl:w-[940px] xl:h-[940px] opacity-85 pointer-events-none hidden lg:block" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <Badge variant="indigo" size="md" pulse>
            Operational Partnerships Open
          </Badge>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Ready to turn your industry insight into a running enterprise?
          </h2>

          <p className="text-base sm:text-xl text-[#425466] max-w-2xl mx-auto leading-relaxed">
            Stop fighting operational friction, contractor markups, or hiring delays alone. Partner with 1008 Network for turnkey execution on the ground.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              size="lg"
              variant="primary"
              onClick={() => setModalOpen(true)}
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold text-base px-8 shadow-sm"
            >
              Apply to Build With Us
            </Button>
            <Button
              href="/network"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-base font-semibold"
            >
              Find a Co-Founder / Join Network
            </Button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#627D98] font-semibold">
            <span className="flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-[#059669]" /> Mutual NDA from Day 1
            </span>
            <span>•</span>
            <span>Zero Upfront Consulting Fees</span>
            <span>•</span>
            <span>Phased Handover Standard</span>
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
