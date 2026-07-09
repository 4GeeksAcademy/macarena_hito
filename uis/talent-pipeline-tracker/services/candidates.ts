import { getApiUrl } from "@/lib/api";
import type {
  Candidate,
  CandidateResponse,
  CandidatesResponse,
  CandidateStage,
  CandidateStatus,
} from "@/types/candidate";
import type { Note } from "@/types/note";

export type CandidateFormData = {
  full_name: string;
  email: string;
  phone: string;
  position: string;
  linkedin_url: string;
  cv_url: string;
  experience_years: number;
  status: CandidateStatus;
  stage: CandidateStage;
  applied_at: string;
};

export async function getCandidates(): Promise<Candidate[]> {
  const response = await fetch(getApiUrl("/records"));

  if (!response.ok) {
    throw new Error("No se pudieron obtener las candidaturas.");
  }

  const data: CandidatesResponse = await response.json();
  return data.data;
}

export async function getCandidateById(id: string): Promise<Candidate> {
  const response = await fetch(getApiUrl(`/records/${id}`));

  if (!response.ok) {
    throw new Error("No se pudo obtener la candidatura.");
  }

  const data = await response.json();

  return data.data ?? data;
}

export async function updateCandidate(
  id: string,
  data: Partial<{
    status: CandidateStatus;
    stage: CandidateStage;
  }>
): Promise<Candidate> {
  const response = await fetch(getApiUrl(`/records/${id}`), {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("No se pudo actualizar la candidatura.");
  }

  const result: CandidateResponse = await response.json();
  return result.data;
}

export async function getCandidateNotes(id: string): Promise<Note[]> {
  const response = await fetch(getApiUrl(`/records/${id}/notes`));

  if (!response.ok) {
    throw new Error("No se pudieron obtener las notas.");
  }

  const data = await response.json();
  return data.data;
}

export async function createNote(id: string, content: string): Promise<Note> {
  const response = await fetch(getApiUrl(`/records/${id}/notes`), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    throw new Error("No se pudo crear la nota.");
  }

  const data = await response.json();
  return data.data;
}

export async function deleteNote(id: string, noteId: string): Promise<void> {
  const response = await fetch(getApiUrl(`/records/${id}/notes/${noteId}`), {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("No se pudo eliminar la nota.");
  }
}

export async function createCandidate(
  data: CandidateFormData
): Promise<Candidate> {
  const response = await fetch(getApiUrl("/records"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("No se pudo crear la candidatura.");
  }

  const result: CandidateResponse = await response.json();
  return result.data;
}

export async function updateCandidateData(
  id: string,
  data: CandidateFormData
): Promise<Candidate> {
  const response = await fetch(getApiUrl(`/records/${id}`), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("No se pudo editar la candidatura.");
  }

  const result: CandidateResponse = await response.json();
  return result.data;
}