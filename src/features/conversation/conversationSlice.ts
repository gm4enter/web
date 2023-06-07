import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ConversationType } from "../../types/conversation.type";
import { TYPE_SORT } from "../../types/enum";
import { mereListById } from "../../utils";

// const initialState: { listData: ConversationType[] } = {
//   listData: [],
// };

const initialState: {
  listData: ConversationType[];
  page?: number;
  totalData?: number;
  _sort?: TYPE_SORT;
} = {
  listData: [],
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  // reducers: {
  //   getList: (state, action: PayloadAction<{ params?: any }>) => {},
  //   getListSuccess: (
  //     state,
  //     action: PayloadAction<{ listData: ConversationType[] }>
  //   ) => {
  //     state.listData = action.payload.listData;
  //   },
  // },

  reducers: {
    getList: (state, action: PayloadAction<{ params?: any }>) => {
      state.page = Number(action.payload.params.page);
      state._sort = action.payload.params._sort;
    },
    getListSuccess: (
      state,
      action: PayloadAction<{
        listData: ConversationType[];
        page: number;
        totalData: number;
        _sort?: TYPE_SORT;
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
    createSite: (
      state,
      action: PayloadAction<{
        newData: ConversationType;
      }>
    ) => {
      const { newData } = action.payload;
      state.listData = [newData, ...state.listData];
    },
    updateSite: (
      state,
      action: PayloadAction<{
        updatedData: ConversationType;
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
  },
});

//actions
export const conversationActions = conversationSlice.actions;

//selector
export const selectListData = (state: RootState) =>
  state.conversationReducer.listData;

export const selectTotalData = (state: RootState) =>
  state.conversationReducer.totalData;

//reducer
export const conversationReducer = conversationSlice.reducer;
