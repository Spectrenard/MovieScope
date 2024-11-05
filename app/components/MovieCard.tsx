import Image from "next/image";
import Link from "next/link";
import { Movie } from "../types/movie";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="relative group transition-smooth">
        {/* Container principal */}
        <div className="bg-[#1e1e1e] rounded-xl overflow-hidden transition-smooth hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/10">
          {/* Image */}
          <div className="relative h-[400px]">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay avec les infos */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex flex-col justify-end p-4">
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
          </div>
        </div>
      </div>
    </Link>
  );
}
