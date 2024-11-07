"use client";

import Image from "next/image";
import Link from "next/link";
import { Movie } from "../types/movie";
import { useState, useEffect } from "react";
import { BiHeart, BiSolidHeart } from "react-icons/bi";

export default function MovieCard({ movie }: { movie: Movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some((fav: Movie) => fav.id === movie.id));
  }, [movie.id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      const newFavorites = favorites.filter(
        (fav: Movie) => fav.id !== movie.id
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    } else {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="relative group transition-smooth">
        {/* Bouton Favoris */}
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 z-20 p-2 rounded-full bg-black/50 
          hover:bg-black/70 transition-colors duration-200"
        >
          {isFavorite ? (
            <BiSolidHeart className="w-5 h-5 text-red-500" />
          ) : (
            <BiHeart className="w-5 h-5 text-white" />
          )}
        </button>

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
