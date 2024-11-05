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
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="container mx-auto py-32 px-6 max-w-[1600px]">
        <div className="relative backdrop-blur-xl bg-white/[0.02] rounded-3xl p-16 shadow-2xl">
          <div className="relative mb-16">
            <div className="absolute left-0 -top-4 w-32 h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
            <h1 className="text-4xl font-bold text-white">
              Explorer par Genre
              <span className="block mt-3 text-base font-normal text-gray-400">
                Découvrez tous les genres de films
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {genres.map((genre: Genre) => (
              <Link
                key={genre.id}
                href={`/genres/${genre.id}`}
                className="group"
              >
                <div
                  className="bg-white/[0.03] backdrop-blur-lg rounded-xl p-8 
                  hover:bg-white/[0.05] transition-all duration-300 
                  hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">
                      {genreIcons[genre.name] || "🎥"}
                    </span>
                    <div>
                      <h2 className="text-xl font-medium text-white/90 group-hover:text-white transition-colors">
                        {genre.name}
                      </h2>
                      <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
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
