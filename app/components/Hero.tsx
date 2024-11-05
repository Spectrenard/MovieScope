"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types/movie";
import { motion } from "framer-motion";
import { BsPlayCircleFill } from "react-icons/bs";

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
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0">
        <Image
          src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`}
          alt="Film backdrop"
          fill
          className={`object-cover transition-opacity duration-1000 ${
            isTransitioning ? "opacity-0" : "opacity-50"
          } scale-105`}
          priority
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/80" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-indigo-500 to-pink-500" />
            <span className="text-indigo-400 font-medium tracking-wider text-sm">
              PLUS JAMAIS À COURT D'IDÉES
            </span>
          </div>

          <h1 className="text-7xl font-black mb-8 leading-none tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-white/70 text-transparent bg-clip-text">
              Le film parfait pour votre soirée en quelques clics
            </span>
          </h1>

          <p className="text-xl text-gray-300/90 max-w-2xl mb-12 leading-relaxed">
            Action, comédie, drame ou science-fiction ? Découvrez des films qui
            correspondent à vos envies du moment.
          </p>

          <div className="flex gap-6 items-center">
            <Link href="/genres">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <BsPlayCircleFill className="w-5 h-5 relative z-10" />
                <span className="relative z-10 font-medium">
                  Trouver mon film
                </span>
              </motion.button>
            </Link>

            <Link href="/top-rated">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg text-white font-medium border border-white/10 hover:bg-white/5 transition-colors backdrop-blur-sm"
              >
                Films les mieux notés
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
