"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { OperationsVelocityGraphic } from "@/components/graphics/OperationsVelocityGraphic";
import { CapitalSyndicateGraphic } from "@/components/graphics/CapitalSyndicateGraphic";
import { NetworkRadarGraphic } from "@/components/graphics/NetworkRadarGraphic";
import {
  Code2,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight,
  Briefcase,
  Boxes,
  TrendingUp,
  Users,
  BookOpen,
  DollarSign,
  Layers,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export function PillarsBento() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 bg-[#F8FAFC] border-y border-[#E2E8F0] relative overflow-hidden" id="pillars">
      {/* Background Architectural Box Grid & Ambient Mesh */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-r from-[#635BFF]/08 via-[#00D4B2]/06 to-transparent blur-[140px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-gradient-to-l from-[#FF7043]/06 to-transparent blur-[130px] pointer-events-none animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="indigo" size="sm">
            The 1008 Network Ecosystem
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Built on Four Pillars. <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              Engineered for Venture Scale.
            </span>
          </h2>
          <p className="text-[#425466] text-base sm:text-lg leading-relaxed">
            Everything you need to launch, scale, and fund an Indian enterprise—from turnkey operations and talent matching to syndicate capital and tactical playbooks.
          </p>
        </div>

        {/* The Four Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* PILLAR 1: VENTURE STUDIO */}
          <div className="rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-8 relative group hover:border-[#635BFF]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-[#F0F0FF] text-[#635BFF] border border-[#E0E0FF]">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#635BFF] tracking-wider font-bold uppercase block">
                      PILLAR 01
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                      Venture Studio
                    </h3>
                  </div>
                </div>
                <Badge variant="indigo" size="sm">Turnkey Operations</Badge>
              </div>

              <p className="text-[#425466] text-sm leading-relaxed">
                We architect turnkey operational infrastructure, source specialized talent, configure modern software tools, and facilitate syndicate capital alongside ambitious founders—<strong>aligned on long-term venture equity</strong>.
              </p>

              {/* Embedded Operations Velocity Graphic */}
              <div className="pt-2">
                <OperationsVelocityGraphic />
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-[#E2E8F0] flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1.5 text-xs text-[#627D98] font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#059669]" />
                <span>Zero retainers • Phased handover</span>
              </div>
              <Button
                href="/studio"
                variant="primary"
                size="sm"
                className="font-semibold shadow-xs"
                rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
              >
                Explore Studio Model
              </Button>
            </div>
          </div>

          {/* PILLAR 2: PARTNER NETWORK */}
          <div className="rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-8 relative group hover:border-[#00D4B2]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-[#E6FFFA] text-[#00A389] border border-[#B2F5EA]">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#00A389] tracking-wider font-bold uppercase block">
                      PILLAR 02
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                      Partner Network
                    </h3>
                  </div>
                </div>
                <Badge variant="cyan" size="sm">Talent & Co-Founders</Badge>
              </div>

              <p className="text-[#425466] text-sm leading-relaxed">
                <strong>Have the business vision? Find the right co-founder & talent.</strong> Connect domain experts with technical CTOs, GTM strategists, and operations heads for shared venture equity under mutual NDA.
              </p>

              {/* Embedded Network Matchmaking Radar Graphic */}
              <div className="pt-2">
                <NetworkRadarGraphic />
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-[#E2E8F0] flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1.5 text-xs text-[#627D98] font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#00A389]" />
                <span>Curated high-conviction partnerships</span>
              </div>
              <Button
                href="/network"
                variant="secondary"
                size="sm"
                className="font-semibold shadow-xs"
                rightIcon={<ArrowRight className="h-3.5 w-3.5 text-[#00A389]" />}
              >
                Find Co-Founders & Talent
              </Button>
            </div>
          </div>

          {/* PILLAR 3: CAPITAL */}
          <div className="rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-8 relative group hover:border-[#059669]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#059669] tracking-wider font-bold uppercase block">
                      PILLAR 03
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                      Capital Network
                    </h3>
                  </div>
                </div>
                <Badge variant="emerald" size="sm">Startup & Investor Matching</Badge>
              </div>

              <p className="text-[#425466] text-sm leading-relaxed">
                <strong>Connect anyone looking to invest in high-conviction Indian startups (from ₹50K to ₹5Cr+) with founders raising capital.</strong> Target-based rounds with explicit use of funds, combined deal meetings, and self due diligence.
              </p>

              {/* Embedded Capital Syndicate Graphic */}
              <div className="pt-2">
                <CapitalSyndicateGraphic />
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-[#E2E8F0] flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1.5 text-xs text-[#627D98] font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#059669]" />
                <span>Target-based capital rounds</span>
              </div>
              <Button
                href="/capital"
                variant="primary"
                size="sm"
                className="font-semibold shadow-xs bg-[#059669] hover:bg-[#047857] border-[#059669]"
                rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
              >
                Access Capital Network
              </Button>
            </div>
          </div>

          {/* PILLAR 4: PLAYBOOK */}
          <div className="rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-8 relative group hover:border-[#FF7043]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-[#FFF3EE] text-[#FF7043] border border-[#FFE2D6]">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#FF7043] tracking-wider font-bold uppercase block">
                      PILLAR 04
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                      Playbook
                    </h3>
                  </div>
                </div>
                <Badge variant="amber" size="sm">Operational Intelligence</Badge>
              </div>

              <p className="text-[#425466] text-sm leading-relaxed">
                <strong>Field-tested informational blueprints and execution frameworks.</strong> Learn zero-retainer survival, collateral-free working capital frameworks, and real cash-flow business models for India.
              </p>

              {/* Playbook Quick Guides Preview */}
              <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-[#E6E8EB] space-y-2.5 text-xs">
                <Link
                  href="/knowledge/zero-retainer-startup-survival-playbook-india"
                  className="p-2.5 rounded-xl bg-white border border-[#E6E8EB] hover:border-[#FF7043] transition-all flex items-center justify-between group/link"
                >
                  <div className="space-y-0.5">
                    <span className="font-bold text-[#0A2540] group-hover/link:text-[#FF7043] transition-colors block">
                      Zero-Retainer Startup Survival Playbook
                    </span>
                    <span className="text-[10px] text-[#829AB1]">How to avoid agency drain and build on equity</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-[#829AB1] group-hover/link:text-[#FF7043] transition-colors" />
                </Link>

                <Link
                  href="/knowledge/collateral-free-credit-uli-startup-playbook-india"
                  className="p-2.5 rounded-xl bg-white border border-[#E6E8EB] hover:border-[#059669] transition-all flex items-center justify-between group/link"
                >
                  <div className="space-y-0.5">
                    <span className="font-bold text-[#0A2540] group-hover/link:text-[#059669] transition-colors block">
                      Collateral-Free Credit Playbook
                    </span>
                    <span className="text-[10px] text-[#829AB1]">Non-dilutive working capital for real economy startups</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-[#829AB1] group-hover/link:text-[#059669] transition-colors" />
                </Link>
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-[#E2E8F0] flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1.5 text-xs text-[#627D98] font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#FF7043]" />
                <span>Open-access frameworks & guides</span>
              </div>
              <Button
                href="/knowledge"
                variant="secondary"
                size="sm"
                className="font-semibold shadow-xs"
                rightIcon={<ArrowRight className="h-3.5 w-3.5 text-[#FF7043]" />}
              >
                Read All Playbooks
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

