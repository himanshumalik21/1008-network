"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Users } from "lucide-react";

export function HomeBentoCta() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 z-20 overflow-hidden">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#0A2540] via-[#0D2E50] to-[#0A2540] border border-white/15 p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl overflow-hidden isolate">
          {/* Ambient Multi-Hue Halos */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#00D4B2]/18 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#635BFF]/22 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-[13px] font-mono font-semibold text-white/95 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#00D4B2]" />
              <span>Join India’s Business Building Community</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Build the Business <br className="hidden sm:inline" />
              You Know Should Exist?
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed font-normal">
              Whether you are an industry veteran with a strong thesis, a technical builder looking for commercial partners, or an angel investor seeking disciplined ventures — 1008 connects you directly.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/network"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#00D4B2] hover:bg-[#00BFA0] text-[#0A2540] font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Join 1008 Network</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#pathways"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/25 font-semibold text-sm sm:text-base transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore 5 Pathways</span>
              </a>
            </div>

            {/* Social Proof & Trust Strip */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-white/75 font-mono">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-[#00D4B2]" />
                <span>1,200+ Active Builders</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#635BFF]" />
                <span>Zero Broker / Intermediary Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D4B2] animate-pulse" />
                <span>Pan-India Operating Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
