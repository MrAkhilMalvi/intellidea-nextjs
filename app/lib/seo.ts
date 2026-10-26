import type { Metadata } from "next";

export const SITE_URL = "https://intellidea.co.in";
export const SITE_NAME = "Intellidea";
export const SITE_DESCRIPTION =
  "Transforming ideas into scalable digital and enterprise business solutions.";
export const DEFAULT_OG_IMAGE = "/intellidea.png";
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
