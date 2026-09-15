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
    default: "1008 Network — Co-Founder Matching, Shared Equity Roles & Turnkey Venture Operations",
    template: "%s | 1008 Network",
  },
  description:
    "1008 Network is the premier co-founder matching and operational venture studio in India. Find technical CTOs, GTM leaders, join high-conviction startups for shared equity, or build turnkey enterprises with zero consulting retainers.",
  keywords: [
    "Co Founder Matching India",
    "Find CTO Equity India",
    "Jobs for Equity India",
    "Startup Co Founder Platform",
    "Technical Co Founder India",
    "Fractional CXO India",
    "Venture Studio India",
    "Business Setup India",
    "Turnkey Operations Partner",
    "Manufacturing Plant Setup India",
    "Hospital Setup Partner",
    "Hotel & Hospitality Setup",
    "School Infrastructure Setup",
    "E-Commerce & D2C Operations",
    "Business Turnaround India",
    "1008 Network",
  ],
  authors: [{ name: "1008 Network Team", url: "https://1008.network" }],
  creator: "1008 Network",
  publisher: "1008.network",
  metadataBase: new URL("https://1008.network"),
  alternates: {
    canonical: "https://1008.network",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-1008network",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://1008.network",
    title: "1008 Network — Co-Founder Matching, Shared Equity Roles & Venture Operations",
    description:
      "Find co-founders, join startups for shared equity, and build scalable enterprises across India with zero upfront agency retainers.",
    siteName: "1008.network",
  },
  twitter: {
    card: "summary_large_image",
    title: "1008 Network — Co-Founder Matching & Venture Studio",
    description: "Find co-founders, join startups for equity, or deploy turnkey operations across India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://1008.network/#organization",
    name: "1008 Network",
    url: "https://1008.network",
    logo: "https://1008.network/logo.png",
    description:
      "Operational venture studio and co-founder talent network in India curating high-conviction partnerships and turnkey business execution for shared equity.",
    sameAs: [
      "https://www.linkedin.com/company/1008-network/",
      "https://x.com/1008network"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi NCR",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "join@1008.network",
      contactType: "Partnership & Co-Founder Inquiries",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://1008.network/#website",
    url: "https://1008.network",
    name: "1008 Network",
    description: "Co-Founder Matching, Shared Equity Opportunities & Venture Co-Building in India",
    publisher: {
      "@id": "https://1008.network/#organization",
    },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://1008.network/network?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
