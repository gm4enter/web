import React from 'react'
import infoCircle from '../../asset/images/iconInfoCircle.png'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles({
    table_container: {
        '&>table': {
            borderCollapse: 'collapse',
            width: '100%',
            '&>thead': {
                border: '',
                '&>tr': {
                    textAlign: 'start',
                    borderBottom: '1px solid #B1B5C3',
                    '&>th': {
                        textAlign: 'left',
                        fontWeight: 700,
                        fontSize: '20px',
                        padding: '8px',
                    },
                },
            },
            '&>tbody': {
                '&>tr': {
                    borderBottom: '1px solid #B1B5C3',
                    '&>td': {
                        padding: '8px',
                        fontWeight: 500,
                        fontSize: '20px',
                        textAlign: 'left',
                    },
                },
            },
        },
    },
})

const DespositAndHistory = () => {
    const classes = useStyles()
    return (
        <div style={{ padding: "24px" }}>
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
                    <input style={{ width: 'calc(100% - 32px)', border: '1px solid #D0D5DD', borderRadius: '8px', padding: '10px 16px', fontSize: '16px', fontWeight: 500 }} />
                </div>
                <div style={{ flex: 1 }}>
                    <p style={{ padding: 0, margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500, }}>예치금 잔액</p>
                    <select style={{ width: '100%', border: '1px solid #D0D5DD', borderRadius: '8px', padding: '10px 16px', fontSize: '16px', fontWeight: 500, lineHeight: '24px' }} >
                        <option value="신용카드">신용카드</option>
                        <option value="신용카드">신용카드</option>
                        <option value="신용카드">신용카드</option>
                    </select>
                </div>
                <div style={{ flex: 1 }}>
                    <p style={{ padding: 0, margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500, }}>예치금 잔액</p>
                    <select style={{ width: '100%', border: '1px solid #D0D5DD', borderRadius: '8px', padding: '10px 16px', fontSize: '16px', fontWeight: 500, lineHeight: '24px' }} >
                        <option value="500">500,000원</option>
                        <option value="1000">1,000,000원</option>
                        <option value="1500">1,500,000원</option>
                        <option value="2000">2,000,000원</option>
                        <option value="3000">3,000,000원</option>
                    </select>
                </div>
                <button onClick={() => { console.log('clicked btn 충전하기') }} style={{ border: 'none', backgroundColor: '#2B83FE', padding: '10px 24px', textAlign: 'center', marginTop: '28px', borderRadius: '8px' }}>
                    <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#fff' }}>충전하기</p>
                </button>
            </div>
        </div>
    )
}

export default DespositAndHistory