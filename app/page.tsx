import React from "react";
import { HomeMarketplaceClient } from "@/components/home/HomeMarketplaceClient";

export const metadata = {
  title: "1008 Network — Business Services Marketplace & Community",
  description:
    "1008 Network is a verified business services marketplace and community. Browse co-founder matching, angel funding discovery, outsourced tech development, and acute project sprints.",
  alternates: {
    canonical: "https://www.1008.network",
  },
};

export default function HomePage() {
  return (
    <main className="w-full bg-white min-h-screen">
      <HomeMarketplaceClient />
    </main>
  );
}
