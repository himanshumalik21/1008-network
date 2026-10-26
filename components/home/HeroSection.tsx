"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

import { CommunityCarousel } from "@/components/home/CommunityCarousel";

const FlowingMeshCanvas = dynamic(
  () =>
    import("@/components/canvas/FlowingMeshCanvas").then(
      (mod) => mod.FlowingMeshCanvas
    ),
  { ssr: false }
);

export function HeroSection() {
  return (
    <section className="relative w-full flex flex-col justify-center items-center pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
      {/* 1. Subtle Architectural Background Grid */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-35 pointer-events-none" />

      {/* 2. Stripe-Grade Flowing Dynamic Mesh Silk Wave */}
      <FlowingMeshCanvas className="absolute inset-0 w-full h-full opacity-90 pointer-events-none z-0" />

      {/* 3. Ambient Lighting Glow Meshes */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-tr from-[#635BFF]/10 via-[#00D4B2]/08 to-transparent blur-[140px] pointer-events-none animate-float-slow" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-gradient-to-bl from-[#FF7043]/06 via-[#635BFF]/05 to-transparent blur-[130px] pointer-events-none animate-float-reverse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center space-y-10 sm:space-y-12">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" size="md" pulse className="text-xs sm:text-[13px] px-3.5 py-1 font-medium">
              1008 Network • The Entrepreneur & Business Community
            </Badge>
          </div>

          {/* Primary Headline: Company Vision */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-extrabold tracking-tight text-[#0A2540] leading-[1.1] font-sans">
            <span className="block text-[#64748B] text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
              1008 Community
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] via-[#635BFF] to-[#0D9488]">
              Helping your Business get closer to your Goals.
            </span>
          </h1>

          {/* Subtitle Lead */}
          <p className="text-base sm:text-lg md:text-xl text-[#425466] leading-relaxed max-w-2xl mx-auto font-normal">
            A collaborative business community designed around 4 distinct pathways to help you build, fund, and scale. Explore each pillar below:
          </p>

          {/* Primary Actions Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#what-we-do"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#635BFF] hover:bg-[#5851EA] text-white font-semibold text-sm shadow-[0_4px_14px_rgba(99,91,255,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Community Pillars</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/studio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#0A2540] border border-[#E2E8F0] font-semibold text-sm shadow-xs transition-all hover:border-[#CBD5E1]"
            >
              <span>Work With 1008</span>
              <ArrowUpRight className="h-4 w-4 text-[#64748B]" />
            </Link>
          </div>

          {/* Quick Playbook Navigation Link */}
          <div className="pt-1 flex items-center justify-center gap-2 text-xs text-[#64748B]">
            <span>Looking for tactical venture blueprints?</span>
            <Link
              href="/knowledge"
              className="font-semibold text-[#635BFF] hover:text-[#5851EA] inline-flex items-center gap-0.5 hover:underline"
            >
              Explore 1008 Playbook <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Interactive Community Carousel Stage */}
        <CommunityCarousel />

        {/* Bottom Social Proof / Trust Strip */}
        <div className="w-full max-w-4xl mx-auto pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E2E8F0]/70 text-xs text-[#64748B]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00A389] animate-pulse" />
            <span className="font-medium text-[#475569]">Pan-India Co-Building Operations</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] font-mono">
            <span>🏭 Industrial & Supply Chain</span>
            <span>⚡ Vertical Software</span>
            <span>🌿 Scaled D2C</span>
            <span>🏥 Healthcare Ops</span>
          </div>
        </div>
      </div>
    </section>
  );
}
