import React from 'react'
import infoCircle from '../../asset/images/iconInfoCircle.png'
import { makeStyles } from '@mui/styles'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'


const useStyles = makeStyles({
    container: {
        '& .MuiSelect-select': {
            padding: '10px 16px',
            fontSize: '16px',
            fontWeight: 500,
        },
    }
})

const DespositAndHistory = () => {
    const classes = useStyles()
    const [paymentMethod, setPaymentMethod] = React.useState('1');
    const [deposit, setDeposit] = React.useState('5');

    const handleChangeDeposit = (event: SelectChangeEvent) => {
        setDeposit(event.target.value);
    };
    const handleChangePaymentMethod = (event: SelectChangeEvent) => {
        setPaymentMethod(event.target.value);
    };
    return (
        <div className={classes.container} style={{ padding: "24px" }}>
            <p style={{ padding: 0, margin: 0, fontSize: '18px', fontWeight: 500, }}>예치금 충전</p>
            <div style={{ backgroundColor: 'rgba(235, 243, 255, 0.24)', border: '1px solid rgba(112, 119, 127, 0.2)', borderRadius: '4px', padding: '24px', marginTop: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img style={{ height: '24px', width: '24px' }} src={infoCircle} />
                    <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500 }}>안내</p>
                </div>
                <ul style={{ margin: '10px 0 0 0', padding: '0 0 0 24px' }}>
                    <li>예치금은 비과세로 충전/적립되지만, 사용시엔 부가세가 포함되어 차감됩니다.</li>
                    <li>사용한 예치금에 대한 전자 세금계산서는 익월 10일까지 파트너 정보에 기입된 세금 정보에 따라 발송됩니다.</li>
                </ul>
            </div>
            <div style={{ display: 'flex', gap: '23px', marginTop: '32px', justifyContent: 'space-between' }}>
                <div style={{ flex: 1 }}>
                    <p style={{ padding: 0, margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500, }}>예치금 잔액</p>
                    <input style={{ width: 'calc(100% - 32px)', border: '1px solid #D0D5DD', borderRadius: '8px', padding: '10px 16px', fontSize: '16px', fontWeight: 500, lineHeight: '24px' }} />
                </div>
                <div style={{ flex: 1 }}>
                    <p style={{ padding: 0, margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500, }}>예치금 잔액</p>
                    {/* <select style={{ width: '100%', border: '1px solid #D0D5DD', borderRadius: '8px', padding: '10px 16px', fontSize: '16px', fontWeight: 500, lineHeight: '24px' }} >
                        <option value="신용카드">신용카드</option>
                        <option value="신용카드">신용카드</option>
                        <option value="신용카드">신용카드</option>
                    </select> */}
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
                <div style={{ flex: 1 }}>
                    <p style={{ padding: 0, margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500, }}>예치금 잔액</p>
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
                <button onClick={() => { console.log('clicked btn 충전하기') }} style={{ border: 'none', backgroundColor: '#2B83FE', padding: '10px 24px', textAlign: 'center', marginTop: '28px', borderRadius: '8px' }}>
                    <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#fff' }}>충전하기</p>
                </button>
            </div>
        </div>
    )
}

export default DespositAndHistory