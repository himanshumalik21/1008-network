"use client";

import React, { useState } from "react";
import { Badge } from "@/components/brand/Badge";
import {
  Search,
  Users,
  Coins,
  Layers,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Lock,
} from "lucide-react";

interface FiverrHeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onPopularTagClick: (tag: string) => void;
}

const POPULAR_TAGS = [
  "Technical CTO",
  "Cloud ERPNext",
  "Angel Funding",
  "Outsource Software",
  "B2B Sales Sprint",
  "Factory Sourcing",
  "Battery Blueprint",
];

export function FiverrHeroSection({
  searchQuery,
  onSearchChange,
  onPopularTagClick,
}: FiverrHeroSectionProps) {
  const [localInput, setLocalInput] = useState(searchQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(localInput);
    // Smooth scroll to services section
    const el = document.getElementById("services-marketplace");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full pt-32 pb-16 sm:pt-36 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#F6F9FC] via-white to-white border-b border-[#E6E8EB]">
      {/* Background Architectural Box Grid */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-35 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#635BFF]/10 via-[#00D4B2]/08 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2">
          <Badge variant="indigo" size="md" pulse className="text-xs px-3.5 py-1 font-medium">
            1008 Marketplace • Verified Business Services & Community
          </Badge>
        </div>

        {/* Primary Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] leading-[1.15] font-sans">
            Find the right execution partner,{" "}
            <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] via-[#635BFF] to-[#00A389]">
              talent, or capital for your business.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#425466] leading-relaxed max-w-2xl mx-auto font-normal">
            Scale without operational bottlenecks. 1008 Network connects you with curated co-founders, angel funding discovery, outsourced tech development, and acute project sprints.
          </p>
        </div>

        {/* Fiverr-Style Hero Search Bar */}
        <div className="max-w-2xl mx-auto w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-2 p-1.5 sm:p-2 rounded-2xl bg-white border-2 border-[#CBD5E1] shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:border-[#635BFF] transition-all focus-within:border-[#635BFF] focus-within:ring-4 focus-within:ring-[#635BFF]/10"
          >
            <div className="flex items-center gap-2.5 px-3 w-full">
              <Search className="h-5 w-5 text-[#64748B] shrink-0" />
              <input
                type="text"
                value={localInput}
                onChange={(e) => {
                  setLocalInput(e.target.value);
                  onSearchChange(e.target.value);
                }}
                placeholder="What service do you need? (e.g. Technical CTO, Cloud ERP, Angel Funding)..."
                className="w-full py-2.5 text-sm sm:text-base text-[#0A2540] placeholder-[#94A3B8] bg-transparent outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-7 py-3 rounded-xl bg-[#0A2540] hover:bg-[#635BFF] text-white font-semibold text-sm transition-all shrink-0 cursor-pointer shadow-sm"
            >
              <span>Search</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Popular Tag Chips (Fiverr Style) */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs">
            <span className="font-semibold text-[#64748B] mr-1">Popular:</span>
            {POPULAR_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setLocalInput(tag);
                  onPopularTagClick(tag);
                  const el = document.getElementById("services-marketplace");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="px-2.5 py-1 rounded-full bg-white hover:bg-[#F1F5F9] border border-[#CBD5E1] text-[#334155] hover:text-[#0A2540] font-medium transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Trust Badges Strip (Fiverr Trust Metrics) */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-[#64748B]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-[#00A389]" />
            <span>Vetted Leaders & Engineers</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[#059669]" />
            <span>0% Intermediary / Broker Cut</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <Lock className="h-4 w-4 text-[#635BFF]" />
            <span>Mutual NDA & 100% Day-1 IP</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-[#FF7043]" />
            <span>Milestone-Backed Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
