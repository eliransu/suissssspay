export type PackageId = "1x" | "3x" | "5x";

export type CoachingPackage = {
  id: PackageId;
  sessionsLabel: string;
  name: string;
  description: string;
  priceUsd: number;
  originalUsd: number;
  discountLabel: string;
};

/** Indicative quotes. Payment is arranged after you schedule with Eliran. */
export const PACKAGES: Record<PackageId, CoachingPackage> = {
  "1x": {
    id: "1x",
    sessionsLabel: "1 session",
    name: "Single Session",
    description:
      "One focused session for a specific decision: use-case prioritization, adoption stuck point, or a second opinion before a big AI bet.",
    priceUsd: 225,
    originalUsd: 250,
    discountLabel: "10% off",
  },
  "3x": {
    id: "3x",
    sessionsLabel: "3 sessions",
    name: "Momentum Package",
    description:
      "Three sessions to build rhythm. Map the path from zero to shipping, align stakeholders, and lock an adoption plan your team can run.",
    priceUsd: 640,
    originalUsd: 750,
    discountLabel: "15% off",
  },
  "5x": {
    id: "5x",
    sessionsLabel: "5 sessions",
    name: "Transformation Series",
    description:
      "The full arc. Deep enablement across strategy, product, workflows, and culture. Built for teams going AI-native.",
    priceUsd: 950,
    originalUsd: 1250,
    discountLabel: "24% off",
  },
};

export function getPackage(
  id: string | null | undefined,
): CoachingPackage | null {
  if (!id || !(id in PACKAGES)) return null;
  return PACKAGES[id as PackageId];
}

export function formatUsd(n: number): string {
  return `$${n.toLocaleString("en-US")}`;
}
