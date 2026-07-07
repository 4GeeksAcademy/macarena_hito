import { getApiUrl } from "@/lib/api";
import type {
  Candidate,
  CandidateResponse,
  CandidatesResponse,
} from "@/types/candidate";

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

  const data: CandidateResponse = await response.json();

  return data.data;
}