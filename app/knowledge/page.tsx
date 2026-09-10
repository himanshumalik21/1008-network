"use client";

import React, { useState } from "react";
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
  Radio,
  BookmarkCheck,
} from "lucide-react";

export default function KnowledgePage() {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: { label: string; value: ResourceCategory | "all"; icon: any }[] = [
    { label: "All Resources", value: "all", icon: BookOpen },
    { label: "Operational Playbooks", value: "playbook", icon: FileText },
    { label: "Book Summaries", value: "book_summary", icon: BookmarkCheck },
    { label: "Masterclasses", value: "masterclass", icon: Video },
    { label: "Podcasts & Audio", value: "podcast", icon: Radio },
  ];

  const filteredResources = initialKnowledgeResources.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sectorTags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20">
      {/* Knowledge Hub Header */}
      <section className="relative py-14 border-b border-border bg-surface-100/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <Badge variant="amber" size="md">
                1008 Network Knowledge Hub
              </Badge>
              <span className="text-xs font-mono text-muted-foreground">Venture Architecture & Media</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground font-sans">
              Operational Playbooks. Zero Theory.
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Tactical guides on cap table mathematics, enterprise sales cycles in Bharat, ESOP structuring under Indian law, and unit economics modeling.
            </p>
          </div>
        </div>
      </section>

      {/* Main Filter & Search Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={cn(
                    "px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 border shadow-xs",
                    isSelected
                      ? "bg-amber-500/10 border-amber-500/40 text-amber-600 dark:text-amber-300 font-semibold"
                      : "bg-surface-100 border-border text-muted-foreground hover:text-foreground hover:border-border-hover"
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Search playbooks & topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-surface-100 border border-border text-xs text-foreground placeholder:text-muted-dim focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((item) => (
              <Link
                key={item.slug}
                href={`/knowledge/${item.slug}`}
                className="rounded-2xl bg-white border border-[#E6E8EB] p-6 flex flex-col justify-between hover:border-[#635BFF] hover:shadow-md transition-all duration-300 group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="slate" size="sm">
                      {item.category.replace("_", " ").toUpperCase()}
                    </Badge>
                    <span className="text-[11px] text-[#627D98] flex items-center gap-1 font-medium">
                      <Clock className="h-3 w-3" /> {item.readOrWatchTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0A2540] mb-2 group-hover:text-[#635BFF] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#425466] leading-relaxed line-clamp-3 mb-4">
                    {item.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.sectorTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#F6F9FC] text-[#627D98] border border-[#E6E8EB] font-medium"
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
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-2xl bg-white border border-[#E6E8EB] p-8 shadow-xs max-w-2xl mx-auto space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#F0F0FF] text-[#635BFF] border border-[#E0E0FF] flex items-center justify-center mx-auto mb-2">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0A2540]">
              Fresh Playbooks Coming Soon
            </h3>
            <p className="text-xs sm:text-sm text-[#425466] max-w-md mx-auto leading-relaxed">
              Our venture architecture team is releasing new operational briefs, financial templates, and execution case studies. Check back shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
