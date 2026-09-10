"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { IndustrialBlueprintGraphic } from "@/components/graphics/IndustrialBlueprintGraphic";
import { SyndicateAllocationGraphic } from "@/components/graphics/SyndicateAllocationGraphic";
import { DigitalSystemsGraphic } from "@/components/graphics/DigitalSystemsGraphic";
import { CommercialGTMGraphic } from "@/components/graphics/CommercialGTMGraphic";
import {
  Code2,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  Sparkles,
  Lock,
  ArrowRight,
  Briefcase,
} from "lucide-react";

export function PillarsBento() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 bg-[#F6F9FC] border-y border-[#E6E8EB] relative overflow-hidden">
      {/* Background Architectural Box Grid & Ambient Mesh */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-r from-[#635BFF]/06 via-[#00D4B2]/05 to-transparent blur-[140px] pointer-events-none animate-float-slow" />
      <div className="absolute -bottom-20 right-10 w-[450px] h-[350px] bg-gradient-to-l from-[#FF7043]/05 to-transparent blur-[120px] pointer-events-none animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="indigo" size="sm">Turnkey Operational Infrastructure</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            The complete operational engine to build, fund & run your enterprise.
          </h2>
          <p className="text-[#425466] text-base sm:text-lg">
            We don&apos;t advise from the sidelines. We stand in the trenches with you—navigating land, plant setup, machinery, statutory permits, staffing, lean tech, and customer acquisition.
          </p>
        </div>

        {/* Studio Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: Physical Commissioning (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-[#E6E8EB] p-6 sm:p-8 relative group hover:border-[#635BFF]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#F0F0FF] text-[#635BFF] border border-[#E0E0FF]">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-sans text-[#635BFF] tracking-wide font-bold uppercase">
                    PHYSICAL ASSETS & COMMISSIONING
                  </span>
                </div>
                <Badge variant="indigo" size="sm">Turnkey Ground Execution</Badge>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] mb-2">
                  Site Scouting, Plant Setup, Machinery & Permits
                </h3>
                <p className="text-[#425466] text-sm leading-relaxed">
                  We handle the heavy lifting on the ground: securing industrial land, overseeing plant civil build-out, OEM machinery procurement at verified rates, and state statutory clearances.
                </p>
              </div>

              {/* Embedded Interactive CAD Blueprint Graphic */}
              <div className="pt-2">
                <IndustrialBlueprintGraphic />
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#E6E8EB] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#627D98]">100% Turnkey Execution</span>
              <button
                onClick={() => setModalOpen(true)}
                className="text-xs font-semibold text-[#635BFF] hover:underline flex items-center gap-1"
              >
                Discuss Facility Scope <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Investor Pool & Syndicate Funding (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-[#E6E8EB] p-6 sm:p-8 relative group hover:border-[#059669]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-sans text-[#059669] tracking-wide font-bold uppercase">
                    CAPITAL SYNDICATION
                  </span>
                </div>
                <Badge variant="emerald" size="sm">Syndicate Backed</Badge>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                  Curated Investor Pool & Co-Investment
                </h3>
                <p className="text-[#425466] text-sm leading-relaxed">
                  We present your de-risked business to our active syndicate of angel investors and family offices across ₹2L to ₹5Cr+ ticket sizes.
                </p>
              </div>

              {/* Embedded Interactive Syndicate Allocation Graphic */}
              <div className="pt-2">
                <SyndicateAllocationGraphic />
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#E6E8EB] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#627D98]">Aligned Capital</span>
              <Link
                href="/capital"
                className="text-xs font-semibold text-[#059669] hover:underline flex items-center gap-1"
              >
                Explore Investor Portal <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Digital & Systems Architecture (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-[#E6E8EB] p-6 sm:p-8 relative group hover:border-[#00D4B2]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#E6FFFA] text-[#00A389] border border-[#B2F5EA]">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-sans text-[#00A389] tracking-wide font-bold uppercase">
                    DIGITAL & SYSTEMS
                  </span>
                </div>
                <Badge variant="cyan" size="sm">Lean & Scalable</Badge>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                  Pragmatic ERPs, MVPs & Systems
                </h3>
                <p className="text-[#425466] text-sm leading-relaxed">
                  We build rapid feasibility prototypes, lean internal inventory/booking ERPs, and hire budget-aligned technical talent.
                </p>
              </div>

              {/* Embedded Interactive Digital Systems Terminal */}
              <div className="pt-2">
                <DigitalSystemsGraphic />
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#E6E8EB] flex items-center justify-between">
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
          <div className="lg:col-span-7 rounded-3xl bg-white border border-[#E6E8EB] p-6 sm:p-8 relative group hover:border-[#FF7043]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-[#FFF4ED] text-[#F4511E] border border-[#FFE0D2]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-sans text-[#F4511E] tracking-wide font-bold uppercase">
                    TALENT & COMMERCIAL GTM
                  </span>
                </div>
                <Badge variant="amber" size="sm">Opening Cash Flows</Badge>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] mb-2">
                  Key Hiring, Brand Launch & First Revenue
                </h3>
                <p className="text-[#425466] text-sm leading-relaxed">
                  We recruit your essential operational managers and floor staff, institute quality SOPs, and execute go-to-market campaigns to secure inaugural customer orders.
                </p>
              </div>

              {/* Embedded Interactive Commercial GTM Board */}
              <div className="pt-2">
                <CommercialGTMGraphic />
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#E6E8EB] flex items-center justify-between">
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
