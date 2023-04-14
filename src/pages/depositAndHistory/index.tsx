import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import infoCircle from '../../asset/images/iconInfoCircle.png'
import { Input } from '../../components/base/input/Input'
import { HistoryTable } from './components/HistoryTable'


const useStyles = makeStyles({
    container: {
        padding: '24px',
        '& .MuiSelect-select': {
            padding: '10px 16px',
            fontSize: '16px',
            fontWeight: 500,
        },
        '&>p: nth-of-type(1)': {
            padding: 0, margin: 0, fontSize: '18px', fontWeight: 500,
        },
        '&>div:nth-of-type(1)': {
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
                    width: '24px', height: '24px'
                },
                '&>p': {
                    padding: 0, margin: 0, fontSize: '16px', fontWeight: 500
                },
            },
            '&>ul': {
                margin: '10px 0 0 0', padding: '0 0 0 24px'
            }
        },
        '&>div:nth-of-type(2)': {
            display: 'flex',
            gap: '23px',
            marginTop: '32px',
            justifyContent: 'space-between',
            '&>div': {
                flex: 1,
                '&>p': {
                    padding: 0, margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500,
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
                    padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#fff'
                },
            },
        },
        '&>div:nth-of-type(3)': {
            marginTop: '24px',
            '&>p': {
                padding: 0, margin: '0 0 10px 0', fontSize: '18px', fontWeight: 500, color: '#ccc'
            },

        },
    }
})

const DataMock = [
    {
        id: 1, name: '2023-02-01 ', data: [
            { id: 1, date: '2023-02-01 ', explain: '사용 - 우리 웹사이트 (1년)', echarge: '100,00011', use: '', balance: '100,000' },
        ]
    },
    {
        id: 2, name: '2023-02-01 ', data: [
            { id: 1, date: '2023-02-01 ', explain: '사용 - 우리 웹사이트 (1년)', echarge: '100,00021', use: '', balance: '100,000' },
            { id: 2, date: '2023-02-01 ', explain: '사용 - 우리 웹사이트 (1년)', echarge: '100,00022', use: '', balance: '100,000' },
            { id: 2, date: '2023-02-01 ', explain: '사용 - 우리 웹사이트 (1년)', echarge: '100,00022', use: '', balance: '100,000' },
        ]
    },
]

const DespositAndHistory = () => {
    const classes = useStyles()
    const [paymentMethod, setPaymentMethod] = useState('1');
    const [deposit, setDeposit] = useState('5');
    const [input, setInput] = useState('');
    const handleChangeInput = (event: SelectChangeEvent) => {
        setInput(event.target.value);
    }
    const handleChangeDeposit = (event: SelectChangeEvent) => {
        setDeposit(event.target.value);
    };
    const handleChangePaymentMethod = (event: SelectChangeEvent) => {
        setPaymentMethod(event.target.value);
    };
    return (
        <div className={classes.container}>
            <p>예치금 충전</p>
            <div>
                <div>
                    <img src={infoCircle} alt='' />
                    <p>안내</p>
                </div>
                <ul>
                    <li>예치금은 비과세로 충전/적립되지만, 사용시엔 부가세가 포함되어 차감됩니다.</li>
                    <li>사용한 예치금에 대한 전자 세금계산서는 익월 10일까지 파트너 정보에 기입된 세금 정보에 따라 발송됩니다.</li>
                </ul>
            </div>

            <div>
                <div>
                    <Input label='예치금 잔액' value={input} onChange={handleChangeInput} />
                </div>
                <div>
                    <p>예치금 잔액</p>
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
                            lineHeight: '24px'
                        }}
                        inputProps={{ "aria-label": "Without label" }}
                    >
                        <MenuItem value={1}>신용카드</MenuItem>
                        <MenuItem value={2}>신용카드</MenuItem>
                        <MenuItem value={3}>신용카드</MenuItem>
                    </Select>

                </div>
                <div>
                    <p>예치금 잔액</p>
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
                        }}
                        inputProps={{ "aria-label": "Without label" }}
                    >
                        <MenuItem value={5}>500,000원</MenuItem>
                        <MenuItem value={10}>1,000,000원</MenuItem>
                        <MenuItem value={15}>1,500,000원</MenuItem>
                        <MenuItem value={20}>2,000,000원</MenuItem>
                        <MenuItem value={30}>3,000,000원</MenuItem>
                    </Select>
                </div>
                <button onClick={() => { console.log('clicked btn 충전하기') }}>
                    <p>충전하기</p>
                </button>
            </div>

            <div>
                <p>예치금 내역</p>
                <HistoryTable data={DataMock} />
            </div>
        </div>
    )
}

export default DespositAndHistory