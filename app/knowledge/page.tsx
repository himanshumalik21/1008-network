"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { initialKnowledgeResources } from "@/data/knowledgeResources";
import { ResourceCategory } from "@/lib/types";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Search,
  Clock,
  ArrowRight,
  FileText,
  Video,
  X,
  Sparkles,
  Tag,
  Filter,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  LayoutGrid,
} from "lucide-react";

export default function KnowledgePage() {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | "all">("all");
  const [selectedTag, setSelectedTag] = useState<string | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState<number | "all">(6);
  const [deviceAutoCalculated, setDeviceAutoCalculated] = useState(true);

  // Responsive device-based itemsPerPage detection
  useEffect(() => {
    const handleResize = () => {
      // Only auto-update if the user hasn't manually overridden the items per page
      if (!deviceAutoCalculated) return;

      const width = typeof window !== "undefined" ? window.innerWidth : 1200;
      if (width < 640) {
        // Mobile: 3 playbooks per page for clean thumb-scrolling
        setItemsPerPage(3);
      } else if (width < 1024) {
        // Tablet / Small Laptop: 4 playbooks (2x2 grid)
        setItemsPerPage(4);
      } else {
        // Desktop / Ultrawide: 6 playbooks (3x2 grid)
        setItemsPerPage(6);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("orientationchange", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [deviceAutoCalculated]);

  const categories: { label: string; value: ResourceCategory | "all"; icon: any; count: number }[] = [
    {
      label: "All Resources",
      value: "all",
      icon: BookOpen,
      count: initialKnowledgeResources.length,
    },
    {
      label: "Operational Playbooks",
      value: "playbook",
      icon: FileText,
      count: initialKnowledgeResources.filter((r) => r.category === "playbook").length,
    },
    {
      label: "Founder Masterclasses",
      value: "masterclass",
      icon: Video,
      count: initialKnowledgeResources.filter((r) => r.category === "masterclass").length,
    },
  ];

  // Extract all unique sector tags
  const allTags = useMemo(
    () => Array.from(new Set(initialKnowledgeResources.flatMap((r) => r.sectorTags))),
    []
  );

  const filteredResources = useMemo(() => {
    return initialKnowledgeResources.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchesTag = selectedTag === "all" || item.sectorTags.includes(selectedTag);
      const matchesSearch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sectorTags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [selectedCategory, selectedTag, searchQuery]);

  // Reset to page 1 whenever search, category, tag, or page-size changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedTag, searchQuery, itemsPerPage]);

  const effectivePageSize = itemsPerPage === "all" ? filteredResources.length || 1 : itemsPerPage;
  const totalPages = Math.max(1, Math.ceil(filteredResources.length / effectivePageSize));
  const validPage = Math.min(Math.max(1, currentPage), totalPages);

  const startIndex = (validPage - 1) * effectivePageSize;
  const endIndex = itemsPerPage === "all"
    ? filteredResources.length
    : Math.min(startIndex + effectivePageSize, filteredResources.length);

  const paginatedResources = useMemo(() => {
    if (itemsPerPage === "all") return filteredResources;
    return filteredResources.slice(startIndex, endIndex);
  }, [filteredResources, startIndex, endIndex, itemsPerPage]);

  const handlePageChange = (newPage: number) => {
    const targetPage = Math.max(1, Math.min(newPage, totalPages));
    setCurrentPage(targetPage);
    const gridElem = document.getElementById("playbooks-grid-start");
    if (gridElem) {
      gridElem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCustomPageSize = (size: number | "all") => {
    setDeviceAutoCalculated(false);
    setItemsPerPage(size);
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedTag("all");
    setSearchQuery("");
  };

  return (
    <div className="pt-28 pb-20 bg-[#FDFDFE] min-h-screen">
      {/* Knowledge Hub Header */}
      <section className="relative py-14 sm:py-16 border-b border-[#E6E8EB] bg-[#F6F9FC]">
        {/* Background Subtle Boxes & Ambient Motion */}
        <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-[#FF7043]/08 via-[#635BFF]/06 to-transparent blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <Badge variant="amber" size="md">
                The 1008 Playbook
              </Badge>
              <span className="text-xs font-mono text-[#627D98]">Practical Frameworks for Founders</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
              Practical Playbooks.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF7043] via-[#635BFF] to-[#00D4B2]">
                Frameworks for turning ideas into operating businesses.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
              Practical guides on cash-flow architecture, working capital credit, co-founder equity agreements, avoiding agency drain, and building enduring enterprises in India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Filter & Search Area */}
      <div id="playbooks-grid-start" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 scroll-mt-28">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A2540] tracking-tight">
              All Playbooks &amp; Intelligence
            </h2>
            <p className="text-xs sm:text-sm text-[#627D98]">
              Tactical execution frameworks, cash-flow models, and founder field manuals
            </p>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-xs font-mono font-medium text-[#635BFF] bg-[#F0F0FF] px-2.5 py-1 rounded-md border border-[#E0E0FF]">
              {filteredResources.length} {filteredResources.length === 1 ? "Guide" : "Guides"} Available
            </span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {/* Top Bar: Category Tabs & Search Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.value;
                return (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={cn(
                      "px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 border shadow-2xs cursor-pointer",
                      isSelected
                        ? "bg-[#0A2540] border-[#0A2540] text-white shadow-xs"
                        : "bg-white border-[#E6E8EB] text-[#425466] hover:text-[#0A2540] hover:border-[#CBD5E1]"
                    )}
                  >
                    <Icon className={cn("h-3.5 w-3.5", isSelected ? "text-white" : "text-[#635BFF]")} />
                    <span>{cat.label}</span>
                    <span
                      className={cn(
                        "text-[10px] font-mono px-1.5 py-0.2 rounded-full",
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-[#F1F4F8] text-[#627D98]"
                      )}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#8898AA] pointer-events-none" />
              <input
                type="text"
                placeholder="Search playbooks, topics & keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-white border border-[#E6E8EB] text-xs text-[#0A2540] placeholder:text-[#8898AA] focus:outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/10 shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8898AA] hover:text-[#0A2540]"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Interactive Topic / Sector Tag Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar overflow-touch">
            <span className="text-[11px] font-mono font-semibold text-[#829AB1] uppercase flex items-center gap-1 shrink-0">
              <Tag className="h-3 w-3" /> Topics:
            </span>
            <button
              onClick={() => setSelectedTag("all")}
              className={cn(
                "px-2.5 py-1 rounded-lg text-xs font-medium transition-all shrink-0 border cursor-pointer",
                selectedTag === "all"
                  ? "bg-[#635BFF] text-white border-[#635BFF]"
                  : "bg-white border-[#E6E8EB] text-[#425466] hover:text-[#0A2540] hover:border-[#CBD5E1]"
              )}
            >
              All Topics
            </button>
            {allTags.map((tag) => {
              const isSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(isSelected ? "all" : tag)}
                  className={cn(
                    "px-2.5 py-1 rounded-lg text-xs font-medium transition-all shrink-0 border cursor-pointer",
                    isSelected
                      ? "bg-[#635BFF] text-white border-[#635BFF]"
                      : "bg-white border-[#E6E8EB] text-[#425466] hover:text-[#0A2540] hover:border-[#CBD5E1]"
                  )}
                >
                  {tag}
                </button>
              );
            })}

            {(selectedTag !== "all" || selectedCategory !== "all" || searchQuery !== "") && (
              <button
                onClick={clearFilters}
                className="text-xs font-mono text-[#D94814] hover:underline flex items-center gap-1 shrink-0 ml-2"
              >
                <X className="h-3 w-3" /> Reset
              </button>
            )}
          </div>
        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="space-y-8">
            {/* Articles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedResources.map((item) => {
                const isMasterclass = item.category === "masterclass";
                return (
                  <Link
                    key={item.slug}
                    href={`/knowledge/${item.slug}`}
                    className="rounded-2xl bg-white border border-[#E6E8EB] p-6 flex flex-col justify-between hover:border-[#635BFF] hover:shadow-md transition-all duration-300 group shadow-xs relative overflow-hidden"
                  >
                    {/* Top indicator accent line on hover */}
                    <div
                      className={cn(
                        "absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity",
                        isMasterclass ? "bg-[#FF7043]" : "bg-[#635BFF]"
                      )}
                    />

                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <Badge
                          variant={isMasterclass ? "amber" : "indigo"}
                          size="sm"
                          icon={isMasterclass ? <Video className="h-3 w-3" /> : <FileText className="h-3 w-3" />}
                        >
                          {isMasterclass ? "Masterclass" : "Playbook"}
                        </Badge>
                        <span className="text-[11px] text-[#627D98] flex items-center gap-1 font-medium">
                          <Clock className="h-3 w-3" /> {item.readOrWatchTime}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#0A2540] mb-2 group-hover:text-[#635BFF] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs text-[#425466] leading-relaxed line-clamp-3 mb-4 font-normal">
                        {item.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.sectorTags.map((tag, idx) => (
                          <span
                            key={idx}
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedTag(tag);
                            }}
                            className={cn(
                              "text-[10px] px-2 py-0.5 rounded border font-medium cursor-pointer transition-colors",
                              selectedTag === tag
                                ? "bg-[#635BFF] text-white border-[#635BFF]"
                                : "bg-[#F6F9FC] text-[#627D98] border-[#E6E8EB] hover:bg-[#E0E7FF] hover:text-[#635BFF]"
                            )}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E6E8EB] flex items-center justify-between text-xs text-[#627D98]">
                      <span className="text-[11px] truncate max-w-[180px] font-medium">
                        {item.authorOrSource}
                      </span>
                      <span className="text-[#0A2540] group-hover:text-[#635BFF] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                        Read <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Pagination & Device Display Controls */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E6E8EB] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Status Info */}
              <div className="flex items-center gap-2 text-xs text-[#425466] font-medium">
                <span>
                  Showing <strong className="text-[#0A2540]">{filteredResources.length === 0 ? 0 : startIndex + 1}–{endIndex}</strong> of <strong className="text-[#0A2540]">{filteredResources.length}</strong> playbooks
                </span>
                {totalPages > 1 && (
                  <span className="text-[11px] font-mono text-[#627D98] bg-[#F6F9FC] px-2 py-0.5 rounded border border-[#E6E8EB]">
                    Page {validPage} of {totalPages}
                  </span>
                )}
              </div>

              {/* Page Controls & Navigation */}
              <div className="flex items-center gap-1.5 flex-wrap justify-center">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(validPage - 1)}
                  disabled={validPage <= 1}
                  aria-label="Previous page"
                  className={cn(
                    "px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 border transition-all cursor-pointer",
                    validPage <= 1
                      ? "bg-[#F8FAFC] text-[#CBD5E1] border-[#E2E8F0] cursor-not-allowed"
                      : "bg-white text-[#0A2540] border-[#E6E8EB] hover:border-[#635BFF] hover:text-[#635BFF] shadow-2xs"
                  )}
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Prev</span>
                </button>

                {/* Page Number Buttons */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const isCurrent = pageNum === validPage;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      aria-current={isCurrent ? "page" : undefined}
                      className={cn(
                        "w-8 h-8 rounded-xl text-xs font-semibold transition-all border cursor-pointer flex items-center justify-center",
                        isCurrent
                          ? "bg-[#0A2540] text-white border-[#0A2540] shadow-xs"
                          : "bg-white text-[#425466] border-[#E6E8EB] hover:text-[#0A2540] hover:border-[#CBD5E1]"
                      )}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(validPage + 1)}
                  disabled={validPage >= totalPages}
                  aria-label="Next page"
                  className={cn(
                    "px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 border transition-all cursor-pointer",
                    validPage >= totalPages
                      ? "bg-[#F8FAFC] text-[#CBD5E1] border-[#E2E8F0] cursor-not-allowed"
                      : "bg-white text-[#0A2540] border-[#E6E8EB] hover:border-[#635BFF] hover:text-[#635BFF] shadow-2xs"
                  )}
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Viewport Density Quick Switcher */}
              <div className="flex items-center gap-1.5 text-xs text-[#627D98] border-t sm:border-t-0 pt-2 sm:pt-0 w-full sm:w-auto justify-between sm:justify-start">
                <span className="text-[11px] font-mono flex items-center gap-1">
                  <LayoutGrid className="h-3 w-3" /> Per page:
                </span>
                <div className="flex items-center gap-1 bg-[#F6F9FC] p-0.5 rounded-lg border border-[#E6E8EB]">
                  {[
                    { label: "3", value: 3 },
                    { label: "4", value: 4 },
                    { label: "6", value: 6 },
                    { label: "All", value: "all" as const },
                  ].map((option) => {
                    const isSelected = itemsPerPage === option.value;
                    return (
                      <button
                        key={option.label}
                        onClick={() => handleCustomPageSize(option.value)}
                        className={cn(
                          "px-2 py-0.5 rounded text-[11px] font-mono font-semibold transition-all cursor-pointer",
                          isSelected
                            ? "bg-white text-[#635BFF] shadow-2xs border border-[#E0E0FF]"
                            : "text-[#64748B] hover:text-[#0A2540]"
                        )}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-16 text-center rounded-2xl bg-white border border-[#E6E8EB] p-8 shadow-xs max-w-xl mx-auto space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#F0F0FF] text-[#635BFF] border border-[#E0E0FF] flex items-center justify-center mx-auto mb-2">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-[#0A2540]">
              No Matching Playbooks Found
            </h3>
            <p className="text-xs text-[#425466] max-w-sm mx-auto leading-relaxed">
              No articles match the selected filters or search terms. Try searching for a different keyword or resetting filters.
            </p>
            <div className="pt-2">
              <Button onClick={clearFilters} variant="secondary" size="sm">
                Clear All Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
