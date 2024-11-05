export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="container mx-auto py-12 md:py-16 lg:py-24 px-4 sm:px-6 max-w-[1400px]">
        <div
          className="relative backdrop-blur-3xl bg-white/5 rounded-lg md:rounded-2xl lg:rounded-3xl 
          p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl"
        >
          {/* En-tête de la page */}
          <div className="relative mb-8 md:mb-12 lg:mb-16">
            <div
              className="absolute left-0 -top-1 md:-top-4 w-16 md:w-24 h-0.5 md:h-1 
              bg-gradient-to-r from-red-700 via-red-500 to-white"
            ></div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white pt-2">
              Explorer par Genre
              <span className="block mt-2 text-xs sm:text-sm font-normal text-gray-400">
                Découvrez tous les genres de films
              </span>
            </h1>
          </div>

          {/* Grille des genres */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-white/[0.03] backdrop-blur-lg rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Placeholder pour l'icône */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/10 rounded-lg"></div>
                    <div>
                      {/* Placeholder pour le titre */}
                      <div className="h-5 sm:h-6 md:h-7 bg-white/10 rounded w-24 sm:w-32 mb-2"></div>
                      {/* Placeholder pour le sous-titre */}
                      <div className="h-4 bg-white/10 rounded w-20 sm:w-28"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
