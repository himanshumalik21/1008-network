"use client";

import React, { useState } from "react";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { submitContactInquiry } from "@/lib/actions";
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
      const res = await submitContactInquiry(formData);
      if (res.success) {
        setStatus("success");
        setMsg(res.message);
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
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 text-center mb-12">
          <Badge variant="amber" size="sm">Get in Touch</Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground font-sans">
            Connect with 1008
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Whether you want to explore the Venture Studio, discuss syndicate allocations, or book office hours with our partners in Delhi NCR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column: Direct Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-surface-50 border border-border space-y-4 shadow-xs">
              <h3 className="text-sm font-mono uppercase tracking-wider text-foreground font-semibold">
                Direct Inbound
              </h3>
              
              <div className="space-y-3 text-xs text-muted-foreground">
                <div className="flex items-start gap-2.5">
                  <Mail className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground block font-semibold">Email</span>
                    <span>join@1008.network</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground block font-semibold">Headquarters</span>
                    <span>Delhi NCR, India (Operating Pan-India)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-foreground block font-semibold">Response SLA</span>
                    <span>Within 24 business hours</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface-50 border border-border text-xs text-muted-foreground space-y-2 shadow-xs">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                <ShieldCheck className="h-4 w-4" />
                <span>Confidentiality Guarantee</span>
              </div>
              <p className="leading-relaxed">
                We maintain strict confidentiality for all incoming founder submissions and corporate career transition inquiries.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7">
            {status === "success" ? (
              <div className="p-8 rounded-2xl bg-surface-50 border border-emerald-500/30 text-center space-y-4 shadow-md">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/25">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Message Received</h3>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">{msg}</p>
                <Button variant="secondary" size="sm" onClick={() => setStatus("idle")}>
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-surface-50 border border-border space-y-4 shadow-md">
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
                    <label className="block text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground">
                      Inquiry Type <span className="text-amber-500">*</span>
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full rounded-lg bg-surface-100 border border-border px-3.5 py-2.5 text-xs text-foreground focus:outline-none focus:border-amber-500"
                    >
                      <option value="Studio Inquiry" className="bg-surface-50">Build With 1008 (Venture Studio)</option>
                      <option value="Partner Network" className="bg-surface-50">1008 Partner Network</option>
                      <option value="Investor / Syndicate" className="bg-surface-50">1008 Capital / Syndicate</option>
                      <option value="Media / General" className="bg-surface-50">Media & General Partnerships</option>
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
                    className="w-full justify-center shadow-md font-semibold"
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
