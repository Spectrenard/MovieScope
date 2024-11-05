import Link from "next/link";
import { movieService } from "./services/tmdb";
import MovieCard from "./components/MovieCard";
import { Movie } from "./types/movie";
import Hero from "./components/Hero";

async function MovieSection({
  title,
  movies,
}: {
  title: string;
  movies: Movie[];
}) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-medium mb-6 text-white/90">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

async function Home() {
  const [trending, topRated] = await Promise.all([
    movieService.getTrending(),
    movieService.getTopRated(),
  ]);

  return (
    <main className="min-h-screen bg-[#121212]">
      {/* Hero Section avec transition */}
      <Hero movies={trending.results} />

      {/* Sections de films */}
      <div className="container mx-auto px-4 py-12">
        <MovieSection title="Films Tendances" movies={trending.results} />
        <MovieSection title="Les mieux notés" movies={topRated.results} />
      </div>
    </main>
  );
}

export default Home;
