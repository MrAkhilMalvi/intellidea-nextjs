import type { Metadata } from "next";
import { INDUSTRIES_PAGE } from "../data/industriesData";
import IndustriesPageLayout from "../components/IndustriesPageLayout";


export const metadata: Metadata = {
  title: "Industries | Intellidea",
  description: INDUSTRIES_PAGE.heroSubhead,
  openGraph: {
    title: "Industries | Intellidea",
    description: INDUSTRIES_PAGE.heroSubhead,
  },
};

export default function IndustriesPage() {
  return <IndustriesPageLayout />;
}