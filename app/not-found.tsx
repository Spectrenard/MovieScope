"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#121212] pt-24">
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Page non trouvée</h2>
        <p className="text-gray-400 mb-8">
          La page que vous recherchez n'existe pas.
        </p>
        <Link
          href="/"
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors inline-block"
        >
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
