"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { submitGigRequest } from "@/lib/actions";
import { submitToWeb3Forms } from "@/lib/client-submit";
import { isValidEmail } from "@/lib/validation";
import { GigCategory, GigDuration, LocationType } from "@/lib/types";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Lock,
  Briefcase,
} from "lucide-react";

export default function PostGigPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    gigTitle: "",
    category: "Tech & Cloud Development" as GigCategory,
    budgetINR: "₹25,000 - ₹50,000",
    duration: "2 - 4 Weeks (Sprint)" as GigDuration,
    workMode: "Remote" as "Remote" | "Hybrid" | "On-Site",
    location: "Delhi NCR" as LocationType,
    goalSummary: "",
    deliverables: "",
    skillsRequired: "",
    _hp_trap: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const categories: GigCategory[] = [
    "Tech & Cloud Development",
    "ERP, Accounts & GST Compliance",
    "B2B Sales & GTM Outreach",
    "Supply Chain & Factory Audits",
    "UI/UX & Product Design",
    "Digital Marketing & Performance",
    "Legal, Contracts & Cap Table",
    "Operations & Process Automation",
    "Other Specialized Gig",
  ];

  const durations: GigDuration[] = [
    "1 - 2 Weeks (Quick Fix)",
    "2 - 4 Weeks (Sprint)",
    "1 - 3 Months (Project)",
    "Ongoing / Milestone-Based",
  ];

  const locations: LocationType[] = [
    "Delhi NCR",
    "Gurgaon",
    "Bengaluru",
    "Mumbai",
    "Pune",
    "Hyderabad",
    "Chennai",
    "Ahmedabad",
    "Pan-India / Remote",
    "Other Location",
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.businessName.trim()) errs.businessName = "Business name is required";
    if (!formData.contactName.trim()) errs.contactName = "Contact person name is required";
    if (!formData.contactEmail.trim() || !isValidEmail(formData.contactEmail)) {
      errs.contactEmail = "Valid work email is required";
    }
    if (!formData.gigTitle.trim()) errs.gigTitle = "Gig title is required";
    if (!formData.goalSummary.trim() || formData.goalSummary.length < 20) {
      errs.goalSummary = "Please describe the goal in at least 20 characters";
    }
    if (!formData.deliverables.trim()) {
      errs.deliverables = "Please specify key deliverables";
    }
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setMessage("");

    try {
      // 1. Primary server action
      const res = await submitGigRequest(formData);

      // 2. Client fallback via Web3Forms
      await submitToWeb3Forms({
        subject: `[1008 Community] New Gig Request: ${formData.gigTitle} (${formData.businessName})`,
        name: formData.contactName,
        email: formData.contactEmail,
        replyTo: formData.contactEmail,
        botcheck: formData._hp_trap,
        data: {
          businessName: formData.businessName,
          contactName: formData.contactName,
          contactEmail: formData.contactEmail,
          contactPhone: formData.contactPhone || "Not provided",
          gigTitle: formData.gigTitle,
          category: formData.category,
          budgetINR: formData.budgetINR,
          duration: formData.duration,
          workMode: formData.workMode,
          location: formData.location,
          goalSummary: formData.goalSummary,
          deliverables: formData.deliverables,
          skillsRequired: formData.skillsRequired || "None specified",
        },
      }).catch((e) => console.log("Non-blocking backup submission:", e));

      if (res.success) {
        setStatus("success");
        setMessage(res.message);
      } else {
        setStatus("error");
        setMessage(res.message || "Something went wrong. Please email ops@1008.network directly.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Connection error. Please email ops@1008.network directly.");
    }
  };

  return (
    <div className="pt-28 pb-20 bg-[#FDFDFE] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Navigation Breadcrumb */}
        <Link
          href="/gigs"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#64748B] hover:text-[#635BFF] transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Gigs Directory</span>
        </Link>

        {/* Header Block */}
        <div className="space-y-3">
          <Badge variant="indigo" size="md">
            1008 Community • Post a Gig Request
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Post your business gig or sprint requirement.
          </h1>
          <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
            Need an ERP audit, cold outreach engine, or technical deliverable? Submit your requirement. All requests are sent directly to the 1008.network team for review, curation, and specialist matching.
          </p>
        </div>

        {/* Curation Policy Banner */}
        <div className="p-4 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] flex items-start gap-3 text-xs text-[#166534] leading-relaxed">
          <ShieldCheck className="h-5 w-5 text-[#16A34A] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block text-sm text-[#14532D]">
              1008 Network Quality & Editorial Review:
            </span>
            To maintain zero spam and high standards, there is no unmoderated self-publishing. Your request is sent directly to the 1008.network team. We verify the category, scope of work, and pay, standardize milestone deliverables, and publish it to the active directory within 12–24 hours.
          </div>
        </div>

        {status === "success" ? (
          <div className="p-8 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-[#10B981] text-white flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#065F46] font-sans">
              Gig Request Received for Editorial Review!
            </h2>
            <p className="text-sm text-[#047857] max-w-lg mx-auto leading-relaxed">
              Your gig requirement has been routed directly to the 1008.network team. We will review the scope of work and pay, curate the deliverables, and list it on the marketplace within 12–24 hours while coordinating verified specialists.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <Button href="/gigs" variant="primary" size="md">
                Browse Active Gigs
              </Button>
              <Button href="/" variant="secondary" size="md">
                Return to Home
              </Button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-6 sm:p-8 space-y-6"
          >
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
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <span>{message}</span>
              </div>
            )}

            {/* Business & Contact Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A2540] border-b border-[#F1F5F9] pb-2">
                1. Your Business Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Business / Startup Name *"
                  placeholder="e.g. Astra Logistics"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  error={formErrors.businessName}
                />
                <Input
                  label="Contact Person Name *"
                  placeholder="e.g. Vikram Sharma"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  error={formErrors.contactName}
                />
                <Input
                  label="Work Email *"
                  type="email"
                  placeholder="e.g. vikram@astralogistics.in"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  error={formErrors.contactEmail}
                />
                <Input
                  label="Phone / WhatsApp (Optional)"
                  placeholder="+91 98765 43210"
                  value={formData.contactPhone}
                  onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                />
              </div>
            </div>

            {/* Gig Requirements */}
            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A2540] border-b border-[#F1F5F9] pb-2">
                2. Gig Requirement & Deliverables
              </h3>
              <Input
                label="Gig Title *"
                placeholder="e.g. Setup Self-Hosted ERPNext and GST Automated Billing"
                value={formData.gigTitle}
                onChange={(e) => setFormData({ ...formData, gigTitle: e.target.value })}
                error={formErrors.gigTitle}
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Select
                  label="Gig Category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as GigCategory })}
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </Select>
                <Select
                  label="Estimated Duration"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value as GigDuration })}
                >
                  {durations.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </Select>
                <Input
                  label="Budget (INR)"
                  placeholder="e.g. ₹30,000 - ₹50,000"
                  value={formData.budgetINR}
                  onChange={(e) => setFormData({ ...formData, budgetINR: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select
                  label="Location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value as LocationType })}
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </Select>
                <Select
                  label="Work Mode"
                  value={formData.workMode}
                  onChange={(e) => setFormData({ ...formData, workMode: e.target.value as "Remote" | "Hybrid" | "On-Site" })}
                >
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="On-Site">On-Site</option>
                </Select>
              </div>

              <Textarea
                label="Goal Summary *"
                rows={3}
                placeholder="What acute operational challenge or goal is your business solving with this gig?"
                value={formData.goalSummary}
                onChange={(e) => setFormData({ ...formData, goalSummary: e.target.value })}
                error={formErrors.goalSummary}
              />

              <Textarea
                label="Key Deliverables *"
                rows={3}
                placeholder="List clear bullet points of what needs to be delivered."
                value={formData.deliverables}
                onChange={(e) => setFormData({ ...formData, deliverables: e.target.value })}
                error={formErrors.deliverables}
              />

              <Input
                label="Required Skills / Tools (Comma-separated)"
                placeholder="e.g. ERPNext, Python, GST API, Tally Migration"
                value={formData.skillsRequired}
                onChange={(e) => setFormData({ ...formData, skillsRequired: e.target.value })}
              />
            </div>

            <div className="pt-4 border-t border-[#F1F5F9] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#64748B] flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-[#00A389]" />
                Your details are kept secure within 1008 Network.
              </span>
              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={status === "submitting"}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="w-full sm:w-auto font-semibold px-6 shadow-sm"
              >
                {status === "submitting" ? "Publishing Gig..." : "Publish Gig Request"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
