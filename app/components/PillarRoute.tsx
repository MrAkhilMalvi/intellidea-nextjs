import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ECOSYSTEM_PAGES } from "../data/ecoSystemData";
import PillarPageLayout from "./PillarPageLayout";
import { PageBreadcrumbs } from "./PageBreadcrumbs";
import { buildMetadata } from "../lib/seo";

/**
 * Builds the <head> metadata for a single ecosystem pillar page.
 * Returns {} for an unknown slug so a bad build-time value fails soft.
 */
export function buildPillarMetadata(slug: string): Metadata {
  const pillar = ECOSYSTEM_PAGES[slug];
  if (!pillar) return {};

  return buildMetadata({
    title: pillar.title,
    description: pillar.description,
    path: `/${slug}`,
    image: pillar.heroImage,
    imageAlt: pillar.title,
  });
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

  return (
    <>
      <PageBreadcrumbs trail={[{ name: pillar.title, path: `/${slug}` }]} />
      <PillarPageLayout data={pillar} />
    </>
  );
}