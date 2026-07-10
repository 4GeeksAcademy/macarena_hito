"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type {
  CandidateStage,
  CandidateStatus,
} from "@/types/candidate";
import {
  STATUS_OPTIONS,
  STAGE_OPTIONS,
} from "@/constants/pipeline";
import {
  CandidatesApiError,
  updateCandidate,
} from "@/services/candidates";

interface CandidateActionsProps {
  candidateId: string;
  status: CandidateStatus;
  stage: CandidateStage;
}

export function CandidateActions({
  candidateId,
  status,
  stage,
}: CandidateActionsProps) {
  const router = useRouter();

  const [currentStatus, setCurrentStatus] = useState(status);
  const [currentStage, setCurrentStage] = useState(stage);
  const [isUpdating, setIsUpdating] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleStatusChange(newStatus: CandidateStatus) {
    const previousStatus = currentStatus;

    setCurrentStatus(newStatus);
    setIsUpdating(true);
    setMessage("");
    setError("");

    try {
      await updateCandidate(candidateId, {
        status: newStatus,
      });

      setMessage("Estado actualizado correctamente.");
      router.refresh();
    } catch (error) {
      setCurrentStatus(previousStatus);
      setError(
        error instanceof CandidatesApiError
          ? error.message
          : "No se pudo actualizar el estado."
      );
    } finally {
      setIsUpdating(false);
    }
  }

  async function handleStageChange(newStage: CandidateStage) {
    const previousStage = currentStage;

    setCurrentStage(newStage);
    setIsUpdating(true);
    setMessage("");
    setError("");

    try {
      await updateCandidate(candidateId, {
        stage: newStage,
      });

      setMessage("Etapa actualizada correctamente.");
      router.refresh();
    } catch (error) {
      setCurrentStage(previousStage);
      setError(
        error instanceof CandidatesApiError
          ? error.message
          : "No se pudo actualizar la etapa."
      );
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <div className="mt-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="candidate-status"
            className="mb-1 block text-sm font-medium"
          >
            Estado
          </label>

          <select
            id="candidate-status"
            value={currentStatus}
            disabled={isUpdating}
            onChange={(event) =>
              handleStatusChange(
                event.target.value as CandidateStatus
              )
            }
            className="w-full rounded-lg border p-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {STATUS_OPTIONS.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="candidate-stage"
            className="mb-1 block text-sm font-medium"
          >
            Etapa
          </label>

          <select
            id="candidate-stage"
            value={currentStage}
            disabled={isUpdating}
            onChange={(event) =>
              handleStageChange(
                event.target.value as CandidateStage
              )
            }
            className="w-full rounded-lg border p-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {STAGE_OPTIONS.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isUpdating && (
        <p className="mt-3 text-sm text-gray-500">
          Guardando cambios...
        </p>
      )}

      {message && (
        <p className="mt-3 text-sm text-green-700">
          {message}
        </p>
      )}

      {error && (
        <p className="mt-3 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}