import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Director } from "../../../entities/director";
import { User } from "../../../entities/user";
import { SaveDirectorInput } from "./schema/directorMutation";
import { DirectorsVars } from "./schema/directorQuery";

interface InitialState {
  fetchedDirector?: User | User[];
  error?: string;
}

const initialState: InitialState = {
  fetchedDirector: undefined,
};

export const directorSlice = createSlice({
  initialState,
  name: "director",
  reducers: {
    fetchDirectors: (state, action: PayloadAction<DirectorsVars>) => {},
    saveDirector: (state, action: PayloadAction<SaveDirectorInput>) => {},
    clearDirectorData: (state) => {
      state.fetchedDirector = undefined;
      state.error = undefined;
    },
    processedRequest: (state) => {
      state.error = undefined;
    },
    loadedDirector: (
      state,
      action: PayloadAction<{ data: Director[] | Director | undefined }>
    ) => {
      state.fetchedDirector = action.payload.data;
    },
    loadDirectorError: (state, action: PayloadAction<{ error: string }>) => {
      state.error = action.payload.error;
    },
  },
});

export const { actions } = directorSlice;
export type DirectorSliceAction = typeof actions;
export default directorSlice.reducer;
