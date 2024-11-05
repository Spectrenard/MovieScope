"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types/movie";

export default function Hero({ movies }: { movies: Movie[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Fonction pour obtenir un index aléatoire
    const getRandomIndex = () => Math.floor(Math.random() * movies.length);

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        // Utilisation d'un nouvel index aléatoire à chaque fois
        setCurrentIndex(getRandomIndex());
        setIsTransitioning(false);
      }, 500); // Durée du fade-out
    }, 5000); // Changement toutes les 5 secondes

    // Définir un index aléatoire initial
    setCurrentIndex(getRandomIndex());

    return () => clearInterval(timer);
  }, [movies.length]);

  const currentMovie = movies[currentIndex];

  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`}
          alt={`${currentMovie.title} backdrop`}
          fill
          className={`object-cover transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-[#121212]/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-5xl font-bold mb-4 max-w-2xl">
          Bienvenue sur CinéVerse
        </h1>
        <p className="text-xl text-white/80 max-w-xl mb-8">
          Découvrez les meilleurs films, les dernières sorties et les classiques
          intemporels.
        </p>
        <Link
          href="/movies"
          className="bg-indigo-600 hover:bg-indigo-700 transition-colors px-6 py-3 rounded-lg text-white font-medium"
        >
          Explorer les films
        </Link>
      </div>
    </section>
  );
}
