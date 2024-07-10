import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MovieAPI } from "../../api";
import { AxiosResponse } from "axios";

export interface Typeofresults {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: 5416.001;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface Typeofmovies {
  page: number;
  results: Typeofresults[];
  total_pages: number;
  total_results: number;
  oneMovie: {};
}
export interface Typeofmoviesresult {
  page: number;
  movies: Typeofresults[];
  total_pages: number;
  total_results: number;
  oneMovie: Typeofresults | null;
}
export const fetchMovies: any = createAsyncThunk<Typeofresults[]>(
  "fetchMovies",
  async () => {
    const res: AxiosResponse<Typeofmovies> = await MovieAPI.getMovies();
    return res.data.results;
  }
);
export const fetchMovie: any = createAsyncThunk(
  "fetchMovie",
  async (id: string) => {
    const res: AxiosResponse<Typeofresults> = await MovieAPI.getOneMovie(id);
    return res.data;
  }
);

const initialState: Typeofmoviesresult = {
  movies: [],
  page: 1,
  total_pages: 0,
  total_results: 0,
  oneMovie: null,
};
const moviesSlices = createSlice({
  name: "moviesSlices",
  initialState,
  reducers: {},
    
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.oneMovie = action.payload;
    });
  },
});
export default moviesSlices.reducer;
