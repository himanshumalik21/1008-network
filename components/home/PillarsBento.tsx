"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
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
          {/* Card 1: Turnkey Plant, Real Estate & Infrastructure Setup (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-8 relative group hover:border-[#CBD5E1] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)]">
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-[#F0F0FF] text-[#635BFF] border border-[#E0E0FF]">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-sans text-[#635BFF] tracking-wide font-bold uppercase">
                    PHYSICAL ASSETS & COMMISSIONING
                  </span>
                </div>
                <Badge variant="indigo" size="sm">Turnkey Ground Execution</Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-3">
                Site Scouting, Plant Commissioning, Machinery & Licensing
              </h3>
              <p className="text-[#425466] text-sm sm:text-base leading-relaxed mb-6">
                Setting up an industrial factory, diagnostic center, school, boutique hotel, or commercial hub? We remove the friction: scouting optimal real estate, managing civil commissioning, procuring industrial machinery at verified market rates, and securing all statutory licenses.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6 text-xs text-[#425466] font-sans">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">Site & Zoning:</strong> Strategic land acquisition, industrial corridor approvals & lease negotiation.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">Machinery Sourcing:</strong> OEM procurement, import clearances, testing & trial runs.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">Statutory Compliance:</strong> Pollution board clearances, municipal permits, GST & industry certs.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">Supply Ecosystem:</strong> Raw material vendor contracts, freight logistics & quality controls.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E8EB] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#627D98]">De-risked physical execution</span>
              <button
                onClick={() => setModalOpen(true)}
                className="text-xs font-semibold text-[#635BFF] hover:underline flex items-center gap-1"
              >
                Discuss Facility Scope <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Investor Pool & Syndicate Funding (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-8 relative group hover:border-[#CBD5E1] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)]">
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-sans text-[#059669] tracking-wide font-bold uppercase">
                    CAPITAL SYNDICATION
                  </span>
                </div>
                <Badge variant="emerald" size="sm">Syndicate Backed</Badge>
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-3">
                Curated Investor Pool & Co-Investment
              </h3>
              <p className="text-[#425466] text-sm leading-relaxed mb-6">
                Great ideas deserve backing without predatory terms. We present your validated business thesis to our network of active angel investors, family offices, and HNWI syndicates who back operationally de-risked ventures.
              </p>

              <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-2 mb-6 text-xs">
                <div className="flex items-center justify-between text-[#627D98] text-[11px] font-semibold">
                  <span>DEPLOYMENT RANGE</span>
                  <span className="text-[#059669] font-bold">₹2L TO ₹5CR+ DEALS</span>
                </div>
                <p className="text-[#425466] font-sans">
                  From tangible, asset-backed manufacturing plants to high-velocity digital brands—matched directly to allocator risk mandates.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E8EB] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#627D98]">Aligned co-investment</span>
              <Link
                href="/capital"
                className="text-xs font-semibold text-[#059669] hover:underline flex items-center gap-1"
              >
                Explore Investor Syndicate <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Tech Stack, Feasibility & Digital Presence (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-8 relative group hover:border-[#CBD5E1] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)]">
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-[#E6FFFA] text-[#00A389] border border-[#B2F5EA]">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-sans text-[#00A389] tracking-wide font-bold uppercase">
                    DIGITAL & SYSTEMS ARCHITECTURE
                  </span>
                </div>
                <Badge variant="cyan" size="sm">Lean & Scalable</Badge>
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-3">
                Pragmatic Software, ERPs & Feasibility MVPs
              </h3>
              <p className="text-[#425466] text-sm leading-relaxed mb-6">
                Avoid the trap of bloated, expensive software agencies. We engineer lean feasibility prototypes, internal inventory/booking software, and digital storefronts. When dedicated engineers are needed, we recruit vetted technical talent within your budget.
              </p>

              <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-2 mb-6 text-xs">
                <div className="flex items-center justify-between text-[#627D98] text-[11px] font-semibold">
                  <span>ENGINEERING PHILOSOPHY</span>
                  <span className="text-[#00A389] font-bold">ZERO TECHNICAL DEBT</span>
                </div>
                <p className="text-[#425466] font-sans">
                  Built to validate economics rapidly, automate back-office workflows, and handle commercial transaction growth.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E8EB] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#627D98]">100% IP ownership assigned to you</span>
              <button
                onClick={() => setModalOpen(true)}
                className="text-xs font-semibold text-[#00A389] hover:underline flex items-center gap-1"
              >
                Discuss Systems Stack <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Manpower, Marketing & First Customers (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-8 relative group hover:border-[#CBD5E1] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)]">
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-[#FFF4ED] text-[#F4511E] border border-[#FFE0D2]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-sans text-[#F4511E] tracking-wide font-bold uppercase">
                    TALENT, GTM & COMMERCIAL REVENUE
                  </span>
                </div>
                <Badge variant="amber" size="sm">Opening Cash Flows</Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-3">
                Mission-Critical Hiring, Brand GTM & First Paying Customers
              </h3>
              <p className="text-[#425466] text-sm sm:text-base leading-relaxed mb-6">
                An idea is just theoretical until real customers pay. We hire your core operational staff—from plant managers and technical operators to frontline sales—and drive the go-to-market engine that secures your opening revenue contracts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6 text-xs text-[#425466] font-sans">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#F4511E] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">Core Talent Acquisition:</strong> Vetting plant supervisors, medical officers, managers & sales teams.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#F4511E] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">Brand & Positioning:</strong> Visual identity, digital presence, and high-impact launch campaigns.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#F4511E] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">Distribution & B2B:</strong> Wholesale channel recruitment, institutional buyer outreach & dealer network.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#F4511E] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">Opening Revenue:</strong> Closing initial purchase orders and proving positive unit economics.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E8EB] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#627D98]">Full commercial activation</span>
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
