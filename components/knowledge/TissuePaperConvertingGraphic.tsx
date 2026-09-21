"use client";

import React, { useState } from "react";
import {
  Layers,
  Zap,
  ArrowDown,
  CheckCircle2,
  Sparkles,
  Activity,
  ShieldCheck,
  Factory,
  Package,
  Printer,
  Scissors,
  Coins,
} from "lucide-react";

export function TissuePaperConvertingGraphic() {
  const [activeTab, setActiveTab] = useState<"flow" | "pipeline">("flow");

  const processSteps = [
    {
      step: "01",
      title: "Jumbo Roll Unwind",
      desc: "Parent tissue roll (width 270–330mm, 17–20 GSM) mounted on pneumatic unwind stand with web tension control.",
      detail: "17–22 GSM Virgin/Semi-Virgin Base",
      icon: Layers,
    },
    {
      step: "02",
      title: "In-Line Flexo Printing",
      desc: "Tissue web passes through 1-color or 2-color flexographic printing unit with water-based food-grade ink for logo branding.",
      detail: "Zero Volatile Solvents / Food Safe",
      icon: Printer,
    },
    {
      step: "03",
      title: "Steel-to-Rubber Embossing",
      desc: "Engraved steel roller presses decorative micro-patterns into tissue to enhance softness, absorbency, and ply bonding.",
      detail: "Calibrated Ply Lamination",
      icon: Activity,
    },
    {
      step: "04",
      title: "Slit & 1/4th Vacuum Fold",
      desc: "Rotary circular blades slit web down the center; high-speed mechanical folding fingers fold sheets into 1/4th square napkins.",
      detail: "27x27cm / 30x30cm Standard Fold",
      icon: Scissors,
    },
    {
      step: "05",
      title: "Sensor Counting & Stacking",
      desc: "Electronic optical sensor counts exact batches (50, 75, or 100 pcs) and pushes neat stacks onto the receiving table.",
      detail: "300–400 pcs/min Operating Speed",
      icon: Zap,
    },
    {
      step: "06",
      title: "Band Sealing & Packing",
      desc: "Stacks are inserted into printed LDPE/BOPP pouches, heat-sealed on continuous band sealer, and packed into shipper cartons.",
      detail: "Master Corrugated Shipper Box",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="my-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 text-[#0A2540] shadow-xs relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF7043]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#635BFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Header Title & Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6E8EB] pb-4">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-[#FF7043]/10 border border-[#FF7043]/20 text-[#FF7043]">
              <Package className="h-5 w-5" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540] block">
                Sub-₹10 Lakh Micro-Converting Architecture
              </span>
              <span className="text-[11px] text-[#627D98]">
                From Parent Jumbo Rolls to High-Frequency Local HoReCa Packaged Napkins
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#E6E8EB] self-start sm:self-auto shadow-2xs">
            <button
              onClick={() => setActiveTab("flow")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "flow"
                  ? "bg-[#0A2540] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540]"
              }`}
            >
              Capital &amp; Material Flow
            </button>
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "pipeline"
                  ? "bg-[#0A2540] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540]"
              }`}
            >
              Converting Line (6 Stages)
            </button>
          </div>
        </div>

        {activeTab === "flow" ? (
          /* Flow Architecture Model */
          <div className="space-y-6">
            {/* Top 3 Input Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Input 1: Parent Jumbo Rolls */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between shadow-2xs space-y-4 hover:border-[#CBD5E1] transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <span className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#FF7043]">
                      <Layers className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-mono text-[#0A2540] bg-[#F1F5F9] px-2.5 py-1 rounded-md font-bold border border-[#E2E8F0]">
                      RAW MATERIAL
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540] tracking-tight">
                    1. Parent Jumbo Rolls
                  </h4>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed my-2">
                    Direct procurement of 17–22 GSM virgin or semi-virgin tissue jumbo reels from regional paper mills (Gujarat, Punjab, Tamil Nadu).
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    ₹75–₹90 / kg
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    270–330mm Width
                  </span>
                </div>
              </div>

              {/* Input 2: Core Machine & In-Line Flexo */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between shadow-2xs space-y-4 hover:border-[#CBD5E1] transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <span className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#635BFF]">
                      <Factory className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-mono text-[#0A2540] bg-[#F1F5F9] px-2.5 py-1 rounded-md font-bold border border-[#E2E8F0]">
                      CORE MACHINERY
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540] tracking-tight">
                    2. Auto Folding Line
                  </h4>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed my-2">
                    Automated single-line napkin machine with embossing roller, flexo printing station, 1/4th folding head, and optical sensor counter.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    ₹4.5L–₹5.5L Capex
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    300–400 pcs/min
                  </span>
                </div>
              </div>

              {/* Input 3: Subsidies & Priority Financing */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between shadow-2xs space-y-4 hover:border-[#CBD5E1] transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <span className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#00A88F]">
                      <Coins className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-mono text-[#0A2540] bg-[#F1F5F9] px-2.5 py-1 rounded-md font-bold border border-[#E2E8F0]">
                      FINANCIAL RAILS
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540] tracking-tight">
                    3. PMEGP &amp; MUDRA
                  </h4>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed my-2">
                    15%–35% non-refundable margin money subsidy under PMEGP + collateral-free bank financing under CGTMSE / MUDRA Tarun.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    15%–35% PMEGP
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    5%–10% Own Equity
                  </span>
                </div>
              </div>
            </div>

            {/* Connecting Convergence Indicator */}
            <div className="flex items-center justify-center gap-3 py-2">
              <div className="h-[1px] bg-[#E2E8F0] flex-1" />
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] shadow-2xs text-xs font-mono text-[#FF7043] font-semibold">
                <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
                <span>Hyper-Local Finished Delivery Rail</span>
              </div>
              <div className="h-[1px] bg-[#E2E8F0] flex-1" />
            </div>

            {/* Bottom Output Hero Card */}
            <div className="rounded-2xl bg-white border-2 border-[#FF7043]/30 p-6 sm:p-8 text-[#0A2540] shadow-sm relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-[#FF7043]/15 border border-[#FF7043]/30 text-[#FF7043]">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF7043]">
                      Deliverable • Daily HoReCa &amp; Institutional Supply
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight">
                    Branded &amp; Plain Disposable Napkins
                  </h3>
                  <p className="text-xs sm:text-sm text-[#425466] max-w-2xl leading-relaxed">
                    Custom logo-printed or plain embossed table napkins supplying local restaurants, catering firms, QSR chains, bakeries, corporate pantries, and medical clinics within a 20–50 km radius.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-xs text-[#166534] font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                    <span className="font-mono text-xs font-semibold">₹35–₹45 / kg Gross Spread</span>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFF7ED] border border-[#FED7AA] text-xs text-[#9A3412] font-medium">
                    <ShieldCheck className="h-4 w-4 text-[#EA580C]" />
                    <span className="font-mono text-xs font-semibold">Total Outlay: ₹8.3L–₹9.7L</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Step-by-Step Converting Pipeline */
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {processSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs hover:border-[#CBD5E1] transition-all flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#FF7043] bg-[#FFF2ED] px-2 py-0.5 rounded border border-[#FFD8C9]">
                          STEP {step.step}
                        </span>
                        <span className="p-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#627D98]">
                          <IconComponent className="h-4 w-4 text-[#FF7043]" />
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-[#0A2540]">{step.title}</h4>
                      <p className="text-xs text-[#425466] leading-relaxed">{step.desc}</p>
                    </div>

                    <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] text-[#627D98] font-mono">
                      <span>{step.detail}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Status Banner */}
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-[#425466]">
                <Factory className="h-4 w-4 text-[#FF7043]" />
                <span>
                  Single 8-hour daily shift at 60% capacity converts <strong>200–300 kg paper daily (~75,000–100,000 napkins)</strong> with 2 workers.
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#627D98] bg-[#F8FAFC] px-2.5 py-1 rounded-md border border-[#E2E8F0]">
                Footprint: 600–1,000 sq ft • 3–5 HP Load
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
