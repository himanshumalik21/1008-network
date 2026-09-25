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
  Flame,
  Droplets,
  Bone,
  Wheat,
} from "lucide-react";

export function PetFoodExtrusionGraphic() {
  const [activeTab, setActiveTab] = useState<"flow" | "pipeline">("flow");

  const processSteps = [
    {
      step: "01",
      title: "Micro-Pulverizing (<0.8mm)",
      desc: "Poultry meal, broken rice, corn, and defatted soya pulverized in high-speed hammer mills for uniform extrusion cooking.",
      detail: "Fine Particle Size <0.8mm",
      icon: Wheat,
    },
    {
      step: "02",
      title: "Micro-Dosing & Blending",
      desc: "Dry base blended with essential amino acids (taurine, lysine), vitamins, minerals, and prebiotic fibers (FOS/MOS).",
      detail: "AAFCO / FEDIAF Formulations",
      icon: Layers,
    },
    {
      step: "03",
      title: "Steam Preconditioning",
      desc: "Differential diameter pre-conditioner injects live steam and water, initiating starch gelatinization at 70°C–90°C.",
      detail: "Thermal Starch Gelatinization",
      icon: Droplets,
    },
    {
      step: "04",
      title: "Twin-Screw HTST Extrusion",
      desc: "High shear, pressure, and heat (120°C–140°C) cook the matrix; extruded through shaped face dies and cut by high-speed knives.",
      detail: "High-Shear Cooking & Die Expansion",
      icon: Flame,
    },
    {
      step: "05",
      title: "Multi-Pass Belt Drying",
      desc: "Multi-deck continuous hot air conveyor dryer reduces kibble moisture from 25% down to a shelf-stable 8%–10%.",
      detail: "Moisture Reduced to 8%–10%",
      icon: Activity,
    },
    {
      step: "06",
      title: "Vacuum Fat Infusion & Packing",
      desc: "Pneumatic vacuum coater deep-infuses hot poultry fat, fish oil, and natural digests into core pores; packed in nitrogen-flushed foil bags.",
      detail: "Deep Palatant & Lipid Infusion",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="my-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 text-[#0A2540] shadow-xs relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF7043]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00D4B2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Header Title & Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6E8EB] pb-4">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-[#FF7043]/10 border border-[#FF7043]/20 text-[#FF7043]">
              <Bone className="h-5 w-5" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540] block">
                Dry Pet Kibble &amp; Nutrition Extrusion Core
              </span>
              <span className="text-[11px] text-[#627D98]">
                From Domestic Poultry Meals &amp; Grains to AAFCO-Compliant Complete Companion Diets
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
              Nutrition Architecture
            </button>
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "pipeline"
                  ? "bg-[#0A2540] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540]"
              }`}
            >
              Extrusion Line (6 Stages)
            </button>
          </div>
        </div>

        {activeTab === "flow" ? (
          /* Flow Architecture Model */
          <div className="space-y-6">
            {/* Top 3 Input Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Input 1: Domestic Proteins & Grains */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between shadow-2xs space-y-4 hover:border-[#CBD5E1] transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <span className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#FF7043]">
                      <Wheat className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-mono text-[#0A2540] bg-[#F1F5F9] px-2.5 py-1 rounded-md font-bold border border-[#E2E8F0]">
                      RAW PROTEIN &amp; GRAINS
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540] tracking-tight">
                    1. Domestic Feedstock
                  </h4>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed my-2">
                    High-protein poultry meal, fish meal, whole corn, broken rice, defatted soya, taurine, and organic cold-pressed oils.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    25%–35% Cost Edge
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    Fresh Poultry &amp; Fish
                  </span>
                </div>
              </div>

              {/* Input 2: Twin-Screw HTST Extruder */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between shadow-2xs space-y-4 hover:border-[#CBD5E1] transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <span className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#635BFF]">
                      <Factory className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-mono text-[#0A2540] bg-[#F1F5F9] px-2.5 py-1 rounded-md font-bold border border-[#E2E8F0]">
                      HTST EXTRUSION
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540] tracking-tight">
                    2. Twin-Screw Extrusion Line
                  </h4>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed my-2">
                    Differential diameter steam preconditioner, high-torque twin-screw extruder (120°–140°C), face die shaping, and multi-pass hot air belt dryer.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    500–1,500 kg/hr
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    1–2 Ton Steam Boiler
                  </span>
                </div>
              </div>

              {/* Input 3: Vacuum Fat Coating & AAFCO QA */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between shadow-2xs space-y-4 hover:border-[#CBD5E1] transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <span className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#00A88F]">
                      <ShieldCheck className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-mono text-[#0A2540] bg-[#F1F5F9] px-2.5 py-1 rounded-md font-bold border border-[#E2E8F0]">
                      PALATABILITY &amp; QA
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540] tracking-tight">
                    3. Vacuum Fat Infusion &amp; QA
                  </h4>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed my-2">
                    Core lipid infusion with liquid chicken fat, Omega-3/6, and natural hydrolysed digests under negative pressure + FSSAI &amp; AAFCO laboratory signoff.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    AAFCO / FEDIAF Specs
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    Nitrogen-Flushed Pouch
                  </span>
                </div>
              </div>
            </div>

            {/* Connecting Convergence Indicator */}
            <div className="flex items-center justify-center gap-3 py-2">
              <div className="h-[1px] bg-[#E2E8F0] flex-1" />
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] shadow-2xs text-xs font-mono text-[#FF7043] font-semibold">
                <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
                <span>Extruded Companion Nutrition Output</span>
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
                      Deliverable • High-Protein Extruded Dry Diets &amp; Retort Meals
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight">
                    Complete &amp; Balanced Dog &amp; Cat Kibble Diets
                  </h3>
                  <p className="text-xs sm:text-sm text-[#425466] max-w-2xl leading-relaxed">
                    Scientifically formulated puppy growth, adult maintenance, grain-free, and veterinary therapeutic kibble supplying domestic D2C pet brands, pet specialty stores, and private-label export markets.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-xs text-[#166534] font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                    <span className="font-mono text-xs font-semibold">FSSAI &amp; AAFCO Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFF7ED] border border-[#FED7AA] text-xs text-[#9A3412] font-medium">
                    <ShieldCheck className="h-4 w-4 text-[#EA580C]" />
                    <span className="font-mono text-xs font-semibold">USD 4.6B Market by 2034</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Step-by-Step Extrusion Pipeline */
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
                  Requires <strong>1–2 Ton steam boiler</strong>, cold storage (2°–4°C), and odor-control bio-scrubbers for air exhaust.
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#627D98] bg-[#F8FAFC] px-2.5 py-1 rounded-md border border-[#E2E8F0]">
                8%–10% Moisture • 12–18 Month Shelf Life
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
