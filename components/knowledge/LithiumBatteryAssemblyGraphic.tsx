"use client";

import React, { useState } from "react";
import {
  BatteryCharging,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Activity,
  Flame,
  Factory,
  BarChart3,
  SlidersHorizontal,
  ArrowRight,
  Sparkles,
  ShieldAlert,
} from "lucide-react";

export function LithiumBatteryAssemblyGraphic() {
  const [activeTab, setActiveTab] = useState<"process" | "economics" | "capex">("process");

  const processStages = [
    {
      step: "01",
      name: "Inward Cell IR & Voltage Sorting",
      desc: "High-throughput 10-channel automated grading machine sorts incoming Grade-A cylindrical (21700/32700) or prismatic cells by internal resistance (mΩ) and open-circuit voltage (OCV) to prevent pack thermal imbalance.",
      spec: "IR accuracy: ±0.1mΩ | OCV: ±1mV",
      badge: "Zero Imbalance Rule",
      icon: Activity,
    },
    {
      step: "02",
      name: "Matrix Cell Slotting & Insulation",
      desc: "Sorted cells are inserted into flame-retardant (UL94 V-0 rated) polycarbonate/ABS matrix holders, spaced with thermal expansion air gaps, and layered with dielectric Nomex barrier sheets.",
      spec: "UL94 V-0 Anti-Arc Spacers",
      badge: "Thermal Isolation",
      icon: Layers,
    },
    {
      step: "03",
      name: "CNC Automatic Spot / Laser Welding",
      desc: "High-precision servo-driven pneumatics or fiber laser weld pure nickel (Ni-99.6%) busbar strips to cell terminals with micro-joule energy monitoring to eliminate thermal heat stress on cell jelly rolls.",
      spec: "Dual-Pulse Micro-Joule Precision",
      badge: "Zero Penetration Weld",
      icon: Zap,
    },
    {
      step: "04",
      name: "Smart BMS Wiring & NTC Thermistors",
      desc: "Multi-conductor balance harness soldered to nickel tabs. NTC thermal sensors placed between dense cell clusters. Smart BMS (with Bluetooth / CAN bus telemetry) programmed with cell chemistry protection thresholds.",
      spec: "Overvoltage / Short-Circuit / Temp cutoff",
      badge: "Real-time Telemetry",
      icon: Cpu,
    },
    {
      step: "05",
      name: "IP67 Enclosure & Anti-Vibration Potting",
      desc: "Pack inserted into extruded aluminum / deep-drawn steel housing. Polyurethane thermal potting compound injected to dampen automotive shock, seal ingress, and conduct heat to the outer case.",
      spec: "IP67 Ingress & Automotive Drop-Rated",
      badge: "Shock Dampening",
      icon: Factory,
    },
    {
      step: "06",
      name: "Regenerative Aging & AIS-156 Certification",
      desc: "Full 3-cycle automated charge/discharge capacity calibration on regenerative cyclers. Verification of cell balancing delta (<15mV), insulation resistance (>100MΩ), and AIS-156 Phase 2 thermal runaway containment.",
      spec: "ARAI AIS-156 Phase 2 Compliance",
      badge: "Mandatory EV Testing",
      icon: ShieldCheck,
    },
  ];

  const capexItems = [
    { name: "Automatic 10-Channel Cell Sorter (IR & OCV)", cost: "₹16.00 L", share: "11%" },
    { name: "CNC Dual-Pulse / Fiber Laser Spot Welder", cost: "₹22.00 L", share: "15%" },
    { name: "Regenerative Pack Aging & Charge-Discharge Cabinets", cost: "₹30.00 L", share: "20%" },
    { name: "BMS Calibration Rig & Multi-Test Station", cost: "₹10.00 L", share: "7%" },
    { name: "Explosion-Proof Test Chamber & Fire Suppression", cost: "₹14.00 L", share: "9%" },
    { name: "Laser Marking, Serialization & IP67 Sealer", cost: "₹7.50 L", share: "5%" },
    { name: "Cleanroom Dehumidifier, ESD Epoxy Flooring & HVAC", cost: "₹18.00 L", share: "12%" },
    { name: "Initial Working Capital Buffer (Cell Inventory)", cost: "₹32.50 L", share: "21%" },
  ];

  return (
    <div className="my-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 text-[#0A2540] shadow-xs relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#635BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00D4B2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Header Title & Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E6E8EB] pb-4">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-[#635BFF]/10 border border-[#635BFF]/20 text-[#635BFF]">
              <BatteryCharging className="h-6 w-6" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#635BFF]">
                  CleanTech Manufacturing Engine
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00D4B2]/10 text-[#008774] font-semibold border border-[#00D4B2]/20">
                  15 MWh/yr Plant Blueprint
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#0A2540] tracking-tight">
                Lithium Battery Pack Assembly & BMS Integration
              </h4>
            </div>
          </div>

          {/* Navigation Pill Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E6E8EB] rounded-xl shadow-2xs self-start sm:self-auto">
            <button
              onClick={() => setActiveTab("process")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "process"
                  ? "bg-[#635BFF] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540] hover:bg-[#F8FAFC]"
              }`}
            >
              <Zap className="h-3.5 w-3.5" />
              <span>Process Flow</span>
            </button>
            <button
              onClick={() => setActiveTab("economics")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "economics"
                  ? "bg-[#635BFF] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540] hover:bg-[#F8FAFC]"
              }`}
            >
              <BarChart3 className="h-3.5 w-3.5" />
              <span>Pack Economics</span>
            </button>
            <button
              onClick={() => setActiveTab("capex")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "capex"
                  ? "bg-[#635BFF] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540] hover:bg-[#F8FAFC]"
              }`}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>Capex Model</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Process Flow */}
        {activeTab === "process" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {processStages.map((stage) => {
                const IconComponent = stage.icon;
                return (
                  <div
                    key={stage.step}
                    className="p-4 rounded-xl bg-white border border-[#E6E8EB] hover:border-[#635BFF]/30 transition-all hover:shadow-xs group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="font-mono text-xs font-extrabold text-[#635BFF] bg-[#635BFF]/10 px-2 py-0.5 rounded-md">
                          {stage.step}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F1F4F8] text-[#425466] font-medium border border-[#E6E8EB]">
                          {stage.badge}
                        </span>
                      </div>

                      <div className="flex items-start gap-2.5 mb-2">
                        <div className="p-1.5 rounded-lg bg-[#F8FAFC] border border-[#E6E8EB] text-[#0A2540] group-hover:text-[#635BFF] group-hover:bg-[#635BFF]/5 transition-colors shrink-0 mt-0.5">
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <h5 className="font-bold text-sm text-[#0A2540] leading-snug">
                          {stage.name}
                        </h5>
                      </div>

                      <p className="text-xs text-[#425466] leading-relaxed mb-3">
                        {stage.desc}
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-[#F1F4F8] flex items-center justify-between text-[11px] font-mono text-[#627D98]">
                      <span>Standard:</span>
                      <span className="font-semibold text-[#0A2540]">{stage.spec}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Regulatory Footer Callout */}
            <div className="p-3.5 rounded-xl bg-[#00D4B2]/5 border border-[#00D4B2]/20 flex items-center justify-between flex-wrap gap-2 text-xs">
              <div className="flex items-center gap-2 text-[#008774]">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                <span className="font-medium">
                  <strong>Green Category SPCB Clearance:</strong> Battery pack assembly generates zero toxic liquid effluents and no hazardous smelting fumes, allowing fast-track consent.
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#008774] font-semibold">
                ARAI AIS-156 Phase 2 Certified
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Pack Economics Teardown */}
        {activeTab === "economics" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Left Column: Visual Unit Economics Waterfall */}
              <div className="lg:col-span-7 bg-white p-5 rounded-xl border border-[#E6E8EB] shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b border-[#E6E8EB] pb-3">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#627D98] uppercase">
                      Reference Unit Teardown
                    </span>
                    <h5 className="text-base font-bold text-[#0A2540]">
                      60V 30Ah LFP E-Scooter Battery Pack
                    </h5>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-[#627D98]">B2B Selling Price</span>
                    <div className="text-xl font-extrabold text-[#059669]">₹32,500</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Bill of Materials Breakdown */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-[#0A2540]">
                        1. Grade-A Cells, BMS & Nickel Strips (BOM)
                      </span>
                      <span className="font-mono font-bold text-[#0A2540]">₹22,100 (68.0%)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F1F4F8] overflow-hidden">
                      <div className="h-full bg-[#635BFF] rounded-full" style={{ width: "68%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-[#0A2540]">
                        2. Direct Labor, Welding Consumables & QA
                      </span>
                      <span className="font-mono font-bold text-[#0A2540]">₹1,300 (4.0%)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F1F4F8] overflow-hidden">
                      <div className="h-full bg-[#00D4B2] rounded-full" style={{ width: "4%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-semibold text-[#0A2540]">
                        3. Fixed Overheads, Depreciation & 3% Warranty Reserve
                      </span>
                      <span className="font-mono font-bold text-[#0A2540]">₹3,200 (9.9%)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F1F4F8] overflow-hidden">
                      <div className="h-full bg-[#FFA500] rounded-full" style={{ width: "9.9%" }} />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-dashed border-[#E6E8EB]">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-extrabold text-[#059669]">
                        4. Net EBITDA Contribution Per Pack
                      </span>
                      <span className="font-mono font-extrabold text-[#059669]">₹5,900 (18.1%)</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#F1F4F8] overflow-hidden">
                      <div className="h-full bg-[#059669] rounded-full" style={{ width: "18.1%" }} />
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#F8FAFC] rounded-lg border border-[#E6E8EB] flex items-center justify-between text-xs">
                  <span className="text-[#627D98]">Gross Margin Contribution:</span>
                  <span className="font-mono font-bold text-[#0A2540]">₹9,100 (28.0% Gross)</span>
                </div>
              </div>

              {/* Right Column: Plant Annual Metrics */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-3">
                <div className="p-4 rounded-xl bg-white border border-[#E6E8EB] shadow-2xs">
                  <div className="flex items-center gap-2 text-[#635BFF] mb-1">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">
                      Annual Output (15 MWh)
                    </span>
                  </div>
                  <div className="text-2xl font-extrabold text-[#0A2540]">8,300 Packs</div>
                  <p className="text-xs text-[#627D98] mt-0.5">
                    Single-shift equivalent @ 28–30 packs/day capacity
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E6E8EB] shadow-2xs">
                  <div className="flex items-center gap-2 text-[#059669] mb-1">
                    <Activity className="h-4 w-4" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">
                      Gross Topline Potential
                    </span>
                  </div>
                  <div className="text-2xl font-extrabold text-[#0A2540]">₹26.9 Cr / Year</div>
                  <p className="text-xs text-[#627D98] mt-0.5">
                    Net Annual EBITDA: ~₹4.85 Cr @ 18% EBITDA margin
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#635BFF]/5 border border-[#635BFF]/20">
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="text-[#635BFF] font-bold">Estimated Payback Period:</span>
                    <span className="font-extrabold text-[#0A2540]">18 – 24 Months</span>
                  </div>
                  <div className="w-full bg-[#E6E8EB] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#635BFF] h-full rounded-full" style={{ width: "75%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Capex & Machinery Matrix */}
        {activeTab === "capex" && (
          <div className="space-y-4">
            <div className="overflow-x-auto rounded-xl border border-[#E6E8EB] bg-white shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-[#E6E8EB] text-[#0A2540]">
                    <th className="py-3 px-4 font-bold text-xs uppercase">Machinery & Infrastructure</th>
                    <th className="py-3 px-4 font-bold text-xs uppercase text-right">Capex Estimate</th>
                    <th className="py-3 px-4 font-bold text-xs uppercase text-right">Share of Outlay</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6E8EB]">
                  {capexItems.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#F8FAFC]/80 transition-colors">
                      <td className="py-2.5 px-4 font-medium text-[#0A2540] flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#635BFF] shrink-0" />
                        <span>{item.name}</span>
                      </td>
                      <td className="py-2.5 px-4 font-mono font-bold text-[#0A2540] text-right">
                        {item.cost}
                      </td>
                      <td className="py-2.5 px-4 font-mono text-[#627D98] text-right">
                        {item.share}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-[#F1F5F9]/80 font-bold border-t-2 border-[#E6E8EB]">
                    <td className="py-3 px-4 text-[#0A2540] uppercase tracking-wide">
                      Total 15 MWh Turnkey Line Capex + Working Buffer
                    </td>
                    <td className="py-3 px-4 font-mono text-[#059669] text-base text-right font-extrabold">
                      ₹1.50 Cr
                    </td>
                    <td className="py-3 px-4 font-mono text-[#059669] text-right font-bold">
                      100.0%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Subsidy Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-[#E6E8EB] flex items-start gap-2.5">
                <span className="p-1.5 rounded-lg bg-[#059669]/10 text-[#059669] shrink-0 mt-0.5">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <div>
                  <h6 className="font-bold text-xs text-[#0A2540]">CGTMSE Collateral-Free Debt</h6>
                  <p className="text-[11px] text-[#425466] leading-relaxed">
                    Eligible for up to ₹5.00 Cr bank term loan without third-party collateral under credit guarantee trust.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#E6E8EB] flex items-start gap-2.5">
                <span className="p-1.5 rounded-lg bg-[#635BFF]/10 text-[#635BFF] shrink-0 mt-0.5">
                  <Zap className="h-4 w-4" />
                </span>
                <div>
                  <h6 className="font-bold text-xs text-[#0A2540]">State EV & Capital Subsidies</h6>
                  <p className="text-[11px] text-[#425466] leading-relaxed">
                    10%–25% capital investment subsidy, 100% stamp duty exemption, and green tariff incentives across key EV states.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
