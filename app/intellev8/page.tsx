import type { Metadata } from "next";
import { buildPillarMetadata, PillarRoute } from "../components/PillarRoute";

export const metadata: Metadata = buildPillarMetadata("intellev8");

export default function IntEllev8Page() {
  return <PillarRoute slug="intellev8" />;
}
