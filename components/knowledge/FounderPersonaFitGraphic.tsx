"use client";

import React, { useState } from "react";
import {
  Factory,
  Briefcase,
  Sparkles,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  Compass,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Scale,
  Users,
} from "lucide-react";

export function FounderPersonaFitGraphic() {
  const [activeTab, setActiveTab] = useState<"archetypes" | "vectors">("archetypes");
  const [selectedArchetype, setSelectedArchetype] = useState<number>(0);

  const archetypes = [
    {
      id: "operator",
      title: "The Industrial Plant Operator",
      tag: "Shop-Floor & Systems",
      icon: Factory,
      color: "#635BFF",
      bgLight: "#F0F0FF",
      borderLight: "#E0E0FF",
      strengths: "Process discipline, machine uptime maintenance, blue-collar shift management, quality assurance workflows.",
      idealFits: ["SMT PCB Assembly", "Technical Textiles", "Molded Pulp Packaging", "Pet Food Extrusion"],
      frictionPoints: "Slow feedback loops, heavy working capital in receivables, physical machinery breakdown headaches.",
      profileScore: { capital: 5, labor: 5, compliance: 4, salesWait: 4, tech: 5 },
    },
    {
      id: "rainmaker",
      title: "The Institutional Rainmaker",
      tag: "B2B Enterprise & Tenders",
      icon: Briefcase,
      color: "#00A88F",
      bgLight: "#E6FFFA",
      borderLight: "#B2DFDB",
      strengths: "High relationship stamina, long enterprise RFP navigation, government tender negotiations, strategic executive trust.",
      idealFits: ["Turnkey Hotel FF&E", "EV Charging Plaza JVs", "Hospitality Contracting", "Specialized Industrial Services"],
      frictionPoints: "Extended 6–12 month sales cycles, bureaucratic milestone approvals, formal multi-stakeholder politics.",
      profileScore: { capital: 4, labor: 3, compliance: 4, salesWait: 5, tech: 3 },
    },
    {
      id: "brandBuilder",
      title: "The Agile Brand Builder",
      tag: "D2C & Consumer Empathy",
      icon: Sparkles,
      color: "#FF7043",
      bgLight: "#FFF2ED",
      borderLight: "#FFD8C9",
      strengths: "Rapid consumer empathy, visual branding, performance marketing, high-frequency iteration, digital channel velocity.",
      idealFits: ["D2C Pet Nutrition", "Packaged Specialty Foods", "Direct-to-Consumer Lifestyle", "Digital Products"],
      frictionPoints: "High customer acquisition cost (CAC) inflation, low consumer switching loyalty, continuous creative burnout.",
      profileScore: { capital: 3, labor: 2, compliance: 2, salesWait: 1, tech: 2 },
    },
    {
      id: "architect",
      title: "The Technical Systems Architect",
      tag: "IP & Precision Engineering",
      icon: Cpu,
      color: "#0A2540",
      bgLight: "#F1F5F9",
      borderLight: "#E2E8F0",
      strengths: "Deep domain engineering, regulatory mastery (BIS/CDSCO), custom IP architecture, high-barrier technical moats.",
      idealFits: ["Power Electronics Modules", "Medical Consumables (ISO 13485)", "Robotics / Cobots", "Vertical SaaS & IoT"],
      frictionPoints: "Long statutory lab certification cycles, high R&D gestation periods, technical perfectionism.",
      profileScore: { capital: 4, labor: 2, compliance: 5, salesWait: 4, tech: 5 },
    },
  ];

  const currentArch = archetypes[selectedArchetype];

  return (
    <div className="my-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 text-[#0A2540] shadow-xs relative overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#635BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00D4B2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Header Title & Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6E8EB] pb-4">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-[#635BFF]/10 border border-[#635BFF]/20 text-[#635BFF]">
              <Compass className="h-5 w-5" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540] block">
                The 1008 Founder-Opportunity Fit Matrix
              </span>
              <span className="text-[11px] text-[#627D98]">
                Match Your Psychological Wiring &amp; Capital Tolerance to the Right Industrial Reality
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#E6E8EB] self-start sm:self-auto shadow-2xs">
            <button
              onClick={() => setActiveTab("archetypes")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "archetypes"
                  ? "bg-[#0A2540] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540]"
              }`}
            >
              4 Founder Archetypes
            </button>
            <button
              onClick={() => setActiveTab("vectors")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "vectors"
                  ? "bg-[#0A2540] text-white shadow-xs"
                  : "text-[#627D98] hover:text-[#0A2540]"
              }`}
            >
              5 Operating Vectors
            </button>
          </div>
        </div>

        {activeTab === "archetypes" ? (
          /* Archetype Selection & Details */
          <div className="space-y-6">
            {/* Archetype Tabs Selector */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {archetypes.map((arch, idx) => {
                const IconComponent = arch.icon;
                const isSelected = selectedArchetype === idx;
                return (
                  <button
                    key={arch.id}
                    onClick={() => setSelectedArchetype(idx)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-white border-[#635BFF] shadow-sm ring-2 ring-[#635BFF]/10"
                        : "bg-white/80 border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="p-1.5 rounded-lg text-xs"
                        style={{ backgroundColor: arch.bgLight, color: arch.color }}
                      >
                        <IconComponent className="h-4 w-4" />
                      </span>
                      <span className="text-[10px] font-mono text-[#627D98] font-bold">
                        TYPE {idx + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#0A2540] leading-tight">
                        {arch.title.replace("The ", "")}
                      </h4>
                      <span className="text-[11px] text-[#627D98] mt-1 block">
                        {arch.tag}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Archetype Deep Dive Card */}
            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-3">
                  <span
                    className="p-3 rounded-2xl"
                    style={{ backgroundColor: currentArch.bgLight, color: currentArch.color }}
                  >
                    {React.createElement(currentArch.icon, { className: "h-6 w-6" })}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0A2540]">
                      {currentArch.title}
                    </h3>
                    <span className="text-xs font-mono font-semibold text-[#627D98]">
                      Core Superpower: {currentArch.tag}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#F1F5F9] text-[#425466] border border-[#E2E8F0] self-start sm:self-auto">
                  1008 Persona Profile
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left: Strengths & Best Fit */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#00A88F] flex items-center gap-1.5 mb-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#00A88F]" /> Operating Strengths
                    </span>
                    <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                      {currentArch.strengths}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#635BFF] flex items-center gap-1.5 mb-2">
                      <TrendingUp className="h-3.5 w-3.5 text-[#635BFF]" /> Ideal Business Model Fits
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentArch.idealFits.map((fit) => (
                        <span
                          key={fit}
                          className="text-xs px-2.5 py-1 rounded-lg bg-[#F8FAFC] text-[#0A2540] border border-[#E2E8F0] font-semibold"
                        >
                          {fit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Daily Operating Friction Points */}
                <div className="space-y-4 bg-[#FFF8F6] p-4 sm:p-5 rounded-xl border border-[#FFE4DC]">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#D94814] flex items-center gap-1.5 mb-1.5">
                      <AlertTriangle className="h-3.5 w-3.5 text-[#D94814]" /> Inevitable Daily Operating Friction
                    </span>
                    <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                      {currentArch.frictionPoints}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#FFD8C9]/60 text-xs text-[#627D98] font-mono">
                    <span>Validation Rule: Can you endure this specific friction for 5+ years?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* 5 Operating Vectors Grid */
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  vector: "Vector 01",
                  title: "Problem Friction Type",
                  desc: "Do you thrive managing physical labor & machinery or abstract intellectual complexity & software code?",
                  icon: Factory,
                  tag: "Labor vs. Machines vs. Code",
                },
                {
                  vector: "Vector 02",
                  title: "Cash Velocity & Patience",
                  desc: "Can your personal psychology endure 90-day B2B credit terms or do you need daily transactional cash flow?",
                  icon: Scale,
                  tag: "90-Day Credit vs. Daily COD",
                },
                {
                  vector: "Vector 03",
                  title: "Regulatory Tolerance",
                  desc: "Are you comfortable spending 6 months securing BIS/SPCB/FSSAI approvals or do you need zero-compliance speed?",
                  icon: ShieldCheck,
                  tag: "Statutory Patience",
                },
                {
                  vector: "Vector 04",
                  title: "Sales & Trust Style",
                  desc: "Do you excel at 6-month enterprise RFP relationship building or digital performance CAC/ROAS funnels?",
                  icon: Users,
                  tag: "Institutional vs. Digital",
                },
                {
                  vector: "Vector 05",
                  title: "Operational Chaos Threshold",
                  desc: "How do you react when a primary motor burns out at 2 AM or raw materials get stuck at a state border?",
                  icon: AlertTriangle,
                  tag: "Real-World Troubleshooting",
                },
                {
                  vector: "Vector 06",
                  title: "14-Day Reality Protocol",
                  desc: "Audit boring factory realities, cold-call 15 buyers, and pressure-test 5 raw material vendors before leasing a shed.",
                  icon: Compass,
                  tag: "Zero-Capital Validation",
                },
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs hover:border-[#CBD5E1] transition-all flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#635BFF] bg-[#F0F0FF] px-2 py-0.5 rounded border border-[#E0E0FF]">
                          {item.vector}
                        </span>
                        <span className="p-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#627D98]">
                          <IconComp className="h-4 w-4 text-[#635BFF]" />
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-[#0A2540]">{item.title}</h4>
                      <p className="text-xs text-[#425466] leading-relaxed">{item.desc}</p>
                    </div>

                    <div className="pt-2 border-t border-[#F1F5F9] text-[11px] font-mono text-[#627D98]">
                      <span>{item.tag}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Status Banner */}
            <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-[#425466]">
                <Compass className="h-4 w-4 text-[#635BFF]" />
                <span>
                  Never ask <em>&quot;What is a hot business?&quot;</em> Ask <strong>&quot;What specific operational friction am I wired to endure?&quot;</strong>
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#627D98] bg-[#F8FAFC] px-2.5 py-1 rounded-md border border-[#E2E8F0]">
                1008 Founder Fit Protocol
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
