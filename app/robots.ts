import type { MetadataRoute } from "next";
import { BLOCKED_PEOPLE_IMAGE_PATHS, absoluteUrl } from "@/app/lib/seo";

export const dynamic = "force-static";

const disallow = ["/api/", "/admin/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      {
        // A bot-specific group replaces the "*" group, so the shared rules are repeated.
        // encodeURI turns spaces into %20 so names like "SA ID.png" match.
        // Viresh Patel's photo is not blocked, so it can appear in Google.
        userAgent: "Googlebot-Image",
        allow: "/",
        disallow: [...disallow, ...BLOCKED_PEOPLE_IMAGE_PATHS.map(encodeURI)],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
