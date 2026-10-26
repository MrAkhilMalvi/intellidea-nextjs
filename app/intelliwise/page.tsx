import type { Metadata } from "next";
import { buildPillarMetadata, PillarRoute } from "../components/PillarRoute";

export const metadata: Metadata = buildPillarMetadata("intelliwise");

export default function IntellWisePage() {
  return <PillarRoute slug="intelliwise" />;
}
