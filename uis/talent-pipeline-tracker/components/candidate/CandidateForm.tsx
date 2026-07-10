"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Candidate } from "@/types/candidate";
import {
  CandidatesApiError,
  type CandidateFormData,
} from "@/services/candidates";

interface CandidateFormProps {
  initialData?: Candidate;
  onSubmit: (data: CandidateFormData) => Promise<void>;
  submitLabel: string;
  successMessage: string;
  redirectPath?: string;
}

export function CandidateForm({
  initialData,
  onSubmit,
  submitLabel,
  successMessage,
  redirectPath = "/",
}: CandidateFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState<CandidateFormData>({
    full_name: initialData?.full_name ?? "",
    email: initialData?.email ?? "",
    phone: initialData?.phone ?? "",
    position: initialData?.position ?? "",
    linkedin_url: initialData?.linkedin_url ?? "",
    cv_url: initialData?.cv_url ?? "",
    experience_years: initialData?.experience_years ?? 0,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: name === "experience_years" ? Number(value) : value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !formData.full_name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.position.trim()
    ) {
      setError("Completá nombre, email, teléfono y puesto antes de guardar.");
      return;
    }

    if (Number.isNaN(formData.experience_years) || formData.experience_years < 0) {
      setError("Ingresá años de experiencia con un valor válido.");
      return;
    }

    try {
      setIsSaving(true);
      setError("");
      setSuccess("");

      await onSubmit(formData);

      setSuccess(successMessage);

      setTimeout(() => {
        router.push(redirectPath);
      }, 800);
    } catch (error) {
      setError(
        error instanceof CandidatesApiError
          ? error.message
          : "Ocurrió un error al guardar la candidatura."
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-6 rounded-[1.75rem] border border-slate-200/80 bg-white/70 p-6 shadow-[0_24px_70px_-44px_rgba(15,23,42,0.35)] backdrop-blur md:p-8">
      {(error || success) && (
        <div className="space-y-3">
          {error && (
            <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}
          {success && (
            <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              {success}
            </p>
          )}
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="text-sm font-semibold text-slate-800">Nombre completo</label>
          <input
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-800">Email</label>
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-800">Teléfono</label>
          <input
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-800">Puesto</label>
          <input
            name="position"
            required
            value={formData.position}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-800">Años de experiencia</label>
          <input
            name="experience_years"
            type="number"
            min="0"
            required
            value={formData.experience_years}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-800">LinkedIn</label>
          <input
            name="linkedin_url"
            value={formData.linkedin_url}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-semibold text-slate-800">CV</label>
          <input
            name="cv_url"
            value={formData.cv_url}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-slate-200/80 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          Los cambios se guardan directamente en el pipeline operativo de Brasaland.
        </p>

        <button
          type="submit"
          disabled={isSaving}
          className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {isSaving ? "Guardando..." : submitLabel}
        </button>
      </div>
    </form>
  );
}