import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { loadingActions } from "../../components/loading/loadingSlice";
import { userActions } from "./userSlice";
import { UserType } from "../../types/user.type";
import { userApi } from "../../apis/userApi";

function* getList(action: PayloadAction<{ params?: any }>) {
  try {
    yield put(loadingActions.openLoading());
    const data: { data: UserType } = yield call(
      userApi.getUser,
      action.payload.params
    );
    yield put(userActions.getUserSuccess({ data: data.data }));
    yield put(loadingActions.loadingSuccess());
  } catch (error) {
    console.log(error);
  }
}

export default function* userSaga() {
  yield takeEvery(userActions.getUser.type, getList);
}
