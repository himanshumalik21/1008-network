"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import {
  Factory,
  Globe,
  Cpu,
  Truck,
  Sparkles,
  Coins,
  Scale,
  Building2,
  Activity,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowRight,
  Briefcase,
} from "lucide-react";

export function BusinessRequirementsCarousel() {
  const requirements = [
    {
      venture: "Lithium-Ion Battery Pack Assembly",
      sector: "CleanTech / EV",
      badgeColor: "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]",
      location: "Pune, Maharashtra",
      stage: "Seed Funded • Setting Plant",
      seekingRole: "Operations & Plant Setup Head",
      terms: "Equity + Leadership",
      icon: Factory,
      iconColor: "text-[#00A389]",
      building:
        "Commissioning a 50MWh cylindrical and prismatic pack assembly facility, sourcing cells from Tier-1 suppliers, and obtaining AIS-156 safety certifications.",
    },
    {
      venture: "Precision CNC Engineering & Exports",
      sector: "Industrial & Exports",
      badgeColor: "bg-[#F8FAFC] text-[#0A2540] border-[#CBD5E1]",
      location: "Rajkot, Gujarat",
      stage: "Profitable MSME • ₹18 Cr ARR",
      seekingRole: "International B2B Sales Partner",
      terms: "Co-Founder / Equity + Commission",
      icon: Globe,
      iconColor: "text-[#0A2540]",
      building:
        "Expanding precision machined aerospace and automotive component exports into European and North American Tier-1 OEM supply chains.",
    },
    {
      venture: "D2C Clean Nutrition Brand",
      sector: "Consumer & D2C",
      badgeColor: "bg-[#FFF1F2] text-[#E11D48] border-[#FECDD3]",
      location: "Bengaluru, Karnataka",
      stage: "Growth • ₹1.4 Cr/mo GMV",
      seekingRole: "Technical Co-Founder (CTO)",
      terms: "Significant Equity + Salary",
      icon: Cpu,
      iconColor: "text-[#E11D48]",
      building:
        "Architecting proprietary recommendation algorithms, headless commerce checkout, and multi-warehouse sync across Quick Commerce & Amazon.",
    },
    {
      venture: "Hyperlocal Quick-Logistics Dark Stores",
      sector: "Logistics & Supply Chain",
      badgeColor: "bg-[#FFF3EE] text-[#FF7043] border-[#FFE2D6]",
      location: "Delhi NCR",
      stage: "Funded • 24 Active Nodes",
      seekingRole: "Chief Operating Officer (COO)",
      terms: "Founding Executive / Equity",
      icon: Truck,
      iconColor: "text-[#FF7043]",
      building:
        "Scaling 40+ micro-fulfillment dark stores, fleet rider dispatch algorithms, and sub-12 minute delivery SLAs across high-density metro hubs.",
    },
    {
      venture: "Enterprise Agentic AI for ERP",
      sector: "AI & Automation",
      badgeColor: "bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]",
      location: "Hyderabad, Telangana",
      stage: "Pre-Series A • Enterprise Pilots",
      seekingRole: "Chief AI Architect & Co-Founder",
      terms: "Co-Founder Equity",
      icon: Sparkles,
      iconColor: "text-[#7C3AED]",
      building:
        "Building autonomous LLM agents that integrate directly into SAP and Oracle ERPs to automate three-way invoice matching and procurement reconciliation.",
    },
    {
      venture: "Vendor Invoice Financing Platform",
      sector: "Fintech & Capital",
      badgeColor: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      location: "Mumbai, Maharashtra",
      stage: "Series A • ₹50 Cr Loan Book",
      seekingRole: "CFO & Debt Syndication Head",
      terms: "Equity + Key CXO Terms",
      icon: Coins,
      iconColor: "text-[#059669]",
      building:
        "Structuring institutional debt lines with private banks and NBFC partners to expand anchor enterprise supply chain discounting lines.",
    },
    {
      venture: "Greenfield Biomass Energy & Pellets",
      sector: "Clean Energy & Biofuels",
      badgeColor: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
      location: "Ludhiana, Punjab",
      stage: "Project Phase • Land Secured",
      seekingRole: "Regulatory & Plant Setup Head",
      terms: "Operating Partner Equity",
      icon: Scale,
      iconColor: "text-[#2563EB]",
      building:
        "Setting up a 200 TPD agro-residue biomass pelletizing plant, obtaining state pollution board clearances, and closing NTPC co-firing supply tenders.",
    },
    {
      venture: "API Intermediate & Specialty Chemistry",
      sector: "Pharma & Chemicals",
      badgeColor: "bg-[#F8FAFC] text-[#0A2540] border-[#CBD5E1]",
      location: "Dahej, Gujarat",
      stage: "Brownfield Expansion",
      seekingRole: "Production & Process Quality Lead",
      terms: "Co-Director / Equity",
      icon: Building2,
      iconColor: "text-[#0A2540]",
      building:
        "Expanding continuous flow synthesis reactor lines for export-grade pharmaceutical active ingredients adhering strictly to US FDA & cGMP norms.",
    },
    {
      venture: "Point-of-Care Diagnostics Device",
      sector: "HealthTech & Devices",
      badgeColor: "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]",
      location: "Chennai, Tamil Nadu",
      stage: "Clinical Validation Phase",
      seekingRole: "Commercial GTM & Hospital Partner",
      terms: "Co-Founder / Equity",
      icon: Activity,
      iconColor: "text-[#D97706]",
      building:
        "Commercializing a portable microfluidic blood diagnostic analyzer across primary health centers, diagnostic labs, and tier-1 hospital chains.",
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

  const maxIndex = Math.max(0, requirements.length - visibleCount);

  // Set timer to move carousel one by one automatically
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000); // Moves one-by-one every 4 seconds

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
          <Badge variant="cyan" size="sm">
            Business Mandates
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
            What Business Owners Are Building
          </h2>
          <p className="text-xs sm:text-sm text-[#425466]">
            Active requirements posted by founders and business owners across India looking to match with co-founders, functional leads, and operators.
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
            className="w-9 h-9 rounded-full bg-white border border-[#CBD5E1] text-[#0A2540] hover:bg-[#F6F9FC] hover:border-[#00D4B2] flex items-center justify-center transition-all shadow-2xs"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full bg-white border border-[#CBD5E1] text-[#0A2540] hover:bg-[#F6F9FC] hover:border-[#00D4B2] flex items-center justify-center transition-all shadow-2xs"
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
          {requirements.map((req) => {
            const Icon = req.icon;
            return (
              <div
                key={req.venture}
                style={{
                  flex: `0 0 ${100 / visibleCount}%`,
                }}
                className="px-2.5 shrink-0"
              >
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E6E8EB] space-y-4 shadow-2xs hover:shadow-md hover:border-[#00D4B2]/40 transition-all h-full flex flex-col justify-between">
                  {/* Top Area: Sector, Icon & Venture Name */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${req.badgeColor}`}
                      >
                        {req.sector}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-[#F6F9FC] flex items-center justify-center text-[#0A2540] border border-[#E2E8F0]">
                        <Icon className={`h-4 w-4 ${req.iconColor}`} />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[15px] sm:text-base font-bold text-[#0A2540] leading-snug">
                        {req.venture}
                      </h3>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#627D98] pt-1">
                        <MapPin className="h-3 w-3 shrink-0 text-[#00A389]" />
                        <span className="truncate">{req.location}</span>
                        <span>•</span>
                        <span className="truncate">{req.stage}</span>
                      </div>
                    </div>

                    {/* Seeking Role Callout Box */}
                    <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#635BFF] font-semibold flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        <span>Seeking Role</span>
                      </div>
                      <div className="text-xs font-bold text-[#0A2540]">
                        {req.seekingRole}
                      </div>
                      <div className="text-[10px] text-[#627D98]">
                        Terms: <span className="font-medium text-[#0A2540]">{req.terms}</span>
                      </div>
                    </div>

                    {/* Description of what they are building */}
                    <p className="text-xs text-[#425466] leading-relaxed line-clamp-3">
                      {req.building}
                    </p>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between">
                    <span className="text-[11px] font-medium text-[#00A389] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A389] animate-pulse" />
                      Active Mandate
                    </span>
                    <Link
                      href="/network/join"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#635BFF] hover:text-[#4F46E5] transition-colors group"
                    >
                      <span>Match</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
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
                ? "w-7 bg-[#00D4B2]"
                : "w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]"
            }`}
            aria-label={`Go to requirement slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
