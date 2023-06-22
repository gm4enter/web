import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { UserType } from "../../types/user.type";

const initialState: { data: UserType } = {
  data: <UserType>{},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<{ params?: any }>) => {},
    getUserSuccess: (state, action: PayloadAction<{ data: UserType }>) => {
      state.data = action.payload.data;
    },
    deleteUser: (state, action: PayloadAction<{ params?: any }>) => {
      state.data = {} as any;
    },
  },
});

//actions
export const userActions = userSlice.actions;

//selector
export const selectUserData = (state: RootState) => state.userReducer.data;

//reducer
export const userReducer = userSlice.reducer;
