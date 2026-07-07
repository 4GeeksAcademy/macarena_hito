import type { CandidateStatus } from "@/types/candidate";
import { getStatusLabel } from "@/constants/pipeline";

interface StatusBadgeProps {
  status: CandidateStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
      Estado: {getStatusLabel(status)}
    </span>
  );
}
