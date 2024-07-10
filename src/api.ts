import axios from "axios";
const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a";
const baseURL = "https://api.themoviedb.org/3";
const instance = axios.create({
  baseURL,
});
export const MovieAPI = {
  getGenres() {
    return instance.get(`/genre/movie/list?api_key=${apiKey}&language=en-US`);
  },
  getMovies(pageCount=1) {
    return instance.get(
      `/discover/movie?api_key=${apiKey}&language=en-US&page=${pageCount}`
    );
  },
  getOneMovie(id: string) {
    return instance.get(`/movie/${id}?api_key=${apiKey}&language=en-US`);
  },
//   

};

// const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

// 'https://api.themoviedb.org/3' <= baseURL

// getGenres => /genre/movie/list?api_key=${apiKey}&language=en-US
// MoviePage => discover/movie?api_key=${apiKey}&language=en-US&page=${pageCount}
// GETonemovie => /movie/${id}?api_key=${apiKey}&language=en-US
// getSerch => search/movie?api_key=${apiKey}&query=${text}`
// getGenreMovie => /discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genreId}&page=${1}
