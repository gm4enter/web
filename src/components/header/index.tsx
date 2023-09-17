import { makeStyles } from '@mui/styles'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../asset/images/logo.png'
import polygon from '../../asset/images/polygon.png'
import cancelWhite from '../../asset/images/cancelWhite.png'
import cancel from '../../asset/images/cancel.png'
import hamburgerMenu from '../../asset/images/HamburgerMenu.png'
import hamburgerMenuBlack from '../../asset/images/HamburgerMenuBlack.png'
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
import LogoIcon from '../../asset/icons/logo'
import { Face } from '@mui/icons-material'
import FbIcon from '../../asset/icons/facebook_icon'
import TwitterIcon from '../../asset/icons/twitter_icon'
import InsIcon from '../../asset/icons/instagram_icon'
import YtIcon from '../../asset/icons/youtube_icon'

const useStyles = makeStyles({
  container_header: {
    position: 'fixed',
    zIndex: 1000,
    top: 0,
    left: 0,
    right: 0,
    // height: 86,
    padding: '24px 80px',
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
    backdropFilter: 'blur(1px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&>div:nth-of-type(1)': {
      display: 'flex',
      // height: '36px',
      gap: '8px',
      paddingRight: '4px',
      alignItems: 'center',
      fontWeight: 700,
      fontSize: '24px',
      color: '#fff',
      cursor: 'pointer',
      textTransform: 'uppercase'
    },
    '&>div:nth-of-type(2)': {
      display: 'flex',
      gap: '32px',
      alignItems: 'center',
      '&>div:nth-of-type(1)': {
        display: 'flex',
        gap: '40px',
        alignItems: 'center',
      },
      '&>img': {
        cursor: 'pointer',
        width: '28px',
        height: '28px',
      },

    },
  },
  select: {
    '&:before, &:after': {
      borderBottom: 'none', // Hide the underline border
    },
    '& fieldset': {
      border: 'none', // Hide the regular border
    },
  },
  modalSidebar: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    padding: '0',
    '&>div:nth-of-type(2)': {
      listStyle: 'none',
      fontSize: '28px',
      fontWeight: 700,
      cursor: 'pointer',
      color: '#fff',
      minWidth: '128px',
      '&>div': {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginTop: '20px',
        '&>p': {
          padding: 0,
          margin: 0,
          fontSize: '18px',
          fontWeight: 400,
        },
      }
    },
    '&>div:nth-of-type(3)': {
      height: '1px',
      margin: '20px 10px',
      width: '180px',
      backgroundColor: '#999',
    },
    '&>div:nth-of-type(4)': {
      listStyle: 'none',
      fontSize: '28px',
      fontWeight: 700,
      cursor: 'pointer',
      color: '#fff',
      '&>div': {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginTop: '20px',
        '&>p': {
          padding: 0,
          margin: 0,
          fontSize: '18px',
          fontWeight: 400,
        },
      }
    },
    '&>div:nth-of-type(5)': {
      height: '1px',
      margin: '20px 10px',
      width: '180px',
      backgroundColor: '#999',
    },
    '&>div:nth-of-type(6)': {
      listStyle: 'none',
      fontSize: '28px',
      fontWeight: 700,
      cursor: 'pointer',
      color: '#fff',
      minWidth: '128px',
      '&>div': {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginTop: '20px',
        '&>p': {
          padding: 0,
          margin: 0,
          fontSize: '18px',
          fontWeight: 400,
        },
      }
    },
  },
  header_modal_mobile: {
    display: 'none',
  },
  botom_modal_mobile: {
    display: 'none',
  },
  captcha: {
    position: 'absolute' as 'absolute',
    top: '0',
    right: '0',
  },

  '@media (max-width: 768px)': {
    container_header: {
      padding: '12px 16px',
      '&>div:nth-of-type(2)': {
        '&>div:nth-of-type(1)': {
          display: 'none',
        },
        '&>div:nth-of-type(2)': {
          display: 'none',
        }
      },

    },
    modalSidebar: {
      position: 'absolute' as 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '100vh',
      padding: '12px 16px',
      transform: 'translate(0, 0)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      border: 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      '&>div': {
        width: '100%',
      },
      '&>div:nth-of-type(3)': {
        width: '100%',
        margin: '20px 0',

      },
      '&>div:nth-of-type(5)': {
        height: '1px',
        width: '100%',
        margin: '20px 0',
      },
    },
    header_modal_mobile: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '32px',
      '&>div:nth-of-type(1)': {
        display: 'flex',
        gap: '16px',
        '&>div': {
          cursor: 'pointer',
          color: '#fff',
        }
      }
    },
    botom_modal_mobile: {
      marginTop: '32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      alignItems: 'center',
      '&>div:nth-of-type(1)': {
        display: 'flex',
        gap: '16px',
        '&>div': {
          cursor: 'pointer',
          backgroundColor: '#000',
          padding: '8px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '&>svg': {
            width: '24px',
            height: '24px',
          },
        },
      },
      '&>p': {
        margin: '0',
        padding: '0',
        color: '#A1A1AA',
        fontSize: '14px',
      },

    },
  },
})
interface IProps {
  handleButtonShow: (check: boolean) => void,
  isHome: boolean,
}
const Header = (props: IProps) => {
  const { handleButtonShow, isHome } = props

  const classes = useStyles()
  const location = useLocation()
  const { t } = useTranslation();
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const userProfile = useAppSelector(selectUserData)
  const today = new Date()
  const date = today.getFullYear()

  const [isShowSideBar, setIsShowSideBar] = useState(false)
  const [tokenFirebase, setTokenFirebase] = useState('')
  const [statusLogin, setStatusLogin] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [openModalMenu, setOpenModalMenu] = useState(false)
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
      // dispatch(userActions.getUser({ params: undefined }))
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
      // dispatch(userActions.getUser({ params: undefined }))
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
  console.log('lang: ', lang);


  const handleChangeSelect = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
    i18n.changeLanguage(event.target.value as string);
  }

  const handleClickLangMobile = (lang: string) => {
    setLang(lang);
    i18n.changeLanguage(lang);
  }

  const handleCloseModalMenu = () => {
    setOpenModalMenu(false)
  }

  const handleClickAbout = () => {
    setOpenModalMenu(false)
    navigate(ROUTE.ABOUT)
  }

  const handleClickContact = () => {
    setOpenModalMenu(false)
    navigate(ROUTE.CONTACT)
  }

  const handleClickArtist = () => {
    setOpenModalMenu(false)
    navigate(ROUTE.ARTIST)
  }

  const handleClickAudition = () => {
    setOpenModalMenu(false)
    navigate(ROUTE.AUDITION)
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Function to update isMobile state based on window width
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div
      className={classes.container_header}
      style={{
        background: isHome ? 'rgba(0, 0, 0, 0.32)' : 'white',
        display: (openModalMenu && isMobile) ? 'none' : 'flex',
      }}
    >
      <div onClick={() => navigate(ROUTE.HOME)} style={{ color: isHome ? 'white' : '#000' }}>
        {/* <img src={logo} alt="logo" /> */}
        <LogoIcon color={isHome ? '' : '#000'} />
        {t(`header:title`)}
      </div>
      <div>
        <div>
          <FbIcon onClick={() => { window.open('https://www.facebook.com/', '_blank') }} color={isHome ? '' : '#000'} />
          <InsIcon onClick={() => { window.open('https://www.instagram.com/', '_blank') }} color={isHome ? '' : '#000'} />
          <YtIcon onClick={() => { window.open('https://www.youtube.com/', '_blank') }} color={isHome ? '' : '#000'} />
          <TwitterIcon onClick={() => { window.open('https://www.twitter.com/', '_blank') }} color={isHome ? '' : '#000'} />
        </div>
        <div>
          <Select
            id="demo-select-small"
            value={lang}
            onChange={handleChangeSelect}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            size='small'
            className={classes.select}
            sx={{
              color: isHome ? '#fff' : '#000',
              '& .MuiSvgIcon-root.MuiSelect-iconOutlined': {
                color: isHome ? '#fff' : '#000', // Change the SVG icon color to white
              },
            }}
          // IconComponent={() => <ArrowDropDownIcon />}
          >
            <MenuItem value={'ko'}>KOR</MenuItem>
            <MenuItem value={'en'}>EN</MenuItem>
            <MenuItem value={'zh'}>CS</MenuItem>
            <MenuItem value={'ja'}>JP</MenuItem>
            <MenuItem value={'es'}>ES</MenuItem>
          </Select>
        </div>
        <img
          src={openModalMenu ? (isHome ? cancelWhite : cancel) : (isHome ? hamburgerMenu : hamburgerMenuBlack)}
          alt="polygon"
          onClick={() => { setOpenModalMenu(!openModalMenu); console.log('clicked menu') }}
        />
      </div>

      <Modal
        open={openModalMenu}
        onClose={handleCloseModalMenu}
        disableAutoFocus
        BackdropProps={{
          timeout: 500,
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.65)', // Set your desired color here
            backdropFilter: 'blur(1px)',
            // Add other styles as needed
          },
        }}
      >
        <div className={classes.modalSidebar}>
          <div className={classes.header_modal_mobile}>
            <div>
              <div style={{ color: lang === 'ko' ? '#00FFC2' : '#fff' }} onClick={() => handleClickLangMobile('ko')}>KOR</div>
              <div style={{ color: lang === 'en' ? '#00FFC2' : '#fff' }} onClick={() => handleClickLangMobile('en')}>EN</div>
              <div style={{ color: lang === 'zh' ? '#00FFC2' : '#fff' }} onClick={() => handleClickLangMobile('zh')}>CS</div>
              <div style={{ color: lang === 'ja' ? '#00FFC2' : '#fff' }} onClick={() => handleClickLangMobile('ja')}>JP</div>
              <div style={{ color: lang === 'es' ? '#00FFC2' : '#fff' }} onClick={() => handleClickLangMobile('es')}>ES</div>
            </div>
            <img src={cancelWhite} alt='' onClick={handleCloseModalMenu} />
          </div>
          <div>
            {t(`header:myIdolyMenu`)}
            <div>
              <p style={location.pathname === ROUTE.ABOUT ? { color: '#00FFC2' } : {}} onClick={handleClickAbout}>{t(`header:about`)}</p>
              <p style={location.pathname === ROUTE.CONTACT ? { color: '#00FFC2' } : {}} onClick={handleClickContact}>{t(`header:contact`)}</p>
            </div>
          </div>

          <div></div>

          <div>
            {t(`header:artistMenu`)}
            <div style={location.pathname === ROUTE.ARTIST ? { color: '#00FFC2' } : {}} onClick={handleClickArtist}>
              <p>{t(`header:artist`)}</p>
            </div>
          </div>

          <div></div>

          <div>
            {t(`header:auditionMenu`)}
            <div style={location.pathname === ROUTE.AUDITION ? { color: '#00FFC2' } : {}} onClick={handleClickAudition}>
              <p>{t(`header:auditionDetail`)}</p>
            </div>
          </div>

          <div className={classes.botom_modal_mobile}>
            <div>
              <div>
                <FbIcon onClick={() => { window.open('https://www.facebook.com/', '_blank') }} />
              </div>

              <div>
                <InsIcon onClick={() => { window.open('https://www.instagram.com/', '_blank') }} />
              </div>

              <div>
                <YtIcon onClick={() => { window.open('https://www.youtube.com/', '_blank') }} />
              </div>

              <div>
                <TwitterIcon onClick={() => { window.open('https://www.twitter.com/', '_blank') }} />
              </div>
            </div>
            <LogoIcon width='44' height='44' />
            <p>
              © {date} {t(`footer:allRightReserved`)}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Header
