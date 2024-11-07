import Image from "next/image";

interface MovieCastProps {
  cast: any[];
}

export default function MovieCast({ cast }: MovieCastProps) {
  return (
    <div className="py-9">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
        Distribution principale
      </h2>
      <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {cast?.slice(0, 8).map((actor) => (
          <div
            key={actor.id}
            className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {actor.profile_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                width={200}
                height={300}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-[#2a2a2a] flex items-center justify-center">
                <span className="text-white/40">No image</span>
              </div>
            )}
            <div className="p-3">
              <p className="font-medium text-white/90">{actor.name}</p>
              <p className="text-sm text-white/60">{actor.character}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
