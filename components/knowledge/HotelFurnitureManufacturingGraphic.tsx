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
  Armchair,
  Drill,
  Paintbrush,
  Ruler,
} from "lucide-react";

export function HotelFurnitureManufacturingGraphic() {
  const [activeTab, setActiveTab] = useState<"flow" | "pipeline">("flow");

  const processSteps = [
    {
      step: "01",
      title: "CAD/CAM Nesting & Sizing",
      desc: "Architectural shop drawings converted into machine G-code; automated nesting software optimizes panel cutting yield to minimize raw material waste.",
      detail: "Sub-Millimeter CAD/CAM Yield",
      icon: Ruler,
    },
    {
      step: "02",
      title: "High-Speed CNC Routing",
      desc: "Multi-axis CNC nesting routers or automatic beam saws precision-cut BWP plywood, calibrated moisture-resistant MDF, and pre-laminated boards.",
      detail: "Calibrated BWP Plywood / MR-MDF",
      icon: Zap,
    },
    {
      step: "03",
      title: "Through-Feed Edge-Banding",
      desc: "Automatic edge-bander applies 1mm–2mm PVC/ABS edge tapes with moisture-proof PUR/EVA hot-melt glue, pre-milling, and corner rounding.",
      detail: "PUR/EVA Moisture-Proof Bonding",
      icon: Activity,
    },
    {
      step: "04",
      title: "Point-to-Point CNC Boring",
      desc: "Multi-spindle CNC drilling machines drill line holes, minifix cam-lock fittings, dowel pockets, and concealed hinge cups for flat-pack assembly.",
      detail: "Flat-Pack Minifix / Cam-Lock System",
      icon: Drill,
    },
    {
      step: "05",
      title: "Dust-Free PU Spray Booth",
      desc: "Solid wood trims and natural veneers enter pressurized, water-curtain spray booths for high-durability Polyurethane (PU) lacquering and stain curing.",
      detail: "Positive-Pressure Dust-Free Finish",
      icon: Paintbrush,
    },
    {
      step: "06",
      title: "Pre-Assembly & Flat-Pack Boxing",
      desc: "Sample mock-up trial assembly to verify hardware alignment; parts wrapped in protective foam with assembly kits and shipped in 5-ply corrugated boxes.",
      detail: "BIS QCO & On-Site Handover Ready",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="my-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 text-[#0A2540] shadow-xs relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D97706]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#635BFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Header Title & Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6E8EB] pb-4">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-[#D97706]/10 border border-[#D97706]/20 text-[#D97706]">
              <Armchair className="h-5 w-5" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540] block">
                Commercial Contract &amp; Hotel FF&amp;E Manufacturing Core
              </span>
              <span className="text-[11px] text-[#627D98]">
                From Engineered Timber &amp; CAD/CAM Panels to BIS-Certified Turnkey Hospitality Suites
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
              FF&amp;E Production Architecture
            </button>
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "pipeline"
                  ? "bg-[#0A2540] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540]"
              }`}
            >
              CAD/CAM Joinery Line
            </button>
          </div>
        </div>

        {activeTab === "flow" ? (
          /* Flow Architecture Model */
          <div className="space-y-6">
            {/* Top 3 Input Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Input 1: Calibrated Panels & Hardwood */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between shadow-2xs space-y-4 hover:border-[#CBD5E1] transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <span className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#D97706]">
                      <Layers className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-mono text-[#0A2540] bg-[#F1F5F9] px-2.5 py-1 rounded-md font-bold border border-[#E2E8F0]">
                      RAW MATERIALS
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540] tracking-tight">
                    1. Calibrated Boards &amp; Hardware
                  </h4>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed my-2">
                    Calibrated BWP plywood, high-density moisture-resistant MDF (Action TESA/Greenpanel), natural veneers, and architectural fittings (Häfele/Hettich).
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    BWP Grade Plywood
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    Certified Hardware
                  </span>
                </div>
              </div>

              {/* Input 2: Automated CNC Woodworking Line */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between shadow-2xs space-y-4 hover:border-[#CBD5E1] transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <span className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#635BFF]">
                      <Factory className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-mono text-[#0A2540] bg-[#F1F5F9] px-2.5 py-1 rounded-md font-bold border border-[#E2E8F0]">
                      AUTOMATED CNC
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540] tracking-tight">
                    2. CNC Panel &amp; Boring Line
                  </h4>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed my-2">
                    Heavy-duty nesting CNC routers, automatic through-feed PUR edge-banders, multi-axis boring machines, and centralized bag-filter dust collectors.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    Through-Feed PUR Line
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    Tolerance &lt;0.5mm
                  </span>
                </div>
              </div>

              {/* Input 3: Dust-Free Spray & BIS QCO */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between shadow-2xs space-y-4 hover:border-[#CBD5E1] transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <span className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#00A88F]">
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-mono text-[#0A2540] bg-[#F1F5F9] px-2.5 py-1 rounded-md font-bold border border-[#E2E8F0]">
                      BIS QUALITY MANDATE
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540] tracking-tight">
                    3. Mandatory BIS QCO Standards
                  </h4>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed my-2">
                    Mandatory ISI certification under DPIIT Furniture QCO (IS 17631 for chairs, IS 17633 for desks, IS 17635 for beds) + pressurized PU finishing.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    IS 17631 / 17633 / 17635
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    Fire &amp; Stain Tested
                  </span>
                </div>
              </div>
            </div>

            {/* Connecting Convergence Indicator */}
            <div className="flex items-center justify-center gap-3 py-2">
              <div className="h-[1px] bg-[#E2E8F0] flex-1" />
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] shadow-2xs text-xs font-mono text-[#D97706] font-semibold">
                <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
                <span>Turnkey Institutional Fit-Out Rail</span>
              </div>
              <div className="h-[1px] bg-[#E2E8F0] flex-1" />
            </div>

            {/* Bottom Output Hero Card */}
            <div className="rounded-2xl bg-white border-2 border-[#D97706]/30 p-6 sm:p-8 text-[#0A2540] shadow-sm relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-[#D97706]/15 border border-[#D97706]/30 text-[#D97706]">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D97706]">
                      Deliverable • Turnkey Hospitality &amp; Workspace Suites
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight">
                    Modular Guestroom Casegoods &amp; Commercial Office Workstations
                  </h3>
                  <p className="text-xs sm:text-sm text-[#425466] max-w-2xl leading-relaxed">
                    Engineered hotel casegoods (headboards, nightstands, study desks, luggage consoles, wardrobes) and Grade-A office workstations manufactured for Taj, Marriott, Lemon Tree, Awfis, and enterprise campus developments.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-xs text-[#166534] font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                    <span className="font-mono text-xs font-semibold">DPIIT BIS QCO Certified</span>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-xs text-[#92400E] font-medium">
                    <ShieldCheck className="h-4 w-4 text-[#D97706]" />
                    <span className="font-mono text-xs font-semibold">USD 4.47B FF&amp;E Pipeline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Step-by-Step Joinery Pipeline */
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
                        <span className="text-xs font-mono font-bold text-[#D97706] bg-[#FFFBEB] px-2 py-0.5 rounded border border-[#FDE68A]">
                          STEP {step.step}
                        </span>
                        <span className="p-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#627D98]">
                          <IconComponent className="h-4 w-4 text-[#D97706]" />
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
                <Factory className="h-4 w-4 text-[#D97706]" />
                <span>
                  Requires <strong>8,000–15,000 sq. ft. industrial facility</strong> with centralized bag-filter dust extraction and pressurized PU finishing booth.
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#627D98] bg-[#F8FAFC] px-2.5 py-1 rounded-md border border-[#E2E8F0]">
                Tolerance: &lt;0.5mm • Modular Flat-Pack Packaging
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
