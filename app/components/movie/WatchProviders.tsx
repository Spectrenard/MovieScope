import Image from "next/image";

interface WatchProvidersProps {
  providers: {
    flatrate?: any[];
    rent?: any[];
    link?: string;
  };
}

export default function WatchProviders({ providers }: WatchProvidersProps) {
  if (!providers) return null;

  return (
    <div className="container mx-auto px-4 mt-8 pb-10">
      <div className="bg-[#1a1a1a] rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-medium mb-3 text-white/90">
          Disponible sur
        </h3>

        {/* Streaming par abonnement */}
        {providers.flatrate && providers.flatrate.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 bg-indigo-500 rounded-full"></div>
              <h4 className="text-sm font-medium text-white/90">
                Streaming par abonnement
              </h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {providers.flatrate.map((provider) => (
                <div
                  key={provider.provider_id}
                  className="group flex items-center gap-2.5 bg-[#2a2a2a] hover:bg-[#333333] 
                    rounded-lg p-2.5 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative">
                    <Image
                      src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                      alt={provider.provider_name}
                      width={32}
                      height={32}
                      className="rounded-md shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-sm font-medium text-white/80 group-hover:text-white">
                    {provider.provider_name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Location à l'unité */}
        {providers.rent && providers.rent.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 bg-amber-500 rounded-full"></div>
              <h4 className="text-sm font-medium text-white/90">
                Location à l'unité
              </h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {providers.rent.map((provider) => (
                <div
                  key={provider.provider_id}
                  className="group flex items-center gap-2.5 bg-[#2a2a2a] hover:bg-[#333333] 
                    rounded-lg p-2.5 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative">
                    <Image
                      src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                      alt={provider.provider_name}
                      width={32}
                      height={32}
                      className="rounded-md shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-sm font-medium text-white/80 group-hover:text-white">
                    {provider.provider_name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
