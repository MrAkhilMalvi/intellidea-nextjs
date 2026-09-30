import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BioLayout } from "@/app/components/BioLayout";
import { teamMembersData } from "@/app/data/teamMembers";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic SEO Metadata Generator
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembersData[slug];

  if (!member) {
    return {
      title: "Member Not Found | Intellidea",
    };
  }

  const title = `${member.name} - ${member.title} | Intellidea`;
  const description = `Learn more about ${member.name}, ${member.title} at Intellidea.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/team/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "profile",
      images: [
        {
          url: member.imageSrc,
          alt: member.imageAlt || member.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [member.imageSrc],
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

  // Optional: JSON-LD ProfilePage Schema for rich Google search snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: member.name,
      jobTitle: member.title,
      image: member.imageSrc,
      worksFor: {
        "@type": "Organization",
        name: "Intellidea",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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