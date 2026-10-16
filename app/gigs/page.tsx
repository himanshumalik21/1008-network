"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { initialGigs } from "@/data/gigs";
import { GigCategory } from "@/lib/types";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  PlusCircle,
  Sparkles,
  CheckCircle2,
  Building2,
  DollarSign,
  Search,
  Filter,
  ArrowUpRight,
  Users,
  Layers,
  ChevronRight,
  ShieldCheck,
  Send,
} from "lucide-react";

export default function GigsDirectoryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories: string[] = [
    "All",
    "Tech & Cloud Development",
    "ERP, Accounts & GST Compliance",
    "B2B Sales & GTM Outreach",
    "Supply Chain & Factory Audits",
    "UI/UX & Product Design",
    "Digital Marketing & Performance",
    "Legal, Contracts & Cap Table",
    "Operations & Process Automation",
  ];

  const filteredGigs = initialGigs.filter((gig) => {
    const matchesCategory =
      selectedCategory === "All" || gig.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      gig.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gig.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gig.skillsRequired.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 bg-[#FDFDFE] min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative py-14 sm:py-20 overflow-hidden border-b border-[#E6E8EB] bg-[#F6F9FC]">
        <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-55 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-gradient-to-r from-[#635BFF]/12 via-[#00D4B2]/08 to-[#FF7043]/06 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center">
            <Badge variant="indigo" size="md" pulse>
              1008 Community • Gigs & Projects
            </Badge>
            <span className="text-xs font-mono font-semibold text-[#00A389] bg-[#E6FFFA] px-2.5 py-0.5 rounded-full border border-[#B2F5EA]">
              Fast-Turnaround Business Goals
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Post acute gig requests.{" "}
            <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              Find specialized gigs to work on.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#425466] leading-relaxed max-w-3xl mx-auto font-normal">
            Whether your business needs an ERP ledger migration, cold outbound sales engine, or BIS factory compliance audit — post a gig or get hired by operating Indian businesses.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="/gigs/post"
              size="md"
              variant="primary"
              rightIcon={<PlusCircle className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold px-6 shadow-sm"
            >
              Post a Gig Request (For Businesses)
            </Button>
            <a
              href="#gig-listings"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#0A2540] border border-[#CBD5E1] font-semibold text-sm shadow-xs transition-all"
            >
              <span>Explore Active Gigs</span>
              <ArrowRight className="h-4 w-4 text-[#635BFF]" />
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#64748B] font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#00D4B2]" /> Direct Founder Connection
            </span>
            <span>•</span>
            <span>Milestone & Fixed Budget INR</span>
            <span>•</span>
            <span>No Agency Markups</span>
          </div>
        </div>
      </section>

      {/* 2. Main Listing Section */}
      <section id="gig-listings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between pb-4 border-b border-[#E2E8F0]">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]" />
            <input
              type="text"
              placeholder="Search by gig, business, or skill (e.g. ERPNext, Apollo, BIS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#CBD5E1] bg-white text-sm text-[#0A2540] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#635BFF]/30 focus:border-[#635BFF]"
            />
          </div>

          {/* Category Chips Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#635BFF] text-white shadow-xs"
                    : "bg-white text-[#475569] border border-[#E2E8F0] hover:border-[#CBD5E1]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gigs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGigs.map((gig) => (
            <div
              key={gig.id}
              className="bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#635BFF]/40 hover:shadow-lg transition-all p-6 flex flex-col justify-between space-y-5 group relative"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[11px] font-mono font-semibold text-[#635BFF] bg-[#F0F0FF] border border-[#E0E0FF] px-2.5 py-1 rounded-md">
                    {gig.category}
                  </span>
                  <span className="text-xs font-bold text-[#0A2540] bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1 rounded-full">
                    {gig.budgetINR}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-[#635BFF] transition-colors leading-snug">
                  {gig.title}
                </h3>

                <div className="flex items-center gap-3 text-xs text-[#64748B] flex-wrap">
                  <span className="font-semibold text-[#0A2540] flex items-center gap-1">
                    <Building2 className="h-3.5 w-3.5 text-[#635BFF]" />
                    {gig.businessName}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-[#64748B]" />
                    {gig.duration}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-[#00A389]" />
                    {gig.location} ({gig.workMode})
                  </span>
                </div>

                <p className="text-sm text-[#475569] leading-relaxed pt-1">
                  {gig.goalSummary}
                </p>

                {/* Key Deliverables */}
                <div className="pt-2 space-y-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                    Deliverables:
                  </span>
                  <ul className="text-xs text-[#475569] space-y-1">
                    {gig.deliverables.slice(0, 3).map((d, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#00A389] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Row */}
              <div className="pt-4 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {gig.skillsRequired.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] bg-[#F8FAFC] text-[#475569] px-2 py-0.5 rounded border border-[#E2E8F0]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={`mailto:join@1008.network?subject=Interest%20in%20Gig:%20${encodeURIComponent(
                    gig.title
                  )}&body=Hi%201008%20Team,%0A%0AI%20am%20interested%20in%20taking%20on%20this%20gig:%20${encodeURIComponent(
                    gig.title
                  )}%20for%20${encodeURIComponent(
                    gig.businessName
                  )}.%0A%0AMy%20Profile%20/%20Portfolio:%0A`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#635BFF] hover:text-[#4F46E5] group-hover:translate-x-0.5 transition-all"
                >
                  <span>Apply for this Gig</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Community Callout Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0A2540] to-[#1E293B] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-xl font-bold font-sans">
              Need a specialized problem solved for your business?
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Post a gig request in 2 minutes. The 1008 community connects you directly with proven specialists across software, supply chain, accounts, and enterprise GTM.
            </p>
          </div>
          <Button
            href="/gigs/post"
            size="md"
            variant="primary"
            rightIcon={<ArrowRight className="h-4 w-4" />}
            className="shrink-0 font-semibold px-6 shadow-md"
          >
            Post a Gig Request
          </Button>
        </div>
      </section>
    </div>
  );
}
