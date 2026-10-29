"use client";

import React, { useState } from "react";
import Link from "next/link";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { ArrowRight, Plus } from "lucide-react";

export function DesignTemplateHome() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full font-sans antialiased selection:bg-[#635BFF]/15 selection:text-[#0A2540]">
      {/* ============================================================ */}
      {/* 1. COMMUNITY ECOSYSTEM (Content on Left • Video on Right) */}
      {/* ============================================================ */}
      <section
        id="pathways"
        className="relative w-full h-full min-h-[calc(100vh-4rem)] lg:h-[calc(100dvh-4.25rem)] lg:max-h-[calc(100dvh-4.25rem)] flex items-center bg-white text-[#0A2540] pt-20 pb-6 lg:py-0 px-4 sm:px-6 lg:px-8 z-20"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 xl:gap-10 items-stretch">
          {/* Left Column: Heading, 2x2 Boxes & Playbook Below (7 cols on lg & xl) */}
          <div className="lg:col-span-7 xl:col-span-7 min-w-0 space-y-3.5 sm:space-y-4 flex flex-col justify-center">
            {/* Section Heading */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold border border-zinc-200 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#00D4B2] animate-pulse" />
                <span>1008 Network • The Entrepreneur & Business Community</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold tracking-tight text-[#0A2540] leading-[1.14]">
                One community. <br className="hidden sm:inline" />
                Five growth pathways.
              </h1>
              <p className="text-[#425466] text-xs sm:text-sm font-normal leading-relaxed max-w-xl">
                Explore co-founders, capital discovery, turnkey operational outsourcing, project gigs, and tactical playbooks—backed by standardized legal rails and zero broker markups.
              </p>
            </div>

            {/* 2x2 Compact Boxes Grid (1008 Network Brand Colors) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {/* Box 1: Co-Founders & Talent (1008 Brand Indigo) */}
              <Link
                href="/network"
                className="relative rounded-[20px] bg-[#635BFF] hover:bg-[#5851EA] p-3.5 sm:p-4 flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group min-h-[118px] sm:min-h-[126px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                    Co-Founders & Talent
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#635BFF] shadow-xs">
                    <Plus className="h-3.5 w-3.5 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
                <div className="pt-1.5">
                  <h3 className="text-[15px] sm:text-base font-bold text-white leading-snug">
                    Co-Founders & Talent
                  </h3>
                  <p className="text-white/90 text-[11px] sm:text-xs pt-0.5 leading-snug font-normal">
                    Find vetted Technical CTOs, GTM heads, or join an ambitious startup for milestone equity.
                  </p>
                </div>
              </Link>

              {/* Box 2: Funding & Investors (1008 Brand Amber/Coral) */}
              <Link
                href="/capital"
                className="relative rounded-[20px] bg-[#FF7043] hover:bg-[#F4511E] p-3.5 sm:p-4 flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group min-h-[118px] sm:min-h-[126px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                    Capital Discovery
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#FF7043] shadow-xs">
                    <Plus className="h-3.5 w-3.5 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
                <div className="pt-1.5">
                  <h3 className="text-[15px] sm:text-base font-bold text-white leading-snug">
                    Funding & Investors
                  </h3>
                  <p className="text-white/90 text-[11px] sm:text-xs pt-0.5 leading-snug font-normal">
                    Connect evaluated startups directly with active angels & family offices with 0% broker cuts.
                  </p>
                </div>
              </Link>

              {/* Box 3: Outsource Operations (1008 Brand Dark Navy) */}
              <Link
                href="/studio"
                className="relative rounded-[20px] bg-[#0A2540] hover:bg-[#123356] p-3.5 sm:p-4 flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group min-h-[118px] sm:min-h-[126px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                    Turnkey Execution
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#00D4B2] flex items-center justify-center text-[#0A2540] shadow-xs">
                    <Plus className="h-3.5 w-3.5 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
                <div className="pt-1.5">
                  <h3 className="text-[15px] sm:text-base font-bold text-white leading-snug">
                    Outsource Operations
                  </h3>
                  <p className="text-white/85 text-[11px] sm:text-xs pt-0.5 leading-snug font-normal">
                    1008 as turnkey execution partner—cloud architecture, private ERPs, and factory audits.
                  </p>
                </div>
              </Link>

              {/* Box 4: Gigs & Sprints (1008 Executive Surface) */}
              <Link
                href="/gigs"
                className="relative rounded-[20px] bg-[#F6F9FC] hover:bg-[#EAECEF] border border-zinc-200/90 p-3.5 sm:p-4 flex flex-col justify-between text-[#0A2540] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group min-h-[118px] sm:min-h-[126px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#425466]">
                    Project Sprints
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#0A2540] flex items-center justify-center text-white shadow-xs">
                    <Plus className="h-3.5 w-3.5 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
                <div className="pt-1.5">
                  <h3 className="text-[15px] sm:text-base font-bold text-[#0A2540] leading-snug">
                    Gigs & Sprints
                  </h3>
                  <p className="text-[#425466] text-[11px] sm:text-xs pt-0.5 leading-snug font-normal">
                    Post urgent project requirements or pick up milestone-gated 2–4 week deliverables.
                  </p>
                </div>
              </Link>
            </div>

            {/* Box 5: Playbook (Comes Down Below 2x2 Boxes) */}
            <Link
              href="/knowledge"
              className="relative rounded-[20px] bg-gradient-to-r from-[#0A2540] via-[#123356] to-[#635BFF] p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl group"
            >
              <div className="space-y-0.5 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white/80">
                    Knowledge Hub
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D4B2]" />
                  <span className="text-[10px] sm:text-[11px] text-white/70">Founder Playbook</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Playbook & Tactical Frameworks
                </h3>
                <p className="text-white/85 text-[11px] sm:text-xs leading-snug font-normal">
                  Standardized founder templates, milestone vesting agreements, cap tables, and regulatory blueprints for Indian ventures.
                </p>
              </div>
              <div className="shrink-0 self-end sm:self-center">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white/90 flex items-center justify-center group-hover:bg-white group-hover:text-[#0A2540] transition-colors">
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column: Video Showcase (5 cols on lg & xl) */}
          <div className="lg:col-span-5 xl:col-span-5 min-w-0 flex justify-center lg:justify-end items-stretch pt-2 sm:pt-4 lg:pt-0">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none flex flex-col justify-center">
              {/* Soft Ambient Brand Glow Behind Video */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#635BFF]/12 via-transparent to-[#00D4B2]/12 rounded-[32px] blur-xl opacity-70 -z-10" />

              {/* Video Card Container - Stretches with Left Column Height */}
              <div className="relative w-full min-h-[420px] sm:min-h-[460px] lg:min-h-0 lg:h-full lg:max-h-[520px] xl:max-h-[560px] rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(10,37,64,0.18)] border border-zinc-200/90 bg-zinc-950 isolate transform-gpu">
                <video
                  src="/videos/hero_video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover object-[55%_center]"
                />
                {/* Subtle top & bottom ambient vignettes */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Global Application Modal */}
      <StudioApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
