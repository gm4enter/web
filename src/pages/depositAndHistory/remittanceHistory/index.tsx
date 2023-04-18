

import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import infoCircle from '../../../asset/images/iconInfoCircle.png'
import { Input } from '../../../components/base/input/Input'
import { HistoryTable } from '../components/HistoryTable'
import iconBack from '../../../asset/images/iconBack.png'
import { useNavigate } from 'react-router-dom'


const useStyles = makeStyles({
    container_deposit: {
        display: 'none',
    },
    '@media (max-width: 768px)': {
        container_deposit: {
            display: 'block',
            '&>div:nth-of-type(1)': {
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                padding: '16px 16px 0px 16px',
                '&>img': { height: '24px', width: '24px' },
                '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500 },
            },
            '&>div:nth-of-type(2)': {
                '&>div:nth-of-type(1)': {
                    '&>div': {
                        marginTop: '16px',
                        '&>p:nth-of-type(1)': {
                            padding: '10px 16px',
                            margin: 0,
                            backgroundColor: '#E2E4E5',
                            fontSize: '16px',
                            fontWeight: 500,
                        },
                        '&>div': {
                            margin: '12px 16px 16px 16px',
                            padding: '12px 16px',
                            borderRadius: '4px',
                            border: '1px solid #D0D5DD',
                            gap: '12px',
                            '&>div': {
                                display: 'flex',
                                gap: '32px',
                                '&>p:nth-of-type(1)': {
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    color: '#111315',
                                    width: '30px',
                                },
                                '&>p:nth-of-type(2)': {
                                    padding: 0,
                                    margin: 0,
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    color: '#343941',
                                },
                            },
                        }
                    },
                },
            },
        },
    },
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

const RemittanceHistory = () => {
    const navigate = useNavigate()
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
        <div className={classes.container_deposit}>
            <div>
                <img
                    src={iconBack}
                    onClick={() => {
                        navigate(-1)
                    }}
                    alt=''
                />
                <p>예치금 내역</p>
            </div>
            <div>
                <div>
                    {DataMock.map((item, index) => (
                        <div>
                            <p style={{}}>{item.name}</p>
                            {item.data.map((row) => (
                                <div>
                                    <div>
                                        <p>날짜</p>
                                        <p>{row.date}</p>
                                    </div>
                                    <div>
                                        <p>설명</p>
                                        <p>{row.explain}</p>
                                    </div>
                                    <div>
                                        <p>충전</p>
                                        <p>{row.echarge}</p>
                                    </div>
                                    <div>
                                        <p>사용</p>
                                        <p>{row.use}</p>
                                    </div>
                                    <div>
                                        <p>잔액</p>
                                        <p>{row.balance}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default RemittanceHistory