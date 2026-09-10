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
          <Badge variant="indigo" size="sm">End-to-End Operational Execution</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Everything needed to build, launch & operate a running business.
          </h2>
          <p className="text-[#425466] text-base sm:text-lg">
            We don&apos;t just consult from slides. We roll up our sleeves to execute real estate scouting, plant setup, machinery procurement, registrations, staffing, tech systems, and launch marketing.
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
                    PHYSICAL SETUP & INFRASTRUCTURE
                  </span>
                </div>
                <Badge variant="indigo" size="sm">Turnkey Execution</Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-3">
                Real Estate, Plant Setup, Machinery & Licensing
              </h3>
              <p className="text-[#425466] text-sm sm:text-base leading-relaxed mb-6">
                Starting a manufacturing unit, hospital, school, hotel, or retail warehouse? We scout suitable commercial real estate, coordinate plant & civil build-out, procure industrial machinery, and clear all governmental registration paperwork.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6 text-xs text-[#425466] font-sans">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">Real Estate & Zoning:</strong> Site scouting, lease negotiation & industrial park approvals.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">Machinery & Procurement:</strong> Vendor sourcing, customs, installation & testing.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">Registrations & Permits:</strong> GST, pollution control, municipal licenses & compliance.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">Supply Chain & Vendors:</strong> Raw material sourcing, logistics & vendor contracts.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E8EB] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#627D98]">Turnkey industrial & operational setup</span>
              <button
                onClick={() => setModalOpen(true)}
                className="text-xs font-semibold text-[#635BFF] hover:underline flex items-center gap-1"
              >
                Discuss Facility Needs <ArrowRight className="h-3.5 w-3.5" />
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
                    CAPITAL & INVESTOR POOL
                  </span>
                </div>
                <Badge variant="emerald" size="sm">Syndicate Backed</Badge>
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-3">
                Investor Pool & Syndicate Funding
              </h3>
              <p className="text-[#425466] text-sm leading-relaxed mb-6">
                Beyond ground operations, we connect high-conviction ventures to our network of active angel investors, family offices, and corporate CXOs looking to deploy capital tailored to their risk appetite.
              </p>

              <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-2 mb-6 text-xs">
                <div className="flex items-center justify-between text-[#627D98] text-[11px] font-semibold">
                  <span>CAPITAL DEPLOYMENT</span>
                  <span className="text-[#059669] font-bold">₹2L TO ₹5CR+ ALLOCATIONS</span>
                </div>
                <p className="text-[#425466] font-sans">
                  We match investors with de-risked businesses across Manufacturing, Healthcare, Hospitality, E-Commerce, and Tech where 1008 Network runs operations.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E8EB] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#627D98]">For Founders & Investors</span>
              <Link
                href="/capital"
                className="text-xs font-semibold text-[#059669] hover:underline flex items-center gap-1"
              >
                Explore Investor Portal <ArrowRight className="h-3.5 w-3.5" />
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
                    TECH & ONLINE PRESENCE
                  </span>
                </div>
                <Badge variant="cyan" size="sm">Custom Built</Badge>
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-3">
                Tech Stack, Online Presence & Feasibility MVPs
              </h3>
              <p className="text-[#425466] text-sm leading-relaxed mb-6">
                From custom internal ERPs, inventory software, and booking engines to rapid prototypes and e-commerce storefronts. When dedicated developers are required, we source and vet engineering talent tailored to your budget.
              </p>

              <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-2 mb-6 text-xs">
                <div className="flex items-center justify-between text-[#627D98] text-[11px] font-semibold">
                  <span>SYSTEM ARCHITECTURE</span>
                  <span className="text-[#00A389] font-bold">ZERO OVER-ENGINEERING</span>
                </div>
                <p className="text-[#425466] font-sans">
                  Built to check feasibility, brainstorm product features, and scale smoothly as customer transaction volume expands.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E8EB] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#627D98]">100% IP ownership assigned to you</span>
              <button
                onClick={() => setModalOpen(true)}
                className="text-xs font-semibold text-[#00A389] hover:underline flex items-center gap-1"
              >
                Discuss Tech Requirements <ArrowRight className="h-3.5 w-3.5" />
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
                    MANPOWER, GTM & REVENUE
                  </span>
                </div>
                <Badge variant="amber" size="sm">Customer Revenue</Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-3">
                Manpower Recruitment, Marketing & Landing First Customers
              </h3>
              <p className="text-[#425466] text-sm sm:text-base leading-relaxed mb-6">
                A business is only complete when operations run smoothly and paying customers walk in. We hire qualified plant operators, hospital/hotel staff, and sales teams, and design the go-to-market engine to acquire your opening customer base.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6 text-xs text-[#425466] font-sans">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#F4511E] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">Manpower Sourcing:</strong> Plant managers, technical staff, operators & corporate talent.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#F4511E] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">Launch Marketing:</strong> Brand identity, digital presence, PR & hyper-local campaigns.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#F4511E] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">B2B & Distribution:</strong> Wholesale dealer networks, institutional contracts & partnerships.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#F4511E] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">Initial Sales:</strong> Closing early orders and establishing positive contribution margin.</span>
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
                Start Operational Diagnostic
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
