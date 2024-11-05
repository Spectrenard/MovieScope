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
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="container mx-auto py-32 px-6 max-w-[1600px]">
        <div className="relative backdrop-blur-xl bg-white/[0.02] rounded-3xl p-16 shadow-2xl">
          <div className="relative mb-16">
            <div className="absolute left-0 -top-4 w-32 h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
            <h1 className="text-4xl font-bold text-white">
              Les mieux notés
              <span className="block mt-3 text-base font-normal text-gray-400">
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
