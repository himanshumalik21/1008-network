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
  Lock,
} from "lucide-react";

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    trackStudioModalOpen("hero_primary_cta");
    setModalOpen(true);
  };

  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden bg-white">
      {/* 1. Architectural Box Grid Pattern with Radial Fade */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-55 pointer-events-none" />

      {/* 2. Stripe-Caliber Flowing Mesh Wave Artwork Canvas */}
      <FlowingMeshCanvas className="absolute top-0 right-0 w-full md:w-[50%] lg:w-[46%] xl:w-[42%] h-[100vh] max-h-[960px] opacity-75 pointer-events-none z-0" />

      {/* 3. Floating Ambient Motion Gradient Meshes */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[760px] h-[520px] bg-gradient-to-tr from-[#635BFF]/12 via-[#00D4B2]/08 to-transparent blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute top-1/4 -right-16 w-[480px] h-[500px] bg-gradient-to-bl from-[#FF7043]/08 via-[#635BFF]/07 to-transparent blur-[120px] pointer-events-none animate-float-reverse" />
      <div className="absolute top-1/3 -left-28 w-[460px] h-[380px] bg-gradient-to-br from-[#00D4B2]/08 via-[#635BFF]/06 to-transparent blur-[120px] pointer-events-none animate-pulse-subtle" />

      {/* 4. Subtle Technical Dot Matrix Accent Corners */}
      <div className="absolute left-8 top-1/4 w-44 h-44 bg-dots-matrix opacity-30 mask-radial-fade pointer-events-none hidden xl:block" />
      <div className="absolute right-8 top-1/3 w-44 h-44 bg-dots-matrix opacity-30 mask-radial-fade pointer-events-none hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" size="md" pulse>
              1008 Network // Turnkey Venture Studio, Talent & Capital Platform
            </Badge>
          </div>

          {/* Primary Razor-Sharp Hook Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] leading-[1.15] font-sans">
            <span className="block">You bring the domain vision.</span>
            <span className="block mt-1 sm:mt-1.5 bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              We orchestrate the operating company.
            </span>
          </h1>

          {/* Core Subtitle */}
          <p className="text-base sm:text-lg text-[#425466] leading-relaxed max-w-2xl mx-auto font-normal">
            We architect turnkey operational infrastructure, source specialized talent, configure modern software tools, and facilitate syndicate capital alongside ambitious founders—aligned on long-term venture equity.
          </p>

          {/* Dual High-Conversion CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              size="lg"
              variant="primary"
              onClick={handleOpenModal}
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto text-base px-8 font-semibold shadow-[0_4px_14px_rgba(99,91,255,0.25)]"
            >
              Apply to Build With Us
            </Button>
            <Button
              href="#pillars"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-base font-semibold"
            >
              Explore Four Pillars ↓
            </Button>
          </div>

          {/* Four Pillars Quick Interactive Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5 text-xs font-semibold">
            <Link
              href="/studio"
              className="px-4 py-2 rounded-xl bg-white border border-[#E6E8EB] hover:border-[#635BFF] hover:bg-[#F0F0FF] text-[#0A2540] hover:text-[#635BFF] transition-all flex items-center gap-2 shadow-2xs group"
            >
              <span className="w-2 h-2 rounded-full bg-[#635BFF]" />
              <span>1. Venture Studio</span>
              <span className="text-[10px] text-[#635BFF] font-mono font-bold bg-[#F0F0FF] px-1.5 py-0.5 rounded">Turnkey</span>
            </Link>
            <Link
              href="/network"
              className="px-4 py-2 rounded-xl bg-white border border-[#E6E8EB] hover:border-[#00D4B2] hover:bg-[#E6FFFA] text-[#0A2540] hover:text-[#007A66] transition-all flex items-center gap-2 shadow-2xs group"
            >
              <span className="w-2 h-2 rounded-full bg-[#00D4B2]" />
              <span>2. Partner Network</span>
              <span className="text-[10px] text-[#00A389] font-mono font-bold bg-[#E6FFFA] px-1.5 py-0.5 rounded">Co-Founders</span>
            </Link>
            <Link
              href="/capital"
              className="px-4 py-2 rounded-xl bg-white border border-[#E6E8EB] hover:border-[#059669] hover:bg-[#ECFDF5] text-[#0A2540] hover:text-[#059669] transition-all flex items-center gap-2 shadow-2xs group"
            >
              <span className="w-2 h-2 rounded-full bg-[#059669]" />
              <span>3. Capital Network</span>
              <span className="text-[10px] text-[#059669] font-mono font-bold bg-[#ECFDF5] px-1.5 py-0.5 rounded">Syndicate</span>
            </Link>
            <Link
              href="/knowledge"
              className="px-4 py-2 rounded-xl bg-white border border-[#E6E8EB] hover:border-[#FF7043] hover:bg-[#FFF3EE] text-[#0A2540] hover:text-[#FF7043] transition-all flex items-center gap-2 shadow-2xs group"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF7043]" />
              <span>4. Playbook</span>
              <span className="text-[10px] text-[#FF7043] font-mono font-bold bg-[#FFF3EE] px-1.5 py-0.5 rounded">Blueprints</span>
            </Link>
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
