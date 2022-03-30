import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../../entities/movie";
import { SaveMovieInput } from "./schema/movieMutation";
import { MoviesVars } from "./schema/movieQuery";

interface InitialState {
  fetchedMovies?: Movie | Movie[] | undefined;
  error?: string | undefined;
}

const initialState: InitialState = {
  fetchedMovies: [],
};

export const movieSlice = createSlice({
  initialState,
  name: "movie",
  reducers: {
    fetchMovies: (state, action: PayloadAction<MoviesVars>) => {},
    saveMovie: (state, action: PayloadAction<SaveMovieInput>) => {},
    clearMovieData: (state) => {
      state.fetchedMovies = [];
      state.error = undefined;
    },
    loadedMovie: (
      state,
      action: PayloadAction<{ data: Movie[] | undefined }>
    ) => {
      state.fetchedMovies = action.payload.data;
    },
    processedRequest: (state) => {
      state.error = undefined;
    },
    loadMovieError: (state, action: PayloadAction<{ error: string }>) => {
      state.error = action.payload.error;
    },
  },
});

export const { actions } = movieSlice;
export type MovieSliceAction = typeof actions;
export default movieSlice.reducer;
