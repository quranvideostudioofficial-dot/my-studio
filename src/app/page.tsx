export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-emerald-50 to-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-emerald-900 mb-4">
          Quran Video Studio
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          100% Client-Side | Lifetime Free | Phase 2 Completed
        </p>
        <div className="mt-8 p-4 bg-white rounded-lg shadow border">
          <p className="text-sm">✅ GitHub Setup Done</p>
          <p className="text-sm">✅ Static Export Configured</p>
          <p className="text-sm">⏳ Next: Vercel Setup</p>
        </div>
      </div>
    </main>
  );
}