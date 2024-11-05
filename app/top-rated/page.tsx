import { movieService } from "../services/tmdb";
import MovieSection from "../components/MovieSection";

export default async function TopRated() {
  const [topRated] = await Promise.all([movieService.getTopRated()]);

  return (
    <main className="min-h-screen bg-[#121212]">
      <div className="container mx-auto px-4 py-12">
        <MovieSection title="Les mieux notés" movies={topRated.results} />
      </div>
    </main>
  );
}
