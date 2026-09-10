"use client";

import React, { useState } from "react";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { submitContactInquiry } from "@/lib/actions";
import { submitToWeb3Forms } from "@/lib/client-submit";
import { trackContactSubmit } from "@/lib/analytics";
import {
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "Studio Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // 1. Dispatch directly via Web3Forms
      submitToWeb3Forms({
        subject: `📩 [CONTACT INQUIRY]: ${formData.type} - ${formData.name}`,
        name: formData.name,
        email: formData.email,
        replyTo: formData.email,
        data: {
          name: formData.name,
          email: formData.email,
          company: formData.company || "Independent",
          inquiryType: formData.type,
          message: formData.message,
        },
      }).catch((err) => console.warn("Web3Forms background dispatch:", err));

      // 2. Server Action
      const res = await submitContactInquiry(formData);
      if (res.success) {
        setStatus("success");
        setMsg(res.message);
        trackContactSubmit(formData.type);
        setFormData({ name: "", email: "", company: "", type: "Studio Inquiry", message: "" });
      } else {
        setStatus("error");
        setMsg(res.message);
      }
    } catch {
      setStatus("error");
      setMsg("Failed to send inquiry. Please email join@1008.network directly.");
    }
  };

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 text-center mb-12">
          <Badge variant="indigo" size="sm">Get in Touch</Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Connect with 1008 Network
          </h1>
          <p className="text-sm sm:text-base text-[#425466] max-w-xl mx-auto leading-relaxed">
            Whether you want to explore the Venture Studio, discuss venture theses, or book confidential office hours with our partners in Delhi NCR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column: Direct Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-4 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
              <h3 className="text-xs uppercase tracking-wider text-[#0A2540] font-bold">
                Direct Inbound
              </h3>
              
              <div className="space-y-3.5 text-xs text-[#627D98]">
                <div className="flex items-start gap-2.5">
                  <Mail className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#0A2540] block font-semibold">Email</span>
                    <span>join@1008.network</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-[#00A389] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#0A2540] block font-semibold">Headquarters</span>
                    <span>Delhi NCR, India (Operating Pan-India)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#0A2540] block font-semibold">Response SLA</span>
                    <span>Within 24 business hours</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] text-xs text-[#425466] space-y-2 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-1.5 text-[#059669] font-bold">
                <ShieldCheck className="h-4 w-4" />
                <span>Confidentiality Guarantee</span>
              </div>
              <p className="leading-relaxed">
                We maintain strict confidentiality under mutual NDA for all incoming founder submissions and corporate career transition inquiries.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7">
            {status === "success" ? (
              <div className="p-8 rounded-2xl bg-white border border-[#A7F3D0] text-center space-y-4 shadow-md">
                <div className="w-12 h-12 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto border border-[#A7F3D0]">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540]">Message Received</h3>
                <p className="text-xs text-[#425466] max-w-sm mx-auto leading-relaxed">{msg}</p>
                <Button variant="secondary" size="sm" onClick={() => setStatus("idle")}>
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E6E8EB] space-y-4 shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Your Name"
                    required
                    placeholder="e.g. Priyanshu Mehta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <Input
                    label="Email Address"
                    required
                    type="email"
                    placeholder="priyanshu@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Company / Organisation (Optional)"
                    placeholder="e.g. Apollo Hospitals / TCS"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />

                  <div className="space-y-1.5 text-left">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#627D98]">
                      Inquiry Type <span className="text-[#F4511E]">*</span>
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full rounded-xl bg-white border border-[#E6E8EB] px-3.5 py-2.5 text-xs text-[#0A2540] focus:outline-none focus:border-[#635BFF] shadow-xs"
                    >
                      <option value="Studio Inquiry">Build With 1008 Network (Venture Studio)</option>
                      <option value="Partner Network">1008 Network Partner Inquiry</option>
                      <option value="Investor / Syndicate">Venture Capital / Co-Investment</option>
                      <option value="Media / General">Media & General Partnerships</option>
                    </select>
                  </div>
                </div>

                <Textarea
                  label="Message / Thesis Summary"
                  required
                  placeholder="How can we help you build?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                {status === "error" && <p className="text-xs text-red-500">{msg}</p>}

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    isLoading={status === "submitting"}
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                    className="w-full justify-center font-semibold"
                  >
                    Submit Inquiry
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
