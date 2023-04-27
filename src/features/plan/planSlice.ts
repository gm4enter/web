import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { PlanType } from "../../types/plan.type";

const initialState: { listData: PlanType[] } = {
  listData: [],
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    getList: (state, action: PayloadAction<{ params?: any }>) => {},
    getListSuccess: (
      state,
      action: PayloadAction<{ listData: PlanType[] }>
    ) => {
      state.listData = action.payload.listData;
    },
  },
});

//actions
export const planActions = planSlice.actions;

//selector
export const selectListData = (state: RootState) =>
  state.planReducer.listData;

//reducer
export const planReducer = planSlice.reducer;
