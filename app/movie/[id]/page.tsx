import { movieService } from "../../../app/services/tmdb";
import Image from "next/image";
import { FiClock, FiCalendar, FiDollarSign, FiGlobe } from "react-icons/fi";
import { BiPlay } from "react-icons/bi";
import Link from "next/link";

function formatBudget(amount: number | null | undefined): string {
  if (!amount) return "Non défini";
  if (amount >= 1000000000) {
    return `${(amount / 1000000000).toFixed(2)}B $`;
  }
  return `${(amount / 1000000).toFixed(1)}M $`;
}

export default async function MovieDetail(props: any) {
  const id = props.params.id;
  const movie = await movieService.getMovieDetails(id);
  const credits = await movieService.getMovieCredits(id);
  const videos = await movieService.getMovieVideos(id);
  const recommendations = await movieService.getMovieRecommendations(id);

  // Ajout de logs pour déboguer
  console.log("Recommendations:", recommendations);

  // Vérification plus stricte des données
  const hasRecommendations =
    recommendations?.results && recommendations.results.length > 0;

  // Filtrer pour obtenir les bandes-annonces en français ou en anglais
  const trailers = videos.results?.filter(
    (video: any) =>
      (video.type === "Trailer" || video.type === "Teaser") &&
      (video.iso_639_1 === "fr" || video.iso_639_1 === "en")
  );

  return (
    <main className="min-h-screen bg-[#121212]">
      {/* Hero Section avec backdrop */}
      <div className="relative h-[40vh] sm:h-[70vh]">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />
      </div>

      {/* Contenu Principal */}
      <div className="container mx-auto px-4 -mt-32 sm:-mt-64 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-12">
          {/* Colonne de gauche - Poster et Infos rapides */}
          <div className="w-full lg:w-1/3 mb-6 sm:mb-8">
            <div className="group relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 max-md:max-w-[250px] mx-auto">
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
                    label="Coût de production"
                    value={formatBudget(movie.budget)}
                  />
                  <InfoItem
                    icon={<FiDollarSign />}
                    label="Gains en salles"
                    value={formatBudget(movie.revenue)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Colonne de droite - Détails */}
          <div className="w-full lg:w-2/3 space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
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

            {/* Bandes-annonces */}
            {trailers && trailers.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Bandes-annonces</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {trailers.slice(0, 2).map((trailer: any) => (
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
            )}

            {/* Distribution */}
            <div className="py-9">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Distribution principale
              </h2>
              <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
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

      {/* Section des recommandations avec vérification plus stricte */}
      {hasRecommendations && (
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold mb-6">Films recommandés</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {recommendations.results.slice(0, 5).map((movie: any) => (
              <Link
                href={`/movie/${movie.id}`}
                key={movie.id}
                className="group"
              >
                {movie.poster_path ? (
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      alt={movie.title}
                      width={300}
                      height={450}
                      className="w-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ) : (
                  <div className="aspect-[2/3] bg-[#2a2a2a] rounded-lg flex items-center justify-center">
                    <span className="text-white/40">No image</span>
                  </div>
                )}
                <h3 className="mt-2 text-sm font-medium text-white/90">
                  {movie.title}
                </h3>
                <p className="text-sm text-white/60">
                  {movie.release_date
                    ? new Date(movie.release_date).getFullYear()
                    : "Date inconnue"}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
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
