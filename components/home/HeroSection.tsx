"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/brand/Badge";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { FlowingMeshCanvas } from "@/components/canvas/FlowingMeshCanvas";
import { trackStudioModalOpen } from "@/lib/analytics";
import {
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  Clock,
  Briefcase,
  Code2,
  Lock,
  ChevronRight,
} from "lucide-react";

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSector, setActiveSector] = useState<"tech" | "d2c" | "product" | "manufacturing" | "globalIndia" | "turnaround">("tech");

  const sectorPreviews = {
    tech: {
      label: "⚡ Tech Startups & SaaS",
      headline: "Venture-Grade Architecture, Feasibility MVP & GTM Activation",
      phases: [
        { phase: "PHASE 01", milestone: "Architecture & Feasibility", title: "System Design & Feasibility MVP", desc: "Production Next.js / cloud architecture, technical scoping & budget allocation.", gate: "Architecture Gate" },
        { phase: "PHASE 02", milestone: "Core Build & Integrations", title: "Rapid Engineering & Vetted Hiring", desc: "Building core database models, API pipelines & sourcing vetted engineering talent.", gate: "Build Gate" },
        { phase: "PHASE 03", milestone: "Pilot Customer Traction", title: "Paid Pilots & GTM Launch", desc: "Securing 3+ paying pilot clients, onboarding telemetry & usage feedback loops.", gate: "Traction Gate" },
        { phase: "PHASE 04", milestone: "Syndicate Syndication", title: "Data Room & Investor Syndication", desc: "Cap table optimization, investor syndicate matching & operational handover.", gate: "Scale Gate" },
      ]
    },
    d2c: {
      label: "🛍️ Consumer Brands & D2C",
      headline: "Formulation, Batch Manufacturing, 3PL & Omnichannel Commerce",
      phases: [
        { phase: "PHASE 01", milestone: "Formulation & Contract Mfg", title: "Formulation & Contract Mfg", desc: "OEM batch manufacturing contracts, packaging prototyping & regulatory compliance.", gate: "Product Gate" },
        { phase: "PHASE 02", milestone: "Supply Chain & Commerce", title: "Supply Chain & Commerce Stack", desc: "Warehousing, 3PL logistics, custom digital storefront & payment rails.", gate: "Supply Gate" },
        { phase: "PHASE 03", milestone: "GTM Launch & Distribution", title: "GTM Launch & Paid Acquisition", desc: "Brand launch campaigns, influencer seeding & initial customer order volume.", gate: "Traction Gate" },
        { phase: "PHASE 04", milestone: "Retail Channels & Handover", title: "Retail Channels & Unit Economics", desc: "Retail distributor placement, positive contribution margin & handover.", gate: "Autonomy Gate" },
      ]
    },
    product: {
      label: "📦 Product Brands & Hardware",
      headline: "Industrial Design, Custom Tooling & Direct-to-Market Execution",
      phases: [
        { phase: "PHASE 01", milestone: "Design & Prototyping", title: "Industrial Prototyping & CAD", desc: "3D CAD modeling, material selection, functional prototyping & safety certifications.", gate: "Design Gate" },
        { phase: "PHASE 02", milestone: "Tooling & Pilot Run", title: "Custom Molds & Batch Runs", desc: "Die tooling, contract manufacturing partner lock & quality assurance testing.", gate: "Tooling Gate" },
        { phase: "PHASE 03", milestone: "Packaging & Logistics", title: "Packaging & Domestic Distribution", desc: "Retail-ready packaging, barcode compliance, freight forwarding & channel partners.", gate: "Channel Gate" },
        { phase: "PHASE 04", milestone: "Commercial Rollout", title: "Commercial Rollout & Handover", desc: "Wholesale distributor fulfillment, warranty systems & operational transition.", gate: "Handover Gate" },
      ]
    },
    manufacturing: {
      label: "🏭 Manufacturing & Plants",
      headline: "Turnkey Plant Setup, OEM Machinery Sourcing & Assembly",
      phases: [
        { phase: "PHASE 01", milestone: "Scouting & Feasibility", title: "Site Scouting & Feasibility", desc: "Zoning approvals, industrial corridor land scouting & capital budgeting.", gate: "Foundation Gate" },
        { phase: "PHASE 02", milestone: "Commissioning & Civil", title: "Machinery & Plant Civil", desc: "OEM machinery sourcing, custom tooling, factory civil works & trial runs.", gate: "Commissioning Gate" },
        { phase: "PHASE 03", milestone: "Operations & Quality", title: "Staffing & Quality SOPs", desc: "Recruiting plant supervisors, machine operators & vendor supply contracts.", gate: "Operations Gate" },
        { phase: "PHASE 04", milestone: "Full Turnkey Handover", title: "B2B Sales & Handover", desc: "Securing dealer purchase orders, full asset transfer & founder autonomy.", gate: "Autonomy Gate" },
      ]
    },
    globalIndia: {
      label: "🌐 India Market Entry & Co-Investment",
      headline: "Semiconductor, EV & Advanced Manufacturing Entry in India",
      phases: [
        { phase: "PHASE 01", milestone: "Regulatory & Subsidy Lock", title: "State Subsidies & Legal Entity", desc: "PLI scheme optimization, state policy incentives & joint-venture entity setup.", gate: "Policy Gate" },
        { phase: "PHASE 02", milestone: "Mega-Site & JV Partnering", title: "Industrial Corridors & Supply JV", desc: "Securing industrial corridor land, cleanroom/plant infra & local supplier joint ventures.", gate: "Infra Gate" },
        { phase: "PHASE 03", milestone: "OEM Setup & Talent Hub", title: "Machinery Import & Engineering Hiring", desc: "Customs clearance for specialized tooling, local engineering recruitment & safety SOPs.", gate: "Execution Gate" },
        { phase: "PHASE 04", milestone: "Commercial Production", title: "Production Ramp & Syndicate Co-Capital", desc: "Commercial volume production, domestic supply contracts & syndicate capital alignment.", gate: "Scale Gate" },
      ]
    },
    turnaround: {
      label: "🔄 Business Turnaround & Reboot",
      headline: "Operational Restructuring & Cash-Flow Stabilization",
      phases: [
        { phase: "PHASE 01", milestone: "Financial Diagnostic", title: "Root-Cause Financial Audit", desc: "Stopping capital leaks, analyzing margin bleeds & restructuring supplier terms.", gate: "Diagnostic Gate" },
        { phase: "PHASE 02", milestone: "Systems Overhaul", title: "Operational & Tech Overhaul", desc: "Streamlining bloated workflows, fixing broken software & optimizing inventory.", gate: "Repair Gate" },
        { phase: "PHASE 03", milestone: "Sales Reignited", title: "Commercial Sales Reignited", desc: "Re-activating dormant accounts, upgrading sales team & establishing positive cash flow.", gate: "Momentum Gate" },
        { phase: "PHASE 04", milestone: "Autonomy & Growth", title: "Self-Sustaining Autonomy", desc: "Institutionalized governance, profitable run-rate & sustainable growth.", gate: "Stability Gate" },
      ]
    },
  };

  const handleOpenModal = () => {
    trackStudioModalOpen("hero_primary_cta");
    setModalOpen(true);
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-38 sm:pb-24 overflow-hidden bg-white">
      {/* 1. Architectural Box Grid Pattern with Radial Fade */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-55 pointer-events-none" />

      {/* 2. Stripe-Caliber Flowing Mesh Wave Artwork Canvas - Seamlessly flowing through Hero and down into Turnkey Infrastructure */}
      <FlowingMeshCanvas className="absolute -top-12 right-0 w-full md:w-[50%] lg:w-[46%] xl:w-[42%] h-[1600px] min-h-full opacity-80 pointer-events-none z-0" />

      {/* 3. Floating Ambient Motion Gradient Meshes */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[760px] h-[520px] bg-gradient-to-tr from-[#635BFF]/12 via-[#00D4B2]/08 to-transparent blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute top-1/4 -right-16 w-[480px] h-[1300px] bg-gradient-to-bl from-[#FF7043]/08 via-[#635BFF]/07 to-transparent blur-[140px] pointer-events-none animate-float-reverse" />
      <div className="absolute top-1/3 -left-28 w-[460px] h-[380px] bg-gradient-to-br from-[#00D4B2]/08 via-[#635BFF]/06 to-transparent blur-[120px] pointer-events-none animate-pulse-subtle" />

      {/* 4. Subtle Technical Dot Matrix Accent Corners */}
      <div className="absolute left-8 top-1/4 w-44 h-44 bg-dots-matrix opacity-30 mask-radial-fade pointer-events-none hidden xl:block" />
      <div className="absolute right-8 top-1/3 w-44 h-44 bg-dots-matrix opacity-30 mask-radial-fade pointer-events-none hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-6">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" size="md" pulse>
              1008 Network // Turnkey Operations & Syndicate Partner
            </Badge>
          </div>

          {/* Primary Razor-Sharp Hook Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold tracking-tight text-[#0A2540] leading-[1.12] font-sans">
            <span className="block">You bring the industry expertise & vision.</span>
            <span className="block mt-1 sm:mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              We build the operating company on the ground with you.
            </span>
          </h1>

          {/* Core Subtitle - Concise & Impactful */}
          <p className="text-base sm:text-lg text-[#425466] leading-relaxed max-w-2xl mx-auto font-normal">
            We engineer turnkey ground operations, deploy enterprise digital systems, and syndicate seed capital alongside ambitious founders—built entirely for shared equity with <strong>zero consulting retainers</strong>.
          </p>

          {/* Dual High-Conversion CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              size="lg"
              variant="primary"
              onClick={handleOpenModal}
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto text-base px-8 font-semibold shadow-[0_4px_14px_rgba(99,91,255,0.25)]"
            >
              Apply to Build With Us
            </Button>
            <Button
              href="/capital"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-base font-semibold"
            >
              Explore Investor Syndicates
            </Button>
          </div>

          {/* High-Impact Credibility Hook Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-[#425466]">
            <span className="px-3 py-1 rounded-full bg-[#F6F9FC] border border-[#E6E8EB] flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#059669]" /> ₹0 Consulting Retainers
            </span>
            <span className="px-3 py-1 rounded-full bg-[#F6F9FC] border border-[#E6E8EB] flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#635BFF]" /> Phased Handover to Autonomy
            </span>
            <span className="px-3 py-1 rounded-full bg-[#F6F9FC] border border-[#E6E8EB] flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#00A389]" /> 100% IP & Asset Ownership
            </span>
            <span className="px-3 py-1 rounded-full bg-[#F6F9FC] border border-[#E6E8EB] flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#F4511E]" /> Active Investor Syndicate
            </span>
          </div>
        </div>

        {/* Revamped High-Impact Venture & Co-Investment Architecture Previewer */}
        <div className="mt-14 max-w-5xl mx-auto rounded-3xl bg-white border border-[#E6E8EB] p-2 sm:p-3 shadow-[0_24px_48px_-12px_rgba(10,37,64,0.08)] relative">
          <div className="relative rounded-2xl bg-[#FAFCFF] p-5 sm:p-7 overflow-hidden border border-[#E6E8EB]/80">
            
            {/* Top Navigation Bar & Category Filter */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E6E8EB] pb-5 mb-6">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#635BFF] flex items-center gap-1.5 mb-1">
                  <Sparkles className="h-3.5 w-3.5" /> Turnkey Execution Tracks
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0A2540]">
                  Select your venture archetype to view operational milestones
                </h3>
              </div>

              {/* Segmented Interactive Switcher */}
              <div className="flex flex-wrap items-center gap-1.5 bg-[#F0F3F8] p-1.5 rounded-xl border border-[#E2E8F0]">
                {(Object.keys(sectorPreviews) as Array<keyof typeof sectorPreviews>).map((secKey) => {
                  const isSelected = activeSector === secKey;
                  return (
                    <button
                      key={secKey}
                      type="button"
                      onClick={() => setActiveSector(secKey)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-white text-[#635BFF] shadow-xs border border-[#E6E8EB]"
                          : "text-[#627D98] hover:text-[#0A2540] hover:bg-white/60"
                      }`}
                    >
                      {sectorPreviews[secKey].label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Track Headline & Value Header */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
              <div>
                <span className="text-xs font-bold text-[#627D98] uppercase tracking-wider">
                  Operational Roadmap & Handover Protocol
                </span>
                <h4 className="text-lg sm:text-xl font-extrabold text-[#0A2540] mt-0.5">
                  {sectorPreviews[activeSector].headline}
                </h4>
              </div>
              <div className="shrink-0 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] text-xs font-bold">
                  <CheckCircle2 className="h-3.5 w-3.5" /> ₹0 Retainers • Equity Aligned
                </span>
              </div>
            </div>

            {/* 4-Phase Connected Progress Stepper Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-left font-sans text-xs">
              {sectorPreviews[activeSector].phases.map((p, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#E6E8EB] space-y-2 shadow-xs flex flex-col justify-between hover:border-[#635BFF]/40 hover:shadow-md transition-all duration-200 relative group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 rounded bg-[#F0F0FF] text-[#635BFF] font-extrabold text-[10px] tracking-wide border border-[#E0E0FF]">
                        {p.phase}
                      </span>
                      <span className="text-[10px] text-[#627D98] font-bold">
                        {p.milestone}
                      </span>
                    </div>

                    <div className="text-[#0A2540] font-bold text-xs sm:text-[13px] leading-snug mb-1">
                      {p.title}
                    </div>

                    <p className="text-[#425466] text-[11px] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F0F3F8] flex items-center justify-between text-[10px] font-bold text-[#059669]">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> {p.gate}
                    </span>
                    <span className="text-[#CBD5E1] group-hover:text-[#635BFF] transition-colors">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Assurance & Contextual Action Bar */}
            <div className="mt-6 pt-4 border-t border-[#E6E8EB] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-[#425466] text-left">
                <Shield className="h-4 w-4 text-[#059669] shrink-0" />
                <span>
                  <strong className="text-[#0A2540]">Execution Covenant:</strong> 100% legal ownership of all assets, IP, permits & leases assigned directly to your corporate entity.
                </span>
              </div>
              
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handleOpenModal}
                  className="px-4 py-2 rounded-xl bg-[#635BFF] text-white hover:bg-[#534BE5] transition-all font-bold flex items-center gap-1.5 shadow-sm hover:shadow-md"
                >
                  <span>Pitch Your Venture</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
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
