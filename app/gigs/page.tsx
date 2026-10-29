"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { initialGigs } from "@/data/gigs";
import { GigItem, GigCategory } from "@/lib/types";
import { GigCard } from "@/components/gigs/GigCard";
import { GigApplicationModal } from "@/components/gigs/GigApplicationModal";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import {
  Search,
  X,
  PlusCircle,
  ShieldCheck,
  Building2,
  Clock,
  Sparkles,
  ArrowRight,
  Filter,
  CheckCircle2,
  Briefcase,
  Zap,
  Code2,
  BarChart3,
  Target,
  Scale,
  Palette,
  Megaphone,
} from "lucide-react";

export default function GigsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedWorkMode, setSelectedWorkMode] = useState<string>("all");
  const [selectedDuration, setSelectedDuration] = useState<string>("all");
  const [selectedGigForApply, setSelectedGigForApply] = useState<GigItem | null>(null);

  // Category definitions with icons
  const categoryFilters = [
    { id: "all", label: "All Sprints", icon: Briefcase },
    { id: "Tech & Cloud Development", label: "Tech & Software", icon: Code2 },
    { id: "ERP, Accounts & GST Compliance", label: "ERP & Accounts", icon: BarChart3 },
    { id: "B2B Sales & GTM Outreach", label: "Sales & Outreach", icon: Target },
    { id: "Supply Chain & Factory Audits", label: "Factory & SOPs", icon: Building2 },
    { id: "Legal, Contracts & Cap Table", label: "Legal & Cap Table", icon: Scale },
    { id: "UI/UX & Product Design", label: "UI/UX Design", icon: Palette },
    { id: "Digital Marketing & Performance", label: "Growth & Marketing", icon: Megaphone },
  ];

  // Client-side filtering
  const filteredGigs = useMemo(() => {
    return initialGigs.filter((gig) => {
      // Category filter
      if (selectedCategory !== "all" && gig.category !== selectedCategory) {
        return false;
      }

      // Work mode filter
      if (selectedWorkMode !== "all" && gig.workMode !== selectedWorkMode) {
        return false;
      }

      // Duration filter
      if (selectedDuration !== "all" && !gig.duration.includes(selectedDuration)) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = gig.title.toLowerCase().includes(q);
        const matchesBusiness = gig.businessName.toLowerCase().includes(q);
        const matchesCategory = gig.category.toLowerCase().includes(q);
        const matchesSummary = gig.goalSummary.toLowerCase().includes(q);
        const matchesSkills = gig.skillsRequired.some((s) => s.toLowerCase().includes(q));
        const matchesDeliverables = gig.deliverables.some((d) => d.toLowerCase().includes(q));

        if (!matchesTitle && !matchesBusiness && !matchesCategory && !matchesSummary && !matchesSkills && !matchesDeliverables) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedWorkMode, selectedDuration]);

  return (
    <div className="pt-24 pb-20 bg-[#FDFDFE] min-h-screen">
      {/* 1. Marketplace Top Hero */}
      <section className="relative py-12 sm:py-16 overflow-hidden border-b border-[#E6E8EB] bg-[#F6F9FC]">
        <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-35 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-gradient-to-r from-[#635BFF]/10 via-[#00D4B2]/08 to-[#FF7043]/06 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center">
            <Badge variant="indigo" size="md">
              1008 Community • Gigs & Project Sprints
            </Badge>
            <span className="text-xs font-mono font-semibold text-[#00A389] bg-[#E6FFFA] px-2.5 py-0.5 rounded-full border border-[#B2F5EA]">
              Fiverr & Upwork Curated Model
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Acute project sprints for operating businesses.{" "}
            <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              Delivered by verified specialists.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#425466] leading-relaxed max-w-3xl mx-auto font-normal">
            Businesses submit acute hurdles with committed INR budgets. 1008 Network reviews the scope, sets milestone deliverables, and coordinates verified specialists to deliver fast 1 to 4 week sprints.
          </p>

          {/* Upwork/Fiverr Style Search Bar */}
          <div className="pt-3 max-w-2xl mx-auto">
            <div className="relative flex items-center shadow-sm rounded-2xl bg-white border border-[#CBD5E1] focus-within:border-[#635BFF] focus-within:ring-2 focus-within:ring-[#635BFF]/20 transition-all">
              <Search className="h-5 w-5 text-[#94A3B8] ml-4 shrink-0" />
              <input
                type="text"
                placeholder="Search by skill, scope, or tech (e.g. ERPNext, Apollo, Next.js, BIS, GST...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3.5 pl-3 pr-10 text-sm text-[#0A2540] placeholder:text-[#94A3B8] bg-transparent focus:outline-none font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-1.5 mr-2 rounded-full text-[#94A3B8] hover:text-[#0A2540] hover:bg-[#F1F5F9] transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Dual CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="/gigs/post"
              size="md"
              variant="primary"
              rightIcon={<PlusCircle className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold px-6 shadow-sm"
            >
              Post a Gig Requirement (For Businesses)
            </Button>
            <Button
              href="#browse-gigs"
              size="md"
              variant="secondary"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold px-6 shadow-xs"
            >
              Explore Active Sprints ({initialGigs.length} Live)
            </Button>
          </div>

          {/* Trust Value Props */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-[#64748B] font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#00D4B2]" /> 1008 Milestone Escrow
            </span>
            <span>•</span>
            <span>Committed INR Budgets</span>
            <span>•</span>
            <span>1008 Curation & Review</span>
            <span>•</span>
            <span>Zero Agency Retainers</span>
          </div>
        </div>
      </section>

      {/* 2. Category Pill Filter Ribbon (Fiverr Style) */}
      <section className="bg-white border-b border-[#E2E8F0] sticky top-[65px] z-30 shadow-xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-3">
            {categoryFilters.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              // Calculate category count
              const count =
                cat.id === "all"
                  ? initialGigs.length
                  : initialGigs.filter((g) => g.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    isActive
                      ? "bg-[#0A2540] text-white shadow-xs"
                      : "text-[#475569] hover:text-[#0A2540] hover:bg-[#F1F5F9] border border-transparent hover:border-[#E2E8F0]"
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? "text-[#00D4B2]" : "text-[#64748B]"}`} />
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-[#F1F5F9] text-[#64748B]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Main Marketplace Section */}
      <section id="browse-gigs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        {/* Filter Controls & Counters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#0A2540]">
              Active Sprints & Gigs
            </span>
            <span className="text-xs font-mono font-semibold text-[#635BFF] bg-[#F0F0FF] px-2.5 py-0.5 rounded-full border border-[#E0E0FF]">
              {filteredGigs.length} {filteredGigs.length === 1 ? "Opportunity" : "Opportunities"} Available
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Work Mode Filter */}
            <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
              <span>Mode:</span>
              <select
                value={selectedWorkMode}
                onChange={(e) => setSelectedWorkMode(e.target.value)}
                className="bg-white border border-[#CBD5E1] rounded-lg px-2.5 py-1.5 text-xs text-[#0A2540] font-medium focus:outline-none focus:border-[#635BFF]"
              >
                <option value="all">All Modes</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-Site">On-Site</option>
              </select>
            </div>

            {/* Duration Filter */}
            <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
              <span>Timeline:</span>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="bg-white border border-[#CBD5E1] rounded-lg px-2.5 py-1.5 text-xs text-[#0A2540] font-medium focus:outline-none focus:border-[#635BFF]"
              >
                <option value="all">All Timelines</option>
                <option value="1 - 2 Weeks">1 - 2 Weeks</option>
                <option value="2 - 4 Weeks">2 - 4 Weeks</option>
              </select>
            </div>

            {/* Clear filters if active */}
            {(selectedCategory !== "all" || selectedWorkMode !== "all" || selectedDuration !== "all" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedWorkMode("all");
                  setSelectedDuration("all");
                  setSearchQuery("");
                }}
                className="text-xs text-[#635BFF] hover:underline font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Gigs Grid */}
        {filteredGigs.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredGigs.map((gig) => (
              <GigCard
                key={gig.id}
                gig={gig}
                onApply={(g) => setSelectedGigForApply(g)}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 rounded-3xl bg-white border border-[#E2E8F0] text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F1F5F9] text-[#64748B] flex items-center justify-center mx-auto">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0A2540]">
              No Sprints Match Your Current Filter
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto">
              Try resetting your category or search query, or post your own custom gig request.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <Button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedWorkMode("all");
                  setSelectedDuration("all");
                  setSearchQuery("");
                }}
                variant="secondary"
                size="md"
              >
                Clear All Filters
              </Button>
              <Button href="/gigs/post" variant="primary" size="md">
                Post a Gig Requirement
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* 4. Dual Callout Cards: For Businesses & For Specialists */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Businesses */}
          <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F0F0FF] text-[#635BFF] flex items-center justify-center border border-[#E0E0FF]">
                <Building2 className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <Badge variant="indigo" size="sm">For Businesses & Startups</Badge>
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Post a Gig or Sprint Request
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Have an ERP migration, outbound sales engine, or technical bottleneck? Post your scope and budget. 1008 ops vets requests and matches qualified specialists.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-[#334155]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                  <span>Curated by 1008 ops before publication (zero spam)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                  <span>Fixed milestone budgets with verifiable sign-offs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                  <span>Direct founder-to-specialist intro within 24-48 hours</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F1F5F9]">
              <Button
                href="/gigs/post"
                variant="primary"
                size="md"
                className="w-full justify-center font-semibold"
                rightIcon={<PlusCircle className="h-4 w-4" />}
              >
                Post a Gig Requirement
              </Button>
            </div>
          </div>

          {/* Card 2: Specialists */}
          <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E6FFFA] text-[#00A389] flex items-center justify-center border border-[#B2F5EA]">
                <Briefcase className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <Badge variant="cyan" size="sm">For Freelancers & Operators</Badge>
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Pick Up Acute Paid Sprints
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Deliver high-impact 1 to 4 week sprints for verified Indian companies. Clean scopes, committed milestone budgets, and zero payment chasing.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-[#334155]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                  <span>Pre-scoped deliverables with committed INR pay</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                  <span>1008 Network escrow protection on all milestones</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                  <span>Zero freelancer fee or agency markups</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F1F5F9]">
              <Button
                href="#browse-gigs"
                variant="secondary"
                size="md"
                className="w-full justify-center font-semibold"
                rightIcon={<ArrowRight className="h-4 w-4 text-[#00A389]" />}
              >
                Browse & Pick Up Sprints Above
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 1008 Curation & Execution Model (How It Works) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="indigo" size="sm">How 1008 Sprints Work</Badge>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540]">
              Zero Friction. Curated Quality. Standardized Rails.
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B]">
              How 1008 Network bridges operating businesses with top specialists without agency retainers or freelancer bidding wars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] space-y-3">
              <span className="w-8 h-8 rounded-xl bg-[#F0F0FF] text-[#635BFF] font-mono font-bold text-xs flex items-center justify-center">
                01
              </span>
              <h4 className="text-base font-bold text-[#0A2540]">Post & Curate</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Business submits the acute goal, scope of work, and pay. 1008 operations reviews requirements, standardizes milestones, and lists it.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] space-y-3">
              <span className="w-8 h-8 rounded-xl bg-[#E6FFFA] text-[#00A389] font-mono font-bold text-xs flex items-center justify-center">
                02
              </span>
              <h4 className="text-base font-bold text-[#0A2540]">Express Interest & Assess</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Specialists pick up the gig by submitting proof of work and relevant experience. 1008 Network reviews and introduces top matches to the client.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] space-y-3">
              <span className="w-8 h-8 rounded-xl bg-[#ECFDF5] text-[#059669] font-mono font-bold text-xs flex items-center justify-center">
                03
              </span>
              <h4 className="text-base font-bold text-[#0A2540]">Milestone Sign-Off</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Sprint delivered in 1 to 4 weeks. Payout is released seamlessly upon verified completion of agreed deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Gig Application Modal */}
      <GigApplicationModal
        gig={selectedGigForApply}
        isOpen={!!selectedGigForApply}
        onClose={() => setSelectedGigForApply(null)}
      />
    </div>
  );
}
