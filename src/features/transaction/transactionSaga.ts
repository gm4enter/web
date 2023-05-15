import {PayloadAction} from '@reduxjs/toolkit'
import {call, put, takeEvery} from 'redux-saga/effects'
import {transactionApi} from '../../apis/transactionApi'
import {TransactionType} from '../../types/transaction.type'
import {transactionActions} from './transactionSlice'

function* getList(action: PayloadAction<{params?: any}>) {
  try {
    const res: {data: TransactionType[]; totalData: number} = yield call(
      transactionApi.getList,
      action.payload.params
    )
    yield put(
      transactionActions.getListSuccess({
        listData: res.data,
        page: action.payload.params.page,
        totalData: res.totalData,
      })
    )
  } catch (error) {
    console.log(error)
  }
}

export default function* transactionSaga() {
  yield takeEvery(transactionActions.getList.type, getList)
}
