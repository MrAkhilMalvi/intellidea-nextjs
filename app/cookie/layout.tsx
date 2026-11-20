import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "How Intellidea uses cookies on its websites and branded pages, and how you can manage your cookie preferences.",
  path: "/cookie",
});

export default function CookieLayout({ children }: { children: React.ReactNode }) {
  return children;
}
