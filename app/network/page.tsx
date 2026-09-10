"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { initialOpportunities } from "@/data/opportunities";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  Users,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Search,
  Filter,
  Briefcase,
  PlusCircle,
} from "lucide-react";

export default function NetworkPage() {
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sectors = useMemo(() => {
    const list = Array.from(new Set(initialOpportunities.map((o) => o.sector)));
    return ["all", ...list];
  }, []);

  const filteredOpportunities = useMemo(() => {
    return initialOpportunities.filter((opp) => {
      const matchSector = selectedSector === "all" || opp.sector === selectedSector;
      const matchSearch =
        !searchQuery.trim() ||
        opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.founderBackground.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.sector.toLowerCase().includes(searchQuery.toLowerCase());
      return matchSector && matchSearch;
    });
  }, [selectedSector, searchQuery]);

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      {/* Header Section */}
      <section className="relative py-14 sm:py-20 overflow-hidden border-b border-[#E6E8EB] bg-[#F6F9FC]">
        {/* Background Architectural Box Grid & Subtle Motion */}
        <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-55 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-gradient-to-r from-[#635BFF]/12 via-[#00D4B2]/08 to-[#FF7043]/06 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" size="md" pulse>
              1008 Partner & Talent Network
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Have the business vision.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              Find the right co-founder.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#425466] leading-relaxed max-w-2xl mx-auto font-normal">
            Great enterprises are rarely built alone. Whether you need a Technical Co-Founder (CTO), Operations Lead, or Sales Partner, 1008 curates high-conviction partnerships for shared equity.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="/network/post"
              size="md"
              variant="primary"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold px-6 shadow-sm"
            >
              Post a Requirement
            </Button>
            <Button
              href="/studio"
              size="md"
              variant="secondary"
              className="w-full sm:w-auto font-semibold"
            >
              Apply to Studio Track
            </Button>
          </div>
        </div>
      </section>

      {/* Directory Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-[#E6E8EB]">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#829AB1]" />
            <input
              type="text"
              placeholder="Search by role, domain, location or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-[#CBD5E1] rounded-xl text-[#0A2540] placeholder-[#829AB1] focus:outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/10 transition-all shadow-xs"
            />
          </div>

          {/* Count Badge */}
          <div className="flex items-center gap-2 text-xs text-[#627D98] font-mono">
            <span className="font-bold text-[#0A2540]">{filteredOpportunities.length}</span> active opportunities listed
          </div>
        </div>

        {/* Sector Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar">
          {sectors.map((sec) => {
            const isSelected = selectedSector === sec;
            return (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={cn(
                  "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border shrink-0",
                  isSelected
                    ? "bg-[#0A2540] text-white border-[#0A2540] shadow-xs"
                    : "bg-[#F8FAFC] text-[#425466] border-[#E6E8EB] hover:text-[#0A2540] hover:bg-white hover:border-[#CBD5E1]"
                )}
              >
                {sec === "all" ? "All Sectors" : sec}
              </button>
            );
          })}
        </div>

        {/* Opportunities Grid */}
        {filteredOpportunities.length === 0 ? (
          <div className="text-center py-16 bg-[#F8FAFC] rounded-2xl border border-[#E6E8EB] my-6 space-y-3">
            <Users className="h-10 w-10 text-[#829AB1] mx-auto opacity-50" />
            <h3 className="text-lg font-bold text-[#0A2540]">No matching partnerships found</h3>
            <p className="text-xs text-[#425466] max-w-sm mx-auto">
              Try adjusting your search terms or clearing sector filters to see more opportunities.
            </p>
            <Button
              onClick={() => {
                setSelectedSector("all");
                setSearchQuery("");
              }}
              variant="secondary"
              size="sm"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {filteredOpportunities.map((opp) => (
              <div
                key={opp.id}
                className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-7 flex flex-col justify-between hover:border-[#635BFF]/50 hover:shadow-lg transition-all duration-300 relative group shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="indigo" size="sm">
                      {opp.sector}
                    </Badge>
                    <span className="text-[11px] font-mono text-[#635BFF] font-semibold flex items-center gap-1 bg-[#F0F0FF] px-2 py-0.5 rounded border border-[#E0E0FF]">
                      <Clock className="h-3 w-3" /> {opp.expiresInDays}d active
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0A2540] group-hover:text-[#635BFF] transition-colors leading-snug">
                      {opp.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5 text-xs text-[#627D98]">
                      <span className="font-semibold text-[#0A2540]">{opp.role}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-[#829AB1]" /> {opp.location}
                      </span>
                    </div>
                  </div>

                  {/* Founder Profile Box */}
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] text-xs space-y-1">
                    <div className="text-[#829AB1] font-mono uppercase text-[10px] font-bold">FOUNDER PROFILE</div>
                    <div className="text-[#0A2540] font-semibold">{opp.founderBackground.headline}</div>
                    <div className="text-[#627D98] text-[11px]">{opp.founderBackground.domainYears}+ years industry depth</div>
                  </div>

                  <p className="text-xs text-[#425466] leading-relaxed line-clamp-3">
                    {opp.ventureThesis}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#E6E8EB] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[#829AB1] text-[10px] block font-mono font-bold">EQUITY OFFER</span>
                    <span className="text-[#059669] font-mono font-bold text-sm">{opp.equityRange}</span>
                  </div>

                  <Button
                    href={`/network/${opp.id}`}
                    variant="primary"
                    size="sm"
                    className="text-xs font-semibold px-4"
                    rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Post Opportunity Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F6F9FC] border border-[#E6E8EB] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#635BFF]/06 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-2 relative z-10 max-w-xl">
            <Badge variant="cyan" size="sm">Looking for Leaders?</Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
              Post your co-founder requirement on 1008
            </h3>
            <p className="text-sm text-[#425466] leading-relaxed">
              We vet every listing and match your enterprise with seasoned technical, operational, and commercial leaders across India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10">
            <Button
              href="/network/post"
              size="lg"
              variant="primary"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="font-semibold text-sm px-6"
            >
              Post Opportunity (Free)
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
