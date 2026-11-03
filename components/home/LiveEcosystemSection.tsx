\"use client\";

import React, { useState } from \"react\";
import Link from \"next/link\";
import { motion, AnimatePresence } from \"framer-motion\";
import { MapPin, Briefcase, ArrowRight, Sparkles, TrendingUp, Users, Factory, Cpu, Coins, ShieldCheck } from \"lucide-react\";

export function LiveEcosystemSection() {
  const [activeTab, setActiveTab] = useState<\"talent\" | \"capital\">(\"talent\");

  const mandates = [
    {
      venture: \"Precision Machined Auto Parts MSME\",
      sector: \"Industrial & Exports\",
      location: \"Rajkot, Gujarat\",
      stage: \"Profitable MSME • ₹14 Cr Sales\",
      roleNeeded: \"International B2B Export Partner\",
      terms: \"30% New Entity Equity + Export Comm.\",
      quote: \"“Our family CNC precision component plant supplies diesel engine blocks in India. Looking for a partner with European or US auto OEM buyer connections.”\",
      href: \"/network\",
      icon: Factory,
      badgeColor: \"bg-[#F8FAFC] text-[#0A2540] border-[#CBD5E1]\",
    },
    {
      venture: \"AI Clinical Simulation for MBBS Doctors\",
      sector: \"HealthTech & AI\",
      location: \"Delhi NCR\",
      stage: \"Live MVP • 1,200 Active Pilots\",
      roleNeeded: \"Technical Co-Founder (Backend / AI)\",
      terms: \"25% - 35% Equal Equity Split\",
      quote: \"“We built our initial simulator on Bubble with 3 medical college pilots. Need a full-stack technical partner (Python, Next.js, LLMs) to rebuild for scale.”\",
      href: \"/network\",
      icon: Cpu,
      badgeColor: \"bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]\",
    },
    {
      venture: \"School Bus Tracking & Child Safety IoT\",
      sector: \"Hardware & IoT\",
      location: \"Delhi NCR\",
      stage: \"Hardware Tested • 12 Buses Live\",
      roleNeeded: \"Technical Co-Founder (Mobile & Cloud)\",
      terms: \"20% - 30% Equity (Sweat Equity OK)\",
      quote: \"“Developed an RFID + GPS telematics hardware box tested with 2 private schools. Need a mobile app & cloud engineer to own the parent app.”\",
      href: \"/network\",
      icon: Users,
      badgeColor: \"bg-[#FFF3EE] text-[#FF7043] border-[#FFE2D6]\",
    },
    {
      venture: \"GST & E-Way Bill Reconciliation SaaS\",
      sector: \"Fintech & B2B SaaS\",
      location: \"Mumbai / Pune\",
      stage: \"₹2.8L MRR • 8 Paying Factory Clients\",
      roleNeeded: \"Full-Stack Tech Co-Founder (CTO)\",
      terms: \"25% - 30% Equity Split\",
      quote: \"“Ex-SAP consultant. Built Python scripts that reconcile POs against e-way bills for factories. 8 clients paying on Sheets. Need a dev for multi-tenant web app.”\",
      href: \"/network\",
      icon: Coins,
      badgeColor: \"bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]\",
    },
  ];

  const theses = [
    {
      venture: \"Tier-2 Engineering MSME Modernization\",
      sector: \"Industrial Tech & Capex\",
      location: \"Pan-India Focus\",
      stage: \"Check Size: ₹25L - ₹1.5 Cr\",
      roleNeeded: \"Target: ₹5 Cr - ₹30 Cr Turnover MSMEs\",
      terms: \"Thesis: Automation, CNC retrofitting & Exports\",
      quote: \"“Syndicate of ex-manufacturing MDs backing profitable precision engineering units seeking working capital and tech automation to capture export supply chains.”\",
      href: \"/capital\",
      icon: Factory,
      badgeColor: \"bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]\",
    },
    {
      venture: \"B2B Enterprise SaaS & Workflow Automation\",
      sector: \"B2B SaaS / DeepTech\",
      location: \"Bengaluru / Delhi NCR\",
      stage: \"Check Size: ₹15L - ₹75L\",
      roleNeeded: \"Target: ₹2L+ MRR with Sticky Retention\",
      terms: \"Thesis: High gross margin, low churn B2B\",
      quote: \"“Angel group of serial SaaS founders and CXOs backing software tools that replace manual back-office and compliance workflows in traditional industries.”\",
      href: \"/capital\",
      icon: Cpu,
      badgeColor: \"bg-[#F5F3FF] text-[#6D28D9] border-[#DDD6FE]\",
    },
    {
      venture: \"Clean Energy & Agro-Biomass Supply Chain\",
      sector: \"CleanTech & Agri-Logistics\",
      location: \"Punjab / Haryana / UP\",
      stage: \"Check Size: ₹50L - ₹2.5 Cr\",
      roleNeeded: \"Target: Feedstock aggregation & Pellet Plants\",
      terms: \"Thesis: Co-firing mandates & industrial thermal\",
      quote: \"“Family office syndicate investing in sustainable biomass processing units with secured power sanction, land, and off-take contracts with utilities.”\",
      href: \"/capital\",
      icon: ShieldCheck,
      badgeColor: \"bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]\",
    },
    {
      venture: \"Consumer Brands with In-House Formulation\",
      sector: \"Consumer / D2C & Retail\",
      location: \"Mumbai / Bengaluru\",
      stage: \"Check Size: ₹20L - ₹1 Cr\",
      roleNeeded: \"Target: Positive contribution margin on marketplaces\",
      terms: \"Thesis: High gross margins, repeatable purchases\",
      quote: \"“Operating consumer operators backing bootstrapped founders with proprietary manufacturing and proven dark-store quick-commerce product-market fit.”\",
      href: \"/capital\",
      icon: TrendingUp,
      badgeColor: \"bg-[#FFF1F2] text-[#E11D48] border-[#FECDD3]\",
    },
  ];

  const currentCards = activeTab === \"talent\" ? mandates : theses;

  return (
    <section className=\"relative w-full py-12 sm:py-16 lg:py-20 z-20\">
      <div className=\"max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10\">
        {/* Section Header with Centered Sliding Tab Filter */}
        <div className=\"flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-[#E2E8F0]\">
          <div className=\"space-y-2 text-left max-w-2xl\">
            <div className=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] shadow-2xs text-[#0A2540] text-xs font-mono font-semibold\">
              <span className=\"w-2 h-2 rounded-full bg-[#00D4B2] animate-pulse\" />
              <span>Live Community Activity</span>
            </div>
            <h2 className=\"text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight\">
              What Founders & Investors Are Doing
            </h2>
            <p className=\"text-xs sm:text-sm text-[#425466]\">
              Real commercial requirements and investment theses actively matched inside 1008 Network.
            </p>
          </div>

          {/* Interactive Sliding Pill Tab Switcher */}
          <div className=\"flex items-center p-1 rounded-2xl bg-[#F1F5F9] border border-[#E2E8F0] shadow-inner w-fit shrink-0\">
            <button
              onClick={() => setActiveTab(\"talent\")}
              className={`relative px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === \"talent\"
                  ? \"text-[#0A2540] shadow-sm font-bold\"
                  : \"text-[#64748B] hover:text-[#0A2540]\"
              }`}
            >
              {activeTab === \"talent\" && (
                <motion.div
                  layoutId=\"ecosystem-tab\"
                  className=\"absolute inset-0 bg-white rounded-xl shadow-xs\"
                  transition={{ type: \"spring\", stiffness: 350, damping: 26 }}
                />
              )}
              <span className=\"relative z-10 flex items-center gap-2\">
                <Users className=\"h-3.5 w-3.5 text-[#635BFF]\" />
                <span>Co-Founder Searches</span>
              </span>
            </button>

            <button
              onClick={() => setActiveTab(\"capital\")}
              className={`relative px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === \"capital\"
                  ? \"text-[#0A2540] shadow-sm font-bold\"
                  : \"text-[#64748B] hover:text-[#0A2540]\"
              }`}
            >
              {activeTab === \"capital\" && (
                <motion.div
                  layoutId=\"ecosystem-tab\"
                  className=\"absolute inset-0 bg-white rounded-xl shadow-xs\"
                  transition={{ type: \"spring\", stiffness: 350, damping: 26 }}
                />
              )}
              <span className=\"relative z-10 flex items-center gap-2\">
                <Coins className=\"h-3.5 w-3.5 text-[#FF6B4A]\" />
                <span>Active Capital Theses</span>
              </span>
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <AnimatePresence mode=\"wait\">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: \"easeOut\" }}
            className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6\"
          >
            {currentCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className=\"p-5 rounded-2xl bg-white border border-[#CBD5E1]/90 space-y-3.5 shadow-xs hover:shadow-md hover:border-[#00D4B2] transition-all flex flex-col justify-between text-left group\"
                >
                  <div className=\"space-y-3\">
                    {/* Sector Badge & Icon */}
                    <div className=\"flex items-center justify-between gap-1 h-6\">
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor} truncate`}>
                        {item.sector}
                      </span>
                      <Icon className=\"h-4 w-4 text-[#64748B] shrink-0\" />
                    </div>

                    <div>
                      <h3 className=\"text-sm sm:text-base font-bold text-[#0A2540] leading-snug line-clamp-2 h-10 sm:h-11 flex items-center\">
                        {item.venture}
                      </h3>
                      <div className=\"flex items-center gap-1.5 text-xs text-[#627D98] pt-1 font-mono h-5\">
                        <MapPin className=\"h-3 w-3 shrink-0 text-[#00A389]\" />
                        <span className=\"truncate\">{item.location}</span>
                        <span className=\"shrink-0\">•</span>
                        <span className=\"truncate text-[#0A2540] font-medium\">{item.stage}</span>
                      </div>
                    </div>

                    {/* Role Needed / Target Box (Locked uniform height) */}
                    <div className=\"p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1 h-[78px] sm:h-[82px] flex flex-col justify-center\">
                      <div className=\"text-[10px] font-mono uppercase tracking-wider text-[#635BFF] font-semibold flex items-center gap-1\">
                        <Briefcase className=\"h-3 w-3 shrink-0\" />
                        <span>{activeTab === \"talent\" ? \"Role Needed\" : \"Target Mandate\"}</span>
                      </div>
                      <div className=\"text-xs font-bold text-[#0A2540] leading-tight line-clamp-1\">
                        {item.roleNeeded}
                      </div>
                      <div className=\"text-[10px] text-[#475569] truncate\">
                        {item.terms}
                      </div>
                    </div>

                    {/* Authentic Founder Quote */}
                    <div className=\"relative pl-2.5 border-l-2 border-[#CBD5E1] min-h-[68px] sm:min-h-[74px] flex items-start\">
                      <p className=\"text-[11.5px] text-[#334155] leading-relaxed italic line-clamp-3\">
                        {item.quote}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className=\"pt-3 border-t border-[#F1F5F9] mt-auto flex items-center justify-between\">
                    <span className=\"text-[10.5px] font-medium text-[#00A389] flex items-center gap-1\">
                      <span className=\"w-1.5 h-1.5 rounded-full bg-[#00A389] animate-pulse shrink-0\" />
                      Active
                    </span>
                    <Link
                      href={item.href}
                      className=\"inline-flex items-center gap-1 text-xs font-semibold text-[#635BFF] hover:text-[#4F46E5] transition-colors group-hover:translate-x-0.5\"
                    >
                      <span>Connect</span>
                      <ArrowRight className=\"h-3 w-3 transition-transform\" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* View All Links Footer Banner */}
        <div className=\"pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-medium text-[#64748B]\">
          <span>Looking for more active mandates across India?</span>
          <div className=\"flex items-center gap-4 font-semibold text-[#635BFF]\">
            <Link href=\"/network\" className=\"hover:text-[#4F46E5] hover:underline flex items-center gap-1\">
              <span>View all Co-Founder Mandates</span>
              <ArrowRight className=\"h-3 w-3\" />
            </Link>
            <span>•</span>
            <Link href=\"/capital\" className=\"hover:text-[#4F46E5] hover:underline flex items-center gap-1\">
              <span>View all Investor Theses</span>
              <ArrowRight className=\"h-3 w-3\" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
