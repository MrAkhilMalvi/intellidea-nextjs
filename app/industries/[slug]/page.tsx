import IndustryPageTemplate from "@/app/components/IndustryPageTemplate";
import { getIndustryBySlug, industries } from "@/app/data/industries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://intellidea.com"; // <- set your real domain

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return { title: "Industry Not Found | Intellidea", robots: { index: false } };
  }

  // Use the dedicated SEO block when present, otherwise fall back to basic fields
  const seo = industry.seo;
  const title = seo?.title ?? `${industry.title} | Intellidea`;
  const description = seo?.description ?? industry.intro;
  const ogTitle = seo?.ogTitle ?? title;
  const ogDescription = seo?.ogDescription ?? description;
  const url = `/industries/${industry.slug}`;

  return {
    // `absolute` stops a layout title template from appending "| Intellidea" twice
    title: { absolute: title },
    description,
    keywords: seo?.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "Intellidea",
      title: ogTitle,
      description: ogDescription,
      images: [{ url: industry.heroImage, alt: industry.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [industry.heroImage],
    },
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: industry.seo?.title ?? industry.title,
        description: industry.seo?.description ?? industry.intro,
        provider: { "@type": "Organization", name: "Intellidea", url: SITE_URL },
        areaServed: "Worldwide",
        url: `${SITE_URL}/industries/${industry.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Intellidea", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE_URL}/industries` },
          { "@type": "ListItem", position: 3, name: industry.title, item: `${SITE_URL}/industries/${industry.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustryPageTemplate industry={industry} />
    </>
  );
}