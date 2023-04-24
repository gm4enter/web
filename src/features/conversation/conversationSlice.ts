import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ConversationType } from "../../types/conversation.type";
import { RootState } from "../../app/store";

const initialState: { listData: ConversationType[] } = {
  listData: [],
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    getList: (state, action: PayloadAction<{ params?: any }>) => {},
    getListSuccess: (
      state,
      action: PayloadAction<{ listData: ConversationType[] }>
    ) => {
      state.listData = action.payload.listData;
    },
  },
});

//actions
export const conversationActions = conversationSlice.actions;

//selector
export const selectListData = (state: RootState) =>
  state.conversationReducer.listData;

//reducer
export const conversationReducer = conversationSlice.reducer;
