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
  Search,
  Flame,
  Binary,
  Cpu,
  Factory,
  ShieldAlert,
} from "lucide-react";

export function TechnicalTextilesGraphic() {
  const [activeTab, setActiveTab] = useState<"flow" | "pipeline">("flow");

  const processSteps = [
    {
      step: "01",
      title: "Polymer Infeed & Extrusion",
      desc: "Virgin Polypropylene (PP) or Polyester (PET) staple fibers blended and conditioned.",
      detail: "MFI & Denier verification",
      icon: Factory,
    },
    {
      step: "02",
      title: "High-Speed Carding",
      desc: "Rotary wire cylinders open and comb fibers into continuous, uniform fibrous web sheets.",
      detail: "Web weight uniformity audit",
      icon: Activity,
    },
    {
      step: "03",
      title: "Cross-Lapping & Needle-Punch",
      desc: "Multiple web layers cross-lapped; thousands of barbed needles mechanically interlock fibers.",
      detail: "Mechanical bonding (Zero chemicals)",
      icon: Zap,
    },
    {
      step: "04",
      title: "Thermal Calendering",
      desc: "Heated multi-roll calenders apply pressure to set tensile strength and puncture rating.",
      detail: "Pore size & permittivity calibration",
      icon: Flame,
    },
    {
      step: "05",
      title: "BIS In-Line Testing",
      desc: "CBR puncture testing, cone drop, and grab tensile testing for mandatory QCO compliance.",
      detail: "IS 16391 / IS 16393 benchmark",
      icon: ShieldCheck,
    },
    {
      step: "06",
      title: "Slitting, Rolling & Marking",
      desc: "Edge-trimming, automated master roll winding (3m–6m width), and statutory BIS ISI stamping.",
      detail: "100% Traceability & QA signoff",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="my-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 text-[#0A2540] shadow-xs relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#635BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00D4B2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Header Title & Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6E8EB] pb-4">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-[#635BFF]/10 border border-[#635BFF]/20 text-[#635BFF]">
              <Factory className="h-5 w-5" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540] block">
                Technical Textiles Manufacturing Core
              </span>
              <span className="text-[11px] text-[#627D98]">
                From Polymer Resins to Certified Geotechnical & Agricultural Barriers
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#E6E8EB] self-start sm:self-auto shadow-2xs">
            <button
              onClick={() => setActiveTab("flow")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "flow"
                  ? "bg-[#635BFF] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540]"
              }`}
            >
              Material Architecture
            </button>
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "pipeline"
                  ? "bg-[#635BFF] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540]"
              }`}
            >
              Needle-Punch Line
            </button>
          </div>
        </div>

        {activeTab === "flow" ? (
          /* Flow Architecture Model */
          <div className="space-y-6">
            {/* Top 3 Input Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Input 1: Polymer Raw Materials */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between shadow-2xs space-y-4 hover:border-[#CBD5E1] transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <span className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#635BFF]">
                      <Layers className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-mono text-[#0A2540] bg-[#F1F5F9] px-2.5 py-1 rounded-md font-bold border border-[#E2E8F0]">
                      RAW RESINS
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540] tracking-tight">
                    1. Synthetic Polymers
                  </h4>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed my-2">
                    Virgin Polypropylene (PP) and Polyester (PET) granules or high-tenacity staple fibers sourced from domestic petrochemical refiners.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    PP / PET Resins
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    UV Additives
                  </span>
                </div>
              </div>

              {/* Input 2: Needle-Punch & Extrusion Line */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between shadow-2xs space-y-4 hover:border-[#CBD5E1] transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <span className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#00A88F]">
                      <Zap className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-mono text-[#0A2540] bg-[#F1F5F9] px-2.5 py-1 rounded-md font-bold border border-[#E2E8F0]">
                      CONTINUOUS LINE
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540] tracking-tight">
                    2. Needle-Punch Loom
                  </h4>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed my-2">
                    High-precision carding, cross-lapping tower, multi-thousand barbed needle looms, and heated calender rollers (3m to 6m wide).
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    100–1200 GSM
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    3m–6m Width
                  </span>
                </div>
              </div>

              {/* Input 3: Regulatory & Testing Standards */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between shadow-2xs space-y-4 hover:border-[#CBD5E1] transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <span className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#F59E0B]">
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-mono text-[#0A2540] bg-[#F1F5F9] px-2.5 py-1 rounded-md font-bold border border-[#E2E8F0]">
                      STATUTORY QCO
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540] tracking-tight">
                    3. Mandatory BIS Certification
                  </h4>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed my-2">
                    In-house Scheme of Inspection & Testing (SIT) covering CBR puncture resistance, grab tensile strength, and water permittivity.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    IS 16391 / 16393
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    19 Notified QCOs
                  </span>
                </div>
              </div>
            </div>

            {/* Connecting Convergence Indicator */}
            <div className="flex items-center justify-center gap-3 py-2">
              <div className="h-[1px] bg-[#E2E8F0] flex-1" />
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] shadow-2xs text-xs font-mono text-[#635BFF] font-semibold">
                <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
                <span>Engineered Functional Material Output</span>
              </div>
              <div className="h-[1px] bg-[#E2E8F0] flex-1" />
            </div>

            {/* Bottom Output Hero Card: Certified Geotextiles & Agrotextiles */}
            <div className="rounded-2xl bg-white border-2 border-[#635BFF]/25 p-6 sm:p-8 text-[#0A2540] shadow-sm relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-[#00D4B2]/15 border border-[#00D4B2]/30 text-[#00A88F]">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A88F]">
                      End Deliverable • Infrastructure & Agricultural Rails
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight">
                    BIS-Certified Geotextiles & Agrotextile Systems
                  </h3>
                  <p className="text-xs sm:text-sm text-[#425466] max-w-2xl leading-relaxed">
                    Engineered permeable synthetic fabrics and protective crop membranes—deployed across NHAI highway sub-bases, Indian Railways track stabilization, canal slope reinforcement, and protected horticulture greenhouses.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-xs text-[#166534] font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                    <span className="font-mono text-xs font-semibold">BIS QCO Certified</span>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F0F5FF] border border-[#D0E2FF] text-xs text-[#1E40AF] font-medium">
                    <ShieldCheck className="h-4 w-4 text-[#635BFF]" />
                    <span className="font-mono text-xs font-semibold">NHAI & MoRTH Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Needle-Punch Line Step-by-Step Pipeline */
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className="p-5 rounded-2xl bg-white border border-[#E2E8F0] flex flex-col justify-between space-y-3 shadow-2xs hover:border-[#CBD5E1] transition-all"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9]">
                        <span className="text-[11px] font-mono font-bold text-[#635BFF] bg-[#F0F5FF] px-2.5 py-1 rounded border border-[#D0E2FF]">
                          STAGE {step.step}
                        </span>
                        <Icon className="h-4 w-4 text-[#627D98]" />
                      </div>
                      <h5 className="font-bold text-sm sm:text-base text-[#0A2540]">{step.title}</h5>
                      <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">{step.desc}</p>
                    </div>
                    <div className="pt-2.5 border-t border-[#F1F5F9] flex items-center gap-1.5 mt-auto">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A88F]" />
                      <span className="text-[11px] font-mono text-[#627D98] font-medium">
                        {step.detail}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#166534] leading-relaxed">
                <strong>Mandatory Statutory Barrier:</strong> Under Ministry of Textiles Quality Control Orders, only facilities holding a valid{" "}
                <span className="font-mono font-semibold">BIS Product Certification License (IS 16391 / IS 16393)</span> are legally eligible to supply government infrastructure tenders in India.
              </div>
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="pt-3 border-t border-[#E6E8EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[#627D98] font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
            <span>1008 Technical Textiles & Material Engineering Architecture</span>
          </div>
          <span>B2B Infrastructure & Agricultural Supply Model</span>
        </div>
      </div>
    </div>
  );
}
