import IndustryPageTemplate from "@/app/components/IndustryPageTemplate";
import { JsonLd } from "@/app/components/JsonLd";
import { PageBreadcrumbs } from "@/app/components/PageBreadcrumbs";
import { getIndustryBySlug, industries } from "@/app/data/industries";
import { SITE_URL, absoluteUrl, buildMetadata } from "@/app/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return { title: "Industry Not Found", robots: { index: false } };
  }

  // Use the dedicated SEO block when present, otherwise fall back to basic fields
  const seo = industry.seo;
  const hasSeoTitle = Boolean(seo?.title);

  return buildMetadata({
    title: seo?.title ?? industry.title,
    // A hand-written SEO title is already complete; don't append "| Intellidea" twice
    absoluteTitle: hasSeoTitle,
    description: seo?.description ?? industry.intro,
    keywords: seo?.keywords,
    path: `/industries/${industry.slug}`,
    image: industry.heroImage,
    imageAlt: industry.title,
    ogTitle: seo?.ogTitle,
    ogDescription: seo?.ogDescription,
  });
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const url = absoluteUrl(`/industries/${industry.slug}`);

  return (
    <>
      <PageBreadcrumbs
        trail={[
          { name: "Industries", path: "/industries" },
          { name: industry.title, path: `/industries/${industry.slug}` },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${url}#service`,
          name: industry.seo?.title ?? industry.title,
          description: industry.seo?.description ?? industry.intro,
          url,
          image: absoluteUrl(industry.heroImage),
          areaServed: "Worldwide",
          provider: { "@id": `${SITE_URL}/#organization` },
        }}
      />
      <IndustryPageTemplate industry={industry} />
    </>
  );
}
