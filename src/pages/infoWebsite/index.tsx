import { makeStyles } from '@mui/styles';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../../apis/axiosClient';
import { SITE, SYSTEM } from '../../apis/urlConfig';
import { useAppDispatch } from '../../app/hooks';
import iconBack from '../../asset/images/iconBack.png';
import iconQuestion from '../../asset/images/iconQuestion.png';
import { Input } from '../../components/base/input/Input';
import { InputuploadImage } from '../../components/base/input/InputuploadImage';
import { snackBarActions } from '../../components/snackbar/snackbarSlice';
import { siteActions } from '../../features/site/siteSlice';
import { ROUTE } from '../../router/routes';
import { DataWebType, SiteType } from '../../types/site.type';
import { loadingActions } from '../../components/loading/loadingSlice';
import { IMAGE_SITE_UPLOAD } from '../../types/enum';
import { Modal } from '@mui/material';
import closeIcon from '../../asset/images/cancel.png';
import imageNotSize from '../../asset/images/PictureNotSize.png';

const useStyles = makeStyles({
    container: {
        padding: "24px",
        '&>div:nth-of-type(1)': {
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            '&>img': { height: '24px', width: '24px' },
            '&>p': { padding: 0, margin: 0, fontSize: '18px', fontWeight: 500, },
            '@media (max-width: 768px)': {
                padding: '16px',
                borderBottom: '.5px solid #D0D5DD',
            },
        },
        '&>div:nth-of-type(2)': {
            marginTop: '16px',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #D0D5DD',
            '&>p:nth-of-type(1)': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, },
            '&>p:nth-of-type(2)': { padding: 0, margin: '20px 0 0 0', fontSize: '14px', fontWeight: 500, color: '#272B30' },
            '@media (max-width: 768px)': {
                marginTop: '0px',
                padding: '16px',
                border: 'none',
                borderBottom: '.5px solid #D0D5DD',
                borderRadius: '0px',
            },
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
            '&>div:nth-of-type(2)': {
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
                '@media (max-width: 768px)': {
                    flexDirection: 'column',
                    gap: '24px',
                    '&>div': {
                        width: '100%',
                    },
                },
            },
            '&>div:nth-of-type(3)': {
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
                '@media (max-width: 768px)': {
                    width: '100%',
                },
            },
            '@media (max-width: 768px)': {
                marginTop: '0px',
                padding: '16px',
                border: 'none',
                borderRadius: '0px',
            },
        },
        '@media (max-width: 768px)': {
            padding: '8px 0px',
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
                display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', borderRadius: '8px', backgroundColor: '#2B83FE', padding: '10px 24px', textAlign: 'center',
                '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#fff' },
            },
        },
    },
});

function InfoWebsite() {
    const navigate = useNavigate()
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const { id } = useParams()

    const [reload, setReload] = useState(false)
    const [site, setSite] = useState<SiteType>()

    const [domainProvider, setDomainProvider] = useState('')
    const [domainUser, setDomainUser] = useState('')
    const [domainPassword, setDomainPassword] = useState('')
    const [domainName, setDomainName] = useState('')
    const [nameSite, setNameSite] = useState('')

    const [value4, setValue4] = useState<File | null>(null);
    const [value5, setValue5] = useState<File | null>(null);
    const [value6, setValue6] = useState<File | null>(null);

    const [favicon, setFavicon] = useState('')
    const [thumb, setThumb] = useState('')
    const [notificationIcon, setNotificationIcon] = useState('')

    const [openModal, setOpenModal] = useState(false)

    const handleFavicon = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file: File = e.target.files[0];
            setValue4(file);
        }
    }
    const handleDelFavicon = () => {
        setValue4(null)
        setFavicon('')
    }

    const handleThumb = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file: File = e.target.files[0];
            setValue5(file);
        }
    }
    const handleDelThumb = () => {
        setValue5(null)
        setThumb('')
    }

    const handleNotificationIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file: File = e.target.files[0];
            setValue6(file);
        }
    }
    const handleDelNotificationIcon = () => {
        setValue6(null)
        setNotificationIcon('')
    }

    const handleSubmit = async () => {
        try {
            dispatch(loadingActions.openLoading())
            const formData = new FormData()
            const formData2 = new FormData()
            const formData3 = new FormData()

            value4 && formData.append('file', value4)

            value5 && formData2.append('file', value5)

            value6 && formData3.append('file', value6)

            const [resFavicon, resThumb, resNotiIcon] = await Promise.all([
                value4 && axiosClient.post(`${SYSTEM}/upload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }),
                value5 && axiosClient.post(`${SYSTEM}/upload`, formData2, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }),
                value6 && axiosClient.post(`${SYSTEM}/upload`, formData3, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
            ])

            const dataPut: { name: string, webInfo: DataWebType } = {
                name: nameSite,
                webInfo: {
                    domainProvider: domainProvider,
                    domainUser: domainUser,
                    domainName: domainName,
                    domainPassword: domainPassword,
                },
            }

            !favicon && (dataPut.webInfo.favicon = favicon)
            !thumb && (dataPut.webInfo.thumbnail = thumb)
            !notificationIcon && (dataPut.webInfo.notificationIcon = notificationIcon)

            resFavicon && (dataPut.webInfo.favicon = resFavicon.data.filename)
            resThumb && (dataPut.webInfo.thumbnail = resThumb.data.filename)
            resNotiIcon && (dataPut.webInfo.notificationIcon = resNotiIcon.data.filename)

            axiosClient.put(`${SITE}/update/${id}`, dataPut)
                .then((res) => {
                    dispatch(loadingActions.loadingSuccess())
                    axiosClient.get(`${SITE}/get/${id}`)
                        .then((resp: { data: SiteType }) => {
                            dispatch(siteActions.updateSite({ updatedData: resp.data }))
                            // dispatch(siteActions.getList({ params: { page: 1 } }))
                        })
                        .catch((error: any) => {
                            console.log(error)
                        })

                    setReload(!reload)
                    dispatch(snackBarActions.setStateSnackBar({
                        content: '성공',
                        type: 'success',
                    }))
                    navigate(ROUTE.SITELISTANDEXPIREDLIST)
                })
                .catch((error: any) => {
                    console.log(error)
                    dispatch(loadingActions.loadingSuccess())
                    dispatch(snackBarActions.setStateSnackBar({
                        content: '실패',
                        type: 'error',
                    }))
                })

        } catch (error) {
            console.log('error:', error)
            dispatch(loadingActions.loadingSuccess())
            dispatch(snackBarActions.setStateSnackBar({
                content: '실패',
                type: 'error',
            }))
        }
    }

    //handle modal
    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    useLayoutEffect(() => {
        if (id) {
            axiosClient.get(`${SITE}/get/${id}`)

                .then((res: { data: SiteType }) => {
                    setSite(res.data)
                    if (res.data.webInfo) {
                        setDomainProvider(res.data.webInfo.domainProvider)
                        setDomainUser(res.data.webInfo.domainUser)
                        setDomainPassword(res.data.webInfo.domainPassword)
                        setDomainName(res.data.webInfo.domainName)
                        setNameSite(res.data.name)

                        setFavicon(res.data.webInfo.favicon)
                        setThumb(res.data.webInfo.thumbnail)
                        setNotificationIcon(res.data.webInfo.notificationIcon)
                    }
                })
                .catch((error: any) => {
                    console.log(error)
                })
        }
    }, [id, reload])
    return (
        <div className={classes.container} >
            <div>
                <img src={iconBack} onClick={() => { navigate(-1) }} />
                <p>사이트 정보</p>
            </div>
            <div>
                <p>도메인 구입한 사이트</p>
                {/* <p>도메인 구매처링크</p> */}
                <Input
                    label='도메인 회사'
                    placeholder='URL입력해주세요.'
                    value={domainName}
                    onChange={(e) => { setDomainName(e.target.value) }}
                    containerStyle={{ width: 'calc(50% + 32px)', marginTop: '16px' }}
                    inputStyle={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}
                    labelStyle={{ fontSize: '14px', fontWeight: 500, lineHeight: '20px', color: '#272B30' }}
                />
                <Input
                    label='아이디'
                    placeholder='입력해주세요.'
                    value={domainUser}
                    onChange={(e) => { setDomainUser(e.target.value) }}
                    containerStyle={{ width: 'calc(50% + 32px)', marginTop: '16px' }}
                    inputStyle={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}
                    labelStyle={{ fontSize: '14px', fontWeight: 500, lineHeight: '20px', color: '#272B30' }}
                />
                <Input
                    label='비밀번호'
                    placeholder='입력해주세요.'
                    value={domainPassword}
                    onChange={(e) => { setDomainPassword(e.target.value) }}
                    containerStyle={{ width: 'calc(50% + 32px)', marginTop: '16px' }}
                    inputStyle={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}
                    labelStyle={{ fontSize: '14px', fontWeight: 500, lineHeight: '20px', color: '#272B30' }}
                    isPassword
                />
                <Input
                    label='구입한 도메인'
                    placeholder='URL입력해주세요.'

                    value={domainProvider}
                    onChange={(e) => { setDomainProvider(e.target.value) }}
                    containerStyle={{ width: 'calc(50% + 32px)', marginTop: '16px' }}
                    inputStyle={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}
                    labelStyle={{ fontSize: '14px', fontWeight: 500, lineHeight: '20px', color: '#272B30' }}
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
                <Input
                    label='사이트 이름'
                    placeholder='입력해주세요.'
                    value={nameSite}
                    onChange={(e) => { setNameSite(e.target.value) }}
                    containerStyle={{ width: 'calc(50% + 32px)', marginBottom: '24px', }}
                    inputStyle={{ fontSize: '14px', fontWeight: 400, lineHeight: '20px' }}
                    labelStyle={{ fontSize: '14px', fontWeight: 500, lineHeight: '20px', color: '#272B30' }}
                />
                <p>그래픽 저작물</p>
                <div>
                    <div>
                        <div>
                            <p>패비콘</p>
                            <img src={iconQuestion} alt='' />
                        </div>
                        <p>고해상도 아이콘: 512x512 / 32비트 PNG(알파 있음)</p>
                        <InputuploadImage type={IMAGE_SITE_UPLOAD.TYPE_512} containerStyle={{ marginTop: '16px' }} onChange={handleFavicon} onDeleted={handleDelFavicon} onError={handleOpenModal} images={favicon} />
                    </div>

                    <div>
                        <div>
                            <p>시작화면 (선택사항)</p>
                            <img src={iconQuestion} alt='' />
                        </div>
                        <p>가로x세로 1440x2960 JPG또는 24비트 PNG(알파 없음)</p>
                        <InputuploadImage type={IMAGE_SITE_UPLOAD.TYPE_1440} containerStyle={{ marginTop: '16px' }} onChange={handleThumb} onDeleted={handleDelThumb} onError={handleOpenModal} images={thumb} />
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

                    <InputuploadImage type={IMAGE_SITE_UPLOAD.TYPE_96} containerStyle={{ marginTop: '16px' }} onChange={handleNotificationIcon} onDeleted={handleDelNotificationIcon} onError={handleOpenModal} images={notificationIcon} />

                    <p>*알림 아이콘은 앱에서 알림이 왔을때 상단에 보여지는 아이콘입니다.</p>
                </div>

                <button onClick={handleSubmit}>
                    <p>제출하기</p>
                </button>
            </div>
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
                        <img src={imageNotSize} alt="" />
                        <div>
                            <p>어이쿠! 이미지 크기가 적합하지 않습니다.</p>
                            <p>최상의 품질을 위해 사진의 크기를 확인하십시오.</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleCloseModal}>
                            <p>닫기</p>
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default InfoWebsite