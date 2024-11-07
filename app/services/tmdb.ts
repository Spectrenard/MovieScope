const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export const getTrendingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );
  return response.json();
};

export const getMovieDetails = async (movieId: string) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return response.json();
};

export async function fetchFromTMDB(endpoint: string) {
  try {
    const separator = endpoint.includes("?") ? "&" : "?";

    const response = await fetch(
      `${BASE_URL}${endpoint}${separator}api_key=${API_KEY}&language=fr-FR`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Erreur TMDB:", error);
    throw new Error("Erreur lors de la récupération des données");
  }
}

// Création des query keys pour une meilleure organisation
export const queryKeys = {
  trending: ["trending"],
  nowPlaying: ["nowPlaying"],
  upcoming: ["upcoming"],
  topRated: (page: number) => ["topRated", page],
  movieDetails: (id: string) => ["movie", id],
  search: (query: string) => ["search", query],
  credits: (id: string) => ["credits", id],
  genres: ["genres"],
  moviesByGenre: (genreId: string, page: number) => [
    "moviesByGenre",
    genreId,
    page,
  ],
  recommendations: (id: string) => ["recommendations", id],
};

// Le service reste le même mais sera utilisé dans les hooks
export const movieService = {
  getTrending: () => fetchFromTMDB("/trending/movie/week"),
  getNowPlaying: () => fetchFromTMDB("/movie/now_playing"),
  getUpcoming: () => fetchFromTMDB("/movie/upcoming"),
  getTopRated: (page: number = 1) =>
    fetchFromTMDB(`/movie/top_rated?page=${page}`),
  getMovieDetails: (id: string) => fetchFromTMDB(`/movie/${id}`),
  searchMovies: (query: string) =>
    fetchFromTMDB(`/search/movie?query=${encodeURIComponent(query)}`),
  getMovieCredits: (id: string) => fetchFromTMDB(`/movie/${id}/credits`),
  getGenres: () => fetchFromTMDB("/genre/movie/list"),
  getMoviesByGenre: (genreId: string, page: number = 1) =>
    fetchFromTMDB(
      `/discover/movie?with_genres=${genreId}&sort_by=vote_average.desc&vote_count.gte=100&page=${page}`
    ),
  getGenreById: async (id: string) => {
    const genres = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    ).then((res) => res.json());
    return genres.genres.find((genre: any) => genre.id.toString() === id);
  },
  getMovieVideos: (id: string) => fetchFromTMDB(`/movie/${id}/videos`),
  getMovieRecommendations: (id: string) => {
    console.log(`Fetching recommendations for movie ${id}`);
    return fetchFromTMDB(`/movie/${id}/recommendations`);
  },
  // Dans votre classe movieService
};
