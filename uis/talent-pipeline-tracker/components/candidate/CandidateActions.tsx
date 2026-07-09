"use client";

import { useState } from "react";
import type {
  CandidateStage,
  CandidateStatus,
} from "@/types/candidate";
import {
  STATUS_OPTIONS,
  STAGE_OPTIONS,
} from "@/constants/pipeline";

interface CandidateActionsProps {
  status: CandidateStatus;
  stage: CandidateStage;
}

export function CandidateActions({
  status,
  stage,
}: CandidateActionsProps) {
  const [currentStatus, setCurrentStatus] = useState(status);
  const [currentStage, setCurrentStage] = useState(stage);

  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      <div>
        <label className="mb-1 block text-sm font-medium">
          Estado
        </label>

        <select
          value={currentStatus}
          onChange={(e) =>
            setCurrentStatus(e.target.value as CandidateStatus)
          }
          className="w-full rounded-lg border p-2"
        >
          {STATUS_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Etapa
        </label>

        <select
          value={currentStage}
          onChange={(e) =>
            setCurrentStage(e.target.value as CandidateStage)
          }
          className="w-full rounded-lg border p-2"
        >
          {STAGE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}