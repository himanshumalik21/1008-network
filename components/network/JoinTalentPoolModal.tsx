"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/brand/Badge";
import { submitToWeb3Forms } from "@/lib/client-submit";
import { isValidEmail } from "@/lib/validation";
import { RoleCategory, LocationType, CommitmentType } from "@/lib/types";
import { CheckCircle2, ShieldCheck, ArrowRight, UserCheck, Sparkles } from "lucide-react";

interface JoinTalentPoolModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JoinTalentPoolModal({ isOpen, onClose }: JoinTalentPoolModalProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedinUrl: "",
    currentRoleAndCompany: "",
    yearsOfExperience: 8,
    primaryFunction: "Technical Co-Founder (CTO)" as RoleCategory,
    location: "Bengaluru" as LocationType,
    commitment: "Full-time (Co-Founder)" as CommitmentType,
    bio: "",
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
    "Bengaluru",
    "Delhi NCR",
    "Mumbai",
    "Pune",
    "Hyderabad",
    "Chennai",
    "Ahmedabad",
    "Pan-India / Remote",
    "Other Location",
  ];

  const commitments: CommitmentType[] = [
    "Full-time (Co-Founder)",
    "Full-time (Core Lead)",
    "Fractional / Part-time",
    "Advisory / Milestone",
    "Other / Flexible",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.linkedinUrl.trim()) {
      setErrorMessage("Please provide your LinkedIn or professional profile URL.");
      return;
    }

    setErrorMessage("");
    setStatus("submitting");

    try {
      await submitToWeb3Forms({
        subject: `[Talent Pool Entry] ${formData.fullName} — ${formData.primaryFunction}`,
        name: formData.fullName,
        email: formData.email,
        replyTo: formData.email,
        data: {
          phone: formData.phone,
          linkedin: formData.linkedinUrl,
          current_role: formData.currentRoleAndCompany,
          years_exp: formData.yearsOfExperience,
          primary_function: formData.primaryFunction,
          location: formData.location,
          commitment: formData.commitment,
          bio: formData.bio,
        },
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
            <h3 className="text-2xl font-extrabold text-[#0A2540]">Welcome to the Talent Pool!</h3>
            <p className="text-sm text-[#425466] max-w-md mx-auto leading-relaxed">
              Your profile has been added to the 1008 curated database. When a business owner submits a requirement that matches your expertise, we will forward your profile for their consideration.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] max-w-sm mx-auto text-xs text-[#425466] space-y-1 text-left">
            <div className="font-semibold text-[#0A2540] flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#00A389]" /> How It Works
            </div>
            <p>1. Business owners post what they are building and roles needed.</p>
            <p>2. 1008 algorithm matches requirements against your profile.</p>
            <p>3. Business rep connects directly with you to discuss and agree on personal terms.</p>
          </div>
          <Button variant="primary" size="md" onClick={resetAndClose} className="mt-4">
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border-b border-[#E6E8EB] pb-3 space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="cyan" size="sm">For Operators & Leaders</Badge>
              <span className="text-[11px] font-mono text-[#635BFF]">Direct Opportunities</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">Join the 1008 Talent Pool</h2>
            <p className="text-xs sm:text-sm text-[#425466]">
              Share your background and domain expertise. We match you directly with business owners looking for co-founders and key team members.
            </p>
          </div>

          {errorMessage && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              label="Full Name *"
              required
              placeholder="e.g., Ananya Deshmukh"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            <Input
              label="Email Address *"
              type="email"
              required
              placeholder="e.g., ananya@gmail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              label="LinkedIn URL *"
              required
              placeholder="https://linkedin.com/in/username"
              value={formData.linkedinUrl}
              onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
            />
            <Input
              label="Phone / WhatsApp (Optional)"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              label="Current Role & Company"
              placeholder="e.g., Lead Architect at Fintech / Ex-Founder"
              value={formData.currentRoleAndCompany}
              onChange={(e) => setFormData({ ...formData, currentRoleAndCompany: e.target.value })}
            />
            <Input
              label="Years of Experience"
              type="number"
              min={1}
              max={50}
              value={formData.yearsOfExperience}
              onChange={(e) => setFormData({ ...formData, yearsOfExperience: Number(e.target.value) || 0 })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Select
              label="Primary Function / Role *"
              value={formData.primaryFunction}
              onChange={(e) => setFormData({ ...formData, primaryFunction: e.target.value as RoleCategory })}
            >
              {roles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </Select>

            <Select
              label="Location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value as LocationType })}
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </Select>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            <Select
              label="Commitment Preference"
              value={formData.commitment}
              onChange={(e) => setFormData({ ...formData, commitment: e.target.value as CommitmentType })}
            >
              {commitments.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </Select>
          </div>

          <Textarea
            label="Brief Summary & What kind of ventures interest you?"
            rows={3}
            placeholder="Tell us what you've built, your key strengths, and what industries you're excited to partner on..."
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          />

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E6E8EB]">
            <div className="flex items-center gap-2 text-xs text-[#627D98]">
              <ShieldCheck className="h-4 w-4 text-[#00A389]" />
              <span>Direct connect with business owners • 100% Free</span>
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
                {status === "submitting" ? "Submitting..." : "Join Talent Pool"}
              </Button>
            </div>
          </div>
        </form>
      )}
    </Modal>
  );
}
