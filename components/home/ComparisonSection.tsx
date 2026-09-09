"use client";

import React from "react";
import { Badge } from "@/components/brand/Badge";
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

export function ComparisonSection() {
  const comparison = [
    {
      dimension: "Business Model & Alignment",
      studio1008: "Shared Equity & Upside. Zero hourly consulting retainers.",
      agency: "High hourly fees & monthly retainers. Zero skin in the game.",
      accelerator: "Takes 7% equity for generic talks; zero code or product build.",
      solo: "100% personal cash burn with high opportunity cost.",
    },
    {
      dimension: "Software Engineering & Architecture",
      studio1008: "Senior in-house full-stack engineers building production Next.js/React.",
      agency: "Junior outsourced coders; low quality, brittle, unmaintainable.",
      accelerator: "None. Founder must find and recruit a technical CTO alone.",
      solo: "Managing disconnected freelancers on Upwork with high churn.",
    },
    {
      dimension: "Relationship Duration",
      studio1008: "180-Day Exit & Handover. Engineered for founder autonomy.",
      agency: "Incentivized to prolong development to bill more monthly retainers.",
      accelerator: "12-week batch ending in a Demo Day pitch.",
      solo: "Indefinite timeline leading to execution fatigue.",
    },
    {
      dimension: "Intellectual Property Ownership",
      studio1008: "100% IP & code assigned to your new corporate entity from Day 1.",
      agency: "Often held hostage until dispute-ridden final invoices are settled.",
      accelerator: "Owned by entity, but cap table is crowded early.",
      solo: "Disorganized IP contracts across multiple independent contractors.",
    },
    {
      dimension: "Target Founder Fit",
      studio1008: "10–20+ year senior corporate leaders, VPs, and industry experts.",
      agency: "Anyone with a credit card or bank transfer.",
      accelerator: "Primarily 20-something first-time founders without domain depth.",
      solo: "Solo operators risking career stability without team leverage.",
    },
  ];

  return (
    <section id="comparison" className="py-24 bg-white border-t border-[#E6E8EB] relative overflow-hidden">
      {/* Subtle Architectural Box Grid & Ambient Motion */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-[#635BFF]/05 via-[#00D4B2]/04 to-transparent blur-[140px] pointer-events-none animate-pulse-subtle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="indigo" size="sm">The Direct Comparison</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Why traditional paths fail domain leaders.
          </h2>
          <p className="text-[#425466] text-base sm:text-lg">
            Senior executives don&apos;t fail from lack of industry insight. They fail from broken execution models and misaligned incentives.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E6E8EB] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-[#E6E8EB] bg-[#F6F9FC] text-[#627D98] uppercase text-[11px] font-semibold tracking-wider">
              <tr>
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5 text-[#635BFF] bg-[#F0F0FF] border-x border-[#E0E0FF] font-bold">
                  1008 Venture Studio
                </th>
                <th className="p-4 sm:p-5">IT & Dev Agencies</th>
                <th className="p-4 sm:p-5">Standard Incubators</th>
                <th className="p-4 sm:p-5">Solo Freelancing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E6E8EB]">
              {comparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F6F9FC]/60 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-[#0A2540]">
                    {row.dimension}
                  </td>
                  <td className="p-4 sm:p-5 bg-[#F0F0FF]/40 border-x border-[#E0E0FF] text-[#0A2540] font-medium">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                      <span>{row.studio1008}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-[#627D98]">
                    <div className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500/80 shrink-0 mt-0.5" />
                      <span>{row.agency}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-[#627D98]">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500/80 shrink-0 mt-0.5" />
                      <span>{row.accelerator}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-[#627D98]">
                    <div className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500/80 shrink-0 mt-0.5" />
                      <span>{row.solo}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
