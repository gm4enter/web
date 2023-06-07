import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { siteApi } from "../../apis/siteApi";
import { loadingActions } from "../../components/loading/loadingSlice";
import { SiteType } from "../../types/site.type";
import { siteActions } from "./siteSlice";

function* getList(action: PayloadAction<{ params?: any }>) {
  // try {
  //   // yield put(loadingActions.openLoading());
  //   const data: { data: SiteType[] } = yield call(
  //     siteApi.getList,
  //     action.payload.params
  //   );
  //   yield put(siteActions.getListSuccess({ listData: data.data }));
  //   // yield put(loadingActions.loadingSuccess());
  // } catch (error) {
  //   console.log(error);
  // }

  try {
    const res: {data: SiteType[]; totalData: number} = yield call(
      siteApi.getList,
      action.payload.params
    )
    yield put(
      siteActions.getListSuccess({
        listData: res.data,
        page: action.payload.params.page,
        totalData: res.totalData,
      })
    )
  } catch (error) {
    console.log(error)
  }
}

export default function* siteSaga() {
  yield takeEvery(siteActions.getList.type, getList);
}


