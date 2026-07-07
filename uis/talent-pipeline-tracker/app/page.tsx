import { CandidateList } from "@/components/candidate/CandidateList";
import { getCandidates } from "@/services/candidates";

export default async function Home() {
  const candidates = await getCandidates();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-3xl font-bold">
          Talent Pipeline Tracker
        </h1>

        <CandidateList candidates={candidates} />
      </div>
    </main>
  );
}