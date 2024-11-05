export default function Loading() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <div className="container mx-auto px-4 py-12">
        {/* Titre */}
        <div className="animate-pulse mb-8">
          <div className="h-8 bg-gray-700 rounded w-64"></div>
        </div>

        {/* Grille de films */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {/* 20 placeholders pour simuler 100 films (5 pages) */}
          {[...Array(20)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-700 rounded-lg aspect-[2/3] mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
