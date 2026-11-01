import type { MetadataRoute } from "next";
import { industries } from "@/app/data/industries";
import { ECOSYSTEM_PAGES } from "@/app/data/ecoSystemData";
import { services } from "@/app/data/services";
import { teamMembersData } from "@/app/data/teamMembers";
import { absoluteUrl } from "@/app/lib/seo";

export const dynamic = "force-static";

const staticPages = [
  "/",
  "/about/engagement-models",
  "/about/why-intellidea",
  "/cookie",
  "/industries",
  "/insights",
  "/privacy",
  "/services",
  "/terms",
  ...Object.keys(ECOSYSTEM_PAGES).map((slug) => `/${slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicPages = [
    ...services.map((service) => `/services/${service.slug}`),
    ...industries.map((industry) => `/industries/${industry.slug}`),
    ...Object.keys(teamMembersData).map((slug) => `/team/${slug}`),
  ];

  return [...staticPages, ...dynamicPages].map((path) => ({
    url: absoluteUrl(path),
  }));
}
l