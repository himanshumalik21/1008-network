"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredCategories } from "@/data/services";
import { ArrowRight, Sparkles, Camera } from "lucide-react";
import { Badge } from "@/components/brand/Badge";

interface FiverrFeaturedCategoriesProps {
  onSelectCategory: (category: string) => void;
}

export function FiverrFeaturedCategories({
  onSelectCategory,
}: FiverrFeaturedCategoriesProps) {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#E6E8EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5">
              <Badge variant="indigo" size="sm">
                Visual Service Categories
              </Badge>
              <span className="text-[11px] font-mono text-[#64748B]">
                • Click to Filter
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight font-sans">
              Popular Business Solutions
            </h2>
            <p className="text-xs sm:text-sm text-[#425466]">
              Browse 1008 services by operational domain with clear deliverables and transparent models.
            </p>
          </div>
          <Link
            href="#services-marketplace"
            className="text-xs sm:text-sm font-semibold text-[#635BFF] hover:text-[#0A2540] inline-flex items-center gap-1 group whitespace-nowrap"
          >
            <span>View All 12 Services</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Large Visual Category Photo Cards (Fiverr Popular Services Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xs hover:shadow-lg hover:border-[#CBD5E1] transition-all cursor-pointer bg-white flex flex-col justify-between"
            >
              {/* Photo Banner with Aspect Ratio & Zoom */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#F1F5F9]">
                <Image
                  src={cat.imageUrl}
                  alt={cat.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                {/* Top Badge: Category Count */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/95 text-[#0A2540] shadow-2xs backdrop-blur-xs">
                    {cat.countLabel}
                  </span>
                </div>

                {/* User Photo Placeholder / Suggestion Hint */}
                <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1 text-[9px] font-mono text-white/90 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    <Camera className="h-3 w-3" />
                    <span>Photo Suggestion</span>
                  </span>
                </div>

                {/* Bottom Overlay Title in Card Image */}
                <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                  <h3 className="text-base font-bold leading-tight drop-shadow-sm text-white">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Card Bottom: Description & Arrow */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between bg-white">
                <p className="text-xs text-[#425466] leading-relaxed line-clamp-2">
                  {cat.subtitle}
                </p>

                <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-semibold text-[#0A2540] group-hover:text-[#635BFF] transition-colors">
                  <span>Filter Services</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
