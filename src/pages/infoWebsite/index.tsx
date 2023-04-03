import { width } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import iconBack from '../../asset/images/iconBack.png';
import iconQuestion from '../../asset/images/iconQuestion.png';
import { ROUTE } from '../../router/routes';


function InfoWebsite() {
    const navigate = useNavigate()
    return (
        <div style={{ padding: "24px" }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <img src={iconBack} style={{ height: '24px', width: '24px' }} onClick={()=> {navigate(-1)}} />
                <p style={{ padding: 0, margin: 0, fontSize: '18px', fontWeight: 500, }}>사이트 정보</p>
            </div>
            <div style={{ marginTop: '16px', padding: '24px', borderRadius: '12px', border: '1px solid #D0D5DD' }}>
                <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, }}>도메인 구입한 사이트</p>
                <p style={{ padding: 0, margin: '20px 0 0 0', fontSize: '14px', fontWeight: 500, color: '#272B30' }}>도메인 구매처링크</p>
                <div style={{ marginTop: '16px', }}>
                    <div>
                        <p style={{ padding: 0, margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500, color: '#272B30' }}>아이디</p>
                        <input placeholder='입력해주세요.' style={{ width: '50%', padding: '12px 16px', fontSize: '14px', fontWeight: 400, borderRadius: '8px', border: '1px solid #D0D5DD' }} />
                    </div>
                    <div style={{ marginTop: '16px' }}>
                        <p style={{ padding: 0, margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500, color: '#272B30' }}>비밀번호</p>
                        <input placeholder='입력해주세요.' style={{ width: '50%', padding: '12px 16px', fontSize: '14px', fontWeight: 400, borderRadius: '8px', border: '1px solid #D0D5DD' }} />
                    </div>
                    <div style={{ marginTop: '16px' }}>
                        <p style={{ padding: 0, margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500, color: '#272B30' }}>구입한 도메인</p>
                        <input placeholder='URL입력해주세요.' style={{ width: '50%', padding: '12px 16px', fontSize: '14px', fontWeight: 400, borderRadius: '8px', border: '1px solid #D0D5DD' }} />
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '16px', padding: '24px', borderRadius: '12px', border: '1px solid #D0D5DD' }}>
                <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, }}>아마존 서버 계정정보</p>
                <div style={{ marginTop: '20px', }}>
                    <input placeholder='URL입력해주세요.' style={{ width: '50%', padding: '12px 16px', fontSize: '14px', fontWeight: 400, borderRadius: '8px', border: '1px solid #D0D5DD' }} />
                    <div style={{ marginTop: '16px' }}>
                        <p style={{ padding: 0, margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500, }}>아이디</p>
                        <input placeholder='입력해주세요.' style={{ width: '50%', padding: '12px 16px', fontSize: '14px', fontWeight: 400, borderRadius: '8px', border: '1px solid #D0D5DD' }} />
                    </div>
                    <div style={{ marginTop: '16px' }}>
                        <p style={{ padding: 0, margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500, }}>비밀번호</p>
                        <input placeholder='입력해주세요.' style={{ width: '50%', padding: '12px 16px', fontSize: '14px', fontWeight: 400, borderRadius: '8px', border: '1px solid #D0D5DD' }} />
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '16px', padding: '24px', borderRadius: '12px', border: '1px solid #D0D5DD' }}>
                <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, }}>그래픽 저작물</p>
                <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
                    <div style={{ width: '50%' }}>
                        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <p style={{ padding: 0, margin: 0, fontSize: '14px', fontWeight: 500, color: '#272B30' }}>패비콘</p>
                            <img src={iconQuestion} style={{ height: '18px', width: '18px' }} />
                        </div>
                        <p style={{ padding: 0, margin: '8px 0 0 0', fontSize: '14px', fontWeight: 400, color: '#70777F' }}>고해상도 아이콘: 512x512 / 32비트 PNG(알파 있음)</p>
                        <button onClick={() => { }} style={{ marginTop: '16px', borderRadius: '2px', border: '.5px solid #6B7280', backgroundColor: '#fff', padding: '8px 12px', textAlign: 'center' }}>
                            <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 400, color: '#374151' }}>업로드</p>
                        </button>
                    </div>

                    <div style={{ width: '50%' }}>
                        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                            <p style={{ padding: 0, margin: 0, fontSize: '14px', fontWeight: 500, color: '#272B30' }}>시작화면 (선택사항)</p>
                            <img src={iconQuestion} style={{ height: '18px', width: '18px' }} />
                        </div>
                        <p style={{ padding: 0, margin: '8px 0 0 0', fontSize: '14px', fontWeight: 400, color: '#70777F' }}>가로x세로 1440x2960 JPG또는 24비트 PNG(알파 없음)</p>
                        <button onClick={() => { }} style={{ marginTop: '16px', borderRadius: '2px', border: '.5px solid #6B7280', backgroundColor: '#fff', padding: '8px 12px', textAlign: 'center' }}>
                            <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 400, color: '#374151' }}>업로드</p>
                        </button>
                    </div>
                </div>

                <div style={{ marginTop: '24px' }}>
                    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                        <p style={{ padding: 0, margin: 0, fontSize: '14px', fontWeight: 500, }}>알림 아이콘(선택사항)</p>
                        <img src={iconQuestion} style={{ height: '18px', width: '18px' }} />
                    </div>
                    <p style={{ padding: 0, margin: '8px 0 0 0', fontSize: '14px', fontWeight: 400, color: '#70777F' }}>권장 해상도: 96x96 / PNG / 배경 투명으로, 흰색으로 표현</p>
                    <p style={{ padding: 0, margin: '4px 0 0 0', fontSize: '14px', fontWeight: 400, color: '#343941' }}>
                        <span style={{ color: '#FD3535' }}>안내: </span>
                        <span>안드로이드 5.0 이상부터 유채색 알림 아이콘을 지원하지 않아 단색 아이콘을 첨부하셔야 합니다. </span>
                        <a style={{ textDecoration: 'none', color: '#2B83FE' }} href="#">자세히 알아보기</a>
                    </p>
                    <button onClick={() => { }} style={{ marginTop: '16px', borderRadius: '2px', border: '.5px solid #6B7280', backgroundColor: '#fff', padding: '8px 12px', textAlign: 'center' }}>
                        <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 400, color: '#374151' }}>PNG 파일 업로드</p>
                    </button>
                    <p style={{ padding: 0, margin: '8px 0 0 0', fontSize: '14px', fontWeight: 400, color: '#70777F' }}>*알림 아이콘은 앱에서 알림이 왔을때 상단에 보여지는 아이콘입니다.</p>
                </div>

                <button onClick={() => { navigate(ROUTE.REGISTERANDMODIFYGOOGLEPLAY) }} style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', backgroundColor: '#2B83FE', padding: '8px 12px', textAlign: 'center' }}>
                    <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#fff' }}>제출하기</p>
                </button>
            </div>

        </div>
    )
}

export default InfoWebsite