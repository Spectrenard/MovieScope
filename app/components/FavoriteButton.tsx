"use client";
import { useState, useEffect } from "react";
import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { Movie } from "../types/movie";

interface FavoriteButtonProps {
  movie: Movie;
}

export default function FavoriteButton({ movie }: FavoriteButtonProps) {
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
    <button
      onClick={toggleFavorite}
      className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors duration-200"
    >
      {isFavorite ? (
        <BiSolidHeart className="w-6 h-6 text-red-500" />
      ) : (
        <BiHeart className="w-6 h-6 text-white" />
      )}
    </button>
  );
}
