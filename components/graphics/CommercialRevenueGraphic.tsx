"use client";

import React, { useState } from "react";
import { Target, TrendingUp, Users, CheckCircle2, ArrowUpRight, Flame } from "lucide-react";

export function CommercialRevenueGraphic() {
  const [activeChannel, setActiveChannel] = useState(0);

  const channels = [
    {
      icon: Target,
      title: "B2B Outbound Tools & Sales SDRs",
      sub: "Outbound Lead Software • Sourced SDR Talent",
      status: "Configured & Sourced",
      metric: "Sales Tooling",
      highlight: "We configure Apollo/CRM outbound tools, train sales workflows, and hire dedicated sales reps for your company.",
      color: "#635BFF",
      tag: "B2B Pipeline",
    },
    {
      icon: TrendingUp,
      title: "D2C Growth Stacks & Media Buying",
      sub: "Meta/Google Ads Setup • Blinkit/Zepto Listings",
      status: "Campaigns Active",
      metric: "Channel Scale",
      highlight: "We set up performance marketing ad accounts, analytics funnels, and facilitate onboardings onto quick-commerce platforms.",
      color: "#FF7043",
      tag: "Growth Tooling",
    },
    {
      icon: Users,
      title: "Vetted Executive Talent Sourcing",
      sub: "CTOs, Operations Leads & Finance Controllers",
      status: "Vetted & Hired",
      metric: "Direct Placements",
      highlight: "We screen, interview, and hire high-caliber operators directly into your business with tailored 90-day onboarding SOPs.",
      color: "#059669",
      tag: "Executive Talent",
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-gradient-to-b from-[#FAFBFD] to-[#F3F6FA] border border-[#E2E8F0] p-4 sm:p-5 relative overflow-hidden font-sans select-none shadow-sm">
      {/* Visual Accent Glow */}
      <div className="absolute top-0 right-0 w-64 h-32 bg-gradient-to-b from-[#FF7043]/10 to-transparent blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7043] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF7043]" />
          </span>
          <span className="text-xs font-bold tracking-tight text-[#0A2540]">
            Commercial GTM & Revenue Engine
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#FF7043] bg-[#FFF4ED] px-2 py-0.5 rounded border border-[#FFE0D2] font-bold flex items-center gap-1">
          <Flame className="h-3 w-3" /> Live Traction
        </span>
      </div>

      {/* Channel Cards */}
      <div className="relative z-10 my-3.5 space-y-2">
        {channels.map((ch, idx) => {
          const isSelected = activeChannel === idx;
          const Icon = ch.icon;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveChannel(idx)}
              className={`w-full p-2.5 sm:p-3 rounded-xl text-left transition-all border flex items-center justify-between gap-3 ${
                isSelected
                  ? "bg-white border-[#FF7043] shadow-sm ring-2 ring-[#FF7043]/20"
                  : "bg-white/80 border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-white"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? "bg-[#FFF4ED] text-[#F4511E] border border-[#FFE0D2]"
                      : "bg-[#F8FAFC] text-[#627D98] border border-[#E2E8F0]"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#0A2540] truncate">
                      {ch.title}
                    </span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded font-semibold bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0] shrink-0">
                      {ch.tag}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-[#627D98] truncate">
                    {ch.sub}
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="text-[10px] font-mono font-bold text-[#059669]">
                  {ch.metric}
                </div>
                <div className="text-[9px] font-mono text-[#627D98]">
                  {ch.status}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Channel Detail */}
      <div className="relative z-10 p-2.5 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-between text-xs shadow-xs gap-3">
        <p className="text-[11px] text-[#425466] leading-relaxed truncate sm:whitespace-normal font-medium">
          {channels[activeChannel].highlight}
        </p>
        <span className="text-[10px] font-mono font-bold text-[#635BFF] shrink-0 bg-[#F0F0FF] px-2 py-0.5 rounded border border-[#E0E0FF] flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3" /> Day 1 Revenue
        </span>
      </div>
    </div>
  );
}
