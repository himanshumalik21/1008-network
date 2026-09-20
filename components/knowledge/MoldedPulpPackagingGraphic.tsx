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
  Flame,
  Factory,
  Package,
  Droplets,
  Cpu,
} from "lucide-react";

export function MoldedPulpPackagingGraphic() {
  const [activeTab, setActiveTab] = useState<"flow" | "pipeline">("flow");

  const processSteps = [
    {
      step: "01",
      title: "Raw Material Hydrapulping",
      desc: "Recycled kraft paper, virgin pulp, or sugarcane bagasse sheets blended with water in a hydrapulper to create a uniform 3%–5% fibrous pulp slurry.",
      detail: "Consistency & fiber dispersion audit",
      icon: Droplets,
    },
    {
      step: "02",
      title: "Slurry Refining & Dosing",
      desc: "Pulp passes through disk refiners to calibrate fiber length; food-grade water-proofing and non-PFAS oil-resistant barrier agents are dosed.",
      detail: "Fiber freeness (CSF) & non-PFAS chemistry",
      icon: Activity,
    },
    {
      step: "03",
      title: "Vacuum Forming (Moulding)",
      desc: "Custom CNC-machined bronze or aluminum wire-mesh moulds submerged in slurry tank; vacuum suction deposits a uniform fiber mat onto mould contours.",
      detail: "Uniform mat density & wall thickness",
      icon: Cpu,
    },
    {
      step: "04",
      title: "In-Mould Hot Pressing",
      desc: "Wet fiber pre-form transfers directly into heated matching metal dies (180°C–220°C) where high hydraulic pressure cures a smooth finish.",
      detail: "Thermoforming & moisture evaporation",
      icon: Flame,
    },
    {
      step: "05",
      title: "Edge Trimming & Punching",
      desc: "Robotic or mechanical trim presses cut outer flashing and punch precision registration holes for automated client assembly lines.",
      detail: "Dimensional tolerance & burr-free edge",
      icon: Zap,
    },
    {
      step: "06",
      title: "Testing & CPCB/EPR QA",
      desc: "Parts undergo drop-impact testing, moisture content checks, compostability compliance (IS/ISO 17088), and automated shrink-wrap packing.",
      detail: "100% Biodegradable & QA signoff",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="my-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 text-[#0A2540] shadow-xs relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00D4B2]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#635BFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Header Title & Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6E8EB] pb-4">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-[#00D4B2]/10 border border-[#00D4B2]/20 text-[#00A88F]">
              <Package className="h-5 w-5" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540] block">
                Molded Fiber & Thermoformed Pulp Core
              </span>
              <span className="text-[11px] text-[#627D98]">
                From Agro-Waste & Recycled Fiber to Plastic-Replacement Precision Packaging
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
              Material & Tooling Architecture
            </button>
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "pipeline"
                  ? "bg-[#0A2540] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540]"
              }`}
            >
              Thermoforming Line
            </button>
          </div>
        </div>

        {activeTab === "flow" ? (
          /* Flow Architecture Model */
          <div className="space-y-6">
            {/* Top 3 Input Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Input 1: Agro-Residue & Recycled Fiber */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between shadow-2xs space-y-4 hover:border-[#CBD5E1] transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <span className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#00A88F]">
                      <Layers className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-mono text-[#0A2540] bg-[#F1F5F9] px-2.5 py-1 rounded-md font-bold border border-[#E2E8F0]">
                      RAW FEEDSTOCK
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540] tracking-tight">
                    1. Agro-Residue & Pulp
                  </h4>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed my-2">
                    Sugarcane bagasse, wheat straw, bamboo pulp, or unbleached recycled kraft paper blended into clean, chemical-free pulp slurries.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    Sugarcane Bagasse
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    Recycled Kraft
                  </span>
                </div>
              </div>

              {/* Input 2: CNC Tooling & Heated Forming Dies */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between shadow-2xs space-y-4 hover:border-[#CBD5E1] transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <span className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#635BFF]">
                      <Cpu className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-mono text-[#0A2540] bg-[#F1F5F9] px-2.5 py-1 rounded-md font-bold border border-[#E2E8F0]">
                      CNC TOOLING
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540] tracking-tight">
                    2. Precision Tooling Dies
                  </h4>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed my-2">
                    Custom 3D CAD/CAM CNC-machined aluminium or bronze forming moulds with micro-drilled vacuum channels and stainless mesh screens.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    Heated 180°–220°C
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    Draft Angles &lt;1.5°
                  </span>
                </div>
              </div>

              {/* Input 3: Closed-Loop Water & Steam */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between shadow-2xs space-y-4 hover:border-[#CBD5E1] transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <span className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#F59E0B]">
                      <Droplets className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-mono text-[#0A2540] bg-[#F1F5F9] px-2.5 py-1 rounded-md font-bold border border-[#E2E8F0]">
                      HYDRO & STEAM
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540] tracking-tight">
                    3. Closed-Loop Utilities
                  </h4>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed my-2">
                    90%+ process water recovery via closed-loop filtration paired with high-efficiency biomass/gas steam boiler thermal supply.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    Zero Liquid Discharge
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    CPCB Compliant
                  </span>
                </div>
              </div>
            </div>

            {/* Connecting Convergence Indicator */}
            <div className="flex items-center justify-center gap-3 py-2">
              <div className="h-[1px] bg-[#E2E8F0] flex-1" />
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] shadow-2xs text-xs font-mono text-[#00A88F] font-semibold">
                <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
                <span>Precision Thermoformed Output</span>
              </div>
              <div className="h-[1px] bg-[#E2E8F0] flex-1" />
            </div>

            {/* Bottom Output Hero Card: Plastic-Replacement Products */}
            <div className="rounded-2xl bg-white border-2 border-[#00D4B2]/30 p-6 sm:p-8 text-[#0A2540] shadow-sm relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-[#00D4B2]/15 border border-[#00D4B2]/30 text-[#00A88F]">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A88F]">
                      End Deliverable • Plastic-Replacement Packaging Rails
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight">
                    Precision Thermoformed Pulp Trays & Compostable Tableware
                  </h3>
                  <p className="text-xs sm:text-sm text-[#425466] max-w-2xl leading-relaxed">
                    Ultra-smooth contoured inserts replacing EPS/thermocol in electronics, appliances, and luxury cosmetics packaging, alongside certified grease-resistant food-service clamshells and bowls.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-xs text-[#166534] font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                    <span className="font-mono text-xs font-semibold">100% Biodegradable (IS/ISO 17088)</span>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F0FDF9] border border-[#A7F3D0] text-xs text-[#065F46] font-medium">
                    <ShieldCheck className="h-4 w-4 text-[#00A88F]" />
                    <span className="font-mono text-xs font-semibold">CPCB EPR & PWM Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Step-by-Step Thermoforming Pipeline */
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
                        <span className="text-xs font-mono font-bold text-[#00A88F] bg-[#E6FFFA] px-2 py-0.5 rounded border border-[#B2DFDB]">
                          STEP {step.step}
                        </span>
                        <span className="p-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#627D98]">
                          <IconComponent className="h-4 w-4 text-[#00A88F]" />
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
                <Factory className="h-4 w-4 text-[#00A88F]" />
                <span>
                  High-speed multi-cavity thermoforming lines achieve <strong>18–25 sec cycle times</strong> with precision hot-press drying.
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#627D98] bg-[#F8FAFC] px-2.5 py-1 rounded-md border border-[#E2E8F0]">
                Tolerance: ±0.3mm • Smooth 2-Sided Finish
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
