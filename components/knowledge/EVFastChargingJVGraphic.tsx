"use client";

import React, { useState } from "react";
import {
  Zap,
  ArrowDown,
  CheckCircle2,
  Sparkles,
  Activity,
  ShieldCheck,
  Factory,
  Cpu,
  Globe2,
  Handshake,
  Flame,
  Workflow,
} from "lucide-react";

export function EVFastChargingJVGraphic() {
  const [activeTab, setActiveTab] = useState<"flow" | "pipeline">("flow");

  const processSteps = [
    {
      step: "01",
      title: "Power Module SMT & Assembly",
      desc: "High-frequency planar transformers, SiC MOSFETs / IGBT power conversion modules, and gate drivers populated on automated SMT lines with conformal coating.",
      detail: "High-Efficiency SiC / IGBT Topology",
      icon: Cpu,
    },
    {
      step: "02",
      title: "Thermal Cold-Plate Bonding",
      desc: "Power modules mounted onto liquid-cooled cold plates or high-surface-area aluminum extrusion heat sinks with high-conductivity TIM interface.",
      detail: "Ambient De-Rating up to 50°C",
      icon: Flame,
    },
    {
      step: "03",
      title: "Enclosure & Busbar Integration",
      desc: "Heavy-gauge IP55/IP65 sheet-metal outdoor kiosks integrated with high-current copper busbars, DC contactors, circuit breakers, and RCDs.",
      detail: "Heavy Duty IP55/IP65 Outdoor Kiosk",
      icon: Factory,
    },
    {
      step: "04",
      title: "Smart Controller & Display",
      desc: "Embedded Linux charging controllers, OCPP 2.0.1 telemetry stack, ISO 15118 Plug & Charge, 4G IoT gateways, and daylight-readable HMI touchscreens.",
      detail: "OCPP 2.0.1 & ISO 15118 Protocol",
      icon: Workflow,
    },
    {
      step: "05",
      title: "1,000V Regenerative Burn-In",
      desc: "Every assembled DC fast charger hooked to regenerative DC electronic loads (up to 1,000V / 250A) for 4–8 hours full-load thermal and ripple stabilization.",
      detail: "4–8 Hr Full-Load Regenerative QA",
      icon: Zap,
    },
    {
      step: "06",
      title: "ARAI / IS 17017 Validation",
      desc: "Dielectric insulation test, ground continuity, CCS2/CHAdeMO communication handshake, safety compliance signoff, and crating for dispatch.",
      detail: "ARAI / ICAT IS 17017 Certified",
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
              <Zap className="h-5 w-5" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540] block">
                EV Fast Charging &amp; Power Electronics Joint Venture
              </span>
              <span className="text-[11px] text-[#627D98]">
                Global Power IP + 1008 Network Indian Manufacturing &amp; Regulatory Execution
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
              Joint Venture Matrix
            </button>
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "pipeline"
                  ? "bg-[#0A2540] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540]"
              }`}
            >
              Manufacturing Pipeline
            </button>
          </div>
        </div>

        {activeTab === "flow" ? (
          /* Flow Architecture Model */
          <div className="space-y-6">
            {/* Top 2 Joint Venture Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Partner 1: Global / Technology IP Partner */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between shadow-2xs space-y-4 hover:border-[#635BFF]/40 transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <span className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#635BFF]">
                      <Globe2 className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-mono text-[#635BFF] bg-[#F0F0FF] px-2.5 py-1 rounded-md font-bold border border-[#E0E0FF]">
                      TECHNOLOGY &amp; IP PARTNER
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540] tracking-tight">
                    1. Hardware IP &amp; Power Architecture
                  </h4>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed my-2">
                    Provides validated AC-DC / DC-DC power conversion module designs (SiC/IGBT topologies), thermal modeling, OCPP 2.0.1 embedded software stack, and ISO 15118 Plug &amp; Charge protocols.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    SiC/IGBT Power IP
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    OCPP 2.0.1 Firmware
                  </span>
                </div>
              </div>

              {/* Partner 2: 1008 Network / Indian Manufacturing Partner */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between shadow-2xs space-y-4 hover:border-[#00D4B2]/40 transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F1F5F9]">
                    <span className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#00A88F]">
                      <Factory className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-mono text-[#00897B] bg-[#E6FFFA] px-2.5 py-1 rounded-md font-bold border border-[#B2DFDB]">
                      1008 NETWORK &amp; INDIAN PARTNER
                    </span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540] tracking-tight">
                    2. Manufacturing &amp; Regulatory Execution
                  </h4>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed my-2">
                    Provides industrial plant setup, automated assembly lines, high-voltage regenerative burn-in bays, ARAI/ICAT IS 17017 certification, supply chain localization, and institutional OMC/CPO sales.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] flex flex-wrap gap-2 mt-auto">
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    ARAI / ICAT Compliance
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    OMC &amp; CPO Tenders
                  </span>
                </div>
              </div>
            </div>

            {/* Connecting Convergence Indicator */}
            <div className="flex items-center justify-center gap-3 py-2">
              <div className="h-[1px] bg-[#E2E8F0] flex-1" />
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] shadow-2xs text-xs font-mono text-[#635BFF] font-semibold">
                <Handshake className="h-4 w-4 text-[#635BFF]" />
                <span>Joint Venture Co-Building Synthesis</span>
              </div>
              <div className="h-[1px] bg-[#E2E8F0] flex-1" />
            </div>

            {/* Bottom Output Hero Card */}
            <div className="rounded-2xl bg-white border-2 border-[#635BFF]/30 p-6 sm:p-8 text-[#0A2540] shadow-sm relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-[#635BFF]/10 border border-[#635BFF]/20 text-[#635BFF]">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#635BFF]">
                      Deliverable • High-Power Fast Charging Infrastructure
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight">
                    ARAI-Certified 60 kW to 240 kW DC Fast Chargers
                  </h3>
                  <p className="text-xs sm:text-sm text-[#425466] max-w-2xl leading-relaxed">
                    Indigenous manufacturing of high-voltage DC fast charging stations with dual CCS2 guns, liquid cooling support, and full compatibility across Oil Marketing Companies (OMCs), commercial bus depots, and national highway corridors.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-xs text-[#166534] font-medium">
                    <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                    <span className="font-mono text-xs font-semibold">ARAI / IS 17017 Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F0F5FF] border border-[#D0E2FF] text-xs text-[#1E40AF] font-medium">
                    <ShieldCheck className="h-4 w-4 text-[#635BFF]" />
                    <span className="font-mono text-xs font-semibold">PM E-DRIVE Subsidy Eligible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Step-by-Step Manufacturing Pipeline */
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
                        <span className="text-xs font-mono font-bold text-[#635BFF] bg-[#F0F0FF] px-2 py-0.5 rounded border border-[#E0E0FF]">
                          STEP {step.step}
                        </span>
                        <span className="p-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#627D98]">
                          <IconComponent className="h-4 w-4 text-[#635BFF]" />
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
                <Factory className="h-4 w-4 text-[#635BFF]" />
                <span>
                  Requires <strong>10,000–25,000 sq. ft. industrial facility</strong> with 250–500 kVA dedicated power for full-load regenerative burn-in.
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#627D98] bg-[#F8FAFC] px-2.5 py-1 rounded-md border border-[#E2E8F0]">
                Dual CCS2 / 1000V DC • OCPP 2.0.1 Ready
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
