import { movieService } from "../services/tmdb";
import Link from "next/link";
import { Genre } from "../types/movie";

const genreIcons: { [key: string]: string } = {
  Action: "🎬",
  Aventure: "🗺️",
  Animation: "🎨",
  Comédie: "😄",
  Crime: "🚔",
  Documentaire: "📚",
  Drame: "🎭",
  Famille: "👨‍👩‍👧‍👦",
  Fantastique: "🧙‍♂️",
  Histoire: "📜",
  Horreur: "👻",
  Musique: "🎵",
  Mystère: "🔍",
  Romance: "💕",
  "Science-Fiction": "🚀",
  Téléfilm: "📺",
  Thriller: "😱",
  Guerre: "⚔️",
  Western: "🤠",
};

export default async function GenresPage() {
  const { genres } = await movieService.getGenres();

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
            {genres.map((genre: Genre) => (
              <Link
                key={genre.id}
                href={`/genres/${genre.id}`}
                className="group"
              >
                <div
                  className="bg-white/[0.03] backdrop-blur-lg rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8 
                  transition-all duration-300 ease-out
                  group-hover:bg-gradient-to-br from-white/[0.07] to-white/[0.03]
                  group-hover:shadow-lg group-hover:shadow-white/5
                  border border-transparent group-hover:border-white/10"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    {/* Icône */}
                    <span
                      className="text-2xl sm:text-3xl md:text-4xl 
                      transition-transform duration-300 group-hover:scale-110"
                    >
                      {genreIcons[genre.name] || "🎥"}
                    </span>

                    {/* Textes */}
                    <div>
                      <h2
                        className="text-base sm:text-lg md:text-xl font-medium 
                        text-white/90 group-hover:text-white transition-colors"
                      >
                        {genre.name}
                      </h2>
                      <p
                        className="text-xs sm:text-sm text-white/50 
                        group-hover:text-white/70 transition-colors"
                      >
                        Découvrir les films
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
