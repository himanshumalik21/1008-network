"use client";

import React from "react";
import { RoleCategory, SectorCategory, LocationType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Filter, X } from "lucide-react";

interface NetworkFiltersProps {
  selectedRole: string;
  setSelectedRole: (role: string) => void;
  selectedSector: string;
  setSelectedSector: (sector: string) => void;
  selectedLocation: string;
  setSelectedLocation: (loc: string) => void;
  showStudioOnly: boolean;
  setShowStudioOnly: (val: boolean) => void;
  onReset: () => void;
}

export function NetworkFilters({
  selectedRole,
  setSelectedRole,
  selectedSector,
  setSelectedSector,
  selectedLocation,
  setSelectedLocation,
  showStudioOnly,
  setShowStudioOnly,
  onReset,
}: NetworkFiltersProps) {
  const roles: (RoleCategory | "All Roles")[] = [
    "All Roles",
    "Technical Co-Founder (CTO)",
    "Go-to-Market / Sales Co-Founder",
    "Operations & Supply Chain Lead",
    "Product & Design Partner",
    "Growth & Marketing Architect",
  ];

  const sectors: (SectorCategory | "All Sectors")[] = [
    "All Sectors",
    "Healthcare & HealthTech",
    "Industrial & Manufacturing",
    "D2C & Consumer Brands",
    "FinTech & Financial Infrastructure",
    "PropTech & Real Estate",
    "CleanTech & Energy",
  ];

  const locations: (LocationType | "All Locations")[] = [
    "All Locations",
    "Delhi NCR",
    "Bengaluru",
    "Mumbai",
    "Pune",
    "Hyderabad",
    "Pan-India / Remote",
  ];

  const isFiltered =
    selectedRole !== "All Roles" ||
    selectedSector !== "All Sectors" ||
    selectedLocation !== "All Locations" ||
    showStudioOnly;

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-surface-100/70 border border-white/[0.08] space-y-4 mb-8">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase text-muted">
          <Filter className="h-3.5 w-3.5 text-amber-400" />
          <span>Filter 60-Day Active Opportunities</span>
        </div>
        {isFiltered && (
          <button
            onClick={onReset}
            className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1"
          >
            <X className="h-3 w-3" /> Reset Filters
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Role Filter */}
        <div className="space-y-1 text-left">
          <label className="text-[10px] font-mono uppercase text-muted">Target Role</label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="w-full bg-surface-200/90 border border-white/[0.1] rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:border-cyan-400"
          >
            {roles.map((r) => (
              <option key={r} value={r} className="bg-[#111317]">
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Sector Filter */}
        <div className="space-y-1 text-left">
          <label className="text-[10px] font-mono uppercase text-muted">Sector / Domain</label>
          <select
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
            className="w-full bg-surface-200/90 border border-white/[0.1] rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:border-cyan-400"
          >
            {sectors.map((s) => (
              <option key={s} value={s} className="bg-[#111317]">
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div className="space-y-1 text-left">
          <label className="text-[10px] font-mono uppercase text-muted">Hub Location</label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full bg-surface-200/90 border border-white/[0.1] rounded-lg px-3 py-2 text-xs text-foreground focus:outline-none focus:border-cyan-400"
          >
            {locations.map((l) => (
              <option key={l} value={l} className="bg-[#111317]">
                {l}
              </option>
            ))}
          </select>
        </div>

        {/* Studio Backed Toggle */}
        <div className="flex items-end">
          <button
            type="button"
            onClick={() => setShowStudioOnly(!showStudioOnly)}
            className={cn(
              "w-full h-[38px] rounded-lg border text-xs font-mono flex items-center justify-center gap-2 transition-all",
              showStudioOnly
                ? "bg-amber-500/15 border-amber-500/40 text-amber-300 font-semibold"
                : "bg-surface-200/40 border-white/[0.08] text-muted hover:text-white"
            )}
          >
            <span>1008 Studio Backed Only</span>
          </button>
        </div>
      </div>
    </div>
  );
}
