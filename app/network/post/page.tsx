"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { submitNetworkOpportunity } from "@/lib/actions";
import { submitToWeb3Forms } from "@/lib/client-submit";
import { RoleCategory, SectorCategory, LocationType, NetworkPostData } from "@/lib/types";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function PostOpportunityPage() {
  const [formData, setFormData] = useState<NetworkPostData>({
    founderName: "",
    founderEmail: "",
    founderLinkedin: "",
    founderPriorExperience: "",
    domainYears: 10,
    opportunityTitle: "",
    roleNeeded: "Technical Co-Founder (CTO)",
    sector: "Healthcare & HealthTech",
    location: "Delhi NCR",
    equityOffered: "15% - 25%",
    stipendOffered: "Equity + Milestone stipends",
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
    "Finance & Legal Strategist",
    "Growth & Marketing Architect",
  ];

  const sectors: SectorCategory[] = [
    "Healthcare & HealthTech",
    "Logistics & Supply Chain",
    "D2C & Consumer Brands",
    "B2B SaaS & Enterprise",
    "FinTech & Financial Infrastructure",
    "Industrial & Manufacturing",
    "PropTech & Real Estate",
    "CleanTech & Energy",
  ];

  const cities: LocationType[] = [
    "Delhi NCR",
    "Bengaluru",
    "Mumbai",
    "Pune",
    "Hyderabad",
    "Chennai",
    "Pan-India / Remote",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // 1. Dispatch directly via Web3Forms
      submitToWeb3Forms({
        subject: `🤝 [NEW NETWORK POSTING]: ${formData.roleNeeded} in ${formData.sector} - ${formData.founderName}`,
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
          sector: formData.sector,
          location: formData.location,
          equityOffered: formData.equityOffered,
          stipendOffered: formData.stipendOffered,
          ventureThesis: formData.ventureThesis,
          idealCandidateProfile: formData.idealCandidateProfile,
        },
      }).catch((err) => console.warn("Web3Forms background dispatch:", err));

      // 2. Server Action
      const res = await submitNetworkOpportunity(formData);
      if (res.success) {
        setStatus("success");
        setMessage(res.message);
      } else {
        setStatus("error");
        setMessage(res.message);
      }
    } catch {
      setStatus("error");
      setMessage("Failed to submit opportunity. Please contact join@1008.network.");
    }
  };

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
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
          <Badge variant="indigo" size="sm" pulse>60-Day Opportunity Listing</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] font-sans">
            Post an Opportunity on 1008 Network
          </h1>
          <p className="text-sm text-[#425466] leading-relaxed">
            Find your missing technical CTO, sales lead, or operational co-founder. All approved listings remain live for 60 days.
          </p>
        </div>

        {status === "success" ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F6F9FC] border border-[#E6E8EB] text-center space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-[#059669] flex items-center justify-center mx-auto border border-emerald-500/25">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#0A2540]">Listing Submitted for Review</h3>
            <p className="text-sm text-[#425466] max-w-md mx-auto leading-relaxed">{message}</p>
            <div className="pt-4 flex items-center justify-center gap-3">
              <Button href="/network" variant="secondary" size="md">
                Return to Network Board
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-3xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 space-y-6 shadow-xs">
            {/* Section 1: Founder Identity */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#627D98] font-bold">
                1. Domain Founder Credentials
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Founder Name"
                  required
                  placeholder="e.g. Ramesh Iyer"
                  value={formData.founderName}
                  onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                />
                <Input
                  label="Direct Email"
                  required
                  type="email"
                  placeholder="ramesh@domain.com"
                  value={formData.founderEmail}
                  onChange={(e) => setFormData({ ...formData, founderEmail: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="LinkedIn URL"
                  required
                  placeholder="linkedin.com/in/ramesh"
                  value={formData.founderLinkedin}
                  onChange={(e) => setFormData({ ...formData, founderLinkedin: e.target.value })}
                />
                <Input
                  label="Years of Domain Experience"
                  required
                  type="number"
                  min={3}
                  max={40}
                  value={formData.domainYears}
                  onChange={(e) => setFormData({ ...formData, domainYears: parseInt(e.target.value) || 0 })}
                />
              </div>

              <Textarea
                label="Your Operating Background & Prior Leadership Roles"
                required
                placeholder="e.g. 15 years running FMCG supply chain at Marico; managed 4 manufacturing plants..."
                value={formData.founderPriorExperience}
                onChange={(e) => setFormData({ ...formData, founderPriorExperience: e.target.value })}
              />
            </div>

            {/* Section 2: Opportunity Details */}
            <div className="space-y-4 pt-4 border-t border-[#E6E8EB]">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#627D98] font-bold">
                2. Role & Opportunity Requirements
              </h3>

              <Input
                label="Opportunity Headline / Title"
                required
                placeholder="e.g. Technical Co-Founder (CTO) for AI-Driven Clinical Trial Logistics"
                value={formData.opportunityTitle}
                onChange={(e) => setFormData({ ...formData, opportunityTitle: e.target.value })}
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-mono font-medium uppercase tracking-wider text-[#425466]">
                    Role Needed <span className="text-[#635BFF]">*</span>
                  </label>
                  <select
                    value={formData.roleNeeded}
                    onChange={(e) => setFormData({ ...formData, roleNeeded: e.target.value as RoleCategory })}
                    className="w-full bg-white border border-[#CBD5E1] rounded-xl px-3 py-2.5 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/10 shadow-2xs"
                  >
                    {roles.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-mono font-medium uppercase tracking-wider text-[#425466]">
                    Sector <span className="text-[#635BFF]">*</span>
                  </label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value as SectorCategory })}
                    className="w-full bg-white border border-[#CBD5E1] rounded-xl px-3 py-2.5 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/10 shadow-2xs"
                  >
                    {sectors.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-mono font-medium uppercase tracking-wider text-[#425466]">
                    City / Location <span className="text-[#635BFF]">*</span>
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value as LocationType })}
                    className="w-full bg-white border border-[#CBD5E1] rounded-xl px-3 py-2.5 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF] focus:ring-2 focus:ring-[#635BFF]/10 shadow-2xs"
                  >
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
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
                  label="Salary / Stipend Post Seed"
                  placeholder="e.g. ₹1.5L/mo post-seed"
                  value={formData.stipendOffered}
                  onChange={(e) => setFormData({ ...formData, stipendOffered: e.target.value })}
                />
              </div>

              <Textarea
                label="Venture Thesis & Problem Statement"
                required
                placeholder="Describe what product you are building, the customer segment, and the quantifiable bottleneck you solve..."
                value={formData.ventureThesis}
                onChange={(e) => setFormData({ ...formData, ventureThesis: e.target.value })}
              />

              <Textarea
                label="Ideal Candidate Profile"
                required
                placeholder="e.g. 8+ years distributed systems, experience with IoT telemetry, based in Gurgaon or willing to relocate..."
                value={formData.idealCandidateProfile}
                onChange={(e) => setFormData({ ...formData, idealCandidateProfile: e.target.value })}
              />
            </div>

            {status === "error" && <p className="text-xs text-red-500">{message}</p>}

            <div className="pt-4 border-t border-[#E6E8EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#627D98] flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#635BFF]" />
                <span>60-Day Active Board Standard</span>
              </span>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={status === "submitting"}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="font-semibold text-sm px-6"
              >
                Submit for Editorial Approval
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
