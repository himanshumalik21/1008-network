"use client";

import React from "react";
import Link from "next/link";
import { IsometricBackground3D } from "./IsometricBackground3D";
import { ArrowRight, Plus } from "lucide-react";

export function DesignTemplateHome() {
  return (
    <div className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between font-sans antialiased pt-16 sm:pt-18 lg:pt-16 selection:bg-[#635BFF]/15 selection:text-[#0A2540] overflow-hidden">
      {/* 3D Geometric Isometric Wireframe Background (Decagon-style) */}
      <IsometricBackground3D />

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
                Find co-founders, raise angel funding, outsource day-to-day operations, hire project experts, and access practical business playbooks.
              </p>
            </div>

            {/* 2x2 Compact Boxes Grid (1008 Network Brand Colors) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-4.5">
              {/* Box 1: Co-Founders & Talent (Stripe Iris / Blurple Gradient) */}
              <Link
                href="/network"
                className="relative rounded-[22px] bg-gradient-to-br from-[#635BFF] via-[#5B52F2] to-[#4F46E5] p-4.5 sm:p-5 flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(99,91,255,0.4)] shadow-[0_8px_20px_-6px_rgba(99,91,255,0.25)] group min-h-[136px] sm:min-h-[148px] lg:min-h-[152px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/85">
                    Partners & Talent
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#635BFF] shadow-xs group-hover:scale-105 transition-transform">
                    <Plus className="h-4 w-4 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-white leading-snug">
                    Co-Founders & Talent
                  </h3>
                  <p className="text-white/90 text-xs sm:text-[13px] pt-1 leading-snug font-normal">
                    Find trusted co-founders and key team members, or join an ambitious startup.
                  </p>
                </div>
              </Link>

              {/* Box 2: Funding & Investors (Stripe Sunset Coral Gradient) */}
              <Link
                href="/capital"
                className="relative rounded-[22px] bg-gradient-to-br from-[#FF6B4A] via-[#F25A38] to-[#E24A29] p-4.5 sm:p-5 flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(242,90,56,0.38)] shadow-[0_8px_20px_-6px_rgba(242,90,56,0.25)] group min-h-[136px] sm:min-h-[148px] lg:min-h-[152px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/85">
                    Angel Funding
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#E24A29] shadow-xs group-hover:scale-105 transition-transform">
                    <Plus className="h-4 w-4 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-white leading-snug">
                    Funding & Investors
                  </h3>
                  <p className="text-white/90 text-xs sm:text-[13px] pt-1 leading-snug font-normal">
                    Connect directly with active angel investors and family offices.
                  </p>
                </div>
              </Link>

              {/* Box 3: Outsource Operations (Stripe Luminous Teal/Emerald Gradient) */}
              <Link
                href="/studio"
                className="relative rounded-[22px] bg-gradient-to-br from-[#00A68C] via-[#008F79] to-[#0A6C5B] p-4.5 sm:p-5 flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(0,166,140,0.4)] shadow-[0_8px_20px_-6px_rgba(0,166,140,0.25)] group min-h-[136px] sm:min-h-[148px] lg:min-h-[152px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/85">
                    Operations & Tech
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0A6C5B] shadow-xs group-hover:scale-105 transition-transform">
                    <Plus className="h-4 w-4 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-white leading-snug">
                    Outsource Operations
                  </h3>
                  <p className="text-white/90 text-xs sm:text-[13px] pt-1 leading-snug font-normal">
                    Let us run your day-to-day operations and tech so you can focus on growing your business.
                  </p>
                </div>
              </Link>

              {/* Box 4: Gigs & Sprints (Stripe Clean Pearl Surface) */}
              <Link
                href="/gigs"
                className="relative rounded-[22px] bg-gradient-to-br from-[#FFFFFF] via-[#FBFDFF] to-[#F4F7FB] border border-[#E3E8EE] p-4.5 sm:p-5 flex flex-col justify-between text-[#0A2540] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(10,37,64,0.12)] shadow-[0_4px_12px_rgba(10,37,64,0.04)] group min-h-[136px] sm:min-h-[148px] lg:min-h-[152px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#425466]">
                    Short-Term Projects
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#0A2540] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
                    <Plus className="h-4 w-4 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-[#0A2540] leading-snug">
                    Gigs & Sprints
                  </h3>
                  <p className="text-[#425466] text-xs sm:text-[13px] pt-1 leading-snug font-normal">
                    Get short-term 1–4 week projects completed by verified freelancers and specialists.
                  </p>
                </div>
              </Link>
            </div>

            {/* Box 5: Playbook (Deep Obsidian Slate - Non-Bright Executive Foundation) */}
            <Link
              href="/knowledge"
              className="relative rounded-[22px] bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] border border-white/10 p-4.5 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.5)] shadow-[0_8px_24px_-6px_rgba(0,0,0,0.3)] group"
            >
              <div className="space-y-1 max-w-xl xl:max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Knowledge Hub
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D4B2] animate-pulse" />
                  <span className="text-xs text-zinc-400">Founder Playbooks</span>
                </div>
                <h3 className="text-base sm:text-lg lg:text-[20px] font-bold text-white leading-snug">
                  Playbooks & Business Opportunities
                </h3>
                <p className="text-zinc-300/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                  Daily market research, validated business ideas, and practical guides on cash flow, legal setups, and fundraising.
                </p>
              </div>
              <div className="shrink-0 self-end sm:self-center">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#0F172A] transition-all">
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column: Video Showcase (5 cols on lg & xl) */}
          <div className="lg:col-span-5 xl:col-span-5 min-w-0 flex justify-center lg:justify-end items-stretch pt-2 sm:pt-4 lg:pt-0">
            <div className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-none flex flex-col justify-center">
              {/* Soft Ambient Brand Glow Behind Video (Stripe Luminous Ambient Halo) */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#635BFF]/18 via-[#00A68C]/10 to-[#00D4B2]/18 rounded-[36px] blur-2xl opacity-75 -z-10" />

              {/* Video Card Container - Generous Sizing to Fill Right Column with Fluid Mobile Scaling */}
              <div className="relative w-full min-h-[280px] sm:min-h-[360px] md:min-h-[460px] lg:min-h-[560px] xl:min-h-[600px] max-h-[660px] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(10,37,64,0.22)] border border-zinc-200/90 bg-zinc-950 isolate transform-gpu">
                <video
                  src="/videos/hero_video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  aria-label="1008 Network overview video showcase"
                  title="1008 Network overview video"
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
              aria-label="1008 Network on LinkedIn"
              className="hover:text-[#0A66C2] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/1008_network/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="1008 Network on Instagram"
              className="hover:text-[#E4405F] transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
