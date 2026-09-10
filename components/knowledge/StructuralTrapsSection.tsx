"use client";

import React from "react";
import {
  AlertTriangle,
  Code2,
  Users2,
  FileSpreadsheet,
  Megaphone,
  XCircle,
  TrendingDown,
  ShieldAlert,
} from "lucide-react";

export function StructuralTrapsSection() {
  const traps = [
    {
      number: "01",
      title: "The 'Agency & Consultant' Retainer Sinkhole",
      badge: "Cash Drain Trap",
      badgeColor: "text-[#EF4444] bg-[#FEF2F2] border-[#FCA5A5]",
      icon: <Megaphone className="h-5 w-5 text-[#EF4444]" />,
      summary:
        "When founders lack technical or growth capabilities, they default to third-party retainers who carry zero financial downside if the venture fails.",
      points: [
        {
          label: "Dev Agencies",
          text: "Bill ₹5L to ₹15L for an MVP, deliver rigid undocumented code, and bill high hourly rates for every minor bug fix.",
        },
        {
          label: "Marketing Agencies",
          text: "Charge ₹50k to ₹1.5L/month in fixed retainers plus ad spend for vanity clicks and unvetted traffic.",
        },
      ],
      coreFlaw:
        "Their business model is billing your invoice on the 1st of every month—regardless of your bottom-line profit.",
    },
    {
      number: "02",
      title: "The 50/50 Handshake and the Broken Cap Table",
      badge: "Governance Trap",
      badgeColor: "text-[#F59E0B] bg-[#FFFBEB] border-[#FDE68A]",
      icon: <Users2 className="h-5 w-5 text-[#F59E0B]" />,
      summary:
        "Informal 50/50 equity splits agreed over coffee without milestone vesting create unresolvable dead equity when a founder burns out.",
      points: [
        {
          label: "Inactive Equity",
          text: "Without a formal Shareholders' Agreement (SHA) with 4-year reverse vesting, an inactive partner walks away keeping 50% of the company.",
        },
        {
          label: "Fatal Stagnation",
          text: "The active founder is left doing 100% of the work with 50% ownership, rendering the startup completely un-investable to outside capital.",
        },
      ],
      coreFlaw:
        "Never incorporate without 4-year reverse vesting with a 1-year cliff and explicit IP assignment.",
    },
    {
      number: "03",
      title: "Operational Chaos: Running by WhatsApp and Spreadsheets",
      badge: "Operations Trap",
      badgeColor: "text-[#635BFF] bg-[#F5F3FF] border-[#C7D2FE]",
      icon: <FileSpreadsheet className="h-5 w-5 text-[#635BFF]" />,
      summary:
        "When order volumes and customer queries begin arriving, manual unintegrated workflows trigger catastrophic operational blindness.",
      points: [
        {
          label: "Inventory Mismatch",
          text: "Godown inventory counts fail to reconcile with bank receipts, leading to stockouts and shipping errors.",
        },
        {
          label: "Lost In Chat Threads",
          text: "Vendor purchase orders sit buried in WhatsApp chats, while unmonitored return rates quietly erase operating profit.",
        },
      ],
      coreFlaw:
        "Without an integrated Cloud ERP backbone on Day 1, founders spend 80% of their energy firefighting administrative friction.",
    },
  ];

  return (
    <div className="my-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {traps.map((trap) => (
          <div
            key={trap.number}
            className="rounded-2xl bg-white border border-[#E6E8EB] p-6 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border ${trap.badgeColor}`}>
                  TRAP {trap.number}
                </span>
                <div className="p-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                  {trap.icon}
                </div>
              </div>

              <h4 className="text-base font-extrabold text-[#0A2540] leading-snug">
                {trap.title}
              </h4>

              <p className="text-xs text-[#627D98] leading-relaxed">
                {trap.summary}
              </p>

              <div className="space-y-2 pt-2">
                {trap.points.map((pt, pIdx) => (
                  <div key={pIdx} className="text-xs text-[#425466] bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E2E8F0]/60">
                    <strong className="text-[#0A2540] block mb-0.5">{pt.label}:</strong>
                    <span>{pt.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-[#F1F5F9] text-[11px] font-mono text-[#EF4444] flex items-start gap-1.5">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
              <span>{trap.coreFlaw}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
