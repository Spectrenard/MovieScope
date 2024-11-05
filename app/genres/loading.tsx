export default function Loading() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <div className="container mx-auto px-4 py-12">
        {/* Titre */}
        <div className="animate-pulse mb-8">
          <div className="h-10 bg-gray-700 rounded w-72"></div>
        </div>

        {/* Grille des genres */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-[#1a1a1a] rounded-xl p-6">
                <div className="flex items-center gap-4">
                  {/* Placeholder pour l'icône */}
                  <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
                  <div className="flex-1">
                    {/* Placeholder pour le titre */}
                    <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
                    {/* Placeholder pour le texte */}
                    <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
