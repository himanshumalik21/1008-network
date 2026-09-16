"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { submitToWeb3Forms } from "@/lib/client-submit";
import { isValidEmail, isValidPhone, isValidUrl, sanitizeInput, checkClientRateLimit } from "@/lib/validation";
import { RoleCategory, LocationType, CommitmentType } from "@/lib/types";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Users,
  Briefcase,
  Lock,
} from "lucide-react";

export default function RegisterProfilePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedinUrl: "",
    currentCompanyAndRole: "",
    yearsOfExperience: 8,
    primaryFunction: "Technical Co-Founder (CTO)" as RoleCategory,
    location: "Bengaluru" as LocationType,
    preferredCommitment: "Full-time (Co-Founder)" as CommitmentType,
    targetEquityRange: "15% - 25%",
    keySkills: "",
    sectorsOfInterest: "Healthcare, FinTech, D2C, Industrial, B2B SaaS",
    bio: "",
    _hp_trap: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const roleCategories: RoleCategory[] = [
    "Technical Co-Founder (CTO)",
    "Go-to-Market / Sales Co-Founder",
    "Operations & Supply Chain Lead",
    "Product & Design Partner",
    "Finance & Legal Strategist",
    "Growth & Marketing Architect",
    "Manufacturing & Plant Setup Head",
    "AI / ML & DeepTech Lead",
    "Other Domain / Specialist Role",
  ];

  const locations: LocationType[] = [
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

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name (min 2 characters).";
    }

    if (!isValidEmail(formData.email)) {
      errors.email = "Please enter a valid work or personal email address.";
    }

    if (formData.phone && !isValidPhone(formData.phone)) {
      errors.phone = "Please enter a valid contact phone number or leave blank.";
    }

    if (!isValidUrl(formData.linkedinUrl)) {
      errors.linkedinUrl = "Please provide a valid LinkedIn or professional profile URL.";
    }

    if (!formData.currentCompanyAndRole.trim() || formData.currentCompanyAndRole.trim().length < 3) {
      errors.currentCompanyAndRole = "Please specify your current or most recent role & company.";
    }

    if (formData.yearsOfExperience < 1 || formData.yearsOfExperience > 50) {
      errors.yearsOfExperience = "Please enter valid years of experience (1-50).";
    }

    if (!formData.targetEquityRange.trim()) {
      errors.targetEquityRange = "Please provide your target equity expectation.";
    }

    if (!formData.keySkills.trim() || formData.keySkills.trim().length < 3) {
      errors.keySkills = "Please list your core skills and domain moats.";
    }

    if (!formData.bio.trim() || formData.bio.trim().length < 15) {
      errors.bio = "Please write a brief summary of your track record and venture preferences (min 15 characters).";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setStatus("error");
      setMessage("Please resolve the highlighted validation errors before submitting.");
      return;
    }

    if (!checkClientRateLimit("register_profile_page", 4)) {
      setStatus("error");
      setMessage("Please wait a few seconds before submitting again.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      await submitToWeb3Forms({
        subject: `🌟 [TALENT POOL REGISTRATION]: ${formData.primaryFunction} — ${formData.fullName}`,
        name: sanitizeInput(formData.fullName),
        email: sanitizeInput(formData.email),
        replyTo: sanitizeInput(formData.email),
        botcheck: formData._hp_trap,
        data: {
          actionRequired: "Review operator registration and add to curated matchmaking directory",
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone || "Not provided",
          linkedinUrl: formData.linkedinUrl,
          currentCompanyAndRole: formData.currentCompanyAndRole,
          yearsOfExperience: `${formData.yearsOfExperience} Years`,
          primaryFunction: formData.primaryFunction,
          location: formData.location,
          preferredCommitment: formData.preferredCommitment,
          targetEquityRange: formData.targetEquityRange,
          keySkills: formData.keySkills,
          sectorsOfInterest: formData.sectorsOfInterest,
          bio: formData.bio,
        },
      });

      setStatus("success");
      setMessage(
        "Your profile has been registered with the 1008 Partner & Talent Network. Our team reviews every profile and coordinates high-conviction introductions directly with founders."
      );
    } catch {
      setStatus("error");
      setMessage("Failed to submit profile. Please contact join@1008.network directly.");
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
          <Badge variant="cyan" size="sm" pulse>Register Profile</Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A2540] font-sans tracking-tight">
            Join the 1008 Partner & Talent Network
          </h1>
          <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
            Register confidentially to get introduced to high-conviction founders and venture studio startups across India looking for Co-Founders, Core Leads, and Fractional CXOs.
          </p>
        </div>

        {status === "success" ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#A7F3D0] text-center space-y-5 shadow-sm animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto border border-[#A7F3D0]">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#0A2540]">Profile Enrolled in Talent Network</h3>
              <p className="text-sm text-[#425466] max-w-md mx-auto leading-relaxed">{message}</p>
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] text-xs text-[#627D98] max-w-md mx-auto space-y-1">
                <div className="font-semibold text-[#0A2540]">Next Steps:</div>
                <div>1. Our venture partner team reviews your domain depth and background.</div>
                <div>2. When an opportunity matches your role, equity, and sector focus, we reach out directly with a curated intro memo.</div>
                <div>3. Introductions are made under strict mutual confidentiality.</div>
              </div>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="/network" variant="primary" size="md" className="font-semibold">
                Explore Active Requirements
              </Button>
              <Button href="/studio" variant="secondary" size="md" className="font-semibold">
                Learn About Venture Studio
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="rounded-3xl bg-white border border-[#E6E8EB] p-6 sm:p-8 space-y-6 shadow-xs">
            {/* Hidden Anti-Bot Honeypot */}
            <div style={{ display: "none" }} aria-hidden="true">
              <input
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

            {/* Section 1: Candidate Identity */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#E6E8EB] pb-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#635BFF] font-bold">
                  1. Operator Identity & Professional Profile
                </h3>
                <span className="text-[11px] font-mono text-[#829AB1]">Confidential & Private</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Input
                    label="Full Name"
                    required
                    placeholder="e.g. Anandita Verma"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: "" });
                    }}
                  />
                  {formErrors.fullName && <p className="text-[11px] text-[#DC2626]">{formErrors.fullName}</p>}
                </div>

                <div className="space-y-1">
                  <Input
                    label="Email Address"
                    required
                    type="email"
                    placeholder="anandita@domain.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (formErrors.email) setFormErrors({ ...formErrors, email: "" });
                    }}
                  />
                  {formErrors.email && <p className="text-[11px] text-[#DC2626]">{formErrors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Input
                    label="Phone / WhatsApp (Optional)"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (formErrors.phone) setFormErrors({ ...formErrors, phone: "" });
                    }}
                  />
                  {formErrors.phone && <p className="text-[11px] text-[#DC2626]">{formErrors.phone}</p>}
                </div>

                <div className="space-y-1">
                  <Input
                    label="LinkedIn Profile URL"
                    required
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedinUrl}
                    onChange={(e) => {
                      setFormData({ ...formData, linkedinUrl: e.target.value });
                      if (formErrors.linkedinUrl) setFormErrors({ ...formErrors, linkedinUrl: "" });
                    }}
                  />
                  {formErrors.linkedinUrl && <p className="text-[11px] text-[#DC2626]">{formErrors.linkedinUrl}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Input
                    label="Current Role & Company"
                    required
                    placeholder="e.g. VP Engineering @ Perfios / Ex-Swiggy"
                    value={formData.currentCompanyAndRole}
                    onChange={(e) => {
                      setFormData({ ...formData, currentCompanyAndRole: e.target.value });
                      if (formErrors.currentCompanyAndRole) setFormErrors({ ...formErrors, currentCompanyAndRole: "" });
                    }}
                  />
                  {formErrors.currentCompanyAndRole && (
                    <p className="text-[11px] text-[#DC2626]">{formErrors.currentCompanyAndRole}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <Input
                    label="Years of Experience"
                    required
                    type="number"
                    min={1}
                    max={50}
                    value={formData.yearsOfExperience}
                    onChange={(e) => {
                      setFormData({ ...formData, yearsOfExperience: Number(e.target.value) || 0 });
                      if (formErrors.yearsOfExperience) setFormErrors({ ...formErrors, yearsOfExperience: "" });
                    }}
                  />
                  {formErrors.yearsOfExperience && (
                    <p className="text-[11px] text-[#DC2626]">{formErrors.yearsOfExperience}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Section 2: Functional Expertise & Preferences */}
            <div className="space-y-4 pt-4 border-t border-[#E6E8EB]">
              <div className="flex items-center justify-between border-b border-[#E6E8EB] pb-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#635BFF] font-bold">
                  2. Functional Expertise & Venture Preferences
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select
                  label="Functional Expertise"
                  required
                  value={formData.primaryFunction}
                  onChange={(e) => setFormData({ ...formData, primaryFunction: e.target.value as RoleCategory })}
                >
                  {roleCategories.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </Select>

                <Select
                  label="Location Base"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value as LocationType })}
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select
                  label="Target Commitment"
                  required
                  value={formData.preferredCommitment}
                  onChange={(e) => setFormData({ ...formData, preferredCommitment: e.target.value as CommitmentType })}
                >
                  <option value="Full-time (Co-Founder)">Full-Time Co-Founder (Shared Equity)</option>
                  <option value="Full-time (Core Lead)">Full-Time Core Team Lead</option>
                  <option value="Fractional / Part-time">Fractional / Part-Time (15-20 hrs/week)</option>
                  <option value="Advisory / Milestone">Advisory / Specialist</option>
                  <option value="Other / Flexible">Other / Flexible Arrangement</option>
                </Select>

                <div className="space-y-1">
                  <Input
                    label="Target Equity Range"
                    required
                    placeholder="e.g. 15%-25% Equity + Seed living stipend"
                    value={formData.targetEquityRange}
                    onChange={(e) => {
                      setFormData({ ...formData, targetEquityRange: e.target.value });
                      if (formErrors.targetEquityRange) setFormErrors({ ...formErrors, targetEquityRange: "" });
                    }}
                  />
                  {formErrors.targetEquityRange && (
                    <p className="text-[11px] text-[#DC2626]">{formErrors.targetEquityRange}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <Input
                  label="Core Skills & Domain Moats"
                  required
                  placeholder="e.g. Distributed Systems, Kafka, Go, Account Aggregator, RBI Compliance"
                  value={formData.keySkills}
                  onChange={(e) => {
                    setFormData({ ...formData, keySkills: e.target.value });
                    if (formErrors.keySkills) setFormErrors({ ...formErrors, keySkills: "" });
                  }}
                />
                {formErrors.keySkills && <p className="text-[11px] text-[#DC2626]">{formErrors.keySkills}</p>}
              </div>

              <div className="space-y-1">
                <Textarea
                  label="Executive Bio & Venture Preferences"
                  required
                  rows={3}
                  placeholder="Summarize your career highlights, what kind of problems you want to solve, and what stage of startup you prefer (Idea vs Early Revenue)."
                  value={formData.bio}
                  onChange={(e) => {
                    setFormData({ ...formData, bio: e.target.value });
                    if (formErrors.bio) setFormErrors({ ...formErrors, bio: "" });
                  }}
                />
                {formErrors.bio && <p className="text-[11px] text-[#DC2626]">{formErrors.bio}</p>}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E8EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-xs text-[#627D98] font-mono">
                <ShieldCheck className="h-4 w-4 text-[#059669]" />
                <span>Zero fees • Intros only with your explicit consent</span>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={status === "submitting"}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="font-semibold text-sm px-8 shadow-sm bg-[#00A389] hover:bg-[#008770] border-[#00A389]"
              >
                Register Profile (Confidential)
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
