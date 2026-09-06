"use client";

import React, { useState } from "react";
import Link from "next/link";
import { initialOpportunities } from "@/data/opportunities";
import { Opportunity } from "@/lib/types";
import { OpportunityCard } from "@/components/network/OpportunityCard";
import { NetworkFilters } from "@/components/network/NetworkFilters";
import { ConnectModal } from "@/components/network/ConnectModal";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { Users, Plus, Search } from "lucide-react";

export default function NetworkPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All Roles");
  const [selectedSector, setSelectedSector] = useState("All Sectors");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [showStudioOnly, setShowStudioOnly] = useState(false);
  const [selectedOpp, setSelectedOpp] = useState<Opportunity | null>(null);

  const filteredOpportunities = initialOpportunities.filter((opp) => {
    const matchesSearch =
      searchQuery === "" ||
      opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.ventureThesis.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.founderBackground.headline.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole = selectedRole === "All Roles" || opp.role === selectedRole;
    const matchesSector = selectedSector === "All Sectors" || opp.sector === selectedSector;
    const matchesLocation = selectedLocation === "All Locations" || opp.location === selectedLocation;
    const matchesStudio = !showStudioOnly || opp.studioBacked;

    return matchesSearch && matchesRole && matchesSector && matchesLocation && matchesStudio;
  });

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedRole("All Roles");
    setSelectedSector("All Sectors");
    setSelectedLocation("All Locations");
    setShowStudioOnly(false);
  };

  return (
    <div className="pt-28 pb-20">
      {/* Network Header */}
      <section className="relative py-14 border-b border-border bg-surface-100/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2">
                <Badge variant="cyan" size="md" pulse>
                  1008 Partner Network
                </Badge>
                <span className="text-xs font-mono text-muted-foreground">60-Day Active Matchmaking</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground font-sans">
                Build something with someone.
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Connect with domain originators, technical CTOs, and GTM leaders building high-upside ventures across India.
                Listings auto-expire after 60 days to guarantee responsive communication.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Button href="/network/post" variant="primary" size="md" leftIcon={<Plus className="h-4 w-4" />}>
                Post 60-Day Requirement
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Search by keywords, sector, or thesis..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-100 border border-border text-xs sm:text-sm text-foreground placeholder:text-muted-dim focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
          </div>
        </div>

        {/* Multi-facet Filters */}
        <NetworkFilters
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          selectedSector={selectedSector}
          setSelectedSector={setSelectedSector}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          showStudioOnly={showStudioOnly}
          setShowStudioOnly={setShowStudioOnly}
          onReset={handleResetFilters}
        />

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs font-mono text-muted-foreground">
          <span>
            Showing <strong className="text-foreground">{filteredOpportunities.length}</strong> active opportunities
          </span>
          <span>All listings verified under 60-day lifecycle</span>
        </div>

        {/* Opportunity Cards Grid */}
        {filteredOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((opp) => (
              <OpportunityCard
                key={opp.id}
                opportunity={opp}
                onConnect={(o) => setSelectedOpp(o)}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-surface-50 border border-border space-y-4">
            <Users className="h-8 w-8 text-muted-foreground mx-auto" />
            <h3 className="text-lg font-bold text-foreground">No active listings match your filter criteria</h3>
            <p className="text-xs text-muted-foreground max-w-md mx-auto">
              Try adjusting your role, sector, or location filters, or post your own custom opportunity on the 1008 Network.
            </p>
            <Button variant="secondary" size="sm" onClick={handleResetFilters}>
              Reset Filters
            </Button>
          </div>
        )}
      </div>

      {/* Connection Modal */}
      <ConnectModal
        opportunity={selectedOpp}
        isOpen={Boolean(selectedOpp)}
        onClose={() => setSelectedOpp(null)}
      />
    </div>
  );
}
