import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BioLayout } from "@/app/components/BioLayout";
import { JsonLd } from "@/app/components/JsonLd";
import { PageBreadcrumbs } from "@/app/components/PageBreadcrumbs";
import { teamMembersData } from "@/app/data/teamMembers";
import {
  FOUNDER_IMAGE,
  FOUNDER_SAME_AS,
  SITE_URL,
  absoluteUrl,
  buildMetadata,
  isIndexedTeamSlug,
} from "@/app/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const VIRESH_TITLE = "Viresh Patel - Founder & CEO | Intellidea";
const VIRESH_DESCRIPTION =
  "Viresh Patel is Founder and CEO of Intellidea, with more than 28 years of experience across IT, BFSI, education, online assessments and US healthcare.";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembersData[slug];

  if (!member) return { title: "Profile Not Found", robots: { index: false } };

  // Every profile except Viresh Patel stays out of Google.
  if (!isIndexedTeamSlug(slug)) {
    return {
      title: member.name,
      robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
    };
  }

  return {
    ...buildMetadata({
      title: VIRESH_TITLE,
      description: VIRESH_DESCRIPTION,
      path: `/team/${slug}`,
      image: FOUNDER_IMAGE,
      imageAlt: "Viresh Patel - Founder & CEO of Intellidea",
      absoluteTitle: true,
      keywords: [
        "Viresh Patel",
        "Viresh Patel Intellidea",
        "Viresh Patel Founder & CEO",
        "Intellidea founder",
      ],
    }),
    // The site default hides image previews; this one profile is allowed a large photo.
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
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

  const url = absoluteUrl(`/team/${slug}`);
  const indexed = isIndexedTeamSlug(slug);

  return (
    <>
      {indexed && (
        <>
          <PageBreadcrumbs trail={[{ name: member.name, path: `/team/${slug}` }]} />
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              url,
              name: VIRESH_TITLE,
              mainEntity: {
                "@type": "Person",
                "@id": `${url}#person`,
                name: member.name,
                alternateName: "Viresh Patel Intellidea",
                jobTitle: member.title,
                description: VIRESH_DESCRIPTION,
                image: absoluteUrl(FOUNDER_IMAGE),
                url,
                ...(FOUNDER_SAME_AS.length > 0 ? { sameAs: FOUNDER_SAME_AS } : {}),
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
