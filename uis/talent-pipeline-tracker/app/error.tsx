"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#fff7ed_0%,#f8fafc_22%,#e2e8f0_100%)] p-8">
      <section className="max-w-xl rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Error de carga
        </p>

        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          No pudimos abrir el pipeline de selección
        </h1>

        <p className="mt-3 text-sm text-slate-600">
          {error.message || "La API de candidaturas no respondió como esperábamos."}
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Reintentar
        </button>
      </section>
    </main>
  );
}