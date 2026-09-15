"use client";

import React, { useState } from "react";
import { Opportunity } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Badge } from "@/components/brand/Badge";
import { submitToWeb3Forms } from "@/lib/client-submit";
import { isValidEmail, isValidPhone, isValidUrl, sanitizeInput, checkClientRateLimit } from "@/lib/validation";
import { trackNetworkApply } from "@/lib/analytics";
import {
  X,
  CheckCircle2,
  Lock,
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  AlertTriangle,
} from "lucide-react";

interface ExpressInterestModalProps {
  opportunity: Opportunity | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ExpressInterestModal({
  opportunity,
  isOpen,
  onClose,
}: ExpressInterestModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedinUrl: "",
    yearsOfExperience: "8",
    currentCompanyOrRole: "",
    pitchMessage: "",
    commitment: "Full-Time Co-Founder",
    _hp_trap: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen || !opportunity) return null;

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
      errors.linkedinUrl = "Please provide a valid LinkedIn profile URL.";
    }

    const exp = parseInt(formData.yearsOfExperience, 10);
    if (isNaN(exp) || exp < 1 || exp > 50) {
      errors.yearsOfExperience = "Please enter valid years of experience (1-50).";
    }

    if (!formData.currentCompanyOrRole.trim() || formData.currentCompanyOrRole.trim().length < 3) {
      errors.currentCompanyOrRole = "Please provide your current or most recent company / role.";
    }

    if (!formData.pitchMessage.trim() || formData.pitchMessage.trim().length < 15) {
      errors.pitchMessage = "Please briefly explain your fit and track record (min 15 characters).";
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

    if (!checkClientRateLimit("express_interest", 4)) {
      setStatus("error");
      setErrorMessage("Please wait a few seconds before submitting again.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitToWeb3Forms({
        subject: `🤝 [EXPRESS INTEREST]: ${opportunity.title} — ${formData.fullName}`,
        name: sanitizeInput(formData.fullName),
        email: sanitizeInput(formData.email),
        replyTo: sanitizeInput(formData.email),
        botcheck: formData._hp_trap,
        data: {
          opportunityId: opportunity.id,
          opportunityTitle: opportunity.title,
          targetRole: opportunity.role,
          targetSector: opportunity.sector,
          applicantName: formData.fullName,
          applicantEmail: formData.email,
          applicantPhone: formData.phone || "Not provided",
          linkedinUrl: formData.linkedinUrl,
          yearsOfExperience: `${formData.yearsOfExperience} Years`,
          currentCompanyOrRole: formData.currentCompanyOrRole,
          preferredCommitment: formData.commitment,
          pitchMessage: formData.pitchMessage,
        },
      });

      trackNetworkApply(opportunity.id, opportunity.role);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Unable to submit application right now. Please email join@1008.network directly.");
    }
  };

  const resetAndClose = () => {
    setStatus("idle");
    setFormErrors({});
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      linkedinUrl: "",
      yearsOfExperience: "8",
      currentCompanyOrRole: "",
      pitchMessage: "",
      commitment: "Full-Time Co-Founder",
      _hp_trap: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0A2540]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E6E8EB] overflow-hidden my-8"
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
                {opportunity.sector}
              </Badge>
              {opportunity.studioBacked && (
                <Badge variant="cyan" size="sm">
                  1008 Studio Backed
                </Badge>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] tracking-tight">
              Express Interest: {opportunity.role}
            </h3>
            <p className="text-xs sm:text-sm text-[#425466] line-clamp-1 font-medium">
              {opportunity.title}
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
                <h4 className="text-2xl font-extrabold text-[#0A2540]">Application Forwarded</h4>
                <p className="text-sm text-[#425466] max-w-md mx-auto leading-relaxed">
                  Your profile and message have been sent to <strong>join@1008.network</strong> to be introduced to the founding team of <strong>{opportunity.title}</strong>.
                </p>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] text-xs text-[#627D98] max-w-md mx-auto">
                  Our venture team reviews applicant alignment and schedules a confidential introduction within 24–48 hours.
                </div>
              </div>
              <Button variant="primary" size="md" onClick={resetAndClose} className="mx-auto font-semibold">
                Done & Back to Network
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Anti-Bot Honeypot */}
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

              <div className="p-3.5 rounded-xl bg-[#F0F0FF] border border-[#E0E0FF] text-xs text-[#0A2540] flex items-start gap-2.5">
                <Sparkles className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Equity & Terms: {opportunity.equityRange}</span>
                  <span className="text-[#627D98]">{opportunity.stipendOrSalary || "Equity + Milestone Upside"}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <Input
                    label="Full Name"
                    required
                    placeholder="e.g. Priyanshu Sharma"
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
                    label="Work Email"
                    required
                    type="email"
                    placeholder="priyanshu@domain.com"
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
                    label="Years of Experience"
                    required
                    type="number"
                    min={1}
                    max={50}
                    placeholder="e.g. 8"
                    value={formData.yearsOfExperience}
                    onChange={(e) => {
                      setFormData({ ...formData, yearsOfExperience: e.target.value });
                      if (formErrors.yearsOfExperience) setFormErrors({ ...formErrors, yearsOfExperience: "" });
                    }}
                  />
                  {formErrors.yearsOfExperience && <p className="text-[11px] text-[#DC2626]">{formErrors.yearsOfExperience}</p>}
                </div>

                <div className="space-y-1">
                  <Input
                    label="Current Role & Company"
                    required
                    placeholder="e.g. Staff Engineer @ Swiggy"
                    value={formData.currentCompanyOrRole}
                    onChange={(e) => {
                      setFormData({ ...formData, currentCompanyOrRole: e.target.value });
                      if (formErrors.currentCompanyOrRole) setFormErrors({ ...formErrors, currentCompanyOrRole: "" });
                    }}
                  />
                  {formErrors.currentCompanyOrRole && <p className="text-[11px] text-[#DC2626]">{formErrors.currentCompanyOrRole}</p>}
                </div>
              </div>

              <Select
                label="Target Commitment"
                required
                value={formData.commitment}
                onChange={(e) => setFormData({ ...formData, commitment: e.target.value })}
              >
                <option value="Full-Time Co-Founder">Full-Time Co-Founder (Immediate / 30 Days)</option>
                <option value="Full-Time Core Lead">Full-Time Core Team Lead</option>
                <option value="Fractional / Part-Time (15-20 hrs/wk)">Fractional / Part-Time (15-20 hrs/week)</option>
                <option value="Advisory / Specialist">Advisory / Milestone Specialist</option>
                <option value="Other / Flexible">Other / Flexible Arrangement</option>
              </Select>

              <div className="space-y-1">
                <Textarea
                  label="Why are you a strong fit for this opportunity?"
                  required
                  rows={3}
                  placeholder="Briefly highlight your track record, why this domain excites you, and what you would build or execute in the first 90 days."
                  value={formData.pitchMessage}
                  onChange={(e) => {
                    setFormData({ ...formData, pitchMessage: e.target.value });
                    if (formErrors.pitchMessage) setFormErrors({ ...formErrors, pitchMessage: "" });
                  }}
                />
                {formErrors.pitchMessage && <p className="text-[11px] text-[#DC2626]">{formErrors.pitchMessage}</p>}
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
                  Submit Confidential Application
                </Button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#627D98] pt-1">
                <Lock className="h-3.5 w-3.5 text-[#059669]" />
                <span>Protected under 1008 Mutual Confidentiality Standard</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
