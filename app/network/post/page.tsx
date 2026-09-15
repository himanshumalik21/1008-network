"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { submitNetworkOpportunity } from "@/lib/actions";
import { submitToWeb3Forms } from "@/lib/client-submit";
import { RoleCategory, SectorCategory, LocationType, RoleType, CommitmentType, VentureStage } from "@/lib/types";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Lock,
} from "lucide-react";

export default function PostOpportunityPage() {
  const [formData, setFormData] = useState({
    founderName: "",
    founderEmail: "",
    founderLinkedin: "",
    founderPriorExperience: "",
    domainYears: 12,
    opportunityTitle: "",
    roleNeeded: "Technical Co-Founder (CTO)" as RoleCategory,
    roleType: "Co-Founder" as RoleType,
    commitment: "Full-time (Co-Founder)" as CommitmentType,
    stage: "Feasibility & MVP" as VentureStage,
    sector: "Healthcare & HealthTech" as SectorCategory,
    location: "Delhi NCR" as LocationType,
    equityOffered: "15% - 25%",
    stipendOffered: "Equity + Milestone stipend post-seed",
    skillsRequired: "",
    ventureThesis: "",
    idealCandidateProfile: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const roles: RoleCategory[] = [
    "Technical Co-Founder (CTO)",
    "Go-to-Market / Sales Co-Founder",
    "Operations & Supply Chain Lead",
    "Product & Design Partner",
    "Manufacturing & Plant Setup Head",
    "AI / ML & DeepTech Lead",
    "Finance & Legal Strategist",
    "Growth & Marketing Architect",
    "Other Domain / Specialist Role",
  ];

  const sectors: SectorCategory[] = [
    "Healthcare & HealthTech",
    "Industrial & Manufacturing",
    "Manufacturing & Industrial Plants",
    "D2C & Consumer Brands",
    "FinTech & Financial Infrastructure",
    "B2B SaaS & Enterprise",
    "CleanTech & Energy",
    "AgriTech & Rural Commerce",
    "PropTech & Real Estate",
    "Logistics & Supply Chain",
    "Hotels, Hospitality & F&B",
    "Other Sector / Cross-Industry",
  ];

  const cities: LocationType[] = [
    "Delhi NCR",
    "Bengaluru",
    "Mumbai",
    "Pune",
    "Hyderabad",
    "Chennai",
    "Ahmedabad",
    "Pan-India / Remote",
    "Other Location",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // 1. Dispatch directly via Web3Forms
      submitToWeb3Forms({
        subject: `🤝 [NEW NETWORK POSTING]: ${formData.roleNeeded} in ${formData.sector} — ${formData.founderName}`,
        name: formData.founderName,
        email: formData.founderEmail,
        replyTo: formData.founderEmail,
        data: {
          founderName: formData.founderName,
          founderEmail: formData.founderEmail,
          founderLinkedin: formData.founderLinkedin,
          founderPriorExperience: formData.founderPriorExperience,
          domainYears: `${formData.domainYears}+ Years`,
          opportunityTitle: formData.opportunityTitle,
          roleNeeded: formData.roleNeeded,
          roleType: formData.roleType,
          commitment: formData.commitment,
          stage: formData.stage,
          sector: formData.sector,
          location: formData.location,
          equityOffered: formData.equityOffered,
          stipendOffered: formData.stipendOffered,
          skillsRequired: formData.skillsRequired,
          ventureThesis: formData.ventureThesis,
          idealCandidateProfile: formData.idealCandidateProfile,
        },
      }).catch((err) => console.warn("Web3Forms background dispatch:", err));

      // 2. Server Action
      const res = await submitNetworkOpportunity({
        founderName: formData.founderName,
        founderEmail: formData.founderEmail,
        founderLinkedin: formData.founderLinkedin,
        founderPriorExperience: formData.founderPriorExperience,
        domainYears: formData.domainYears,
        opportunityTitle: formData.opportunityTitle,
        roleNeeded: formData.roleNeeded,
        sector: formData.sector,
        location: formData.location,
        equityOffered: formData.equityOffered,
        stipendOffered: formData.stipendOffered,
        ventureThesis: formData.ventureThesis,
        idealCandidateProfile: formData.idealCandidateProfile,
      });

      if (res.success) {
        setStatus("success");
        setMessage(res.message);
      } else {
        setStatus("error");
        setMessage(res.message);
      }
    } catch {
      setStatus("error");
      setMessage("Failed to submit opportunity. Please contact join@1008.network directly.");
    }
  };

  return (
    <div className="pt-28 pb-20 bg-[#FDFDFE] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/network"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#627D98] hover:text-[#0A2540] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Partner Network
          </Link>
        </div>

        <div className="space-y-3 mb-8">
          <Badge variant="indigo" size="sm" pulse>Post a Requirement</Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A2540] font-sans tracking-tight">
            Find Your Co-Founder or Startup Partner
          </h1>
          <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
            Submit your venture requirement confidentially. Approved listings are published on the 1008 board for 60 days and matched with vetted operators across India.
          </p>
        </div>

        {status === "success" ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#A7F3D0] text-center space-y-5 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto border border-[#A7F3D0]">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#0A2540]">Listing Submitted for Review</h3>
              <p className="text-sm text-[#425466] max-w-md mx-auto leading-relaxed">{message}</p>
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] text-xs text-[#627D98] max-w-md mx-auto">
                Our editorial team verifies all founder credentials within 24 business hours to ensure high signal across the network.
              </div>
            </div>
            <div className="pt-2 flex items-center justify-center gap-3">
              <Button href="/network" variant="primary" size="md" className="font-semibold">
                Return to Network Board
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-3xl bg-white border border-[#E6E8EB] p-6 sm:p-8 space-y-6 shadow-xs">
            {/* Section 1: Founder Identity */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E6E8EB] pb-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#635BFF] font-bold">
                  1. Domain Originator / Founder Profile
                </h3>
                <span className="text-[11px] font-mono text-[#829AB1]">Confidential & Verified</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Founder Full Name"
                  required
                  placeholder="e.g. Rajesh S."
                  value={formData.founderName}
                  onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                />
                <Input
                  label="Work Email"
                  required
                  type="email"
                  placeholder="rajesh@domain.com"
                  value={formData.founderEmail}
                  onChange={(e) => setFormData({ ...formData, founderEmail: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="LinkedIn Profile URL"
                  required
                  placeholder="https://linkedin.com/in/username"
                  value={formData.founderLinkedin}
                  onChange={(e) => setFormData({ ...formData, founderLinkedin: e.target.value })}
                />
                <Input
                  label="Years of Domain Experience"
                  required
                  type="number"
                  min={1}
                  max={45}
                  value={formData.domainYears}
                  onChange={(e) => setFormData({ ...formData, domainYears: parseInt(e.target.value) || 0 })}
                />
              </div>

              <Textarea
                label="Your Operating Background & Domain Depth"
                required
                rows={3}
                placeholder="e.g. 18 years running biopharma and hospital supply chains across India & APAC; former Director of Supply Chain at Fortis Healthcare..."
                value={formData.founderPriorExperience}
                onChange={(e) => setFormData({ ...formData, founderPriorExperience: e.target.value })}
              />
            </div>

            {/* Section 2: Opportunity Details */}
            <div className="space-y-4 pt-4 border-t border-[#E6E8EB]">
              <div className="flex items-center justify-between border-b border-[#E6E8EB] pb-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#635BFF] font-bold">
                  2. Role & Partnership Specifications
                </h3>
              </div>

              <Input
                label="Opportunity Headline / Title"
                required
                placeholder="e.g. Technical Co-Founder (CTO) for AI-Driven Clinical Trial Logistics"
                value={formData.opportunityTitle}
                onChange={(e) => setFormData({ ...formData, opportunityTitle: e.target.value })}
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#627D98]">
                    Role Needed <span className="text-[#F4511E]">*</span>
                  </label>
                  <select
                    value={formData.roleNeeded}
                    onChange={(e) => setFormData({ ...formData, roleNeeded: e.target.value as RoleCategory })}
                    className="w-full bg-white border border-[#CBD5E1] rounded-xl px-3 py-2.5 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF] shadow-xs"
                  >
                    {roles.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#627D98]">
                    Role Level <span className="text-[#F4511E]">*</span>
                  </label>
                  <select
                    value={formData.roleType}
                    onChange={(e) => setFormData({ ...formData, roleType: e.target.value as RoleType })}
                    className="w-full bg-white border border-[#CBD5E1] rounded-xl px-3 py-2.5 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF] shadow-xs"
                  >
                    <option value="Co-Founder">Co-Founder</option>
                    <option value="Founding Lead">Founding Core Lead</option>
                    <option value="Head of Department">Head of Department</option>
                    <option value="Fractional CXO">Fractional CXO</option>
                    <option value="Specialist & Operator">Specialist & Operator</option>
                    <option value="Other">Other Level</option>
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#627D98]">
                    Commitment Mode <span className="text-[#F4511E]">*</span>
                  </label>
                  <select
                    value={formData.commitment}
                    onChange={(e) => setFormData({ ...formData, commitment: e.target.value as CommitmentType })}
                    className="w-full bg-white border border-[#CBD5E1] rounded-xl px-3 py-2.5 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF] shadow-xs"
                  >
                    <option value="Full-time (Co-Founder)">Full-time (Co-Founder)</option>
                    <option value="Full-time (Core Lead)">Full-time (Core Lead)</option>
                    <option value="Fractional / Part-time">Fractional / Part-time</option>
                    <option value="Advisory / Milestone">Advisory / Milestone</option>
                    <option value="Other / Flexible">Other / Flexible</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#627D98]">
                    Sector <span className="text-[#F4511E]">*</span>
                  </label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value as SectorCategory })}
                    className="w-full bg-white border border-[#CBD5E1] rounded-xl px-3 py-2.5 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF] shadow-xs"
                  >
                    {sectors.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#627D98]">
                    Location <span className="text-[#F4511E]">*</span>
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value as LocationType })}
                    className="w-full bg-white border border-[#CBD5E1] rounded-xl px-3 py-2.5 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF] shadow-xs"
                  >
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#627D98]">
                    Current Venture Stage <span className="text-[#F4511E]">*</span>
                  </label>
                  <select
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value as VentureStage })}
                    className="w-full bg-white border border-[#CBD5E1] rounded-xl px-3 py-2.5 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF] shadow-xs"
                  >
                    <option value="Idea / Pre-Seed">Idea / Pre-Seed</option>
                    <option value="Feasibility & MVP">Feasibility & MVP</option>
                    <option value="Early Revenue (₹25L - ₹1Cr)">Early Revenue (₹25L - ₹1Cr)</option>
                    <option value="Scaling & Growth (₹1Cr - ₹10Cr)">Scaling & Growth (₹1Cr - ₹10Cr)</option>
                    <option value="Other Stage">Other Stage</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Equity Range Offered"
                  required
                  placeholder="e.g. 15% - 25%"
                  value={formData.equityOffered}
                  onChange={(e) => setFormData({ ...formData, equityOffered: e.target.value })}
                />
                <Input
                  label="Salary / Living Stipend (Post-Seed)"
                  placeholder="e.g. ₹1.5L - ₹2.5L/mo post-seed"
                  value={formData.stipendOffered}
                  onChange={(e) => setFormData({ ...formData, stipendOffered: e.target.value })}
                />
              </div>

              <Input
                label="Target Skills / Tech Stack (Comma separated)"
                placeholder="e.g. Python, FastAPI, IoT Telemetry, PostgreSQL, HIPAA/GAMP5"
                value={formData.skillsRequired}
                onChange={(e) => setFormData({ ...formData, skillsRequired: e.target.value })}
              />

              <Textarea
                label="Venture Thesis & Ground Problem Statement"
                required
                rows={3}
                placeholder="Describe what product or facility you are building, the specific bottleneck you are solving, and early validation..."
                value={formData.ventureThesis}
                onChange={(e) => setFormData({ ...formData, ventureThesis: e.target.value })}
              />

              <Textarea
                label="Ideal Candidate Profile & Key Criteria"
                required
                rows={3}
                placeholder="e.g. 8+ years distributed systems, experience with IoT telemetry, based in Gurgaon or willing to relocate, experience leading small sprint teams..."
                value={formData.idealCandidateProfile}
                onChange={(e) => setFormData({ ...formData, idealCandidateProfile: e.target.value })}
              />
            </div>

            {status === "error" && <p className="text-xs text-red-500 font-medium">{message}</p>}

            <div className="pt-4 border-t border-[#E6E8EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-xs text-[#627D98] font-mono">
                <ShieldCheck className="h-4 w-4 text-[#059669]" />
                <span>Zero placement fees • Mutual NDA protection</span>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={status === "submitting"}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="font-semibold text-sm px-8 shadow-sm"
              >
                Submit Requirement (Free)
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
