"use client";

import React, { useState } from "react";
import {
  CreditCard,
  ShieldCheck,
  Zap,
  Building2,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  Landmark,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  Layers,
  Percent,
} from "lucide-react";
import { Badge } from "@/components/brand/Badge";

export function ULICreditArchitectureGraphic() {
  const [activeTab, setActiveTab] = useState<"comparison" | "uli_flow">("comparison");

  return (
    <div className="my-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 text-[#0A2540] shadow-xs relative overflow-hidden">
      {/* Subtle brand gradient background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#635BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00D4B2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Header Title & Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6E8EB] pb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#F0F5FF] border border-[#D0E2FF] text-[#635BFF]">
              <Landmark className="h-4 w-4" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540] block">
                Working Capital Credit Architecture
              </span>
              <span className="text-[11px] text-[#627D98]">RBI ULI Digital Rails vs. Predatory NBFC Traps</span>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#E6E8EB] self-start sm:self-auto shadow-2xs">
            <button
              onClick={() => setActiveTab("comparison")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "comparison"
                  ? "bg-[#635BFF] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540]"
              }`}
            >
              Side-by-Side Model
            </button>
            <button
              onClick={() => setActiveTab("uli_flow")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "uli_flow"
                  ? "bg-[#635BFF] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540]"
              }`}
            >
              RBI ULI Live Flow
            </button>
          </div>
        </div>

        {activeTab === "comparison" ? (
          /* Side-by-Side Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* The Predatory / Traditional Trap */}
            <div className="rounded-xl bg-white border border-[#FEE2E2] p-5 space-y-4 shadow-2xs relative">
              <div className="flex items-center justify-between border-b border-[#FEE2E2] pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                  <span className="font-bold text-sm text-[#991B1B]">Traditional & Predatory Route</span>
                </div>
                <span className="text-[10px] font-mono text-[#EF4444] bg-[#FEF2F2] px-2 py-0.5 rounded border border-[#FECACA] font-bold">
                  HIGH CAPITAL DRAIN
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-2.5 rounded-lg bg-[#FEF2F2] border border-[#FEE2E2] flex items-start gap-2.5">
                  <XCircle className="h-4 w-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#991B1B] block">Upfront Broker Fees:</strong>
                    <span className="text-[#7F1D1D]">₹1,00,000 to ₹2,50,000 paid to loan middlemen with zero guarantees.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#FEF2F2] border border-[#FEE2E2] flex items-start gap-2.5">
                  <Percent className="h-4 w-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#991B1B] block">Predatory Cost of Capital:</strong>
                    <span className="text-[#7F1D1D]">18% – 28% IRR from unsecured NBFCs eroding product gross margins.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#FEF2F2] border border-[#FEE2E2] flex items-start gap-2.5">
                  <Building2 className="h-4 w-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#991B1B] block">Physical Collateral Lock:</strong>
                    <span className="text-[#7F1D1D]">Banks demand commercial real estate or personal residential mortgages.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#FEF2F2] border border-[#FEE2E2] flex items-start gap-2.5">
                  <Clock className="h-4 w-4 text-[#EF4444] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#991B1B] block">90+ Day Debtor Bleed:</strong>
                    <span className="text-[#7F1D1D]">Enterprise invoices linger un-factored, triggering cash-flow paralysis.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* The 1008 ULI Architecture */}
            <div className="rounded-xl bg-white border border-[#A7F3D0] p-5 space-y-4 shadow-2xs relative">
              <div className="flex items-center justify-between border-b border-[#A7F3D0] pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span className="font-bold text-sm text-[#065F46]">1008 Digital Credit Model</span>
                </div>
                <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#A7F3D0] font-bold">
                  COLLATERAL-FREE & FAST
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-2.5 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0] flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#065F46] block">₹0 Retainers & Shared Equity:</strong>
                    <span className="text-[#047857]">Co-founders on the ground with aligned skin in the game.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0] flex items-start gap-2.5">
                  <Percent className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#065F46] block">8% – 10.5% Institutional Debt:</strong>
                    <span className="text-[#047857]">Low-cost working capital lines and 48-hour TReDS invoice discounting.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0] flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#065F46] block">100% Collateral-Free (CGTMSE):</strong>
                    <span className="text-[#047857]">Up to ₹5 Cr guaranteed by sovereign credit trust via digital ULI rails.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0] flex items-start gap-2.5">
                  <Zap className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#065F46] block">Live Cloud ERP & API Feeds:</strong>
                    <span className="text-[#047857]">Automated GSTR-1/3B reconciliation and Account Aggregator data pipelines.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* RBI ULI Flow Diagram */
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              {/* Pillar 1 */}
              <div className="rounded-xl bg-white border border-[#E6E8EB] p-4 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center mx-auto font-mono font-bold text-xs">
                  01
                </div>
                <h4 className="font-bold text-xs text-[#0A2540]">Cloud ERP & GST Stream</h4>
                <p className="text-[11px] text-[#425466] leading-tight">
                  Daily POs, live inventory, and matched GSTR-1 to GSTR-3B filings stream clean data.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-xl bg-white border border-[#635BFF]/30 p-4 space-y-2 shadow-2xs relative">
                <div className="absolute -top-2.5 right-2">
                  <span className="text-[9px] font-mono font-bold bg-[#635BFF] text-white px-1.5 py-0.5 rounded">
                    RBI ULI Engine
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#00D4B2]/15 text-[#008775] flex items-center justify-center mx-auto font-mono font-bold text-xs">
                  02
                </div>
                <h4 className="font-bold text-xs text-[#0A2540]">Account Aggregator Consent</h4>
                <p className="text-[11px] text-[#425466] leading-tight">
                  Instant tamper-proof bank verification with automated cash-flow velocity scoring.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-xl bg-white border border-[#E6E8EB] p-4 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#10B981]/10 text-[#059669] flex items-center justify-center mx-auto font-mono font-bold text-xs">
                  03
                </div>
                <h4 className="font-bold text-xs text-[#0A2540]">Collateral-Free Capital</h4>
                <p className="text-[11px] text-[#425466] leading-tight">
                  CGTMSE-backed credit line (up to ₹5 Cr) & TReDS invoice discounting at 8%–10%.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#E6E8EB] flex items-center justify-between text-xs text-[#627D98]">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#635BFF]" />
                <span className="font-medium">No real estate mortgages. No commission brokers. 100% digital cash-flow underwriting.</span>
              </div>
              <span className="font-mono text-[10px] text-[#635BFF] font-bold">1008 VENTURE ARCHITECTURE</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
