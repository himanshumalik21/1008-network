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
      venture: "AI Clinical Simulation for Post-MBBS Residents",
      sector: "HealthTech & AI",
      source: "DPIIT #DIPP104822",
      sourceBadge: "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]",
      badgeColor: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
      location: "Delhi NCR",
      stage: "Live MVP • 1,400 Resident Pilots",
      seekingRole: "Technical Co-Founder (Backend / AI)",
      terms: "25% - 35% Equal Equity Split",
      icon: Cpu,
      iconColor: "text-[#2563EB]",
      quote:
        "“Two AIIMS-trained doctors built our initial simulator on Bubble with 3 hospital pilot MOUs. Rebuilding the core LLM retrieval & latency engine. Need a full-stack technical partner (Python, Next.js, LLM pipelines) to own architecture.”",
    },
    {
      venture: "AIS-156 Phase 2 EV Battery Pack Assembly",
      sector: "CleanTech & EV",
      source: "Udyam: UDYAM-MH-26-0098412",
      sourceBadge: "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]",
      badgeColor: "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]",
      location: "Chakan Industrial Belt, Pune",
      stage: "₹3.2 Cr Seed Raised • Land Leased",
      seekingRole: "Plant Operations & ARAI Setup Head",
      terms: "15% - 20% Equity + Monthly Stipend",
      icon: Factory,
      iconColor: "text-[#00A389]",
      quote:
        "“14,000 sq.ft shed leased in Chakan with 250 kVA power sanction. 2 three-wheeler OEM LOIs in hand. Looking for an operations co-founder who has set up battery test benches and managed ARAI & AIS-156 certification.”",
    },
    {
      venture: "Precision CNC Aerospace & Auto Export Components",
      sector: "Precision Engineering",
      source: "RoC Active • ISO 9001:2015",
      sourceBadge: "bg-[#F8FAFC] text-[#0A2540] border-[#CBD5E1]",
      badgeColor: "bg-[#F8FAFC] text-[#0A2540] border-[#CBD5E1]",
      location: "Shapar-Veraval, Rajkot",
      stage: "Profitable MSME • ₹16.4 Cr Turnover",
      seekingRole: "International B2B Export Co-Founder",
      terms: "30% New Export Entity Equity",
      icon: Globe,
      iconColor: "text-[#0A2540]",
      quote:
        "“2nd-gen precision machining unit with newly installed 5-axis DMG Mori machines. 35% spare capacity. Looking for a partner with European or North American auto OEM buyer relationships to secure direct export supply contracts.”",
    },
    {
      venture: "Smart RFID + GPS School Bus Telematics",
      sector: "IoT & Hardware",
      source: "AIS-140 Certified Device",
      sourceBadge: "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]",
      badgeColor: "bg-[#FFF3EE] text-[#FF7043] border-[#FFE2D6]",
      location: "Gurugram, Haryana",
      stage: "Hardware Tested • 22 Buses Live",
      seekingRole: "Mobile & Cloud Co-Founder (Flutter/Node)",
      terms: "20% - 30% Equity (Sweat Equity OK)",
      icon: Truck,
      iconColor: "text-[#FF7043]",
      quote:
        "“In-house AIS-140 telematics hardware tested and running in 3 private schools. Need a mobile app & cloud engineer (Flutter, Node.js, WebSockets) to own parent apps and driver dispatching while I scale institutional school sales.”",
    },
    {
      venture: "Clean Hydration & Isotonic Electrolytes",
      sector: "Consumer & D2C",
      source: "FSSAI Lic. #11223334000812",
      sourceBadge: "bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]",
      badgeColor: "bg-[#FFF1F2] text-[#E11D48] border-[#FECDD3]",
      location: "Bengaluru, Karnataka",
      stage: "₹22L MRR • Positive Unit Econ",
      seekingRole: "Growth & Performance Marketing Partner",
      terms: "15% - 22% Equity + Performance Bonus",
      icon: Activity,
      iconColor: "text-[#E11D48]",
      quote:
        "“Formulated clean-label electrolyte powder. Profitable on Blinkit and Zepto across 4 cities with 36% repeat rates. Need a growth co-founder to run Meta performance ad scaling, creator partnerships, and direct Shopify funnel CRO.”",
    },
    {
      venture: "B2B GST E-Invoicing & Automated Reconciliation",
      sector: "Enterprise FinTech",
      source: "GST Suvidha Provider (GSP) API",
      sourceBadge: "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]",
      badgeColor: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      location: "HSR Layout, Bengaluru",
      stage: "₹3.8L MRR • 14 Industrial Plants",
      seekingRole: "Enterprise B2B Sales Co-Founder",
      terms: "25% - 30% Co-Founder Equity",
      icon: Coins,
      iconColor: "text-[#059669]",
      quote:
        "“Built real-time ERP-to-NIC reconciliation software for manufacturing units with 0% churn. Need an aggressive enterprise sales co-founder with manufacturing CFO relationships to close 50+ mid-market industrial clients.”",
    },
    {
      venture: "Agro-Biomass Briquette Boiler Fuel Plant",
      sector: "Clean Energy & Biofuels",
      source: "Punjab PCB CTO Approved",
      sourceBadge: "bg-[#F8FAFC] text-[#0A2540] border-[#CBD5E1]",
      badgeColor: "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]",
      location: "Khanna Industrial Belt, Punjab",
      stage: "45 MT/Day Output • ₹3.8 Cr Asset Base",
      seekingRole: "Industrial B2B Sales Co-Founder",
      terms: "20% - 25% Entity Equity + Profit Share",
      icon: Scale,
      iconColor: "text-[#D97706]",
      quote:
        "“Paddy straw briquetting facility supplying industrial boilers. Secured raw biomass procurement across 12 villages. Mandate to sign long-term supply agreements with cement, paper, and textile dyeing plants in Punjab & Haryana.”",
    },
    {
      venture: "Custom Synthesis Specialty Chemicals",
      sector: "Pharma & Specialty Chem",
      source: "GIDC Allotment #GIDC-DH-4410",
      sourceBadge: "bg-[#F5F3FF] text-[#6D28D9] border-[#DDD6FE]",
      badgeColor: "bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]",
      location: "Dahej SEZ, Gujarat",
      stage: "Pilot Plant Ready • 3 Compounds Validated",
      seekingRole: "Technical Plant Director & Co-Founder",
      terms: "18% - 25% Equity + Profit Share",
      icon: Factory,
      iconColor: "text-[#7C3AED]",
      quote:
        "“High-margin import substitution of fluorinated intermediate compounds. Land allotted and pilot reactors operational in Dahej. Looking for a chemical process engineer with continuous flow reactor experience to scale plant output.”",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateVisible = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
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
    <section className="relative w-full py-10 sm:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient Radiant Glow (Teal & Iris) */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[650px] h-96 bg-gradient-to-r from-[#00D4B2]/08 via-[#635BFF]/06 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enclosing Card Container Box */}
        <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#F0FDFB]/70 via-white to-white border border-[#B2F5EA] p-6 sm:p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,163,137,0.06)] relative overflow-hidden">
          {/* Subtle ambient radiant glow inside the box */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#00D4B2]/08 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#635BFF]/05 blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-8 gap-4 relative z-10">
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

      {/* Carousel Viewport */}
      <div
        className="overflow-hidden relative z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-out -mx-2.5"
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
                  width: `${100 / visibleCount}%`,
                }}
                className="px-2.5 shrink-0"
              >
                <div className="p-5 sm:p-5.5 rounded-2xl bg-white border border-[#CBD5E1]/80 space-y-3.5 shadow-xs hover:shadow-md hover:border-[#00D4B2] transition-all h-full flex flex-col justify-between">
                  {/* Top Area: Sector, Source & Venture Name */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-1 h-6">
                      <span
                        className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${req.badgeColor} truncate`}
                      >
                        {req.sector}
                      </span>
                      <span
                        className={`text-[9.5px] font-mono px-2 py-0.5 rounded-full border ${req.sourceBadge} shrink-0`}
                      >
                        {req.source}
                      </span>
                    </div>

                    <div>
                      <div className="h-10 sm:h-11 flex items-center">
                        <h3 className="text-sm sm:text-base font-bold text-[#0A2540] leading-snug line-clamp-2">
                          {req.venture}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#627D98] pt-1 font-mono h-5">
                        <MapPin className="h-3 w-3 shrink-0 text-[#00A389]" />
                        <span className="truncate">{req.location}</span>
                        <span className="shrink-0">•</span>
                        <span className="truncate text-[#0A2540] font-medium">{req.stage}</span>
                      </div>
                    </div>

                    {/* Seeking Role Callout Box (Locked uniform height) */}
                    <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1 h-[78px] sm:h-[82px] flex flex-col justify-center">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#635BFF] font-semibold flex items-center gap-1">
                        <Briefcase className="h-3 w-3 shrink-0" />
                        <span>Role Needed</span>
                      </div>
                      <div className="text-xs font-bold text-[#0A2540] leading-tight line-clamp-1">
                        {req.seekingRole}
                      </div>
                      <div className="text-[10px] text-[#475569] truncate">
                        Terms: <span className="font-semibold text-[#00A389]">{req.terms}</span>
                      </div>
                    </div>

                    {/* Authentic Founder Quote (Locked uniform min-height) */}
                    <div className="relative pl-2.5 border-l-2 border-[#CBD5E1] min-h-[68px] sm:min-h-[74px] flex items-start">
                      <p className="text-[11.5px] text-[#334155] leading-relaxed italic line-clamp-3">
                        {req.quote}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Footer (Locked to bottom) */}
                  <div className="pt-2.5 border-t border-[#F1F5F9] mt-auto flex items-center justify-between">
                    <span className="text-[10.5px] font-medium text-[#00A389] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A389] animate-pulse shrink-0" />
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
      </div>
    </section>
  );
}
