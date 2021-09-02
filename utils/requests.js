const apiKey = process.env.TMDB_API_KEY;

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${apiKey}&language-en-us`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${apiKey}&language-en-us`,
  },
  fetchActionMovies: {
    title: 'Action',
    url: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: 'Horror',
    url: `/discover/movie?api_key=${apiKey}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: 'Romance',
    url: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  },
  fetchMysteryMovies: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${apiKey}&with_genres=9648`,
  },
  fetchSciFi: {
    title: 'Sci-Fi',
    url: `/discover/movie?api_key=${apiKey}&with_genres=878`,
  },
  fetchWestern: {
    title: 'Western',
    url: `/discover/movie?api_key=${apiKey}&with_genres=37`,
  },
  fetchAnimation: {
    title: 'Animation',
    url: `/discover/movie?api_key=${apiKey}&with_genres=16`,
  },
  fetchTv: {
    title: 'TV Shows',
    url: `/discover/movie?api_key=${apiKey}&with_genres=10770`,
  },
};