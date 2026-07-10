import Link from "next/link";

export default function EditCandidateNotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <section className="max-w-xl rounded-[2rem] border border-amber-950/10 bg-white/80 p-8 text-center shadow-[0_24px_80px_-40px_rgba(120,53,15,0.55)] backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
          No se puede editar esta candidatura
        </p>

        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          El perfil que querías editar no existe
        </h1>

        <p className="mt-3 text-sm text-slate-600">
          Verificá el enlace o volvé al pipeline para abrir otra candidatura disponible.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          Volver al pipeline
        </Link>
      </section>
    </main>
  );
}