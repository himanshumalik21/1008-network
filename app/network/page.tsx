"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { initialOpportunities } from "@/data/opportunities";
import { initialTalentProfiles } from "@/data/talentProfiles";
import { Opportunity, TalentProfile, RoleCategory, RoleType, LocationType } from "@/lib/types";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { ExpressInterestModal } from "@/components/network/ExpressInterestModal";
import { JoinTalentModal } from "@/components/network/JoinTalentModal";
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
  Code2,
  Layers,
  Cpu,
  Building2,
  TrendingUp,
  UserCheck,
  Send,
  SlidersHorizontal,
  RotateCcw,
  ChevronDown,
} from "lucide-react";

export default function NetworkPage() {
  const [activeTab, setActiveTab] = useState<"opportunities" | "talent">("opportunities");
  const [selectedRole, setSelectedRole] = useState<string>("all");
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedRoleType, setSelectedRoleType] = useState<string>("all");
  const [studioOnly, setStudioOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Modals
  const [selectedOppForApply, setSelectedOppForApply] = useState<Opportunity | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isTalentModalOpen, setIsTalentModalOpen] = useState(false);

  const roleFilters = [
    { label: "All Roles", value: "all" },
    { label: "Technical & CTO", value: "Technical Co-Founder (CTO)" },
    { label: "Sales & GTM", value: "Go-to-Market / Sales Co-Founder" },
    { label: "Operations & Supply Chain", value: "Operations & Supply Chain Lead" },
    { label: "Product & Design", value: "Product & Design Partner" },
    { label: "Manufacturing & Plants", value: "Manufacturing & Plant Setup Head" },
    { label: "AI & DeepTech", value: "AI / ML & DeepTech Lead" },
    { label: "Finance & Fractional CXO", value: "Finance & Legal Strategist" },
    { label: "Growth & Marketing", value: "Growth & Marketing Architect" },
    { label: "Others", value: "Other Domain / Specialist Role" },
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

  // Filtered Opportunities
  const filteredOpportunities = useMemo(() => {
    return initialOpportunities.filter((opp) => {
      const matchRole = selectedRole === "all" || opp.role === selectedRole;
      const matchSector = selectedSector === "all" || opp.sector === selectedSector;
      const matchLocation = selectedLocation === "all" || opp.location === selectedLocation;
      const matchRoleType = selectedRoleType === "all" || opp.roleType === selectedRoleType;
      const matchStudio = !studioOnly || opp.studioBacked;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        opp.title.toLowerCase().includes(q) ||
        opp.role.toLowerCase().includes(q) ||
        opp.sector.toLowerCase().includes(q) ||
        opp.location.toLowerCase().includes(q) ||
        opp.founderBackground.headline.toLowerCase().includes(q) ||
        opp.ventureThesis.toLowerCase().includes(q) ||
        (opp.skills && opp.skills.some((s) => s.toLowerCase().includes(q)));

      return matchRole && matchSector && matchLocation && matchRoleType && matchStudio && matchSearch;
    });
  }, [selectedRole, selectedSector, selectedLocation, selectedRoleType, studioOnly, searchQuery]);

  // Filtered Talent Profiles
  const filteredTalent = useMemo(() => {
    return initialTalentProfiles.filter((tal) => {
      const matchRole = selectedRole === "all" || tal.roleFamily === selectedRole;
      const matchLocation = selectedLocation === "all" || tal.location === selectedLocation;
      const matchRoleType = selectedRoleType === "all" || tal.roleType === selectedRoleType;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        tal.name.toLowerCase().includes(q) ||
        tal.title.toLowerCase().includes(q) ||
        tal.bio.toLowerCase().includes(q) ||
        tal.location.toLowerCase().includes(q) ||
        tal.targetRole.toLowerCase().includes(q) ||
        tal.exCompanies.some((c) => c.toLowerCase().includes(q)) ||
        tal.skills.some((s) => s.toLowerCase().includes(q));

      return matchRole && matchLocation && matchRoleType && matchSearch;
    });
  }, [selectedRole, selectedLocation, selectedRoleType, searchQuery]);

  const resetFilters = () => {
    setSelectedRole("all");
    setSelectedSector("all");
    setSelectedLocation("all");
    setSelectedRoleType("all");
    setStudioOnly(false);
    setSearchQuery("");
  };

  const handleApplyClick = (opp: Opportunity) => {
    setSelectedOppForApply(opp);
    setIsApplyModalOpen(true);
  };

  return (
    <div className="pt-28 pb-20 bg-[#FDFDFE] min-h-screen">
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
              Find the right co-founder & talent.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#425466] leading-relaxed max-w-3xl mx-auto font-normal">
            Great enterprises are rarely built alone. Whether you need a Technical Co-Founder (CTO), Operations Lead, or GTM Sales Partner, or want to join a high-conviction Indian startup—1008 curates high-alignment matches for shared equity.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="/network/post"
              size="md"
              variant="primary"
              rightIcon={<PlusCircle className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold px-6 shadow-sm"
            >
              Post a Requirement (Free)
            </Button>
            <Button
              onClick={() => setIsTalentModalOpen(true)}
              size="md"
              variant="secondary"
              rightIcon={<UserCheck className="h-4 w-4 text-[#635BFF]" />}
              className="w-full sm:w-auto font-semibold"
            >
              Join Talent & Partner Pool
            </Button>
            <Button
              href="/studio"
              size="md"
              variant="ghost"
              className="w-full sm:w-auto text-xs text-[#627D98] hover:text-[#0A2540]"
            >
              Learn about Venture Studio →
            </Button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-[#627D98]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span><strong>{initialOpportunities.length}</strong> Active Postings</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#635BFF]" />
              <span>Mutual Confidentiality & NDA Standard</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#FF7043]" />
              <span>Zero Placement / Listing Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Marketplace Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Marketplace View Toggle: Startup Openings vs Talent Directory */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#E6E8EB]">
          <div className="inline-flex p-1 bg-[#F1F5F9] rounded-2xl border border-[#E2E8F0] shadow-2xs">
            <button
              onClick={() => setActiveTab("opportunities")}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all",
                activeTab === "opportunities"
                  ? "bg-white text-[#0A2540] shadow-sm"
                  : "text-[#627D98] hover:text-[#0A2540]"
              )}
            >
              <Briefcase className="h-4 w-4 text-[#635BFF]" />
              <span>Startup Openings & Requirements</span>
              <span className="px-2 py-0.5 rounded-full bg-[#635BFF]/10 text-[#635BFF] text-[11px] font-mono">
                {initialOpportunities.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab("talent")}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all",
                activeTab === "talent"
                  ? "bg-white text-[#0A2540] shadow-sm"
                  : "text-[#627D98] hover:text-[#0A2540]"
              )}
            >
              <Users className="h-4 w-4 text-[#00A389]" />
              <span>Talent & Operator Directory</span>
              <span className="px-2 py-0.5 rounded-full bg-[#00A389]/10 text-[#00A389] text-[11px] font-mono">
                {initialTalentProfiles.length}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              href="/network/post"
              size="sm"
              variant="secondary"
              className="text-xs font-semibold"
              rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
            >
              Post Requirement
            </Button>
            <Button
              onClick={() => setIsTalentModalOpen(true)}
              size="sm"
              variant="primary"
              className="text-xs font-semibold"
            >
              Register Profile
            </Button>
          </div>
        </div>

        {/* 60-Day Auto-Expiry Policy Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 px-4 py-3 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] text-xs font-mono text-[#065F46] shadow-2xs">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#059669] shrink-0" />
            <span>
              <strong>60-Day Active Window:</strong> All startup listings automatically expire & get deleted after 60 days to keep founder pipelines 100% active and responsive.
            </span>
          </div>
          <span className="text-[11px] font-sans font-bold text-[#059669] bg-white px-2.5 py-1 rounded-md border border-[#A7F3D0] shrink-0 self-start sm:self-auto">
            Zero Stale Postings
          </span>
        </div>

        {/* Search & Multi-Facet Filters */}
        <div className="space-y-4 bg-white p-5 rounded-2xl border border-[#E6E8EB] shadow-xs">
          {/* Row 1: Search and Custom Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-4 relative flex items-center">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#829AB1] pointer-events-none" />
              <input
                type="text"
                placeholder={
                  activeTab === "opportunities"
                    ? "Search roles, tech skills, keywords..."
                    : "Search talent, skills, ex-companies..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3.5 h-11 text-xs sm:text-sm bg-white border border-[#CBD5E1] rounded-xl text-[#0A2540] placeholder-[#829AB1] focus:outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/15 transition-all shadow-xs"
              />
            </div>

            {/* Custom Location Dropdown */}
            <div className="md:col-span-3 relative flex items-center">
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

            {/* Custom Role Level Dropdown */}
            <div className="md:col-span-3 relative flex items-center">
              <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#00A389] pointer-events-none" />
              <select
                value={selectedRoleType}
                onChange={(e) => setSelectedRoleType(e.target.value)}
                className="w-full appearance-none pl-10 pr-8 h-11 rounded-xl bg-white border border-[#CBD5E1] text-xs sm:text-sm font-medium text-[#0A2540] focus:outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/15 transition-all shadow-xs cursor-pointer"
              >
                <option value="all">All Role Levels</option>
                <option value="Co-Founder">Co-Founder (Shared Equity)</option>
                <option value="Founding Lead">Founding Core Lead</option>
                <option value="Head of Department">Head of Department</option>
                <option value="Fractional CXO">Fractional CXO / Advisor</option>
                <option value="Specialist & Operator">Specialist & Operator</option>
                <option value="Other">Other</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#829AB1] pointer-events-none" />
            </div>

            {/* Studio Backed Toggle / Reset */}
            <div className="md:col-span-2 flex items-center gap-2">
              {activeTab === "opportunities" ? (
                <button
                  onClick={() => setStudioOnly(!studioOnly)}
                  className={cn(
                    "flex-1 h-11 px-3.5 rounded-xl text-xs font-semibold border transition-all inline-flex items-center justify-center gap-1.5 shadow-xs",
                    studioOnly
                      ? "bg-[#635BFF] text-white border-[#635BFF]"
                      : "bg-[#F8FAFC] text-[#425466] border-[#CBD5E1] hover:bg-white hover:text-[#0A2540]"
                  )}
                >
                  <Sparkles className={cn("h-3.5 w-3.5", studioOnly ? "text-white" : "text-[#635BFF]")} />
                  <span className="truncate">Studio Only</span>
                </button>
              ) : null}

              {(selectedRole !== "all" ||
                selectedLocation !== "all" ||
                selectedRoleType !== "all" ||
                studioOnly ||
                searchQuery) && (
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

          {/* Row 2: Functional Role Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 no-scrollbar border-t border-[#F1F4F8]">
            {roleFilters.map((rf) => {
              const isSelected = selectedRole === rf.value;
              return (
                <button
                  key={rf.value}
                  onClick={() => setSelectedRole(rf.value)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap border shrink-0",
                    isSelected
                      ? "bg-[#0A2540] text-white border-[#0A2540] shadow-2xs"
                      : "bg-[#F8FAFC] text-[#425466] border-[#E6E8EB] hover:text-[#0A2540] hover:bg-white hover:border-[#CBD5E1]"
                  )}
                >
                  {rf.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Content Display */}
        {activeTab === "opportunities" ? (
          /* TAB 1: OPPORTUNITIES DIRECTORY */
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs font-mono text-[#627D98]">
                Showing <strong className="text-[#0A2540]">{filteredOpportunities.length}</strong> active founder postings
              </div>
            </div>

            {filteredOpportunities.length === 0 ? (
              <div className="text-center py-16 bg-[#F8FAFC] rounded-3xl border border-[#E6E8EB] my-6 space-y-3">
                <Users className="h-12 w-12 text-[#829AB1] mx-auto opacity-50" />
                <h3 className="text-lg font-bold text-[#0A2540]">No matching opportunities found</h3>
                <p className="text-xs text-[#425466] max-w-sm mx-auto">
                  Try clearing your search query or selecting &quot;All Roles&quot; to see available opportunities.
                </p>
                <Button onClick={resetFilters} variant="secondary" size="sm">
                  Reset All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOpportunities.map((opp) => (
                  <div
                    key={opp.id}
                    className="rounded-2xl bg-white border border-[#E6E8EB] p-6 flex flex-col justify-between hover:border-[#635BFF]/50 hover:shadow-lg transition-all duration-300 relative group shadow-xs"
                  >
                    <div className="space-y-3.5">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <Badge variant="indigo" size="sm">
                            {opp.roleType || "Co-Founder"}
                          </Badge>
                          <span className="px-2 py-0.5 rounded-md bg-[#F1F5F9] text-[#475569] text-[10px] font-semibold">
                            {opp.sector}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {opp.studioBacked && (
                            <span className="px-2 py-0.5 rounded-full bg-[#00D4B2]/15 text-[#007A66] text-[10px] font-mono font-bold flex items-center gap-1">
                              <Sparkles className="h-2.5 w-2.5" /> Studio Backed
                            </span>
                          )}
                          <span className="text-[10px] font-mono text-[#635BFF] font-bold flex items-center gap-1 bg-[#F0F0FF] px-2 py-0.5 rounded-md border border-[#E0E0FF]" title="Auto-deletes after 60 days">
                            <Clock className="h-2.5 w-2.5" /> {opp.expiresInDays}d left
                          </span>
                        </div>
                      </div>

                      {/* Title & Role */}
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#0A2540] group-hover:text-[#635BFF] transition-colors leading-snug">
                          {opp.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1.5 text-xs text-[#627D98] font-medium">
                          <span className="text-[#0A2540] font-semibold">{opp.role}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-[#829AB1]" /> {opp.location}
                          </span>
                        </div>
                      </div>

                      {/* Founder Background Capsule */}
                      <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] text-xs space-y-1">
                        <div className="text-[#829AB1] font-mono uppercase text-[9px] font-bold tracking-wider">
                          FOUNDER PEDIGREE
                        </div>
                        <div className="text-[#0A2540] font-bold text-xs">{opp.founderBackground.headline}</div>
                        <div className="text-[#627D98] text-[11px] leading-relaxed">
                          {opp.founderBackground.domainYears}+ years deep domain expertise
                        </div>
                      </div>

                      {/* Problem Thesis Summary */}
                      <p className="text-xs text-[#425466] leading-relaxed line-clamp-2">
                        {opp.ventureThesis}
                      </p>

                      {/* Skills / Tech Tags */}
                      {opp.skills && opp.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {opp.skills.slice(0, 4).map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded-md bg-[#F0F0FF] text-[#635BFF] text-[10px] font-mono font-medium border border-[#E0E0FF]"
                            >
                              {skill}
                            </span>
                          ))}
                          {opp.skills.length > 4 && (
                            <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#829AB1]">
                              +{opp.skills.length - 4} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 mt-4 border-t border-[#E6E8EB] space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <div>
                          <span className="text-[#829AB1] text-[9px] block uppercase font-bold">EQUITY OFFER</span>
                          <span className="text-[#059669] font-bold text-sm">{opp.equityRange}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[#829AB1] text-[9px] block uppercase font-bold">COMPENSATION</span>
                          <span className="text-[#0A2540] font-medium text-xs truncate max-w-[140px] block">
                            {opp.stipendOrSalary || "Equity Only"}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          href={`/network/${opp.id}`}
                          variant="secondary"
                          size="sm"
                          className="w-full text-xs font-semibold justify-center"
                        >
                          View Details
                        </Button>
                        <Button
                          onClick={() => handleApplyClick(opp)}
                          variant="primary"
                          size="sm"
                          className="w-full text-xs font-semibold justify-center shadow-xs"
                          rightIcon={<Send className="h-3 w-3" />}
                        >
                          Apply / Express
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* TAB 2: TALENT & OPERATOR DIRECTORY */
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs font-mono text-[#627D98]">
                Showing <strong className="text-[#0A2540]">{filteredTalent.length}</strong> seasoned operators seeking venture partnerships
              </div>
            </div>

            {filteredTalent.length === 0 ? (
              <div className="text-center py-16 bg-[#F8FAFC] rounded-3xl border border-[#E6E8EB] my-6 space-y-3">
                <Users className="h-12 w-12 text-[#829AB1] mx-auto opacity-50" />
                <h3 className="text-lg font-bold text-[#0A2540]">No matching talent profiles found</h3>
                <p className="text-xs text-[#425466] max-w-sm mx-auto">
                  Try clearing your filters or query to explore all available profiles.
                </p>
                <Button onClick={resetFilters} variant="secondary" size="sm">
                  Reset All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTalent.map((tal) => (
                  <div
                    key={tal.id}
                    className="rounded-2xl bg-white border border-[#E6E8EB] p-6 flex flex-col justify-between hover:border-[#00A389]/50 hover:shadow-lg transition-all duration-300 relative group shadow-xs"
                  >
                    <div className="space-y-3.5">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <Badge variant="cyan" size="sm">
                          {tal.badge || "Verified Talent"}
                        </Badge>
                        <span className="text-[11px] font-mono text-[#059669] font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" /> Available
                        </span>
                      </div>

                      {/* Name & Headline */}
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-base sm:text-lg font-bold text-[#0A2540] group-hover:text-[#00A389] transition-colors">
                            {tal.name}
                          </h3>
                          <span className="text-xs font-mono text-[#627D98]">{tal.yearsOfExperience}+ Yrs Exp</span>
                        </div>
                        <p className="text-xs font-semibold text-[#635BFF] mt-0.5">{tal.title}</p>
                        <div className="flex items-center gap-1.5 mt-1 text-xs text-[#829AB1]">
                          <MapPin className="h-3 w-3" /> {tal.location}
                        </div>
                      </div>

                      {/* Ex-Companies Cloud */}
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] font-mono uppercase text-[#829AB1] font-bold">Past Track:</span>
                        {tal.exCompanies.map((comp) => (
                          <span
                            key={comp}
                            className="px-2 py-0.5 rounded-md bg-[#F1F5F9] text-[#0A2540] text-[10px] font-semibold border border-[#E2E8F0]"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>

                      {/* Bio */}
                      <p className="text-xs text-[#425466] leading-relaxed line-clamp-3">
                        {tal.bio}
                      </p>

                      {/* Skills Cloud */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {tal.skills.slice(0, 5).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded-md bg-[#E6FFFA] text-[#007A66] text-[10px] font-mono font-medium border border-[#B2F5EA]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Terms & Intro Request */}
                    <div className="pt-4 mt-4 border-t border-[#E6E8EB] space-y-3">
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E6E8EB]">
                        <div>
                          <span className="text-[#829AB1] text-[9px] block uppercase font-bold">ROLE TARGET</span>
                          <span className="text-[#0A2540] font-bold text-xs truncate block">{tal.targetRole}</span>
                        </div>
                        <div>
                          <span className="text-[#829AB1] text-[9px] block uppercase font-bold">EQUITY EXPECTATION</span>
                          <span className="text-[#059669] font-bold text-xs">{tal.targetEquity}</span>
                        </div>
                      </div>

                      <Button
                        onClick={() => setIsTalentModalOpen(true)}
                        variant="primary"
                        size="sm"
                        className="w-full text-xs font-semibold justify-center shadow-xs bg-[#00A389] hover:bg-[#008770] border-[#00A389]"
                        rightIcon={<ArrowRight className="h-3 w-3" />}
                      >
                        Request Introduction
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
          {/* Card 1: For Founders */}
          <div className="p-8 rounded-3xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-4 relative overflow-hidden shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-[#F0F0FF] text-[#635BFF] flex items-center justify-center border border-[#E0E0FF]">
              <Briefcase className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <Badge variant="indigo" size="sm">For Founders & Builders</Badge>
              <h3 className="text-2xl font-extrabold text-[#0A2540]">Post Your Leadership Requirement</h3>
              <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                Need a Technical Co-Founder (CTO), Supply Chain Lead, or GTM Sales Partner? We vet candidates and curate confidential introductions for aligned equity.
              </p>
            </div>
            <div className="pt-2">
              <Button href="/network/post" variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Post Requirement (Free)
              </Button>
            </div>
          </div>

          {/* Card 2: For Talent / Operators */}
          <div className="p-8 rounded-3xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-4 relative overflow-hidden shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-[#E6FFFA] text-[#00A389] flex items-center justify-center border border-[#B2F5EA]">
              <Users className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <Badge variant="cyan" size="sm">For Operators & Specialists</Badge>
              <h3 className="text-2xl font-extrabold text-[#0A2540]">Join the 1008 Talent & Partner Pool</h3>
              <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                Want to work for a high-conviction startup, build a venture from scratch, or provide fractional CXO expertise for shared equity? Register your profile confidentially.
              </p>
            </div>
            <div className="pt-2">
              <Button onClick={() => setIsTalentModalOpen(true)} variant="secondary" size="md" rightIcon={<UserCheck className="h-4 w-4" />}>
                Register in Talent Pool
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Modals */}
      <ExpressInterestModal
        opportunity={selectedOppForApply}
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

      <JoinTalentModal
        isOpen={isTalentModalOpen}
        onClose={() => setIsTalentModalOpen(false)}
      />
    </div>
  );
}
