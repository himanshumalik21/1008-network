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
      name: "1008 Network Four Pillars",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Venture Studio",
            description: "Turnkey operational infrastructure, specialized talent, modern software, and syndicate capital for long-term venture equity.",
            url: "https://www.1008.network/studio",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Partner Network",
            description: "Curated co-founder matching and executive talent exchange for shared venture equity.",
            url: "https://www.1008.network/network",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Capital Network",
            description: "Capital discovery connecting promising startups with a curated network of angels, family offices, and eligible capital partners.",
            url: "https://www.1008.network/capital",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Venture Playbook",
            description: "Tactical operational blueprints, regulatory frameworks, and market playbooks for Indian founders.",
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
      <head>
        <meta
          name="google-site-verification"
          content="zRGxo0D-z82H3UqxPjmXVcoPIB3yuli6-NgUQFvZ3I4"
        />
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
