"use client";

import { startTransition, useDeferredValue } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Candidate, CandidateStage, CandidateStatus } from "@/types/candidate";
import { CandidateList } from "./CandidateList";
import { STAGE_OPTIONS, STATUS_OPTIONS } from "@/constants/pipeline";

interface CandidatePipelineProps {
  candidates: Candidate[];
}

function matchesStatus(
  candidateStatus: CandidateStatus,
  selectedStatus: string
) {
  return !selectedStatus || candidateStatus === selectedStatus;
}

function matchesStage(candidateStage: CandidateStage, selectedStage: string) {
  return !selectedStage || candidateStage === selectedStage;
}

function matchesSearch(candidate: Candidate, searchTerm: string) {
  if (!searchTerm) {
    return true;
  }

  const normalizedSearch = searchTerm.toLowerCase();

  return [candidate.full_name, candidate.email]
    .join(" ")
    .toLowerCase()
    .includes(normalizedSearch);
}

export function CandidatePipeline({ candidates }: CandidatePipelineProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const status = searchParams.get("status") ?? "";
  const stage = searchParams.get("stage") ?? "";
  const search = searchParams.get("search") ?? "";
  const deferredSearch = useDeferredValue(search);
  const detailQuery = searchParams.toString();

  const filteredCandidates = candidates.filter((candidate) => {
    return (
      matchesStatus(candidate.status, status) &&
      matchesStage(candidate.stage, stage) &&
      matchesSearch(candidate, deferredSearch)
    );
  });

  function updateQueryParam(name: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    const query = params.toString();

    startTransition(() => {
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    });
  }

  function clearFilters() {
    startTransition(() => {
      router.replace(pathname, { scroll: false });
    });
  }

  return (
    <section className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Personas y Cultura
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Seguimiento de candidaturas de Brasaland
            </h2>

            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Filtrá por estado y etapa, o buscá por nombre y email sin salir del listado.
            </p>
          </div>

          <div className="rounded-2xl bg-orange-50 px-4 py-3 text-sm text-orange-900">
            <strong>{filteredCandidates.length}</strong> de <strong>{candidates.length}</strong> candidaturas visibles
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <label className="text-sm font-medium text-slate-700">
            Buscar por nombre o email
            <input
              value={search}
              onChange={(event) => updateQueryParam("search", event.target.value)}
              placeholder="Ej. ana@brasaland.com"
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-orange-500"
            />
          </label>

          <label className="text-sm font-medium text-slate-700">
            Estado
            <select
              value={status}
              onChange={(event) => updateQueryParam("status", event.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-orange-500"
            >
              <option value="">Todos los estados</option>
              {STATUS_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-slate-700">
            Etapa
            <select
              value={stage}
              onChange={(event) => updateQueryParam("stage", event.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-orange-500"
            >
              <option value="">Todas las etapas</option>
              {STAGE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={clearFilters}
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-600"
          >
            Limpiar filtros
          </button>
        </div>
      </div>

      <CandidateList
        candidates={filteredCandidates}
        detailQuery={detailQuery}
      />
    </section>
  );
}