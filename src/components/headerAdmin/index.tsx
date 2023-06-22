import { makeStyles } from '@mui/styles'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../asset/images/logo.png'
import hamburgerMenu from '../../asset/images/HamburgerMenu.png'
import { ROUTE } from '../../router/routes'
import { signInWithPopup } from 'firebase/auth'
import axios from 'axios'
import { LOGIN, USER } from '../../apis/urlConfig'
import { auth, provider } from '../../services/firebase'
import axiosClient, { setTokens } from '../../apis/axiosClient'
import { UserType } from '../../types/user.type'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectUserData, userActions } from '../../features/user/userSlice'
import { Modal } from '@mui/material'
import polygon from '../../asset/images/polygon.png'


const useStyles = makeStyles({
    container_header: {
        position: 'fixed',
        zIndex: 1100,
        top: 0,
        left: 0,
        right: 0,
        height: 76,
        padding: '14px 24px',
        display: 'flex',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: '0.4s',
        boxSizing: 'border-box',
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.12)',
        '&>div:nth-child(1)': {
            display: 'flex',
            gap: '4px',
            justifyContent: 'center',
            alignItems: 'center',
            '&>img': {
                width: '24px',
                height: '24px',
                cursor: 'pointer',
            },
            '&>div': {
                display: 'flex',
                gap: '6px',
                paddingRight: '4px',
                alignItems: 'center',
                cursor: 'pointer',
                '&>img': {
                    width: '48px',
                    height: '48px',
                },
                '&>div': {
                    fontWeight: 700,
                    fontSize: '24px',
                    '&>p': {
                        color: 'blue',
                        fontWeight: 500,
                        fontSize: '16px',
                        padding: 0,
                        margin: 0
                    },
                },
            },
        },
        '&>:nth-child(2)': {
            '&>div': {
                backgroundColor: '#fff',
                fontSize: '18px',
                fontWeight: 500,
                margin: '16px 24px 16px 0px',
                '&>img:nth-child(1)': {
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                },
            },
        },
    },
    '@media (max-width: 768px)': {
        container_header: {
            padding: '16px',
            '&>div:nth-child(1)': {
                display: 'flex',
                gap: '4px',
                justifyContent: 'center',
                alignItems: 'center',
                '&>img': {
                    width: '24px',
                    height: '24px',
                    cursor: 'pointer',
                },
                '&>div': {
                    display: 'flex',
                    gap: '6px',
                    paddingRight: '4px',
                    alignItems: 'center',
                    cursor: 'pointer',
                    '&>img': {
                        width: '36px',
                        height: '36px',
                    },
                    '&>div': {
                        fontWeight: 700,
                        fontSize: '16px',
                        '&>p': {
                            color: 'blue',
                            fontWeight: 500,
                            fontSize: '12px',
                            padding: 0,
                            margin: 0
                        },
                    },
                },
            },
            '&>:nth-child(2)': {
                '&>div': {
                    backgroundColor: '#fff',
                    fontSize: '18px',
                    fontWeight: 500,
                    margin: 0,
                    '&>img:nth-child(1)': {
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                    },
                },
            },
        },

    },
    modal: {
        position: 'absolute',
        right: '44px',
        top: '96px',
        width: '308px',
        padding: '16px 20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0px 2px 16px rgba(0, 0, 0, 0.25)',
        '&>div:nth-of-type(1)': {
            '&>img': {
                position: 'absolute',
                right: '16px ',
                top: '-12px',
                width: '12px',
                height: '12px',
            },
        },
        '&>div:nth-of-type(2)': {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            '&>img:nth-of-type(1)': {
                width: '54px',
                height: '54px',
                borderRadius: '50%',
            },
            '&>div': {
                '&>p': {
                    padding: 0,
                    margin: 0,
                },
                '&>p:nth-of-type(1)': {
                    fontWeight: 700,
                    fontSize: '16px',
                },
                '&>p:nth-of-type(2)': {
                    fontWeight: 400,
                    fontSize: '14px',
                },
            },
        },
        '&>p:nth-of-type(1)': {
            padding: 0,
            margin: '24px 0 12px 0',
            fontWeight: 500,
            fontSize: '16px',
            cursor: 'pointer',
        },
        '&>p:nth-of-type(2)': {
            padding: 0,
            margin: 0,
            fontWeight: 400,
            fontSize: '16px',
            color: '#272B30',
            cursor: 'pointer',

        },
        '@media (max-width: 768px)': {
            right: '16px',
        },
    },
})

interface IProps {
    handleButtonShow: (check: boolean) => void,
}

const HeaderAdmin = (props: IProps) => {
    const classes = useStyles()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const userProfile = useAppSelector(selectUserData)
    const { handleButtonShow } = props
    const [isShowSideBar, setIsShowSideBar] = useState(false)
    const [tokenFirebase, setTokenFirebase] = useState('')
    const [statusLogin, setStatusLogin] = useState(false)
    const [user, setUser] = useState<UserType>()
    const [openModal, setOpenModal] = useState(false)


    const handleClick = () => {
        setIsShowSideBar(!isShowSideBar)
        handleButtonShow(isShowSideBar)
    }
    const handleClickMenuUser = () => {
        setOpenModal(!openModal)
    }
    const handleCloseModal = () => setOpenModal(false);

    const handleLogin = () => {
        // signInWithPopup(auth, provider)
        //     .then((data: any) => {
        //         setTokenFirebase(data.user.accessToken)
        //     })
        //     .catch((error: any) => {
        //         console.log(error)
        //     })
    }
    const handleLogout = () => {
        if (window.confirm('로그아웃하시겠습니까?')) {
            localStorage.clear()
            dispatch(userActions.deleteUser({ params: undefined }))
            setTokenFirebase('')
            setOpenModal(false)
            navigate(ROUTE.HOME)
        }
    }

    // useEffect(() => {
    //     if (tokenFirebase) {
    //         const data = {
    //             firebaseToken: tokenFirebase,
    //         }
    //         axiosClient.post(LOGIN, data)
    //             .then((res: any) => {
    //                 if (res.statusCode === 200) {
    //                     console.log('message: ', res.message);
    //                     setStatusLogin(true)
    //                     localStorage.setItem('accessToken', res.data?.accessToken)
    //                 }
    //                 else {
    //                     console.log('message: ', res.message);
    //                 }
    //             })
    //             .catch((error: any) => {
    //                 console.log(error)
    //             })
    //     }
    // }, [tokenFirebase])

    // useEffect(() => {
    //     if (localStorage.getItem('accessToken')) {
    //         setTokens()
    //         axiosClient.get(USER)
    //             .then((res: { data: UserType }) => {
    //                 if (res.data) {
    //                     setUser(res.data)
    //                 }
    //             })
    //             .catch((error: any) => {
    //                 console.log(error)
    //             })

    //     }
    // }, [statusLogin])

    useLayoutEffect(() => {
        userProfile ?
            setUser(userProfile) :
            dispatch(userActions.getUser({ params: undefined }))
    }, [userProfile])

    return (
        <div
            className={classes.container_header}
        >
            <div>
                <img src={hamburgerMenu} alt='' onClick={handleClick} />
                <div onClick={() => { navigate(ROUTE.HOME) }}>
                    <img src={logo} alt="logo" />
                    <div>
                        GM4 Company
                        <p>
                            Solution
                        </p>
                    </div>
                </div>

            </div>
            <div>
                {localStorage.getItem('accessToken') ? (
                    <div onClick={handleClickMenuUser}>
                        <img
                            src={
                                user?.photo
                            }
                            alt=''
                        />
                    </div>
                ) : (
                    <button onClick={handleLogin}>
                        로그인
                    </button>
                )}
            </div>

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                disableAutoFocus
                sx={
                    {
                        '.MuiModal-backdrop': {
                            backgroundColor: 'transparent',
                        },
                    }
                }
            >
                <div className={classes.modal}>
                    <div>
                        <img src={polygon} alt='' />
                    </div>
                    <div>
                        <img src={user?.photo} alt='' />
                        <div>
                            <p>{user?.firstName} {userProfile?.lastName}</p>
                            <p>{user?.email}</p>
                        </div>
                    </div>
                    <p>파트너 관리</p>
                    <p onClick={handleLogout}>로그아웃</p>
                </div>
            </Modal>

        </div>
    )
}

export default HeaderAdmin
