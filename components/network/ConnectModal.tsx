"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Opportunity } from "@/lib/types";
import { applyToOpportunity } from "@/lib/actions";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ConnectModalProps {
  opportunity: Opportunity | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ConnectModal({ opportunity, isOpen, onClose }: ConnectModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [yearsOfExp, setYearsOfExp] = useState(8);
  const [pitch, setPitch] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  if (!opportunity) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await applyToOpportunity(opportunity.id, {
        name,
        email,
        phone,
        linkedin,
        yearsOfExp,
        pitch,
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
      setMessage("Failed to submit connection request. Please try again.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        if (status === "success") setStatus("idle");
      }}
      title={`Partner Request: ${opportunity.role}`}
      subtitle={`Founder: ${opportunity.founderBackground.name} (${opportunity.sector})`}
      maxWidth="lg"
    >
      {status === "success" ? (
        <div className="py-8 text-center space-y-4">
          <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/25">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h4 className="text-xl font-bold text-foreground">Introduction Forwarded</h4>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            {message}
          </p>
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
              label="Your Full Name"
              required
              placeholder="e.g. Ananya Roy"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Work / Direct Email"
              required
              type="email"
              placeholder="ananya@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Input
              label="Phone / WhatsApp"
              required
              placeholder="+91 98765 00000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              label="LinkedIn URL"
              required
              placeholder="linkedin.com/in/ananya"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
            <Input
              label="Years of Experience"
              required
              type="number"
              min={2}
              max={35}
              value={yearsOfExp}
              onChange={(e) => setYearsOfExp(parseInt(e.target.value) || 0)}
            />
          </div>

          <Textarea
            label="Why are you the right complementary co-founder/operator?"
            required
            placeholder="Highlight your technical stack, enterprise deals closed, or supply chain execution relevant to this specific venture..."
            value={pitch}
            onChange={(e) => setPitch(e.target.value)}
            hint="Be concise and high-signal."
          />

          {status === "error" && <p className="text-xs text-red-500">{message}</p>}

          <div className="pt-4 border-t border-border flex items-center justify-between">
            <span className="text-xs font-mono text-muted-foreground">
              Equity: <strong className="text-amber-500">{opportunity.equityRange}</strong>
            </span>
            <Button
              type="submit"
              variant="cyan"
              size="md"
              isLoading={status === "submitting"}
              className="font-semibold shadow-sm"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Send Introduction Request
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
