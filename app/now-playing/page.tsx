import MovieSection from "../components/MovieSection";
import { movieService } from "../services/tmdb";

export const revalidate = 3600; // Revalidation toutes les heures

export default async function NowPlaying() {
  const data = await movieService.getNowPlaying();

  return (
    <main className="min-h-screen bg-[#121212] pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">
          Films à l'affiche
        </h1>
        <MovieSection movies={data.results} />
      </div>
    </main>
  );
}
