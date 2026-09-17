"use client";

import React from "react";
import {
  FileCheck2,
  Database,
  Landmark,
  Rocket,
  CheckCircle2,
  Clock,
  ArrowRight,
  Zap,
  Layers,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface CreditPhaseData {
  step: string;
  timeframe: string;
  title: string;
  headline: string;
  badgeBg: string;
  badgeColor: string;
  iconBg: string;
  icon: React.ReactNode;
  actions: string[];
}

export function CreditPlaybookPhases() {
  const phases: CreditPhaseData[] = [
    {
      step: "01",
      timeframe: "Days 1 – 10",
      title: "GST & Bank Data Integrity Audit",
      headline: "Eliminate discrepancies between reported revenue, tax filings, and bank credits.",
      badgeBg: "bg-[#FFF4ED] border-[#FFD8C2]",
      badgeColor: "text-[#C2410C]",
      iconBg: "bg-[#FFF4ED] border-[#FFD8C2] text-[#FF7043]",
      icon: <FileCheck2 className="h-5 w-5 text-[#FF7043]" />,
      actions: [
        "Audit 12 months of GSTR-1 (sales) vs. GSTR-3B (tax paid) to eliminate variance flags.",
        "Reconcile vendor Input Tax Credit (ITC) in GSTR-2B to maintain pristine compliance scores.",
        "Verify bank statements match reported invoices to pass automated Account Aggregator checks.",
      ],
    },
    {
      step: "02",
      timeframe: "Days 11 – 25",
      title: "Cloud ERP Deployment & Live Cash Ledger",
      headline: "Unite purchase orders, inventory, and live banking into a single audit-ready ledger.",
      badgeBg: "bg-[#F0F0FF] border-[#E0E0FF]",
      badgeColor: "text-[#635BFF]",
      iconBg: "bg-[#F0F0FF] border-[#E0E0FF] text-[#635BFF]",
      icon: <Database className="h-5 w-5 text-[#635BFF]" />,
      actions: [
        "Deploy a customized Cloud ERP (Frappe/ERPNext or Odoo) integrated with GST e-Invoicing.",
        "Connect corporate bank accounts via RBI-regulated Account Aggregator APIs for daily velocity tracking.",
        "Automate vendor aging reports and customer payment reminders to contract the debtor collection cycle.",
      ],
    },
    {
      step: "03",
      timeframe: "Days 26 – 40",
      title: "Tap ULI, CGTMSE & TReDS Rails",
      headline: "Unlock institutional credit at 8%–10.5% with zero real estate collateral.",
      badgeBg: "bg-[#ECFDF5] border-[#A7F3D0]",
      badgeColor: "text-[#065F46]",
      iconBg: "bg-[#ECFDF5] border-[#A7F3D0] text-[#059669]",
      icon: <Landmark className="h-5 w-5 text-[#059669]" />,
      actions: [
        "Apply for CGTMSE collateral-free working capital lines up to ₹5 Cr through partner public/private banks.",
        "Onboard approved enterprise invoices onto TReDS platforms (RXIL / M1xchange) for 48-hour cash settlement.",
        "Lock in competitive 8%–9.5% interest rates, eliminating 24% predatory NBFC debt.",
      ],
    },
    {
      step: "04",
      timeframe: "Ongoing",
      title: "Shared-Equity Venture Co-Building",
      headline: "Scale operations and institutional capital with long-term partner alignment.",
      badgeBg: "bg-[#F0FDF4] border-[#BBF7D0]",
      badgeColor: "text-[#15803D]",
      iconBg: "bg-[#F0FDF4] border-[#BBF7D0] text-[#16A34A]",
      icon: <Rocket className="h-5 w-5 text-[#16A34A]" />,
      actions: [
        "Stop bleeding money on financial middlemen and commission brokers with zero skin in the game.",
        "Partner with 1008 Network operators for manufacturing setup, supply chain scaling, and seed funding.",
        "Scale sustainably on a transparent ₹0 retainer, shared-equity alignment model.",
      ],
    },
  ];

  return (
    <div className="my-10 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6E8EB] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-[#635BFF]/10 text-[#635BFF]">
              <Layers className="h-4 w-4" />
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#0A2540] font-sans">
              The 4-Phase Working Capital Architecture
            </h3>
          </div>
          <p className="text-xs text-[#627D98] mt-0.5">
            A step-by-step roadmap from cash-flow crisis to bankable institutional credit.
          </p>
        </div>
        <span className="text-[11px] font-mono text-[#635BFF] font-semibold bg-[#F0F0FF] border border-[#E0E0FF] px-2.5 py-1 rounded-lg self-start sm:self-auto">
          Execution Timeline: 40 Days
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {phases.map((phase) => (
          <div
            key={phase.step}
            className="rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-5 sm:p-6 flex flex-col justify-between hover:border-[#CBD5E1] transition-all duration-300 shadow-2xs hover:shadow-xs group"
          >
            <div className="space-y-4">
              {/* Header with Step Number & Timeframe Badge */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black font-mono text-[#CBD5E1] group-hover:text-[#635BFF] transition-colors">
                  {phase.step}
                </span>
                <span
                  className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border ${phase.badgeBg} ${phase.badgeColor}`}
                >
                  {phase.timeframe}
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-xl border ${phase.iconBg} shrink-0 mt-0.5`}>
                  {phase.icon}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0A2540] group-hover:text-[#635BFF] transition-colors leading-snug">
                    {phase.title}
                  </h4>
                  <p className="text-xs text-[#627D98] mt-1 leading-relaxed">
                    {phase.headline}
                  </p>
                </div>
              </div>

              {/* Action Checkpoints */}
              <div className="pt-3 border-t border-[#E6E8EB] space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#627D98] block">
                  Key Action Protocol
                </span>
                <ul className="space-y-2">
                  {phase.actions.map((action, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#425466] leading-relaxed">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#059669] shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
