"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { initialOpportunities } from "@/data/opportunities";
import {
  Briefcase,
  MapPin,
  Search,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Building2,
  ArrowRight,
  UserCheck,
  Coins,
  ShieldCheck,
  X,
} from "lucide-react";

export default function StartupJobsIndiaPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [selectedRole, setSelectedRole] = useState<string>("All");
  const [onlyEquity, setOnlyEquity] = useState(false);
  const [talentModalOpen, setTalentModalOpen] = useState(false);
  const [talentSubmitted, setTalentSubmitted] = useState(false);

  // Filter options
  const locations = ["All", "Gurgaon", "Delhi NCR", "Bengaluru", "Pune", "Chennai"];
  const roles = [
    "All",
    "AI / ML & DeepTech Lead",
    "Technical Co-Founder (CTO)",
    "Go-to-Market / Sales Co-Founder",
    "Operations & Supply Chain Lead",
    "Manufacturing & Plant Setup Head",
    "Product & Design Partner",
  ];

  const filteredJobs = useMemo(() => {
    return initialOpportunities.filter((job) => {
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (job.companyName && job.companyName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (job.skills && job.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLocation =
        selectedLocation === "All" ||
        job.location === selectedLocation ||
        (selectedLocation === "Delhi NCR" && (job.location === "Delhi NCR" || job.location === "Gurgaon"));

      const matchesRole = selectedRole === "All" || job.role === selectedRole;

      const matchesEquity =
        !onlyEquity ||
        (job.equityRange &&
          !job.equityRange.toLowerCase().includes("none") &&
          !job.equityRange.toLowerCase().includes("n/a"));

      return matchesSearch && matchesLocation && matchesRole && matchesEquity;
    });
  }, [searchQuery, selectedLocation, selectedRole, onlyEquity]);

  return (
    <div className="pt-28 pb-20 bg-[#FDFDFE] min-h-screen">
      {/* 1. Hero Header */}
      <section className="relative py-12 sm:py-16 overflow-hidden border-b border-[#E6E8EB] bg-[#F6F9FC]">
        <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center">
            <span className="text-xs font-mono font-bold text-[#635BFF] bg-[#635BFF]/10 px-3 py-1 rounded-full border border-[#635BFF]/20 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              1008 Talent Collective // Verified Roles
            </span>
            <span className="text-xs font-mono font-semibold text-[#008774] bg-[#00D4B2]/10 px-2.5 py-1 rounded-full border border-[#00D4B2]/20">
              Active Gurgaon & Pan-India Openings
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] max-w-4xl mx-auto">
            Startup Jobs in Gurgaon & Pan-India:{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              Founding Roles, Leadership & Equity
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#425466] max-w-2xl mx-auto leading-relaxed">
            Discover verified openings in high-growth startups and venture studio builds. Transparent salary ranges, equity upside, and direct founder interview loops.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-[#627D98] font-mono">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#059669]" /> Verified Openings
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Coins className="h-3.5 w-3.5 text-[#635BFF]" /> Equity + Cash Compensation
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-[#008774]" /> Zero Recruitment Agency Fees
            </span>
          </div>
        </div>
      </section>

      {/* 2. Interactive Search & Filters Bar */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-[#E6E8EB] py-4 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#627D98]" />
              <input
                type="text"
                placeholder="Search by role, company (e.g. Chat360), skill, or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-[#E6E8EB] bg-[#F8FAFC] text-[#0A2540] placeholder-[#627D98] focus:outline-none focus:border-[#635BFF] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#627D98] hover:text-[#0A2540]"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Quick Action: Join Talent Collective */}
            <div className="flex items-center gap-2.5 w-full md:w-auto justify-between md:justify-end">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-[#0A2540] bg-[#F8FAFC] border border-[#E6E8EB] px-3 py-2 rounded-xl">
                <input
                  type="checkbox"
                  checked={onlyEquity}
                  onChange={(e) => setOnlyEquity(e.target.checked)}
                  className="rounded text-[#635BFF] focus:ring-0"
                />
                <span>Includes Equity / ESOPs</span>
              </label>

              <button
                onClick={() => setTalentModalOpen(true)}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#635BFF] text-white hover:bg-[#5349e0] transition-all shadow-xs flex items-center gap-1.5 shrink-0"
              >
                <UserCheck className="h-3.5 w-3.5" />
                <span>Join Talent Collective</span>
              </button>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="font-mono text-[#627D98] uppercase text-[11px] shrink-0 flex items-center gap-1 mr-1">
              <MapPin className="h-3 w-3" /> Location:
            </span>
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className={`px-3 py-1 rounded-lg transition-all shrink-0 font-medium ${
                  selectedLocation === loc
                    ? "bg-[#0A2540] text-white font-semibold"
                    : "bg-[#F1F4F8] text-[#425466] hover:bg-[#E6E8EB]"
                }`}
              >
                {loc}
              </button>
            ))}

            <span className="font-mono text-[#627D98] uppercase text-[11px] shrink-0 flex items-center gap-1 ml-3 mr-1">
              <Briefcase className="h-3 w-3" /> Role:
            </span>
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRole(r)}
                className={`px-3 py-1 rounded-lg transition-all shrink-0 font-medium ${
                  selectedRole === r
                    ? "bg-[#635BFF] text-white font-semibold"
                    : "bg-[#F1F4F8] text-[#425466] hover:bg-[#E6E8EB]"
                }`}
              >
                {r === "All" ? "All Roles" : r.split(" ")[0] + " " + (r.split(" ")[1] || "")}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Job Listings Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A2540] flex items-center gap-2">
              <span>Verified Startup Opportunities</span>
              <span className="text-xs font-mono py-0.5 px-2.5 rounded-full bg-[#E6E8EB] text-[#425466]">
                {filteredJobs.length} active roles
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#627D98] mt-0.5">
              Live roles updated weekly across Gurgaon, NCR, and high-velocity innovation clusters.
            </p>
          </div>

          <Link
            href="/network/post"
            className="hidden sm:flex items-center gap-1 text-xs font-bold text-[#635BFF] hover:underline"
          >
            <span>Are you a founder hiring? Post a role</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E6E8EB] p-8 space-y-3">
            <Briefcase className="h-10 w-10 text-[#627D98] mx-auto opacity-50" />
            <h4 className="text-base font-bold text-[#0A2540]">No matching roles found</h4>
            <p className="text-xs text-[#627D98] max-w-sm mx-auto">
              Try adjusting your search query or removing location filters to explore more opportunities.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedLocation("All");
                setSelectedRole("All");
                setOnlyEquity(false);
              }}
              className="text-xs font-bold text-[#635BFF] hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="rounded-2xl bg-white border border-[#E6E8EB] p-5 hover:border-[#635BFF]/40 hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Badge & Company */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-md bg-[#F1F4F8] text-[#0A2540] border border-[#E6E8EB] flex items-center gap-1.5">
                      <Building2 className="h-3 w-3 text-[#635BFF]" />
                      {job.companyName || "1008 Studio"}
                    </span>

                    <span
                      className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full ${
                        job.location === "Gurgaon"
                          ? "bg-[#00D4B2]/10 text-[#008774] border border-[#00D4B2]/20"
                          : "bg-[#F8FAFC] text-[#627D98] border border-[#E6E8EB]"
                      }`}
                    >
                      {job.location}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#0A2540] group-hover:text-[#635BFF] transition-colors leading-snug mb-1.5">
                    {job.title}
                  </h3>

                  <p className="text-xs text-[#425466] line-clamp-2 leading-relaxed mb-4">
                    {job.ventureThesis || job.problemStatement}
                  </p>

                  {/* Skills badges */}
                  {job.skills && job.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {job.skills.slice(0, 3).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E6E8EB] text-[#425466]"
                        >
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 3 && (
                        <span className="text-[10px] font-mono text-[#627D98] self-center">
                          +{job.skills.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom Details & CTA */}
                <div className="pt-4 border-t border-[#F1F4F8] space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] font-mono text-[#627D98] block">Compensation:</span>
                      <span className="font-bold text-[#0A2540]">
                        {job.stipendOrSalary || job.salaryRange || "Negotiable"}
                      </span>
                    </div>
                    {job.equityRange && (
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-[#627D98] block">Equity:</span>
                        <span className="font-mono font-bold text-[#059669] text-xs">
                          {job.equityRange}
                        </span>
                      </div>
                    )}
                  </div>

                  {job.applyUrl ? (
                    <a
                      href={job.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-xl bg-[#0A2540] hover:bg-[#635BFF] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <span>Apply on Partner Board</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <Link
                      href={`/network/${job.id}`}
                      className="w-full py-2 px-3 rounded-xl bg-[#635BFF] hover:bg-[#5349e0] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <span>View 1008 Role & Apply</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Talent Collective Modal */}
      {talentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl border border-[#E6E8EB] p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
            <button
              onClick={() => setTalentModalOpen(false)}
              className="absolute top-4 right-4 text-[#627D98] hover:text-[#0A2540]"
            >
              <X className="h-5 w-5" />
            </button>

            {talentSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="h-12 w-12 text-[#059669] mx-auto" />
                <h3 className="text-xl font-bold text-[#0A2540]">Profile Received!</h3>
                <p className="text-xs text-[#627D98]">
                  Our venture team reviews every profile. If there is a high-conviction match with our studio companies or partner startups, we will connect directly via WhatsApp/Email.
                </p>
                <button
                  onClick={() => {
                    setTalentModalOpen(false);
                    setTalentSubmitted(false);
                  }}
                  className="mt-4 px-5 py-2 rounded-xl bg-[#0A2540] text-white text-xs font-bold"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setTalentSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#635BFF] uppercase">
                    Direct Founder Matching
                  </span>
                  <h3 className="text-xl font-bold text-[#0A2540] mt-0.5">
                    Join the 1008 Talent Collective
                  </h3>
                  <p className="text-xs text-[#627D98]">
                    Get privately introduced to vetted founders hiring for founding engineers, CTOs, and GTM leads in Gurgaon and Pan-India.
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E6E8EB] focus:outline-none focus:border-[#635BFF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1">
                      Email & WhatsApp Number
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="vikram@domain.com | +91 98765 43210"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E6E8EB] focus:outline-none focus:border-[#635BFF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1">
                      LinkedIn / GitHub Profile URL
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://linkedin.com/in/username"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E6E8EB] focus:outline-none focus:border-[#635BFF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1">
                      Target Role & Ideal Venture
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Founding Engineer / CTO in AI, EV, or HealthTech"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E6E8EB] focus:outline-none focus:border-[#635BFF]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#635BFF] hover:bg-[#5349e0] text-white text-xs font-bold transition-all shadow-xs"
                >
                  Submit Profile to Collective
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
