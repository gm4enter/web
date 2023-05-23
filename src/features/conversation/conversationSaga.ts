import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { conversationApi } from "../../apis/conversationApi";
import { conversationActions } from "./conversationSlice";
import { ConversationType } from "../../types/conversation.type";
import { loadingActions } from "../../components/loading/loadingSlice";

function* getList(action: PayloadAction<{ params?: any }>) {
  // try {
  //   yield put(loadingActions.openLoading())
  //   const data: {data: ConversationType[]} = yield call(
  //     conversationApi.getList,
  //     action.payload.params
  //   )
  //   yield put(conversationActions.getListSuccess({listData: data.data}))
  //   yield put(loadingActions.loadingSuccess())
  // } catch (error) {
  //   console.log(error)
  // }

  try {
    const res: { data: ConversationType[]; totalData: number } = yield call(
      conversationApi.getList,
      action.payload.params
    );
    yield put(
      conversationActions.getListSuccess({
        listData: res.data,
        page: action.payload.params.page,
        totalData: res.totalData,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

export default function* conversationSaga() {
  yield takeEvery(conversationActions.getList.type, getList);
}
