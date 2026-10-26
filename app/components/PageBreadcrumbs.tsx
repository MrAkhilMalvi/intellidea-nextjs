import { BreadcrumbJsonLd } from "next-seo";
import { absoluteUrl } from "@/app/lib/seo";

interface Crumb {
  name: string;
  path: string;
}

/** BreadcrumbList JSON-LD (via next-seo). Home is added automatically. */
export function PageBreadcrumbs({ trail }: { trail: Crumb[] }) {
  const items = [{ name: "Intellidea", path: "/" }, ...trail];
  return (
    <BreadcrumbJsonLd
      useAppDir={true}
      itemListElements={items.map((c, i) => ({
        position: i + 1,
        name: c.name,
        item: absoluteUrl(c.path),
      }))}
    />
  );
}
