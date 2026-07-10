import Link from "next/link";
import { CandidatePipeline } from "../components/candidate/CandidatePipeline";
import { getCandidates } from "@/services/candidates";

export default async function Home() {
  const candidates = await getCandidates();

  return (
    <main className="min-h-screen p-6 md:p-8">
      <div className="mx-auto max-w-6xl">
        <section className="mb-6 overflow-hidden rounded-[2rem] border border-amber-950/10 bg-white/75 p-6 shadow-[0_24px_80px_-40px_rgba(120,53,15,0.55)] backdrop-blur md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Brasaland Digital
            </p>

            <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
              Pipeline de selección
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
              Vista operativa para Personas y Cultura en Colombia y Florida, con seguimiento centralizado del proceso completo de contratación.
            </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1">
                  {candidates.length} candidaturas activas
                </span>
                <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1">
                  Búsqueda y filtros sin recarga
                </span>
              </div>
            </div>

            <Link
              href="/create"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Nueva candidatura
            </Link>
          </div>
        </section>

        <CandidatePipeline candidates={candidates} />
      </div>
    </main>
  );
}