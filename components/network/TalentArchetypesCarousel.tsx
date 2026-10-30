"use client";

import React, { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/brand/Badge";
import {
  Cpu,
  Layers,
  TrendingUp,
  Factory,
  Coins,
  Sparkles,
  ShoppingBag,
  Scale,
  Layout,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

export function TalentArchetypesCarousel() {
  const roles = [
    {
      title: "Technical Co-Founder (CTO)",
      tag: "Technology & AI",
      badgeColor: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      icon: Cpu,
      iconColor: "text-[#635BFF]",
      description:
        "Senior engineering leaders and system architects to design software systems, build scalable MVPs, and lead engineering teams.",
    },
    {
      title: "Operations & Supply Chain Lead",
      tag: "Operations & Execution",
      badgeColor: "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]",
      icon: Layers,
      iconColor: "text-[#00A389]",
      description:
        "Hands-on COOs and operating specialists managing procurement, factory logistics, vendor distribution networks, and daily delivery.",
    },
    {
      title: "Go-to-Market & Sales Partner",
      tag: "Revenue & Growth",
      badgeColor: "bg-[#FFF3EE] text-[#FF7043] border-[#FFE2D6]",
      icon: TrendingUp,
      iconColor: "text-[#FF7043]",
      description:
        "Enterprise sales leaders and commercial directors with established industry relationships, distribution channels, and B2B pipelines.",
    },
    {
      title: "Manufacturing & Factory Setup Head",
      tag: "Industrial & Plants",
      badgeColor: "bg-[#F8FAFC] text-[#0A2540] border-[#CBD5E1]",
      icon: Factory,
      iconColor: "text-[#0A2540]",
      description:
        "Industrial veterans experienced in machinery procurement, factory licensing, greenfield plant execution, and quality control.",
    },
    {
      title: "CFO & Financial Strategist",
      tag: "Finance & Capital",
      badgeColor: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      icon: Coins,
      iconColor: "text-[#059669]",
      description:
        "Financial leaders experienced in cashflow modeling, bank credit facilities, debt syndication, audit compliance, and investor reporting.",
    },
    {
      title: "Chief AI & Automation Architect",
      tag: "AI & Automation",
      badgeColor: "bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]",
      icon: Sparkles,
      iconColor: "text-[#7C3AED]",
      description:
        "Applied AI specialists building proprietary LLMs, agentic workflows, computer vision, and industrial automation for enterprise productivity.",
    },
    {
      title: "D2C Brand & Quick-Commerce Lead",
      tag: "Consumer & D2C",
      badgeColor: "bg-[#FFF1F2] text-[#E11D48] border-[#FECDD3]",
      icon: ShoppingBag,
      iconColor: "text-[#E11D48]",
      description:
        "Growth leaders scaling consumer brands across Amazon, Quick Commerce (Blinkit/Zepto), Meta ROAS, and omnichannel retail distribution.",
    },
    {
      title: "Regulatory & Government Liaison",
      tag: "Compliance & Policy",
      badgeColor: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
      icon: Scale,
      iconColor: "text-[#2563EB]",
      description:
        "Policy specialists navigating state industrial subsidies, pollution board clearances, BIS/FSSAI licensing, and PLI incentive approvals in India.",
    },
    {
      title: "Product & UX/UI Co-Founder",
      tag: "Product & Design",
      badgeColor: "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]",
      icon: Layout,
      iconColor: "text-[#D97706]",
      description:
        "Design founders crafting frictionless mobile & web product experiences, high-converting onboarding flows, and scalable design systems.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  // Update visible items count based on responsive window width
  useEffect(() => {
    const updateVisible = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth >= 1024) {
        setVisibleCount(4); // 4 at a time on desktop
      } else if (window.innerWidth >= 768) {
        setVisibleCount(3); // 3 on medium screens
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2); // 2 on small screens
      } else {
        setVisibleCount(1); // 1 on mobile
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, roles.length - visibleCount);

  // Set timer to move carousel one by one automatically
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500); // Moves one-by-one every 3.5 seconds

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-8 gap-4">
        <div className="text-center sm:text-left space-y-2 max-w-2xl">
          <Badge variant="indigo" size="sm">
            Talent Archetypes
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
            Roles We Match For Businesses
          </h2>
          <p className="text-xs sm:text-sm text-[#425466]">
            Whether you need a technical co-founder, operational head, or industrial specialist, our talent pool covers critical execution pillars in India.
          </p>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsPaused((prev) => !prev)}
            className="w-9 h-9 rounded-full bg-white border border-[#CBD5E1] text-[#627D98] hover:text-[#0A2540] hover:border-[#94A3B8] flex items-center justify-center transition-all shadow-2xs"
            title={isPaused ? "Play Auto-Slide" : "Pause Auto-Slide"}
            aria-label={isPaused ? "Play Auto-Slide" : "Pause Auto-Slide"}
          >
            {isPaused ? <Play className="h-3.5 w-3.5 ml-0.5" /> : <Pause className="h-3.5 w-3.5" />}
          </button>
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full bg-white border border-[#CBD5E1] text-[#0A2540] hover:bg-[#F6F9FC] hover:border-[#635BFF] flex items-center justify-center transition-all shadow-2xs"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full bg-white border border-[#CBD5E1] text-[#0A2540] hover:bg-[#F6F9FC] hover:border-[#635BFF] flex items-center justify-center transition-all shadow-2xs"
            aria-label="Next Slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* The Carousel Track */}
      <div
        className="relative overflow-hidden -mx-2.5 py-1"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                style={{
                  flex: `0 0 ${100 / visibleCount}%`,
                }}
                className="px-2.5 shrink-0"
              >
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E6E8EB] space-y-3.5 shadow-2xs hover:shadow-md hover:border-[#635BFF]/35 transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F6F9FC] flex items-center justify-center text-[#0A2540] border border-[#E2E8F0] shadow-2xs">
                        <Icon className={`h-5 w-5 ${role.iconColor}`} />
                      </div>
                      <span
                        className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${role.badgeColor}`}
                      >
                        {role.tag}
                      </span>
                    </div>

                    <h3 className="text-[15px] sm:text-base font-bold text-[#0A2540] leading-snug">
                      {role.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#425466] leading-relaxed pt-1">
                    {role.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-1.5 pt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? "w-7 bg-[#635BFF]"
                : "w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
