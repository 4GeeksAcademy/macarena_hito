export default function Loading() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fff7ed_0%,#f8fafc_22%,#e2e8f0_100%)] p-8">
      <div className="mx-auto max-w-6xl animate-pulse space-y-6">
        <div className="space-y-3">
          <div className="h-4 w-40 rounded bg-orange-100" />
          <div className="h-10 w-72 rounded bg-slate-200" />
          <div className="h-4 w-96 rounded bg-slate-200" />
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="h-20 rounded-2xl bg-slate-100" />
            <div className="h-20 rounded-2xl bg-slate-100" />
            <div className="h-20 rounded-2xl bg-slate-100" />
            <div className="h-20 rounded-2xl bg-slate-100" />
          </div>
        </div>

        <div className="grid gap-4">
          <div className="h-36 rounded-2xl bg-white shadow-sm" />
          <div className="h-36 rounded-2xl bg-white shadow-sm" />
          <div className="h-36 rounded-2xl bg-white shadow-sm" />
        </div>
      </div>
    </main>
  );
}