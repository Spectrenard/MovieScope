import { movieService } from "./services/tmdb";
import Hero from "./components/Hero";
import MovieSection from "./components/MovieSection";
import ScrollToTop from "./components/features/ScrollToTop";

async function Home() {
  const [trending, topRated] = await Promise.all([
    movieService.getTrending(),
    movieService.getTopRated(),
  ]);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Hero movies={topRated.results} />

      <div className="container mx-auto py-8 md:py-16 lg:py-24 px-4 md:px-6 max-w-[1400px]">
        <div className="relative backdrop-blur-3xl bg-white/5 rounded-xl md:rounded-3xl p-4 md:p-8 lg:p-12 shadow-2xl">
          <MovieSection title="Films Tendances" movies={trending.results} />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent my-8 md:my-16"></div>
          <MovieSection
            title="Les mieux notés"
            movies={topRated.results}
            categorySlug="top-rated"
          />
        </div>
      </div>
      <ScrollToTop />
    </main>
  );
}

export default Home;
