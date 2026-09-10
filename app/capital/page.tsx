"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { DealCard } from "@/components/capital/DealCard";
import { EOIModal } from "@/components/capital/EOIModal";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { initialDealCards } from "@/data/dealCards";
import { submitInvestorProfile } from "@/lib/actions";
import { DealCard as DealCardType } from "@/lib/types";
import {
  TrendingUp,
  ShieldCheck,
  Building2,
  Factory,
  HeartPulse,
  Hotel,
  GraduationCap,
  ShoppingBag,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Lock,
  Layers,
  Briefcase,
  Sliders,
  DollarSign,
  PieChart,
} from "lucide-react";

export default function CapitalPage() {
  // Deal Modal state
  const [selectedDeal, setSelectedDeal] = useState<DealCardType | null>(null);
  const [eoiModalOpen, setEoiModalOpen] = useState(false);
  const [founderModalOpen, setFounderModalOpen] = useState(false);

  // Matchmaking Intake Form state
  const [capitalAmount, setCapitalAmount] = useState("₹10 Lakhs – ₹25 Lakhs");
  const [riskAppetite, setRiskAppetite] = useState("Balanced Growth (Operating Cashflows)");
  const [selectedSectors, setSelectedSectors] = useState<string[]>([
    "Manufacturing & Industrial",
    "Healthcare",
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [investorType, setInvestorType] = useState("Angel Investor / CXO");
  const [notes, setNotes] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  const capitalTiers = [
    "₹2 Lakhs – ₹10 Lakhs",
    "₹10 Lakhs – ₹25 Lakhs",
    "₹25 Lakhs – ₹50 Lakhs",
    "₹50 Lakhs – ₹1 Crore",
    "₹1 Crore – ₹5 Crore",
    "₹5 Crore+",
  ];

  const riskProfiles = [
    {
      title: "Conservative & Asset-Backed",
      desc: "Backed by tangible physical assets, real estate leases, industrial plants, hospitals, hotels & machinery.",
      badge: "Asset-Heavy & De-risked",
    },
    {
      title: "Balanced Growth (Operating Cashflows)",
      desc: "Operating businesses with proven distribution, FMCG supply chains, e-commerce brands & predictable unit economics.",
      badge: "Operating Profitability",
    },
    {
      title: "High-Growth & Disruptive Tech",
      desc: "Scalable software, B2B marketplaces, FinTech infrastructure & AI platforms with exponential upside.",
      badge: "High Multiples",
    },
  ];

  const sectorOptions = [
    { label: "Manufacturing & Industrial", icon: Factory },
    { label: "Healthcare & Clinics", icon: HeartPulse },
    { label: "Hotels & Hospitality", icon: Hotel },
    { label: "Schools & Education", icon: GraduationCap },
    { label: "E-Commerce & D2C", icon: ShoppingBag },
    { label: "Tech, AI & SaaS", icon: Cpu },
    { label: "Open to All Sectors", icon: Sparkles },
  ];

  const toggleSector = (sector: string) => {
    if (sector === "Open to All Sectors") {
      setSelectedSectors(["Open to All Sectors"]);
      return;
    }
    const filtered = selectedSectors.filter((s) => s !== "Open to All Sectors");
    if (filtered.includes(sector)) {
      setSelectedSectors(filtered.filter((s) => s !== sector));
    } else {
      setSelectedSectors([...filtered, sector]);
    }
  };

  const handleIntakeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const res = await submitInvestorProfile({
        name,
        email,
        phone,
        investorType,
        capitalAmount,
        riskAppetite,
        preferredIndustries: selectedSectors,
        notes,
      });

      if (res.success) {
        setFormStatus("success");
        setFormMessage(res.message);
      } else {
        setFormStatus("error");
        setFormMessage(res.message);
      }
    } catch {
      setFormStatus("error");
      setFormMessage("Failed to submit profile. Please email join@1008.network directly.");
    }
  };

  const handleOpenEOI = (deal: DealCardType) => {
    setSelectedDeal(deal);
    setEoiModalOpen(true);
  };

  return (
    <div className="pt-28 pb-20 bg-white">
      {/* 1. Hero Header */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-[#E6E8EB] bg-[#F6F9FC]">
        <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[460px] bg-gradient-to-r from-[#635BFF]/12 via-[#00D4B2]/08 to-transparent blur-[130px] pointer-events-none animate-float-slow" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-l from-[#FF7043]/07 to-transparent blur-[120px] pointer-events-none animate-float-reverse" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" size="md" pulse>
              1008 Network Capital Pool & Syndicate
            </Badge>
            <span className="text-xs font-semibold text-[#627D98] hidden sm:inline-block">
              ₹2L to ₹5Cr+ Deployments
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Invest in Vetted Indian Businesses{" "}
            <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              De-Risked by Hands-On Operations.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[#425466] leading-relaxed max-w-3xl mx-auto font-normal">
            Whether you have ₹2 Lakhs or ₹5 Crores+, 1008 Network introduces high-conviction businesses tailored to your capital and risk appetite. From tangible, asset-backed manufacturing plants and healthcare facilities to high-growth tech ventures—<strong>1008 Network manages turnkey operations and governance on the ground</strong>.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              href="#matchmaker"
              size="lg"
              variant="primary"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold px-8"
            >
              Configure Investment Profile
            </Button>
            <Button
              href="#deals"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto font-semibold"
            >
              Browse Active Co-Investments
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Key Safeguards & Why Invest with 1008 Network */}
      <section className="py-20 bg-white border-b border-[#E6E8EB] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <Badge variant="emerald" size="sm">Operational Risk Mitigation</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] font-sans">
              Why 1008 Network is the Safest Way to Invest in Real Businesses
            </h2>
            <p className="text-[#425466] text-base">
              Traditional investing leaves you at the mercy of founder execution. 1008 Network actively runs the operational engine to protect and compound your capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F0F0FF] text-[#635BFF] flex items-center justify-center border border-[#E0E0FF]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540]">100% Hands-On Operational Oversight</h3>
              <p className="text-sm text-[#425466] leading-relaxed">
                We don&apos;t just wire capital and hope for the best. 1008 Network physically executes plant setup, real estate scouting, machinery procurement, vendor contracts, hiring, and compliance on the ground.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center border border-[#A7F3D0]">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540]">Skin-in-the-Game Alignment</h3>
              <p className="text-sm text-[#425466] leading-relaxed">
                1008 Network operates for shared equity upside alongside founders and investors. We earn only when the business successfully scales and generates real cash flows.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6FFFA] text-[#00A389] flex items-center justify-center border border-[#B2F5EA]">
                <PieChart className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-[#0A2540]">Any Capital Allocation & Risk Profile</h3>
              <p className="text-sm text-[#425466] leading-relaxed">
                Whether you seek steady monthly yield from asset-heavy manufacturing and hospitals or asymmetric returns from high-growth tech ventures, we match deals to your exact criteria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Matchmaking Intake Engine */}
      <section id="matchmaker" className="py-24 bg-[#F6F9FC] border-b border-[#E6E8EB] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <Badge variant="indigo" size="sm">Investor Matchmaking</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] font-sans">
              Tell Us Your Capital & Risk Appetite
            </h2>
            <p className="text-[#425466] text-base">
              Submit your criteria below. Our venture partners will hand-curate vetted business opportunities and schedule a private introductory briefing.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-10 shadow-[0_4px_16px_rgba(0,0,0,0.03)]">
            {formStatus === "success" ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center border border-[#A7F3D0]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540]">Profile Registered Successfully</h3>
                <p className="text-sm text-[#425466] max-w-md mx-auto leading-relaxed">
                  {formMessage}
                </p>
                <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] text-xs text-[#425466] max-w-md mx-auto text-left font-sans space-y-1">
                  <div>• Allocation Range: <strong>{capitalAmount}</strong></div>
                  <div>• Risk Appetite: <strong>{riskAppetite}</strong></div>
                  <div>• Sectors: <strong>{selectedSectors.join(", ")}</strong></div>
                </div>
                <div className="pt-4">
                  <Button
                    variant="secondary"
                    onClick={() => setFormStatus("idle")}
                  >
                    Update Criteria
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleIntakeSubmit} className="space-y-8">
                {/* Step 1: Capital Amount Tier */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540]">
                    1. Target Capital Deployment Amount <span className="text-[#635BFF]">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {capitalTiers.map((tier) => (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => setCapitalAmount(tier)}
                        className={`p-3 rounded-xl border text-xs font-bold transition-all text-left flex items-center justify-between ${
                          capitalAmount === tier
                            ? "bg-[#F0F0FF] border-[#635BFF] text-[#635BFF] shadow-xs"
                            : "bg-[#F6F9FC] border-[#E6E8EB] text-[#425466] hover:border-[#CBD5E1]"
                        }`}
                      >
                        <span>{tier}</span>
                        {capitalAmount === tier && <CheckCircle2 className="h-4 w-4 text-[#635BFF]" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Risk Appetite */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540]">
                    2. Preferred Risk & Return Profile <span className="text-[#635BFF]">*</span>
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {riskProfiles.map((p) => (
                      <button
                        type="button"
                        key={p.title}
                        onClick={() => setRiskAppetite(p.title)}
                        className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                          riskAppetite === p.title
                            ? "bg-[#F0F0FF] border-[#635BFF] shadow-xs"
                            : "bg-[#F6F9FC] border-[#E6E8EB] hover:border-[#CBD5E1]"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-[#E6E8EB] text-[#635BFF]">
                              {p.badge}
                            </span>
                            {riskAppetite === p.title && <CheckCircle2 className="h-4 w-4 text-[#635BFF]" />}
                          </div>
                          <div className="text-sm font-bold text-[#0A2540] mb-1">{p.title}</div>
                          <p className="text-xs text-[#425466] leading-relaxed">{p.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Industry / Sector Interests */}
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540]">
                    3. Target Sectors & Industries (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {sectorOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = selectedSectors.includes(opt.label);
                      return (
                        <button
                          type="button"
                          key={opt.label}
                          onClick={() => toggleSector(opt.label)}
                          className={`px-3.5 py-2 rounded-full border text-xs font-semibold transition-all flex items-center gap-1.5 ${
                            isSelected
                              ? "bg-[#635BFF] border-[#635BFF] text-white shadow-xs"
                              : "bg-white border-[#E6E8EB] text-[#425466] hover:border-[#CBD5E1]"
                          }`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          <span>{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 4: Contact & Investor Info */}
                <div className="space-y-4 pt-4 border-t border-[#E6E8EB]">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540]">
                    4. Your Investor Details
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      required
                      placeholder="e.g. Vikram Singhania"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                      label="Work / Accredited Email"
                      required
                      type="email"
                      placeholder="vikram@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Phone / WhatsApp"
                      required
                      placeholder="+91 98111 22233"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <div className="space-y-1.5 text-left">
                      <label className="block text-xs font-semibold text-[#0A2540]">
                        Investor Background <span className="text-[#635BFF]">*</span>
                      </label>
                      <select
                        value={investorType}
                        onChange={(e) => setInvestorType(e.target.value)}
                        className="w-full rounded-xl bg-white border border-[#E6E8EB] px-3.5 py-2.5 text-sm text-[#0A2540] focus:border-[#635BFF] focus:outline-none"
                      >
                        <option value="Angel Investor / CXO">Angel Investor / Corporate CXO</option>
                        <option value="Family Office Principal">Family Office Principal</option>
                        <option value="Business Owner / Industrialist">Business Owner / Industrialist</option>
                        <option value="NRI / Global High-Net-Worth">NRI / Global High-Net-Worth</option>
                        <option value="First-Time Business Investor">First-Time Business Investor</option>
                      </select>
                    </div>
                  </div>

                  <Textarea
                    label="Specific Preferences or Strategic Value Add (Optional)"
                    placeholder="e.g. Interested in Haryana/NCR manufacturing units, looking for steady quarterly dividends, or can offer supply chain distribution connections..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                {formStatus === "error" && (
                  <p className="text-xs text-red-500 font-semibold">{formMessage}</p>
                )}

                <div className="pt-4 border-t border-[#E6E8EB] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#627D98] flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5 text-[#059669]" />
                    <span>Confidential & strictly private. No spam, guaranteed.</span>
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={formStatus === "submitting"}
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                    className="w-full sm:w-auto font-semibold px-8"
                  >
                    Submit Investor Profile
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. Curated Live Deal Board */}
      <section id="deals" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <Badge variant="cyan" size="sm">Active Co-Investment Syndicates</Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A2540] font-sans">
              Live Vetted Businesses Open for Allocation
            </h2>
            <p className="text-[#425466] text-base sm:text-lg">
              Each deal below has been pre-screened, validated, and is actively managed by 1008 Network&apos;s turnkey operational team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialDealCards.map((deal) => (
              <DealCard
                key={deal.id}
                deal={deal}
                onExpressInterest={handleOpenEOI}
              />
            ))}
          </div>

          {/* Bottom Founder Cross-Link Banner */}
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
            <div className="space-y-2 text-center lg:text-left">
              <Badge variant="indigo" size="sm">For Entrepreneurs & Business Owners</Badge>
              <h3 className="text-2xl font-bold text-[#0A2540] font-sans">
                Have a Business Idea? Pitch to 1008 Network Like Shark Tank
              </h3>
              <p className="text-sm text-[#425466] max-w-2xl">
                Pitch your concept. If selected, 1008 Network provides complete turnkey execution (real estate, plant setup, machinery, tech & marketing) and presents your venture to our syndicate pool of investors for capital.
              </p>
            </div>
            <Button
              size="lg"
              variant="primary"
              onClick={() => setFounderModalOpen(true)}
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="shrink-0 font-semibold px-6"
            >
              Pitch Your Business Idea
            </Button>
          </div>
        </div>
      </section>

      {/* Expression of Interest Modal */}
      <EOIModal
        deal={selectedDeal}
        isOpen={eoiModalOpen}
        onClose={() => setEoiModalOpen(false)}
      />

      {/* Founder Pitch Modal */}
      <StudioApplicationModal
        isOpen={founderModalOpen}
        onClose={() => setFounderModalOpen(false)}
      />
    </div>
  );
}
