import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { MovieAPI } from "../../api";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

export interface TypeofState {
  genres: Array<TypeofGenres>;
}

export interface TypeofGenres {
  id: number;
  name: string;
}
export const fetchGenres: any = createAsyncThunk<TypeofGenres[]>(
  "fetchGenres",
  async () => {
    const res: AxiosResponse<TypeofState> = await MovieAPI.getGenres();
    return res.data.genres;
  }
);
const initialState: TypeofState = {
  genres: [],
};
const genresSlices = createSlice({
  name: "genresSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchGenres.fulfilled,
      (state, action: PayloadAction<Array<TypeofGenres>>) => {
        state.genres = action.payload;
      }
    );
  },
});
export default genresSlices.reducer;
