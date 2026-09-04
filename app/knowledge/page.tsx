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
      <section className="relative py-14 border-b border-white/[0.06] bg-[#07080A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <Badge variant="amber" size="md">
                1008 Knowledge Hub
              </Badge>
              <span className="text-xs font-mono text-muted">Venture Architecture & Media</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              Operational Playbooks. Zero Theory.
            </h1>

            <p className="text-sm sm:text-base text-muted leading-relaxed">
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
                    "px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 border",
                    isSelected
                      ? "bg-amber-500/10 border-amber-500/30 text-amber-300 font-semibold"
                      : "bg-surface-200/50 border-white/[0.06] text-muted hover:text-white hover:border-white/[0.15]"
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
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted pointer-events-none" />
            <input
              type="text"
              placeholder="Search playbooks & topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-surface-200/80 border border-white/[0.1] text-xs text-foreground placeholder:text-muted/60 focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((item) => (
            <Link
              key={item.slug}
              href={`/knowledge/${item.slug}`}
              className="rounded-2xl bg-surface-100/70 border border-white/[0.08] p-6 flex flex-col justify-between hover:border-amber-500/30 hover:bg-surface-100 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="slate" size="sm">
                    {item.category.replace("_", " ").toUpperCase()}
                  </Badge>
                  <span className="text-[11px] font-mono text-muted flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {item.readOrWatchTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-muted leading-relaxed line-clamp-3 mb-4">
                  {item.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.sectorTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-muted border border-white/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-muted">
                <span className="font-mono text-[11px] truncate max-w-[180px]">
                  {item.authorOrSource}
                </span>
                <span className="text-white group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
