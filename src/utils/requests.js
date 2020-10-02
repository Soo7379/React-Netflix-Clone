const API_KEY = "501d8344cc8ec55d31bacf1913faec63";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

  fetchActionSeries: `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10759`,
  fetchComedySeries: `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchCrimeSeries: `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=80`,
  fetchSifiSeries: `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10765`,
  fetchDocumentarySeries: `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=99`,
};

export default requests;
