import type { Candidate } from "@/types/candidate";
import { CandidateCard } from "./CandidateCard";

interface CandidateListProps {
  candidates: Candidate[];
  detailQuery?: string;
}

export function CandidateList({ candidates, detailQuery }: CandidateListProps) {
  if (candidates.length === 0) {
    return (
      <section className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white/70 p-10 text-center shadow-sm backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          Sin resultados
        </p>
        <p className="mt-3 text-base text-slate-600">
          No hay candidaturas para mostrar con los filtros actuales.
        </p>
      </section>
    );
  }

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
          detailHref={
            detailQuery
              ? `/candidates/${candidate.id}?${detailQuery}`
              : `/candidates/${candidate.id}`
          }
        />
      ))}
    </div>
  );
}