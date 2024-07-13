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
  popularity: number;
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
  oneMovie: Typeofresults | null;
  text: string;
  searchArray: Typeofresults[];
  filterGenre: Typeofresults[];
}
export const fetchMovies: any = createAsyncThunk<Typeofresults[]>(
  "fetchMovies",
  async (page: any, { dispatch }) => {
    const res: AxiosResponse<Typeofmovies> = await MovieAPI.getMovies(page);
    dispatch(
      total({
        totalResults: res.data.total_results,
        totalPages: res.data.total_pages,
      })
    );
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

export const fetchSearch: any = createAsyncThunk<Typeofresults[], string>(
  "moviesSlices/fetchSearch",
  async (text) => {
    const res: AxiosResponse<Typeofmovies> = await MovieAPI.getSearch(text);
    return res.data.results;
  }
);
export const fetchFilter: any = createAsyncThunk<Typeofresults[], { genreId: string, page: number }>(
  "fetchFilter",
  async ({ genreId, page }) => {
    const res: AxiosResponse<Typeofmovies> = await MovieAPI.filterGenres(genreId, page);
    return res.data.results;
  }
);

const initialState: Typeofmoviesresult = {
  movies: [],
  page: 1,
  total_pages: 0,
  total_results: 0,
  oneMovie: null,
  text: "",
  searchArray: [],
  filterGenre: [],
};
export const moviesSlices = createSlice({
  name: "moviesSlices",
  initialState,
  reducers: {
    total(state, action) {
      state.total_pages = action.payload.totalPages;
      state.total_results = action.payload.totalResults;
    },
    changePage(state, action) {
      state.page = action.payload;
    },
    changeText(state, acttion) {
      state.text = acttion.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.oneMovie = action.payload;
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.searchArray = action.payload;
    });
    builder.addCase(fetchFilter.fulfilled, (state, action) => {
      state.filterGenre = action.payload;
    });
  },
});
export default moviesSlices.reducer;
export const { total, changePage, changeText } = moviesSlices.actions;
