import Link from "next/link";
import type { Candidate } from "@/types/candidate";
import { StageBadge } from "@/components/common/StageBadge";
import { StatusBadge } from "@/components/common/StatusBadge";

interface CandidateCardProps {
  candidate: Candidate;
  detailHref?: string;
}

export function CandidateCard({ candidate, detailHref }: CandidateCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-amber-950/10 bg-white/80 p-5 shadow-[0_24px_70px_-42px_rgba(120,53,15,0.45)] ring-1 ring-white/60 backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-[0_32px_80px_-42px_rgba(120,53,15,0.55)]">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
              Perfil candidato
            </p>

            <h2 className="mt-2 text-xl font-semibold text-slate-900">
              {candidate.full_name}
            </h2>

            <p className="mt-1 text-sm text-slate-600">{candidate.position}</p>
            <p className="mt-1 text-sm text-slate-500">{candidate.email}</p>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-orange-50 px-3 py-2 text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-700">
              Notas
            </p>
            <p className="mt-1 text-lg font-bold text-orange-900">
              {candidate.notes_count}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <StatusBadge status={candidate.status} />
          <StageBadge stage={candidate.stage} />
        </div>

        <div className="grid gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-sm text-slate-600 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Experiencia
            </p>
            <p className="mt-1 font-medium text-slate-900">
              {candidate.experience_years} años
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Aplicó
            </p>
            <p className="mt-1 font-medium text-slate-900">
              {new Date(candidate.applied_at).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-slate-200/80 pt-4">
          <p className="text-xs text-slate-500">
            Seguimiento activo para Personas y Cultura
          </p>

          <Link
            href={detailHref ?? `/candidates/${candidate.id}`}
            className="inline-flex items-center rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-orange-600"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  );
}
