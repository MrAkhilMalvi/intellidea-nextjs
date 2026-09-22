// app/team/[slug]/page.tsx
import { notFound } from "next/navigation";
import { BioLayout } from "@/app/components/BioLayout";
import { teamMembersData } from "@/app/data/teamMembers";
interface PageProps {
  params: Promise<{ slug: string }>;
}

// Pre-render all 20 pages at build time (SSG for fast loading)
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

  return (
    <BioLayout
      name={member.name}
      title={member.title}
      imageSrc={member.imageSrc}
      imageAlt={member.imageAlt}
      imageWrapperClass="flex md:justify-end h-[90vh] md:h-[100vh]"
    >
      {member.bio}
    </BioLayout>
  );
}