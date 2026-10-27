import React from "react";
import { DesignTemplateHome } from "@/components/home/DesignTemplateHome";

export const metadata = {
  title: "1008 Network — Smarter Business Starts Here",
  description:
    "Helping your business get closer to your goals. 1008 Network connects you with co-founders & talent, angel funding discovery, and turnkey operational execution.",
  alternates: {
    canonical: "https://www.1008.network",
  },
};

export default function HomePage() {
  return (
    <main className="w-full bg-white min-h-screen">
      <DesignTemplateHome />
    </main>
  );
}
