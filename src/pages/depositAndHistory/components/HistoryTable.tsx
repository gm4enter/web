import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
  selectListTransaction,
  selectTotalData,
  transactionActions,
} from '../../../features/transaction/transactionSlice'
import moment from 'moment'
import { TransactionType } from '../../../types/transaction.type'
import { numberWithCommas } from '../../../utils'
import InfiniteScroll from 'react-infinite-scroll-component'

const useStyles = makeStyles({
  tableContainer: {
    '.MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium css-e66yx5-MuiTableCell-root':
      {},
  },
})

export const HistoryTable = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const [page, setPage] = useState<number>(1)
  const listTransaction = useAppSelector(selectListTransaction)
  const totalData = useAppSelector(selectTotalData)

  const [listData, setListData] = useState<
    { createdAt: string; listData: TransactionType[] }[]
  >([])
  useEffect(() => {
    dispatch(transactionActions.getList({ params: { page } }))
  }, [dispatch, page])
  // const formatListTransaction = () => {
  //   const listData = listTransaction.map((item) => {
  //     return {
  //       createdAt: item.createdAt,
  //       listData: listTransaction.filter(
  //         (item1) =>
  //           moment(item1.createdAt).format('YYYY-MM-DD') ===
  //           moment(item.createdAt).format('YYYY-MM-DD')
  //       ),
  //     }
  //   })
  //   const dataNew: {createdAt: string; listData: TransactionType[]}[] = []
  //   listData.forEach((item) => {
  //     if (dataNew.length === 0) {
  //       dataNew.push(item)
  //     } else if (
  //       dataNew.filter(
  //         (item1) =>
  //           moment(item1.createdAt).format('YYYY-MM-DD') ===
  //           moment(item.createdAt).format('YYYY-MM-DD')
  //       ).length === 0
  //     ) {
  //       return dataNew.push(item)
  //     }
  //   })
  //   return dataNew
  // }
  useEffect(() => {
    const listData = listTransaction.map((item) => {
      return {
        createdAt: item.createdAt,
        listData: listTransaction.filter(
          (item1) =>
            moment(item1.createdAt).format('YYYY-MM-DD') ===
            moment(item.createdAt).format('YYYY-MM-DD')
        ),
      }
    })
    const dataNew: { createdAt: string; listData: TransactionType[] }[] = []
    listData.forEach((item) => {
      if (dataNew.length === 0) {
        dataNew.push(item)
      } else if (
        dataNew.filter(
          (item1) =>
            moment(item1.createdAt).format('YYYY-MM-DD') ===
            moment(item.createdAt).format('YYYY-MM-DD')
        ).length === 0
      ) {
        return dataNew.push(item)
      }
    })
    setListData([...dataNew])
  }, [listTransaction, page])
  console.log(888, listTransaction)
  return (
    <div>
      <InfiniteScroll
        dataLength={totalData || 0}
        next={() => setPage(page + 1)}
        hasMore={true}
        loader={<></>}
      // scrollableTarget='infiniteScroll-conversation'
      >
        {listData.map((item, index) => (
          <div key={item.createdAt}>
            <p
              style={{
                padding: '10px 16px',
                margin: 0,
                backgroundColor: 'rgba(112, 119, 127, 0.2)',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: 500,
              }}
            >
              {moment(item.createdAt).format('YYYY-MM-DD')}
            </p>
            <Table className={classes.tableContainer}>
              <TableHead>
                <TableRow>
                  <TableCell>날짜</TableCell>
                  <TableCell>설명</TableCell>
                  <TableCell>충전</TableCell>
                  <TableCell>사용</TableCell>
                  <TableCell>잔액</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {item.listData.map((item1) => {
                  console.log('````999````', item1);

                  return (
                    <TableRow>
                      <TableCell>
                        {moment(item1.createdAt).format('YYYY-MM-DD')}
                      </TableCell>
                      <TableCell>{ }</TableCell>
                      <TableCell>{numberWithCommas(item1.value)}</TableCell>
                      <TableCell>{ }</TableCell>
                      <TableCell>
                        {item1.status === 'PENDING' ? <p style={{ color: '#FBBC05', padding: 0, margin: 0, }}>확인중</p> :
                          numberWithCommas(item1.amountAvailable)}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  )
}
