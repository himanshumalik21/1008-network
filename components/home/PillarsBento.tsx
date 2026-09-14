"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { OperationsVelocityGraphic } from "@/components/graphics/OperationsVelocityGraphic";
import { CapitalSyndicateGraphic } from "@/components/graphics/CapitalSyndicateGraphic";
import { TechArchitectureGraphic } from "@/components/graphics/TechArchitectureGraphic";
import { CommercialRevenueGraphic } from "@/components/graphics/CommercialRevenueGraphic";
import {
  Code2,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight,
  Briefcase,
  Boxes,
  TrendingUp,
} from "lucide-react";

export function PillarsBento() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 bg-[#F8FAFC] border-y border-[#E2E8F0] relative overflow-hidden">
      {/* Background Architectural Box Grid & Ambient Mesh */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-r from-[#635BFF]/08 via-[#00D4B2]/06 to-transparent blur-[140px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-gradient-to-l from-[#FF7043]/06 to-transparent blur-[130px] pointer-events-none animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="indigo" size="sm">
            Turnkey Venture Studio Infrastructure
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            We Build the Engine. <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#0A2540]">
              You Own the Enterprise.
            </span>
          </h2>
          <p className="text-[#425466] text-base sm:text-lg leading-relaxed">
            Stop losing quarters to fragmented agencies, contractor delays, and operational friction. 1008 Network deploys the supply chain, software, talent, and capital to scale your business.
          </p>
        </div>

        {/* Studio Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Operations & Supply Chain (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-8 relative group hover:border-[#635BFF]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#F0F0FF] text-[#635BFF] border border-[#E0E0FF]">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-sans text-[#635BFF] tracking-wider font-bold uppercase">
                    OPERATIONS & SUPPLY CHAIN
                  </span>
                </div>
                <Badge variant="indigo" size="sm">Turnkey Execution</Badge>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] mb-2">
                  Batch Manufacturing, 3PL Fulfillment & Unit Economics
                </h3>
                <p className="text-[#425466] text-sm leading-relaxed">
                  We negotiate verified contract manufacturing, stand up multi-city 3PL fulfillment, automate Cloud ERP pipelines, and lock regulatory compliance with zero operational headache.
                </p>
              </div>

              {/* Embedded Modern Operations Graphic */}
              <div className="pt-2">
                <OperationsVelocityGraphic />
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#E2E8F0] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#627D98]">30-Day Setup • Zero Capex Waste</span>
              <button
                onClick={() => setModalOpen(true)}
                className="text-xs font-semibold text-[#635BFF] hover:underline flex items-center gap-1"
              >
                Discuss Operations Scope <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Capital & Syndicates (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-8 relative group hover:border-[#059669]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-sans text-[#059669] tracking-wider font-bold uppercase">
                    CAPITAL & SYNDICATES
                  </span>
                </div>
                <Badge variant="emerald" size="sm">Syndicate Backed</Badge>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                  ₹2.5Cr+ Syndicate Co-Investment & Credit Rails
                </h3>
                <p className="text-[#425466] text-sm leading-relaxed">
                  Co-investment from our curated network of 250+ angel syndicates, family offices, and RBI ULI non-dilutive credit lines—preserving founder equity and governance control.
                </p>
              </div>

              {/* Embedded Modern Capital Graphic */}
              <div className="pt-2">
                <CapitalSyndicateGraphic />
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#E2E8F0] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#627D98]">Founder Control Preserved</span>
              <Link
                href="/capital"
                className="text-xs font-semibold text-[#059669] hover:underline flex items-center gap-1"
              >
                Explore Investor Portal <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Software & Digital Core (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-8 relative group hover:border-[#00D4B2]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#E6FFFA] text-[#00A389] border border-[#B2F5EA]">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-sans text-[#00A389] tracking-wider font-bold uppercase">
                    SOFTWARE & DIGITAL CORE
                  </span>
                </div>
                <Badge variant="cyan" size="sm">Production Grade</Badge>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                  Enterprise Web & Mobile Software, ERPs & APIs
                </h3>
                <p className="text-[#425466] text-sm leading-relaxed">
                  We architect rapid MVPs, deploy automated internal Cloud ERPs (ERPNext/Frappe), and build conversion storefronts—with 100% IP ownership handed to you on Day 1.
                </p>
              </div>

              {/* Embedded Modern Tech Architecture Graphic */}
              <div className="pt-2">
                <TechArchitectureGraphic />
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#E2E8F0] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#627D98]">100% IP Assigned to You</span>
              <button
                onClick={() => setModalOpen(true)}
                className="text-xs font-semibold text-[#00A389] hover:underline flex items-center gap-1"
              >
                Discuss Systems Stack <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Talent, GTM & Revenue (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-8 relative group hover:border-[#FF7043]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#FFF4ED] text-[#F4511E] border border-[#FFE0D2]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-sans text-[#F4511E] tracking-wider font-bold uppercase">
                    TALENT & COMMERCIAL GTM
                  </span>
                </div>
                <Badge variant="amber" size="sm">Opening Cash Flows</Badge>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] mb-2">
                  High-Velocity GTM, Omnichannel Scale & First Revenue
                </h3>
                <p className="text-[#425466] text-sm leading-relaxed">
                  We recruit high-impact founding operators, establish commercial SOPs, and execute targeted B2B outbound & D2C campaigns to drive inaugural cash flows and signed customer contracts.
                </p>
              </div>

              {/* Embedded Modern Commercial GTM Graphic */}
              <div className="pt-2">
                <CommercialRevenueGraphic />
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#E2E8F0] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#627D98]">Full Commercial Activation</span>
              <Button
                onClick={() => setModalOpen(true)}
                variant="primary"
                size="sm"
                className="font-semibold"
                rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
              >
                Initiate Operational Diagnostic
              </Button>
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

