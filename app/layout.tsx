import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "1008 (1008.network) — Venture Studio for Senior Domain Leaders",
    template: "%s | 1008.network",
  },
  description:
    "1008 partners with experienced corporate leaders & domain veterans to build, launch, and spin out high-margin B2B tech ventures in 180 days — zero agency fees, shared skin in the game.",
  keywords: [
    "Venture Studio India",
    "Co-founder Matchmaking",
    "Startup Studio Delhi NCR",
    "Build With 1008",
    "1008 Network",
    "Indian Startup Talent Syndicate",
    "Domain Venture Building",
    "Seed Stage Syndicate India",
  ],
  authors: [{ name: "1008 Studio Architecture Team", url: "https://1008.network" }],
  creator: "1008",
  publisher: "1008.network",
  metadataBase: new URL("https://1008.network"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://1008.network",
    title: "1008 (1008.network) — Venture Studio for Domain Leaders",
    description:
      "You know where the industry bleeds money. We build the tech to capture it. 180-Day Venture Studio.",
    siteName: "1008.network",
  },
  twitter: {
    card: "summary_large_image",
    title: "1008 (1008.network) — Venture Studio for Domain Leaders",
    description: "You know where the industry bleeds money. We build the tech to capture it.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "1008",
    url: "https://1008.network",
    logo: "https://1008.network/logo.png",
    description:
      "High-conviction venture studio for Indian corporate leaders and domain experts.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi NCR",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "join@1008.network",
      contactType: "customer support",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground min-h-screen flex flex-col antialiased selection:bg-[#635BFF]/15 selection:text-[#0A2540]`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
