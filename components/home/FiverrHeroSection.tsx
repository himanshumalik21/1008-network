"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/brand/Badge";
import {
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sparkles,
  Star,
  Camera,
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
    const el = document.getElementById("services-marketplace");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full pt-32 pb-16 sm:pt-36 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#F6F9FC] via-white to-white border-b border-[#E6E8EB]">
      {/* Background Architectural Grid & Subtle Mesh Glow */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-35 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#635BFF]/10 via-[#00D4B2]/08 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Search, Popular Tags, Trust */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Announcement Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="indigo" size="md" pulse className="text-xs px-3.5 py-1 font-medium">
                1008 Marketplace • Verified Business Services & Community
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#0A2540] leading-[1.15] font-sans">
                Find the right execution partner,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] via-[#635BFF] to-[#00A389]">
                  talent, or capital for your business.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#425466] leading-relaxed max-w-2xl font-normal">
                Scale without operational bottlenecks. 1008 Network connects you with curated co-founders, angel funding discovery, outsourced tech development, and acute project sprints.
              </p>
            </div>

            {/* Fiverr-Style Hero Search Bar */}
            <div className="w-full max-w-xl mx-auto lg:mx-0">
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
                    placeholder="Search services (e.g. Technical CTO, Cloud ERP)..."
                    className="w-full py-2.5 text-sm sm:text-base text-[#0A2540] placeholder-[#94A3B8] bg-transparent outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-[#0A2540] hover:bg-[#635BFF] text-white font-semibold text-sm transition-all shrink-0 cursor-pointer shadow-sm"
                >
                  <span>Search</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              {/* Popular Tag Chips */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-xs">
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

            {/* Trust Badges Strip */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-6 text-xs font-mono text-[#64748B]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#00A389]" />
                <span>Vetted Leaders</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#059669]" />
                <span>0% Broker Cut</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-[#635BFF]" />
                <span>Mutual NDA Standard</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Photo Card Showcase (Fiverr Signature Hero Image Grid) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Photo Card: Technical CTO & Architect */}
              <div className="rounded-3xl bg-white border border-[#E2E8F0] shadow-xl overflow-hidden transform hover:-translate-y-1 transition-transform">
                <div className="relative h-60 sm:h-64 w-full bg-[#E2E8F0]">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="Senior engineering team and startup co-founders"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

                  {/* Top Pill Overlay */}
                  <div className="absolute top-3 left-3 bg-[#0A2540]/90 backdrop-blur-xs text-white px-3 py-1 rounded-full text-xs font-mono font-semibold flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#00D4B2]" />
                    <span>Featured Turnkey Solution</span>
                  </div>

                  {/* Bottom Content in Photo */}
                  <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                    <div className="flex items-center gap-1 text-xs text-[#FDE047] font-bold">
                      <Star className="h-3.5 w-3.5 fill-[#FDE047]" />
                      <span>5.0 (Vetted Standard)</span>
                    </div>
                    <h3 className="text-base font-bold text-white drop-shadow-sm">
                      Technical CTO & Lead Architect Matching
                    </h3>
                    <p className="text-xs text-white/90 line-clamp-1">
                      Milestone Equity • 4-Year Reverse-Vesting • Zero Recruiter Markup
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-[#0A2540]">Curated for Operating Founders</span>
                    <p className="text-[11px] text-[#64748B]">Pan-India Tech & Software Ventures</p>
                  </div>
                  <a
                    href="#services-marketplace"
                    className="px-3.5 py-1.5 rounded-lg bg-[#0A2540] hover:bg-[#635BFF] text-white font-semibold transition-colors"
                  >
                    View Card
                  </a>
                </div>
              </div>

              {/* Floating Mini Overlay Card (Fiverr Pro Badge) */}
              <div className="absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-md rounded-2xl border border-[#CBD5E1] p-3.5 shadow-lg hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00A389]/10 text-[#00A389] flex items-center justify-center font-mono font-bold text-sm">
                  1008
                </div>
                <div className="text-xs">
                  <div className="font-bold text-[#0A2540] flex items-center gap-1">
                    <span>100% Day-1 IP Ownership</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#00A389]" />
                  </div>
                  <span className="text-[#64748B]">No agency retainers or hidden cuts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
