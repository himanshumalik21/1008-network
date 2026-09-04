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
    default: "1008 (1008.network) — Venture Studio, Partner Network & Knowledge Hub",
    template: "%s | 1008.network",
  },
  description:
    "You bring the ambition. We build the business with you. 1008 is the high-conviction venture-building partner and talent syndicate for experienced Indian corporate leaders, domain experts, and entrepreneurs.",
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
    title: "1008 (1008.network) — You bring the ambition. We build the business with you.",
    description:
      "Venture Studio, 60-Day Partner Network, and Startup Knowledge Hub built for India's serious business builders.",
    siteName: "1008.network",
  },
  twitter: {
    card: "summary_large_image",
    title: "1008 (1008.network) — Venture Studio & Partner Network",
    description: "You bring the ambition. We build the business with you.",
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
      "High-conviction venture studio, talent syndicate, and startup knowledge hub for Indian corporate leaders and domain experts.",
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
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#090A0C] text-[#F4F4F6] min-h-screen flex flex-col selection:bg-amber-500/20 selection:text-amber-200 antialiased`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
