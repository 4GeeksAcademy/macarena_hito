"use client";

import Link from "next/link";
import { CandidateForm } from "@/components/candidate/CandidateForm";
import {
  createCandidate,
  type CandidateFormData,
} from "@/services/candidates";

export default function CreateCandidatePage() {
  async function handleCreateCandidate(data: CandidateFormData) {
    await createCandidate(data);
  }

  return (
    <main className="min-h-screen p-6 md:p-8">
      <section className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-amber-950/10 bg-white/80 p-6 shadow-[0_24px_80px_-40px_rgba(120,53,15,0.55)] backdrop-blur md:p-8">
        <div className="flex flex-col gap-4 border-b border-slate-200/80 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex flex-wrap gap-3 text-sm font-medium">
              <Link href="/" className="text-orange-600 transition hover:text-orange-700">
                ← Volver al pipeline
              </Link>
              <Link href="/" className="text-slate-600 transition hover:text-slate-900">
                Ir al inicio
              </Link>
            </div>

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Alta de perfil
            </p>

            <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
              Nueva candidatura Brasaland
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
              Registrá un perfil nuevo para que el equipo de Personas y Cultura pueda seguirlo desde el pipeline central.
            </p>
          </div>
        </div>

        <CandidateForm
          onSubmit={handleCreateCandidate}
          submitLabel="Crear candidatura"
          successMessage="La candidatura se creó correctamente."
        />
      </section>
    </main>
  );
}