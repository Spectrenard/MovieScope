import { movieService } from "../../services/tmdb";
import MovieCard from "../../components/MovieCard";
import { Movie } from "../../types/movie";

async function getAllMoviesForGenre(genreId: string, maxPages = 5) {
  let allMovies: Movie[] = [];

  const pagePromises = Array.from({ length: maxPages }, (_, i) =>
    movieService.getMoviesByGenre(genreId, i + 1)
  );

  const results = await Promise.all(pagePromises);
  results.forEach((response) => {
    allMovies = [...allMovies, ...response.results];
  });

  return allMovies.sort((a, b) => b.vote_average - a.vote_average);
}

export default async function GenreMoviesPage({
  params,
}: {
  params: { id: string };
}) {
  const [movies, { genres }] = await Promise.all([
    getAllMoviesForGenre(params.id),
    movieService.getGenres(),
  ]);

  const currentGenre = genres.find((g: any) => g.id.toString() === params.id);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <div className="container mx-auto py-12 md:py-16 lg:py-24 px-4 sm:px-6 max-w-[1400px]">
        <div
          className="relative backdrop-blur-3xl bg-white/5 rounded-lg md:rounded-2xl lg:rounded-3xl 
          p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl"
        >
          {/* En-tête de la page */}
          <div className="relative mb-8 md:mb-12 lg:mb-16">
            <div
              className="absolute left-0 -top-1 md:-top-4 w-16 md:w-24 h-0.5 md:h-1 
              bg-gradient-to-r from-red-700 via-red-500 to-white"
            ></div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white pt-2">
              Films {currentGenre?.name}
              <span className="block mt-2 text-xs sm:text-sm font-normal text-gray-400">
                Les meilleurs films du genre {currentGenre?.name}
              </span>
            </h1>
          </div>

          {/* Grille de films */}
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
        </div>
      </div>
    </main>
  );
}
