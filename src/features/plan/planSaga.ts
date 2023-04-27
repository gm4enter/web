import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { planApi } from "../../apis/planApi";
import { loadingActions } from "../../components/loading/loadingSlice";
import { PlanType } from "../../types/plan.type";
import { planActions } from "./planSlice";

function* getList(action: PayloadAction<{ params?: any }>) {
  try {
    yield put(loadingActions.openLoading());
    const data: { data: PlanType[] } = yield call(
      planApi.getList,
      action.payload.params
    );
    yield put(planActions.getListSuccess({ listData: data.data }));
    yield put(loadingActions.loadingSuccess());
  } catch (error) {
    console.log(error);
  }
}

export default function* planSaga() {
  yield takeEvery(planActions.getList.type, getList);
}
