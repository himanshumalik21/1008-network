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
      {/* 1. COMMUNITY ECOSYSTEM BENTO GRID (The 5 Growth Pathways) */}
      {/* ============================================================ */}
      <section id="pathways" className="w-full bg-white text-[#0A2540] pt-24 pb-16 sm:pt-28 sm:pb-24 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
          {/* Section Heading */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold border border-zinc-200 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#00D4B2] animate-pulse" />
              <span>1008 Network • The Entrepreneur & Business Community</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#0A2540] leading-[1.08]">
              One community. <br />
              Five growth pathways.
            </h1>
            <p className="text-[#425466] text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
              Explore co-founders, capital discovery, turnkey operational outsourcing, project gigs, and tactical playbooks—backed by standardized legal rails and zero broker markups.
            </p>
          </div>

          {/* 5-Tile Bento Grid (Aligned 3-Column Layout matching reference boxes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {/* Tile 1: Playbook (Tall Crimson Card on Left) */}
            <Link
              href="/knowledge"
              className="relative rounded-[28px] bg-[#E6004C] hover:bg-[#D60044] p-7 sm:p-8 flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group min-h-[300px] md:col-span-2 lg:col-span-1 lg:row-span-2"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  Knowledge Hub
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug pt-2">
                  Playbook
                </h3>
                <p className="text-white/90 text-sm pt-2 leading-relaxed font-normal">
                  Standardized founder templates, milestone vesting agreements, cap tables, and regulatory blueprints for Indian ventures.
                </p>
              </div>
              <div className="pt-8">
                <div className="w-11 h-11 rounded-full border-2 border-white/90 flex items-center justify-center group-hover:bg-white group-hover:text-[#E6004C] transition-colors">
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Tile 2: Funding & Investors (Vibrant Orange - Top Center) */}
            <Link
              href="/capital"
              className="relative rounded-[28px] bg-[#FF5400] hover:bg-[#F04F00] p-7 min-h-[255px] flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="self-end w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#FF5400] shadow-sm">
                <Plus className="h-5 w-5 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                  Funding & Investors
                </h3>
                <p className="text-white/90 text-sm pt-2 leading-relaxed font-normal">
                  Connect evaluated startups directly with active angels & family offices with 0% broker cuts.
                </p>
              </div>
            </Link>

            {/* Tile 3: Outsource Operations (Light Grey - Top Right) */}
            <Link
              href="/studio"
              className="relative rounded-[28px] bg-[#EAECEF] hover:bg-[#E2E5E9] p-7 min-h-[255px] flex flex-col justify-between text-[#0A2540] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="self-end w-9 h-9 rounded-full bg-[#8B00FF] flex items-center justify-center text-white shadow-sm">
                <Plus className="h-5 w-5 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2540] leading-snug">
                  Outsource Operations
                </h3>
                <p className="text-[#425466] text-sm pt-2 leading-relaxed font-normal">
                  1008 as your turnkey execution arm—cloud architecture, private ERPs, and factory audits.
                </p>
              </div>
            </Link>

            {/* Tile 4: Gigs & Sprints (Light Grey - Bottom Center) */}
            <Link
              href="/gigs"
              className="relative rounded-[28px] bg-[#EAECEF] hover:bg-[#E2E5E9] p-7 min-h-[255px] flex flex-col justify-between text-[#0A2540] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="self-end w-9 h-9 rounded-full bg-[#E6004C] flex items-center justify-center text-white shadow-sm">
                <Plus className="h-5 w-5 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2540] leading-snug">
                  Gigs & Sprints
                </h3>
                <p className="text-[#425466] text-sm pt-2 leading-relaxed font-normal">
                  Post urgent project requirements or pick up milestone-gated 2–4 week deliverables.
                </p>
              </div>
            </Link>

            {/* Tile 5: Co-Founders & Talent (Electric Purple - Bottom Right) */}
            <Link
              href="/network"
              className="relative rounded-[28px] bg-[#8B00FF] hover:bg-[#7D00E5] p-7 min-h-[255px] flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="self-end w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#8B00FF] shadow-sm">
                <Plus className="h-5 w-5 stroke-[2.5] group-hover:rotate-90 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                  Co-Founders & Talent
                </h3>
                <p className="text-white/90 text-sm pt-2 leading-relaxed font-normal">
                  Find vetted Technical CTOs, GTM heads, or join an ambitious startup for milestone equity.
                </p>
              </div>
            </Link>
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
