"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/brand/Badge";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { FlowingMeshCanvas } from "@/components/canvas/FlowingMeshCanvas";
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
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-55 pointer-events-none" />

      {/* 2. Stripe-Caliber Flowing Mesh Wave Artwork Canvas */}
      <FlowingMeshCanvas className="absolute -top-10 right-0 w-full lg:w-[65%] h-[680px] opacity-70 pointer-events-none z-0" />

      {/* 3. Floating Ambient Motion Gradient Meshes */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[760px] h-[520px] bg-gradient-to-tr from-[#635BFF]/12 via-[#00D4B2]/08 to-transparent blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute top-1/4 -right-24 w-[520px] h-[420px] bg-gradient-to-bl from-[#FF7043]/08 via-[#635BFF]/07 to-transparent blur-[120px] pointer-events-none animate-float-reverse" />
      <div className="absolute top-1/3 -left-28 w-[460px] h-[380px] bg-gradient-to-br from-[#00D4B2]/08 via-[#635BFF]/06 to-transparent blur-[120px] pointer-events-none animate-pulse-subtle" />

      {/* 4. Subtle Technical Dot Matrix Accent Corners */}
      <div className="absolute left-8 top-1/4 w-44 h-44 bg-dots-matrix opacity-30 mask-radial-fade pointer-events-none hidden xl:block" />
      <div className="absolute right-8 top-1/3 w-44 h-44 bg-dots-matrix opacity-30 mask-radial-fade pointer-events-none hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" size="md" pulse>
              1008 Network // End-to-End Business Operations & Venture Studio
            </Badge>
            <span className="text-xs font-semibold text-[#627D98] hidden sm:inline-block">
              Manufacturing • Healthcare • Hotels • Schools • E-Commerce • Tech
            </span>
          </div>

          {/* Primary Razor-Sharp Hook Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A2540] leading-[1.08] font-sans">
            Pitch your business idea.{" "}
            <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              We execute operations & connect you with investors.
            </span>
          </h1>

          {/* Core Subtitle Positioning */}
          <p className="text-base sm:text-xl text-[#425466] leading-relaxed max-w-3xl mx-auto font-normal">
            Like <em>Shark Tank</em> with full-stack execution: You bring the idea. <strong>1008 Network runs end-to-end turnkey operations</strong>—from real estate scouting, plant setup, machinery procurement, and registrations to tech, staffing, and initial sales—and <strong>persuades our investor pool to fund your venture</strong>.
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
              Pitch Your Business Idea
            </Button>
            <Button
              href="/capital"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-base font-semibold"
            >
              Invest Capital With Us
            </Button>
          </div>

          {/* Core Proposition Proof Points */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E6E8EB] shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-[#CBD5E1] transition-colors">
              <div className="text-xs text-[#00A389] font-bold mb-1 flex items-center gap-1.5 font-sans">
                <Briefcase className="h-3.5 w-3.5" /> Turnkey Setup
              </div>
              <p className="text-xs text-[#627D98] leading-relaxed">Real estate scouting, plant setup, machinery, licensing & legal paperwork.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E6E8EB] shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-[#CBD5E1] transition-colors">
              <div className="text-xs text-[#635BFF] font-bold mb-1 flex items-center gap-1.5 font-sans">
                <Shield className="h-3.5 w-3.5" /> Investor Pool & Capital
              </div>
              <p className="text-xs text-[#627D98] leading-relaxed">We connect and pitch your validated venture to our active pool of investors.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E6E8EB] shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-[#CBD5E1] transition-colors">
              <div className="text-xs text-[#059669] font-bold mb-1 flex items-center gap-1.5 font-sans">
                <Code2 className="h-3.5 w-3.5" /> Tech & Online Stack
              </div>
              <p className="text-xs text-[#627D98] leading-relaxed">Feasibility prototypes, internal systems, and vetted tech talent tailored to budget.</p>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E6E8EB] shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-[#CBD5E1] transition-colors">
              <div className="text-xs text-[#F4511E] font-bold mb-1 flex items-center gap-1.5 font-sans">
                <Sparkles className="h-3.5 w-3.5" /> GTM & First Customers
              </div>
              <p className="text-xs text-[#627D98] leading-relaxed">Brand positioning, launch campaigns, distributor outreach, and initial sales revenue.</p>
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
                <span className="ml-2 text-[#0A2540] font-bold font-sans">1008 Network Turnkey Execution Engine</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="indigo" size="sm" pulse>Tailored Engagements</Badge>
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
                <div className="text-[#0A2540] font-bold text-sm">Vision & Feasibility Blueprint</div>
                <p className="text-[#425466] text-xs leading-relaxed">
                  Founder vision alignment, financial modeling, real estate/facility scouting, and regulatory licensing roadmap under NDA.
                </p>
                <div className="text-[11px] text-[#059669] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Feasibility Gate
                </div>
              </div>

              {/* Phase 2 */}
              <div className="p-4 rounded-xl bg-white border border-[#E6E8EB] space-y-2 shadow-xs">
                <div className="flex items-center justify-between text-[#627D98] text-[11px]">
                  <span className="text-[#00A389] font-bold">PHASE 02</span>
                  <span className="font-semibold">DAYS 46–90</span>
                </div>
                <div className="text-[#0A2540] font-bold text-sm">Infrastructure & Procurement</div>
                <p className="text-[#425466] text-xs leading-relaxed">
                  Plant/facility setup, machinery procurement, registration paperwork, vendor contracts, tech stack & digital presence.
                </p>
                <div className="text-[11px] text-[#00A389] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Setup Gate
                </div>
              </div>

              {/* Phase 3 */}
              <div className="p-4 rounded-xl bg-white border border-[#E6E8EB] space-y-2 shadow-xs">
                <div className="flex items-center justify-between text-[#627D98] text-[11px]">
                  <span className="text-[#F4511E] font-bold">PHASE 03</span>
                  <span className="font-semibold">DAYS 91–135</span>
                </div>
                <div className="text-[#0A2540] font-bold text-sm">Staffing & First Customers</div>
                <p className="text-[#425466] text-xs leading-relaxed">
                  Manpower & team recruitment, operational training, launch marketing campaigns, and securing initial commercial clients.
                </p>
                <div className="text-[11px] text-[#F4511E] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Traction Gate
                </div>
              </div>

              {/* Phase 4 */}
              <div className="p-4 rounded-xl bg-white border border-[#E6E8EB] space-y-2 shadow-xs">
                <div className="flex items-center justify-between text-[#627D98] text-[11px]">
                  <span className="text-[#059669] font-bold">PHASE 04</span>
                  <span className="font-semibold">DAYS 136–180</span>
                </div>
                <div className="text-[#0A2540] font-bold text-sm">Handover & Autonomous Growth</div>
                <p className="text-[#425466] text-xs leading-relaxed">
                  Operating SOPs institutionalized, permanent management onboarded, 100% asset & IP handover, and full founder autonomy.
                </p>
                <div className="text-[11px] text-[#059669] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Handover Gate
                </div>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-5 pt-4 border-t border-[#E6E8EB] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-[#627D98]">
                <strong className="text-[#0A2540]">Result:</strong> Tailored specifically to your business model, customer base, and market dynamics.
              </span>
              <button
                onClick={() => setModalOpen(true)}
                className="text-[#635BFF] hover:underline font-semibold flex items-center gap-1 shrink-0"
              >
                Apply to Build With Us <ChevronRight className="h-3.5 w-3.5" />
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
