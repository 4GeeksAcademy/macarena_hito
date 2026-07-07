import type { Candidate } from "@/types/candidate";
import { CandidateCard } from "./CandidateCard";

interface CandidateListProps {
  candidates: Candidate[];
}

export function CandidateList({ candidates }: CandidateListProps) {
  if (candidates.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No hay candidaturas para mostrar.
      </p>
    );
  }

  return (
    <div className="grid gap-4">
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
        />
      ))}
    </div>
  );
}