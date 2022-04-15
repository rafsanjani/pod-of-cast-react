import { configureStore } from "@reduxjs/toolkit";
import podcastReducer from "../pages/recent-episodes/recent-episodes-slice";

export const store = configureStore({
  reducer: {
    podcast: podcastReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
