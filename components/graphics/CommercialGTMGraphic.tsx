"use client";

import React, { useState } from "react";
import { Target, TrendingUp, Users, CheckCircle2, ArrowUpRight } from "lucide-react";

export function CommercialGTMGraphic() {
  const [selectedChannel, setSelectedChannel] = useState<number>(0);

  const channels = [
    {
      icon: Target,
      label: "B2B & Enterprise Pipelines",
      stack: "Decision-Maker Outreach • Pilot Contracts",
      status: "Active Pipeline",
      statusColor: "indigo",
      metric: "₹18.5L Pilot Value",
      detail: "Outbound SDR workflows and enterprise sales decks securing initial paid contracts and recurring POs.",
      tag: "B2B Outreach",
    },
    {
      icon: TrendingUp,
      label: "D2C & Omnichannel Launch",
      stack: "Performance Ads • Marketplaces • Quick-Comm",
      status: "CAC Optimized",
      statusColor: "emerald",
      metric: "4.2x ROAS Target",
      detail: "High-converting storefronts, performance ad campaigns, and instant channel distribution.",
      tag: "Growth Engine",
    },
    {
      icon: Users,
      label: "Founding Operators & Leads",
      stack: "Core Leads • 90-Day Execution Playbook",
      status: "SOPs Handed Over",
      statusColor: "cyan",
      metric: "Key Leads Vetted",
      detail: "Top-tier operational, engineering, and sales talent vetted and onboarded with governance SOPs.",
      tag: "Talent Roster",
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E6E8EB] p-4 sm:p-5 relative overflow-hidden font-sans select-none shadow-xs">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#E6E8EB]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF7043] animate-pulse" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0A2540]">
            Commercial GTM & Revenue Engine
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#A7F3D0] font-bold">
          FIRST REVENUE
        </span>
      </div>

      {/* GTM Channels */}
      <div className="relative z-10 my-3.5 space-y-2">
        {channels.map((ch, idx) => {
          const isSelected = selectedChannel === idx;
          const Icon = ch.icon;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedChannel(idx)}
              className={`w-full p-2.5 sm:p-3 rounded-xl text-left transition-all border flex items-center justify-between gap-3 ${
                isSelected
                  ? "bg-white border-[#FF7043] shadow-xs ring-1 ring-[#FF7043]/20"
                  : "bg-white/80 border-[#E6E8EB] hover:border-[#CBD5E1] hover:bg-white"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border ${
                    isSelected
                      ? "bg-[#FFF4ED] text-[#F4511E] border-[#FFE0D2]"
                      : "bg-[#F8FAFC] text-[#627D98] border-[#E6E8EB]"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#0A2540] truncate">
                      {ch.label}
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded font-semibold bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0] shrink-0">
                      {ch.tag}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-[#627D98] truncate flex items-center gap-1.5">
                    <span>{ch.stack}</span>
                    <span>•</span>
                    <span className="text-[#059669] font-bold">{ch.metric}</span>
                  </div>
                </div>
              </div>

              <span
                className={`text-[10px] font-mono font-bold shrink-0 px-2 py-0.5 rounded border ${
                  ch.statusColor === "emerald"
                    ? "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]"
                    : ch.statusColor === "indigo"
                    ? "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]"
                    : "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]"
                }`}
              >
                {ch.status}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Channel Detail */}
      <div className="relative z-10 p-2.5 rounded-xl bg-white border border-[#E6E8EB] flex items-center justify-between text-xs shadow-2xs gap-3">
        <p className="text-[11px] text-[#425466] leading-relaxed truncate">
          {channels[selectedChannel].detail}
        </p>
        <span className="text-[10px] font-mono font-bold text-[#635BFF] shrink-0 bg-[#F0F0FF] px-2 py-0.5 rounded border border-[#E0E0FF] flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3" /> Live Traction
        </span>
      </div>
    </div>
  );
}
