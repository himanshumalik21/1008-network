"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Badge } from "@/components/brand/Badge";
import { submitToWeb3Forms } from "@/lib/client-submit";
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
  });

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
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitToWeb3Forms({
        subject: `🌟 [TALENT POOL REGISTRATION]: ${formData.primaryFunction} — ${formData.fullName}`,
        name: formData.fullName,
        email: formData.email,
        replyTo: formData.email,
        data: {
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
              Register confidentially to get introduced to high-conviction founders and venture studio startups across India looking for Co-Founders, Core Leads, and Fractional CXOs.
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
                  Thank you, <strong>{formData.fullName}</strong>. Your profile has been added to our private talent network under strict mutual confidentiality.
                </p>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] text-xs text-[#627D98] max-w-md mx-auto">
                  When a high-conviction venture matches your function, target equity split, and domain preferences, our team will reach out directly with a curated introduction deck.
                </div>
              </div>
              <Button variant="primary" size="md" onClick={resetAndClose} className="mx-auto font-semibold">
                Back to Directory
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <Input
                  label="Full Name"
                  required
                  placeholder="e.g. Anandita Verma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                <Input
                  label="Email Address"
                  required
                  type="email"
                  placeholder="anandita@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <Input
                  label="Phone / WhatsApp (Optional)"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <Input
                  label="LinkedIn Profile URL"
                  required
                  placeholder="https://linkedin.com/in/username"
                  value={formData.linkedinUrl}
                  onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <Input
                  label="Current / Most Recent Role & Company"
                  required
                  placeholder="e.g. VP Engineering @ Perfios / Ex-Swiggy"
                  value={formData.currentCompanyAndRole}
                  onChange={(e) => setFormData({ ...formData, currentCompanyAndRole: e.target.value })}
                />
                <Input
                  label="Total Years of Experience"
                  required
                  type="number"
                  min={1}
                  max={45}
                  value={formData.yearsOfExperience}
                  onChange={(e) => setFormData({ ...formData, yearsOfExperience: Number(e.target.value) })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#627D98]">
                    Primary Functional Expertise <span className="text-[#F4511E]">*</span>
                  </label>
                  <select
                    value={formData.primaryFunction}
                    onChange={(e) => setFormData({ ...formData, primaryFunction: e.target.value as RoleCategory })}
                    className="w-full rounded-xl bg-white border border-[#CBD5E1] px-3.5 py-2.5 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF] shadow-xs"
                  >
                    {roleCategories.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#627D98]">
                    Preferred Location Base <span className="text-[#F4511E]">*</span>
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value as LocationType })}
                    className="w-full rounded-xl bg-white border border-[#CBD5E1] px-3.5 py-2.5 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF] shadow-xs"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#627D98]">
                    Target Commitment Mode <span className="text-[#F4511E]">*</span>
                  </label>
                  <select
                    value={formData.preferredCommitment}
                    onChange={(e) => setFormData({ ...formData, preferredCommitment: e.target.value as CommitmentType })}
                    className="w-full rounded-xl bg-white border border-[#CBD5E1] px-3.5 py-2.5 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF] shadow-xs"
                  >
                    <option value="Full-time (Co-Founder)">Full-Time Co-Founder (Shared Equity)</option>
                    <option value="Full-time (Core Lead)">Full-Time Core Team Lead</option>
                    <option value="Fractional / Part-time">Fractional / Part-Time (15-20 hrs/week)</option>
                    <option value="Advisory / Milestone">Advisory / Specialist</option>
                  </select>
                </div>

                <Input
                  label="Target Equity & Compensation Expectation"
                  required
                  placeholder="e.g. 15%-25% Equity + Seed living stipend"
                  value={formData.targetEquityRange}
                  onChange={(e) => setFormData({ ...formData, targetEquityRange: e.target.value })}
                />
              </div>

              <Input
                label="Core Skills / Tech Stack / Domain Moats"
                required
                placeholder="e.g. Distributed Systems, Kafka, Go, Account Aggregator, RBI Compliance"
                value={formData.keySkills}
                onChange={(e) => setFormData({ ...formData, keySkills: e.target.value })}
              />

              <Textarea
                label="Executive Summary & Venture Preferences"
                required
                rows={3}
                placeholder="Summarize your career highlights, what kind of problems you want to solve, and what stage of startup you prefer (Idea vs Early Revenue)."
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              />

              {status === "error" && (
                <p className="text-xs text-red-500 font-medium">{errorMessage}</p>
              )}

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
