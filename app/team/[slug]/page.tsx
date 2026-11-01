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

const priorityProfileMetadata: Record<
  string,
  { title: string; description: string }
> = {
  "viresh-patel": {
    title: "Viresh Patel - Founder & CEO at Intellidea | Leadership",
    description:
      "Viresh Patel is Founder and CEO of Intellidea, with more than 28 years of experience across IT, BFSI, education, online assessments and US healthcare.",
  },
  "rajnickant-patel": {
    title: "Rajnickant Patel - Founder & Chairman | Intellidea",
    description:
      "Rajnickant Patel is Founder and Chairman of Intellidea and a financial services leader with more than four decades of experience, including leadership roles at BSE and ICEX.",
  },
  "jyoti-patel": {
    title: "Jyoti Patel - Founder & Director | Intellidea",
    description:
      "Jyoti Patel is Founder and Director of Intellidea, bringing more than 25 years of experience in education, student development and social-impact initiatives.",
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembersData[slug];

  if (!member) return { title: "Profile Not Found", robots: { index: false } };

  const priorityMetadata = priorityProfileMetadata[slug];

  return {
    ...buildMetadata({
      title: priorityMetadata?.title ?? `${member.name} - ${member.title}`,
      description:
        priorityMetadata?.description ??
        `${member.name} is ${member.title} at Intellidea. Learn about their experience, expertise and work with the team.`,
      path: `/team/${slug}`,
      image: member.imageSrc,
      imageAlt: member.imageAlt || member.name,
      absoluteTitle: Boolean(priorityMetadata),
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

  const url = absoluteUrl(`/team/${slug}`);
  const description =
    priorityProfileMetadata[slug]?.description ??
    `${member.name} is ${member.title} at Intellidea. Learn about their experience, expertise and work with the team.`;

  return (
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
            description,
            image: absoluteUrl(member.imageSrc),
            url,
            worksFor: { "@id": `${SITE_URL}/#organization` },
          },
        }}
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