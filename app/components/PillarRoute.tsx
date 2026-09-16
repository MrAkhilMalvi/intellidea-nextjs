import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ECOSYSTEM_PAGES } from "../data/ecoSystemData";
import PillarPageLayout from "./PillarPageLayout";

/**
 * Builds the <head> metadata for a single ecosystem pillar page.
 * Returns {} for an unknown slug so a bad build-time value fails soft.
 */
export function buildPillarMetadata(slug: string): Metadata {
  const pillar = ECOSYSTEM_PAGES[slug];
  if (!pillar) return {};

  return {
    title: `${pillar.title} | Intellidea`,
    description: pillar.description,
    openGraph: {
      title: `${pillar.title} | Intellidea`,
      description: pillar.description,
      images: [{ url: pillar.heroImage }],
    },
  };
}

/**
 * Renders one ecosystem pillar page by slug, or triggers the 404 boundary
 * if the slug has no matching entry in ECOSYSTEM_PAGES.
 */
export function PillarRoute({ slug }: { slug: string }) {
  const pillar = ECOSYSTEM_PAGES[slug];

  if (!pillar) {
    notFound();
  }

  return <PillarPageLayout data={pillar} />;
}