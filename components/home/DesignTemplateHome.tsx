"use client";

import React, { useState } from "react";
import Link from "next/link";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { ArrowRight, Plus } from "lucide-react";

export function DesignTemplateHome() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between bg-white font-sans antialiased pt-16 sm:pt-18 lg:pt-16 selection:bg-[#635BFF]/15 selection:text-[#0A2540]">
      {/* ============================================================ */}
      {/* 1. COMMUNITY ECOSYSTEM (Content on Left • Video on Right) */}
      {/* ============================================================ */}
      <section
        id="pathways"
        className="flex-1 w-full max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-2 sm:py-3 lg:py-2 z-20"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-stretch">
          {/* Left Column: Heading, 2x2 Boxes & Playbook Below (7 cols on lg & xl) */}
          <div className="lg:col-span-7 xl:col-span-7 min-w-0 space-y-4 sm:space-y-4.5 lg:space-y-5 flex flex-col justify-center">
            {/* Section Heading */}
            <div className="space-y-2 sm:space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-700 text-xs sm:text-[13px] font-semibold border border-zinc-200 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#00D4B2] animate-pulse" />
                <span>1008 Network • The Entrepreneur & Business Community</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold tracking-tight text-[#0A2540] leading-[1.12]">
                One community. <br className="hidden sm:inline" />
                Five growth pathways.
              </h1>
              <p className="text-[#425466] text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
                Explore co-founders, capital discovery, turnkey operational outsourcing, project gigs, and tactical playbooks—backed by standardized legal rails and zero broker markups.
              </p>
            </div>

            {/* 2x2 Compact Boxes Grid (1008 Network Brand Colors) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-4.5">
              {/* Box 1: Co-Founders & Talent (Canva Palette #02 "Stone" - Deep Subdued Slate Blue) */}
              <Link
                href="/network"
                className="relative rounded-[22px] bg-[#336B87] hover:bg-[#2A5971] p-4.5 sm:p-5 flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl group min-h-[136px] sm:min-h-[148px] lg:min-h-[152px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/85">
                    Co-Founders & Talent
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#336B87] shadow-xs">
                    <Plus className="h-4 w-4 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-white leading-snug">
                    Co-Founders & Talent
                  </h3>
                  <p className="text-white/90 text-xs sm:text-[13px] pt-1 leading-snug font-normal">
                    Find vetted Technical CTOs, GTM heads, or join an ambitious startup for milestone equity.
                  </p>
                </div>
              </Link>

              {/* Box 2: Funding & Investors (Canva Palette #02 "Autumn Foliage" - Warm Subdued Terracotta Clay) */}
              <Link
                href="/capital"
                className="relative rounded-[22px] bg-[#7D4F43] hover:bg-[#6C4339] p-4.5 sm:p-5 flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl group min-h-[136px] sm:min-h-[148px] lg:min-h-[152px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/85">
                    Capital Discovery
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#7D4F43] shadow-xs">
                    <Plus className="h-4 w-4 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-white leading-snug">
                    Funding & Investors
                  </h3>
                  <p className="text-white/90 text-xs sm:text-[13px] pt-1 leading-snug font-normal">
                    Connect evaluated startups directly with active angels & family offices with 0% broker cuts.
                  </p>
                </div>
              </Link>

              {/* Box 3: Outsource Operations (Canva Palette #02 "Shadow" - Deep Executive Charcoal Slate) */}
              <Link
                href="/studio"
                className="relative rounded-[22px] bg-[#2A3132] hover:bg-[#202526] p-4.5 sm:p-5 flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl group min-h-[136px] sm:min-h-[148px] lg:min-h-[152px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/85">
                    Turnkey Execution
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#8DA4A6] flex items-center justify-center text-[#2A3132] shadow-xs">
                    <Plus className="h-4 w-4 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-white leading-snug">
                    Outsource Operations
                  </h3>
                  <p className="text-white/85 text-xs sm:text-[13px] pt-1 leading-snug font-normal">
                    1008 as turnkey execution partner—cloud architecture, private ERPs, and factory audits.
                  </p>
                </div>
              </Link>

              {/* Box 4: Gigs & Sprints (Canva Palette #02 "Mist" - Soft Frosted Slate Neutral) */}
              <Link
                href="/gigs"
                className="relative rounded-[22px] bg-[#F0F4F7] hover:bg-[#E3ECF1] border border-[#CCD8E2] p-4.5 sm:p-5 flex flex-col justify-between text-[#2A3132] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl group min-h-[136px] sm:min-h-[148px] lg:min-h-[152px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#5A6E72]">
                    Project Sprints
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#2A3132] flex items-center justify-center text-white shadow-xs">
                    <Plus className="h-4 w-4 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-[#2A3132] leading-snug">
                    Gigs & Sprints
                  </h3>
                  <p className="text-[#5A6E72] text-xs sm:text-[13px] pt-1 leading-snug font-normal">
                    Post urgent project requirements or pick up milestone-gated 2–4 week deliverables.
                  </p>
                </div>
              </Link>
            </div>

            {/* Box 5: Playbook (Canva #02 Subdued Charcoal-to-Steel Gradient) */}
            <Link
              href="/knowledge"
              className="relative rounded-[22px] bg-gradient-to-r from-[#20262A] via-[#2A353B] to-[#334D5C] hover:from-[#1A1F22] hover:to-[#2B424F] p-4.5 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl group"
            >
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                    Knowledge Hub
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8DA4A6]" />
                  <span className="text-xs text-[#C4D5D7]">Founder Playbook</span>
                </div>
                <h3 className="text-base sm:text-lg lg:text-[20px] font-bold text-white leading-snug">
                  Playbook & Tactical Frameworks
                </h3>
                <p className="text-white/85 text-xs sm:text-sm leading-relaxed font-normal">
                  Standardized founder templates, milestone vesting agreements, cap tables, and regulatory blueprints for Indian ventures.
                </p>
              </div>
              <div className="shrink-0 self-end sm:self-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white/90 flex items-center justify-center group-hover:bg-white group-hover:text-[#20262A] transition-colors">
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column: Video Showcase (5 cols on lg & xl) */}
          <div className="lg:col-span-5 xl:col-span-5 min-w-0 flex justify-center lg:justify-end items-stretch pt-2 sm:pt-4 lg:pt-0">
            <div className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-none flex flex-col justify-center">
              {/* Soft Ambient Brand Glow Behind Video (Subdued Palette) */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#336B87]/15 via-transparent to-[#8DA4A6]/15 rounded-[36px] blur-2xl opacity-70 -z-10" />

              {/* Video Card Container - Generous Sizing to Fill Right Column */}
              <div className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] xl:min-h-[600px] max-h-[660px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(10,37,64,0.22)] border border-zinc-200/90 bg-zinc-950 isolate transform-gpu">
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
      {/* 2. MINIMAL GOOGLE-STYLE BOTTOM FOOTER */}
      {/* ============================================================ */}
      <footer className="w-full shrink-0 border-t border-zinc-200/90 bg-[#F8FAFC]/90 backdrop-blur-xs py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8 text-xs sm:text-[13px] text-[#64748B] z-30">
        <div className="max-w-[1420px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4">
          {/* Left Column Links (Google style: location & key links) */}
          <div className="flex items-center flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
            <span className="font-semibold text-[#0A2540]">1008 Network</span>
            <span className="hidden sm:inline text-zinc-300">•</span>
            <span className="text-zinc-500">Gurgaon, India</span>
            <span className="hidden sm:inline text-zinc-300">•</span>
            <Link href="/about" className="hover:text-[#0A2540] transition-colors">
              About
            </Link>
            <Link href="/manifesto" className="hover:text-[#0A2540] transition-colors">
              Manifesto
            </Link>
            <Link href="/knowledge" className="hover:text-[#0A2540] transition-colors">
              Playbook
            </Link>
          </div>

          {/* Right Column Links (Google style: Privacy, Terms, Contact, Socials) */}
          <div className="flex items-center flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-[#0A2540] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#0A2540] transition-colors">
              Terms
            </Link>
            <a href="mailto:join@1008.network" className="hover:text-[#0A2540] transition-colors">
              Contact
            </a>
            <a
              href="https://www.linkedin.com/company/1008-network/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/1008_network/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E4405F] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>

      {/* Global Application Modal */}
      <StudioApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
