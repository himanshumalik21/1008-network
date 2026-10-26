"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesData, ServiceItem } from "@/data/services";
import { Badge } from "@/components/brand/Badge";
import {
  Star,
  CheckCircle2,
  ArrowRight,
  Clock,
  Camera,
  X,
  Filter,
  Sparkles,
} from "lucide-react";

interface ServicesMarketplaceSectionProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onClearSearch: () => void;
}

export function ServicesMarketplaceSection({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onClearSearch,
}: ServicesMarketplaceSectionProps) {
  // Filter services by category and search query
  const filteredServices = servicesData.filter((service) => {
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;

    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesCategory;

    const matchesSearch =
      service.title.toLowerCase().includes(query) ||
      service.tagline.toLowerCase().includes(query) ||
      service.categoryLabel.toLowerCase().includes(query) ||
      service.deliverables.some((d) => d.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services-marketplace" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2E8F0]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2">
              <Badge variant="indigo" size="sm">
                Service Catalog & Solutions
              </Badge>
              <span className="text-xs font-mono font-semibold text-[#00A389] bg-[#E6FFFA] px-2.5 py-0.5 rounded-full border border-[#B2F5EA]">
                {servicesData.length} Turnkey Offerings
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight font-sans">
              Explore All 1008 Services & Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[#425466] max-w-2xl">
              Clear, transparent turnkey solutions. Browse co-founder matching, angel funding discovery, outsourced technology execution, and acute project sprints.
            </p>
          </div>

          {/* Quick Intake CTAs */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/network/post"
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#F1F5F9] text-[#0A2540] border border-[#CBD5E1] text-xs font-semibold shadow-2xs transition-colors"
            >
              Post Requirement
            </Link>
            <Link
              href="/studio"
              className="px-4 py-2.5 rounded-xl bg-[#635BFF] hover:bg-[#5851EA] text-white text-xs font-semibold shadow-xs transition-colors inline-flex items-center gap-1.5"
            >
              <span>Work With 1008</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Filter & Search Feedback Bar */}
        {searchQuery && (
          <div className="p-3.5 rounded-2xl bg-white border border-[#CBD5E1] flex items-center justify-between gap-3 text-xs shadow-2xs">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-[#635BFF]" />
              <span className="text-[#64748B]">Showing results for:</span>
              <span className="font-bold text-[#0A2540]">"{searchQuery}"</span>
              <span className="text-[#64748B]">({filteredServices.length} found)</span>
            </div>
            <button
              onClick={onClearSearch}
              className="inline-flex items-center gap-1 font-semibold text-[#635BFF] hover:text-[#0A2540] cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
              <span>Clear Filter</span>
            </button>
          </div>
        )}

        {/* Service Cards Grid (Fiverr Gig Card Structure with Photo Banners) */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="rounded-3xl bg-white border border-[#E2E8F0] shadow-xs hover:shadow-lg hover:border-[#CBD5E1] transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* 1. Large 16:9 Visual Photo Banner (Fiverr Gig Thumbnail) */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#E2E8F0]">
                  <Image
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Category Badge on Photo */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-2xs border ${service.categoryBg}`}
                    >
                      {service.categoryLabel}
                    </span>
                  </div>

                  {/* Rating Badge on Photo */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-full flex items-center gap-1 text-xs font-bold text-[#0A2540] shadow-2xs">
                    <Star className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                    <span>{service.rating.toFixed(1)}</span>
                    <span className="text-[#64748B] text-[10px] font-normal">
                      ({service.reviewsCount})
                    </span>
                  </div>

                  {/* Photo Replacement / Suggestion Hint (Hover tooltip) */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white/90">
                    {service.badge && (
                      <span className="text-[10px] font-mono font-semibold bg-[#635BFF] text-white px-2 py-0.5 rounded shadow-2xs">
                        {service.badge}
                      </span>
                    )}
                    <span
                      className="ml-auto inline-flex items-center gap-1 text-[10px] font-mono bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-white/90 truncate max-w-[200px]"
                      title={`Photo suggestion: ${service.photoSuggestion}`}
                    >
                      <Camera className="h-3 w-3 shrink-0" />
                      <span className="truncate">{service.photoSuggestion}</span>
                    </span>
                  </div>
                </div>

                {/* 2. Card Body: Title, Tagline, and Deliverables Checklist */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] group-hover:text-[#635BFF] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#425466] leading-relaxed line-clamp-2">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Deliverables Checklist (Fiverr Standard Package List) */}
                  <div className="pt-3 border-t border-[#F1F5F9] space-y-2">
                    <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#64748B]">
                      What's Included:
                    </div>
                    <div className="space-y-1.5">
                      {service.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-[#334155]"
                        >
                          <CheckCircle2
                            className="h-3.5 w-3.5 shrink-0 mt-0.5"
                            style={{ color: service.categoryColor }}
                          />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Card Footer: Timeline, Pricing Model & Action Button */}
                <div className="p-5 sm:p-6 bg-[#FAFCFF] border-t border-[#E2E8F0] space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#64748B] font-mono">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[#64748B]" />
                      <span>{service.deliveryTime}</span>
                    </div>
                    <span className="font-semibold text-[#0A2540] bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">
                      {service.pricingModel}
                    </span>
                  </div>

                  <Link
                    href={service.actionHref}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-white font-semibold text-xs sm:text-sm shadow-xs transition-all group-hover:shadow-sm"
                    style={{ backgroundColor: service.categoryColor }}
                  >
                    <span>{service.actionLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search Results State */
          <div className="p-12 rounded-3xl bg-white border border-[#CBD5E1] text-center space-y-4 max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-[#F1F5F9] text-[#64748B] mx-auto flex items-center justify-center">
              <Filter className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0A2540]">
              No services match "{searchQuery}"
            </h3>
            <p className="text-xs sm:text-sm text-[#425466]">
              Try searching for general keywords like "CTO", "ERP", "Funding", "Sales", or reset your filters.
            </p>
            <button
              onClick={onClearSearch}
              className="px-5 py-2.5 rounded-xl bg-[#0A2540] text-white text-xs font-semibold hover:bg-[#635BFF] transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
