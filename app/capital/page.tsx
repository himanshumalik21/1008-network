"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { submitInvestorProfile, submitStartupCapitalRequest } from "@/lib/actions";
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
  PieChart,
  Clock,
  UserCheck,
  Rocket,
  DollarSign,
  AlertCircle,
  HelpCircle,
  Users,
} from "lucide-react";

export default function CapitalPage() {
  // Active Tab: "investor" | "startup"
  const [activeTab, setActiveTab] = useState<"investor" | "startup">("investor");

  // Investor Form State
  const [capitalAmount, setCapitalAmount] = useState("₹10 Lakhs – ₹25 Lakhs");
  const [riskAppetite, setRiskAppetite] = useState("Balanced Growth (Operating Cashflows)");
  const [selectedSectors, setSelectedSectors] = useState<string[]>([
    "Manufacturing & Industrial",
    "Healthcare",
  ]);
  const [investorName, setInvestorName] = useState("");
  const [investorEmail, setInvestorEmail] = useState("");
  const [investorPhone, setInvestorPhone] = useState("");
  const [investorType, setInvestorType] = useState("Angel Investor / CXO");
  const [investorNotes, setInvestorNotes] = useState("");
  const [investorHoneypot, setInvestorHoneypot] = useState("");
  const [investorStatus, setInvestorStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [investorMessage, setInvestorMessage] = useState("");

  // Startup Capital Form State
  const [startupName, setStartupName] = useState("");
  const [founderName, setFounderName] = useState("");
  const [startupEmail, setStartupEmail] = useState("");
  const [startupPhone, setStartupPhone] = useState("");
  const [startupSector, setStartupSector] = useState("Manufacturing & Hardware");
  const [startupStage, setStartupStage] = useState("Early Revenue / Pilot");
  const [targetCapital, setTargetCapital] = useState("₹25 Lakhs – ₹50 Lakhs");
  const [capitalUse, setCapitalUse] = useState("Manufacturing plant setup & machinery procurement");
  const [pitchDeckUrl, setPitchDeckUrl] = useState("");
  const [startupThesis, setStartupThesis] = useState("");
  const [startupHoneypot, setStartupHoneypot] = useState("");
  const [startupStatus, setStartupStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [startupMessage, setStartupMessage] = useState("");

  const capitalTiers = [
    "₹2 Lakhs – ₹10 Lakhs",
    "₹10 Lakhs – ₹25 Lakhs",
    "₹25 Lakhs – ₹50 Lakhs",
    "₹50 Lakhs – ₹1 Crore",
    "₹1 Crore – ₹5 Crore",
    "₹5 Crore+",
  ];

  const startupCapitalTiers = [
    "₹10 Lakhs – ₹25 Lakhs",
    "₹25 Lakhs – ₹50 Lakhs",
    "₹50 Lakhs – ₹1 Crore",
    "₹1 Crore – ₹3 Crore",
    "₹3 Crore – ₹5 Crore+",
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

  // Submit Investor Form
  const handleInvestorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (investorHoneypot) return; // Silent spam rejection
    setInvestorStatus("submitting");

    try {
      const res = await submitInvestorProfile({
        name: investorName,
        email: investorEmail,
        phone: investorPhone,
        investorType,
        capitalAmount,
        riskAppetite,
        preferredIndustries: selectedSectors,
        notes: investorNotes,
      });

      if (res.success) {
        setInvestorStatus("success");
        setInvestorMessage(res.message);
      } else {
        setInvestorStatus("error");
        setInvestorMessage(res.message);
      }
    } catch {
      setInvestorStatus("error");
      setInvestorMessage("Failed to submit profile. Please email join@1008.network directly.");
    }
  };

  // Submit Startup Capital Form
  const handleStartupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (startupHoneypot) return; // Silent spam rejection
    setStartupStatus("submitting");

    try {
      const res = await submitStartupCapitalRequest({
        startupName,
        founderName,
        email: startupEmail,
        phone: startupPhone,
        sector: startupSector,
        currentStage: startupStage,
        targetCapital,
        capitalUse,
        pitchDeckUrl,
        thesis: startupThesis,
      });

      if (res.success) {
        setStartupStatus("success");
        setStartupMessage(res.message);
      } else {
        setStartupStatus("error");
        setStartupMessage(res.message);
      }
    } catch {
      setStartupStatus("error");
      setStartupMessage("Failed to submit request. Please email join@1008.network directly.");
    }
  };

  return (
    <div className="pt-28 pb-20 bg-[#FDFDFE] min-h-screen">
      {/* 1. Hero Header */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-[#E6E8EB] bg-[#F6F9FC]">
        <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[460px] bg-gradient-to-r from-[#635BFF]/12 via-[#00D4B2]/08 to-[#FF7043]/06 blur-[130px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" size="md" pulse>
              1008 Capital Pool & Syndicate
            </Badge>
            <span className="text-xs font-semibold text-[#627D98] hidden sm:inline-block">
              De-risked by Hands-On Operations
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans leading-[1.15]">
            Anyone can invest in startups.{" "}
            <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              Startups find the right capital & operators.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#425466] leading-relaxed max-w-3xl mx-auto font-normal">
            Whether you want to invest capital (from ₹2 Lakhs to ₹5 Crores+) into vetted Indian businesses or you are a founder raising capital for your venture—<strong>1008 Network curates high-conviction partnerships backed by turnkey ground operations</strong>.
          </p>

          {/* Quick Dual Jump Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              onClick={() => {
                setActiveTab("investor");
                document.getElementById("intake-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              size="md"
              variant="primary"
              rightIcon={<TrendingUp className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold px-6 shadow-sm"
            >
              I Want to Invest Capital
            </Button>
            <Button
              onClick={() => {
                setActiveTab("startup");
                document.getElementById("intake-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              size="md"
              variant="secondary"
              rightIcon={<Rocket className="h-4 w-4 text-[#635BFF]" />}
              className="w-full sm:w-auto font-semibold px-6"
            >
              My Startup Needs Capital
            </Button>
            <Button
              href="#pipeline"
              size="md"
              variant="ghost"
              className="w-full sm:w-auto text-xs text-[#627D98] hover:text-[#0A2540]"
            >
              View Allocation Status ↓
            </Button>
          </div>

          {/* Quick Safeguard Metrics */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-[#627D98]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#059669]" />
              <span>Mutual NDA from Day 1</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#635BFF]" />
              <span>Zero Intermediary / Broker Fees</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Building2 className="h-3.5 w-3.5 text-[#00A389]" />
              <span>Turnkey Operational Governance</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Matchmaking & Data Collection Engine */}
      <section id="intake-section" className="py-16 sm:py-20 bg-white border-b border-[#E6E8EB] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Dual Toggle Bar */}
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
            <Badge variant="indigo" size="sm">Curated Matching Portal</Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] font-sans">
              Connect With the 1008 Capital Network
            </h2>
            <p className="text-xs sm:text-sm text-[#425466]">
              Choose your profile below. We match individual and institutional allocators with vetted startups seeking funding and operational execution.
            </p>

            <div className="pt-4 flex justify-center">
              <div className="inline-flex p-1.5 bg-[#F1F5F9] rounded-2xl border border-[#E2E8F0] shadow-2xs w-full max-w-md">
                <button
                  type="button"
                  onClick={() => setActiveTab("investor")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === "investor"
                      ? "bg-white text-[#0A2540] shadow-sm"
                      : "text-[#627D98] hover:text-[#0A2540]"
                  }`}
                >
                  <TrendingUp className="h-4 w-4 text-[#635BFF]" />
                  <span>I Want to Invest</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("startup")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === "startup"
                      ? "bg-white text-[#0A2540] shadow-sm"
                      : "text-[#627D98] hover:text-[#0A2540]"
                  }`}
                >
                  <Rocket className="h-4 w-4 text-[#00A389]" />
                  <span>Startup Seeking Capital</span>
                </button>
              </div>
            </div>
          </div>

          {/* TAB A: INVESTOR INTAKE FORM */}
          {activeTab === "investor" && (
            <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-10 shadow-sm">
              {investorStatus === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center border border-[#A7F3D0]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2540]">Investor Profile Registered</h3>
                  <p className="text-xs sm:text-sm text-[#425466] max-w-md mx-auto leading-relaxed">
                    {investorMessage}
                  </p>
                  <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] text-xs text-[#425466] max-w-md mx-auto text-left font-sans space-y-1">
                    <div>• Target Allocation: <strong>{capitalAmount}</strong></div>
                    <div>• Risk Profile: <strong>{riskAppetite}</strong></div>
                    <div>• Sectors: <strong>{selectedSectors.join(", ")}</strong></div>
                  </div>
                  <div className="pt-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setInvestorStatus("idle")}
                    >
                      Update Investment Criteria
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleInvestorSubmit} className="space-y-8">
                  {/* Honeypot Spam Trap */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="middle_name"
                      tabIndex={-1}
                      autoComplete="off"
                      value={investorHoneypot}
                      onChange={(e) => setInvestorHoneypot(e.target.value)}
                    />
                  </div>

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
                      4. Your Contact & Investor Details
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Full Name"
                        required
                        placeholder="e.g. Vikram Singhania"
                        value={investorName}
                        onChange={(e) => setInvestorName(e.target.value)}
                      />
                      <Input
                        label="Work / Personal Email"
                        required
                        type="email"
                        placeholder="vikram@domain.com"
                        value={investorEmail}
                        onChange={(e) => setInvestorEmail(e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Phone / WhatsApp"
                        required
                        placeholder="+91 98111 22233"
                        value={investorPhone}
                        onChange={(e) => setInvestorPhone(e.target.value)}
                      />
                      <Select
                        label="Investor Profile Category"
                        required
                        value={investorType}
                        onChange={(e) => setInvestorType(e.target.value)}
                      >
                        <option value="Angel Investor / CXO">Angel Investor / Corporate CXO</option>
                        <option value="Working Professional / Senior Operator">Working Professional / Senior Operator</option>
                        <option value="Family Office Principal">Family Office Principal</option>
                        <option value="Business Owner / Industrialist">Business Owner / Industrialist</option>
                        <option value="NRI / Global High-Net-Worth">NRI / Global High-Net-Worth</option>
                        <option value="First-Time Startup Investor">First-Time Startup Investor</option>
                      </Select>
                    </div>

                    <Textarea
                      label="Specific Mandate or Strategic Preferences (Optional)"
                      placeholder="e.g. Interested in manufacturing plants in North India, looking for quarterly cash flow payouts, or can open enterprise retail channels..."
                      value={investorNotes}
                      onChange={(e) => setInvestorNotes(e.target.value)}
                    />
                  </div>

                  {investorStatus === "error" && (
                    <p className="text-xs text-red-500 font-semibold">{investorMessage}</p>
                  )}

                  <div className="pt-4 border-t border-[#E6E8EB] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-[#627D98] flex items-center gap-1.5">
                      <Lock className="h-3.5 w-3.5 text-[#059669]" />
                      <span>Strictly confidential under Mutual NDA. Zero spam.</span>
                    </div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      isLoading={investorStatus === "submitting"}
                      rightIcon={<ArrowRight className="h-4 w-4" />}
                      className="w-full sm:w-auto font-semibold px-8"
                    >
                      Register Investor Profile
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB B: STARTUP SEEKING CAPITAL INTAKE FORM */}
          {activeTab === "startup" && (
            <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-10 shadow-sm">
              {startupStatus === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center border border-[#A7F3D0]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2540]">Startup Submission Received</h3>
                  <p className="text-xs sm:text-sm text-[#425466] max-w-md mx-auto leading-relaxed">
                    {startupMessage}
                  </p>
                  <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] text-xs text-[#425466] max-w-md mx-auto text-left font-sans space-y-1">
                    <div>• Venture: <strong>{startupName}</strong></div>
                    <div>• Sector: <strong>{startupSector}</strong></div>
                    <div>• Target Capital: <strong>{targetCapital}</strong></div>
                    <div>• Stage: <strong>{startupStage}</strong></div>
                  </div>
                  <div className="pt-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setStartupStatus("idle")}
                    >
                      Submit Another Application
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleStartupSubmit} className="space-y-6">
                  {/* Honeypot Spam Trap */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="company_website_url"
                      tabIndex={-1}
                      autoComplete="off"
                      value={startupHoneypot}
                      onChange={(e) => setStartupHoneypot(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Startup / Venture Name"
                      required
                      placeholder="e.g. MedFlow Diagnostics"
                      value={startupName}
                      onChange={(e) => setStartupName(e.target.value)}
                    />
                    <Input
                      label="Founder / Co-Founder Name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={founderName}
                      onChange={(e) => setFounderName(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Founder Work Email"
                      required
                      type="email"
                      placeholder="rahul@medflow.in"
                      value={startupEmail}
                      onChange={(e) => setStartupEmail(e.target.value)}
                    />
                    <Input
                      label="Phone / WhatsApp"
                      required
                      placeholder="+91 98111 22233"
                      value={startupPhone}
                      onChange={(e) => setStartupPhone(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Select
                      label="Industry Sector"
                      required
                      value={startupSector}
                      onChange={(e) => setStartupSector(e.target.value)}
                    >
                      <option value="Manufacturing & Hardware">Manufacturing & Hardware</option>
                      <option value="Healthcare & BioPharma">Healthcare & Diagnostics</option>
                      <option value="E-Commerce & D2C Brands">E-Commerce & D2C Brands</option>
                      <option value="Tech, AI & Enterprise SaaS">Tech, AI & Enterprise SaaS</option>
                      <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
                      <option value="Hospitality & Commercial Real Estate">Hospitality & Food Services</option>
                      <option value="Education & EdTech">Education & Infrastructure</option>
                      <option value="CleanTech & EV">CleanTech, Solar & EV</option>
                      <option value="Other Industry">Other Domain</option>
                    </Select>

                    <Select
                      label="Current Venture Stage"
                      required
                      value={startupStage}
                      onChange={(e) => setStartupStage(e.target.value)}
                    >
                      <option value="Idea & Problem Thesis">Idea & Validated Thesis</option>
                      <option value="Prototype / MVP Developed">Prototype / Working MVP</option>
                      <option value="Early Revenue / Pilot Customers">Early Revenue / Pilot Customers</option>
                      <option value="Scaling Profitable Unit Economics">Scaling Unit Economics</option>
                    </Select>

                    <Select
                      label="Target Capital Needed"
                      required
                      value={targetCapital}
                      onChange={(e) => setTargetCapital(e.target.value)}
                    >
                      {startupCapitalTiers.map((tier) => (
                        <option key={tier} value={tier}>
                          {tier}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <Input
                    label="Primary Use of Capital"
                    required
                    placeholder="e.g. Setting up CNC plant line, expanding inventory for Q4 retail distribution, hiring 2 core engineers..."
                    value={capitalUse}
                    onChange={(e) => setCapitalUse(e.target.value)}
                  />

                  <Input
                    label="Pitch Deck / Notion / Drive Link (Optional)"
                    placeholder="https://drive.google.com/... or https://docsend.com/..."
                    value={pitchDeckUrl}
                    onChange={(e) => setPitchDeckUrl(e.target.value)}
                  />

                  <Textarea
                    label="Venture Thesis, Traction & Market Opportunity"
                    required
                    rows={4}
                    placeholder="Briefly describe what problem your business solves, current customer traction/revenue, and what operational co-building support you need from 1008 Network..."
                    value={startupThesis}
                    onChange={(e) => setStartupThesis(e.target.value)}
                  />

                  {startupStatus === "error" && (
                    <p className="text-xs text-red-500 font-semibold">{startupMessage}</p>
                  )}

                  <div className="pt-4 border-t border-[#E6E8EB] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-[#627D98] flex items-center gap-1.5">
                      <Lock className="h-3.5 w-3.5 text-[#059669]" />
                      <span>Protected under 1008 Mutual Non-Disclosure Agreement.</span>
                    </div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      isLoading={startupStatus === "submitting"}
                      rightIcon={<ArrowRight className="h-4 w-4" />}
                      className="w-full sm:w-auto font-semibold px-8 bg-[#00A389] hover:bg-[#008770] border-[#00A389]"
                    >
                      Submit Startup for Capital
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}

        </div>
      </section>

      {/* 3. Active Co-Investments & Pipeline Status */}
      <section id="pipeline" className="py-20 bg-[#F6F9FC] border-b border-[#E6E8EB] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <Badge variant="cyan" size="sm">Co-Investment Deal Board</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] font-sans">
              Active Investments & Capital Allocation
            </h2>
            <p className="text-[#425466] text-xs sm:text-sm">
              We maintain a rigorous vetting process. Live deals will appear directly on this board once operational due diligence and capital allocation windows open for each cohort.
            </p>
          </div>

          {/* Allocation Pipeline Status Notice Card */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-white border-2 border-[#E6E8EB] p-8 sm:p-12 shadow-xs space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#635BFF]/5 rounded-bl-full pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E6E8EB]">
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#635BFF] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  Cohort Pipeline Status
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540]">
                  Next Capital Allocation Batch Under Structuring
                </h3>
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-[#F0F0FF] border border-[#E0E0FF] text-[#635BFF] text-xs font-mono font-bold self-start sm:self-auto">
                Batch Allocation: Q4 2026
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
              1008 Network conducts exhaustive ground feasibility, physical site visits, vendor verifications, and financial audit checks before listing any business for co-investment. Once allocation opens, complete deal memos, term sheets, unit economics, and operational milestones will be accessible to registered syndicate members.
            </p>

            {/* Upcoming Sectors in Pipeline */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-mono">
                Upcoming Syndicate Sectors in Due Diligence:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                  <div className="text-xs font-bold text-[#0A2540] flex items-center gap-1.5">
                    <Factory className="h-3.5 w-3.5 text-[#635BFF]" />
                    <span>Auto Components Plant</span>
                  </div>
                  <p className="text-[11px] text-[#627D98]">Haryana/NCR • Asset-Backed</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                  <div className="text-xs font-bold text-[#0A2540] flex items-center gap-1.5">
                    <HeartPulse className="h-3.5 w-3.5 text-[#059669]" />
                    <span>Diagnostic Clinics Chain</span>
                  </div>
                  <p className="text-[11px] text-[#627D98]">Delhi NCR • High Cashflow</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                  <div className="text-xs font-bold text-[#0A2540] flex items-center gap-1.5">
                    <ShoppingBag className="h-3.5 w-3.5 text-[#FF7043]" />
                    <span>D2C Wellness Supply Chain</span>
                  </div>
                  <p className="text-[11px] text-[#627D98]">Pan-India • Operating Profit</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                  <div className="text-xs font-bold text-[#0A2540] flex items-center gap-1.5">
                    <Cpu className="h-3.5 w-3.5 text-[#00A389]" />
                    <span>Logistics ERP Software</span>
                  </div>
                  <p className="text-[11px] text-[#627D98]">Bengaluru • Scalable SaaS</p>
                </div>
              </div>
            </div>

            {/* Action CTA in pipeline card */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E6E8EB]">
              <div className="text-xs text-[#627D98]">
                Get priority allocation access before deals go live.
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button
                  onClick={() => {
                    setActiveTab("investor");
                    document.getElementById("intake-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="primary"
                  size="sm"
                  className="w-full sm:w-auto text-xs font-semibold"
                >
                  Join Investor Syndicate Waitlist
                </Button>
                <Button
                  onClick={() => {
                    setActiveTab("startup");
                    document.getElementById("intake-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="secondary"
                  size="sm"
                  className="w-full sm:w-auto text-xs font-semibold"
                >
                  Pitch Startup
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why 1008 Capital is the Safest Way to Invest */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <Badge variant="emerald" size="sm">Operational Risk Mitigation</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] font-sans">
              Why 1008 Network is the Safest Way to Invest in Real Businesses
            </h2>
            <p className="text-[#425466] text-xs sm:text-sm">
              Traditional investing leaves you at the mercy of founder execution. 1008 Network actively runs the operational engine to protect and compound your capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F0F0FF] text-[#635BFF] flex items-center justify-center border border-[#E0E0FF]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0A2540]">100% Hands-On Operational Oversight</h3>
              <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                We don&apos;t just wire capital and hope for the best. 1008 Network physically executes plant setup, real estate scouting, machinery procurement, vendor contracts, hiring, and compliance on the ground.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center border border-[#A7F3D0]">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0A2540]">Skin-in-the-Game Alignment</h3>
              <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                1008 Network operates for shared equity upside alongside founders and investors. We earn only when the business successfully scales and generates real cash flows.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E6FFFA] text-[#00A389] flex items-center justify-center border border-[#B2F5EA]">
                <PieChart className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0A2540]">Any Capital Allocation & Risk Profile</h3>
              <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                Whether you seek steady monthly yield from asset-heavy manufacturing and hospitals or asymmetric returns from high-growth tech ventures, we match deals to your exact criteria.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
