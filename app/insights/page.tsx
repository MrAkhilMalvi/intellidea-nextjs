import type { Metadata } from "next";
import { InsightsClient } from "@/app/components/Insights/InsightsClient";
import { PageBreadcrumbs } from "@/app/components/PageBreadcrumbs";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Insight Zone | Latest Thinking from Intellidea",
  description:
    "Perspectives, updates and practitioner insights from Intellidea on strategy, technology, finance, people, risk and sustainability.",
  path: "/insights",
  absoluteTitle: true,
});

export default function InsightsPage() {
  return (
    <>
      <PageBreadcrumbs trail={[{ name: "Insights", path: "/insights" }]} />
      <InsightsClient />
    </>
  );
}
