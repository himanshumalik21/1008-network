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
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" size="md" pulse>
              1008 Network // Turnkey Operations & Syndicate Partner
            </Badge>
          </div>

          {/* Primary Razor-Sharp Hook Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A2540] leading-[1.08] font-sans">
            Transform your ambition into a running enterprise.{" "}
            <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              We execute operations on the ground & connect you to capital.
            </span>
          </h1>

          {/* Core Subtitle - Concise & Impactful */}
          <p className="text-base sm:text-lg text-[#425466] leading-relaxed max-w-2xl mx-auto font-normal">
            Stop fighting operational friction alone. Whether setting up a manufacturing unit, launching a new product or consumer brand, or revitalizing an existing business—<strong>1008 Network handles turnkey operations on the ground and connects you to growth capital</strong>.
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
              Pitch Your Business Vision
            </Button>
            <Button
              href="/capital"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-base font-semibold"
            >
              Explore Capital & Syndicates
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

        {/* Live Interactive Sector Blueprint Feasibility Box (High Engagement Hook) */}
        <div className="mt-12 max-w-5xl mx-auto rounded-2xl bg-white border border-[#E6E8EB] p-2 shadow-[0_20px_40px_-15px_rgba(10,37,64,0.08)] relative">
          <div className="relative rounded-xl bg-[#F6F9FC] p-4 sm:p-6 overflow-hidden border border-[#E6E8EB]/60">
            {/* Interactive Sector Switcher Pills */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6E8EB] pb-4 mb-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#0A2540] uppercase tracking-wider">Select Industry:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {(Object.keys(sectorPreviews) as Array<keyof typeof sectorPreviews>).map((secKey) => (
                  <button
                    key={secKey}
                    type="button"
                    onClick={() => setActiveSector(secKey)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeSector === secKey
                        ? "bg-[#635BFF] text-white shadow-xs"
                        : "bg-white text-[#425466] border border-[#E6E8EB] hover:border-[#CBD5E1]"
                    }`}
                  >
                    {sectorPreviews[secKey].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Sector Scope Title */}
            <div className="mb-4 text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#635BFF] block">
                Phased Turnkey Execution Scope
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#0A2540]">
                {sectorPreviews[activeSector].headline}
              </h3>
            </div>

            {/* 4 Interactive Sprint Phases Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left font-sans text-xs">
              {sectorPreviews[activeSector].phases.map((p, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#E6E8EB] space-y-1.5 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[#627D98] text-[10px] font-semibold mb-1">
                      <span className="text-[#635BFF] font-bold">{p.phase}</span>
                      <span className="text-[10px] text-[#0A2540] font-medium">{p.milestone}</span>
                    </div>
                    <div className="text-[#0A2540] font-bold text-xs mb-1">{p.title}</div>
                    <p className="text-[#425466] text-[11px] leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="pt-2 text-[10px] text-[#059669] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> {p.gate}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Callout */}
            <div className="mt-4 pt-3.5 border-t border-[#E6E8EB] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-[#627D98]">
                <strong className="text-[#0A2540]">Execution Assurance:</strong> All assets, machinery, licenses, and IP 100% owned by your corporate entity.
              </span>
              <button
                onClick={handleOpenModal}
                className="text-[#635BFF] hover:underline font-semibold flex items-center gap-1 shrink-0"
              >
                Pitch This Venture <ChevronRight className="h-3.5 w-3.5" />
              </button>
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
