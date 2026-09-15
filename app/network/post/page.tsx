"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { submitNetworkOpportunity } from "@/lib/actions";
import { submitToWeb3Forms } from "@/lib/client-submit";
import { isValidEmail, isValidUrl, sanitizeInput, checkClientRateLimit } from "@/lib/validation";
import { RoleCategory, SectorCategory, LocationType, RoleType, CommitmentType, VentureStage } from "@/lib/types";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Lock,
} from "lucide-react";

export default function PostOpportunityPage() {
  const [formData, setFormData] = useState({
    founderName: "",
    founderEmail: "",
    founderLinkedin: "",
    founderPriorExperience: "",
    domainYears: 10,
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
    // Spam bot honeypot trap
    _hp_trap: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
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

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.founderName.trim() || formData.founderName.trim().length < 2) {
      errors.founderName = "Please enter your full name (minimum 2 characters).";
    }

    if (!isValidEmail(formData.founderEmail)) {
      errors.founderEmail = "Please enter a valid work email address.";
    }

    if (!isValidUrl(formData.founderLinkedin)) {
      errors.founderLinkedin = "Please provide a valid LinkedIn or profile URL (e.g. linkedin.com/in/username).";
    }

    if (formData.domainYears < 0 || formData.domainYears > 50) {
      errors.domainYears = "Please enter valid years of experience (1-50).";
    }

    if (!formData.founderPriorExperience.trim() || formData.founderPriorExperience.trim().length < 15) {
      errors.founderPriorExperience = "Please provide a brief background of your industry depth (min 15 characters).";
    }

    if (!formData.opportunityTitle.trim() || formData.opportunityTitle.trim().length < 8) {
      errors.opportunityTitle = "Please provide a descriptive opportunity headline (min 8 characters).";
    }

    if (!formData.equityOffered.trim()) {
      errors.equityOffered = "Please specify the equity range offered (e.g. 15% - 25%).";
    }

    if (!formData.ventureThesis.trim() || formData.ventureThesis.trim().length < 25) {
      errors.ventureThesis = "Please elaborate on your venture thesis & ground problem (min 25 characters).";
    }

    if (!formData.idealCandidateProfile.trim() || formData.idealCandidateProfile.trim().length < 20) {
      errors.idealCandidateProfile = "Please describe the candidate criteria and responsibilities (min 20 characters).";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      setMessage("Please resolve the highlighted validation errors before submitting.");
      return;
    }

    // Rate limit check
    if (!checkClientRateLimit("post_opportunity", 5)) {
      setStatus("error");
      setMessage("Please wait a few seconds before submitting again.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      // 1. Dispatch directly to join@1008.network via Web3Forms
      await submitToWeb3Forms({
        subject: `🤝 [MANUAL REVIEW REQUIRED - NETWORK POSTING]: ${formData.roleNeeded} in ${formData.sector} — ${formData.founderName}`,
        name: sanitizeInput(formData.founderName),
        email: sanitizeInput(formData.founderEmail),
        replyTo: sanitizeInput(formData.founderEmail),
        botcheck: formData._hp_trap,
        data: {
          actionRequired: "Manual editorial review and publishing approval for 60-day listing",
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
          stipendOffered: formData.stipendOffered || "Equity + Milestone Upside",
          skillsRequired: formData.skillsRequired || "None specified",
          ventureThesis: formData.ventureThesis,
          idealCandidateProfile: formData.idealCandidateProfile,
        },
      });

      // 2. Server Action (fallback / logging)
      const res = await submitNetworkOpportunity({
        founderName: sanitizeInput(formData.founderName),
        founderEmail: sanitizeInput(formData.founderEmail),
        founderLinkedin: sanitizeInput(formData.founderLinkedin),
        founderPriorExperience: sanitizeInput(formData.founderPriorExperience),
        domainYears: formData.domainYears,
        opportunityTitle: sanitizeInput(formData.opportunityTitle),
        roleNeeded: formData.roleNeeded,
        sector: formData.sector,
        location: formData.location,
        equityOffered: sanitizeInput(formData.equityOffered),
        stipendOffered: sanitizeInput(formData.stipendOffered),
        ventureThesis: sanitizeInput(formData.ventureThesis),
        idealCandidateProfile: sanitizeInput(formData.idealCandidateProfile),
      });

      setStatus("success");
      setMessage(
        res?.message ||
          "Your opportunity requirement has been received and routed to join@1008.network for editorial verification. Once approved, your 60-day listing will be activated on the network board."
      );
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
            Submit your venture requirement confidentially. Requirements are sent to <span className="font-mono font-semibold text-[#0A2540]">join@1008.network</span> for verification. Approved listings run for 60 days across the 1008 operator network.
          </p>
        </div>

        {status === "success" ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#A7F3D0] text-center space-y-5 shadow-sm animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto border border-[#A7F3D0]">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#0A2540]">Listing Submitted for Editorial Review</h3>
              <p className="text-sm text-[#425466] max-w-md mx-auto leading-relaxed">{message}</p>
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] text-xs text-[#627D98] max-w-md mx-auto space-y-1">
                <div className="font-semibold text-[#0A2540]">What happens next?</div>
                <div>1. Our editorial partner reviews the domain credentials and opportunity details.</div>
                <div>2. Your 60-day listing will be published on the active network board.</div>
                <div>3. Candidate applications will be forwarded directly to your email.</div>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-center gap-3">
              <Button href="/network" variant="primary" size="md" className="font-semibold">
                Return to Network Board
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="rounded-3xl bg-white border border-[#E6E8EB] p-6 sm:p-8 space-y-6 shadow-xs">
            {/* Hidden Anti-Bot Honeypot Trap */}
            <div style={{ display: "none" }} aria-hidden="true">
              <label htmlFor="_hp_trap">Leave this field blank</label>
              <input
                id="_hp_trap"
                name="_hp_trap"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData._hp_trap}
                onChange={(e) => setFormData({ ...formData, _hp_trap: e.target.value })}
              />
            </div>

            {/* Error Alert Box */}
            {status === "error" && message && (
              <div className="p-4 rounded-2xl bg-[#FEF2F2] border border-[#FECACA] flex items-start gap-3 text-xs text-[#991B1B]">
                <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-[#DC2626]" />
                <div className="space-y-1">
                  <div className="font-bold">Please check your submission:</div>
                  <div>{message}</div>
                </div>
              </div>
            )}

            {/* Section 1: Founder Identity */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E6E8EB] pb-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#635BFF] font-bold">
                  1. Domain Originator / Founder Profile
                </h3>
                <span className="text-[11px] font-mono text-[#829AB1]">Confidential & Verified</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Input
                    label="Founder Full Name"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.founderName}
                    onChange={(e) => {
                      setFormData({ ...formData, founderName: e.target.value });
                      if (formErrors.founderName) setFormErrors({ ...formErrors, founderName: "" });
                    }}
                  />
                  {formErrors.founderName && <p className="text-[11px] text-[#DC2626]">{formErrors.founderName}</p>}
                </div>

                <div className="space-y-1">
                  <Input
                    label="Work Email"
                    required
                    type="email"
                    placeholder="rajesh@domain.com"
                    value={formData.founderEmail}
                    onChange={(e) => {
                      setFormData({ ...formData, founderEmail: e.target.value });
                      if (formErrors.founderEmail) setFormErrors({ ...formErrors, founderEmail: "" });
                    }}
                  />
                  {formErrors.founderEmail && <p className="text-[11px] text-[#DC2626]">{formErrors.founderEmail}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Input
                    label="LinkedIn Profile URL"
                    required
                    placeholder="https://linkedin.com/in/username"
                    value={formData.founderLinkedin}
                    onChange={(e) => {
                      setFormData({ ...formData, founderLinkedin: e.target.value });
                      if (formErrors.founderLinkedin) setFormErrors({ ...formErrors, founderLinkedin: "" });
                    }}
                  />
                  {formErrors.founderLinkedin && <p className="text-[11px] text-[#DC2626]">{formErrors.founderLinkedin}</p>}
                </div>

                <div className="space-y-1">
                  <Input
                    label="Years of Domain Experience"
                    required
                    type="number"
                    min={1}
                    max={50}
                    value={formData.domainYears}
                    onChange={(e) => {
                      setFormData({ ...formData, domainYears: parseInt(e.target.value) || 0 });
                      if (formErrors.domainYears) setFormErrors({ ...formErrors, domainYears: "" });
                    }}
                  />
                  {formErrors.domainYears && <p className="text-[11px] text-[#DC2626]">{formErrors.domainYears}</p>}
                </div>
              </div>

              <div className="space-y-1">
                <Textarea
                  label="Your Operating Background & Domain Depth"
                  required
                  rows={3}
                  placeholder="e.g. 18 years running biopharma and hospital supply chains across India & APAC; former Director of Supply Chain at Fortis Healthcare..."
                  value={formData.founderPriorExperience}
                  onChange={(e) => {
                    setFormData({ ...formData, founderPriorExperience: e.target.value });
                    if (formErrors.founderPriorExperience) setFormErrors({ ...formErrors, founderPriorExperience: "" });
                  }}
                />
                {formErrors.founderPriorExperience && (
                  <p className="text-[11px] text-[#DC2626]">{formErrors.founderPriorExperience}</p>
                )}
              </div>
            </div>

            {/* Section 2: Opportunity Details */}
            <div className="space-y-4 pt-4 border-t border-[#E6E8EB]">
              <div className="flex items-center justify-between border-b border-[#E6E8EB] pb-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#635BFF] font-bold">
                  2. Role & Partnership Specifications
                </h3>
              </div>

              <div className="space-y-1">
                <Input
                  label="Opportunity Headline / Title"
                  required
                  placeholder="e.g. Technical Co-Founder (CTO) for AI-Driven Clinical Trial Logistics"
                  value={formData.opportunityTitle}
                  onChange={(e) => {
                    setFormData({ ...formData, opportunityTitle: e.target.value });
                    if (formErrors.opportunityTitle) setFormErrors({ ...formErrors, opportunityTitle: "" });
                  }}
                />
                {formErrors.opportunityTitle && (
                  <p className="text-[11px] text-[#DC2626]">{formErrors.opportunityTitle}</p>
                )}
              </div>

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
                    <option value="Co-Founder">Co-Founder (Shared Equity)</option>
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
                <div className="space-y-1">
                  <Input
                    label="Equity Range Offered"
                    required
                    placeholder="e.g. 15% - 25%"
                    value={formData.equityOffered}
                    onChange={(e) => {
                      setFormData({ ...formData, equityOffered: e.target.value });
                      if (formErrors.equityOffered) setFormErrors({ ...formErrors, equityOffered: "" });
                    }}
                  />
                  {formErrors.equityOffered && <p className="text-[11px] text-[#DC2626]">{formErrors.equityOffered}</p>}
                </div>

                <Input
                  label="Salary / Living Stipend (Post-Seed)"
                  placeholder="e.g. ₹1.5L - ₹2.5L/mo post-seed (Optional)"
                  value={formData.stipendOffered}
                  onChange={(e) => setFormData({ ...formData, stipendOffered: e.target.value })}
                />
              </div>

              <Input
                label="Target Skills / Tech Stack (Comma separated)"
                placeholder="e.g. Python, FastAPI, IoT Telemetry, PostgreSQL, GAMP5"
                value={formData.skillsRequired}
                onChange={(e) => setFormData({ ...formData, skillsRequired: e.target.value })}
              />

              <div className="space-y-1">
                <Textarea
                  label="Venture Thesis & Ground Problem Statement"
                  required
                  rows={3}
                  placeholder="Describe what product or facility you are building, the specific bottleneck you are solving, and early validation..."
                  value={formData.ventureThesis}
                  onChange={(e) => {
                    setFormData({ ...formData, ventureThesis: e.target.value });
                    if (formErrors.ventureThesis) setFormErrors({ ...formErrors, ventureThesis: "" });
                  }}
                />
                {formErrors.ventureThesis && <p className="text-[11px] text-[#DC2626]">{formErrors.ventureThesis}</p>}
              </div>

              <div className="space-y-1">
                <Textarea
                  label="Ideal Candidate Profile & Key Criteria"
                  required
                  rows={3}
                  placeholder="e.g. 8+ years distributed systems, experience with IoT telemetry, based in Gurgaon or willing to relocate, experience leading small sprint teams..."
                  value={formData.idealCandidateProfile}
                  onChange={(e) => {
                    setFormData({ ...formData, idealCandidateProfile: e.target.value });
                    if (formErrors.idealCandidateProfile) setFormErrors({ ...formErrors, idealCandidateProfile: "" });
                  }}
                />
                {formErrors.idealCandidateProfile && (
                  <p className="text-[11px] text-[#DC2626]">{formErrors.idealCandidateProfile}</p>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E8EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-xs text-[#627D98] font-mono">
                <ShieldCheck className="h-4 w-4 text-[#059669]" />
                <span>Zero placement fees • Manual review under NDA</span>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={status === "submitting"}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="font-semibold text-sm px-8 shadow-sm"
              >
                Submit Requirement for Review
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
