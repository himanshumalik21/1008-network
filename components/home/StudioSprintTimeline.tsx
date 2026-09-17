"use client";

import React, { useState } from "react";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const NetworkFiberBurst = dynamic(
  () =>
    import("@/components/canvas/NetworkFiberBurst").then(
      (mod) => mod.NetworkFiberBurst
    ),
  { ssr: false }
);
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
} from "lucide-react";

export function StudioSprintTimeline() {
  const [activePhase, setActivePhase] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const phases = [
    {
      id: 1,
      phaseLabel: "PHASE 01",
      name: "Phase 1: Venture Architecture & Feasibility Lock",
      milestone: "Thesis & Feasibility Lock",
      headline: "De-risking the foundation: Financial modeling, system architecture scoping, and statutory clearances.",
      deliverables: [
        "Collaborative vision mapping, operational scoping & financial feasibility audit",
        "Unit economics, contribution margin structures, and milestone capital allocation",
        "Technical & physical architecture scoping (Cloud software, contract mfg, or specialized facilities)",
        "Statutory compliance roadmap: Corporate governance, GST, licensing & IP structure",
      ],
      tag: "Foundation Gate",
    },
    {
      id: 2,
      phaseLabel: "PHASE 02",
      name: "Phase 2: Core Engineering, Supply Chain & Systems Setup",
      milestone: "Infrastructure & Systems",
      headline: "Rapid build & deployment: Cloud ERPs, product engineering, vendor contracting, and SOPs.",
      deliverables: [
        "Production-grade digital core: Automated Cloud ERP, inventory ledgers & billing APIs",
        "Supply chain & vendor execution: OEM batch manufacturing, 3PL logistics, or cloud infra setup",
        "Standard Operating Procedures (SOPs), quality control benchmarks & workflow automation",
        "Data integrity audit: Structuring transparent cash-flow rails for institutional credit eligibility",
      ],
      tag: "Execution Gate",
    },
    {
      id: 3,
      phaseLabel: "PHASE 03",
      name: "Phase 3: Core Hiring, GTM Activation & First Revenue",
      milestone: "Commercial Activation",
      headline: "Commercial activation: Sourcing mission-critical operators, brand launch, and closing opening clients.",
      deliverables: [
        "Matching and recruiting aligned Co-Founders, engineering leads, or operational practice heads",
        "Brand identity, commercial positioning, and targeted go-to-market rollout",
        "Securing inaugural paying customer orders, enterprise B2B pilots & positive operating cash flow",
        "Onboarding customer invoices to factoring rails (TReDS) for 48-hour working capital velocity",
      ],
      tag: "Traction Gate",
    },
    {
      id: 4,
      phaseLabel: "PHASE 04",
      name: "Phase 4: Institutional Handover & Full Autonomy",
      milestone: "Full Founder Independence",
      headline: "Achieving independence: Full IP assignment, investor data room, and zero vendor lock-in.",
      deliverables: [
        "100% legal assignment of all code, supply contracts, domains, licenses & IP to your entity",
        "Autonomous day-to-day operations run by your permanent full-time team",
        "Institutional investor data room preparation, cap table cleanup & syndicate capital matching",
        "Transition from active studio co-building to ongoing long-term board advisory",
      ],
      tag: "Autonomy Gate",
    },
  ];

  return (
    <section id="blueprint" className="pt-10 sm:pt-14 pb-20 bg-[#F6F9FC] relative overflow-hidden">
      {/* Background Architectural Box Grid & Ambient Motion */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-50 pointer-events-none" />

      {/* Network Fiber Constellation Radiating Background */}
      <NetworkFiberBurst className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[420px] opacity-65 pointer-events-none z-0" />

      <div className="absolute top-1/3 -right-20 w-[550px] h-[450px] bg-gradient-to-bl from-[#00D4B2]/07 via-[#635BFF]/05 to-transparent blur-[140px] pointer-events-none animate-float-reverse" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[400px] bg-gradient-to-tr from-[#635BFF]/06 to-transparent blur-[130px] pointer-events-none animate-float-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3.5">
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" size="md" pulse>
              1008 Venture Studio // Turnkey Build & Equity
            </Badge>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans leading-[1.12]">
            We build the operational core.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00A389] to-[#059669]">
              You scale the enterprise.
            </span>
          </h1>

          <p className="text-[#425466] text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-2xl mx-auto font-normal">
            A dedicated operational co-building partnership structured across 4 milestone gates—engineered to architect your systems, recruit core CXO talent, scale cash-flow velocity, and build a lasting, high-value enterprise.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="md"
              variant="primary"
              onClick={() => setModalOpen(true)}
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold px-6 shadow-[0_4px_14px_rgba(99,91,255,0.25)]"
            >
              Apply to Build With Us
            </Button>
            <Button
              href="#personas"
              size="md"
              variant="secondary"
              className="w-full sm:w-auto font-semibold"
            >
              Explore Domain Blueprints
            </Button>
          </div>
        </div>

        {/* Interactive Sprint Phase Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {phases.map((phase, idx) => {
            const isSelected = activePhase === idx;
            return (
              <button
                key={phase.id}
                onClick={() => setActivePhase(idx)}
                className={cn(
                  "p-3 sm:p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between shadow-xs",
                  isSelected
                    ? "bg-white border-[#635BFF] shadow-md ring-1 ring-[#635BFF]/30"
                    : "bg-white/80 border-[#E6E8EB] hover:border-[#CBD5E1] text-[#627D98]"
                )}
              >
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className={cn("text-[10px] sm:text-xs font-semibold", isSelected ? "text-[#635BFF]" : "text-[#627D98]")}>
                    {phase.phaseLabel}
                  </span>
                  <Badge variant={isSelected ? "indigo" : "slate"} size="sm">
                    {phase.tag}
                  </Badge>
                </div>
                <div className={cn("text-xs sm:text-sm font-semibold leading-snug", isSelected ? "text-[#0A2540]" : "text-[#425466]")}>
                  {phase.name.split(":")[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Details Box */}
        <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-10 relative shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#635BFF] font-bold uppercase tracking-wider">
                  {phases[activePhase].phaseLabel}
                </span>
                <span className="text-[#CBD5E1]">•</span>
                <span className="text-xs font-medium text-[#627D98]">{phases[activePhase].milestone}</span>
                <span className="text-[#CBD5E1]">•</span>
                <span className="text-xs font-medium text-[#627D98]">{phases[activePhase].tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2540] font-sans">
                {phases[activePhase].name}
              </h3>

              <p className="text-[#425466] text-base leading-relaxed">
                {phases[activePhase].headline}
              </p>

              <div className="pt-2 space-y-2.5">
                <div className="text-xs uppercase tracking-wider text-[#627D98] font-bold">
                  Key Phase Deliverables:
                </div>
                {phases[activePhase].deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-sm text-[#0A2540]">
                    <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-4">
              <div className="text-xs font-bold text-[#059669] uppercase tracking-wider flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>The 1008 Network Commitment</span>
              </div>
              <p className="text-xs text-[#425466] leading-relaxed font-sans">
                We co-build alongside you with shared equity and skin in the game. You walk away with full IP ownership, an operational business, customer revenue, scalable workflows, and ongoing strategic board advisory.
              </p>
              <div className="pt-2">
                <Button
                  onClick={() => setModalOpen(true)}
                  variant="primary"
                  size="md"
                  className="w-full justify-center font-semibold"
                >
                  Apply to Build With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StudioApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
