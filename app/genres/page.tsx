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
    <main className="min-h-screen bg-[#121212]">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-white">
          Explorer par Genre
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {genres.map((genre: Genre) => (
            <Link key={genre.id} href={`/genres/${genre.id}`} className="group">
              <div className="bg-[#1a1a1a] rounded-xl p-6 hover:bg-[#242424] transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1">
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
    </main>
  );
}
