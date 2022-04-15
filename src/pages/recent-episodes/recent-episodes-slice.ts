import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Podcast } from "../../model/Podcast";

interface PodcastState {
  value: Podcast[];
}

const initialState: PodcastState = {
  value: [],
};

const counterSlice = createSlice({
  name: "podcast",
  initialState,
  reducers: {
    setPodcast(state, action: PayloadAction<Podcast[]>) {
      state.value = action.payload;
    },
  },
});

export const { setPodcast } = counterSlice.actions;
export default counterSlice.reducer;
