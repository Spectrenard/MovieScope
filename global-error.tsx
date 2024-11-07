"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className="min-h-screen bg-[#121212] pt-24">
          <div className="container mx-auto px-4 py-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Erreur critique
            </h2>
            <p className="text-gray-400 mb-8">
              Une erreur critique s'est produite.
            </p>
            <button
              onClick={() => reset()}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Réessayer
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
