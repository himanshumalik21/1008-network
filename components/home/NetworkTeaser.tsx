"use client";

import React from "react";
import Link from "next/link";
import { initialOpportunities } from "@/data/opportunities";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { NetworkRadarGraphic } from "@/components/graphics/NetworkRadarGraphic";
import {
  Users,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function NetworkTeaser() {
  const featured = initialOpportunities.slice(0, 3);

  return (
    <section className="py-24 bg-[#F6F9FC] border-t border-[#E6E8EB] relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <Badge variant="indigo" size="sm" pulse>
              1008 Partner & Talent Network
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight font-sans">
              Have the business vision. Missing the right partner?
            </h2>
            <p className="text-[#425466] text-base max-w-2xl leading-relaxed">
              Great enterprises are rarely built alone. Whether you need a Technical Co-Founder (CTO), Operations Lead, or Sales Partner, 1008 Network curates high-conviction matches for shared equity.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button href="/network/post" variant="secondary" size="md" className="font-semibold text-xs sm:text-sm">
              Post Requirement
            </Button>
            <Button href="/network" variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />} className="font-semibold text-xs sm:text-sm shadow-sm">
              Explore All Partners ({initialOpportunities.length})
            </Button>
          </div>
        </div>

        {/* Interactive Matchmaking Radar Graphic */}
        <div className="mb-10 max-w-4xl mx-auto">
          <NetworkRadarGraphic />
        </div>

        {/* Featured Opportunity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((opp) => (
            <div
              key={opp.id}
              className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-7 flex flex-col justify-between hover:border-[#635BFF]/50 hover:shadow-md transition-all duration-300 relative group shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="indigo" size="sm">
                    {opp.sector}
                  </Badge>
                  <span className="text-[11px] font-mono text-[#635BFF] font-semibold flex items-center gap-1 bg-[#F0F0FF] px-2 py-0.5 rounded border border-[#E0E0FF]">
                    <Clock className="h-3 w-3" /> {opp.expiresInDays}d active
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0A2540] group-hover:text-[#635BFF] transition-colors leading-snug">
                  {opp.title}
                </h3>

                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] text-xs space-y-1">
                  <div className="text-[#829AB1] font-mono uppercase text-[10px] font-bold">FOUNDER BACKGROUND</div>
                  <div className="text-[#0A2540] font-semibold">{opp.founderBackground.headline}</div>
                  <div className="text-[#627D98] text-[11px]">{opp.founderBackground.domainYears}+ years industry depth</div>
                </div>

                <p className="text-xs text-[#425466] leading-relaxed line-clamp-3">
                  {opp.ventureThesis}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E6E8EB] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#829AB1] text-[10px] block font-mono font-bold">EQUITY OFFER</span>
                  <span className="text-[#059669] font-mono font-bold text-sm">{opp.equityRange}</span>
                </div>

                <Button
                  href={`/network/${opp.id}`}
                  variant="secondary"
                  size="sm"
                  className="text-xs font-semibold"
                  rightIcon={<ArrowUpRight className="h-3 w-3" />}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
