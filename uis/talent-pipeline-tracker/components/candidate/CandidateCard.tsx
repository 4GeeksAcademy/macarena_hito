import Link from "next/link";
import type { Candidate } from "@/types/candidate";
import { StageBadge } from "@/components/common/StageBadge";
import { StatusBadge } from "@/components/common/StatusBadge";

interface CandidateCardProps {
  candidate: Candidate;
}

export function CandidateCard({ candidate }: CandidateCardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {candidate.full_name}
          </h2>
          <p className="text-sm text-gray-600">{candidate.position}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <StatusBadge status={candidate.status} />
          <StageBadge stage={candidate.stage} />
        </div>

        <Link
          href={`/candidates/${candidate.id}`}
          className="text-sm font-medium text-orange-600 hover:text-orange-700"
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
