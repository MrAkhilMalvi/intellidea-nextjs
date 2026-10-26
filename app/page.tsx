import type { Metadata } from "next";
import { HomePage } from "./components/Landing/HomePage";
import { buildMetadata } from "./lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Intellidea - Innovation & Enterprise Solutions",
  description:
    "Intellidea transforms ideas into scalable digital and enterprise business solutions across strategy, technology, people, risk, finance and sustainability.",
  path: "/",
  absoluteTitle: true,
});

export default function Page() {
  return <HomePage />;
}
