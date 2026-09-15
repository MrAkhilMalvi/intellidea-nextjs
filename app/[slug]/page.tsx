// app/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ECOSYSTEM_PAGES } from "../data/ecoSystemData";
import { PillarPageLayout } from "../components/PillarPageLayout";


interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. Generate Static Params (SSG at build time for maximum speed)
export async function generateStaticParams() {
  return Object.keys(ECOSYSTEM_PAGES).map((slug) => ({
    slug,
  }));
}

// 2. Dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageData = ECOSYSTEM_PAGES[slug as keyof typeof ECOSYSTEM_PAGES];

  if (!pageData) return { title: "Page Not Found" };

  return {
    title: `${pageData.title || slug} | Intellidea`,
    description: pageData.description || "Learn more about our ecosystem.",
  };
}

// 3. Main Page Component
export default async function EcosystemPage({ params }: PageProps) {
  const { slug } = await params;
  const pageData = ECOSYSTEM_PAGES[slug as keyof typeof ECOSYSTEM_PAGES];

  // Automatically triggers 404 page if route doesn't exist in data
  if (!pageData) {
    notFound();
  }

  return <PillarPageLayout data={pageData} />;
}