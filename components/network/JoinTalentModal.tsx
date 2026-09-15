"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Badge } from "@/components/brand/Badge";
import { submitToWeb3Forms } from "@/lib/client-submit";
import { isValidEmail, isValidPhone, isValidUrl, sanitizeInput, checkClientRateLimit } from "@/lib/validation";
import { RoleCategory, LocationType, CommitmentType } from "@/lib/types";
import {
  X,
  CheckCircle2,
  Lock,
  ArrowRight,
  Users,
  Sparkles,
  ShieldCheck,
  Briefcase,
  AlertTriangle,
} from "lucide-react";

interface JoinTalentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JoinTalentModal({ isOpen, onClose }: JoinTalentModalProps) {
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
    sectorsOfInterest: "Healthcare, FinTech, D2C, B2B SaaS",
    bio: "",
    _hp_trap: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

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
      errors.email = "Please enter a valid work email address.";
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
      errors.targetEquityRange = "Please provide your target equity range expectation.";
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
      setErrorMessage("Please correct the highlighted fields before submitting.");
      return;
    }

    if (!checkClientRateLimit("join_talent_pool", 4)) {
      setStatus("error");
      setErrorMessage("Please wait a few seconds before submitting again.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitToWeb3Forms({
        subject: `🌟 [TALENT POOL REGISTRATION]: ${formData.primaryFunction} — ${formData.fullName}`,
        name: sanitizeInput(formData.fullName),
        email: sanitizeInput(formData.email),
        replyTo: sanitizeInput(formData.email),
        botcheck: formData._hp_trap,
        data: {
          actionRequired: "Review talent registration and catalog into private operator database",
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
    } catch {
      setStatus("error");
      setErrorMessage("Unable to submit profile right now. Please email join@1008.network directly.");
    }
  };

  const resetAndClose = () => {
    setStatus("idle");
    setFormErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0A2540]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E6E8EB] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#F6F9FC] border-b border-[#E6E8EB] relative">
          <button
            onClick={resetAndClose}
            className="absolute top-6 right-6 p-2 rounded-full text-[#627D98] hover:text-[#0A2540] hover:bg-[#E3E8EE] transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="space-y-2 pr-8">
            <div className="flex items-center gap-2">
              <Badge variant="indigo" size="sm">
                Talent & Operator Pool
              </Badge>
              <Badge variant="cyan" size="sm">
                Shared Equity & Core Roles
              </Badge>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] tracking-tight">
              Join the 1008 Partner & Talent Network
            </h3>
            <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
              Register confidentially to get curated introductions to high-conviction founders and venture studio startups across India looking for Co-Founders, Core Leads, and Fractional CXOs.
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {status === "success" ? (
            <div className="text-center py-8 space-y-5">
              <div className="w-14 h-14 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto border border-[#A7F3D0]">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-extrabold text-[#0A2540]">Profile Enrolled in Talent Pool</h4>
                <p className="text-sm text-[#425466] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your profile details have been sent to <strong>join@1008.network</strong> and added to our private talent network under strict mutual confidentiality.
                </p>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] text-xs text-[#627D98] max-w-md mx-auto space-y-1">
                  <div className="font-semibold text-[#0A2540]">Next Steps:</div>
                  <div>When an active venture matches your function and preferences, our venture team reaches out directly with a curated intro memo.</div>
                </div>
              </div>
              <Button variant="primary" size="md" onClick={resetAndClose} className="mx-auto font-semibold">
                Back to Directory
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
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

              {status === "error" && errorMessage && (
                <div className="p-3.5 rounded-xl bg-[#FEF2F2] border border-[#FECACA] flex items-center gap-2.5 text-xs text-[#991B1B]">
                  <AlertTriangle className="h-4 w-4 shrink-0 text-[#DC2626]" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={status === "submitting"}
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                  className="w-full justify-center font-semibold text-sm"
                >
                  Join Talent Network (Confidential)
                </Button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#627D98] pt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-[#059669]" />
                <span>Your profile is kept private. Intros only made with your explicit approval.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
