import { movieService } from "../../services/tmdb";
import MovieSection from "../../components/MovieSection";
import { Movie } from "../../types/movie";

async function getAllMoviesForGenre(genreId: string, maxPages = 5) {
  let allMovies: Movie[] = [];

  // Récupérer plusieurs pages en parallèle
  const pagePromises = Array.from({ length: maxPages }, (_, i) =>
    movieService.getMoviesByGenre(genreId, i + 1)
  );

  const results = await Promise.all(pagePromises);

  // Combiner tous les résultats
  results.forEach((response) => {
    allMovies = [...allMovies, ...response.results];
  });

  // Trier par popularité
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
    <main className="min-h-screen bg-[#121212]">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-white">
          Films {currentGenre?.name}
        </h1>
        <MovieSection
          title={`Les meilleurs films ${currentGenre?.name}`}
          movies={movies}
        />
      </div>
    </main>
  );
}
