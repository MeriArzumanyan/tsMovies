import { configureStore } from "@reduxjs/toolkit";
import genresSlices from "./slices/genresSlices";
import moviesSlices from "./slices/moviesSlices";
export const store = configureStore({
  reducer: {
    genresSlices,
    moviesSlices,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
