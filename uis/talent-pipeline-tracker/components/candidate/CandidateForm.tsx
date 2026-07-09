"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Candidate } from "@/types/candidate";
import type { CandidateFormData } from "@/services/candidates";

interface CandidateFormProps {
  initialData?: Candidate;
  onSubmit: (data: CandidateFormData) => Promise<void>;
  submitLabel: string;
  successMessage: string;
}

export function CandidateForm({
  initialData,
  onSubmit,
  submitLabel,
  successMessage,
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
    status: initialData?.status ?? "received",
    stage: initialData?.stage ?? "pending",
    applied_at: initialData?.applied_at?.slice(0, 10) ?? "",
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

    if (!formData.full_name || !formData.email || !formData.position) {
      setError("Completá nombre, email y puesto antes de guardar.");
      return;
    }

    try {
      setIsSaving(true);
      setError("");
      setSuccess("");

      await onSubmit(formData);

      setSuccess(successMessage);

      setTimeout(() => {
        router.push("/");
      }, 800);
    } catch {
      setError("Ocurrió un error al guardar la candidatura.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-2xl bg-white p-6 shadow-sm">
      {error && <p className="text-sm text-red-600">{error}</p>}
      {success && <p className="text-sm text-green-600">{success}</p>}

      <div>
        <label className="text-sm font-semibold">Nombre completo</label>
        <input
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border p-2"
        />
      </div>

      <div>
        <label className="text-sm font-semibold">Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border p-2"
        />
      </div>

      <div>
        <label className="text-sm font-semibold">Teléfono</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border p-2"
        />
      </div>

      <div>
        <label className="text-sm font-semibold">Puesto</label>
        <input
          name="position"
          value={formData.position}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border p-2"
        />
      </div>

      <div>
        <label className="text-sm font-semibold">LinkedIn</label>
        <input
          name="linkedin_url"
          value={formData.linkedin_url}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border p-2"
        />
      </div>

      <div>
        <label className="text-sm font-semibold">CV</label>
        <input
          name="cv_url"
          value={formData.cv_url}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border p-2"
        />
      </div>

      <div>
        <label className="text-sm font-semibold">Años de experiencia</label>
        <input
          name="experience_years"
          type="number"
          min="0"
          value={formData.experience_years}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border p-2"
        />
      </div>

      <div>
        <label className="text-sm font-semibold">Estado</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border p-2"
        >
          <option value="received">Recibida</option>
          <option value="in_progress">En proceso</option>
          <option value="selected">Seleccionada</option>
          <option value="discarded">Descartada</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold">Etapa</label>
        <select
          name="stage"
          value={formData.stage}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border p-2"
        >
          <option value="pending">Pendiente</option>
          <option value="review">Revisión</option>
          <option value="personal_interview">Entrevista personal</option>
          <option value="technical_interview">Entrevista técnica</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold">Fecha de aplicación</label>
        <input
          name="applied_at"
          type="date"
          value={formData.applied_at}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border p-2"
        />
      </div>

      <button
        type="submit"
        disabled={isSaving}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white disabled:bg-gray-300"
      >
        {isSaving ? "Guardando..." : submitLabel}
      </button>
    </form>
  );
}