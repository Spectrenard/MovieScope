"use client";

import Image from "next/image";
import Link from "next/link";
import { Movie } from "../types/movie";
import FavoriteButton from "./features/FavoriteButton";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="relative group transition-smooth">
        {/* Container principal */}
        <div className="bg-[#1e1e1e] rounded-xl overflow-hidden transition-smooth">
          {/* Image */}
          <div className="relative aspect-[2/3]">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={400}
              height={600}
              className="w-full"
              quality={80}
              loading="lazy"
            />
            {/* Bouton Favoris à l'intérieur de la carte */}
            <div className="absolute top-2 right-2 z-10">
              <FavoriteButton movie={movie} />
            </div>
            {/* Overlay desktop */}
            <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex-col justify-end p-4">
              <h2 className="text-lg font-medium text-white mb-2">
                {movie.title}
              </h2>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-yellow-500/20 rounded-md text-yellow-300 text-sm">
                  ⭐ {movie.vote_average.toFixed(1)}
                </span>
                <span className="text-sm text-gray-300">
                  {new Date(movie.release_date).getFullYear()}
                </span>
              </div>
            </div>
            {/* Overlay mobile avec dégradé */}
            <div className="absolute md:hidden inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
              <div className="absolute bottom-0 p-3 w-full">
                <h2 className="text-base font-semibold text-white mb-2 line-clamp-2">
                  {movie.title}
                </h2>
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-yellow-500/20 backdrop-blur-sm rounded-full">
                    <span className="text-yellow-300">⭐</span>
                    <span className="text-yellow-100 font-medium">
                      {movie.vote_average.toFixed(1)}
                    </span>
                  </div>
                  <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-200">
                    {new Date(movie.release_date).getFullYear()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
