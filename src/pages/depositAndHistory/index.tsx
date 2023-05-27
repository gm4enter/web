import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState, useEffect, useLayoutEffect } from 'react'
import infoCircle from '../../asset/images/iconInfoCircle.png'
import timeHistory from '../../asset/images/TimeHistory.png'
import { Input } from '../../components/base/input/Input'
import { HistoryTable } from './components/HistoryTable'
import { ROUTE } from '../../router/routes'
import { useNavigate } from 'react-router-dom'
import axiosClient from '../../apis/axiosClient'
import { TRANSACTION, USER } from '../../apis/urlConfig'
import { numberWithCommas } from '../../utils'
import { PAYMENT_METHOD } from '../../types/enum'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { loadingActions } from '../../components/loading/loadingSlice'
import { selectListTransaction } from '../../features/transaction/transactionSlice'
import { selectUserData } from '../../features/user/userSlice'

const useStyles = makeStyles({
  container_deposit: {
    padding: '24px',
    '& .MuiSelect-select': {
      padding: '10px 16px',
      fontSize: '16px',
      fontWeight: 500,
    },
    '&>div:nth-of-type(1)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      '&>p': {
        padding: 0,
        margin: 0,
        fontSize: '18px',
        fontWeight: 500,
      },
      '&>button': {
        borderRadius: '100px',
        border: '1px solid #D0D5DD',
        backgroundColor: '#fff',
        padding: '8px 12px',
        cursor: 'pointer',
        '&>div': {
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          '&>img': {
            height: '20px',
            width: '20px',
          },
          '&>p': {
            padding: 0,
            margin: 0,
            fontSize: '12px',
            fontWeight: 500,
          },
        },
        '@media (min-width: 768px)': {
          display: 'none',
        },
      },
    },
    '&>div:nth-of-type(2)': {
      backgroundColor: 'rgba(235, 243, 255, 0.24)',
      border: '1px solid rgba(112, 119, 127, 0.2)',
      borderRadius: '4px',
      padding: '24px',
      marginTop: '24px',
      '&>div:nth-of-type(1)': {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        '&>img': {
          width: '24px',
          height: '24px',
        },
        '&>p': {
          padding: 0,
          margin: 0,
          fontSize: '16px',
          fontWeight: 500,
        },
      },
      '&>ul': {
        margin: '10px 0 0 0',
        padding: '0 0 0 24px',
      },
    },
    '&>div:nth-of-type(3)': {
      display: 'flex',
      gap: '23px',
      marginTop: '32px',
      justifyContent: 'space-between',
      '&>div:nth-of-type(1)': {
        display: 'flex',
        flex: 1,
        gap: '23px',
        '&>div': {
          flex: 1,
          '&>p': {
            padding: 0,
            margin: '0 0 8px 0',
            fontSize: '14px',
            fontWeight: 500,
          },
        },
      },

      '&>button': {
        border: 'none',
        backgroundColor: '#2B83FE',
        padding: '10px 24px',
        textAlign: 'center',
        marginTop: '28px',
        borderRadius: '8px',
        '&>p': {
          padding: 0,
          margin: 0,
          fontSize: '16px',
          fontWeight: 700,
          color: '#fff',
        },
      },
    },
    '&>div:nth-of-type(4)': {
      marginTop: '24px',
      '&>p': {
        padding: 0,
        margin: '0 0 10px 0',
        fontSize: '18px',
        fontWeight: 500,
        color: '#111315',
      },
    },
  },
  '@media (max-width: 768px)': {
    container_deposit: {
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 124px)',
      '&>div:nth-of-type(1)': {
        '&>button': {
          display: 'block',
        },
      },
      '&>div:nth-of-type(2)': {
        backgroundColor: 'rgba(235, 243, 255, 0.24)',
        border: '1px solid rgba(112, 119, 127, 0.2)',
        borderRadius: '4px',
        padding: '12px',
        marginTop: '20px',
        '&>div:nth-of-type(1)': {
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          '&>img': {
            width: '20px',
            height: '20px',
          },
          '&>p': {
            padding: 0,
            margin: 0,
            fontSize: '14px',
            fontWeight: 500,
          },
        },
        '&>ul': {
          margin: '10px 0 0 0',
          padding: '0 0 0 24px',
          '&>li': {
            padding: 0,
            margin: 0,
            fontSize: '12px',
            fontWeight: 400,
          },
        },
      },
      '&>div:nth-of-type(3)': {
        flex: 1,
        flexDirection: 'column',
        marginTop: '32px',
        justifyContent: 'space-between',
        gap: 0,
        '&>div:nth-of-type(1)': {
          padding: '4px 12px 20px 12px',
          borderRadius: '12px',
          boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.12)',
          flexDirection: 'column',
          gap: '16px',
          '&>div': {
            flex: 1,
            '&>p': {
              padding: 0,
              margin: '0px 0 8px 0',
              fontSize: '12px',
              fontWeight: 500,
            },
          },
        },
        '&>div:nth-of-type(2)': {
          flex: 1,
        },
        '&>button': {
          border: 'none',
          backgroundColor: '#2B83FE',
          padding: '10px 24px',
          textAlign: 'center',
          marginTop: '28px',
          borderRadius: '8px',
          '&>p': {
            padding: 0,
            margin: 0,
            fontSize: '16px',
            fontWeight: 500,
            color: '#fff',
          },
        },
      },
      '&>div:nth-of-type(4)': {
        display: 'none',
      },
    },
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
})

const DespositAndHistory = () => {
  const navigate = useNavigate()
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const listTransaction = useAppSelector(selectListTransaction)
  const userProfile = useAppSelector(selectUserData)

  const [paymentMethod, setPaymentMethod] = useState<PAYMENT_METHOD>(
    PAYMENT_METHOD.CREDIT_CARD
  )
  const [deposit, setDeposit] = useState<number>(500000)
  const [point, setPoint] = useState<number>()
  const handleChangeDeposit = (event: any) => {
    setDeposit(event.target.value)
  }
  const handleChangePaymentMethod = (event: any) => {
    setPaymentMethod(event.target.value)
  }
  useLayoutEffect(() => {
    userProfile && setPoint(userProfile.wallet.balance)
  }, [userProfile])

  const createDeposit = async () => {
    try {
      dispatch(loadingActions.openLoading())
      await axiosClient.post(`${TRANSACTION}/deposit`, {
        value: deposit,
        paymentMethod: paymentMethod,
      })
      dispatch(loadingActions.loadingSuccess())
    } catch (error) {
      dispatch(loadingActions.loadingSuccess())
    }
  }
  return (
    <div className={classes.container_deposit}>
      <div>
        <p>예치금 충전</p>
        <button
          onClick={() => {
            navigate(ROUTE.REMITTANCEHISTORY)
          }}
        >
          <div>
            <img src={timeHistory} alt='' />
            <p>예치금 내역</p>
          </div>
        </button>
      </div>
      <div>
        <div>
          <img src={infoCircle} alt='' />
          <p>안내</p>
        </div>
        <ul>
          <li>
            예치금은 비과세로 충전/적립되지만, 사용시엔 부가세가 포함되어
            차감됩니다.
          </li>
          <li>
            사용한 예치금에 대한 전자 세금계산서는 익월 10일까지 파트너 정보에
            기입된 세금 정보에 따라 발송됩니다.
          </li>
        </ul>
      </div>

      <div>
        <div>
          <div>
            <Input
              label='예치금 잔액'
              value={numberWithCommas(Number(point))}
              onChange={() => { }}
              // labelStyle={{fontSize: '12px'}}
              disabled
            // inputStyle={{width: 'calc(100% - 32px)'}}
            />
          </div>
          <div>
            <p>결제방법</p>
            <Select
              value={paymentMethod}
              onChange={handleChangePaymentMethod}
              displayEmpty
              sx={{
                width: '100%',
                borderColor: '#D0D5DD',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
                height: '46px',
              }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={PAYMENT_METHOD.CREDIT_CARD}>신용카드</MenuItem>
              <MenuItem value={PAYMENT_METHOD.TRANSFER}>계좌이체(국민은행56690204040102이승우)</MenuItem>
            </Select>
          </div>
          <div>
            <p>충전 금액</p>
            <Select
              value={deposit}
              onChange={handleChangeDeposit}
              displayEmpty
              sx={{
                width: '100%',
                borderColor: '#D0D5DD',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 500,
                height: '46px',

              }}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={500000}>500,000원</MenuItem>
              <MenuItem value={1000000}>1,000,000원</MenuItem>
              <MenuItem value={1500000}>1,500,000원</MenuItem>
              <MenuItem value={2000000}>2,000,000원</MenuItem>
              <MenuItem value={3000000}>3,000,000원</MenuItem>
            </Select>
          </div>
        </div>
        <div />
        <button onClick={createDeposit}>
          <p>충전하기</p>
        </button>
      </div>

      <div>
        <p>예치금 내역</p>
        <HistoryTable />
      </div>
    </div>
  )
}

export default DespositAndHistory
