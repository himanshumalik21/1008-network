"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Badge } from "@/components/brand/Badge";
import { submitStudioInvestmentRequest } from "@/lib/actions";
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Send,
  Building2,
  TrendingUp,
  Sparkles,
  PieChart,
  Layers,
  ArrowRight,
} from "lucide-react";

interface InvestIn1008ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InvestIn1008Modal: React.FC<InvestIn1008ModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [intendedTicket, setIntendedTicket] = useState("₹5 Lakhs – ₹10 Lakhs");
  const [investorType, setInvestorType] = useState("Angel Investor / CXO");
  const [notes, setNotes] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  if (!isOpen) return null;

  const ticketTiers = [
    "₹50,000 – ₹2 Lakhs",
    "₹2 Lakhs – ₹5 Lakhs",
    "₹5 Lakhs – ₹10 Lakhs",
    "₹10 Lakhs – ₹25 Lakhs",
    "₹25 Lakhs – ₹50 Lakhs",
    "₹50 Lakhs – ₹1 Crore+",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent bot rejection
    setStatus("submitting");

    try {
      const res = await submitStudioInvestmentRequest({
        fullName,
        email,
        phone,
        intendedTicket,
        investorType,
        notes,
      });

      if (res.success) {
        setStatus("success");
        setStatusMsg(res.message);
      } else {
        setStatus("error");
        setStatusMsg(res.message);
      }
    } catch {
      setStatus("error");
      setStatusMsg("An error occurred while submitting your request. Please email join@1008.network directly.");
    }
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setIntendedTicket("₹5 Lakhs – ₹10 Lakhs");
    setNotes("");
    setStatus("idle");
    setStatusMsg("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A2540]/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl border border-[#E6E8EB] shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-1.5 rounded-full text-[#829AB1] hover:text-[#0A2540] hover:bg-[#F1F5F9] transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header Block */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#635BFF]/10 text-[#635BFF] text-[11px] font-mono font-bold uppercase tracking-wider">
              Parent Studio Round
            </span>
            <Badge variant="emerald" size="sm">
              Portfolio Equity
            </Badge>
          </div>
          <h3 className="text-2xl font-extrabold text-[#0A2540] tracking-tight">
            Invest in 1008 Network Parent Studio
          </h3>
          <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
            Own equity in 1008 Network parent company. Gain diversified holding upside across every operational venture, manufacturing facility, and tech platform we co-build across India.
          </p>
        </div>

        {/* Studio Highlights Capsule */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-0.5">
            <span className="text-[#635BFF] font-bold block text-[11px] uppercase font-mono">Diversified</span>
            <p className="text-[#425466] text-[11px]">1 check gives equity upside across all studio ventures.</p>
          </div>
          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-0.5">
            <span className="text-[#059669] font-bold block text-[11px] uppercase font-mono">Zero Mgmt Fees</span>
            <p className="text-[#425466] text-[11px]">100% skin in the game with founders & operators.</p>
          </div>
          <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-0.5">
            <span className="text-[#00A389] font-bold block text-[11px] uppercase font-mono">Hands-On Ops</span>
            <p className="text-[#425466] text-[11px]">Active operational execution de-risks execution.</p>
          </div>
        </div>

        {status === "success" ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center border border-[#A7F3D0]">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h4 className="text-xl font-bold text-[#0A2540]">Expression of Interest Registered</h4>
            <p className="text-xs sm:text-sm text-[#425466] leading-relaxed max-w-md mx-auto">
              {statusMsg}
            </p>
            <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] text-xs text-[#425466] max-w-sm mx-auto text-left font-sans space-y-1">
              <div>• Intended Allocation: <strong>{intendedTicket}</strong></div>
              <div>• Profile Category: <strong>{investorType}</strong></div>
            </div>
            <div className="pt-2">
              <Button onClick={handleReset} variant="secondary" size="sm" className="font-semibold">
                Done & Close
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot Spam Trap */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="company_url_filter"
                tabIndex={-1}
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {/* Step 1: Target Allocation */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0A2540] font-mono">
                Intended Investment Allocation <span className="text-[#635BFF]">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {ticketTiers.map((tier) => (
                  <button
                    type="button"
                    key={tier}
                    onClick={() => setIntendedTicket(tier)}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                      intendedTicket === tier
                        ? "bg-[#F0F0FF] border-[#635BFF] text-[#635BFF] shadow-xs"
                        : "bg-[#F8FAFC] border-[#E6E8EB] text-[#425466] hover:border-[#CBD5E1]"
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <Input
                label="Full Name"
                required
                placeholder="e.g. Vikram Singhania"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <Input
                label="Work / Personal Email"
                required
                type="email"
                placeholder="vikram@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                label="Phone / WhatsApp"
                required
                placeholder="+91 98111 22233"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Select
                label="Investor Background Category"
                required
                value={investorType}
                onChange={(e) => setInvestorType(e.target.value)}
              >
                <option value="Angel Investor / CXO">Angel Investor / Corporate CXO</option>
                <option value="Working Professional / Senior Operator">Working Professional / Senior Operator</option>
                <option value="Family Office Principal">Family Office Principal</option>
                <option value="Business Owner / Industrialist">Business Owner / Industrialist</option>
                <option value="NRI / Global High-Net-Worth">NRI / Global High-Net-Worth</option>
                <option value="First-Time Startup Investor">First-Time Startup Investor</option>
              </Select>
            </div>

            <Textarea
              label="Strategic Value Add or Notes (Optional)"
              rows={2}
              placeholder="e.g. Interested in holding equity, can provide distribution relationships in retail/auto, or would like to request confidential studio deck..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] text-[11px] text-[#627D98] flex items-start gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-[#059669] shrink-0 mt-0.5" />
              <span>
                By submitting, you agree to our{" "}
                <Link href="/terms" className="text-[#635BFF] font-semibold hover:underline" target="_blank">
                  Terms & Mutual NDA
                </Link>{" "}
                and consent to processing under our{" "}
                <Link href="/privacy" className="text-[#635BFF] font-semibold hover:underline" target="_blank">
                  DPDP Privacy Policy
                </Link>.
              </span>
            </div>

            {status === "error" && (
              <p className="text-xs text-red-500 font-semibold">{statusMsg}</p>
            )}

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E6E8EB]">
              <div className="flex items-center gap-1.5 text-[11px] text-[#627D98] font-mono">
                <Lock className="h-3 w-3 text-[#059669]" />
                <span>Strictly confidential under 1008 Mutual NDA.</span>
              </div>
              <Button
                type="submit"
                variant="primary"
                size="md"
                isLoading={status === "submitting"}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="w-full sm:w-auto font-semibold px-6 shadow-xs"
              >
                Request 1008 Studio Data Room
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
