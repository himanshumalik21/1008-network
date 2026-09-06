import React from "react";
import { Badge } from "@/components/brand/Badge";

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <Badge variant="slate" size="sm">Legal & Compliance</Badge>
          <h1 className="text-3xl font-extrabold text-foreground font-sans">
            Terms of Service & Syndicate Disclaimer
          </h1>
          <p className="text-xs font-mono text-muted-foreground">Last Updated: September 2026</p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-surface-50 border border-border text-xs sm:text-sm text-muted-foreground leading-relaxed space-y-6 font-sans shadow-md">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">1. Nature of Platform</h2>
            <p>
              1008 (`1008.network`) operates as a venture-building studio, talent network, and curated knowledge repository. 1008 is not a registered broker-dealer, investment adviser, or public stock exchange under SEBI regulations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">2. 1008 Capital Syndicate Notice</h2>
            <p>
              Information presented on the 1008 Capital deal board is for informational purposes for accredited angel investors, family offices, and verified participants only. Expressions of Interest (EOI) do not constitute a binding contract or a public solicitation of securities.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">3. 60-Day Partner Network Standard</h2>
            <p>
              All opportunities submitted to the 1008 Partner Network undergo editorial review and remain live for an active lifecycle of 60 days. 1008 reserves the right to archive or remove listings that fail to maintain response standards.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-foreground">4. Intellectual Property</h2>
            <p>
              All content, brand identity, and materials on 1008.network are the property of 1008. For ventures built within the 1008 Studio, all created software source code and IP are governed by individual venture assignment agreements.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
