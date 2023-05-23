import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ConversationType } from "../../types/conversation.type";
import { RootState } from "../../app/store";
import { mereListById } from "../../utils";

// const initialState: { listData: ConversationType[] } = {
//   listData: [],
// };

const initialState: {
  listData: ConversationType[];
  page?: number;
  totalData?: number;
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
    },
    getListSuccess: (
      state,
      action: PayloadAction<{
        listData: ConversationType[];
        page: number;
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
export const conversationActions = conversationSlice.actions;

//selector
export const selectListData = (state: RootState) =>
  state.conversationReducer.listData;

export const selectTotalData = (state: RootState) =>
  state.conversationReducer.totalData;

//reducer
export const conversationReducer = conversationSlice.reducer;
