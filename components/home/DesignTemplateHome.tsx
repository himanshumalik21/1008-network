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
      <section id="pathways" className="w-full bg-white text-[#0A2540] pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
          {/* Left Column: Heading, 2x2 Boxes & Playbook Below (7 cols on lg & xl) */}
          <div className="lg:col-span-7 xl:col-span-7 min-w-0 space-y-5 sm:space-y-6 flex flex-col justify-between">
            {/* Section Heading */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold border border-zinc-200 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#00D4B2] animate-pulse" />
                <span>1008 Network • The Entrepreneur & Business Community</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0A2540] leading-[1.12]">
                One community. <br />
                Five growth pathways.
              </h1>
              <p className="text-[#425466] text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
                Explore co-founders, capital discovery, turnkey operational outsourcing, project gigs, and tactical playbooks—backed by standardized legal rails and zero broker markups.
              </p>
            </div>

            {/* 2x2 Compact Boxes Grid (1008 Network Brand Colors) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {/* Box 1: Co-Founders & Talent (1008 Brand Indigo) */}
              <Link
                href="/network"
                className="relative rounded-[22px] bg-[#635BFF] hover:bg-[#5851EA] p-5 flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group min-h-[150px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                    Co-Founders & Talent
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#635BFF] shadow-xs">
                    <Plus className="h-4 w-4 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-white leading-snug">
                    Co-Founders & Talent
                  </h3>
                  <p className="text-white/90 text-xs pt-1 leading-relaxed font-normal">
                    Find vetted Technical CTOs, GTM heads, or join an ambitious startup for milestone equity.
                  </p>
                </div>
              </Link>

              {/* Box 2: Funding & Investors (1008 Brand Amber/Coral) */}
              <Link
                href="/capital"
                className="relative rounded-[22px] bg-[#FF7043] hover:bg-[#F4511E] p-5 flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group min-h-[150px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                    Capital Discovery
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#FF7043] shadow-xs">
                    <Plus className="h-4 w-4 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-white leading-snug">
                    Funding & Investors
                  </h3>
                  <p className="text-white/90 text-xs pt-1 leading-relaxed font-normal">
                    Connect evaluated startups directly with active angels & family offices with 0% broker cuts.
                  </p>
                </div>
              </Link>

              {/* Box 3: Outsource Operations (1008 Brand Dark Navy) */}
              <Link
                href="/studio"
                className="relative rounded-[22px] bg-[#0A2540] hover:bg-[#123356] p-5 flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group min-h-[150px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                    Turnkey Execution
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#00D4B2] flex items-center justify-center text-[#0A2540] shadow-xs">
                    <Plus className="h-4 w-4 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-white leading-snug">
                    Outsource Operations
                  </h3>
                  <p className="text-white/85 text-xs pt-1 leading-relaxed font-normal">
                    1008 as turnkey execution partner—cloud architecture, private ERPs, and factory audits.
                  </p>
                </div>
              </Link>

              {/* Box 4: Gigs & Sprints (1008 Executive Surface) */}
              <Link
                href="/gigs"
                className="relative rounded-[22px] bg-[#F6F9FC] hover:bg-[#EAECEF] border border-zinc-200/90 p-5 flex flex-col justify-between text-[#0A2540] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group min-h-[150px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#425466]">
                    Project Sprints
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#0A2540] flex items-center justify-center text-white shadow-xs">
                    <Plus className="h-4 w-4 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-[#0A2540] leading-snug">
                    Gigs & Sprints
                  </h3>
                  <p className="text-[#425466] text-xs pt-1 leading-relaxed font-normal">
                    Post urgent project requirements or pick up milestone-gated 2–4 week deliverables.
                  </p>
                </div>
              </Link>
            </div>

            {/* Box 5: Playbook (Comes Down Below 2x2 Boxes) */}
            <Link
              href="/knowledge"
              className="relative rounded-[22px] bg-gradient-to-r from-[#0A2540] via-[#123356] to-[#635BFF] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">
                    Knowledge Hub
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D4B2]" />
                  <span className="text-[11px] text-white/70">Founder Playbook</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Playbook & Tactical Frameworks
                </h3>
                <p className="text-white/85 text-xs sm:text-sm leading-relaxed font-normal">
                  Standardized founder templates, milestone vesting agreements, cap tables, and regulatory blueprints for Indian ventures.
                </p>
              </div>
              <div className="shrink-0 self-end sm:self-center">
                <div className="w-10 h-10 rounded-full border-2 border-white/90 flex items-center justify-center group-hover:bg-white group-hover:text-[#0A2540] transition-colors">
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column: Video Showcase (5 cols on lg & xl) */}
          <div className="lg:col-span-5 xl:col-span-5 min-w-0 flex justify-center lg:justify-end items-stretch pt-2 sm:pt-4 lg:pt-0">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none flex flex-col">
              {/* Soft Ambient Brand Glow Behind Video */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#635BFF]/12 via-transparent to-[#00D4B2]/12 rounded-[36px] blur-xl opacity-70 -z-10" />

              {/* Video Card Container - Stretches with Left Column Height */}
              <div className="relative w-full flex-1 min-h-[460px] sm:min-h-[520px] lg:min-h-[600px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(10,37,64,0.18)] border border-zinc-200/90 bg-zinc-950 isolate transform-gpu">
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
      </section>




      {/* ============================================================ */}
      {/* 3. OWN YOUR FUTURE (Peach/Coral Gradient Banner + Directory) */}
      {/* ============================================================ */}
      <section className="w-full bg-gradient-to-r from-[#FFA280] via-[#FF8D6C] to-[#FF7B60] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {/* Big Headline */}
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              Own your future.
            </h2>
            <p className="text-white/95 text-base sm:text-lg font-normal max-w-xl">
              Ready to get your business closer to its goals? Join the 1008 Network community today.
            </p>
          </div>

          {/* Community Directory & Contact Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start pt-6 border-t border-white/20">
            {/* Community Pathways Directory */}
            <div className="space-y-2 text-sm text-white/95">
              <span className="font-semibold text-xs uppercase tracking-wider text-white/80 block">
                Community Pathways
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                <li>
                  <Link href="/network" className="hover:underline flex items-center gap-1">
                    <span>Co-Founders & Talent</span>
                  </Link>
                </li>
                <li>
                  <Link href="/capital" className="hover:underline flex items-center gap-1">
                    <span>Funding & Investors</span>
                  </Link>
                </li>
                <li>
                  <Link href="/studio" className="hover:underline flex items-center gap-1">
                    <span>Outsource Operations</span>
                  </Link>
                </li>
                <li>
                  <Link href="/gigs" className="hover:underline flex items-center gap-1">
                    <span>Project Gigs & Sprints</span>
                  </Link>
                </li>
                <li>
                  <Link href="/knowledge" className="hover:underline flex items-center gap-1">
                    <span>1008 Playbook</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Direct Contact & HQ */}
            <div className="space-y-1 text-sm text-white/95">
              <span className="font-semibold text-xs uppercase tracking-wider text-white/80 block">
                Contact & HQ
              </span>
              <p className="font-semibold">1008 Network</p>
              <p className="text-xs sm:text-sm text-white/90">Gurgaon, Haryana • Pan-India</p>
              <p className="pt-2 text-xs sm:text-sm">
                <a href="mailto:contact@1008.network" className="hover:underline">
                  contact@1008.network
                </a>
              </p>
            </div>

            {/* Social Media */}
            <div className="space-y-1 text-sm text-white/95">
              <span className="font-semibold text-xs uppercase tracking-wider text-white/80 block">
                Official Channels
              </span>
              <div className="space-y-1 text-xs sm:text-sm">
                <a
                  href="https://www.instagram.com/1008_network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline block"
                >
                  Instagram: @1008_network
                </a>
                <a
                  href="https://www.facebook.com/share/1BpxN8G7VM/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline block"
                >
                  Facebook: 1008 Network
                </a>
              </div>
            </div>

            {/* Action Pill Button */}
            <div className="sm:ml-auto space-y-3 w-full sm:w-auto">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0A2540] hover:bg-[#635BFF] text-white font-semibold text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer block text-center"
              >
                Work with 1008
              </button>

              <Link
                href="/network/join"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#0A2540] font-semibold text-xs backdrop-blur-xs transition-all block text-center"
              >
                Join Talent Pool
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Application Modal */}
      <StudioApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
