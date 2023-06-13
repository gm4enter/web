import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { SiteType } from "../../types/site.type";
import { mereListById } from "../../utils";
import { TYPE_SORT } from "../../types/enum";

// const initialState: { listData: SiteType[] } = {
//   listData: [],
// };

const initialState: {
  listData: SiteType[];
  page?: number;
  perPage?: number;
  totalData?: number;
  _sort?: TYPE_SORT;
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
      state._sort = action.payload.params._sort;
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
      else {
        state.listData = action.payload.listData;
      }
      state.totalData = action.payload.totalData;
    },
    updateSite: (
      state,
      action: PayloadAction<{
        updatedData: SiteType;
      }>
    ) => {
      const { updatedData } = action.payload;
      state.listData = state.listData.map((item) => {
        if (item._id === updatedData._id) {
          return updatedData;
        }
        return item;
      });
    },
    createSite: (
      state,
      action: PayloadAction<{
        newData: SiteType | any
      }>
    ) => {
      const { newData } = action.payload;
      state.listData = [newData, ...state.listData];
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
