import type { CandidateStage } from "@/types/candidate";
import { getStageLabel } from "@/constants/pipeline";

interface StageBadgeProps {
  stage: CandidateStage;
}

export function StageBadge({ stage }: StageBadgeProps) {
  return (
    <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
      Etapa: {getStageLabel(stage)}
    </span>
  );
}
