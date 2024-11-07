import Image from "next/image";
import FavoriteButton from "@/components/features/FavoriteButton";

interface MoviePosterProps {
  movie: any;
}

export default function MoviePoster({ movie }: MoviePosterProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 max-md:max-w-[250px] mx-auto">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={400}
        height={600}
        className="w-full"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-4 right-4 z-10">
        <FavoriteButton movie={movie} />
      </div>
    </div>
  );
}
