import Image from "next/image";

interface MovieHeroProps {
  backdropPath: string;
  title: string;
}

export default function MovieHero({ backdropPath, title }: MovieHeroProps) {
  return (
    <div className="relative h-[40vh] sm:h-[70vh]">
      <Image
        src={`https://image.tmdb.org/t/p/original${backdropPath}`}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />
    </div>
  );
}
