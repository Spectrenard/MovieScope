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
    <section className="relative mb-12 md:mb-24">
      <div className="relative mb-6 md:mb-12">
        <div className="absolute left-0 -top-3 md:-top-4 w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-red-700 via-red-500 to-white"></div>

        <h2 className="text-2xl md:text-4xl font-extrabold text-white pt-2">
          {title}
          <span className="block mt-2 text-xs md:text-sm font-normal text-gray-400">
            Découvrez notre sélection
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-2 sm:px-0">
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

      <div className="container mx-auto py-8 md:py-16 lg:py-24 px-4 md:px-6 max-w-[1400px]">
        <div className="relative backdrop-blur-3xl bg-white/5 rounded-xl md:rounded-3xl p-4 md:p-8 lg:p-12 shadow-2xl">
          <MovieSection title="Films Tendances" movies={trending.results} />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent my-8 md:my-16"></div>
          <MovieSection title="Les mieux notés" movies={topRated.results} />
        </div>
      </div>
    </main>
  );
}

export default Home;
