import React from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import { OrganizationJsonLd } from "next-seo";
import { JsonLd } from "./components/JsonLd";
import {
  CONTACT_PHONE,
  DEFAULT_OG_IMAGE,
  LINKEDIN_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "./lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Intellidea - Innovation & Enterprise Solutions",
    template: "%s | Intellidea",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Intellidea",
    "People & Workforce",
    "Investments, Funding, IPO and Growth",
    "Finance & Governance",
    "Strategy & Transformation",
    "Technology, AI & Digital",
    "Risk & Cybersecurity",
    "Sustainability & ESG",
  ],
  authors: [{ name: "Intellidea Team" }],
  creator: "Intellidea",
  publisher: "Intellidea",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Intellidea - Innovation & Enterprise Solutions",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Intellidea" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intellidea - Innovation & Enterprise Solutions",
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
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

// Site-wide WebSite schema (Organization schema is rendered with next-seo below)
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        {/* Site-wide structured data */}
        <OrganizationJsonLd
          useAppDir={true}
          type="Organization"
          id={`${SITE_URL}/#organization`}
          name={SITE_NAME}
          url={SITE_URL}
          logo={`${SITE_URL}${DEFAULT_OG_IMAGE}`}
          sameAs={[LINKEDIN_URL]}
          contactPoint={[
            {
              telephone: CONTACT_PHONE,
              contactType: "customer service",
              areaServed: "Worldwide",
              availableLanguage: ["English"],
            },
          ]}
        />
        <JsonLd data={websiteJsonLd} />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-white text-gray-900 font-sans">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}