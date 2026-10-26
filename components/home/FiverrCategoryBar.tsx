"use client";

import React from "react";
import {
  Users,
  Coins,
  Layers,
  Briefcase,
  BookOpen,
  Sparkles,
  LayoutGrid,
} from "lucide-react";

interface FiverrCategoryBarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CATEGORIES = [
  { id: "all", label: "All Services", icon: LayoutGrid },
  { id: "talent", label: "Co-Founders & Talent", icon: Users },
  { id: "capital", label: "Funding & Investors", icon: Coins },
  { id: "studio", label: "Outsource Operations", icon: Layers },
  { id: "gigs", label: "Project Sprints", icon: Briefcase },
  { id: "playbooks", label: "Venture Playbooks", icon: BookOpen },
];

export function FiverrCategoryBar({
  selectedCategory,
  onSelectCategory,
}: FiverrCategoryBarProps) {
  return (
    <div className="w-full bg-white border-y border-[#E6E8EB] sticky top-[65px] z-40 shadow-xs backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-2.5">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-[#0A2540] text-white shadow-xs"
                    : "text-[#425466] hover:text-[#0A2540] hover:bg-[#F6F9FC] border border-transparent hover:border-[#E6E8EB]"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isActive ? "text-[#00D4B2]" : "text-[#64748B]"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
