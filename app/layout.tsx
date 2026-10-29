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
    default: "1008 Network — Build the Business You Know Should Exist",
    template: "%s | 1008 Network",
  },
  description:
    "1008 Network helps experienced professionals and entrepreneurs turn industry expertise into operating businesses — with the people, systems, and execution needed to make them real.",
  keywords: [
    "1008 Network",
    "Venture Studio India",
    "Co Founder Matching India",
    "Turnkey Business Setup India",
    "Find Technical Co Founder",
    "Find CTO for Equity India",
    "Technical Co Founder Platform",
    "Fractional CXO Network",
    "Operations as a Service India",
    "Venture Builder India",
    "Startup Playbook India",
    "Delhi NCR Venture Studio",
  ],
  authors: [{ name: "1008 Network", url: "https://www.1008.network" }],
  creator: "1008 Network",
  publisher: "1008.network",
  metadataBase: new URL("https://www.1008.network"),
  alternates: {
    canonical: "https://www.1008.network",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "zRGxo0D-z82H3UqxPjmXVcoPIB3yuli6-NgUQFvZ3I4",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.1008.network",
    title: "1008 Network — Build the Business You Know Should Exist",
    description:
      "1008 Network helps experienced professionals and entrepreneurs turn industry expertise into operating businesses with turnkey technology, operations, and talent matching.",
    siteName: "1008.network",
    images: [
      {
        url: "https://www.1008.network/1008-network-logo.png",
        width: 1200,
        height: 630,
        alt: "1008 Network — Turnkey Co-Building for Experienced People",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1008 Network — Build the Business You Know Should Exist",
    description:
      "Turn domain expertise into an operating company with 1008 Network's turnkey execution and co-founder matching.",
    images: ["https://www.1008.network/1008-network-logo.png"],
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
    "@id": "https://www.1008.network/#organization",
    name: "1008 Network",
    url: "https://www.1008.network",
    logo: "https://www.1008.network/logo.png",
    description:
      "1008 Network is an integrated venture ecosystem in India delivering Venture Studio operational infrastructure for equity, Partner Network co-founder matching, Capital syndicate allocation, and Playbook intelligence.",
    sameAs: [
      "https://www.linkedin.com/company/1008-network/",
      "https://x.com/1008network",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi NCR",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "join@1008.network",
      contactType: "Venture Inquiries & Partnerships",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "1008 Network Five Growth Pathways",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Co-Founders & Talent",
            description: "Find trusted co-founders and key team members, or join an ambitious startup.",
            url: "https://www.1008.network/network",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Funding & Investors",
            description: "Connect directly with active angel investors and family offices.",
            url: "https://www.1008.network/capital",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Outsource Operations",
            description: "Let us run your day-to-day operations and tech so you can focus on growing your business.",
            url: "https://www.1008.network/studio",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gigs & Sprints",
            description: "Get short-term 1–4 week projects completed by verified freelancers and specialists.",
            url: "https://www.1008.network/gigs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Playbooks & Business Opportunities",
            description: "Daily market research, validated business ideas, and practical guides on cash flow, legal setups, and fundraising.",
            url: "https://www.1008.network/knowledge",
          },
        },
      ],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.1008.network/#website",
    url: "https://www.1008.network",
    name: "1008 Network",
    description: "Venture Studio, Co-Founder Matching, Startup Capital & Tactical Playbooks in India",
    publisher: {
      "@id": "https://www.1008.network/#organization",
    },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.1008.network/knowledge?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground min-h-screen flex flex-col antialiased selection:bg-[#635BFF]/15 selection:text-[#0A2540]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
