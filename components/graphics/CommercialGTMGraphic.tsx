"use client";

import React, { useState } from "react";
import { Users, TrendingUp, MapPin, CheckCircle2, Award, Briefcase } from "lucide-react";

export function CommercialGTMGraphic() {
  const [selectedHub, setSelectedHub] = useState<number>(0);

  const hubs = [
    {
      region: "North Corridor (Delhi NCR / Haryana)",
      dealers: "14 Verified B2B Dealers",
      volume: "₹12.5L Monthly POs",
      lead: "Key Account Manager Placed",
      status: "Active Delivery",
      color: "#635BFF",
    },
    {
      region: "West Corridor (Pune / Maharashtra)",
      dealers: "9 Regional Stockists",
      volume: "₹8.2L Monthly POs",
      lead: "Industrial Sales Lead Onboarded",
      status: "Expanding",
      color: "#00D4B2",
    },
    {
      region: "South Corridor (Bengaluru / Karnataka)",
      dealers: "6 Tech & Enterprise Clients",
      volume: "₹6.4L Monthly POs",
      lead: "Operations Supervisor Locked",
      status: "Pilot Phase",
      color: "#FF7043",
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
            Commercial GTM & Key Hiring Engine
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#A7F3D0] font-bold">
          FIRST REVENUE
        </span>
      </div>

      {/* Regional Corridor Cards */}
      <div className="relative z-10 my-3.5 space-y-2">
        {hubs.map((hub, idx) => {
          const isSelected = selectedHub === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedHub(idx)}
              className={`w-full p-2.5 rounded-xl text-left transition-all border flex items-center justify-between gap-3 ${
                isSelected
                  ? "bg-white border-[#635BFF] shadow-xs"
                  : "bg-white/80 border-[#E6E8EB] hover:border-[#CBD5E1]"
              }`}
            >
              <div className="space-y-0.5 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: hub.color }} />
                  <span className="text-xs font-bold text-[#0A2540] truncate">{hub.region}</span>
                </div>
                <div className="text-[11px] font-mono text-[#627D98] flex items-center gap-2">
                  <span>{hub.dealers}</span>
                  <span>•</span>
                  <span className="text-[#059669] font-bold">{hub.volume}</span>
                </div>
              </div>

              <span className="text-[10px] font-mono font-bold text-[#635BFF] shrink-0 bg-[#F0F0FF] px-2 py-0.5 rounded border border-[#E0E0FF]">
                {hub.status}
              </span>
            </button>
          );
        })}
      </div>

      {/* Roster Placement Telemetry */}
      <div className="relative z-10 p-2.5 rounded-xl bg-white border border-[#E6E8EB] flex items-center justify-between text-xs shadow-2xs">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-[#059669]" />
          <span className="text-[11px] text-[#0A2540] font-bold">
            {hubs[selectedHub].lead}
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#627D98] font-semibold">
          Strict SOPs Handed Over
        </span>
      </div>
    </div>
  );
}
