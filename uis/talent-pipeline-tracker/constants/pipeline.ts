import type { CandidateStage, CandidateStatus } from "@/types/candidate";

export const STATUS_OPTIONS: { value: CandidateStatus; label: string }[] = [
  { value: "received", label: "Recibida" },
  { value: "in_progress", label: "En proceso" },
  { value: "selected", label: "Seleccionada" },
  { value: "discarded", label: "Descartada" },
];

export const STAGE_OPTIONS: { value: CandidateStage; label: string }[] = [
  { value: "pending", label: "Pendiente" },
  { value: "review", label: "Revisión" },
  { value: "personal_interview", label: "Entrevista personal" },
  { value: "technical_interview", label: "Entrevista técnica" },
];

export function getStatusLabel(status: CandidateStatus) {
  return STATUS_OPTIONS.find((option) => option.value === status)?.label ?? status;
}

export function getStageLabel(stage: CandidateStage) {
  return STAGE_OPTIONS.find((option) => option.value === stage)?.label ?? stage;
}
