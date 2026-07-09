import Link from "next/link";
import { CandidateList } from "@/components/candidate/CandidateList";
import { getCandidates } from "@/services/candidates";

export default async function Home() {
  const candidates = await getCandidates();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            Talent Pipeline Tracker
          </h1>

          <Link
            href="/create"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Nueva candidatura
          </Link>
        </div>

        <CandidateList candidates={candidates} />
      </div>
    </main>
  );
}