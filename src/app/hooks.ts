import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { Podcast } from "../model/Podcast";
import { useEffect } from "react";
import { setPodcast } from "../pages/home/recent-episodes/recent-episodes-slice";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * Initialize the app data
 */
export const useAppDataInit = () => {
  const podcasts: Podcast[] = useAppSelector((state) => state.podcast.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (podcasts.length === 0) {
      dispatch(setPodcast());
    }
  }, [podcasts, dispatch]);
};
