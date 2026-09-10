"use client";

import React from "react";
import { Badge } from "@/components/brand/Badge";
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

export function ComparisonSection() {
  const comparison = [
    {
      dimension: "Incentive Alignment & Skin in the Game",
      studio1008: "Shared Equity & Milestone Upside. We only succeed when your enterprise generates real commercial value. Zero retainers.",
      agency: "High billable hourly fees & monthly retainer invoices. Zero financial risk if your business fails.",
      accelerator: "Takes 7%–10% equity for lecture cohorts and pitch days; provides zero physical build or operational muscle.",
      solo: "100% personal capital burn; high risk of costly trial-and-error mistakes and contractor exploitation.",
    },
    {
      dimension: "Physical Setup & Turnkey Commissioning",
      studio1008: "Complete Ground Execution: Land scouting, industrial plant setup, OEM machinery procurement & regulatory licensing.",
      agency: "None. Strictly limited to PowerPoint decks, brand logos, or superficial digital mockups.",
      accelerator: "None. The founder is left alone to navigate corrupt zoning, factory clearances, and contractor disputes.",
      solo: "Extremely vulnerable to vendor fraud, extortionate middleman markups, and regulatory delays.",
    },
    {
      dimension: "Pragmatic Systems & Lean Tech",
      studio1008: "Operational ERPs, feasibility MVPs & budget-aligned engineering talent sourcing with zero technical debt.",
      agency: "Junior outsourced developers who over-engineer brittle systems to maximize billable development hours.",
      accelerator: "None. Gives generic product advice without building production code or managing infrastructure.",
      solo: "Disorganized freelancer churn resulting in fractured codebases and massive wasted cash burn.",
    },
    {
      dimension: "Staffing, Go-To-Market & Revenue",
      studio1008: "Hires essential on-site operational managers & floor staff; drives targeted GTM to land opening customer revenue.",
      agency: "Vanity social media posts without sales pipelines, distributor tie-ups, or commercial purchase orders.",
      accelerator: "Demo Day pitch with no direct assistance in closing commercial clients or B2B distributors.",
      solo: "Founder is stretched thin between hiring, managing daily fires, and trying to close sales alone.",
    },
    {
      dimension: "Capital Access & Syndicate Matchmaking",
      studio1008: "We curate and present your de-risked business to our active syndicate of angel investors and family offices.",
      agency: "Zero investor introductions or syndication support.",
      accelerator: "Broad investor demo day with low individual attention and intense competition for attention.",
      solo: "Cold email pitches to VCs that rarely understand non-software operational unit economics.",
    },
    {
      dimension: "Duration & Exit to Autonomy",
      studio1008: "Structured phased handover engineered to make the founder completely self-reliant with zero vendor lock-in.",
      agency: "Incentivized to create vendor dependency and extend monthly retainer contracts indefinitely.",
      accelerator: "3-month cohort ending in a presentation, after which operational support disappears.",
      solo: "Indefinite survival battle leading to founder burnout and operational stagnation.",
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
                <th className="p-4 sm:p-5 text-[#635BFF] bg-[#F0F0FF] border-x-2 border-t-2 border-[#635BFF]/30 font-bold relative">
                  <div className="flex items-center justify-between">
                    <span>1008 Network</span>
                    <span className="text-[9px] bg-[#635BFF] text-white px-1.5 py-0.5 rounded font-extrabold normal-case">Venture Partner</span>
                  </div>
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
                  <td className="p-4 sm:p-5 bg-[#F0F0FF]/60 border-x-2 border-[#635BFF]/30 text-[#0A2540] font-semibold">
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
