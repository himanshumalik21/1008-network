"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { submitToWeb3Forms } from "@/lib/client-submit";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Phone,
  Mail,
  User,
  MapPin,
  Building,
} from "lucide-react";

type PillarId =
  | "network"
  | "capital"
  | "studio"
  | "gigs"
  | "knowledge"
  | "general";

export default function GetStartedPage() {
  const [selectedPillar, setSelectedPillar] = useState<PillarId>("network");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [stage, setStage] = useState("Early Stage / Building MVP");
  const [details, setDetails] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const pillars = [
    {
      id: "network" as PillarId,
      name: "Co-Founders & Talent",
      tagline: "Find a co-founder, hire executive leads, or join a venture",
      icon3d: "/images/3dicons/rocket-dynamic-gradient.png",
      color: "text-[#635BFF]",
      badgeColor: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      selectedBorder: "border-[#635BFF] bg-[#F7F8FF]/80 ring-2 ring-[#635BFF]/20",
      href: "/network",
    },
    {
      id: "capital" as PillarId,
      name: "Funding & Investors",
      tagline: "Raise angel capital (₹5L - ₹2 Cr+) from operating syndicates",
      icon3d: "/images/3dicons/3d-coin-dynamic-gradient.png",
      color: "text-[#FF6B4A]",
      badgeColor: "bg-[#FFF3EE] text-[#FF6B4A] border-[#FFE2D6]",
      selectedBorder: "border-[#FF6B4A] bg-[#FFF8F5]/80 ring-2 ring-[#FF6B4A]/20",
      href: "/capital",
    },
    {
      id: "studio" as PillarId,
      name: "Outsource Operations",
      tagline: "Turnkey tech setup, ERP workflows, and day-to-day operations",
      icon3d: "/images/3dicons/setting-dynamic-gradient.png",
      color: "text-[#00A389]",
      badgeColor: "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]",
      selectedBorder: "border-[#00A389] bg-[#F0FDFB]/80 ring-2 ring-[#00A389]/20",
      href: "/studio",
    },
    {
      id: "gigs" as PillarId,
      name: "Gigs & Sprints",
      tagline: "Hire vetted specialists for focused 1–4 week project sprints",
      icon3d: "/images/3dicons/flash-dynamic-gradient.png",
      color: "text-[#0A2540]",
      badgeColor: "bg-[#F1F5F9] text-[#0A2540] border-[#E2E8F0]",
      selectedBorder: "border-[#0A2540] bg-[#F8FAFC] ring-2 ring-[#0A2540]/20",
      href: "/gigs",
    },
    {
      id: "knowledge" as PillarId,
      name: "Playbooks & Research",
      tagline: "Access unsexy business opportunities, models, and legal playbooks",
      icon3d: "/images/3dicons/notebook-dynamic-gradient.png",
      color: "text-[#0F172A]",
      badgeColor: "bg-[#F1F5F9] text-[#475569] border-[#CBD5E1]",
      selectedBorder: "border-[#0F172A] bg-[#F8FAFC] ring-2 ring-[#0F172A]/20",
      href: "/knowledge",
    },
    {
      id: "general" as PillarId,
      name: "General Community / Exploring",
      tagline: "Not sure yet or need guidance on multiple pathways",
      icon3d: "/images/3dicons/chat-dynamic-gradient.png",
      color: "text-[#64748B]",
      badgeColor: "bg-[#F8FAFC] text-[#64748B] border-[#E2E8F0]",
      selectedBorder: "border-[#64748B] bg-[#F8FAFC] ring-2 ring-[#64748B]/20",
      href: "/about",
    },
  ];

  const stages = [
    "Just an Idea / Concept",
    "Early Stage / Building MVP",
    "Revenue Generating MSME / Startup",
    "Established Business Looking to Scale",
    "Individual Looking to Join a Startup",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim() || !details.trim()) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const selectedPillarObj = pillars.find((p) => p.id === selectedPillar);
    const pillarName = selectedPillarObj ? selectedPillarObj.name : "General";

    try {
      const res = await submitToWeb3Forms({
        subject: `⚡ [1008 GET STARTED]: ${fullName} — ${pillarName}`,
        name: fullName,
        email: email,
        replyTo: email,
        botcheck: honeypot,
        data: {
          Pillar: pillarName,
          FullName: fullName,
          Email: email,
          Phone: phone,
          City: city || "Not specified",
          CurrentStage: stage,
          WhatTheyNeed: details,
        },
      });

      if (res.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(res.message || "Submission failed. Please try again or email us directly at join@1008.network.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network connection error. Please try again or email join@1008.network.");
    }
  };

  const activePillarObj = pillars.find((p) => p.id === selectedPillar) || pillars[0];

  return (
    <div className="min-h-screen w-full bg-[#FAFCFF] relative pt-20 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 selection:bg-[#635BFF]/15 selection:text-[#0A2540] overflow-hidden">
      {/* Background Signature Micro-Dot Matrix */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35] z-0"
        style={{
          backgroundImage: "radial-gradient(#CBD5E1 1.8px, transparent 1.8px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient Multi-Hue Halos */}
      <div className="absolute top-20 left-1/3 -translate-x-1/2 w-[600px] h-96 bg-gradient-to-r from-[#635BFF]/08 via-[#00D4B2]/06 to-transparent blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-80 bg-gradient-to-l from-[#FF6B4A]/06 via-[#00A68C]/06 to-transparent blur-[140px] pointer-events-none z-0" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] mb-6">
          <Link href="/" className="hover:text-[#0A2540] transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-[#0A2540] font-semibold">Get Started</span>
        </div>

        {/* Success View */}
        {status === "success" ? (
          <div className="p-8 sm:p-12 rounded-[28px] sm:rounded-[36px] bg-white border border-[#CBD5E1]/90 shadow-xl text-center space-y-6 animate-in fade-in-50 zoom-in-95 duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E6FFFA] border-2 border-[#B2F5EA] flex items-center justify-center mx-auto text-[#00A389] shadow-sm">
              <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 stroke-[2.2]" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] text-[#15803D] text-xs font-mono font-semibold border border-[#BBF7D0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                <span>Mandate Received</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                Thank You, {fullName.split(" ")[0]}!
              </h1>
              <p className="text-sm sm:text-base text-[#425466] max-w-lg mx-auto leading-relaxed">
                We have received your requirements for <strong className="text-[#0A2540]">{activePillarObj.name}</strong>. A 1008 partner will review your details and connect with you on WhatsApp or email within 24 hours.
              </p>
            </div>

            {/* Quick action card */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] max-w-md mx-auto text-left space-y-2">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#635BFF]">
                Meanwhile, Explore Pathway
              </div>
              <div className="text-sm font-bold text-[#0A2540]">
                {activePillarObj.name}
              </div>
              <p className="text-xs text-[#64748B]">
                Browse verified live mandates, thesis listings, and active requirements.
              </p>
              <div className="pt-2">
                <Link
                  href={activePillarObj.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#635BFF] hover:text-[#4F46E5] group"
                >
                  <span>Visit {activePillarObj.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-[#0A2540] hover:bg-[#1E3A5F] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        ) : (
          /* Form View */
          <div className="space-y-8">
            {/* Header Box */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#CBD5E1] shadow-2xs text-[#0A2540] text-xs font-mono font-semibold">
                <Sparkles className="h-3.5 w-3.5 text-[#635BFF]" />
                <span>1008 Network • Direct Access</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                Get Started with 1008 Network
              </h1>
              <p className="text-xs sm:text-sm text-[#425466] max-w-xl mx-auto leading-relaxed">
                Select the growth pathway that best matches what you need today. Short, simple, and direct — no broker spam.
              </p>
            </div>

            {/* Enclosing Card Container Box */}
            <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-[#CBD5E1]/90 p-6 sm:p-9 shadow-lg shadow-slate-200/50 space-y-8 text-left">
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Honeypot trap field (hidden from humans) */}
                <input
                  type="text"
                  name="botcheck"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Section 1: Choose Pillar */}
                <div className="space-y-3">
                  <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A2540] font-mono">
                    1. Which growth pathway do you need? <span className="text-[#E11D48]">*</span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pillars.map((p) => {
                      const isSelected = selectedPillar === p.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setSelectedPillar(p.id)}
                          className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 flex items-start gap-3 cursor-pointer ${
                            isSelected
                              ? p.selectedBorder
                              : "border-[#E2E8F0] hover:border-[#CBD5E1] bg-white hover:bg-[#F8FAFC]"
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 p-1 ${
                              isSelected ? "bg-white shadow-xs" : "bg-[#F8FAFC]"
                            }`}
                          >
                            <Image
                              src={p.icon3d}
                              alt={p.name}
                              width={36}
                              height={36}
                              className="w-full h-full object-contain drop-shadow-xs"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs sm:text-[13px] font-bold text-[#0A2540] leading-snug">
                                {p.name}
                              </span>
                              {isSelected && (
                                <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                              )}
                            </div>
                            <p className="text-[11px] text-[#64748B] leading-tight pt-1">
                              {p.tagline}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Section 2: Contact Information */}
                <div className="space-y-4 pt-4 border-t border-[#F1F5F9]">
                  <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A2540] font-mono">
                    2. Your Contact Information
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#0A2540]">
                        Your Full Name <span className="text-[#E11D48]">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]\ text-[#94A3B8]" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g., Rohit Sharma"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs sm:text-sm text-[#0A2540] focus:outline-hidden focus:ring-2 focus:ring-[#635BFF] focus:border-[#635BFF] transition-all bg-white"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#0A2540]">
                        Work or Personal Email <span className="text-[#E11D48]">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]\ text-[#94A3B8]" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="rohit@example.com"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs sm:text-sm text-[#0A2540] focus:outline-hidden focus:ring-2 focus:ring-[#635BFF] focus:border-[#635BFF] transition-all bg-white"
                        />
                      </div>
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#0A2540]">
                        Phone / WhatsApp Number <span className="text-[#E11D48]">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]\ text-[#94A3B8]" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs sm:text-sm text-[#0A2540] focus:outline-hidden focus:ring-2 focus:ring-[#635BFF] focus:border-[#635BFF] transition-all bg-white"
                        />
                      </div>
                    </div>

                    {/* City / Location */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-[#0A2540]">
                        City / Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94A3B8]\ text-[#94A3B8]" />
                        <input
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="e.g., Delhi NCR, Bengaluru, Mumbai"
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs sm:text-sm text-[#0A2540] focus:outline-hidden focus:ring-2 focus:ring-[#635BFF] focus:border-[#635BFF] transition-all bg-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3: Details about what you need */}
                <div className="space-y-4 pt-4 border-t border-[#F1F5F9]">
                  <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A2540] font-mono">
                    3. What are you building or what do you need?
                  </label>

                  {/* Stage Selector */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#0A2540]">
                      Current Stage
                    </label>
                    <select
                      value={stage}
                      onChange={(e) => setStage(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#CBD5E1] text-xs sm:text-sm text-[#0A2540] focus:outline-hidden focus:ring-2 focus:ring-[#635BFF] focus:border-[#635BFF] transition-all bg-white cursor-pointer"
                    >
                      {stages.map((stg) => (
                        <option key={stg} value={stg}>
                          {stg}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Requirements Textarea */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#0A2540]">
                      Describe your requirement or venture <span className="text-[#E11D48]">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="e.g., Looking for a Technical Co-Founder (CTO) for our healthtech simulator with 1,200 active pilots... OR Raising ₹25L seed capital for an EV battery assembly plant..."
                      className="w-full p-3.5 rounded-xl border border-[#CBD5E1] text-xs sm:text-sm text-[#0A2540] focus:outline-hidden focus:ring-2 focus:ring-[#635BFF] focus:border-[#635BFF] transition-all leading-relaxed bg-white"
                    />
                    <div className="text-[11px] text-[#64748B]">
                      Keep it simple. 2–3 sentences about your business, what role or capital you need, and any traction.
                    </div>
                  </div>
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <div className="p-3.5 rounded-xl bg-[#FFF1F2] border border-[#FECDD3] text-[#E11D48] text-xs font-medium">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Action & Trust Note */}
                <div className="pt-4 border-t border-[#F1F5F9] space-y-3">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#635BFF] hover:bg-[#5851EA] disabled:bg-[#94A3B8] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Submitting Mandate...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Mandate & Get Started</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
