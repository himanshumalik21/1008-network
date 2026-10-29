import React from "react";
import { DesignTemplateHome } from "@/components/home/DesignTemplateHome";

export const metadata = {
  title: "1008 Network — One Community. Five Growth Pathways.",
  description:
    "Find co-founders, raise angel funding, outsource day-to-day operations, hire project experts, and access practical business playbooks.",
  keywords: [
    "1008 Network",
    "Co-Founders & Talent India",
    "Angel Investors India",
    "Outsource Operations",
    "Project Sprints",
    "Startup Playbooks",
    "Venture Studio India",
    "Founder Community",
  ],
  alternates: {
    canonical: "https://www.1008.network",
  },
  openGraph: {
    title: "1008 Network — One Community. Five Growth Pathways.",
    description:
      "Find co-founders, raise angel funding, outsource day-to-day operations, hire project experts, and access practical business playbooks.",
    url: "https://www.1008.network",
    siteName: "1008 Network",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.1008.network/brand/1008_logo_stacked_transparent.png",
        width: 1200,
        height: 630,
        alt: "1008 Network — One Community. Five Growth Pathways.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1008 Network — One Community. Five Growth Pathways.",
    description:
      "Find co-founders, raise angel funding, outsource day-to-day operations, hire project experts, and access practical business playbooks.",
    images: ["https://www.1008.network/brand/1008_logo_stacked_transparent.png"],
  },
};

export default function HomePage() {
  return (
    <div className="w-full min-h-screen lg:h-screen lg:overflow-hidden">
      <DesignTemplateHome />
    </div>
  );
}
