import { movieService } from "../services/tmdb";
import MovieSection from "../components/MovieSection";

export default async function TopRated() {
  // Récupérer les 5 premières pages (100 films)
  const pages = await Promise.all([
    movieService.getTopRated(1),
    movieService.getTopRated(2),
    movieService.getTopRated(3),
    movieService.getTopRated(4),
    movieService.getTopRated(5),
  ]);

  // Combiner tous les résultats
  const allMovies = pages.flatMap((page) => page.results);

  return (
    <main className="min-h-screen bg-[#121212]">
      <div className="container mx-auto px-4 py-12">
        <MovieSection title="Les mieux notés" movies={allMovies} />
      </div>
    </main>
  );
}
