import type { Metadata } from "next";

export const SITE_URL = "https://intellidea.co.in";
export const SITE_NAME = "Intellidea";
export const SITE_DESCRIPTION =
  "Transforming ideas into scalable digital and enterprise business solutions.";
export const DEFAULT_OG_IMAGE = "/og-image.png"; // 1200x630 logo card (no faces)
export const LOGO_IMAGE = "/logo-512.png"; // square logo for Organization schema

/**
 * The ONLY team profile that should appear in Google.
 * Every other team / advisor / associate page is noindex and left out of the sitemap.
 */
export const INDEXED_TEAM_SLUGS = ["viresh-patel"] as const;
export const isIndexedTeamSlug = (slug: string): boolean =>
  (INDEXED_TEAM_SLUGS as readonly string[]).includes(slug);

/** Viresh Patel's photo - allowed in Google Images and search results. */
export const FOUNDER_IMAGE = "/assets/viresh.png";

/**
 * Add Viresh Patel's public profile links here (LinkedIn, YouTube, etc.).
 * They go into his Person schema (sameAs) and help Google connect "Viresh Patel"
 * to Intellidea. Example: "https://www.linkedin.com/in/your-profile".
 */
export const FOUNDER_SAME_AS: string[] = [];

/**
 * Photos of every other person. Googlebot-Image is blocked from these in robots.ts
 * so they never appear in Google Images or as a search thumbnail.
 * (Viresh Patel's photos are intentionally NOT listed.)
 */
export const BLOCKED_PEOPLE_IMAGE_PATHS = [
  "/assets/rajnikant.png",
  "/assets/jyoti.png",
  "/assets/jyoti_mam_update.png",
  "/assets/Richard.png",
  "/assets/SA ID.png",
  "/assets/Amee.png",
  "/assets/PD ID.png",
  "/assets/Parikshit_patel.png",
  "/assets/Dr. Nisarg.png",
  "/assets/Dr.LeenaPimpley.png",
  "/assets/Dr.mahendra.png",
  "/assets/SB.jpg",
  "/assets/ab.png",
  "/assets/4.png",
  "/assets/chaitanya_shah.png",
  "/assets/hiten_shah.png",
  "/assets/ketan_shah1.png",
  "/assets/ketan_shah2.png",
  "/assets/mauli_shah.png",
  "/assets/raajesh chalke.jpg",
  "/assets/sanjay_ubale.png",
];
export const LINKEDIN_URL = "https://in.linkedin.com/company/intellidea";
export const CONTACT_EMAIL = "hello@intellidea.co.in";
export const CONTACT_PHONE = "+91-9082378708";

/** Turn a relative path ("/services") into an absolute URL. */
export const absoluteUrl = (path = "/"): string =>
  path.startsWith("http") ? path : `${SITE_URL}${path === "/" ? "" : path}`;

interface BuildMetadataOptions {
  /** Page title WITHOUT the " | Intellidea" suffix (the layout template adds it). */
  title: string;
  description: string;
  /** Route path, e.g. "/services/managed-services". Used for canonical + og:url. */
  path: string;
  keywords?: string[];
  /** Relative or absolute image URL. Falls back to the site logo. */
  image?: string;
  imageAlt?: string;
  /** Use the title exactly as given (no template suffix). */
  absoluteTitle?: boolean;
  ogTitle?: string;
  ogDescription?: string;
}

/** One place to build consistent title / description / canonical / OG / Twitter tags. */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  absoluteTitle = false,
  ogTitle,
  ogDescription,
}: BuildMetadataOptions): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const socialTitle = ogTitle ?? fullTitle;
  const socialDescription = ogDescription ?? description;
  const images = [{ url: image, alt: imageAlt ?? title }];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      locale: "en_IN",
      title: socialTitle,
      description: socialDescription,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [image],
    },
  };
}
