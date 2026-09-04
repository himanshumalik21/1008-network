"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { DealCard } from "@/lib/types";
import { submitDealEOI } from "@/lib/actions";
import { formatCurrencyINR } from "@/lib/utils";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

interface EOIModalProps {
  deal: DealCard | null;
  isOpen: boolean;
  onClose: () => void;
}

export function EOIModal({ deal, isOpen, onClose }: EOIModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [investorType, setInvestorType] = useState("Angel / CXO");
  const [ticketSizeINR, setTicketSizeINR] = useState(5); // 5 Lakhs default
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  if (!deal) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await submitDealEOI({
        dealId: deal.id,
        name,
        email,
        phone,
        investorType,
        ticketSizeINR,
        notes,
      });

      if (res.success) {
        setStatus("success");
        setMessage(res.message);
      } else {
        setStatus("error");
        setMessage(res.message);
      }
    } catch {
      setStatus("error");
      setMessage("Failed to submit expression of interest.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        if (status === "success") setStatus("idle");
      }}
      title={`Request Allocation: ${deal.name}`}
      subtitle={`Stage: ${deal.stage} • Valuation Cap: ${formatCurrencyINR(deal.valuationCapINR)}`}
      maxWidth="lg"
    >
      {status === "success" ? (
        <div className="py-8 text-center space-y-4">
          <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/25">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h4 className="text-xl font-bold text-white">EOI Confirmed</h4>
          <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
            {message}
          </p>
          <div className="p-4 rounded-xl bg-surface-200/60 border border-white/[0.06] text-xs text-muted max-w-md mx-auto text-left font-mono">
            <div>• Term Sheet & Financial Model access email sent to {email}</div>
            <div>• 1008 Syndicate Lead will coordinate allocation confirmation.</div>
          </div>
          <div className="pt-4">
            <Button
              variant="secondary"
              onClick={() => {
                onClose();
                setStatus("idle");
              }}
            >
              Close Window
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Investor Name"
              required
              placeholder="e.g. Rahul Kapoor"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Accredited Email"
              required
              type="email"
              placeholder="rahul@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Input
              label="Phone / WhatsApp"
              required
              placeholder="+91 98111 22233"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="space-y-1.5 text-left">
              <label className="block text-xs font-mono font-medium uppercase tracking-wider text-muted">
                Investor Profile <span className="text-amber-400">*</span>
              </label>
              <select
                value={investorType}
                onChange={(e) => setInvestorType(e.target.value)}
                className="w-full rounded-lg bg-surface-200/80 border border-white/[0.1] px-3.5 py-2.5 text-sm text-foreground focus:border-amber-400 focus:outline-none"
              >
                <option value="Angel / CXO" className="bg-[#111317]">Angel Investor / CXO</option>
                <option value="Family Office" className="bg-[#111317]">Family Office Principal</option>
                <option value="Syndicate Lead" className="bg-[#111317]">Syndicate / Fund Partner</option>
                <option value="Domain Specialist" className="bg-[#111317]">Domain Strategic Value-Add</option>
              </select>
            </div>
            <Input
              label="Ticket (₹ Lakhs)"
              required
              type="number"
              min={2}
              max={100}
              step={1}
              value={ticketSizeINR}
              onChange={(e) => setTicketSizeINR(parseFloat(e.target.value) || 0)}
              hint="Min: ₹2 Lakhs"
            />
          </div>

          <Textarea
            label="Strategic Value Add / Notes (Optional)"
            placeholder="e.g. Can open doors to hospital networks in North India, ex-CFO available for board advisory..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <div className="p-3.5 rounded-xl bg-surface-200/50 border border-white/[0.06] text-xs text-muted flex items-start gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              Expressing interest does not constitute a binding financial transaction. Allocations are subject to founder review and SHA execution under Indian legal guidelines.
            </span>
          </div>

          {status === "error" && <p className="text-xs text-red-400">{message}</p>}

          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
            <span className="text-xs font-mono text-muted">
              Target Ticket: <strong className="text-white">₹{ticketSizeINR} Lakhs</strong>
            </span>
            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={status === "submitting"}
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Submit Allocation EOI
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
