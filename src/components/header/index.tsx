import { makeStyles } from '@mui/styles'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../asset/images/logo.png'
import polygon from '../../asset/images/polygon.png'
import iconBack from '../../asset/images/iconBack.png'
import hamburgerMenu from '../../asset/images/HamburgerMenu.png'
import { ROUTE } from '../../router/routes'
import { RecaptchaVerifier, signInWithPopup, signInWithPhoneNumber } from 'firebase/auth'
import { auth, provider } from '../../services/firebase'
import { LOGIN, UPDATE_PHONE_NUMBER, USER } from '../../apis/urlConfig'
import axiosClient, { setTokens } from '../../apis/axiosClient'
import { setTokensLocalStorage } from '../../utils'
import { UserType } from '../../types/user.type'
import { MenuItem, Modal, Select, SelectChangeEvent } from '@mui/material'
import { snackBarActions } from '../snackbar/snackbarSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectUserData, userActions } from '../../features/user/userSlice'
import { loadingActions } from '../loading/loadingSlice'
import { Input } from '../../components/base/input/Input'
import closeIcon from '../../asset/images/cancel.png'
import OtpInput from 'react-otp-input';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const useStyles = makeStyles({
  container_header: {
    position: 'fixed',
    zIndex: 1000,
    top: 0,
    left: 0,
    right: 0,
    // height: 86,
    padding: '22px 178px',
    backgroundColor: '#2C2C2C',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // transition: '0.4s',
    // boxSizing: 'border-box',
    // boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.08)',
    '&>div:nth-child(1)': {
      '&>img:nth-of-type(1)': {
        display: 'none',
      },
      '&>div:nth-of-type(1)': {
        display: 'flex',
        // height: '36px',
        gap: '8px',
        paddingRight: '4px',
        alignItems: 'center',
        '&>img': {
          width: '29px',
          height: '36px',
        },
        '&>div': {
          fontWeight: 700,
          fontSize: '24px',
          color: '#fff',
        },
      },
    },
    '&>ul': {
      listStyle: 'none',
      display: 'flex',
      gap: '64px', padding: 0,
      margin: 0,
      fontSize: '14px',
      fontWeight: 500,
      '&>li': {
        cursor: 'pointer',
        color: '#8F8F8F',
        '&:hover': {
          color: '#fff',
        },
      },
      '&>div:nth-of-type(1)': {
        display: 'flex',
        justifyContent: 'space-between',
        
        '&>li': {
          cursor: 'pointer',
          color: '#8F8F8F',
          '&:hover': {
            color: '#fff',
          },
        },
        '&>div': {
          width: '1px', height: '20px', background: '#8F8F8F', margin: '0 16px'
        },
      },
    },
    '&>:nth-child(3)': {
      '&>div': {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: '1px solid #8F8F8F',
        fontSize: '14px',
        fontWeight: 500,
        color: '#fff',
      },
    },

  },
  modal: {
    position: 'absolute',
    right: '104px',
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
  },
  modalPhone: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.25)',
    border: 'none',
    '&>div:nth-of-type(1)': {
      display: 'flex',
      padding: '16px 32px',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #EDEDED',
      textAlign: 'center',
      '&>div': {
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        '&>img': {
          cursor: 'pointer',
          height: '24px',
          width: '24px',
        },
        '&>p': {
          padding: 0,
          margin: 0,
          fontSize: '20px',
          fontWeight: 500,
          textAlign: 'center',
        },

      },
      '&>img': {
        cursor: 'pointer',
        height: '24px',
        width: '24px',
      },
    },
    '&>div:nth-of-type(2)': {
      padding: '24px 32px 32px 32px',
      alignItems: 'center',
      // borderBottom: '1px solid #EDEDED',
      width: 'calc(446px)',
      minHeight: 'calc(120px)',
      '&>p': {
        padding: 0,
        margin: '0 0 8px 0',
        fontSize: '16px',
        fontWeight: 500,
        color: '#272B30',
      },
      '&>p:nth-of-type(2)': {
        margin: '8px 0 0 0',
        '&>span': {
          color: '#0162F2',
          cursor: 'pointer',
        }
      },

    },
    '&>button': {
      width: 'calc(100% - 64px)',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: '#2B83FE',
      padding: '10px 24px',
      textAlign: 'center',
      cursor: 'pointer',
      margin: '0px 32px 24px 32px',
      '&>p': {
        padding: 0,
        margin: 0,
        fontSize: '16px',
        fontWeight: 500,
        color: '#fff',
      },
    },
  },

  captcha: {
    position: 'absolute' as 'absolute',
    top: '0',
    right: '0',
  },

  '@media (max-width: 768px)': {
    container_header: {
      padding: '16px',
      borderBottom: '1px solid #D0D5DD',
      '&>div:nth-of-type(1)': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        '&>img:nth-of-type(1)': {
          display: 'block',
          width: '24px',
          height: '24px',
        },
        '&>div:nth-of-type(1)': {
          display: 'flex',
          // height: '56px',
          gap: '4px',
          alignItems: 'center',
          '&img': {
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
      '&>ul': {
        display: 'none',
      },
      '&>:nth-child(3)': {
        '&>div': {
          border: 'none',
          padding: '0',
          '&>img:nth-child(1)': {
            width: '36px',
            height: '36px',
            borderRadius: '50%',
          },
          '&>img:nth-child(2)': {
            display: 'none'
          },
        },
        '&>button': {
          backgroundColor: '#fff',
          border: '1px solid #D0D5DD',
          borderRadius: '100px',
          alignItems: 'center',
          fontSize: '18px',
          fontWeight: 500,
          padding: '4px 12px'
        },
      },

    },
    modal: {
      position: 'absolute',
      right: '18px',
      top: '96px',
      width: '300px',
    },
  },
})
interface IProps {
  handleButtonShow: (check: boolean) => void,
}
const Header = (props: IProps) => {
  const { handleButtonShow } = props

  const classes = useStyles()
  const location = useLocation()
  const { t } = useTranslation();
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const userProfile = useAppSelector(selectUserData)

  const [isShowSideBar, setIsShowSideBar] = useState(false)
  const [tokenFirebase, setTokenFirebase] = useState('')
  const [statusLogin, setStatusLogin] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [openModalPhone, setOpenModalPhone] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [showOtp, setShowOtp] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const handleClick = () => {
    setIsShowSideBar(!isShowSideBar)
    handleButtonShow(isShowSideBar)
  }

  const handleClickMenuUser = () => {
    setOpenModal(!openModal)
  }

  const handleCloseModal = () => setOpenModal(false);
  const handleCloseModalPhone = () => {
    setPhone('')
    setOtp('')
    localStorage.clear()
    dispatch(userActions.deleteUser({ params: undefined }))
    setTokenFirebase('')
    setOpenModalPhone(false)
    navigate(ROUTE.HOME)
  };

  const onCaptchaVerify = () => {
    if (!(window as any).recaptchaVerifier) {
      (window as any).recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response: any) => {
            onSignup();
          },
          "expired-callback": () => {
            console.log('expired-callback');
          },
        },
        auth
      );
    }
  }

  const onSignup = () => {
    onCaptchaVerify();

    const appVerifier = (window as any).recaptchaVerifier;

    const formatPhone = "+" + phone;

    signInWithPhoneNumber(auth, formatPhone, appVerifier)
      .then((confirmationResult) => {
        (window as any).confirmationResult = confirmationResult;
        setShowOtp(true);
      })
      .catch((error) => {
        console.log('error signInWithPhoneNumber: ', error);
        // localStorage.clear()
        // dispatch(userActions.deleteUser({ params: undefined }))
        // setTokenFirebase('')
        // setOpenModalPhone(false)
        // navigate(ROUTE.HOME)
        // dispatch(snackBarActions.setStateSnackBar({
        //   content: '실패',
        //   type: 'error',
        // }))
      });
  }

  const onOTPVerify = () => {
    (window as any).confirmationResult
      .confirm(otp)
      .then(async (res: any) => {
        updateNumberPhone(res);
      })
      .catch((error: any) => {
        console.log('error onOTPVerify: ', error);
        // localStorage.clear()
        // dispatch(userActions.deleteUser({ params: undefined }))
        // setTokenFirebase('')
        // setOpenModalPhone(false)
        // navigate(ROUTE.HOME)
        // dispatch(snackBarActions.setStateSnackBar({
        //   content: '실패',
        //   type: 'error',
        // }))
      });
  }

  const handleReSendOTP = () => {
    setOtp('');
    onSignup();
  }

  const updateNumberPhone = (resp: any) => {
    dispatch(loadingActions.openLoading())
    const data = {
      mobileNumber: resp?.user?.phoneNumber,
    }
    axiosClient.put(UPDATE_PHONE_NUMBER, data)
      .then((res: any) => {
        if (res.statusCode === 200) {
          dispatch(loadingActions.loadingSuccess())
          setOpenModalPhone(false)
          setShowProfile(true)
          dispatch(snackBarActions.setStateSnackBar({
            content: '성공',
            type: 'success',
          }))
        }
        else {
          console.log('message Put UPDATE_PHONE_NUMBER failed: ', res.message);
          dispatch(loadingActions.loadingSuccess())
          localStorage.clear()
          dispatch(userActions.deleteUser({ params: undefined }))
          setTokenFirebase('')
          setOpenModalPhone(false)
          navigate(ROUTE.HOME)
          dispatch(snackBarActions.setStateSnackBar({
            content: '실패',
            type: 'error',
          }))
        }
      })
      .catch((error: any) => {
        console.log(error)
        dispatch(loadingActions.loadingSuccess())
        localStorage.clear()
        dispatch(userActions.deleteUser({ params: undefined }))
        setTokenFirebase('')
        navigate(ROUTE.HOME)
        dispatch(snackBarActions.setStateSnackBar({
          content: '실패',
          type: 'error',
        }))
      })
  }

  const handleLogin = () => {
    if (!localStorage.getItem('accessToken')) {
      signInWithPopup(auth, provider)
        .then((data: any) => {
          setTokenFirebase(data.user.accessToken)
        })
        .catch((error: any) => {
          console.log(error)
        })
    }
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
  const handleClickSolution = () => {
    if (!!localStorage.getItem('accessToken')) {
      navigate(ROUTE.SITELISTANDEXPIREDLIST)
    }
    else {
      alert('이 기능을 사용하려면 로그인해야 합니다.')
    }
  }
  const handleClickPrice = () => {
    if (!!localStorage.getItem('accessToken')) {
      navigate(ROUTE.PRICE)
    }
    else {
      alert('이 기능을 사용하려면 로그인해야 합니다.')
    }
  }
  const handleClickContact = () => {
    if (!!localStorage.getItem('accessToken')) {
      navigate(ROUTE.CUSTOMERCENTER)
    }
    else {
      alert('이 기능을 사용하려면 로그인해야 합니다.')
    }
  }
  useLayoutEffect(() => {
    if (tokenFirebase) {
      const data = {
        firebaseToken: tokenFirebase,
      }
      axiosClient.post(LOGIN, data)
        .then((res: any) => {
          if (res.statusCode === 200) {
            setStatusLogin(!statusLogin)
            setTokensLocalStorage(res.data)
            dispatch(loadingActions.loadingSuccess())
            // dispatch(snackBarActions.setStateSnackBar({
            //   content: '성공',
            //   type: 'success',
            // }))
          }
          else {
            console.log('message: ', res.message);
            dispatch(loadingActions.loadingSuccess())
            dispatch(snackBarActions.setStateSnackBar({
              content: '실패',
              type: 'error',
            }))
          }
        })
        .catch((error: any) => {
          console.log(error)
          dispatch(loadingActions.loadingSuccess())
          dispatch(snackBarActions.setStateSnackBar({
            content: '실패',
            type: 'error',
          }))
        })
    }
  }, [tokenFirebase])

  useLayoutEffect(() => {
    if (!!localStorage.getItem('accessToken') && Object.entries(userProfile).length === 0) {
      setTokens()
      dispatch(userActions.getUser({ params: undefined }))
    }
    if (!localStorage.getItem('accessToken')) {
      dispatch(userActions.deleteUser({ params: undefined }))
    }
  }, [statusLogin])

  useEffect(() => {
    if (Object.entries(userProfile).length !== 0 && !userProfile.hasOwnProperty('mobileNumber') && statusLogin) {
      setOpenModalPhone(true)
    }
    else if (Object.entries(userProfile).length !== 0 && userProfile.hasOwnProperty('mobileNumber') && statusLogin) {
      setShowProfile(true)
    }
  }, [userProfile])

  useEffect(() => {
    console.log('userProfile111: ', userProfile);
    if (Object.entries(userProfile).length !== 0) {
      setShowProfile(true)
    }
    else if (!!localStorage.getItem('accessToken') && Object.entries(userProfile).length == 0) {
      dispatch(userActions.getUser({ params: undefined }))
      setShowProfile(true)
    }
  }, [])

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [location.pathname])
  // useLayoutEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.scrollY > 0) {
  //       setScroll(true)
  //     } else {
  //       setScroll(false)
  //     }
  //   })
  // }, [])


  //enter-web
  const [lang, setLang] = useState(i18n.language);

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
      i18n.changeLanguage(event.target.value as string);
  }

  return (
    <div
      className={classes.container_header}
    // style={{ background: scroll ? 'white' : 'white' }}
    >
      <div>
        {/* <img src={hamburgerMenu} alt='' onClick={handleClick} /> */}
        <div onClick={() => navigate(ROUTE.HOME)}>
          <img src={logo} alt="logo" />
          <div>
          {t(`header:home`)}
          </div>
        </div>
      </div>
      <ul>
        <li style={location.pathname === ROUTE.HOME ? { color: '#fff' } : {}} onClick={() => navigate(ROUTE.HOME)}>{t(`header:home`)}</li>
        <li onClick={handleClickSolution}>{t(`header:news`)}</li>
        <li style={location.pathname === ROUTE.PRICE ? { color: '#fff' } : {}} onClick={handleClickPrice}>{t(`header:artists`)}</li>
        <li onClick={handleClickContact}>{t(`header:models`)}</li>
        <li onClick={handleClickContact}>{t(`header:actors`)}</li>
        <li onClick={handleClickContact}>{t(`header:video`)}</li>
        <li onClick={handleClickContact}>{t(`header:audition`)}</li>
        <div>
          <li onClick={handleClickContact}>{t(`header:schedule`)}</li>
          <div style={{}} />
          <li onClick={handleClickContact}>{t(`header:joinUs`)} / {t(`header:login`)}</li>
        </div>
      </ul>
      <div>
        <Select
          id="demo-select-small"
          value={lang}
          onChange={handleChangeSelect}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={'ko'}>KOR</MenuItem>
          <MenuItem value={'en'}>EN</MenuItem>
          <MenuItem value={'zh'}>CS</MenuItem>
          <MenuItem value={'ja'}>JP</MenuItem>
          <MenuItem value={'es'}>ES</MenuItem>
        </Select>
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
            <img src={userProfile?.photo} alt='' />
            <div>
              <p>{userProfile?.firstName} {userProfile?.lastName}</p>
              <p>{userProfile?.email}</p>
            </div>
          </div>
          <p>파트너 관리</p>
          <p onClick={handleLogout}>로그아웃</p>
        </div>
      </Modal>

      <Modal open={openModalPhone} onClose={handleCloseModalPhone} disableAutoFocus>
        <div className={classes.modalPhone}>
          <div>
            <div>
              {showOtp && <img src={iconBack} alt='back' onClick={() => setShowOtp(false)} />}
              <p>회원가입 전화번호 인증</p>
            </div>
            <img src={closeIcon} alt='close' onClick={handleCloseModalPhone} />
          </div>
          {
            !showOtp ? (
              <div>
                <p>연락처</p>
                <PhoneInput
                  country={'kr'}
                  value={phone}
                  onChange={setPhone}
                  inputStyle={{ width: '100%', height: '100%', padding: '10px 16px 10px 48px', fontSize: '16px', fontWeight: '500', borderRadius: '8px' }}
                  containerStyle={{ height: '44px' }}
                />
              </div>) :
              (
                <div>
                  <p>연락처</p>
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderInput={(props) => <input {...props} />}
                    // inputType="number"
                    inputStyle={{ width: '100%', height: '100%', margin: '10px', fontSize: '16px', fontWeight: '500', border: '1px solid #ccc', borderRadius: '8px' }}
                    containerStyle={{ height: '44px' }}
                  />
                  <p>인증번호를 받지 못하셨습니까? <span onClick={handleReSendOTP}>다시 보내기</span></p>
                </div>
              )
          }
          <button onClick={!showOtp ? onSignup : onOTPVerify}>
            <p>{!showOtp ? '다음' : '인증'}</p>
          </button>
        </div>
      </Modal>
      <div className={classes.captcha} id="recaptcha-container"></div>
    </div>
  )
}

export default Header
