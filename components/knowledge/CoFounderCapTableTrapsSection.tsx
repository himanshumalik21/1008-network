"use client";

import React from "react";
import {
  AlertTriangle,
  Lightbulb,
  Clock,
  FolderGit2,
  XCircle,
  TrendingDown,
  ShieldAlert,
  Scale,
} from "lucide-react";

export function CoFounderCapTableTrapsSection() {
  const traps = [
    {
      number: "01",
      title: "Rewarding the 'Idea' Equally with 5-Year Execution",
      badge: "Valuation Trap",
      badgeColor: "text-[#C2410C] bg-[#FFF4ED] border-[#FFD8C2]",
      iconBg: "bg-[#FFF4ED] border-[#FFD8C2] text-[#FF7043]",
      icon: <Lightbulb className="h-5 w-5 text-[#FF7043]" />,
      summary:
        "Giving an equal 50% split because someone 'came up with the original concept' fatally overvalues ideation vs. multi-year execution muscle.",
      points: [
        {
          label: "5% vs 95% Rule",
          text: "An initial idea represents 5% of a company's terminal enterprise value; ground execution over the next 4 to 7 years represents 95%.",
        },
        {
          label: "Sweat Equity Dilution",
          text: "Equity must be earned through continuous full-time contribution, customer sales, and factory commissioning—not historical brainstorms.",
        },
      ],
      coreFlaw:
        "Ideas hold zero enterprise value without relentless ground operations and execution muscle.",
    },
    {
      number: "02",
      title: "Zero Reverse Vesting & Missing Cliff Provisions",
      badge: "Dead Equity Trap",
      badgeColor: "text-[#635BFF] bg-[#F0F0FF] border-[#E0E0FF]",
      iconBg: "bg-[#F0F0FF] border-[#E0E0FF] text-[#635BFF]",
      icon: <Clock className="h-5 w-5 text-[#635BFF]" />,
      summary:
        "Under the Indian Companies Act, once equity shares are allotted and stamped without reverse vesting, they cannot be forcibly repossessed by the company.",
      points: [
        {
          label: "The 90-Day Departure",
          text: "Without a 1-year cliff, a co-founder who leaves after 3 months retains permanent ownership forever, leaving the active founder to carry 100% of the burden.",
        },
        {
          label: "Due Diligence Paralysis",
          text: "Institutional angels and VCs will immediately reject any startup where 30%–50% of cap table is held by an uncommitted ex-operator.",
        },
      ],
      coreFlaw:
        "Never allot Day-1 shares without a legally binding Shareholders' Agreement (SHA) enforcing reverse vesting and pre-set buybacks.",
    },
    {
      number: "03",
      title: "Un-Assigned Intellectual Property (IP in Personal Accounts)",
      badge: "Asset Lock-In Trap",
      badgeColor: "text-[#DC2626] bg-[#FEF2F2] border-[#FECACA]",
      iconBg: "bg-[#FEF2F2] border-[#FECACA] text-[#DC2626]",
      icon: <FolderGit2 className="h-5 w-5 text-[#DC2626]" />,
      summary:
        "Codebases, industrial tooling drawings, trademarks, and cloud credentials often reside in a co-founder's personal GitHub, AWS, or domain registrar accounts.",
      points: [
        {
          label: "Hostage Risk",
          text: "When personal disputes erupt, the departing partner can lock out access to source code, domains, or manufacturing CAD files.",
        },
        {
          label: "Corporate Insolvency",
          text: "Without signed IP Assignment Agreements from Day 1, the corporate entity legally does not own its own core technology.",
        },
      ],
      coreFlaw:
        "Execute comprehensive IP Assignment documentation transferring 100% of technical and commercial assets to the Private Limited entity.",
    },
  ];

  return (
    <div className="space-y-6 my-8 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {traps.map((trap) => (
          <div
            key={trap.number}
            className="rounded-2xl bg-white border border-[#E6E8EB] p-6 flex flex-col justify-between hover:border-[#CBD5E1] transition-all duration-300 shadow-xs relative group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded border ${trap.badgeColor}`}>
                  {trap.badge}
                </span>
                <span className="text-xs font-mono font-bold text-[#8898AA]">
                  TRAP {trap.number}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl border ${trap.iconBg}`}>
                  {trap.icon}
                </div>
                <h3 className="text-base font-bold text-[#0A2540] leading-snug">
                  {trap.title}
                </h3>
              </div>

              <p className="text-xs text-[#425466] leading-relaxed">
                {trap.summary}
              </p>

              <div className="space-y-2.5 pt-2 border-t border-[#F1F4F8]">
                {trap.points.map((pt, pIdx) => (
                  <div key={pIdx} className="text-xs space-y-0.5">
                    <strong className="text-[#0A2540] block font-semibold">{pt.label}:</strong>
                    <span className="text-[#627D98] leading-relaxed block">{pt.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#F1F4F8] text-[11px] bg-[#F6F9FC] p-3 rounded-xl border border-[#E6E8EB] text-[#0A2540]">
              <strong className="text-[#635BFF] block font-mono uppercase text-[10px] mb-0.5">
                The Core Vulnerability:
              </strong>
              <span className="text-[#425466] leading-relaxed">{trap.coreFlaw}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
