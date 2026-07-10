import type { CandidateStatus } from "@/types/candidate";
import { getStatusLabel } from "@/constants/pipeline";

interface StatusBadgeProps {
  status: CandidateStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusClassName =
    status === "selected"
      ? "bg-emerald-50 text-emerald-700"
      : "bg-blue-50 text-blue-700";

  return (
    <span className={`rounded-full px-3 py-1 text-sm font-medium ${statusClassName}`}>
      Estado: {getStatusLabel(status)}
    </span>
  );
}
