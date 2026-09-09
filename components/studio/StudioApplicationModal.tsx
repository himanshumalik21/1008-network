"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/brand/Badge";
import { submitStudioApplication } from "@/lib/actions";
import { StudioApplicationData, SectorCategory, LocationType } from "@/lib/types";
import { trackStudioApplicationSubmit } from "@/lib/analytics";
import { CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

interface StudioApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StudioApplicationModal({ isOpen, onClose }: StudioApplicationModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState<StudioApplicationData>({
    fullName: "",
    email: "",
    phone: "",
    linkedinUrl: "",
    currentRole: "",
    currentCompany: "",
    yearsOfExperience: 10,
    primaryDomain: "Healthcare & HealthTech",
    city: "Delhi NCR",
    problemThesis: "",
    targetCustomer: "",
    unfairAdvantage: "",
    timeCommitment: "Exploring High Conviction",
    teamNeeds: ["Technical Co-Founder (CTO)"],
  });

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
      const res = await submitStudioApplication(formData);
      if (res.success) {
        setStatus("success");
        setMessage(res.message);
        trackStudioApplicationSubmit(formData.primaryDomain, formData.yearsOfExperience);
      } else {
        setStatus("error");
        setMessage(res.message);
      }
    } catch {
      setStatus("error");
      setMessage("An unexpected error occurred. Please reach out to join@1008.network.");
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.fullName || !formData.email || !formData.currentRole) return;
      setStep(2);
    } else if (step === 2) {
      if (!formData.problemThesis || !formData.targetCustomer) return;
      setStep(3);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        if (status === "success") {
          setStatus("idle");
          setStep(1);
        }
      }}
      title="Apply to Build With 1008"
      subtitle="The 180-Day Venture Studio & Execution Partnership"
      maxWidth="xl"
    >
      {status === "success" ? (
        <div className="py-8 text-center space-y-4">
          <div className="mx-auto w-12 h-12 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center border border-[#A7F3D0]">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h4 className="text-xl font-bold text-[#0A2540]">Application Received</h4>
          <p className="text-sm text-[#425466] max-w-md mx-auto leading-relaxed">
            {message}
          </p>
          <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] text-xs text-[#425466] max-w-md mx-auto text-left font-sans space-y-1">
            <div className="text-[#0A2540] font-semibold mb-1">What Happens Next:</div>
            <div>1. Confidential review by 1008 Venture Partners under NDA.</div>
            <div>2. 30-min Problem Diagnostic Call scheduled via email within 48 hours.</div>
          </div>
          <div className="pt-4">
            <Button
              variant="secondary"
              onClick={() => {
                onClose();
                setStatus("idle");
                setStep(1);
              }}
            >
              Close Window
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={step === 3 ? handleSubmit : handleNext} className="space-y-5">
          {/* Step Progress Pills */}
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-[#E6E8EB] text-xs font-semibold">
            <span className={step >= 1 ? "text-[#635BFF]" : "text-[#8898AA]"}>
              1. Profile & Domain
            </span>
            <span className="text-[#CBD5E1]">→</span>
            <span className={step >= 2 ? "text-[#635BFF]" : "text-[#8898AA]"}>
              2. Problem Thesis
            </span>
            <span className="text-[#CBD5E1]">→</span>
            <span className={step === 3 ? "text-[#635BFF]" : "text-[#8898AA]"}>
              3. Execution Readiness
            </span>
          </div>

          {/* STEP 1: Profile & Domain */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  required
                  placeholder="e.g. Vikram Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                <Input
                  label="Corporate / Work Email"
                  required
                  type="email"
                  placeholder="vikram@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Phone / WhatsApp"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <Input
                  label="LinkedIn Profile URL"
                  required
                  placeholder="linkedin.com/in/vikramsharma"
                  value={formData.linkedinUrl}
                  onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Input
                  label="Current / Recent Role"
                  required
                  placeholder="e.g. VP Supply Chain"
                  value={formData.currentRole}
                  onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                />
                <Input
                  label="Company"
                  required
                  placeholder="e.g. Fortis / Marico"
                  value={formData.currentCompany}
                  onChange={(e) => setFormData({ ...formData, currentCompany: e.target.value })}
                />
                <Input
                  label="Years of Experience"
                  required
                  type="number"
                  min={3}
                  max={40}
                  value={formData.yearsOfExperience}
                  onChange={(e) => setFormData({ ...formData, yearsOfExperience: parseInt(e.target.value) || 0 })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#627D98]">
                    Primary Domain / Sector <span className="text-[#F4511E]">*</span>
                  </label>
                  <select
                    className="w-full rounded-xl bg-white border border-[#E6E8EB] px-3.5 py-2.5 text-sm text-[#0A2540] focus:border-[#635BFF] focus:outline-none shadow-xs"
                    value={formData.primaryDomain}
                    onChange={(e) => setFormData({ ...formData, primaryDomain: e.target.value as SectorCategory })}
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
                    Primary City / Hub <span className="text-[#F4511E]">*</span>
                  </label>
                  <select
                    className="w-full rounded-xl bg-white border border-[#E6E8EB] px-3.5 py-2.5 text-sm text-[#0A2540] focus:border-[#635BFF] focus:outline-none shadow-xs"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value as LocationType })}
                  >
                    {cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Problem Thesis */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <Textarea
                label="The Problem Thesis (What structural inefficiency have you lived through?)"
                required
                placeholder="Describe the exact financial loss or operational bottleneck your target customer experiences today..."
                value={formData.problemThesis}
                onChange={(e) => setFormData({ ...formData, problemThesis: e.target.value })}
                hint="Be specific. For example: Tier-2 auto suppliers lose ₹15L/month on broken precision jigs."
              />

              <Input
                label="Target Customer Profile"
                required
                placeholder="e.g. 100+ Bed Hospitals, Tier-2 Auto Machine Shops, D2C Brands with ₹5Cr GMV"
                value={formData.targetCustomer}
                onChange={(e) => setFormData({ ...formData, targetCustomer: e.target.value })}
              />

              <Textarea
                label="Your Unfair Domain Advantage"
                placeholder="e.g. Access to 40 plant heads, 15 years running biopharma procurement, proprietary distribution agreements..."
                value={formData.unfairAdvantage}
                onChange={(e) => setFormData({ ...formData, unfairAdvantage: e.target.value })}
              />
            </div>
          )}

          {/* STEP 3: Execution Readiness */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="space-y-1.5 text-left">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#627D98]">
                  Current Transition & Time Commitment
                </label>
                <select
                  className="w-full rounded-xl bg-white border border-[#E6E8EB] px-3.5 py-2.5 text-sm text-[#0A2540] focus:border-[#635BFF] focus:outline-none shadow-xs"
                  value={formData.timeCommitment}
                  onChange={(e) => setFormData({ ...formData, timeCommitment: e.target.value as any })}
                >
                  <option value="Exploring High Conviction">
                    Confidential Exploration (Planning transition over 3–6 months)
                  </option>
                  <option value="Transitioning over 3-6 Months">
                    In Notice Period / Active Career Transition
                  </option>
                  <option value="Full-Time Immediate">
                    Full-Time Ready from Day 1
                  </option>
                </select>
              </div>

              <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-2 text-xs">
                <div className="flex items-center gap-1.5 text-[#059669] font-bold">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Strict NDA & Zero Consulting Invoices Guarantee</span>
                </div>
                <p className="text-[#425466] leading-relaxed font-sans">
                  All discussions and problem theses submitted to 1008 are kept strictly confidential under mutual non-disclosure. 1008 invests execution muscle for equity upside.
                </p>
              </div>

              {status === "error" && (
                <p className="text-xs text-red-500">{message}</p>
              )}
            </div>
          )}

          {/* Form Actions */}
          <div className="pt-4 border-t border-[#E6E8EB] flex items-center justify-between">
            {step > 1 ? (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setStep((step - 1) as any)}
                leftIcon={<ArrowLeft className="h-3.5 w-3.5" />}
              >
                Back
              </Button>
            ) : (
              <span className="text-xs font-medium text-[#627D98]">Step {step} of 3</span>
            )}

            {step < 3 ? (
              <Button
                type="submit"
                variant="primary"
                size="sm"
                className="font-semibold"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Continue
              </Button>
            ) : (
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="font-semibold"
                isLoading={status === "submitting"}
                rightIcon={<Sparkles className="h-4 w-4" />}
              >
                Submit Studio Application
              </Button>
            )}
          </div>
        </form>
      )}
    </Modal>
  );
}
