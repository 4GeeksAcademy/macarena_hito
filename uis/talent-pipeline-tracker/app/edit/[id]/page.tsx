import Link from "next/link";
import { notFound } from "next/navigation";
import { CandidateEditForm } from "@/components/candidate/CandidateEditForm";
import { CandidatesApiError, getCandidateById } from "@/services/candidates";

interface EditCandidatePageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    status?: string;
    stage?: string;
    search?: string;
  }>;
}

export default async function EditCandidatePage({
  params,
  searchParams,
}: EditCandidatePageProps) {
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
  const redirectPath = queryString ? `/?${queryString}` : "/";
  const homeHref = "/";

  return (
    <main className="min-h-screen p-6 md:p-8">
      <section className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-amber-950/10 bg-white/80 p-6 shadow-[0_24px_80px_-40px_rgba(120,53,15,0.55)] backdrop-blur md:p-8">
        <div className="flex flex-col gap-4 border-b border-slate-200/80 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex flex-wrap gap-3 text-sm font-medium">
              <Link href={redirectPath} className="text-orange-600 transition hover:text-orange-700">
                ← Volver al listado
              </Link>
              <Link href={homeHref} className="text-slate-600 transition hover:text-slate-900">
                Ir al inicio
              </Link>
            </div>

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Edición de perfil
            </p>

            <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
              Editar candidatura Brasaland
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
              Corregí los datos base del perfil antes de avanzar de etapa o compartirlo con el equipo.
            </p>
          </div>
        </div>

        <CandidateEditForm
          candidate={candidate}
          redirectPath={redirectPath}
        />
      </section>
    </main>
  );
}