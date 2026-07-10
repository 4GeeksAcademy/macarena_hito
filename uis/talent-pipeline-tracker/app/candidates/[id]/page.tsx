import Link from "next/link";
import { notFound } from "next/navigation";
import { CandidatesApiError, getCandidateById } from "@/services/candidates";
import { CandidateActions } from "@/components/candidate/CandidateActions";
import { CandidateNotes } from "@/components/candidate/CandidateNotes";
import { StageBadge } from "@/components/common/StageBadge";
import { StatusBadge } from "@/components/common/StatusBadge";

interface CandidateDetailPageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    status?: string;
    stage?: string;
    search?: string;
  }>;
}

export default async function CandidateDetailPage({
  params,
  searchParams,
}: CandidateDetailPageProps) {
  const { id } = await params;
  const currentSearchParams = await searchParams;
  let candidate;

  try {
    candidate = await getCandidateById(id);
  } catch (error) {
    if (error instanceof CandidatesApiError && error.status === 404) {
      notFound();
    }

    throw error;
  }

  const query = new URLSearchParams();

  if (currentSearchParams.status) {
    query.set("status", currentSearchParams.status);
  }

  if (currentSearchParams.stage) {
    query.set("stage", currentSearchParams.stage);
  }

  if (currentSearchParams.search) {
    query.set("search", currentSearchParams.search);
  }

  const queryString = query.toString();
  const backHref = queryString ? `/?${queryString}` : "/";
  const editHref = queryString ? `/edit/${id}?${queryString}` : `/edit/${id}`;

  return (
    <main className="min-h-screen p-6 md:p-8">
      <div className="mx-auto max-w-4xl">
        <section className="overflow-hidden rounded-[2rem] border border-amber-950/10 bg-white/80 p-6 shadow-[0_24px_80px_-40px_rgba(120,53,15,0.55)] backdrop-blur md:p-8">
          <div className="flex flex-col gap-6 border-b border-slate-200/80 pb-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <Link href={backHref} className="text-sm font-medium text-orange-600 transition hover:text-orange-700">
                ← Volver al listado
              </Link>

              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
                Perfil de candidatura
              </p>

              <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
                {candidate.full_name}
              </h1>

              <p className="mt-3 text-base text-slate-600">{candidate.position}</p>
            </div>

            <Link
              href={editHref}
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Editar candidatura
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <StatusBadge status={candidate.status} />
            <StageBadge stage={candidate.stage} />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white/75 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Email</p>
              <p className="mt-2 text-sm text-slate-900">{candidate.email}</p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white/75 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Teléfono</p>
              <p className="mt-2 text-sm text-slate-900">{candidate.phone ?? "No disponible"}</p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white/75 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Experiencia</p>
              <p className="mt-2 text-sm text-slate-900">{candidate.experience_years} años</p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white/75 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Fecha de aplicación</p>
              <p className="mt-2 text-sm text-slate-900">{new Date(candidate.applied_at).toLocaleDateString()}</p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white/75 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">LinkedIn</p>
              <p className="mt-2 text-sm text-slate-900 break-all">{candidate.linkedin_url ?? "No disponible"}</p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white/75 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">CV</p>
              <p className="mt-2 text-sm text-slate-900 break-all">{candidate.cv_url ?? "No disponible"}</p>
            </article>
          </div>

          <CandidateActions
            candidateId={candidate.id}
            status={candidate.status}
            stage={candidate.stage}
          />

          <CandidateNotes candidateId={id} />
        </section>
      </div>
    </main>
  );
}