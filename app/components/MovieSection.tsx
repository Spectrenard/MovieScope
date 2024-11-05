"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MovieCard from "./MovieCard";
import { Movie } from "../types/movie";

export default function MovieSection({
  title,
  movies,
  categorySlug,
}: {
  title: string;
  movies: Movie[];
  categorySlug?: string;
}) {
  const router = useRouter();
  const initialLimit = 8;
  const [limit, setLimit] = useState(initialLimit);

  const showMore = () => {
    setLimit(Math.min(limit + 8, movies.length));
  };

  const navigateToTopRated = () => {
    router.push(`/top-rated`);
  };

  return (
    <section className="relative mb-12 md:mb-24">
      <div className="relative mb-6 md:mb-12">
        <div className="absolute left-0 md:-top-4 w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-red-700 via-red-500 to-white"></div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-white pt-2">
          {title}
          <span className="block mt-2 text-xs md:text-sm font-normal text-gray-400">
            Découvrez notre sélection
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
        {movies.slice(0, limit).map((movie) => (
          <div
            key={movie.id}
            className="transform hover:scale-[1.05] md:hover:scale-105 transition-transform duration-300"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      {limit < movies.length && (
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={showMore}
            className="px-6 py-2 bg-red-700 hover:bg-red-600 text-white rounded-lg transition-colors"
          >
            Voir plus
          </button>
          {categorySlug === "top-rated" && (
            <button
              onClick={navigateToTopRated}
              className="px-6 py-2 border border-red-700 text-red-700 hover:bg-red-700 hover:text-white rounded-lg transition-colors"
            >
              Voir tout
            </button>
          )}
        </div>
      )}
    </section>
  );
}
