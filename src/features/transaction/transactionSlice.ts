import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {TransactionType} from '../../types/transaction.type'
import {mereListById} from '../../utils'
import {RootState} from '../../app/store'

const initialState: {
  listData: TransactionType[]
  page?: number
  totalData?: number
} = {
  listData: [],
}

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    getList: (state, action: PayloadAction<{params?: any}>) => {
      state.page = Number(action.payload.params.page)
    },
    getListSuccess: (
      state,
      action: PayloadAction<{
        listData: TransactionType[]
        page: number
        totalData: number
      }>
    ) => {
      if (action.payload.page) {
        state.listData = mereListById(
          state.listData,
          action.payload.listData
        ) as any
      }
      state.totalData = action.payload.totalData
    },
  },
})

export const transactionActions = transactionSlice.actions
export const transactionReducer = transactionSlice.reducer
export const selectListTransaction = (state: RootState) =>
  state.transactionReducer.listData
export const selectTotalData = (state: RootState) =>
  state.transactionReducer.totalData
