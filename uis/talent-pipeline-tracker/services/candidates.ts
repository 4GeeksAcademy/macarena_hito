import { getApiUrl } from "@/lib/api";
import type {
  Candidate,
  CandidateResponse,
  CandidatesResponse,
  CandidateStage,
  CandidateStatus,
} from "@/types/candidate";
import type { Note } from "@/types/note";

export class CandidatesApiError extends Error {
  constructor(
    message: string,
    public readonly status: number
  ) {
    super(message);
    this.name = "CandidatesApiError";
  }
}

type ValidationDetail = {
  loc?: string[];
  msg?: string;
};

const FIELD_LABELS: Record<string, string> = {
  full_name: "nombre completo",
  email: "email",
  phone: "teléfono",
  position: "puesto",
  experience_years: "años de experiencia",
  linkedin_url: "LinkedIn",
  cv_url: "CV",
  content: "contenido",
  status: "estado",
  stage: "etapa",
};

function translateApiMessage(message: string) {
  const trimmedMessage = message.trim();

  if (trimmedMessage.includes("An email address must have an @-sign")) {
    return "ingresá un email válido con @.";
  }

  if (
    trimmedMessage.includes(
      "The part after the @-sign is a special-use or reserved name"
    )
  ) {
    return "ingresá un email con un dominio válido.";
  }

  if (trimmedMessage.includes("value is not a valid email address")) {
    return "ingresá un email válido.";
  }

  if (trimmedMessage.includes("String should have at least 1 character")) {
    return "este campo no puede estar vacío.";
  }

  if (trimmedMessage.includes("Must be one of:")) {
    return trimmedMessage.replace("Must be one of:", "debe ser uno de:");
  }

  if (trimmedMessage.includes("Field required")) {
    return "este campo es obligatorio.";
  }

  return trimmedMessage;
}

function normalizeFieldName(field: string) {
  return FIELD_LABELS[field] ?? field;
}

function formatValidationDetail(detail: ValidationDetail) {
  const field = detail.loc?.[detail.loc.length - 1];
  const translatedMessage = detail.msg
    ? translateApiMessage(detail.msg)
    : undefined;

  if (field && translatedMessage) {
    return `${normalizeFieldName(field)}: ${translatedMessage}`;
  }

  return translatedMessage;
}

async function buildApiError(response: Response, fallbackMessage: string) {
  const text = await response.text();
  let body: unknown;

  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }

  if (body && typeof body === "object") {
    const payload = body as {
      detail?: ValidationDetail[] | string;
      error?: string;
      details?: Record<string, string>;
      message?: string;
    };

    if (Array.isArray(payload.detail) && payload.detail.length > 0) {
      return new CandidatesApiError(
        formatValidationDetail(payload.detail[0]) ?? fallbackMessage,
        response.status
      );
    }

    if (typeof payload.detail === "string") {
      return new CandidatesApiError(payload.detail, response.status);
    }

    if (payload.details) {
      const [field, message] = Object.entries(payload.details)[0] ?? [];

      if (field && message) {
        return new CandidatesApiError(
          `${normalizeFieldName(field)}: ${translateApiMessage(message)}`,
          response.status
        );
      }
    }

    if (payload.error) {
      return new CandidatesApiError(
        translateApiMessage(payload.error),
        response.status
      );
    }

    if (payload.message) {
      return new CandidatesApiError(
        translateApiMessage(payload.message),
        response.status
      );
    }
  }

  if (typeof body === "string" && body.trim()) {
    return new CandidatesApiError(
      translateApiMessage(body),
      response.status
    );
  }

  return new CandidatesApiError(fallbackMessage, response.status);
}

function unwrapCandidateResponse(data: CandidateResponse | Candidate): Candidate {
  return "data" in data ? data.data : data;
}

function unwrapNoteResponse(data: { data: Note } | Note): Note {
  return "data" in data ? data.data : data;
}

async function fetchCandidatesPage(
  page: number,
  limit: number
): Promise<CandidatesResponse> {
  const response = await fetch(getApiUrl(`/records?page=${page}&limit=${limit}`), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw await buildApiError(
      response,
      "No se pudieron obtener las candidaturas."
    );
  }

  return response.json();
}

export type CandidateFormData = {
  full_name: string;
  email: string;
  phone: string;
  position: string;
  linkedin_url: string;
  cv_url: string;
  experience_years: number;
};

export async function getCandidates(): Promise<Candidate[]> {
  const limit = 100;
  const firstPage = await fetchCandidatesPage(1, limit);

  if (firstPage.total <= firstPage.data.length) {
    return firstPage.data;
  }

  const candidates = [...firstPage.data];
  const totalPages = Math.ceil(firstPage.total / firstPage.limit);

  for (let page = 2; page <= totalPages; page += 1) {
    const nextPage = await fetchCandidatesPage(page, limit);
    candidates.push(...nextPage.data);
  }

  return candidates;
}

export async function getCandidateById(id: string): Promise<Candidate> {
  const response = await fetch(getApiUrl(`/records/${id}`), {
    cache: "no-store",
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new CandidatesApiError(
        "La candidatura no existe o fue eliminada.",
        response.status
      );
    }

    throw await buildApiError(response, "No se pudo obtener la candidatura.");
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
    throw await buildApiError(response, "No se pudo actualizar la candidatura.");
  }

  const result: CandidateResponse | Candidate = await response.json();
  return unwrapCandidateResponse(result);
}

export async function getCandidateNotes(id: string): Promise<Note[]> {
  const response = await fetch(getApiUrl(`/records/${id}/notes`), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw await buildApiError(response, "No se pudieron obtener las notas.");
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
    throw await buildApiError(response, "No se pudo crear la nota.");
  }

  const data: { data: Note } | Note = await response.json();
  return unwrapNoteResponse(data);
}

export async function deleteNote(id: string, noteId: string): Promise<void> {
  const response = await fetch(getApiUrl(`/records/${id}/notes/${noteId}`), {
    method: "DELETE",
  });

  if (!response.ok) {
    throw await buildApiError(response, "No se pudo eliminar la nota.");
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
    throw await buildApiError(response, "No se pudo crear la candidatura.");
  }

  const result: CandidateResponse | Candidate = await response.json();
  return unwrapCandidateResponse(result);
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
    throw await buildApiError(response, "No se pudo editar la candidatura.");
  }

  const result: CandidateResponse | Candidate = await response.json();
  return unwrapCandidateResponse(result);
}