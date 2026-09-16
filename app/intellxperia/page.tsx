import type { Metadata } from "next";
import { buildPillarMetadata, PillarRoute } from "../components/PillarRoute";

export const metadata: Metadata = buildPillarMetadata("intellxperia");

export default function IntellXperiaPage() {
  return <PillarRoute slug="intellxperia" />;
}
