import { movieService } from "../services/tmdb";
import MovieSection from "../components/MovieSection";

export default async function TopRated() {
  const pages = await Promise.all([
    movieService.getTopRated(1),
    movieService.getTopRated(2),
    movieService.getTopRated(3),
    movieService.getTopRated(4),
    movieService.getTopRated(5),
  ]);

  const allMovies = pages.flatMap((page) => page.results);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="container mx-auto py-24 max-w-[1400px]">
        <div className="relative backdrop-blur-3xl bg-white/5 rounded-3xl p-12 shadow-2xl">
          <div className="relative mb-16">
            <div className="absolute left-0 -top-4 w-24 h-1 bg-gradient-to-r from-red-700 via-red-500 to-white"></div>
            <h1 className="text-4xl font-extrabold text-white">
              Les mieux notés
              <span className="block mt-2 text-sm font-normal text-gray-400">
                Le top 100 des films les mieux notés
              </span>
            </h1>
          </div>
          <MovieSection title="" movies={allMovies} />
        </div>
      </div>
    </main>
  );
}
