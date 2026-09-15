"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { submitInvestorProfile } from "@/lib/actions";
import {
  ArrowLeft,
  TrendingUp,
  Lock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  PieChart,
  DollarSign,
  UserCheck,
  Building2,
  Factory,
  HeartPulse,
  Hotel,
  GraduationCap,
  ShoppingBag,
  Cpu,
} from "lucide-react";

export default function RegisterInvestorPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [investorType, setInvestorType] = useState("Angel Investor / CXO");
  const [capitalAmount, setCapitalAmount] = useState("₹10 Lakhs – ₹25 Lakhs");
  const [riskAppetite, setRiskAppetite] = useState("Balanced Growth (Operating Cashflows)");
  const [selectedSectors, setSelectedSectors] = useState<string[]>([
    "Manufacturing & Industrial",
    "Healthcare",
  ]);
  const [notes, setNotes] = useState("");
  const [honeypot, setHoneypot] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent spam rejection
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

  return (
    <div className="pt-28 pb-20 bg-[#FDFDFE] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/capital"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#627D98] hover:text-[#0A2540] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Capital Network
          </Link>
          <span className="text-xs font-mono text-[#059669] font-bold flex items-center gap-1 bg-[#ECFDF5] px-2.5 py-1 rounded-md border border-[#A7F3D0]">
            <ShieldCheck className="h-3.5 w-3.5" /> Mutual Confidentiality Standard
          </span>
        </div>

        {/* Header Block */}
        <div className="space-y-3 mb-8">
          <Badge variant="cyan" size="sm">
            For Individuals, Working Professionals & Angels Looking to Invest
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Register in the 1008 Investor & Syndicate Pool
          </h1>
          <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
            Anyone can co-invest in high-conviction startups. Register your deployment preferences (from ₹2L to ₹5Cr+) to receive vetted deal allocations curated to your sector and risk appetite, de-risked by 1008 Network&apos;s operational management.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-10 shadow-xs">
          {formStatus === "success" ? (
            <div className="py-12 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center border border-[#A7F3D0]">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540]">Investor Profile Registered</h3>
              <p className="text-xs sm:text-sm text-[#425466] max-w-md mx-auto leading-relaxed">
                {formMessage}
              </p>
              <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] text-xs text-[#425466] max-w-md mx-auto text-left font-sans space-y-1">
                <div>• Allocation Range: <strong>{capitalAmount}</strong></div>
                <div>• Risk Profile: <strong>{riskAppetite}</strong></div>
                <div>• Sectors: <strong>{selectedSectors.join(", ")}</strong></div>
              </div>
              <div className="pt-4 flex items-center justify-center gap-3">
                <Button href="/capital" variant="primary" size="sm">
                  Return to Capital Network
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setFormStatus("idle")}
                >
                  Update Preferences
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Honeypot Spam Trap */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="work_phone_aux"
                  tabIndex={-1}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
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
                  <Select
                    label="Investor Background Category"
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
                  label="Specific Mandate or Strategic Value Add (Optional)"
                  placeholder="e.g. Interested in manufacturing plants in Haryana/NCR, seeking predictable quarterly cash distributions, or can provide enterprise supply chain connections..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              {formStatus === "error" && (
                <p className="text-xs text-red-500 font-semibold">{formMessage}</p>
              )}

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-[#E6E8EB] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#627D98] flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 text-[#059669]" />
                  <span>Confidential & private under Mutual NDA. No unsolicited spam.</span>
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={formStatus === "submitting"}
                  rightIcon={<UserCheck className="h-4 w-4" />}
                  className="w-full sm:w-auto font-semibold px-8 bg-[#00A389] hover:bg-[#008770] border-[#00A389]"
                >
                  Register Profile
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
