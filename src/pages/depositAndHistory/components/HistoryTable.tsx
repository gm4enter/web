import { Table, TableHead, TableRow, TableCell, TableBody, Modal } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useEffect, useState, useRef } from 'react'
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
import noDataIcon from '../../../asset/images/ListNone.png'
import { TYPE_SORT } from '../../../types/enum'
import { io } from "socket.io-client"
import closeIcon from '../../../asset/images/cancel.png';
import changePoint from '../../../asset/images/ChangePoint.png';

const useStyles = makeStyles({
  tableContainer: {
    '.MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium css-e66yx5-MuiTableCell-root':
      {},
  },
  no_data: {
    height: 'calc(100vh - 396px - 76px) ',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    '&>img': {
      height: '240px',
      width: '240px',
    },
    '&>p': {
      margin: 0,
      padding: 0,
      fontSize: '18px',
      fontWeight: 500,
      color: '#70777F',
    },
  },
  modal: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.25)',
    border: 'none',
    width: '396px',
    // padding: '4px',
    '&>div:nth-of-type(1)': {
      display: 'flex', padding: '16px 24px 0px 32px', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center',
      '&>p': { padding: 0, margin: 0, fontSize: '20px', fontWeight: 500, textAlign: 'center', },
      '&>img': { cursor: 'pointer', height: '24px', width: '24px' },
    },
    '&>div:nth-of-type(2)': {
      padding: '0px 24px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      justifyContent: 'center',
      alignItems: 'center',
      '&>img': { height: '160px', width: '160px' },
      '&>div': {
        '&>p:nth-of-type(1)': {
          padding: 0, margin: '0 0 8px 0', fontSize: '18px', fontWeight: 700, color: '#111315', textAlign: 'center',
        },
        '&>p:nth-of-type(2)': {
          padding: 0, margin: 0, fontSize: '16px', fontWeight: 400, color: '#272B30', textAlign: 'center',
        }
      },
    },
    '&>div:nth-of-type(3)': {
      display: 'flex', padding: ' 0 24px 24px', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '16px',
      '&>button:nth-of-type(1)': {
        display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', borderRadius: '8px', backgroundColor: '#EBF3FF', padding: '10px 24px', textAlign: 'center',
        '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 700, color: '#2B83FE' },
      },
    },
  },
})
interface Iprops {
  point?: number,
}

export const HistoryTable = (props: Iprops) => {
  const { point } = props
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const [page, setPage] = useState<number>(1)
  const listTransaction = useAppSelector(selectListTransaction)
  const totalData = useAppSelector(selectTotalData)
  const socketRef = useRef<any>(null)
  const [openModal, setOpenModal] = useState(false);

  const [listData, setListData] = useState<
    { createdAt: string; listData: TransactionType[] }[]
  >([])

  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const handleClickModal = () => {
    setOpenModal(false)
    window.location.reload()
  }


  useEffect(() => {
    dispatch(transactionActions.getList({ params: { page, _sort: TYPE_SORT.CREATED_AT_DESC } }))
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

  useEffect(() => {
    socketRef.current = io('https://server.gmapps.net', {
      extraHeaders: {
        Authorization: "Bearer " + localStorage.getItem('accessToken'),
      }
    })

    // socketRef.current.on('getId', (data: string) => {
    //   setIdSocket(data)
    // })

    socketRef.current.on('adminApprove', (Price: any) => {
      if (Price && Price.wallet.balance !== point) {
        setOpenModal(true)
      }
      // return Price
    })
    return () => {
      socketRef.current.disconnect();
    };

  }, []);
  return (
    <div>
      {listData.length > 0 ?
        <InfiniteScroll
          dataLength={listData.length || 0}
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
                  {item.listData.map((item1, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>
                          {moment(item1.createdAt).format('YYYY-MM-DD')}
                        </TableCell>
                        {/* <TableCell>{item1.description }</TableCell> */}
                        <TableCell>{ }</TableCell>
                        <TableCell>
                          {(item1.typeTransaction === 'deposit') &&
                            (item1.status === 'PENDING' ?
                              <div>
                                <p style={{ color: '#343941', padding: 0, margin: 0, }}>입금확인중... </p>
                                {numberWithCommas(item1.value)}원
                              </div> : <p style={{ color: '#00BF71', padding: 0, margin: 0, }}>+ {numberWithCommas(item1.value)}</p>
                            )}
                        </TableCell>
                        <TableCell>
                          {(item1.typeTransaction === 'payment') &&
                            (item1.status === 'PENDING' ?
                              <div>
                                <p style={{ color: '#343941', padding: 0, margin: 0, }}>입금확인중... </p>
                                {numberWithCommas(item1.value)}원
                              </div> : <p style={{ color: '#2B83FE', padding: 0, margin: 0, }}>- {numberWithCommas(item1.value)}</p>
                            )}
                        </TableCell>
                        <TableCell>
                          {/* {item1.status === 'PENDING' ?
                            (item1.typeTransaction === 'deposit' ?
                              <p style={{ color: '#FBBC05', padding: 0, margin: 0, }}>확인중</p> :
                              numberWithCommas(item1.amountAvailable)) :
                            numberWithCommas(item1.amountAvailable)} */}
                          {numberWithCommas(item1.amountAvailable)}
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          ))}
        </InfiniteScroll>
        :
        <div className={classes.no_data}>
          <img src={noDataIcon} alt='' />
          <p>내역이 없습니다</p>
        </div>
      }
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        disableAutoFocus
      >
        <div className={classes.modal}>
          <div>
            <p></p>
            <img src={closeIcon} alt="close" onClick={handleCloseModal} />
          </div>
          <div>
            <img src={changePoint} alt="" />
            <div>
              <p>성공적으로 입금되었습니다</p>
              <p>잔액을 확인해주세요</p>
            </div>
          </div>
          <div>
            <button onClick={handleClickModal}>
              <p>오케</p>
            </button>
          </div>
        </div>
      </Modal>

    </div>
  )
}
