import { width } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import iconBack from '../../asset/images/iconBack.png';
import iconQuestion from '../../asset/images/iconQuestion.png';
import { ROUTE } from '../../router/routes';
import { InputuploadImage } from '../../components/base/input/InputuploadImage';
import { makeStyles } from '@mui/styles';
import { Input } from '../../components/base/input/Input';

const useStyles = makeStyles({
    container: {
        padding: "24px",
        '&>div:nth-of-type(1)': {
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            '&>img': { height: '24px', width: '24px' },
            '&>p': { padding: 0, margin: 0, fontSize: '18px', fontWeight: 500, },
        },
        '&>div:nth-of-type(2)': {
            marginTop: '16px',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #D0D5DD',
            '&>p:nth-of-type(1)': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, },
            '&>p:nth-of-type(2)': { padding: 0, margin: '20px 0 0 0', fontSize: '14px', fontWeight: 500, color: '#272B30' },
        },
        // '&>div:nth-of-type(3)': {
        //     marginTop: '16px',
        //     padding: '24px',
        //     borderRadius: '12px',
        //     border: '1px solid #D0D5DD',
        //     '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, },
        // },
        '&>div:nth-of-type(3)': {
            marginTop: '16px',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #D0D5DD',
            '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, },
            '&>div:nth-of-type(1)': {
                display: 'flex', gap: '16px', marginTop: '20px',
                '&>div': {
                    width: '50%',
                    '&>div': {
                        display: 'flex', gap: '4px', alignItems: 'center',
                        '&>p': { padding: 0, margin: 0, fontSize: '14px', fontWeight: 500, color: '#272B30' },
                        '&>img': { height: '18px', width: '18px' },
                    },
                    '&>p': { padding: 0, margin: '8px 0 0 0', fontSize: '14px', fontWeight: 400, color: '#70777F' },

                },
            },
            '&>div:nth-of-type(2)': {
                marginTop: '24px',
                '&>div': {
                    display: 'flex', gap: '4px', alignItems: 'center',
                    '&>p': { padding: 0, margin: 0, fontSize: '14px', fontWeight: 500, },
                    '&>img': { height: '18px', width: '18px' },
                },
                '&>p:nth-of-type(1)': { padding: 0, margin: '8px 0 0 0', fontSize: '14px', fontWeight: 400, color: '#70777F' },
                '&>p:nth-of-type(2)': {
                    padding: 0, margin: '4px 0 0 0', fontSize: '14px', fontWeight: 400, color: '#343941',
                    '&>span:nth-of-type(1)': { color: '#FD3535' },
                    '&>a': { textDecoration: 'none', color: '#2B83FE' },
                },
                '&>p:nth-of-type(3)': { padding: 0, margin: '8px 0 0 0', fontSize: '14px', fontWeight: 400, color: '#70777F' },
            },
            '&>button': {
                marginTop: '24px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'none',
                backgroundColor: '#2B83FE',
                padding: '8px 12px',
                textAlign: 'center',
                '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#fff' },
            },
        },

    }
});

function InfoWebsite() {
    const navigate = useNavigate()
    const classes = useStyles()
    const {id} = useParams()
    console.log('id cehcec', id);
    
    
    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [value4, setValue4] = useState('')
    const [value5, setValue5] = useState('')
    const [value6, setValue6] = useState('')

    useEffect(() => {

    }, [])
    return (
        <div className={classes.container} >
            <div>
                <img src={iconBack} onClick={() => { navigate(-1) }} />
                <p>사이트 정보</p>
            </div>
            <div>
                <p>도메인 구입한 사이트</p>
                <p>도메인 구매처링크</p>
                <Input
                    label='아이디'
                    placeholder='입력해주세요.'
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                    containerStyle={{ width: 'calc(50% + 32px)', marginTop: '16px' }}
                    inputStyle={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}
                />
                <Input
                    label='비밀번호'
                    placeholder='입력해주세요.'
                    value={value2}
                    onChange={(e) => { setValue2(e.target.value) }}
                    containerStyle={{ width: 'calc(50% + 32px)', marginTop: '16px' }}
                    inputStyle={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}
                />
                <Input
                    label='구입한 도메인'
                    placeholder='URL입력해주세요.'
                    value={value3}
                    onChange={(e) => { setValue3(e.target.value) }}
                    containerStyle={{ width: 'calc(50% + 32px)', marginTop: '16px' }}
                    inputStyle={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}
                />
            </div>
            {/* <div>
                <p>아마존 서버 계정정보</p>
                <Input
                    placeholder='URL입력해주세요.'
                    value={value4}
                    onChange={(e) => { setValue4(e.target.value) }}
                    containerStyle={{ width: 'calc(50% + 32px)', marginTop: '20px', }}
                    inputStyle={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}
                />
                <Input
                    label='아이디'
                    placeholder='입력해주세요.'
                    value={value5}
                    onChange={(e) => { setValue5(e.target.value) }}
                    containerStyle={{ width: 'calc(50% + 32px)', marginTop: '16px' }}
                    inputStyle={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}
                />
                <Input
                    label='비밀번호'
                    placeholder='입력해주세요.'
                    value={value6}
                    onChange={(e) => { setValue6(e.target.value) }}
                    containerStyle={{ width: 'calc(50% + 32px)', marginTop: '16px' }}
                    inputStyle={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}
                />
            </div> */}
            <div>
                <p>그래픽 저작물</p>
                <div>
                    <div>
                        <div>
                            <p>패비콘</p>
                            <img src={iconQuestion} alt='' />
                        </div>
                        <p>고해상도 아이콘: 512x512 / 32비트 PNG(알파 있음)</p>
                        <InputuploadImage type='550' containerStyle={{ marginTop: '16px' }} />
                    </div>

                    <div>
                        <div>
                            <p>시작화면 (선택사항)</p>
                            <img src={iconQuestion} alt='' />
                        </div>
                        <p>가로x세로 1440x2960 JPG또는 24비트 PNG(알파 없음)</p>
                        <InputuploadImage type='1440' containerStyle={{ marginTop: '16px' }} />
                    </div>
                </div>

                <div>
                    <div>
                        <p>알림 아이콘(선택사항)</p>
                        <img src={iconQuestion} />
                    </div>
                    <p>권장 해상도: 96x96 / PNG / 배경 투명으로, 흰색으로 표현</p>
                    <p>
                        <span>안내: </span>
                        <span>안드로이드 5.0 이상부터 유채색 알림 아이콘을 지원하지 않아 단색 아이콘을 첨부하셔야 합니다. </span>
                        <a href="#">자세히 알아보기</a>
                    </p>

                    <InputuploadImage type='96' containerStyle={{ marginTop: '16px' }} />

                    <p>*알림 아이콘은 앱에서 알림이 왔을때 상단에 보여지는 아이콘입니다.</p>
                </div>

                <button onClick={() => { navigate(ROUTE.SITELISTANDEXPIREDLIST) }}>
                    <p>제출하기</p>
                </button>
            </div>
        </div>
    )
}

export default InfoWebsite