import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

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
    default: "1008 — Hands-On Venture Studio for New Ventures & Stalled Businesses",
    template: "%s | 1008",
  },
  description:
    "1008 partners with founders, entrepreneurs, and businesses to build, launch, and scale high-growth tech ventures in 180 days — zero agency retainers, shared skin in the game.",
  keywords: [
    "Venture Studio India",
    "Startup Studio",
    "Technical Co-founder Studio",
    "Turnaround Venture Studio",
    "Build With 1008",
    "1008 Studio",
    "Software Engineering Partner",
    "Seed Stage Syndicate India",
  ],
  authors: [{ name: "1008 Studio Team", url: "https://1008.network" }],
  creator: "1008",
  publisher: "1008.network",
  metadataBase: new URL("https://1008.network"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://1008.network",
    title: "1008 — Hands-On Venture Studio for New Ventures & Stalled Businesses",
    description:
      "Have a business idea or a venture that's stalled? We build the tech & execution muscle to scale it.",
    siteName: "1008.network",
  },
  twitter: {
    card: "summary_large_image",
    title: "1008 — Hands-On Venture Studio",
    description: "Have a business idea or a venture that's stalled? We build the tech & execution muscle to scale it.",
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
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
