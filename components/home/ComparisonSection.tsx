"use client";

import React from "react";
import { Badge } from "@/components/brand/Badge";
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

export function ComparisonSection() {
  const comparison = [
    {
      dimension: "Business Model & Alignment",
      studio1008: "Shared Equity & Upside. You fund capital, we run operations. Zero consulting fees.",
      agency: "High hourly fees & monthly retainers. Zero skin in the game.",
      accelerator: "Takes 7% equity for generic talks; zero physical or operational build.",
      solo: "100% personal cash burn with high trial-and-error friction.",
    },
    {
      dimension: "Physical Setup & Infrastructure",
      studio1008: "Turnkey: Real estate scouting, plant setup, machinery procurement & regulatory paperwork.",
      agency: "None. Strictly limited to slide decks or basic marketing.",
      accelerator: "None. Founder must navigate industrial zoning & machinery procurement alone.",
      solo: "High risk of vendor fraud, delays, and exorbitant middleman markups.",
    },
    {
      dimension: "Tech, Systems & Feasibility",
      studio1008: "0-to-1 operational systems, feasibility MVPs + vetted tech team hiring based on budget.",
      agency: "Junior outsourced coders; low quality, brittle, zero operational understanding.",
      accelerator: "None. Founder must figure out tech stack and developer hiring alone.",
      solo: "Managing disconnected freelancers with high churn and cash burn.",
    },
    {
      dimension: "Manpower, GTM & First Customers",
      studio1008: "Hiring plant/hospital/hotel/tech staff + launch marketing to land initial paying customers.",
      agency: "Generic social media posts without sales pipelines or distribution deals.",
      accelerator: "Demo Day pitch with no direct customer acquisition execution.",
      solo: "Struggles to recruit talent and close early commercial accounts simultaneously.",
    },
    {
      dimension: "Target Partner Fit",
      studio1008: "Manufacturing, healthcare, hotels, schools, e-commerce, trading, tech & business turnarounds.",
      agency: "Anyone who pays monthly invoices.",
      accelerator: "Early tech pitches matching narrow venture capital trends.",
      solo: "Solo operators risking burnout across dozens of operational silos.",
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
            Why traditional paths fail ambitious businesses.
          </h2>
          <p className="text-[#425466] text-base sm:text-lg">
            Great businesses don&apos;t fail from lack of vision. They fail from execution fatigue, contractor markups, and disconnected operational silos.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E6E8EB] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-[#E6E8EB] bg-[#F6F9FC] text-[#627D98] uppercase text-[11px] font-semibold tracking-wider">
              <tr>
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5 text-[#635BFF] bg-[#F0F0FF] border-x border-[#E0E0FF] font-bold">
                  1008 Network
                </th>
                <th className="p-4 sm:p-5">Consulting Agencies</th>
                <th className="p-4 sm:p-5">Standard Incubators</th>
                <th className="p-4 sm:p-5">Solo Bootstrapping</th>
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
