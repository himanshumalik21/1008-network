"use client";

import React, { useState } from "react";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { NetworkFiberBurst } from "@/components/canvas/NetworkFiberBurst";
import { cn } from "@/lib/utils";
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
      name: "Phase 1: Vision, Real Estate & Feasibility",
      days: "Days 1–45",
      headline: "Founder vision alignment, financial budgeting, site/land scouting, and regulatory licensing roadmap.",
      deliverables: [
        "In-depth vision & operational scope mapping with the founder",
        "Commercial real estate & industrial land scouting and site feasibility",
        "Comprehensive capital allocation & unit economics modeling",
        "Government registration, GST, and industry licensing roadmap under NDA",
      ],
      tag: "Feasibility Gate",
    },
    {
      id: 2,
      name: "Phase 2: Plant/Facility Setup, Machinery & Tech",
      days: "Days 46–90",
      headline: "Physical infrastructure build-out, machinery procurement, supply chain, and tech stack setup.",
      deliverables: [
        "Turnkey plant, facility, or commercial venue build-out & civil coordination",
        "Machinery & equipment procurement, vendor negotiation, and installation",
        "Registration paperwork clearance (zoning, pollution, municipal permits)",
        "Tech stack, ERP/inventory systems, and online digital storefront setup",
      ],
      tag: "Setup Gate",
    },
    {
      id: 3,
      name: "Phase 3: Manpower, Marketing & First Customers",
      days: "Days 91–135",
      headline: "Team recruitment, operational training, launch marketing, and landing initial revenue.",
      deliverables: [
        "Recruiting qualified plant operators, medical/hospitality staff, or engineers",
        "Standard operating procedure (SOP) training & quality control protocols",
        "Launch marketing campaigns, branding, and PR activation",
        "Landing first paying customers, distributor tie-ups, and commercial sales",
      ],
      tag: "Traction Gate",
    },
    {
      id: 4,
      name: "Phase 4: Operational Handover & Independence",
      days: "Days 136–180",
      headline: "Full systems handover, institutional governance, and complete founder operational autonomy.",
      deliverables: [
        "100% ownership of plant assets, machinery, code, and IP assigned to your entity",
        "Stable operational run-rate with permanent on-site management team",
        "Audited operational SOPs, vendor contracts, and compliance ledgers",
        "Complete transition to founder operational autonomy with zero vendor lock-in",
      ],
      tag: "Handover Gate",
    },
  ];

  return (
    <section id="blueprint" className="py-24 bg-[#F6F9FC] border-t border-[#E6E8EB] relative overflow-hidden">
      {/* Background Architectural Box Grid & Ambient Motion */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-45 pointer-events-none" />

      {/* Network Fiber Constellation Radiating Background */}
      <NetworkFiberBurst className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[420px] opacity-65 pointer-events-none z-0" />

      <div className="absolute top-1/3 -right-20 w-[550px] h-[450px] bg-gradient-to-bl from-[#00D4B2]/07 via-[#635BFF]/05 to-transparent blur-[140px] pointer-events-none animate-float-reverse" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[400px] bg-gradient-to-tr from-[#635BFF]/06 to-transparent blur-[130px] pointer-events-none animate-float-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="indigo" size="sm">The 180-Day Blueprint</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Build with you. Not forever for you.
          </h2>
          <p className="text-[#425466] text-base sm:text-lg">
            A temporary, high-intensity 180-day venture-building partnership engineered to make you completely self-sustaining.
          </p>
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
                  "p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between shadow-xs",
                  isSelected
                    ? "bg-white border-[#635BFF] shadow-md ring-1 ring-[#635BFF]/30"
                    : "bg-white/80 border-[#E6E8EB] hover:border-[#CBD5E1] text-[#627D98]"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={cn("text-xs font-semibold", isSelected ? "text-[#635BFF]" : "text-[#627D98]")}>
                    {phase.days}
                  </span>
                  <Badge variant={isSelected ? "indigo" : "slate"} size="sm">
                    {phase.tag}
                  </Badge>
                </div>
                <div className={cn("text-sm font-semibold", isSelected ? "text-[#0A2540]" : "text-[#425466]")}>
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
                  {phases[activePhase].days}
                </span>
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
                  Key Sprint Deliverables:
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
                By Day 180, 1008 Network transitions out of daily operations. You walk away with full equity ownership, an operational business, customer revenue, scalable workflows, and zero vendor lock-in.
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
