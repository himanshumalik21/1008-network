"use client";

import React, { useState } from "react";
import { FiverrHeroSection } from "@/components/home/FiverrHeroSection";
import { FiverrCategoryBar } from "@/components/home/FiverrCategoryBar";
import { FiverrFeaturedCategories } from "@/components/home/FiverrFeaturedCategories";
import { ServicesMarketplaceSection } from "@/components/home/ServicesMarketplaceSection";
import { CommunityCarousel } from "@/components/home/CommunityCarousel";
import { FiverrHowItWorksSection } from "@/components/home/FiverrHowItWorksSection";
import { FiverrValuePropsSection } from "@/components/home/FiverrValuePropsSection";
import { HomeCtaBanner } from "@/components/home/HomeCtaBanner";
import { Badge } from "@/components/brand/Badge";

export function HomeMarketplaceClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    const el = document.getElementById("services-marketplace");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePopularTagClick = (tag: string) => {
    setSearchQuery(tag);
    setSelectedCategory("all");
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Fiverr-Style Hero with Interactive Search & Visual Photo Showcase */}
      <FiverrHeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onPopularTagClick={handlePopularTagClick}
      />

      {/* 2. Sticky Category Sub-Bar */}
      <FiverrCategoryBar
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 3. Visual Photo Categories Grid (Fiverr Popular Services Grid) */}
      <FiverrFeaturedCategories
        onSelectCategory={handleSelectCategory}
      />

      {/* 4. The Core Marketplace Service Cards Grid with 16:9 Photo Banners */}
      <ServicesMarketplaceSection
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        searchQuery={searchQuery}
        onClearSearch={handleClearSearch}
      />

      {/* 5. How It Works (3 Steps) */}
      <FiverrHowItWorksSection />

      {/* 6. Interactive Community Pillars Carousel Showcase */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E6E8EB] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="indigo" size="sm">
              Community Interactive Showcase
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight font-sans">
              How 1008 Helps Your Business Across 4 Pathways
            </h2>
            <p className="text-sm sm:text-base text-[#425466]">
              Explore the detailed dual perspectives for founders seeking talent/capital vs. operators and specialists ready to co-build.
            </p>
          </div>

          <CommunityCarousel />
        </div>
      </section>

      {/* 7. Why Leading Indian Businesses Choose 1008 */}
      <FiverrValuePropsSection />

      {/* 8. Bottom Conversion Banner */}
      <HomeCtaBanner />
    </div>
  );
}
