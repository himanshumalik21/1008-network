"use client";

import React from "react";
import {
  TrendingDown,
  AlertTriangle,
  Flame,
  ArrowDown,
  Wallet,
  Code2,
  Megaphone,
  Scale,
  XCircle,
  Clock,
} from "lucide-react";

export function FounderCashDrainGraphic() {
  return (
    <div className="my-8 rounded-2xl bg-gradient-to-b from-[#0A2540] to-[#0F172A] border border-[#1E293B] p-6 sm:p-8 text-white shadow-xl overflow-hidden relative">
      {/* Background glowing ambient light */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EF4444]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#635BFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#EF4444]/20 border border-[#EF4444]/30 text-[#F87171]">
              <Flame className="h-4 w-4" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F87171]">
              The Startup Cash Drain Anatomy
            </span>
          </div>
          <span className="text-xs font-mono text-[#94A3B8] flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-[#F59E0B]" />
            Timeline: Months 1 to 6
          </span>
        </div>

        {/* Step 1: Initial Capital */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md rounded-xl bg-gradient-to-r from-[#1E293B] to-[#334155] border border-white/20 p-4 text-center shadow-md">
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#38BDF8] font-bold uppercase tracking-wider mb-1">
              <Wallet className="h-4 w-4" />
              <span>Starting Runway</span>
            </div>
            <div className="text-lg sm:text-xl font-extrabold text-white">
              Founder Savings / Seed Capital: <span className="text-[#38BDF8]">₹15L – ₹30L</span>
            </div>
          </div>

          <div className="my-3 flex flex-col items-center text-[#94A3B8]">
            <div className="w-0.5 h-5 bg-gradient-to-b from-white/30 to-[#EF4444]" />
            <ArrowDown className="h-4 w-4 text-[#EF4444] -mt-1" />
          </div>
        </div>

        {/* Step 2: The Three Bleeding Outflows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Outflow 1 */}
          <div className="rounded-xl bg-[#1E1B2E]/90 border border-[#EF4444]/40 p-4 space-y-2 hover:border-[#EF4444] transition-all">
            <div className="flex items-center justify-between">
              <span className="p-1.5 rounded-md bg-[#EF4444]/20 text-[#F87171]">
                <Code2 className="h-4 w-4" />
              </span>
              <span className="text-xs font-mono font-bold text-[#F87171] bg-[#EF4444]/10 px-2 py-0.5 rounded border border-[#EF4444]/30">
                - ₹6L to ₹12L
              </span>
            </div>
            <h4 className="text-sm font-bold text-white">Dev Agency (Outsourced MVP)</h4>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Rigid, undocumented codebase. Charges steep hourly rates for minor bug fixes with zero post-launch ownership.
            </p>
          </div>

          {/* Outflow 2 */}
          <div className="rounded-xl bg-[#1E1B2E]/90 border border-[#EF4444]/40 p-4 space-y-2 hover:border-[#EF4444] transition-all">
            <div className="flex items-center justify-between">
              <span className="p-1.5 rounded-md bg-[#EF4444]/20 text-[#F87171]">
                <Megaphone className="h-4 w-4" />
              </span>
              <span className="text-xs font-mono font-bold text-[#F87171] bg-[#EF4444]/10 px-2 py-0.5 rounded border border-[#EF4444]/30">
                - ₹3L to ₹6L
              </span>
            </div>
            <h4 className="text-sm font-bold text-white">Digital Marketing Retainers</h4>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              ₹50k–₹1.5L/month fixed retainer fees + ad spend. Delivers vanity clicks and traffic that fails to convert.
            </p>
          </div>

          {/* Outflow 3 */}
          <div className="rounded-xl bg-[#1E1B2E]/90 border border-[#EF4444]/40 p-4 space-y-2 hover:border-[#EF4444] transition-all">
            <div className="flex items-center justify-between">
              <span className="p-1.5 rounded-md bg-[#EF4444]/20 text-[#F87171]">
                <Scale className="h-4 w-4" />
              </span>
              <span className="text-xs font-mono font-bold text-[#F87171] bg-[#EF4444]/10 px-2 py-0.5 rounded border border-[#EF4444]/30">
                - ₹1.5L to ₹3L
              </span>
            </div>
            <h4 className="text-sm font-bold text-white">Legal / Advisory Retainers</h4>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Air-conditioned PowerPoint advice and generic templates. Disconnected from factory floor or unit economics.
            </p>
          </div>
        </div>

        {/* Step 3: The Fatal Outcome */}
        <div className="flex flex-col items-center">
          <div className="my-2 flex flex-col items-center text-[#EF4444]">
            <div className="w-0.5 h-5 bg-[#EF4444]" />
            <ArrowDown className="h-4 w-4 -mt-1" />
          </div>

          <div className="w-full rounded-xl bg-gradient-to-r from-[#450A0A] to-[#1F0707] border-2 border-[#EF4444]/80 p-5 text-center shadow-lg">
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#FCA5A5] font-bold uppercase tracking-wider mb-1">
              <XCircle className="h-4 w-4 text-[#EF4444]" />
              <span>Month 6 Failure State</span>
            </div>
            <div className="text-base sm:text-lg font-bold text-white">
              ₹0 Runway Remaining • Zero Paying Customer Retention • Severe Founder Burnout
            </div>
            <div className="mt-2 text-xs text-[#FCA5A5] font-mono">
              Result: 82% of early startups fold because cash was burned on monthly retainers before product-market fit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
