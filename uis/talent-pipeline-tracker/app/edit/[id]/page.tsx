import { CandidateEditForm } from "@/components/candidate/CandidateEditForm";
import { getCandidateById } from "@/services/candidates";

interface EditCandidatePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditCandidatePage({
  params,
}: EditCandidatePageProps) {
  const { id } = await params;
  const candidate = await getCandidateById(id);

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-3xl font-bold text-gray-900">
        Editar candidatura
      </h1>

      <p className="mt-2 text-gray-600">
        Actualizá la información de la candidatura.
      </p>

      <CandidateEditForm candidate={candidate} />
    </main>
  );
}