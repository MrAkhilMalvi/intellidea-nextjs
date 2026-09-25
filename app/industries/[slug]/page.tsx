import IndustryPageTemplate from "@/app/components/IndustryPageTemplate";
import { getIndustryBySlug, industries } from "@/app/data/industries";
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
    return { title: "Industry Not Found | Intellidea" };
  }

  return {
    title: `${industry.title} | Intellidea`,
    description: industry.intro,
    openGraph: {
      title: `${industry.title} | Intellidea`,
      description: industry.intro,
      images: [{ url: industry.heroImage }],
    },
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}