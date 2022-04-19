import { createSlice } from "@reduxjs/toolkit";
import { Podcast } from "../../../model/Podcast";
import { getPodcastEpisodes } from "../../../api/PodcastService";

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
    setPodcast(state) {
      state.value = getPodcastEpisodes();
      return state;
    },
  },
});

export const { setPodcast } = counterSlice.actions;
export default counterSlice.reducer;
