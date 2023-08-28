import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { loadingActions } from "../../components/loading/loadingSlice";
import { SiteType } from "../../types/site.type";
import { homeActions } from "./homeSlice";
import { ArtistType, HomeType } from "../../types/home.type";
import { homeApi } from "../../apis/homeApi";

function* getList(action: PayloadAction<{ params?: any }>) {
  try {
    const res: {data: ArtistType[]; totalData: number} = yield call(
      homeApi.getList,
      action.payload.params
    )
    yield put(
      homeActions.getListSuccess({
        listData: res.data,
        // page: action.payload.params.page,
        // totalData: res.totalData,
      })
    )
  } catch (error) {
    console.log(error)
  }
}

export default function* homeSaga() {
  yield takeEvery(homeActions.getList.type, getList);
}


