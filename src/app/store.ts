import { configureStore } from "@reduxjs/toolkit";
import podcastReducer from "../pages/recent-episodes/recent-episodes-slice";
import { dogsApiSlice } from "../pages/recent-episodes/network-episodes-slice";

export const store = configureStore({
  reducer: {
    podcast: podcastReducer,
    [dogsApiSlice.reducerPath]: dogsApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dogsApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
