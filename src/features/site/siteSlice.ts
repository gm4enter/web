import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { SiteType } from "../../types/site.type";

const initialState: { listData: SiteType[] } = {
  listData: [],
};

const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {
    getList: (state, action: PayloadAction<{ params?: any }>) => {},
    getListSuccess: (
      state,
      action: PayloadAction<{ listData: SiteType[] }>
    ) => {
      state.listData = action.payload.listData;
    },
  },
});

//actions
export const siteActions = siteSlice.actions;

//selector
export const selectListData = (state: RootState) =>
  state.siteReducer.listData;

//reducer
export const siteReducer = siteSlice.reducer;
