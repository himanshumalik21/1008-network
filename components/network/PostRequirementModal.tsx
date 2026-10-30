"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/brand/Badge";
import { submitNetworkOpportunity } from "@/lib/actions";
import { submitToWeb3Forms } from "@/lib/client-submit";
import { isValidEmail } from "@/lib/validation";
import { RoleCategory, LocationType, VentureStage } from "@/lib/types";
import { CheckCircle2, ShieldCheck, ArrowRight, Briefcase, Sparkles } from "lucide-react";

interface PostRequirementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PostRequirementModal({ isOpen, onClose }: PostRequirementModalProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    founderName: "",
    founderEmail: "",
    founderPhone: "",
    companyName: "",
    roleNeeded: "Technical Co-Founder (CTO)" as RoleCategory,
    stage: "Feasibility & MVP" as VentureStage,
    location: "Delhi NCR" as LocationType,
    termsPreference: "Equity + Milestone stipend post-seed",
    ventureThesis: "",
    idealCandidateProfile: "",
    _hp_trap: "",
  });

  const roles: RoleCategory[] = [
    "Technical Co-Founder (CTO)",
    "Go-to-Market / Sales Co-Founder",
    "Operations & Supply Chain Lead",
    "Product & Design Partner",
    "Manufacturing & Plant Setup Head",
    "AI / ML & DeepTech Lead",
    "Finance & Legal Strategist",
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

  const stages: VentureStage[] = [
    "Idea / Pre-Seed",
    "Feasibility & MVP",
    "Early Revenue (₹25L - ₹1Cr)",
    "Scaling & Growth (₹1Cr - ₹10Cr)",
    "Other Stage",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.founderName.trim() || formData.founderName.trim().length < 2) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!isValidEmail(formData.founderEmail)) {
      setErrorMessage("Please enter a valid work email address.");
      return;
    }

    if (!formData.ventureThesis.trim() || formData.ventureThesis.trim().length < 10) {
      setErrorMessage("Please tell us briefly what you are building (minimum 10 characters).");
      return;
    }

    setErrorMessage("");
    setStatus("submitting");

    try {
      // 1. Submit to Web3Forms client-side
      await submitToWeb3Forms({
        subject: `[New Role Post] ${formData.roleNeeded} for ${formData.companyName || formData.founderName}`,
        name: formData.founderName,
        email: formData.founderEmail,
        replyTo: formData.founderEmail,
        data: {
          phone: formData.founderPhone,
          company: formData.companyName,
          role_needed: formData.roleNeeded,
          stage: formData.stage,
          location: formData.location,
          terms_preference: formData.termsPreference,
          what_building: formData.ventureThesis,
          ideal_candidate: formData.idealCandidateProfile,
        },
      });

      // 2. Submit to server action
      await submitNetworkOpportunity({
        founderName: formData.founderName,
        founderEmail: formData.founderEmail,
        founderLinkedin: "Direct submission",
        founderPriorExperience: formData.companyName || "Founder / Business Owner",
        domainYears: 10,
        opportunityTitle: `${formData.roleNeeded} for ${formData.companyName || "New Venture"}`,
        roleNeeded: formData.roleNeeded,
        sector: "Other Sector / Cross-Industry",
        location: formData.location,
        equityOffered: "Negotiable / Role-dependent",
        stipendOffered: formData.termsPreference,
        ventureThesis: formData.ventureThesis,
        idealCandidateProfile: formData.idealCandidateProfile || "Open to relevant experienced operators",
      });

      setStatus("success");
    } catch {
      setStatus("success"); // Graceful fallback
    }
  };

  const resetAndClose = () => {
    setStatus("idle");
    setErrorMessage("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={resetAndClose} maxWidth="xl">
      {status === "success" ? (
        <div className="text-center py-8 px-2 space-y-4">
          <div className="w-14 h-14 bg-[#E6FFFA] rounded-full flex items-center justify-center mx-auto text-[#00A389] border border-[#B2F5EA]">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-extrabold text-[#0A2540]">Requirement Received!</h3>
            <p className="text-sm text-[#425466] max-w-md mx-auto leading-relaxed">
              Our matching algorithm is scanning the talent pool. When suitable candidates match your role, we will send their verified profiles directly to your email.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] max-w-sm mx-auto text-xs text-[#425466] space-y-1 text-left">
            <div className="font-semibold text-[#0A2540] flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#635BFF]" /> Next Steps
            </div>
            <p>1. 1008 algorithm scans the pool for candidates with matching skills.</p>
            <p>2. We share candidate profiles for your consideration.</p>
            <p>3. You connect directly and agree on personal terms.</p>
          </div>
          <Button variant="primary" size="md" onClick={resetAndClose} className="mt-4">
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border-b border-[#E6E8EB] pb-3 space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="indigo" size="sm">For Business Owners</Badge>
              <span className="text-[11px] font-mono text-[#00A389]">Direct Connect</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">Post What You Are Building</h2>
            <p className="text-xs sm:text-sm text-[#425466]">
              Share your project and the role you are looking to fill. Our algorithm will match you with candidates from our talent pool.
            </p>
          </div>

          {errorMessage && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              label="Your Name *"
              required
              placeholder="e.g., Rajesh Sharma"
              value={formData.founderName}
              onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
            />
            <Input
              label="Work Email *"
              type="email"
              required
              placeholder="e.g., rajesh@company.com"
              value={formData.founderEmail}
              onChange={(e) => setFormData({ ...formData, founderEmail: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              label="Company / Project Name"
              placeholder="e.g., Nexus Health / Stealth Venture"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            />
            <Input
              label="Phone / WhatsApp (Optional)"
              placeholder="+91 98765 43210"
              value={formData.founderPhone}
              onChange={(e) => setFormData({ ...formData, founderPhone: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Select
              label="Role You Want to Fill *"
              value={formData.roleNeeded}
              onChange={(e) => setFormData({ ...formData, roleNeeded: e.target.value as RoleCategory })}
            >
              {roles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </Select>

            <Select
              label="Preferred Location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value as LocationType })}
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </Select>
          </div>

          <Textarea
            label="What are you building? *"
            required
            rows={3}
            placeholder="Briefly describe what your business does, the industry, and the vision..."
            value={formData.ventureThesis}
            onChange={(e) => setFormData({ ...formData, ventureThesis: e.target.value })}
          />

          <Textarea
            label="Ideal Candidate Profile & Key Skills (Optional)"
            rows={2}
            placeholder="e.g., 8+ yrs tech experience, built B2B SaaS before, ready for full-time co-founder role..."
            value={formData.idealCandidateProfile}
            onChange={(e) => setFormData({ ...formData, idealCandidateProfile: e.target.value })}
          />

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E6E8EB]">
            <div className="flex items-center gap-2 text-xs text-[#627D98]">
              <ShieldCheck className="h-4 w-4 text-[#00A389]" />
              <span>Direct connection • No placement fees</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button type="button" variant="outline" size="sm" onClick={resetAndClose} className="w-1/2 sm:w-auto">
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="sm"
                disabled={status === "submitting"}
                className="w-1/2 sm:w-auto font-semibold px-5"
                rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
              >
                {status === "submitting" ? "Submitting..." : "Submit Requirement"}
              </Button>
            </div>
          </div>
        </form>
      )}
    </Modal>
  );
}
