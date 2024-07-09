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
}
export interface Typeofmoviesresult {
    page: number;
    movies: Typeofresults[];
    total_pages: number;
    total_results: number;
  }
export const fetchMovies: any = createAsyncThunk<Typeofresults[]>(
  "fetchMovies",
  async () => {
    const res: AxiosResponse<Typeofmovies> = await MovieAPI.getMovies();
    return res.data.results;
  }
);

const initialState:Typeofmoviesresult = {
  movies: [],
  page: 1,
  total_pages: 44976,
  total_results: 899512,
};
const moviesSlices = createSlice({
  name: "moviesSlices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});
export default moviesSlices.reducer;
