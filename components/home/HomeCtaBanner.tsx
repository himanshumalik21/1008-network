"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";

export function HomeCtaBanner() {
  return (
    <section className="py-20 sm:py-24 bg-[#0A2540] text-white relative overflow-hidden">
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-br from-[#635BFF]/25 via-[#00D4B2]/15 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-gradient-to-tr from-[#FF7043]/15 to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-boxes opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-[#00D4B2]" />
          <span>Start Co-Building Today</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
            Ready to build the business you know should exist?
          </h2>
          <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl mx-auto font-normal">
            Whether you need turnkey technical execution, missing co-founders, or curated capital discovery, 1008 provides the infrastructure to build enduring enterprises.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/studio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#635BFF] hover:bg-[#5851EA] text-white font-semibold text-sm shadow-[0_4px_14px_rgba(99,91,255,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Apply to Venture Studio</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/network"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Partner Network</span>
            <ArrowUpRight className="h-4 w-4 text-[#94A3B8]" />
          </Link>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#94A3B8]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-[#00D4B2]" />
            Zero Consulting Retainers
          </span>
          <span>•</span>
          <span>Standardized Milestone Equity</span>
          <span>•</span>
          <span>Pan-India Turnkey Operations</span>
        </div>
      </div>
    </section>
  );
}
