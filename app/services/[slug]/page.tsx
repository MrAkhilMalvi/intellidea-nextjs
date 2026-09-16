import ServicePageTemplate from "@/app/components/ServicePageTemplate";
import { getServiceBySlug, services } from "@/app/data/services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found | Intellidea" };
  }

  return {
    title: `${service.title} | Intellidea`,
    description: service.intro,
    openGraph: {
      title: `${service.title} | Intellidea`,
      description: service.intro,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}