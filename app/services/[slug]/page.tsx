import ServicePageTemplate from "@/app/components/ServicePageTemplate";
import { JsonLd } from "@/app/components/JsonLd";
import { PageBreadcrumbs } from "@/app/components/PageBreadcrumbs";
import { getServiceBySlug, services } from "@/app/data/services";
import { SITE_URL, absoluteUrl, buildMetadata } from "@/app/lib/seo";
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
    return { title: "Service Not Found", robots: { index: false } };
  }

  return buildMetadata({
    title: service.title,
    description: service.intro,
    path: `/services/${service.slug}`,
    image: service.heroImage,
    imageAlt: service.title,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const url = absoluteUrl(`/services/${service.slug}`);

  return (
    <>
      <PageBreadcrumbs
        trail={[
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${url}#service`,
          name: service.title,
          description: service.intro,
          url,
          image: absoluteUrl(service.heroImage),
          areaServed: "Worldwide",
          provider: { "@id": `${SITE_URL}/#organization` },
        }}
      />
      <ServicePageTemplate service={service} />
    </>
  );
}
