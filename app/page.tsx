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
    <section className="relative mb-24 px-4">
      <div className="absolute left-0 -top-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

      <h2 className="text-4xl font-extrabold mb-12 text-white">
        {title}
        <span className="block mt-2 text-sm font-normal text-gray-400">
          Découvrez notre sélection
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 hover:gap-6 transition-all duration-300">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <MovieCard movie={movie} />
          </div>
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
    <main className="min-h-screen bg-[#0a0a0a]">
      <Hero movies={trending.results} />

      <div className="container mx-auto py-24 max-w-[1400px]">
        <div className="relative backdrop-blur-3xl bg-white/5 rounded-3xl p-12 shadow-2xl">
          <MovieSection title="Films Tendances" movies={trending.results} />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent my-16"></div>
          <MovieSection title="Les mieux notés" movies={topRated.results} />
        </div>
      </div>
    </main>
  );
}

export default Home;
