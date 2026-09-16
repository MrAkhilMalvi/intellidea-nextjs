import type { Metadata } from "next";
import { buildPillarMetadata, PillarRoute } from "../components/PillarRoute";

export const metadata: Metadata = buildPillarMetadata("intellicircle");

export default function IntelliCirclePage() {
  return <PillarRoute slug="intellicircle" />;
}
