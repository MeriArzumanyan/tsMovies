import { configureStore } from "@reduxjs/toolkit";
import genresSlices from "./slices/genresSlices";
export const store = configureStore({
  reducer: {
    genresSlices,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
