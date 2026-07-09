"use client";

import { CandidateForm } from "@/components/candidate/CandidateForm";
import {
  getCandidateById,
  updateCandidateData,
  type CandidateFormData,
} from "@/services/candidates";

interface EditCandidatePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditCandidatePage({
  params,
}: EditCandidatePageProps) {
  const { id } = await params;

  const candidate = await getCandidateById(id);

  async function handleUpdateCandidate(data: CandidateFormData) {
    "use server";

    await updateCandidateData(id, data);
  }

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold text-gray-900">
        Editar candidatura
      </h1>

      <p className="mt-2 text-gray-600">
        Actualizá la información de la candidatura.
      </p>

      <CandidateForm
        initialData={candidate}
        onSubmit={handleUpdateCandidate}
        submitLabel="Guardar cambios"
        successMessage="La candidatura se actualizó correctamente."
      />
    </main>
  );
}