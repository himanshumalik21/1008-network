"use client";

import React from "react";
import {
  FileX2,
  Database,
  Clock,
  AlertTriangle,
  XCircle,
  FileSpreadsheet,
  Layers,
  Sparkles,
} from "lucide-react";

export function LenderRejectionTrapsSection() {
  const points = [
    {
      number: "01",
      title: "The GST Reconciliation Gap",
      badge: "Tax Data Mismatch",
      badgeColor: "text-[#C2410C] bg-[#FFF4ED] border-[#FFD8C2]",
      iconBg: "bg-[#FFF4ED] border-[#FFD8C2] text-[#FF7043]",
      icon: <FileX2 className="h-5 w-5 text-[#FF7043]" />,
      summary:
        "Differences between your tax filings immediately trigger automated fraud & risk flags inside modern algorithmic credit engines.",
      details: [
        {
          label: "GSTR-1 vs. GSTR-3B Variance",
          text: "Sales reported in monthly GSTR-1 that don't match actual tax paid in GSTR-3B flag the business as high risk.",
        },
        {
          label: "Unclaimed Input Tax Credit",
          text: "Failing to reconcile purchase invoices against vendor GSTR-2B filings signals weak financial controls.",
        },
      ],
      impact:
        "Instant algorithmic rejection by bank digital underwriting models before human review.",
    },
    {
      number: "02",
      title: "Fragmented Offline Accounting",
      badge: "Visibility Breakdown",
      badgeColor: "text-[#635BFF] bg-[#F0F0FF] border-[#E0E0FF]",
      iconBg: "bg-[#F0F0FF] border-[#E0E0FF] text-[#635BFF]",
      icon: <FileSpreadsheet className="h-5 w-5 text-[#635BFF]" />,
      summary:
        "Running operations on disconnected offline Tally or Excel sheets breaks the digital trail needed for modern credit assessment.",
      details: [
        {
          label: "Disconnected Ledgers",
          text: "Bank transactions, inventory movements, and customer invoices exist in silos without live digital verification.",
        },
        {
          label: "Account Aggregator Failure",
          text: "When credit algorithms scan your Account Aggregator feed, they encounter erratic cash-flow velocity and unverified revenue.",
        },
      ],
      impact:
        "Banks cannot verify real-time unit margins, forcing them to demand heavy physical real estate collateral.",
    },
    {
      number: "03",
      title: "Un-Factored Receivables & Late Debtors",
      badge: "Working Capital Trap",
      badgeColor: "text-[#991B1B] bg-[#FEF2F2] border-[#FEE2E2]",
      iconBg: "bg-[#FEF2F2] border-[#FEE2E2] text-[#EF4444]",
      icon: <Clock className="h-5 w-5 text-[#EF4444]" />,
      summary:
        "Letting corporate receivables drag beyond 90 days without statutory invoice discounting traps operating liquidity.",
      details: [
        {
          label: "Aged Corporate Debtors",
          text: "Enterprise clients take 90+ days to settle invoices, starving your manufacturing and component supply chain.",
        },
        {
          label: "Absence of TReDS Factoring",
          text: "Without discounting invoices on RBI's TReDS rails, lenders classify aged debtor books as impending NPAs.",
        },
      ],
      impact:
        "Forces desperate founders into 24% predatory NBFC debt to bridge supplier payroll and inventory cycles.",
    },
  ];

  return (
    <div className="my-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {points.map((item) => (
          <div
            key={item.number}
            className="rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-5 sm:p-6 flex flex-col justify-between hover:border-[#CBD5E1] transition-all duration-300 shadow-2xs hover:shadow-xs group"
          >
            <div className="space-y-4">
              {/* Header: Number and Badge */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black font-mono text-[#CBD5E1] group-hover:text-[#635BFF] transition-colors">
                  {item.number}
                </span>
                <span
                  className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-xl border ${item.iconBg} shrink-0 mt-0.5`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0A2540] group-hover:text-[#635BFF] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-xs text-[#425466] leading-relaxed">
                {item.summary}
              </p>

              {/* Key Bullet Breakdown */}
              <div className="pt-3 border-t border-[#E6E8EB] space-y-2.5">
                {item.details.map((detail, dIdx) => (
                  <div key={dIdx} className="space-y-0.5">
                    <span className="text-[11px] font-bold text-[#0A2540] block">
                      • {detail.label}:
                    </span>
                    <span className="text-[11px] text-[#627D98] leading-normal block pl-2.5">
                      {detail.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Warning Footer */}
            <div className="mt-5 pt-3 border-t border-[#E6E8EB]/70 bg-white/70 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 rounded-b-2xl flex items-start gap-2 border-dashed">
              <AlertTriangle className="h-3.5 w-3.5 text-[#FF7043] shrink-0 mt-0.5" />
              <p className="text-[11px] text-[#7A3E26] font-medium leading-tight">
                <strong>Underwriting Impact:</strong> {item.impact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
