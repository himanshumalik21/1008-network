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
  Quote,
  CheckCircle2,
} from "lucide-react";

export function BusinessRequirementsCarousel() {
  const requirements = [
    {
      venture: "AI Clinical Simulation for MBBS Doctors",
      sector: "HealthTech & AI",
      source: "Verified Founder Mandate",
      sourceBadge: "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]",
      badgeColor: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
      location: "Delhi NCR",
      stage: "Live MVP • 1,200 Active Pilots",
      seekingRole: "Technical Co-Founder (Backend / AI)",
      terms: "25% - 35% Equal Equity Split",
      icon: Cpu,
      iconColor: "text-[#2563EB]",
      quote:
        "“We are two MBBS educators. We built our initial case-simulator on Bubble and have pilot tie-ups with 3 medical colleges, but the app is lagging. Need a full-stack technical partner (Python, Next.js, LLM pipelines) who can rebuild the backend for scale.”",
    },
    {
      venture: "Lithium EV Battery Pack Assembly",
      sector: "CleanTech / EV",
      source: "Direct 1008 Mandate",
      sourceBadge: "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]",
      badgeColor: "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]",
      location: "Pune (Chakan Industrial Belt)",
      stage: "₹3.2 Cr Seed Raised • Land Leased",
      seekingRole: "Plant Operations & Setup Head",
      terms: "12% - 18% Equity + ₹1.5L/mo Stipend",
      icon: Factory,
      iconColor: "text-[#00A389]",
      quote:
        "“Factory shed is leased in Chakan and power sanction is in place. We have letters of intent from two 3-wheeler EV OEMs. Looking for an operations partner who has set up battery testing benches and handled ARAI & AIS-156 certification.”",
    },
    {
      venture: "Precision Machined Auto Parts MSME",
      sector: "Industrial & Exports",
      source: "Verified MSME Mandate",
      sourceBadge: "bg-[#F8FAFC] text-[#0A2540] border-[#CBD5E1]",
      badgeColor: "bg-[#F8FAFC] text-[#0A2540] border-[#CBD5E1]",
      location: "Rajkot, Gujarat",
      stage: "Profitable MSME • ₹14 Cr Domestic Sales",
      seekingRole: "International B2B Export Partner",
      terms: "New Entity Co-Founder (30% Equity) + Export Comm.",
      icon: Globe,
      iconColor: "text-[#0A2540]",
      quote:
        "“Our family CNC precision component plant supplies diesel engine blocks in India. We recently invested in 5-axis machines with 40% idle capacity. Looking for a partner with European or US auto OEM buyer connections to crack direct export orders.”",
    },
    {
      venture: "School Bus Tracking & Child Safety IoT",
      sector: "Hardware & IoT",
      source: "Active Founder Listing",
      sourceBadge: "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]",
      badgeColor: "bg-[#FFF3EE] text-[#FF7043] border-[#FFE2D6]",
      location: "Delhi NCR",
      stage: "Hardware Tested • 12 Buses Live",
      seekingRole: "Technical Co-Founder (Mobile & Cloud)",
      terms: "20% - 30% Equity (Sweat Equity OK)",
      icon: Truck,
      iconColor: "text-[#FF7043]",
      quote:
        "“I spent 8 months developing an RFID + GPS telematics hardware box and tested it with 2 private schools. I need a mobile app & cloud engineer (React Native / Flutter / Node) to own the parent notification app so I can focus on school sales.”",
    },
    {
      venture: "Clean Hydration & Electrolyte Brand",
      sector: "Consumer & D2C",
      source: "Direct Founder Mandate",
      sourceBadge: "bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]",
      badgeColor: "bg-[#FFF1F2] text-[#E11D48] border-[#FECDD3]",
      location: "Bengaluru, Karnataka",
      stage: "₹18L/mo Revenue • Positive Unit Econ",
      seekingRole: "Growth & Performance Marketing Partner",
      terms: "15% - 22% Equity + Performance Bonus",
      icon: Activity,
      iconColor: "text-[#E11D48]",
      quote:
        "“Bootstrapped on Shopify & Amazon, and just got listed in Zepto/Blinkit dark stores across 3 cities. We formulate and pack in-house with high margins. Need a full-time growth partner who knows Meta ad scaling, influencer seeding, and Q-commerce retention.”",
    },
    {
      venture: "GST & E-Way Bill Reconciliation SaaS",
      sector: "Fintech & B2B SaaS",
      source: "1008 Network Mandate",
      sourceBadge: "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]",
      badgeColor: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      location: "Mumbai / Pune",
      stage: "₹2.8L MRR • 8 Paying Factory Clients",
      seekingRole: "Full-Stack Tech Co-Founder (CTO)",
      terms: "25% - 30% Equity Split",
      icon: Coins,
      iconColor: "text-[#059669]",
      quote:
        "“Ex-SAP consultant. Built Python scripts that reconcile purchase orders against e-way bills and GSTIN portals for manufacturing factories. 8 clients are paying ₹35k/mo on Google Sheets. Need a rockstar developer to build this into a multi-tenant web app.”",
    },
    {
      venture: "Agro-Residue Biomass Pellet Plant",
      sector: "Clean Energy & Biofuels",
      source: "Industrial Venture Mandate",
      sourceBadge: "bg-[#F8FAFC] text-[#0A2540] border-[#CBD5E1]",
      badgeColor: "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]",
      location: "Ludhiana, Punjab",
      stage: "4 Acres Land Secured • ₹4 Cr Equity Ready",
      seekingRole: "Operating Co-Founder & Plant Head",
      terms: "15% Equity + Profit Share",
      icon: Scale,
      iconColor: "text-[#D97706]",
      quote:
        "“We have industrial zoned land and capital committed for a 200 TPD paddy stubble biomass pelleting unit for thermal plant co-firing. Seeking an experienced mechanical/industrial engineer to oversee pellet mill procurement, installation, and daily shifts.”",
    },
    {
      venture: "Point-of-Care Microfluidic Diagnostics",
      sector: "MedTech / DeepTech",
      source: "DeepTech Founder Mandate",
      sourceBadge: "bg-[#F5F3FF] text-[#6D28D9] border-[#DDD6FE]",
      badgeColor: "bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]",
      location: "Chennai, Tamil Nadu",
      stage: "Clinical Validation • Patents Filed",
      seekingRole: "Commercial GTM & Hospital Partner",
      terms: "15% - 20% Co-Founder Equity",
      icon: Activity,
      iconColor: "text-[#7C3AED]",
      quote:
        "“Developed a 5-minute point-of-care blood test cartridge for rural clinics. Lab validation completed at IIT Madras. Looking for a commercial co-founder with 8+ years selling medical devices to hospital procurement committees and diagnostic chains.”",
    },
    {
      venture: "Campus Electric Scooter Fleet & App",
      sector: "Urban Mobility",
      source: "Active Founder Listing",
      sourceBadge: "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]",
      badgeColor: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
      location: "Bengaluru, Karnataka",
      stage: "800+ Rides Completed • 25 Scooters",
      seekingRole: "Growth & Ground Operations Partner",
      terms: "20% - 25% Equity Split",
      icon: Sparkles,
      iconColor: "text-[#2563EB]",
      quote:
        "“Two software engineers built the IoT fleet tracking firmware and user app. Ran a pilot with 25 electric scooters inside a tech park campus. Need a business-minded co-founder to handle ground battery swapping, campus permits, and university partnerships.”",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateVisible = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth >= 1024) {
        setVisibleCount(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, requirements.length - visibleCount);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4200);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient Radiant Glow (Teal & Iris) */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[650px] h-96 bg-gradient-to-r from-[#00D4B2]/08 via-[#635BFF]/06 to-transparent blur-[140px] pointer-events-none" />



      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-8 gap-4">
          <div className="text-center sm:text-left space-y-2 max-w-2xl">
            <Badge variant="cyan" size="sm">
              Active Business Mandates
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
              What Business Owners Are Building
            </h2>
            <p className="text-xs sm:text-sm text-[#425466]">
              Active commercial requirements submitted by business owners and founders across India seeking co-founders, executive leads, and strategic operating partners.
            </p>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="w-9 h-9 rounded-full bg-white border border-[#CBD5E1] text-[#627D98] hover:text-[#0A2540] hover:border-[#94A3B8] flex items-center justify-center transition-all shadow-2xs focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-hidden cursor-pointer"
              title={isPaused ? "Play Auto-Slide" : "Pause Auto-Slide"}
              aria-label={isPaused ? "Play Auto-Slide" : "Pause Auto-Slide"}
            >
              {isPaused ? <Play className="h-3.5 w-3.5 ml-0.5" /> : <Pause className="h-3.5 w-3.5" />}
            </button>
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-white border border-[#CBD5E1] text-[#0A2540] hover:bg-[#F6F9FC] hover:border-[#00D4B2] flex items-center justify-center transition-all shadow-2xs focus-visible:ring-2 focus-visible:ring-[#00D4B2] focus-visible:outline-hidden cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-white border border-[#CBD5E1] text-[#0A2540] hover:bg-[#F6F9FC] hover:border-[#00D4B2] flex items-center justify-center transition-all shadow-2xs focus-visible:ring-2 focus-visible:ring-[#00D4B2] focus-visible:outline-hidden cursor-pointer"
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
                <div className="p-5 sm:p-5.5 rounded-2xl bg-white border border-[#E6E8EB] space-y-3.5 shadow-2xs hover:shadow-md hover:border-[#00D4B2]/50 transition-all h-full flex flex-col justify-between">
                  {/* Top Area: Sector, Source & Venture Name */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-1">
                      <span
                        className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${req.badgeColor}`}
                      >
                        {req.sector}
                      </span>
                      <span
                        className={`text-[9px] font-mono font-medium px-2 py-0.5 rounded-full border ${req.sourceBadge}`}
                      >
                        {req.source}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-[14px] sm:text-[15px] font-bold text-[#0A2540] leading-snug line-clamp-1">
                        {req.venture}
                      </h3>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#627D98] pt-1">
                        <MapPin className="h-3 w-3 shrink-0 text-[#00A389]" />
                        <span className="truncate">{req.location}</span>
                        <span>•</span>
                        <span className="truncate text-[#0A2540] font-medium">{req.stage}</span>
                      </div>
                    </div>

                    {/* Seeking Role Callout Box */}
                    <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#635BFF] font-semibold flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        <span>Role Needed</span>
                      </div>
                      <div className="text-xs font-bold text-[#0A2540] leading-tight">
                        {req.seekingRole}
                      </div>
                      <div className="text-[10px] text-[#475569]">
                        Terms: <span className="font-semibold text-[#00A389]">{req.terms}</span>
                      </div>
                    </div>

                    {/* Authentic Founder Quote */}
                    <div className="relative pl-2.5 border-l-2 border-[#CBD5E1]">
                      <p className="text-[11.5px] text-[#334155] leading-relaxed italic line-clamp-4">
                        {req.quote}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-2.5 border-t border-[#F1F5F9] flex items-center justify-between">
                    <span className="text-[10.5px] font-medium text-[#00A389] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A389] animate-pulse" />
                      Active Mandate
                    </span>
                    <Link
                      href="/network/join"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#635BFF] hover:text-[#4F46E5] transition-colors group"
                    >
                      <span>Connect</span>
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
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00D4B2] ${
              currentIndex === idx
                ? "w-7 bg-[#00D4B2]"
                : "w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]"
            }`}
            aria-label={`Go to requirement slide ${idx + 1}`}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
