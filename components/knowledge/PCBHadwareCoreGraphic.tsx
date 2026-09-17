"use client";

import React, { useState } from "react";
import {
  Cpu,
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
} from "lucide-react";

export function PCBHadwareCoreGraphic() {
  const [activeTab, setActiveTab] = useState<"flow" | "pipeline">("flow");

  const assemblySteps = [
    {
      step: "01",
      title: "File CAM & Stencil",
      desc: "Gerber/BOM verification and laser-cut stainless steel stencil fabrication.",
      detail: "Component pitch & footprint audit",
      icon: Search,
    },
    {
      step: "02",
      title: "Solder Paste (SPI)",
      desc: "Automatic screen printing applying precision lead-free solder paste.",
      detail: "3D Solder Paste Inspection",
      icon: Activity,
    },
    {
      step: "03",
      title: "Robotic Pick & Place",
      desc: "High-speed multi-head placement of passives (0201/0402) and BGAs at 15k–50k CPH.",
      detail: "Vision alignment verification",
      icon: Cpu,
    },
    {
      step: "04",
      title: "Reflow Soldering",
      desc: "Multi-zone thermal convection chamber forming permanent metallurgical solder joints.",
      detail: "RoHS thermal profiling",
      icon: Flame,
    },
    {
      step: "05",
      title: "3D AOI Inspection",
      desc: "Automated optical scanning for polarity, solder fillets, bridging, and tombstoning.",
      detail: "Zero-defect IPC-A-610 gate",
      icon: ShieldCheck,
    },
    {
      step: "06",
      title: "Functional Testing",
      desc: "In-Circuit Testing (ICT) and benchtop operational validation under load.",
      detail: "100% QA bench clearance",
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
              <Cpu className="h-5 w-5" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540] block">
                The Electronics Hardware Core
              </span>
              <span className="text-[11px] text-[#627D98]">
                From Raw Bare Substrate to High-Reliability Populated Assembly (PCBA)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#E6E8EB] self-start sm:self-auto shadow-2xs">
            <button
              onClick={() => setActiveTab("flow")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "flow"
                  ? "bg-[#635BFF] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540]"
              }`}
            >
              Hardware Flow
            </button>
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "pipeline"
                  ? "bg-[#635BFF] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540]"
              }`}
            >
              SMT Line Pipeline
            </button>
          </div>
        </div>

        {activeTab === "flow" ? (
          /* Flow Architecture Model */
          <div className="space-y-6">
            {/* Top 3 Input Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Input 1: Bare PCB */}
              <div className="rounded-xl bg-white border border-[#E2E8F0] p-4.5 space-y-3 shadow-2xs relative">
                <div className="flex items-center justify-between">
                  <span className="p-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0A2540]">
                    <Layers className="h-4 w-4 text-[#635BFF]" />
                  </span>
                  <span className="text-[10px] font-mono text-[#0A2540] bg-[#F1F5F9] px-2 py-0.5 rounded font-bold border border-[#E2E8F0]">
                    SUBSTRATE
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0A2540]">1. Bare PCB</h4>
                  <p className="text-xs text-[#425466] mt-1 leading-relaxed">
                    Etched fiberglass (FR4 / Rogers) substrate with multi-layer copper routing, via holes, and solder mask pads.
                  </p>
                </div>
                <div className="pt-1 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    2–16 Layers
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    IPC Class 2/3
                  </span>
                </div>
              </div>

              {/* Input 2: Electronic Components */}
              <div className="rounded-xl bg-white border border-[#E2E8F0] p-4.5 space-y-3 shadow-2xs relative">
                <div className="flex items-center justify-between">
                  <span className="p-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0A2540]">
                    <Binary className="h-4 w-4 text-[#00A88F]" />
                  </span>
                  <span className="text-[10px] font-mono text-[#0A2540] bg-[#F1F5F9] px-2 py-0.5 rounded font-bold border border-[#E2E8F0]">
                    BILL OF MATERIALS
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0A2540]">2. Components (BOM)</h4>
                  <p className="text-xs text-[#425466] mt-1 leading-relaxed">
                    Microcontrollers, power management ICs, BGAs, miniature passives (0201/0402), sensors, and interface headers.
                  </p>
                </div>
                <div className="pt-1 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    Active & Passives
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    Reels / Cut Tape
                  </span>
                </div>
              </div>

              {/* Input 3: Automated SMT Line */}
              <div className="rounded-xl bg-white border border-[#E2E8F0] p-4.5 space-y-3 shadow-2xs relative">
                <div className="flex items-center justify-between">
                  <span className="p-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0A2540]">
                    <Zap className="h-4 w-4 text-[#F59E0B]" />
                  </span>
                  <span className="text-[10px] font-mono text-[#0A2540] bg-[#F1F5F9] px-2 py-0.5 rounded font-bold border border-[#E2E8F0]">
                    HIGH-PRECISION SMT
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0A2540]">3. Automated SMT Line</h4>
                  <p className="text-xs text-[#425466] mt-1 leading-relaxed">
                    Robotic pick-and-place (15k–50k CPH), precision solder paste printing, multi-zone thermal reflow & AOI scanning.
                  </p>
                </div>
                <div className="pt-1 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    15k–50k CPH
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F1F5F9] text-[#627D98] font-medium">
                    Lead-Free RoHS
                  </span>
                </div>
              </div>
            </div>

            {/* Connecting Convergence Indicator */}
            <div className="flex items-center justify-center gap-3 py-1">
              <div className="h-[1px] bg-[#E2E8F0] flex-1" />
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-2xs text-xs font-mono text-[#635BFF] font-semibold">
                <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
                <span>Integrated Surface-Mount Assembly Process</span>
              </div>
              <div className="h-[1px] bg-[#E2E8F0] flex-1" />
            </div>

            {/* Bottom Output Hero Card: Populated PCBA (Clean Light Theme) */}
            <div className="rounded-xl bg-white border-2 border-[#635BFF]/25 p-5 sm:p-6 text-[#0A2540] shadow-sm relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-md bg-[#00D4B2]/15 border border-[#00D4B2]/30 text-[#00A88F]">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A88F]">
                      End Deliverable • Certified Hardware Core
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0A2540]">
                    Populated PCBA (Printed Circuit Board Assembly)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#425466] max-w-2xl leading-relaxed">
                    The functional heart and nervous system of modern electronics — ready for box-build integration into EV motor controllers, smart utility meters (RDSS), medical diagnostics, and industrial IoT nodes.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F0FDF4] border border-[#BBF7D0] text-xs text-[#166534]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A]" />
                    <span className="font-mono text-[11px] font-semibold">100% AOI & Functional QA</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F0F5FF] border border-[#D0E2FF] text-xs text-[#1E40AF]">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#635BFF]" />
                    <span className="font-mono text-[11px] font-semibold">IPC-A-610 Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* SMT Line Step-by-Step Pipeline */
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {assemblySteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2.5 shadow-2xs hover:border-[#CBD5E1] transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#635BFF] bg-[#F0F5FF] px-2 py-0.5 rounded border border-[#D0E2FF]">
                        STEP {step.step}
                      </span>
                      <Icon className="h-4 w-4 text-[#627D98]" />
                    </div>
                    <h5 className="font-bold text-sm text-[#0A2540]">{step.title}</h5>
                    <p className="text-xs text-[#425466] leading-relaxed">{step.desc}</p>
                    <div className="pt-1.5 border-t border-[#F1F5F9] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A88F]" />
                      <span className="text-[10px] font-mono text-[#627D98] font-medium">
                        {step.detail}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-3.5 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] flex items-start gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
              <div className="text-xs text-[#166534]">
                <strong>Standard Quality Benchmark:</strong> Commercial assembly facilities operate under{" "}
                <span className="font-mono font-semibold">IPC-A-610 Class 2</span> (standard consumer & IoT) or{" "}
                <span className="font-mono font-semibold">Class 3</span> (high-reliability automotive, medical & defense).
              </div>
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="pt-2 border-t border-[#E6E8EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[#627D98] font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
            <span>1008 ESDM & Hardware Engineering Architecture</span>
          </div>
          <span>B2B Contract Manufacturing & Job-Work Model</span>
        </div>
      </div>
    </div>
  );
}
