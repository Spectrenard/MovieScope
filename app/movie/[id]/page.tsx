import { movieService } from "../../../app/services/tmdb";
import Image from "next/image";
import { FiClock, FiCalendar, FiDollarSign, FiGlobe } from "react-icons/fi";

function formatBudget(amount: number | null | undefined): string {
  if (!amount) return "Non défini";
  if (amount >= 1000000000) {
    return `${(amount / 1000000000).toFixed(2)}B $`;
  }
  return `${(amount / 1000000).toFixed(1)}M $`;
}

export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  const [movie, credits] = await Promise.all([
    movieService.getMovieDetails(params.id),
    movieService.getMovieCredits(params.id),
  ]);

  return (
    <main className="min-h-screen bg-[#121212]">
      {/* Hero Section avec backdrop */}
      <div className="relative h-[70vh]">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />
      </div>

      {/* Contenu Principal */}
      <div className="container mx-auto px-4 -mt-64 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Colonne de gauche - Poster et Infos rapides */}
          <div className="lg:w-1/3">
            <div className="group relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={400}
                height={600}
                className="w-full"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Infos rapides */}
            <div className="mt-8 bg-[#1a1a1a] rounded-xl p-6 space-y-4">
              <InfoItem
                icon={<FiCalendar />}
                label="Date de sortie"
                value={new Date(movie.release_date).toLocaleDateString("fr-FR")}
              />
              <InfoItem
                icon={<FiClock />}
                label="Durée"
                value={`${movie.runtime} minutes`}
              />
              <InfoItem
                icon={<FiGlobe />}
                label="Langue"
                value={movie.original_language.toUpperCase()}
              />

              {/* Section financière */}
              <div className="border-t border-white/10 pt-4 mt-4">
                <h3 className="text-lg font-medium mb-3 text-white/90">
                  Informations financières
                </h3>
                <div className="space-y-3">
                  <InfoItem
                    icon={<FiDollarSign />}
                    label="Budget"
                    value={formatBudget(movie.budget)}
                  />
                  <InfoItem
                    icon={<FiDollarSign />}
                    label="Recettes"
                    value={formatBudget(movie.revenue)}
                  />
                  {movie.budget && movie.revenue && (
                    <div className="text-sm">
                      <span
                        className={`${
                          movie.revenue > movie.budget
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {movie.revenue > movie.budget
                          ? `Bénéfice: ${formatBudget(
                              movie.revenue - movie.budget
                            )}`
                          : `Perte: ${formatBudget(
                              movie.budget - movie.revenue
                            )}`}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Colonne de droite - Détails */}
          <div className="lg:w-2/3 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {movie.title}
              </h1>
              <div className="flex flex-wrap gap-3 mb-6">
                {movie.genres?.map((genre: any) => (
                  <span
                    key={genre.id}
                    className="bg-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-medium
                    hover:bg-indigo-500/30 transition-colors duration-300"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Note et Popularité */}
            <div className="flex items-center gap-6">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full bg-yellow-500/20" />
                <div className="absolute inset-1 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                  <span className="text-2xl font-bold text-yellow-500">
                    {movie.vote_average.toFixed(1)}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm text-white/60">Note des utilisateurs</p>
                <p className="text-white/90">
                  Basé sur {movie.vote_count.toLocaleString()} votes
                </p>
              </div>
            </div>

            {/* Synopsis */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Synopsis</h2>
              <p className="text-lg leading-relaxed text-white/80">
                {movie.overview || "Aucun synopsis disponible."}
              </p>
            </div>

            {/* Distribution */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">
                Distribution principale
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {credits.cast?.slice(0, 8).map((actor: any) => (
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
          </div>
        </div>
      </div>
    </main>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 text-white/80">
      <div className="text-indigo-400 text-xl">{icon}</div>
      <div>
        <p className="text-sm text-white/60">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}
