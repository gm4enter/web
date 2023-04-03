import { width } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import iconBack from '../../asset/images/iconBack.png';
import iconQuestion from '../../asset/images/iconQuestion.png';
import infoCircle from '../../asset/images/iconInfoCircle.png';
import { ROUTE } from '../../router/routes';


function RegisterAndModifyGooglePlay() {
    const navigate = useNavigate()
    return (
        <div style={{ padding: "24px" }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <img src={iconBack} style={{ height: '24px', width: '24px' }} onClick={() => { navigate(-1) }} />
                <p style={{ padding: 0, margin: 0, fontSize: '18px', fontWeight: 500, }}>구글플레이 등록 및 수정</p>
            </div>
            <div style={{ backgroundColor: 'rgba(235, 243, 255, 0.24)', border: '1px solid rgba(112, 119, 127, 0.2)', borderRadius: '4px', padding: '24px', marginTop: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img style={{ height: '24px', width: '24px' }} src={infoCircle} />
                    <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500 }}>주의</p>
                </div>
                <p style={{ padding: 0, margin: '10px 0 0 0', fontSize: '14px', fontWeight: 400 }}>
                    Google Play에서는 아래와 같은 정책을 시행하고 있으며,
                    이를 준수하지 않을 경우 App이 강제로 삭제되거나 개발자 계정이 정지될 수 있습니다. Google
                    정책에 의해 삭제된 앱에 대해서는 지엠포컴퍼니가이 책임지지 않으므로 Google 에서 개발자
                    계정 메일로 보내주는 정책 알림을 수시로 확인하여 대응하셔야 합니다.
                </p>
                <ul style={{ margin: 0, padding: '0 0 0 24px', fontSize: '14px', fontWeight: 400 }}>
                    <li>음란물 : 성매매 또는 유흥 등 성인용 컨텐츠</li>
                    <li>명의도용 또는 사기행위 : 모조품 판매 또는 연결 컨텐츠</li>
                    <li>제휴사 트래픽 유도 : App의 주 목적이 제휴사 트래픽을 웹사이트로 유도하는 것(주요 메뉴들이 외부 웹사이트로 연결되어 있는 경우)</li>
                    <li>스팸성 키워드 : App 제목이나 설명에 관련 없는 키워드나 설명을 나열하는 행위</li>
                    <li>상표권 도용 : 등록된 상표를 무단으로 App 아이콘에 사용하는 경우</li>
                    <li>저작권 침해 : 영화 포스터 등 저작권이 있는 이미지를 홈화면, 그래픽 이미지, 앱 아이콘, 캡쳐화면, 시작화면 이미지로 설정하는 경우</li>
                    <li>컨텐츠 수위 : 주류, 담배, 국제결혼 등을 취급하는 App에서 전체이용가 등으로 설정하는 경우</li>
                    <li>개인정보처리방침 누락/불일치 : 앱의 각종 권한, 회원가입, 위치정보사용 등 취급하는 개인정보에 대해 개인정보처리방침에 명시하고 Google Play 앱 등록정보에 URL을 기재해야 합니다.
                        보다 자세한 사항은 구글 플레이 개발자 정책을 참고하시기 바랍니다.</li>
                </ul>
            </div>
            <div style={{ marginTop: '16px', padding: '24px', borderRadius: '12px', border: '1px solid #D0D5DD' }}>
                <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, }}>구글플레이 계정정보</p>
                <div style={{ marginTop: '20px', }}>
                    <p style={{ padding: 0, margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500, }}>아이디</p>
                    <input placeholder='입력해주세요.' style={{ width: '50%', padding: '12px 16px', fontSize: '14px', fontWeight: 400, borderRadius: '8px', border: '1px solid #D0D5DD' }} />
                    <div style={{ marginTop: '16px' }}>
                        <p style={{ padding: 0, margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500, }}>비밀번호</p>
                        <input placeholder='입력해주세요.' style={{ width: '50%', padding: '12px 16px', fontSize: '14px', fontWeight: 400, borderRadius: '8px', border: '1px solid #D0D5DD' }} />
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '16px', padding: '24px', borderRadius: '12px', border: '1px solid #D0D5DD' }}>
                <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, }}>구글플레이 계정정보</p>
                <div style={{ marginTop: '20px', }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: 'calc(50% + 32px)' }}>
                        <p style={{ padding: 0, margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500, }}>아이디</p>
                        <p style={{ padding: 0, margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500, }}>0/40</p>
                    </div>
                    <input placeholder='입력해주세요.' style={{ width: '50%', padding: '12px 16px', fontSize: '14px', fontWeight: 400, borderRadius: '8px', border: '1px solid #D0D5DD' }} />
                    <p style={{ padding: 0, margin: '8px 0 0 0', fontSize: '14px', fontWeight: 400, }}>* 앱 설치 후 아이콘 아래에 표시되는 이름입니다.</p>
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

                <button onClick={() => { navigate(ROUTE.REGISTERANDMODIFYAPPLESTORE) }} style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', backgroundColor: '#2B83FE', padding: '8px 12px', textAlign: 'center' }}>
                    <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#fff' }}>제출하기</p>
                </button>
            </div>

        </div>
    )
}

export default RegisterAndModifyGooglePlay