"use client";

import React from "react";
import { Users, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export function NetworkRadarGraphic() {
  return (
    <div className="w-full rounded-2xl bg-white border border-[#E6E8EB] p-5 relative overflow-hidden font-sans shadow-xs">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#F1F5F9_1px,transparent_1px),linear-gradient(to_bottom,#F1F5F9_1px,transparent_1px)] bg-[size:16px_16px] opacity-70" />
      
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#635BFF] animate-pulse" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0A2540]">
            1008 Matchmaking Radar // Active High-Conviction Pairs
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#A7F3D0] font-bold">
          MUTUAL NDA
        </span>
      </div>

      {/* Network Pairing Graphic */}
      <div className="relative z-10 my-4 grid grid-cols-1 sm:grid-cols-3 gap-3 items-center text-center">
        {/* Domain Founder Node */}
        <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1 shadow-2xs">
          <span className="text-[9px] font-mono font-bold text-[#635BFF] uppercase">DOMAIN FOUNDER</span>
          <div className="text-xs font-bold text-[#0A2540]">Rajesh S.</div>
          <p className="text-[10px] text-[#627D98]">18y HealthTech Logistics</p>
          <div className="text-[9px] font-mono font-bold text-[#059669] bg-white px-1.5 py-0.5 rounded border border-[#E6E8EB]">
            Vision + 20% Equity
          </div>
        </div>

        {/* Center Connecting Pulse Hub */}
        <div className="flex flex-col items-center justify-center p-2">
          <div className="w-10 h-10 rounded-full bg-[#F0F0FF] border border-[#635BFF]/30 text-[#635BFF] flex items-center justify-center shadow-xs">
            <Sparkles className="h-5 w-5 animate-pulse" />
          </div>
          <span className="text-[10px] font-mono font-bold text-[#635BFF] mt-1">1008 CURATED MATCH</span>
        </div>

        {/* Matching Operator Node */}
        <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1 shadow-2xs">
          <span className="text-[9px] font-mono font-bold text-[#00D4B2] uppercase">TECHNICAL CTO</span>
          <div className="text-xs font-bold text-[#0A2540]">Arun V.</div>
          <p className="text-[10px] text-[#627D98]">Ex-Staff Eng (IoT & Cloud)</p>
          <div className="text-[9px] font-mono font-bold text-[#635BFF] bg-white px-1.5 py-0.5 rounded border border-[#E6E8EB]">
            Builds Core Engine
          </div>
        </div>
      </div>

      {/* Bottom Trust Row */}
      <div className="relative z-10 pt-3 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between text-[11px] text-[#627D98]">
        <span className="flex items-center gap-1 font-semibold text-[#0A2540]">
          <CheckCircle2 className="h-3.5 w-3.5 text-[#059669]" /> Direct Equity Alignment
        </span>
        <span className="font-mono">Avg Match Time: 14 Days</span>
      </div>
    </div>
  );
}
