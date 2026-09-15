"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { initialStartupCapitalCards } from "@/data/startupCapitalCards";
import { initialInvestorCards } from "@/data/investorCards";
import { StartupCapitalCard, InvestorCard, LocationType } from "@/lib/types";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { CapitalInterestModal } from "@/components/capital/CapitalInterestModal";
import { InvestIn1008Modal } from "@/components/capital/InvestIn1008Modal";
import { cn } from "@/lib/utils";
import {
  TrendingUp,
  ShieldCheck,
  Building2,
  Factory,
  HeartPulse,
  Hotel,
  GraduationCap,
  ShoppingBag,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Lock,
  Layers,
  Briefcase,
  PieChart,
  Clock,
  UserCheck,
  Rocket,
  DollarSign,
  Search,
  Filter,
  MapPin,
  ChevronDown,
  RotateCcw,
  PlusCircle,
  ArrowUpRight,
  Send,
  Award,
  Globe,
  Coins,
  Users,
  FileCheck2,
  AlertTriangle,
  FileText,
  Handshake,
} from "lucide-react";

export default function CapitalPage() {
  const [activeTab, setActiveTab] = useState<"startups" | "investors">("startups");
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Modals
  const [selectedStartupForInquiry, setSelectedStartupForInquiry] = useState<StartupCapitalCard | null>(null);
  const [selectedInvestorForInquiry, setSelectedInvestorForInquiry] = useState<InvestorCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStudioInvestModalOpen, setIsStudioInvestModalOpen] = useState(false);

  const sectorFilters = [
    { label: "All Sectors", value: "all" },
    { label: "Manufacturing & Industrial", value: "Industrial & Manufacturing" },
    { label: "Healthcare & MedTech", value: "Healthcare & HealthTech" },
    { label: "D2C & Retail", value: "Retail, E-Commerce & D2C Brands" },
    { label: "CleanTech & Energy", value: "CleanTech & Energy" },
    { label: "Tech, AI & SaaS", value: "Tech & Software Ventures" },
    { label: "Logistics & Supply Chain", value: "Logistics & Supply Chain" },
  ];

  const locations: LocationType[] = [
    "Delhi NCR",
    "Bengaluru",
    "Mumbai",
    "Pune",
    "Hyderabad",
    "Chennai",
    "Ahmedabad",
    "Pan-India / Remote",
    "Other Location",
  ];

  // Filtered Startups
  const filteredStartups = useMemo(() => {
    return initialStartupCapitalCards.filter((startup) => {
      const matchSector = selectedSector === "all" || startup.sector.toLowerCase().includes(selectedSector.toLowerCase()) || selectedSector.toLowerCase().includes(startup.sector.toLowerCase());
      const matchLocation = selectedLocation === "all" || startup.location === selectedLocation;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        startup.title.toLowerCase().includes(q) ||
        startup.startupName.toLowerCase().includes(q) ||
        startup.sector.toLowerCase().includes(q) ||
        startup.location.toLowerCase().includes(q) ||
        startup.ventureThesis.toLowerCase().includes(q) ||
        startup.deploymentScope.toLowerCase().includes(q);

      return matchSector && matchLocation && matchSearch;
    });
  }, [selectedSector, selectedLocation, searchQuery]);

  // Filtered Investors
  const filteredInvestors = useMemo(() => {
    return initialInvestorCards.filter((inv) => {
      const matchLocation = selectedLocation === "all" || inv.location === selectedLocation;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        inv.name.toLowerCase().includes(q) ||
        inv.title.toLowerCase().includes(q) ||
        inv.bio.toLowerCase().includes(q) ||
        inv.location.toLowerCase().includes(q) ||
        inv.category.toLowerCase().includes(q) ||
        inv.strategicValue.toLowerCase().includes(q) ||
        inv.targetSectors.some((s) => s.toLowerCase().includes(q));

      return matchLocation && matchSearch;
    });
  }, [selectedLocation, searchQuery]);

  const resetFilters = () => {
    setSelectedSector("all");
    setSelectedLocation("all");
    setSearchQuery("");
  };

  const handleStartupInquiry = (startup: StartupCapitalCard) => {
    setSelectedStartupForInquiry(startup);
    setSelectedInvestorForInquiry(null);
    setIsModalOpen(true);
  };

  const handleInvestorInquiry = (inv: InvestorCard) => {
    setSelectedInvestorForInquiry(inv);
    setSelectedStartupForInquiry(null);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-28 pb-20 bg-[#FDFDFE] min-h-screen">
      
      {/* 1. Hero Header Section */}
      <section className="relative py-14 sm:py-20 overflow-hidden border-b border-[#E6E8EB] bg-[#F6F9FC]">
        <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-55 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-gradient-to-r from-[#635BFF]/12 via-[#00D4B2]/08 to-[#FF7043]/06 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center">
            <Badge variant="indigo" size="md" pulse>
              1008 Capital & Syndicate Network
            </Badge>
            <span className="text-xs font-mono font-semibold text-[#00A389] bg-[#E6FFFA] px-2.5 py-0.5 rounded-full border border-[#B2F5EA]">
              Pre-Launch Data Aggregation Phase
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Democratic startup investing.{" "}
            <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              De-risked by turnkey operations.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#425466] leading-relaxed max-w-3xl mx-auto font-normal">
            Inspired by platforms like StartEngine and AngelList, 1008 Network connects anyone who wants to invest in high-conviction Indian startups (from ₹50K to ₹5Cr+) with founders raising capital. <strong>We manage ground-level operations and governance so capital is de-risked</strong>.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="/capital/post"
              size="md"
              variant="primary"
              rightIcon={<PlusCircle className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold px-6 shadow-sm"
            >
              Post Capital Requirement (For Startups)
            </Button>
            <Button
              href="/capital/join"
              size="md"
              variant="secondary"
              rightIcon={<TrendingUp className="h-4 w-4 text-[#00A389]" />}
              className="w-full sm:w-auto font-semibold"
            >
              Join Investor Pool (For Investors)
            </Button>
            <Button
              onClick={() => setIsStudioInvestModalOpen(true)}
              size="md"
              variant="ghost"
              className="w-full sm:w-auto text-xs text-[#635BFF] font-semibold hover:bg-[#635BFF]/10"
            >
              Invest in 1008 Network Studio →
            </Button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-[#627D98]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span>Syndicate Mode: <strong>Data Collection & Pre-Allocation</strong></span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#635BFF]" />
              <span>Mutual NDA & Private Syndicate Standard</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#FF7043]" />
              <span>Zero Intermediary / Placement Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Banner: Invest in 1008 Network Parent Studio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0A2540] via-[#1A365D] to-[#0A2540] p-6 sm:p-10 text-white relative overflow-hidden shadow-lg border border-[#2D3748]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#635BFF]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#00D4B2]/20 text-[#00D4B2] text-[10px] font-mono font-bold uppercase tracking-wider border border-[#00D4B2]/30">
                  Featured Opportunity
                </span>
                <span className="text-xs text-[#CBD5E1] font-mono">Portfolio Holding Equity</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Invest Directly in 1008 Network Parent Studio
              </h2>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                Back the venture studio building India&apos;s real economy enterprises. Owning equity in 1008 Network provides diversified portfolio upside across every manufacturing unit, healthcare clinic, retail brand, and tech software venture we co-build for shared equity.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-[#00D4B2]">
                <span>✓ Diversified across 10+ operational ventures</span>
                <span>✓ Direct equity participation</span>
                <span>✓ Zero management fees</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 w-full lg:w-auto">
              <Button
                onClick={() => setIsStudioInvestModalOpen(true)}
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="font-semibold shadow-md whitespace-nowrap bg-[#635BFF] hover:bg-[#5851EA] border-none"
              >
                Invest in 1008 Network
              </Button>
              <Button
                href="/studio"
                variant="ghost"
                size="sm"
                className="text-xs text-[#CBD5E1] hover:text-white hover:bg-white/10"
              >
                Explore Studio Model →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How Capital Rounds Work (4-Step Workflow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <Badge variant="cyan" size="sm">Syndicate Workflow</Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
            How Startup Capital Rounds Work
          </h2>
          <p className="text-xs sm:text-sm text-[#425466]">
            From open allocation to founder-investor deal completion — transparent, structured, and goal-driven.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Step 1 */}
          <div className="p-5 rounded-2xl bg-white border border-[#E6E8EB] shadow-xs relative flex flex-col justify-between space-y-3 group hover:border-[#635BFF]/40 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-[#F0F0FF] text-[#635BFF] font-mono font-bold text-xs flex items-center justify-center border border-[#E0E0FF]">
                  01
                </span>
                <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded-full border border-[#A7F3D0]">
                  Target Raise
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#0A2540]">
                Startup Launches Round & Defines Use of Funds
              </h3>
              <p className="text-xs text-[#425466] leading-relaxed">
                Founders post their target raise (e.g. ₹50L or $1M) with an exact breakdown of capital deployment: equipment, facility lease, pilot rollout, or inventory. Rounds stay open until target is met.
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#627D98] pt-2 border-t border-[#F1F4F8] flex items-center gap-1">
              <FileText className="h-3 w-3 text-[#635BFF]" /> Goal-based allocation
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl bg-white border border-[#E6E8EB] shadow-xs relative flex flex-col justify-between space-y-3 group hover:border-[#00A389]/40 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-[#E6FFFA] text-[#00A389] font-mono font-bold text-xs flex items-center justify-center border border-[#B2F5EA]">
                  02
                </span>
                <span className="text-[10px] font-mono text-[#635BFF] bg-[#F0F0FF] px-2 py-0.5 rounded-full border border-[#E0E0FF]">
                  Soft Commits
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#0A2540]">
                Investors & Angels Express Soft-Commitment
              </h3>
              <p className="text-xs text-[#425466] leading-relaxed">
                Individuals, operators, and syndicate leads specify how much capital they want to commit (from ₹50K to ₹50L+) along with their strategic value add and risk criteria.
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#627D98] pt-2 border-t border-[#F1F4F8] flex items-center gap-1">
              <Coins className="h-3 w-3 text-[#00A389]" /> Accessible check sizes
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl bg-white border border-[#E6E8EB] shadow-xs relative flex flex-col justify-between space-y-3 group hover:border-[#FF7043]/40 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-[#FFF3EE] text-[#FF7043] font-mono font-bold text-xs flex items-center justify-center border border-[#FFE2D6]">
                  03
                </span>
                <span className="text-[10px] font-mono text-[#FF7043] bg-[#FFF3EE] px-2 py-0.5 rounded-full border border-[#FFE2D6]">
                  Deal Room
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#0A2540]">
                Target Reached & Combined Deal Meeting
              </h3>
              <p className="text-xs text-[#425466] leading-relaxed">
                When the full round is allocated, 1008 Network facilitates a joint meeting where founders and prospective investors align on valuations, instruments (CCPS/equity), and execution milestones.
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#627D98] pt-2 border-t border-[#F1F4F8] flex items-center gap-1">
              <Users className="h-3 w-3 text-[#FF7043]" /> Combined founder call
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-5 rounded-2xl bg-white border border-[#E6E8EB] shadow-xs relative flex flex-col justify-between space-y-3 group hover:border-[#0A2540]/40 transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-[#F8FAFC] text-[#0A2540] font-mono font-bold text-xs flex items-center justify-center border border-[#CBD5E1]">
                  04
                </span>
                <span className="text-[10px] font-mono text-[#425466] bg-[#F1F5F9] px-2 py-0.5 rounded-full border border-[#E2E8F0]">
                  Direct Signing
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#0A2540]">
                Self Due Diligence & Direct Execution
              </h3>
              <p className="text-xs text-[#425466] leading-relaxed">
                Investors perform their own independent due diligence and sign definitive agreements directly with the startup. 1008 Network acts strictly as a discovery and meeting facilitator.
              </p>
            </div>
            <div className="text-[11px] font-mono text-[#627D98] pt-2 border-t border-[#F1F4F8] flex items-center gap-1">
              <FileCheck2 className="h-3 w-3 text-[#0A2540]" /> Direct party contract
            </div>
          </div>
        </div>

        {/* 4. Facilitator & Self-Due Diligence Disclaimer Banner */}
        <div className="mt-6 p-4 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#92400E]">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="h-4 w-4 text-[#D97706] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold font-sans">
                Platform Facilitator & Self Due Diligence Notice:
              </span>
              <p className="text-[11px] text-[#A16207] leading-relaxed">
                1008 Network is a pure technology & discovery facilitator connecting founders and capital providers. We do not pool investor capital, manage custodial funds, or offer investment advice. Startup investments carry substantial risk; all investors must conduct their own independent due diligence and invest at their own risk.
              </p>
            </div>
          </div>
          <Link
            href="/terms"
            className="text-[11px] font-mono font-bold text-[#D97706] hover:underline whitespace-nowrap shrink-0 self-start sm:self-auto"
          >
            Review Terms & Disclaimers →
          </Link>
        </div>
      </section>

      {/* 5. Main Marketplace Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Marketplace View Toggle: Startups Seeking Capital vs Investors Directory */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#E6E8EB]">
          <div className="inline-flex p-1 bg-[#F1F5F9] rounded-2xl border border-[#E2E8F0] shadow-2xs">
            <button
              onClick={() => setActiveTab("startups")}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all",
                activeTab === "startups"
                  ? "bg-white text-[#0A2540] shadow-sm"
                  : "text-[#627D98] hover:text-[#0A2540]"
              )}
            >
              <Rocket className="h-4 w-4 text-[#635BFF]" />
              <span>Startups Seeking Capital</span>
              <span className="px-2 py-0.5 rounded-full bg-[#635BFF]/10 text-[#635BFF] text-[11px] font-mono">
                {initialStartupCapitalCards.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab("investors")}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all",
                activeTab === "investors"
                  ? "bg-white text-[#0A2540] shadow-sm"
                  : "text-[#627D98] hover:text-[#0A2540]"
              )}
            >
              <TrendingUp className="h-4 w-4 text-[#00A389]" />
              <span>Investors & Capital Pool</span>
              <span className="px-2 py-0.5 rounded-full bg-[#00A389]/10 text-[#00A389] text-[11px] font-mono">
                {initialInvestorCards.length}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              href="/capital/post"
              size="sm"
              variant="secondary"
              className="text-xs font-semibold"
              rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
            >
              Post Capital Need
            </Button>
            <Button
              href="/capital/join"
              size="sm"
              variant="primary"
              className="text-xs font-semibold"
            >
              Register as Investor
            </Button>
          </div>
        </div>

        {/* StartEngine/AngelList Data Gathering Notice Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 px-4 py-3 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] text-xs font-mono text-[#065F46] shadow-2xs">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-[#059669] shrink-0" />
            <span>
              <strong>Target-Based Allocation:</strong> Unlike talent roles, Capital Network campaigns have no fixed time expiry. Campaigns remain open based on the company&apos;s target funding goal and close once the allocation is fulfilled.
            </span>
          </div>
          <span className="text-[11px] font-sans font-bold text-[#059669] bg-white px-2.5 py-1 rounded-md border border-[#A7F3D0] shrink-0 self-start sm:self-auto">
            Goal-Driven Raise
          </span>
        </div>

        {/* Search & Multi-Facet Filters */}
        <div className="space-y-4 bg-white p-5 rounded-2xl border border-[#E6E8EB] shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-5 relative flex items-center">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#829AB1] pointer-events-none" />
              <input
                type="text"
                placeholder={
                  activeTab === "startups"
                    ? "Search startups, sectors, deployment scope..."
                    : "Search investors, ticket sizes, mandates..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3.5 h-11 text-xs sm:text-sm bg-white border border-[#CBD5E1] rounded-xl text-[#0A2540] placeholder-[#829AB1] focus:outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/15 transition-all shadow-xs"
              />
            </div>

            {/* Location Dropdown */}
            <div className="md:col-span-4 relative flex items-center">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#635BFF] pointer-events-none" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full appearance-none pl-10 pr-8 h-11 rounded-xl bg-white border border-[#CBD5E1] text-xs sm:text-sm font-medium text-[#0A2540] focus:outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/15 transition-all shadow-xs cursor-pointer"
              >
                <option value="all">All Locations (Pan-India)</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#829AB1] pointer-events-none" />
            </div>

            {/* Reset Button */}
            <div className="md:col-span-3 flex items-center gap-2">
              <Button
                href="/capital/join"
                variant="secondary"
                size="md"
                className="flex-1 h-11 text-xs font-semibold justify-center"
              >
                Join Investor Pool
              </Button>
              {(selectedSector !== "all" || selectedLocation !== "all" || searchQuery) && (
                <button
                  onClick={resetFilters}
                  className="h-11 px-3 rounded-xl text-[#627D98] hover:text-[#0A2540] hover:bg-[#F1F5F9] border border-[#CBD5E1] transition-colors shrink-0 shadow-xs flex items-center justify-center"
                  title="Reset Filters"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Functional Sector Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 no-scrollbar border-t border-[#F1F4F8]">
            {sectorFilters.map((sf) => {
              const isSelected = selectedSector === sf.value;
              return (
                <button
                  key={sf.value}
                  onClick={() => setSelectedSector(sf.value)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap border shrink-0",
                    isSelected
                      ? "bg-[#0A2540] text-white border-[#0A2540] shadow-2xs"
                      : "bg-[#F8FAFC] text-[#425466] border-[#E6E8EB] hover:text-[#0A2540] hover:bg-white hover:border-[#CBD5E1]"
                  )}
                >
                  {sf.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Content Display */}
        {activeTab === "startups" ? (
          /* TAB 1: STARTUPS SEEKING CAPITAL */
          <div className="space-y-6">
            {/* Cohort Status Notice Header */}
            <div className="p-6 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#635BFF]">
                    Next Syndicate Allocation Batch in Due Diligence
                  </span>
                </div>
                <p className="text-xs text-[#425466] max-w-2xl">
                  Currently, active investment allocations are undergoing operational feasibility audits and term structuring. Once open, verified co-investment tranches will be listed live below.
                </p>
              </div>
              <Button
                href="/capital/post"
                variant="primary"
                size="sm"
                className="shrink-0 text-xs font-semibold shadow-xs"
                rightIcon={<PlusCircle className="h-3.5 w-3.5" />}
              >
                Submit Startup for Capital
              </Button>
            </div>

            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-mono text-[#627D98]">
                Previewing <strong className="text-[#0A2540]">{filteredStartups.length}</strong> upcoming venture rounds in pipeline
              </div>
            </div>

            {filteredStartups.length === 0 ? (
              <div className="text-center py-16 bg-[#F8FAFC] rounded-3xl border border-[#E6E8EB] my-6 space-y-3">
                <Rocket className="h-12 w-12 text-[#829AB1] mx-auto opacity-50" />
                <h3 className="text-lg font-bold text-[#0A2540]">No matching startup requirements found</h3>
                <p className="text-xs text-[#425466] max-w-sm mx-auto">
                  Try clearing your search query or selecting &quot;All Sectors&quot; to see all pipeline opportunities.
                </p>
                <Button onClick={resetFilters} variant="secondary" size="sm">
                  Reset All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredStartups.map((startup) => (
                  <div
                    key={startup.id}
                    className="rounded-2xl bg-white border border-[#E6E8EB] p-6 flex flex-col justify-between hover:border-[#635BFF]/50 hover:shadow-lg transition-all duration-300 relative group shadow-xs"
                  >
                    <div className="space-y-3.5">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <Badge variant="indigo" size="sm">
                            {startup.stage}
                          </Badge>
                          <span className="px-2 py-0.5 rounded-md bg-[#F1F5F9] text-[#475569] text-[10px] font-semibold">
                            {startup.sector}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {startup.studioBacked && (
                            <span className="px-2 py-0.5 rounded-full bg-[#00D4B2]/15 text-[#007A66] text-[10px] font-mono font-bold flex items-center gap-1">
                              <Sparkles className="h-2.5 w-2.5" /> Studio Backed
                            </span>
                          )}
                          <span className="text-[10px] font-mono text-[#059669] font-bold flex items-center gap-1 bg-[#ECFDF5] px-2 py-0.5 rounded-md border border-[#A7F3D0]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" /> {startup.fundingStatus || "Open for Allocation"}
                          </span>
                        </div>
                      </div>

                      {/* Title & Location */}
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#0A2540] group-hover:text-[#635BFF] transition-colors leading-snug">
                          {startup.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1.5 text-xs text-[#627D98] font-medium">
                          <span className="text-[#0A2540] font-semibold">{startup.startupName}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-[#829AB1]" /> {startup.location}
                          </span>
                        </div>
                      </div>

                      {/* Founder Background */}
                      <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] text-xs space-y-1">
                        <div className="text-[#829AB1] font-mono uppercase text-[9px] font-bold tracking-wider">
                          FOUNDER PEDIGREE
                        </div>
                        <div className="text-[#0A2540] font-bold text-xs">{startup.founderBackground.headline}</div>
                        <div className="text-[#627D98] text-[11px] leading-relaxed">
                          {startup.founderBackground.domainYears}+ years execution track record
                        </div>
                      </div>

                      {/* Venture Thesis */}
                      <p className="text-xs text-[#425466] leading-relaxed line-clamp-2">
                        {startup.ventureThesis}
                      </p>

                      {/* Deployment Scope */}
                      <div className="p-3 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-xs space-y-1">
                        <div className="text-[#059669] font-mono uppercase text-[9px] font-bold tracking-wider">
                          PRIMARY CAPITAL USE
                        </div>
                        <p className="text-[#065F46] text-xs leading-relaxed">
                          {startup.deploymentScope}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 mt-4 border-t border-[#E6E8EB] space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E6E8EB]">
                        <div>
                          <span className="text-[#829AB1] text-[9px] block uppercase font-bold">TARGET RAISE</span>
                          <span className="text-[#0A2540] font-bold text-xs">{startup.targetRaise}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[#829AB1] text-[9px] block uppercase font-bold">EQUITY OFFER</span>
                          <span className="text-[#059669] font-bold text-xs">{startup.equityOffered}</span>
                        </div>
                      </div>

                      <Button
                        onClick={() => handleStartupInquiry(startup)}
                        variant="primary"
                        size="sm"
                        className="w-full text-xs font-semibold justify-center shadow-xs"
                        rightIcon={<Send className="h-3.5 w-3.5" />}
                      >
                        Express Co-Investment Interest
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* TAB 2: INVESTORS & CAPITAL POOL DIRECTORY */
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-mono text-[#627D98]">
                Showing <strong className="text-[#0A2540]">{filteredInvestors.length}</strong> active investor profiles looking to deploy capital
              </div>
            </div>

            {filteredInvestors.length === 0 ? (
              <div className="text-center py-16 bg-[#F8FAFC] rounded-3xl border border-[#E6E8EB] my-6 space-y-3">
                <TrendingUp className="h-12 w-12 text-[#829AB1] mx-auto opacity-50" />
                <h3 className="text-lg font-bold text-[#0A2540]">No matching investor profiles found</h3>
                <p className="text-xs text-[#425466] max-w-sm mx-auto">
                  Try clearing your search query or location to explore all available investor profiles.
                </p>
                <Button onClick={resetFilters} variant="secondary" size="sm">
                  Reset All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredInvestors.map((inv) => (
                  <div
                    key={inv.id}
                    className="rounded-2xl bg-white border border-[#E6E8EB] p-6 flex flex-col justify-between hover:border-[#00A389]/50 hover:shadow-lg transition-all duration-300 relative group shadow-xs"
                  >
                    <div className="space-y-3.5">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <Badge variant="cyan" size="sm">
                          {inv.badge}
                        </Badge>
                        <span className="text-[11px] font-mono text-[#059669] font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" /> Ready to Allocate
                        </span>
                      </div>

                      {/* Name & Headline */}
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-base sm:text-lg font-bold text-[#0A2540] group-hover:text-[#00A389] transition-colors">
                            {inv.name}
                          </h3>
                          <span className="text-xs font-mono text-[#627D98]">{inv.category}</span>
                        </div>
                        <p className="text-xs font-semibold text-[#635BFF] mt-0.5">{inv.title}</p>
                        <div className="flex items-center gap-1.5 mt-1 text-xs text-[#829AB1]">
                          <MapPin className="h-3 w-3" /> {inv.location}
                        </div>
                      </div>

                      {/* Bio */}
                      <p className="text-xs text-[#425466] leading-relaxed line-clamp-3">
                        {inv.bio}
                      </p>

                      {/* Strategic Value Add */}
                      <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] text-xs space-y-1">
                        <div className="text-[#829AB1] font-mono uppercase text-[9px] font-bold tracking-wider">
                          STRATEGIC VALUE ADD
                        </div>
                        <p className="text-[#0A2540] text-xs leading-relaxed">
                          {inv.strategicValue}
                        </p>
                      </div>

                      {/* Target Sectors */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {inv.targetSectors.map((sec) => (
                          <span
                            key={sec}
                            className="px-2 py-0.5 rounded-md bg-[#E6FFFA] text-[#007A66] text-[10px] font-mono font-medium border border-[#B2F5EA]"
                          >
                            {sec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 mt-4 border-t border-[#E6E8EB] space-y-3">
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E6E8EB]">
                        <div>
                          <span className="text-[#829AB1] text-[9px] block uppercase font-bold">TICKET SIZE</span>
                          <span className="text-[#059669] font-bold text-xs">{inv.ticketSizeRange}</span>
                        </div>
                        <div>
                          <span className="text-[#829AB1] text-[9px] block uppercase font-bold">RISK PROFILE</span>
                          <span className="text-[#0A2540] font-bold text-xs truncate block">{inv.preferredRisk}</span>
                        </div>
                      </div>

                      <Button
                        onClick={() => handleInvestorInquiry(inv)}
                        variant="primary"
                        size="sm"
                        className="w-full text-xs font-semibold justify-center shadow-xs bg-[#00A389] hover:bg-[#008770] border-[#00A389]"
                        rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
                      >
                        Request Pitch / Introduction
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Dual Conversion Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
          {/* Card 1: For Startups */}
          <div className="p-8 rounded-3xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-4 relative overflow-hidden shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-[#F0F0FF] text-[#635BFF] flex items-center justify-center border border-[#E0E0FF]">
              <Rocket className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <Badge variant="indigo" size="sm">For Startups & Founders</Badge>
              <h3 className="text-2xl font-extrabold text-[#0A2540]">Raise Capital for Your Startup</h3>
              <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                Need funding to set up manufacturing lines, scale customer distribution, or hire core engineers? We vet your thesis and syndicate capital with zero upfront retainer fees.
              </p>
            </div>
            <div className="pt-2">
              <Button href="/capital/post" variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Post Capital Requirement (Free)
              </Button>
            </div>
          </div>

          {/* Card 2: For Investors */}
          <div className="p-8 rounded-3xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-4 relative overflow-hidden shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-[#E6FFFA] text-[#00A389] flex items-center justify-center border border-[#B2F5EA]">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <Badge variant="cyan" size="sm">For Individuals & Allocators</Badge>
              <h3 className="text-2xl font-extrabold text-[#0A2540]">Join the 1008 Investor Syndicate</h3>
              <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                Whether you want to invest ₹50,000 or ₹5 Crores+, co-invest in vetted Indian businesses de-risked by 1008 Network&apos;s operational management and ground execution.
              </p>
            </div>
            <div className="pt-2">
              <Button href="/capital/join" variant="secondary" size="md" rightIcon={<UserCheck className="h-4 w-4" />}>
                Register Investor Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capital Interest / Intro Modal */}
      <CapitalInterestModal
        targetStartup={selectedStartupForInquiry}
        targetInvestor={selectedInvestorForInquiry}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedStartupForInquiry(null);
          setSelectedInvestorForInquiry(null);
        }}
      />

      {/* Invest in 1008 Network Modal */}
      <InvestIn1008Modal
        isOpen={isStudioInvestModalOpen}
        onClose={() => setIsStudioInvestModalOpen(false)}
      />
    </div>
  );
}
