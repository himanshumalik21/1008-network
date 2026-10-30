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
  DollarSign,
  CheckCircle2,
  Layers,
  Target,
} from "lucide-react";

export function ActiveVenturesCarousel() {
  const ventures = [
    {
      title: "Lithium EV Battery Pack Assembly & Testing",
      sector: "CleanTech / EV",
      source: "Verified 1008 Mandate",
      sourceBadge: "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]",
      badgeColor: "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]",
      location: "Chakan, Pune",
      target: "₹1.25 Cr Growth Capital",
      stage: "Land Leased • 2 OEM LOIs",
      unitEcon: "₹38L Projected MRR • 22% Margin",
      useOfFunds: "Automated cell sorting machine, ultrasonic wire bonder, and ARAI AIS-156 testing bench setup.",
      icon: Factory,
      iconColor: "text-[#00A389]",
    },
    {
      title: "Precision CNC Auto Component MSME",
      sector: "Precision Manufacturing",
      source: "Direct MSME Mandate",
      sourceBadge: "bg-[#F8FAFC] text-[#0A2540] border-[#CBD5E1]",
      badgeColor: "bg-[#F8FAFC] text-[#0A2540] border-[#CBD5E1]",
      location: "Rajkot, Gujarat",
      target: "₹1.80 Cr Working Capital",
      stage: "Profitable MSME • ₹14 Cr Annual Sales",
      unitEcon: "18% EBITDA • Positive Cash Flow",
      useOfFunds: "Procure raw forging material and finance 90-day supply credit cycle for international OEM orders.",
      icon: Globe,
      iconColor: "text-[#0A2540]",
    },
    {
      title: "Multi-Crop Cold Chain & Solar Dehydration",
      sector: "AgriTech & Food Processing",
      source: "Verified Founder Mandate",
      sourceBadge: "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]",
      badgeColor: "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]",
      location: "Nashik, Maharashtra",
      target: "₹75 Lakh Seed Round",
      stage: "40 MT Facility Ready • 18 FPO Contracts",
      unitEcon: "₹16L/mo Revenue • 28% Gross Margin",
      useOfFunds: "Expand solar tunnel drying capacity and insulated cold vans to supply export buyers directly.",
      icon: Scale,
      iconColor: "text-[#D97706]",
    },
    {
      title: "B2B Factory E-Way Bill & GST SaaS",
      sector: "FinTech & Enterprise SaaS",
      source: "1008 Network Mandate",
      sourceBadge: "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]",
      badgeColor: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      location: "Bengaluru, Karnataka",
      target: "₹50 Lakh Pre-Seed",
      stage: "₹3.2L MRR • 9 Paying Industrial Plants",
      unitEcon: "92% Gross Margin • 0% Net Churn",
      useOfFunds: "Onboard 4 full-stack developers and accelerate enterprise sales across Pune & Gujarat manufacturing belts.",
      icon: Coins,
      iconColor: "text-[#059669]",
    },
    {
      title: "Autonomous School Bus Safety & IoT Fleet",
      sector: "Hardware & Telematics",
      source: "Active Founder Listing",
      sourceBadge: "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]",
      badgeColor: "bg-[#FFF3EE] text-[#FF7043] border-[#FFE2D6]",
      location: "Delhi NCR",
      target: "₹85 Lakh Seed",
      stage: "24 Buses Live • 4 Private School Contracts",
      unitEcon: "₹4.8L MRR • Hardware + SaaS Subscription",
      useOfFunds: "Manufacture 400 AIS-140 GPS-RFID telematics units and deploy parent live-tracking mobile stack.",
      icon: Truck,
      iconColor: "text-[#FF7043]",
    },
    {
      title: "Clean High-Protein Hydration FMCG",
      sector: "Consumer & D2C",
      source: "Direct Founder Mandate",
      sourceBadge: "bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]",
      badgeColor: "bg-[#FFF1F2] text-[#E11D48] border-[#FECDD3]",
      location: "Bengaluru / Mumbai",
      target: "₹1.50 Cr Growth Capital",
      stage: "₹22L/mo Revenue • Zepto/Blinkit Live",
      unitEcon: "62% Gross Margin • Positive Unit Econ",
      useOfFunds: "Inventory production for 120 quick-commerce dark stores across Top 6 metros and trade marketing.",
      icon: Activity,
      iconColor: "text-[#E11D48]",
    },
    {
      title: "Agro-Residue Bio-Coal & Pellet Plant",
      sector: "Clean Energy & Biofuels",
      source: "Industrial Mandate",
      sourceBadge: "bg-[#F8FAFC] text-[#0A2540] border-[#CBD5E1]",
      badgeColor: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
      location: "Ludhiana, Punjab",
      target: "₹2.00 Cr Capex Expansion",
      stage: "5 Acres Secured • ₹4 Cr Promoters Equity",
      unitEcon: "100% Off-take Contract with Thermal Power",
      useOfFunds: "Procure 5 TPH industrial rotary drum dryer and high-pressure pelletizer for paddy stubble briquetting.",
      icon: Building2,
      iconColor: "text-[#2563EB]",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, ventures.length - itemsPerPage);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
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
                Active Capital Mandates
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                What Business Owners Are Raising
              </h2>
              <p className="text-xs sm:text-sm text-[#425466]">
                Verified ventures and operating enterprises actively seeking growth capital, machinery financing, or strategic angel syndicates across India.
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
          >
            <div
              className="flex transition-transform duration-500 ease-out -mx-2.5"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {ventures.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      width: `${100 / itemsPerPage}%`,
                    }}
                    className="px-2.5 shrink-0"
                  >
                    <div className="p-5 sm:p-5.5 rounded-2xl bg-white border border-[#CBD5E1]/80 space-y-3.5 shadow-xs hover:shadow-md hover:border-[#00D4B2] transition-all h-full flex flex-col justify-between">
                      {/* Top Area: Sector, Source & Title */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}
                          >
                            {item.sector}
                          </span>
                          <span
                            className={`text-[9.5px] font-mono px-2 py-0.5 rounded-full border ${item.sourceBadge}`}
                          >
                            {item.source}
                          </span>
                        </div>

                        <div className="flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#F8FAFC] border border-[#E6E8EB] flex items-center justify-center shrink-0 mt-0.5">
                            <IconComponent className={`h-4 w-4 ${item.iconColor}`} />
                          </div>
                          <div>
                            <h3 className="text-sm sm:text-base font-bold text-[#0A2540] leading-snug line-clamp-2">
                              {item.title}
                            </h3>
                            <div className="flex items-center gap-1.5 text-xs text-[#627D98] mt-1 font-mono">
                              <MapPin className="h-3 w-3 text-[#94A3B8]" />
                              <span>{item.location}</span>
                              <span>•</span>
                              <span className="text-[#059669] font-semibold">{item.stage}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Middle Area: Target Capital & Unit Economics */}
                      <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-[#627D98] font-mono text-[11px]">Target Raise:</span>
                          <span className="font-bold text-[#0A2540] text-xs font-mono">{item.target}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#627D98] font-mono text-[11px]">Unit Metrics:</span>
                          <span className="font-semibold text-[#00A389] text-[11.5px] font-mono">{item.unitEcon}</span>
                        </div>
                      </div>

                      {/* Use of Funds Summary */}
                      <div className="space-y-1.5 text-xs text-[#425466] flex-1">
                        <div className="text-[11px] font-mono font-bold text-[#635BFF] uppercase tracking-wider">
                          Use of Funds:
                        </div>
                        <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                          {item.useOfFunds}
                        </p>
                      </div>

                      {/* Bottom Action Button */}
                      <div className="pt-3 border-t border-[#F1F4F8]">
                        <Link
                          href="/capital/join"
                          className="w-full py-2 px-3 rounded-xl bg-[#00A389]/10 hover:bg-[#00A389] text-[#007A66] hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 text-center group"
                        >
                          <span>Connect as Investor</span>
                          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-6 relative z-10">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? "w-6 bg-[#00A389]"
                    : "w-1.5 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
