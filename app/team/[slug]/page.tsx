import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BioLayout } from "@/app/components/BioLayout";
import { JsonLd } from "@/app/components/JsonLd";
import { PageBreadcrumbs } from "@/app/components/PageBreadcrumbs";
import { teamMembersData } from "@/app/data/teamMembers";
import { SITE_URL, absoluteUrl, buildMetadata } from "@/app/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/**
 * SEO is kept ONLY for the Founder / Co-founder profiles.
 * Advisors, associates and the rest of the team have no metadata and
 * no JSON-LD (and are left out of the sitemap).
 */
const isFounder = (title: string) => /founder/i.test(title);

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembersData[slug];

  if (!member || !isFounder(member.title)) return {};

  return {
    ...buildMetadata({
      title: `${member.name} - ${member.title}`,
      description: `Learn more about ${member.name}, ${member.title} at Intellidea.`,
      path: `/team/${slug}`,
      image: member.imageSrc,
      imageAlt: member.imageAlt || member.name,
    }),
  };
}

// Pre-render all pages at build time (SSG)
export async function generateStaticParams() {
  return Object.keys(teamMembersData).map((slug) => ({
    slug,
  }));
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const member = teamMembersData[slug];

  if (!member) {
    notFound(); // Triggers Next.js 404 page if slug is invalid
  }

  const founder = isFounder(member.title);
  const url = absoluteUrl(`/team/${slug}`);

  return (
    <>
      {founder && (
        <>
          <PageBreadcrumbs
            trail={[{ name: member.name, path: `/team/${slug}` }]}
          />
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              url,
              mainEntity: {
                "@type": "Person",
                "@id": `${url}#person`,
                name: member.name,
                jobTitle: member.title,
                image: absoluteUrl(member.imageSrc),
                url,
                worksFor: { "@id": `${SITE_URL}/#organization` },
              },
            }}
          />
        </>
      )}
      <BioLayout
        name={member.name}
        title={member.title}
        imageSrc={member.imageSrc}
        imageAlt={member.imageAlt}
        imageWrapperClass="flex md:justify-end h-[90vh] md:h-[100vh]"
      >
        {member.bio}
      </BioLayout>
    </>
  );
}