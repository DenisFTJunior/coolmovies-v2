import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../entities/user";
import { UsersVars } from "../../../repositories/user/request/schema/userQuery";
import { SaveUserInput } from "../../formatation/users/schema/save";

interface InitialState {
  fetchedUsers?: User | User[] ;
  error?: string ;
}

const initialState: InitialState = {
  fetchedUsers: undefined,
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    fetchUsers: (state, action: PayloadAction<UsersVars>) => {},
    saveUser: (state, action: PayloadAction<SaveUserInput>) => {},
    clearUserData: (state) => {
      state.fetchedUsers = undefined;
      state.error = undefined;
    },
    processedRequest: (state) => {
      state.error = undefined;
    },
    loadedUser: (
      state,
      action: PayloadAction<{ data: User[] | User | undefined }>
    ) => {
      state.fetchedUsers = action.payload.data;
    },
    loadUserError: (state, action: PayloadAction<{ error: string }>) => {
      state.error = action.payload.error;
    },
  },
});

export const { actions } = userSlice;
export type UserSliceAction = typeof actions;
export default userSlice.reducer;
