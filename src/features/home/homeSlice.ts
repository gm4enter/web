import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { SiteType } from "../../types/site.type";
import { mereListById } from "../../utils";
import { TYPE_SORT } from "../../types/enum";
import { ArtistType, HomeType } from "../../types/home.type";

// const initialState: { listData: SiteType[] } = {
//   listData: [],
// };

const initialState: {
  listData: ArtistType[];
  page?: number;
  perPage?: number;
  totalData?: number;
  _sort?: TYPE_SORT;
} = {
  listData: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getList: (state, action: PayloadAction<{ params?: any }>) => {},
    getListSuccess: (
      state,
      action: PayloadAction<{ listData: ArtistType[] }>
    ) => {
      state.listData = action.payload.listData;
    },
  },

  // reducers: {
  //   getList: (state, action: PayloadAction<{ params?: any }>) => {
  //     // state.page = Number(action.payload.params.page);
  //     // state.perPage = Number(action.payload.params.perPage);
  //     // state._sort = action.payload.params._sort;
  //   },
  //   getListSuccess: (
  //     state,
  //     action: PayloadAction<{
  //       listData: HomeType[];
  //       page: number;
  //       perPage?: number;
  //       totalData: number;
  //     }>
  //   ) => {
  //     if (action.payload.page) {
  //       state.listData = mereListById(
  //         state.listData,
  //         action.payload.listData
  //       ) as any;
  //     }
  //     else {
  //       state.listData = action.payload.listData;
  //     }
  //     state.totalData = action.payload.totalData;
  //   },
  // },
});

//actions
export const homeActions = homeSlice.actions;

//selector
export const selectListData = (state: RootState) => state.homeReducer.listData;
export const selectTotalData = (state: RootState) =>
  state.siteReducer.totalData;

//reducer
export const homeReducer = homeSlice.reducer;
