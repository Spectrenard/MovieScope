import MovieSection from "../components/MovieSection";
import { movieService } from "../services/tmdb";
import { Movie } from "../types/movie";

export const revalidate = 3600; // Revalidation toutes les heures

export default async function NowPlaying() {
  // Récupérer les films sans paramètre de page
  const pages = await Promise.all([
    movieService.getNowPlaying(),
    movieService.getNowPlaying(),
    movieService.getNowPlaying(),
  ]);

  // Filtrer les doublons en utilisant un Map
  const uniqueMovies = Array.from(
    new Map(
      pages.flatMap((page) => page.results).map((movie) => [movie.id, movie])
    ).values()
  );

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="container mx-auto py-24 max-w-[1400px]">
        <div className="relative backdrop-blur-3xl bg-white/5 rounded-3xl p-12 shadow-2xl">
          <div className="relative mb-16">
            <div className="absolute left-0 -top-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <h1 className="text-4xl font-extrabold text-white">
              Films à l'affiche
              <span className="block mt-2 text-sm font-normal text-gray-400">
                Découvrez les films actuellement au cinéma
              </span>
            </h1>
          </div>

          <MovieSection title="" movies={uniqueMovies} />
        </div>
      </div>
    </main>
  );
}
