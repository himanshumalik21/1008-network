import React from "react";
import { Badge } from "@/components/brand/Badge";

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <Badge variant="slate" size="sm">Data Privacy</Badge>
          <h1 className="text-3xl font-bold text-white font-sans">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-muted">Last Updated: September 2026</p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-surface-100/60 border border-white/[0.08] text-xs sm:text-sm text-muted leading-relaxed space-y-6 font-sans">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">1. Information Collection</h2>
            <p>
              We collect information you explicitly submit through our Studio application forms, Partner Network submissions, EOI deal inquiries, and newsletter signups.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">2. Use of Information & NDA</h2>
            <p>
              Founder problem theses and candidate resumes are treated under strict confidentiality. We do not sell or rent personal information to third-party brokers or advertisers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">3. Contact & Opt-Out</h2>
            <p>
              You may request deletion or modification of your data at any time by emailing <span className="text-white font-mono">join@1008.network</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
