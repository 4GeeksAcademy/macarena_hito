"use client";

import { CandidateForm } from "@/components/candidate/CandidateForm";
import {
  updateCandidateData,
  type CandidateFormData,
} from "@/services/candidates";
import type { Candidate } from "@/types/candidate";

interface CandidateEditFormProps {
  candidate: Candidate;
  redirectPath?: string;
}

export function CandidateEditForm({
  candidate,
  redirectPath,
}: CandidateEditFormProps) {
  async function handleUpdateCandidate(data: CandidateFormData) {
    await updateCandidateData(candidate.id, data);
  }

  return (
    <CandidateForm
      initialData={candidate}
      onSubmit={handleUpdateCandidate}
      submitLabel="Guardar cambios"
      successMessage="La candidatura se actualizó correctamente."
      redirectPath={redirectPath}
    />
  );
}