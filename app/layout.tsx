import React from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from "next";

const siteUrl =  "https://intellidea.co.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Intellidea - Innovation & Enterprise Solutions",
    template: "%s | Intellidea",
  },
  description: "Transforming ideas into scalable digital and enterprise business solutions.",
  keywords: [
    "Intellidea",
    "People & Workforce",
    "Investments, Funding, IPO and Growth",
    "Finance & Governance",
    "Strategy & Transformation",
    "Technology, AI & Digital",
    "Risk & Cybersecurity",
    "Sustainability & ESG"
  ],
  authors: [{ name: "Intellidea Team" }],
  creator: "Intellidea",
  publisher: "Intellidea",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Intellidea - Innovation & Enterprise Solutions",
    description: "Transforming ideas into scalable digital and enterprise business solutions.",
    url: siteUrl,
    siteName: "Intellidea",
    locale: "en_US",
    type: "website",
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

// JSON-LD Structured Data for Organization / Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Intellidea",
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  description: "Transforming ideas into scalable digital and enterprise business solutions.",
  sameAs: [
    // Add your social links here if available
    "https://github.com",
    "https://linkedin.com",
  ],
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
        {/* Inject JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-white text-gray-900 font-sans">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}