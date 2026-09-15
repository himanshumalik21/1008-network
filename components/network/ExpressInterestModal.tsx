"use client";

import React, { useState } from "react";
import { Opportunity } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Badge } from "@/components/brand/Badge";
import { submitToWeb3Forms } from "@/lib/client-submit";
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
    yearsOfExperience: "",
    currentCompanyOrRole: "",
    pitchMessage: "",
    commitment: "Full-Time Co-Founder",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen || !opportunity) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitToWeb3Forms({
        subject: `🤝 [EXPRESS INTEREST]: ${opportunity.title} — ${formData.fullName}`,
        name: formData.fullName,
        email: formData.email,
        replyTo: formData.email,
        data: {
          opportunityId: opportunity.id,
          opportunityTitle: opportunity.title,
          targetRole: opportunity.role,
          applicantName: formData.fullName,
          applicantEmail: formData.email,
          applicantPhone: formData.phone || "Not provided",
          linkedinUrl: formData.linkedinUrl,
          yearsOfExperience: formData.yearsOfExperience,
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
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      linkedinUrl: "",
      yearsOfExperience: "",
      currentCompanyOrRole: "",
      pitchMessage: "",
      commitment: "Full-Time Co-Founder",
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
                <h4 className="text-2xl font-extrabold text-[#0A2540]">Application Received</h4>
                <p className="text-sm text-[#425466] max-w-md mx-auto leading-relaxed">
                  We have forwarded your profile and introduction to the founding team of <strong>{opportunity.title}</strong> under mutual confidentiality.
                </p>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] text-xs text-[#627D98] max-w-md mx-auto">
                  Our venture partner team will review your credentials and schedule a confidential 20-minute alignment call within 24–48 hours.
                </div>
              </div>
              <Button variant="primary" size="md" onClick={resetAndClose} className="mx-auto font-semibold">
                Done & Back to Network
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-[#F0F0FF] border border-[#E0E0FF] text-xs text-[#0A2540] flex items-start gap-2.5">
                <Sparkles className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Equity & Terms: {opportunity.equityRange}</span>
                  <span className="text-[#627D98]">{opportunity.stipendOrSalary || "Equity + Milestone Upside"}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <Input
                  label="Full Name"
                  required
                  placeholder="e.g. Priyanshu Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                <Input
                  label="Work Email"
                  required
                  type="email"
                  placeholder="priyanshu@domain.com"
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
                  label="Years of Relevant Experience"
                  required
                  type="number"
                  min={1}
                  max={45}
                  placeholder="e.g. 8"
                  value={formData.yearsOfExperience}
                  onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
                />
                <Input
                  label="Current / Most Recent Company & Role"
                  required
                  placeholder="e.g. Staff Engineer @ Swiggy"
                  value={formData.currentCompanyOrRole}
                  onChange={(e) => setFormData({ ...formData, currentCompanyOrRole: e.target.value })}
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#627D98]">
                  Target Commitment Mode <span className="text-[#F4511E]">*</span>
                </label>
                <select
                  value={formData.commitment}
                  onChange={(e) => setFormData({ ...formData, commitment: e.target.value })}
                  className="w-full rounded-xl bg-white border border-[#CBD5E1] px-3.5 py-2.5 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF] shadow-xs"
                >
                  <option value="Full-Time Co-Founder">Full-Time Co-Founder (Immediate / 30 Days)</option>
                  <option value="Full-Time Core Lead">Full-Time Core Team Lead</option>
                  <option value="Fractional / Part-Time (15-20 hrs/wk)">Fractional / Part-Time (15-20 hrs/week)</option>
                  <option value="Advisory / Specialist">Advisory / Milestone Specialist</option>
                  <option value="Other / Flexible">Other / Flexible Arrangement</option>
                </select>
              </div>

              <Textarea
                label="Why are you a strong fit for this opportunity?"
                required
                rows={3}
                placeholder="Briefly highlight your track record, why this domain excites you, and what you would build or execute in the first 90 days."
                value={formData.pitchMessage}
                onChange={(e) => setFormData({ ...formData, pitchMessage: e.target.value })}
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
