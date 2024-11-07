import { BiPlay } from "react-icons/bi";

interface MovieTrailersProps {
  trailers: any[];
}

export default function MovieTrailers({ trailers }: MovieTrailersProps) {
  if (!trailers?.length) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Bandes-annonces</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trailers.slice(0, 2).map((trailer) => (
          <div
            key={trailer.id}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden"
          >
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title={trailer.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <BiPlay className="text-red-500 text-xl" />
                <span className="text-white/90 font-medium">
                  {trailer.type}
                </span>
              </div>
              <p className="text-sm text-white/60">{trailer.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
