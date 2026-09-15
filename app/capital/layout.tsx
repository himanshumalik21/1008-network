import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Startup Capital & Co-Investment Syndicate | 1008 Network",
  description:
    "Invest in high-conviction Indian startups or raise capital for your venture. De-risked with turnkey ground operations, mutual NDA, and zero placement fees.",
  keywords: [
    "Invest in Startups India",
    "Angel Investment Platform India",
    "Startup Capital India",
    "Raise Startup Funding India",
    "Venture Syndicate India",
    "Asset Backed Startup Investment",
    "1008 Capital Network",
  ],
  openGraph: {
    title: "Startup Capital & Co-Investment Syndicate | 1008 Network",
    description:
      "Anyone can invest in high-conviction Indian businesses. Startups find the right capital and turnkey operational co-builders.",
    url: "https://www.1008.network/capital",
  },
  alternates: {
    canonical: "https://www.1008.network/capital",
  },
};

export default function CapitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
