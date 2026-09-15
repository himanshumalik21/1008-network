"use client";

import React, { useState } from "react";
import { StartupCapitalCard, InvestorCard } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Badge } from "@/components/brand/Badge";
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Send,
  Building2,
  TrendingUp,
  MapPin,
  Sparkles,
} from "lucide-react";

interface CapitalInterestModalProps {
  targetStartup?: StartupCapitalCard | null;
  targetInvestor?: InvestorCard | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CapitalInterestModal: React.FC<CapitalInterestModalProps> = ({
  targetStartup,
  targetInvestor,
  isOpen,
  onClose,
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ticketOrPitch, setTicketOrPitch] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  if (!isOpen || (!targetStartup && !targetInvestor)) return null;

  const isStartupTarget = Boolean(targetStartup);
  const title = isStartupTarget
    ? `Express Investment Interest: ${targetStartup?.startupName}`
    : `Request Introduction with ${targetInvestor?.name}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent bot trap
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e88383cf-5322-4ff5-b91c-fa315b9c0f99",
          subject: isStartupTarget
            ? `💼 [DEAL INQUIRY]: ${fullName} for ${targetStartup?.startupName}`
            : `🤝 [INVESTOR INTRO REQUEST]: ${fullName} with ${targetInvestor?.name}`,
          from_name: "1008 Capital Network",
          replyto: email,
          name: fullName,
          email,
          phone,
          target_entity: isStartupTarget ? targetStartup?.title : targetInvestor?.title,
          ticket_or_pitch: ticketOrPitch,
          message,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setStatusMsg("Your inquiry has been received under Mutual NDA. Our syndicate team will coordinate an introduction within 24–48 business hours.");
      } else {
        setStatus("error");
        setStatusMsg(data.message || "Submission failed. Please email join@1008.network directly.");
      }
    } catch {
      setStatus("error");
      setStatusMsg("An error occurred. Please email join@1008.network directly.");
    }
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setTicketOrPitch("");
    setMessage("");
    setStatus("idle");
    setStatusMsg("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A2540]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-[#E6E8EB] shadow-2xl overflow-hidden p-6 sm:p-8 space-y-5">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-1.5 rounded-full text-[#829AB1] hover:text-[#0A2540] hover:bg-[#F1F5F9] transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="space-y-1.5 pr-8">
          <Badge variant={isStartupTarget ? "indigo" : "cyan"} size="sm">
            {isStartupTarget ? "Startup Deal Inquiry" : "Investor Introduction"}
          </Badge>
          <h3 className="text-xl font-bold text-[#0A2540] leading-snug">
            {title}
          </h3>
          <p className="text-xs text-[#627D98]">
            {isStartupTarget
              ? `Target Raise: ${targetStartup?.targetRaise} • Location: ${targetStartup?.location}`
              : `Allocation: ${targetInvestor?.ticketSizeRange} • ${targetInvestor?.category}`}
          </p>
        </div>

        {status === "success" ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center border border-[#A7F3D0]">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h4 className="text-lg font-bold text-[#0A2540]">Inquiry Registered Successfully</h4>
            <p className="text-xs text-[#425466] leading-relaxed max-w-sm mx-auto">
              {statusMsg}
            </p>
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
                name="preferred_callback"
                tabIndex={-1}
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                label="Your Full Name"
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
              <Input
                label={isStartupTarget ? "Intended Allocation (₹ Lakhs)" : "Your Startup / Venture Name"}
                required
                placeholder={isStartupTarget ? "e.g. ₹10 Lakhs" : "e.g. MedFlow Tech"}
                value={ticketOrPitch}
                onChange={(e) => setTicketOrPitch(e.target.value)}
              />
            </div>

            <Textarea
              label="Introduction Note or Relevant Background"
              rows={3}
              placeholder={
                isStartupTarget
                  ? "Briefly describe your investor profile, strategic value-add, or questions on unit economics..."
                  : "Briefly explain what problem your startup solves and what capital/co-building support you are seeking..."
              }
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {status === "error" && (
              <p className="text-xs text-red-500 font-semibold">{statusMsg}</p>
            )}

            <div className="pt-2 flex items-center justify-between border-t border-[#E6E8EB]">
              <div className="flex items-center gap-1.5 text-[11px] text-[#627D98] font-mono">
                <Lock className="h-3 w-3 text-[#059669]" />
                <span>Mutual NDA Standard</span>
              </div>
              <Button
                type="submit"
                variant="primary"
                size="sm"
                isLoading={status === "submitting"}
                rightIcon={<Send className="h-3.5 w-3.5" />}
                className="font-semibold px-5"
              >
                Send Request
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
