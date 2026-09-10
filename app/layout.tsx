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
    default: "1008 Network — End-to-End Business Operations & Turnkey Execution Partner",
    template: "%s | 1008 Network",
  },
  description:
    "1008 Network is the hands-on operations partner for businesses in India. You bring the vision & capital—we handle real estate, plant setup, machinery, licensing, manpower, tech, and marketing to build & scale it.",
  keywords: [
    "Business Setup India",
    "Turnkey Operations Partner",
    "Manufacturing Plant Setup India",
    "Hospital Setup Partner",
    "Hotel & Hospitality Setup",
    "School Infrastructure Setup",
    "E-Commerce & D2C Operations",
    "Venture Studio India",
    "Business Turnaround India",
    "1008 Network",
  ],
  authors: [{ name: "1008 Network Team", url: "https://1008.network" }],
  creator: "1008 Network",
  publisher: "1008.network",
  metadataBase: new URL("https://1008.network"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://1008.network",
    title: "1008 Network — End-to-End Business Operations & Turnkey Execution Partner",
    description:
      "You bring the vision & capital. We handle end-to-end operations to build, launch & scale your business.",
    siteName: "1008.network",
  },
  twitter: {
    card: "summary_large_image",
    title: "1008 Network — End-to-End Business Operations",
    description: "You bring the vision & capital. We handle end-to-end operations to build, launch & scale your business.",
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
    name: "1008 Network",
    url: "https://1008.network",
    logo: "https://1008.network/logo.png",
    description:
      "High-conviction venture studio for founders, entrepreneurs, and businesses.",
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
