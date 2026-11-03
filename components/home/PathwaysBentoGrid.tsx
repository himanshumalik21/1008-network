\"use client\";

import React, { useState } from \"react\";
import Link from \"next/link\";
import { motion } from \"framer-motion\";
import { ArrowRight, Plus, Users, Coins, Cog, Zap, BookOpen, CheckCircle2, Sparkles } from \"lucide-react\";

export function PathwaysBentoGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const pathways = [
    {
      id: \"network\",
      title: \"Co-Founders & Talent\",
      badge: \"Partners & Talent\",
      href: \"/network\",
      gradient: \"from-[#635BFF] via-[#5B52F2] to-[#4F46E5]\",
      shadow: \"hover:shadow-[0_20px_40px_-10px_rgba(99,91,255,0.45)] shadow-[0_8px_24px_-6px_rgba(99,91,255,0.25)]\",
      borderColor: \"border-[#818CF8]/30\",
      textColor: \"text-white\",
      iconColor: \"text-[#635BFF]\",
      iconBg: \"bg-white\",
      description:
        \"Find trusted co-founders and key team members, or join an ambitious startup ready to scale.\",
      points: [\"Technical Co-Founders (CTO)\", \"Head of Operations & GTM\", \"Sweat Equity / Co-Founder Terms\"],
      icon: Users,
    },
    {
      id: \"capital\",
      title: \"Funding & Investors\",
      badge: \"Angel Funding\",
      href: \"/capital\",
      gradient: \"from-[#FF6B4A] via-[#F25A38] to-[#E24A29]\",
      shadow: \"hover:shadow-[0_20px_40px_-10px_rgba(242,90,56,0.42)] shadow-[0_8px_24px_-6px_rgba(242,90,56,0.25)]\",
      borderColor: \"border-[#FCA5A5]/30\",
      textColor: \"text-white\",
      iconColor: \"text-[#E24A29]\",
      iconBg: \"bg-white\",
      description:
        \"Connect directly with active angel investors, family offices, and sector syndicates across India.\",
      points: [\"₹5L - ₹2 Cr+ Check Sizes\", \"Zero Broker / Placement Fees\", \"Operating Angel Networks\"],
      icon: Coins,
    },
    {
      id: \"studio\",
      title: \"Outsource Operations\",
      badge: \"Operations & Tech\",
      href: \"/studio\",
      gradient: \"from-[#00A68C] via-[#008F79] to-[#0A6C5B]\",
      shadow: \"hover:shadow-[0_20px_40px_-10px_rgba(0,166,140,0.45)] shadow-[0_8px_24px_-6px_rgba(0,166,140,0.25)]\",
      borderColor: \"border-[#5EEAD4]/30\",
      textColor: \"text-white\",
      iconColor: \"text-[#0A6C5B]\",
      iconBg: \"bg-white\",
      description:
        \"Let us run your day-to-day operations and tech so you can focus on commercial growth.\",
      points: [\"Turnkey Tech Stack & Setup\", \"Supply Chain & ERP Workflows\", \"Milestone-Driven Execution\"],
      icon: Cog,
    },
    {
      id: \"gigs\",
      title: \"Gigs & Sprints\",
      badge: \"Short-Term Projects\",
      href: \"/gigs\",
      gradient: \"from-[#FFFFFF] via-[#FBFDFF] to-[#F1F5F9]\",
      shadow: \"hover:shadow-[0_20px_40px_-10px_rgba(10,37,64,0.12)] shadow-[0_4px_16px_rgba(10,37,64,0.05)]\",
      borderColor: \"border-[#CBD5E1]\",
      textColor: \"text-[#0A2540]\",
      iconColor: \"text-white\",
      iconBg: \"bg-[#0A2540]\",
      description:
        \"Get short-term 1–4 week projects completed by verified freelancers, engineers, and specialists.\",
      points: [\"Scraped Scopes & Fixed Milestones\", \"1–4 Week Rapid Delivery\", \"Zero Recruiter Overhead\"],
      icon: Zap,
    },
  ];

  return (
    <section
      id=\"pathways\"
      onMouseMove={handleMouseMove}
      className=\"relative w-full py-12 sm:py-16 lg:py-20 z-20\"
    >
      <div className=\"max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12\">
        {/* Section Header */}
        <div className=\"max-w-3xl mx-auto text-center space-y-3\">
          <div className=\"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] shadow-2xs text-[#0A2540] text-xs font-mono font-semibold\">
            <Sparkles className=\"h-3.5 w-3.5 text-[#635BFF]\" />
            <span>The 1008 Ecosystem Infrastructure</span>
          </div>
          <h2 className=\"text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0A2540] tracking-tight\">
            Five Targeted Growth Pathways
          </h2>
          <p className=\"text-sm sm:text-base text-[#425466] max-w-2xl mx-auto leading-relaxed\">
            Whether you are launching from scratch, raising growth checks, or looking for vetted partners, 1008 gives you direct, structured access without middlemen.
          </p>
        </div>

        {/* 2x2 Grid for Top 4 Pathways */}
        <div className=\"grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 items-stretch\">
          {pathways.map((item, idx) => {
            const Icon = item.icon;
            const isLight = item.id === \"gigs\";
            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: \"spring\", stiffness: 300, damping: 22 }}
              >
                <Link
                  href={item.href}
                  className={`relative rounded-[26px] bg-gradient-to-br ${item.gradient} border ${item.borderColor} p-6 sm:p-7 lg:p-8 flex flex-col justify-between ${item.textColor} transition-all duration-300 ${item.shadow} group h-full text-left overflow-hidden isolate`}
                >
                  {/* Subtle corner stipple / glare */}
                  <div className=\"absolute -top-16 -right-16 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none\" />

                  {/* Top Area: Badge & 3D Icon Container */}
                  <div className=\"space-y-4\">
                    <div className=\"flex items-center justify-between w-full\">
                      <span
                        className={`text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                          isLight
                            ? \"bg-[#F1F5F9] text-[#0A2540] border-[#E2E8F0]\"
                            : \"bg-white/15 text-white/95 border-white/20\"
                        }`}
                      >
                        {item.badge}
                      </span>
                      <div
                        className={`w-10 h-10 rounded-2xl ${item.iconBg} flex items-center justify-center ${item.iconColor} shadow-sm group-hover:scale-105 transition-transform shrink-0`}
                      >
                        <Icon className=\"h-5 w-5\" />
                      </div>
                    </div>

                    <div>
                      <h3
                        className={`text-xl sm:text-2xl font-extrabold ${item.textColor} leading-tight`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-xs sm:text-[13.5px] pt-2 leading-relaxed font-normal ${
                          isLight ? \"text-[#425466]\" : \"text-white/90\"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Bullet Highlights */}
                    <div className=\"pt-1 space-y-1.5\">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className=\"flex items-center gap-2 text-xs font-medium\">
                          <CheckCircle2
                            className={`h-3.5 w-3.5 shrink-0 ${
                              isLight ? \"text-[#00A389]\" : \"text-white/80\"
                            }`}
                          />
                          <span className={isLight ? \"text-[#334155]\" : \"text-white/95\"}>
                            {pt}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Strip */}
                  <div
                    className={`mt-6 pt-4 border-t flex items-center justify-between text-xs sm:text-[13px] font-semibold ${
                      isLight
                        ? \"border-[#E2E8F0] text-[#0A2540] group-hover:text-[#635BFF]\"
                        : \"border-white/20 text-white group-hover:text-white/90\"
                    }`}
                  >
                    <span>Explore {item.title}</span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                        isLight
                          ? \"bg-[#0A2540] text-white group-hover:bg-[#635BFF]\"
                          : \"bg-white/20 text-white group-hover:bg-white group-hover:text-[#0A2540]\"
                      }`}
                    >
                      <ArrowRight className=\"h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform\" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Pathway 5: Wide Full-Span Executive Knowledge Foundation */}
        <motion.div
          whileHover={{ y: -4, scale: 1.006 }}
          whileTap={{ scale: 0.995 }}
          transition={{ type: \"spring\", stiffness: 300, damping: 22 }}
        >
          <Link
            href=\"/knowledge\"
            className=\"relative rounded-[26px] bg-gradient-to-r from-[#0B132B] via-[#1C2541] to-[#0B132B] border border-white/15 p-6 sm:p-8 lg:p-9 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-white transition-all duration-300 hover:border-white/30 hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.6)] shadow-[0_12px_30px_-8px_rgba(0,0,0,0.35)] group text-left overflow-hidden isolate\"
          >
            {/* Ambient internal soft halo */}
            <div className=\"absolute -bottom-24 -left-24 w-80 h-80 bg-[#00D4B2]/08 blur-3xl pointer-events-none\" />
            <div className=\"absolute -top-24 -right-24 w-80 h-80 bg-[#635BFF]/10 blur-3xl pointer-events-none\" />

            <div className=\"space-y-3 max-w-3xl relative z-10\">
              <div className=\"flex items-center gap-2.5\">
                <span className=\"text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 px-3 py-1 rounded-full bg-white/10 border border-white/15\">
                  Knowledge Hub • Pathway 5
                </span>
                <span className=\"w-2 h-2 rounded-full bg-[#00D4B2] animate-pulse\" />
                <span className=\"text-xs text-zinc-400 font-mono hidden sm:inline\">
                  Daily Market Research & Playbooks
                </span>
              </div>
              <h3 className=\"text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight\">
                Playbooks & Validated Business Opportunities
              </h3>
              <p className=\"text-zinc-300 text-xs sm:text-[14px] leading-relaxed font-normal\">
                Access deep market playbooks, unsexy MSME business models, cash flow spreadsheets, regulatory roadmaps, and step-by-step angel fundraising checklists.
              </p>
              <div className=\"flex flex-wrap items-center gap-2 sm:gap-3 pt-1 text-xs text-zinc-400 font-mono\">
                <span className=\"px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10\">MSME Manufacturing</span>
                <span className=\"px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10\">B2B SaaS</span>
                <span className=\"px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10\">Healthcare & MedTech</span>
                <span className=\"px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10\">Fintech & Compliance</span>
              </div>
            </div>

            <div className=\"shrink-0 self-center md:self-center relative z-10\">
              <div className=\"px-5 py-3 rounded-xl bg-white text-[#0A2540] group-hover:bg-[#00D4B2] group-hover:text-[#0A2540] font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md group-hover:shadow-lg\">
                <span>Access Playbook</span>
                <ArrowRight className=\"h-4 w-4 group-hover:translate-x-1 transition-transform\" />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
