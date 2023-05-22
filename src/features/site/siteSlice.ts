import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { SiteType } from "../../types/site.type";
import { mereListById } from "../../utils";

// const initialState: { listData: SiteType[] } = {
//   listData: [],
// };

const initialState: {
  listData: SiteType[];
  page?: number;
  perPage?: number;
  totalData?: number;
} = {
  listData: [],
};

const siteSlice = createSlice({
  name: "site",
  initialState,
  // reducers: {
  //   getList: (state, action: PayloadAction<{ params?: any }>) => {},
  //   getListSuccess: (
  //     state,
  //     action: PayloadAction<{ listData: SiteType[] }>
  //   ) => {
  //     state.listData = action.payload.listData;
  //   },
  // },

  reducers: {
    getList: (state, action: PayloadAction<{ params?: any }>) => {
      state.page = Number(action.payload.params.page);
      state.perPage = Number(action.payload.params.perPage);
    },
    getListSuccess: (
      state,
      action: PayloadAction<{
        listData: SiteType[];
        page: number;
        perPage?: number;
        totalData: number;
      }>
    ) => {
      if (action.payload.page) {
        state.listData = mereListById(
          state.listData,
          action.payload.listData
        ) as any;
      }
      state.totalData = action.payload.totalData;
    },
  },
});

//actions
export const siteActions = siteSlice.actions;

//selector
export const selectListData = (state: RootState) => state.siteReducer.listData;
export const selectTotalData = (state: RootState) =>
  state.siteReducer.totalData;

//reducer
export const siteReducer = siteSlice.reducer;
