import { movieService } from "../services/tmdb";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types/movie";
import Pagination from "@/components/ui/Pagination";
import ScrollToTop from "@/components/ScrollToTop";

export default async function TopRated(props: any) {
  const currentPage = Number(props.searchParams?.page) || 1;
  const moviesPerPage = 20;

  const page = await movieService.getTopRated(currentPage);
  const totalPages = 5;

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
              className="absolute left-0  md:-top-4 w-16 md:w-24 h-0.5 md:h-1 
              bg-gradient-to-r from-red-700 via-red-500 to-white"
            ></div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white pt-2">
              Les mieux notés
              <span className="block mt-2 text-xs sm:text-sm font-normal text-gray-400">
                Le top 100 des films les mieux notés
              </span>
            </h1>
          </div>

          {/* Grille de films */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-2 sm:px-0">
            {page.results.map((movie: Movie) => (
              <div
                key={movie.id}
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </div>
        </div>
      </div>
      <ScrollToTop />
    </main>
  );
}
