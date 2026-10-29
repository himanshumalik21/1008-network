"use client";

import React, { useState } from "react";
import { GigItem, GigApplicationData } from "@/lib/types";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Badge } from "@/components/brand/Badge";
import { applyToGig } from "@/lib/actions";
import { submitToWeb3Forms } from "@/lib/client-submit";
import { isValidEmail } from "@/lib/validation";
import {
  CheckCircle2,
  ShieldCheck,
  Send,
  Building2,
  MapPin,
  Clock,
  Coins,
  AlertTriangle,
  Lock,
  Sparkles,
} from "lucide-react";

interface GigApplicationModalProps {
  gig: GigItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function GigApplicationModal({
  gig,
  isOpen,
  onClose,
}: GigApplicationModalProps) {
  const [formData, setFormData] = useState({
    freelancerName: "",
    freelancerEmail: "",
    freelancerPhone: "",
    profileUrl: "",
    pitchNote: "",
    proposedTimeline: "Immediate (Within 48 hrs)",
    expectedPay: "",
    _hp_trap: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  if (!gig) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.freelancerName.trim()) {
      errs.freelancerName = "Full name is required";
    }
    if (!formData.freelancerEmail.trim() || !isValidEmail(formData.freelancerEmail)) {
      errs.freelancerEmail = "Valid email address is required";
    }
    if (!formData.profileUrl.trim()) {
      errs.profileUrl = "LinkedIn, GitHub, or Portfolio URL is required";
    }
    if (!formData.pitchNote.trim() || formData.pitchNote.length < 20) {
      errs.pitchNote = "Please share at least 20 characters about your experience and proof of work";
    }
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setMessage("");

    const payload: GigApplicationData = {
      gigId: gig.id,
      gigTitle: gig.title,
      businessName: gig.businessName,
      freelancerName: formData.freelancerName,
      freelancerEmail: formData.freelancerEmail,
      freelancerPhone: formData.freelancerPhone,
      profileUrl: formData.profileUrl,
      pitchNote: formData.pitchNote,
      proposedTimeline: formData.proposedTimeline,
      expectedPay: formData.expectedPay || gig.budgetINR,
    };

    try {
      // 1. Primary server action dispatch
      const res = await applyToGig(payload);

      // 2. Client fallback via Web3Forms directly to 1008.network email
      await submitToWeb3Forms({
        subject: `[1008 Gigs] Specialist Interest: ${formData.freelancerName} for ${gig.title}`,
        name: formData.freelancerName,
        email: formData.freelancerEmail,
        replyTo: formData.freelancerEmail,
        botcheck: formData._hp_trap,
        data: {
          gigId: gig.id,
          gigTitle: gig.title,
          businessName: gig.businessName,
          category: gig.category,
          budgetINR: gig.budgetINR,
          freelancerName: formData.freelancerName,
          freelancerEmail: formData.freelancerEmail,
          freelancerPhone: formData.freelancerPhone || "Not provided",
          profileUrl: formData.profileUrl,
          proposedTimeline: formData.proposedTimeline,
          expectedPay: formData.expectedPay || gig.budgetINR,
          pitchNote: formData.pitchNote,
        },
      }).catch((e) => console.log("Non-blocking Web3Forms backup:", e));

      if (res.success) {
        setStatus("success");
        setMessage(res.message);
      } else {
        setStatus("error");
        setMessage(res.message || "Failed to submit. Please email ops@1008.network directly.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Connection error. Please email ops@1008.network directly.");
    }
  };

  const handleResetAndClose = () => {
    setStatus("idle");
    setMessage("");
    setFormData({
      freelancerName: "",
      freelancerEmail: "",
      freelancerPhone: "",
      profileUrl: "",
      pitchNote: "",
      proposedTimeline: "Immediate (Within 48 hrs)",
      expectedPay: "",
      _hp_trap: "",
    });
    setFormErrors({});
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleResetAndClose}
      title="Pick Up Gig & Express Interest"
      subtitle="1008 Network curates applications and introduces verified specialists directly to the business poster."
      maxWidth="xl"
    >
      {/* Gig Header Snapshot */}
      <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2 mb-6 text-left">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge variant="indigo" size="sm">
            {gig.category}
          </Badge>
          <span className="text-xs font-mono font-bold text-[#059669] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0]">
            Budget: {gig.budgetINR}
          </span>
        </div>
        <h4 className="text-base font-bold text-[#0A2540]">
          {gig.title}
        </h4>
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#64748B]">
          <span className="font-semibold text-[#334155] flex items-center gap-1">
            <Building2 className="h-3.5 w-3.5 text-[#635BFF]" />
            {gig.businessName}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {gig.location} ({gig.workMode})
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-[#00A389]" />
            {gig.duration}
          </span>
        </div>
      </div>

      {status === "success" ? (
        <div className="p-6 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#10B981] text-white flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-[#065F46]">
            Application Forwarded to 1008 Ops!
          </h3>
          <p className="text-xs sm:text-sm text-[#047857] max-w-md mx-auto leading-relaxed">
            {message || "Our team is reviewing your profile and pitch note. We will coordinate an introduction with the job poster within 24-48 hours."}
          </p>
          <div className="pt-2">
            <Button
              onClick={handleResetAndClose}
              variant="primary"
              size="md"
              className="px-6"
            >
              Done / Return to Gigs
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Honeypot Spam Bot Trap */}
          <input
            type="text"
            name="_hp_trap"
            value={formData._hp_trap}
            onChange={(e) => setFormData({ ...formData, _hp_trap: e.target.value })}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {status === "error" && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
              <span>{message}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              label="Your Full Name *"
              placeholder="e.g. Arjun Mehta"
              value={formData.freelancerName}
              onChange={(e) => setFormData({ ...formData, freelancerName: e.target.value })}
              error={formErrors.freelancerName}
            />
            <Input
              label="Work Email *"
              type="email"
              placeholder="e.g. arjun@specialist.in"
              value={formData.freelancerEmail}
              onChange={(e) => setFormData({ ...formData, freelancerEmail: e.target.value })}
              error={formErrors.freelancerEmail}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              label="LinkedIn / Portfolio / GitHub URL *"
              placeholder="https://linkedin.com/in/... or portfolio link"
              value={formData.profileUrl}
              onChange={(e) => setFormData({ ...formData, profileUrl: e.target.value })}
              error={formErrors.profileUrl}
            />
            <Input
              label="WhatsApp / Phone (Optional)"
              placeholder="+91 98765 43210"
              value={formData.freelancerPhone}
              onChange={(e) => setFormData({ ...formData, freelancerPhone: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Input
              label="Earliest Availability / Start Date"
              placeholder="e.g. Immediate / Next Monday"
              value={formData.proposedTimeline}
              onChange={(e) => setFormData({ ...formData, proposedTimeline: e.target.value })}
            />
            <Input
              label="Pay / Budget Confirmation"
              placeholder={`Default: ${gig.budgetINR}`}
              value={formData.expectedPay}
              onChange={(e) => setFormData({ ...formData, expectedPay: e.target.value })}
            />
          </div>

          <Textarea
            label="Note & Relevant Proof of Work *"
            rows={4}
            placeholder="Highlight why you are the best operator for this exact scope. Include 1-2 bullet points of past relevant work or similar projects solved."
            value={formData.pitchNote}
            onChange={(e) => setFormData({ ...formData, pitchNote: e.target.value })}
            error={formErrors.pitchNote}
          />

          <div className="p-3 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] text-[11px] text-[#166534] flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#16A34A] shrink-0" />
            <span>
              1008 Network reviews all specialist applications to ensure genuine domain fit before introducing you to the client.
            </span>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#F1F5F9]">
            <span className="text-[11px] text-[#64748B] flex items-center gap-1 font-mono">
              <Lock className="h-3 w-3 text-[#00A389]" />
              Direct assessment by 1008 Network
            </span>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                type="button"
                variant="ghost"
                size="md"
                onClick={handleResetAndClose}
                className="w-1/2 sm:w-auto"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={status === "submitting"}
                className="w-1/2 sm:w-auto font-semibold px-5"
                rightIcon={<Send className="h-3.5 w-3.5" />}
              >
                {status === "submitting" ? "Sending..." : "Submit Interest"}
              </Button>
            </div>
          </div>
        </form>
      )}
    </Modal>
  );
}
