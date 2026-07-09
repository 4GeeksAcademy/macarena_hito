import Link from "next/link";
import { getCandidateById } from "@/services/candidates";
import { CandidateActions } from "@/components/candidate/CandidateActions";
import { StageBadge } from "@/components/common/StageBadge";
import { StatusBadge } from "@/components/common/StatusBadge";

interface CandidateDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CandidateDetailPage({
  params,
}: CandidateDetailPageProps) {
  const { id } = await params;
  const candidate = await getCandidateById(id);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-medium text-orange-600">
          ← Volver al listado
        </Link>

        <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">
            {candidate.full_name}
          </h1>

          <p className="mt-2 text-gray-600">{candidate.position}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <StatusBadge status={candidate.status} />
            <StageBadge stage={candidate.stage} />
          </div>

          <div className="mt-6 grid gap-4 text-sm text-gray-700 md:grid-cols-2">
            <p>
              <strong>Email:</strong> {candidate.email}
            </p>
            <p>
              <strong>Teléfono:</strong> {candidate.phone ?? "No disponible"}
            </p>
            <p>
              <strong>Experiencia:</strong> {candidate.experience_years} años
            </p>
            <p>
              <strong>Aplicó:</strong>{" "}
              {new Date(candidate.applied_at).toLocaleDateString()}
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              {candidate.linkedin_url ?? "No disponible"}
            </p>
            <p>
              <strong>CV:</strong> {candidate.cv_url ?? "No disponible"}
            </p>
          </div>

          <CandidateActions status={candidate.status} stage={candidate.stage} />
        </section>
      </div>
    </main>
  );
}