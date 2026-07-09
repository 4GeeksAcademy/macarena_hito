"use client";

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
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold text-gray-900">
        Nueva candidatura
      </h1>

      <p className="mt-2 text-gray-600">
        Registrá una nueva candidatura en el sistema.
      </p>

      <CandidateForm
        onSubmit={handleCreateCandidate}
        submitLabel="Crear candidatura"
        successMessage="La candidatura se creó correctamente."
      />
    </main>
  );
}