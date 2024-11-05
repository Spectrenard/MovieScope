const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;

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
  const response = await fetch(
    `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=fr-FR`
  );
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des données");
  }
  return response.json();
}

export const movieService = {
  getTrending: () => fetchFromTMDB("/trending/movie/week"),
  getNowPlaying: () => fetchFromTMDB("/movie/now_playing"),
  getUpcoming: () => fetchFromTMDB("/movie/upcoming"),
  getTopRated: () => fetchFromTMDB("/movie/top_rated"),
  getMovieDetails: (id: string) => fetchFromTMDB(`/movie/${id}`),
  searchMovies: (query: string) =>
    fetchFromTMDB(`/search/movie&query=${encodeURIComponent(query)}`),
  getMovieCredits: (id: string) => fetchFromTMDB(`/movie/${id}/credits`),
};
