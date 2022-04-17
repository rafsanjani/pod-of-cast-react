import { configureStore } from "@reduxjs/toolkit";
import podcastReducer from "../pages/recent-episodes/recent-episodes-slice";
import { apiSlice } from "../pages/recent-episodes/network-episodes-slice";

export const store = configureStore({
  reducer: {
    podcast: podcastReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
