"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { submitStartupCapitalRequest } from "@/lib/actions";
import {
  ArrowLeft,
  Building2,
  Lock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Send,
  Rocket,
  TrendingUp,
  DollarSign,
} from "lucide-react";

export default function PostCapitalRequirementPage() {
  const [startupName, setStartupName] = useState("");
  const [founderName, setFounderName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sector, setSector] = useState("Manufacturing & Hardware");
  const [currentStage, setCurrentStage] = useState("Early Revenue / Pilot");
  const [targetCapital, setTargetCapital] = useState("₹25 Lakhs – ₹50 Lakhs");
  const [capitalUse, setCapitalUse] = useState("");
  const [pitchDeckUrl, setPitchDeckUrl] = useState("");
  const [thesis, setThesis] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  const capitalTiers = [
    "₹10 Lakhs – ₹25 Lakhs",
    "₹25 Lakhs – ₹50 Lakhs",
    "₹50 Lakhs – ₹1 Crore",
    "₹1 Crore – ₹3 Crore",
    "₹3 Crore – ₹5 Crore+",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent spam rejection
    setFormStatus("submitting");

    try {
      const res = await submitStartupCapitalRequest({
        startupName,
        founderName,
        email,
        phone,
        sector,
        currentStage,
        targetCapital,
        capitalUse,
        pitchDeckUrl,
        thesis,
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
      setFormMessage("Failed to submit capital requirement. Please email join@1008.network directly.");
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
            <ShieldCheck className="h-3.5 w-3.5" /> Mutual NDA Covered
          </span>
        </div>

        {/* Header Block */}
        <div className="space-y-3 mb-8">
          <Badge variant="indigo" size="sm">
            For Startups & Founders Raising Capital
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Post Startup Capital Requirement
          </h1>
          <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
            Connect directly with verified angel investors, family offices, and corporate operators looking to deploy capital in high-conviction Indian businesses. 1008 Network conducts operational vetting and introduces aligned capital with zero placement retainers.
          </p>
        </div>

        {/* Target-Based Raise Policy Note */}
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-xs font-mono text-[#065F46] mb-8">
          <DollarSign className="h-4 w-4 text-[#059669] shrink-0" />
          <span>
            <strong>Target-Based Campaign:</strong> Your capital requirement remains active and open to syndicate allocations until your target funding goal is achieved.
          </span>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-10 shadow-xs">
          {formStatus === "success" ? (
            <div className="py-12 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center border border-[#A7F3D0]">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540]">Capital Requirement Submitted</h3>
              <p className="text-xs sm:text-sm text-[#425466] max-w-md mx-auto leading-relaxed">
                {formMessage}
              </p>
              <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] text-xs text-[#425466] max-w-md mx-auto text-left font-sans space-y-1">
                <div>• Startup: <strong>{startupName}</strong></div>
                <div>• Sector: <strong>{sector}</strong></div>
                <div>• Capital Target: <strong>{targetCapital}</strong></div>
                <div>• Stage: <strong>{currentStage}</strong></div>
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
                  Post Another Requirement
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot Spam Trap */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="company_url_check"
                  tabIndex={-1}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* Startup & Founder Details */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-mono border-b border-[#F1F4F8] pb-2">
                  1. Startup & Founder Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Startup / Venture Name"
                    required
                    placeholder="e.g. MedFlow Diagnostics"
                    value={startupName}
                    onChange={(e) => setStartupName(e.target.value)}
                  />
                  <Input
                    label="Founder / Primary Contact Name"
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    label="Phone / WhatsApp"
                    required
                    placeholder="+91 98111 22233"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              {/* Capital & Operational Parameters */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0A2540] font-mono border-b border-[#F1F4F8] pb-2">
                  2. Capital Target & Venture Stage
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Select
                    label="Industry Sector"
                    required
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                  >
                    <option value="Manufacturing & Hardware">Manufacturing & Hardware</option>
                    <option value="Healthcare & BioPharma">Healthcare & Diagnostics</option>
                    <option value="E-Commerce & D2C Brands">E-Commerce & D2C Brands</option>
                    <option value="Tech, AI & Enterprise SaaS">Tech, AI & Enterprise SaaS</option>
                    <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
                    <option value="Hospitality & Food Services">Hospitality & Food Services</option>
                    <option value="CleanTech, Solar & EV">CleanTech, Solar & EV</option>
                    <option value="Education & Infrastructure">Education & Infrastructure</option>
                    <option value="Other Industry">Other Domain</option>
                  </Select>

                  <Select
                    label="Current Venture Stage"
                    required
                    value={currentStage}
                    onChange={(e) => setCurrentStage(e.target.value)}
                  >
                    <option value="Idea & Validated Thesis">Idea & Validated Thesis</option>
                    <option value="Prototype / Working MVP">Prototype / Working MVP</option>
                    <option value="Early Revenue / Pilot Customers">Early Revenue / Pilot Customers</option>
                    <option value="Scaling Unit Economics">Scaling Unit Economics</option>
                  </Select>

                  <Select
                    label="Target Capital Needed"
                    required
                    value={targetCapital}
                    onChange={(e) => setTargetCapital(e.target.value)}
                  >
                    {capitalTiers.map((tier) => (
                      <option key={tier} value={tier}>
                        {tier}
                      </option>
                    ))}
                  </Select>
                </div>

                <Input
                  label="Primary Deployment Scope"
                  required
                  placeholder="e.g. Setting up semi-automated manufacturing line, procuring raw inventory, hiring 2 core engineers..."
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
                  placeholder="Explain what specific bottleneck your startup solves, current customer traction/revenue numbers, and why this is a high-conviction opportunity for investors..."
                  value={thesis}
                  onChange={(e) => setThesis(e.target.value)}
                />
              </div>

              {formStatus === "error" && (
                <p className="text-xs text-red-500 font-semibold">{formMessage}</p>
              )}

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-[#E6E8EB] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs text-[#627D98]">
                  <Lock className="h-3.5 w-3.5 text-[#059669]" />
                  <span>Held in strict confidentiality under 1008 Mutual NDA.</span>
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={formStatus === "submitting"}
                  rightIcon={<Send className="h-4 w-4" />}
                  className="w-full sm:w-auto font-semibold px-8 shadow-xs"
                >
                  Publish Capital Requirement
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Facilitator Notice Footer */}
        <div className="mt-8 p-4 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] text-xs text-[#627D98] space-y-1.5">
          <div className="flex items-center gap-2 text-[#0A2540] font-semibold">
            <ShieldCheck className="h-4 w-4 text-[#635BFF]" />
            <span>How Deal Execution Works:</span>
          </div>
          <p className="text-[11px] leading-relaxed text-[#425466]">
            1008 Network operates strictly as a discovery and networking facilitator. When your target round allocation is soft-committed, we coordinate a combined founder-investor deal conference. All definitive legal contracts, terms, and funds are executed directly between the founders and investors following mutual due diligence.
          </p>
        </div>
      </div>
    </div>
  );
}
