import { makeStyles } from '@mui/styles'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../asset/images/logo.png'
import polygon from '../../asset/images/polygon.png'
import hamburgerMenu from '../../asset/images/HamburgerMenu.png'
import { ROUTE } from '../../router/routes'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../services/firebase'
import { LOGIN, USER } from '../../apis/urlConfig'
import axiosClient, { setTokens } from '../../apis/axiosClient'
import { UserType } from '../../types/user.type'
import { Modal } from '@mui/material'

const useStyles = makeStyles({
  container_header: {
    position: 'fixed',
    zIndex: 1000,
    top: 0,
    left: 0,
    right: 0,
    // height: 86,
    padding: '24px 100px',
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
        height: '56px',
        gap: '6px',
        paddingRight: '4px',
        alignItems: 'center',
        '&img': {
          width: '56px',
          height: '56px',
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
    '&>ul': {
      listStyle: 'none',
      display: 'flex',
      gap: '64px', padding: 0,
      margin: 0,
      fontSize: '18px',
      fontWeight: 500,
      '&>li': {
        cursor: 'pointer',
        '&:hover': {
          color: 'blue',
        },
      },
    },
    '&>:nth-child(3)': {
      '&>div': {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: '#fff',
        border: '1px solid #D0D5DD',
        borderRadius: '100px',
        fontSize: '18px',
        fontWeight: 500,
        padding: '4px 12px 4px 6px',
        '&>img:nth-child(1)': {
          width: '40px',
          height: '40px',
          borderRadius: '50%',
        },
        '&>img:nth-child(2)': {
          width: '32px',
          height: '32px',
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
  const classes = useStyles()
  const location = useLocation()
  const navigate = useNavigate()

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
    signInWithPopup(auth, provider)
      .then((data: any) => {
        setTokenFirebase(data.user.accessToken)
      })
      .catch((error: any) => {
        console.log(error)
      })
  }
  useLayoutEffect(() => {
    if (tokenFirebase) {
      const data = {
        firebaseToken: tokenFirebase,
      }
      axiosClient.post(LOGIN, data)
        .then((res: any) => {
          if (res.statusCode === 200) {
            setStatusLogin(true)
            localStorage.setItem('accessToken', res.data?.accessToken)
          }
          else {
            console.log('message: ', res.message);
          }
        })
        .catch((error: any) => {
          console.log(error)
        })
    }
  }, [tokenFirebase])

  useLayoutEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setTokens()
      axiosClient.get(USER)
        .then((res: { data: UserType }) => {
          if (res.data) {
            setUser(res.data)
          }
        })
        .catch((error: any) => {
          console.log(error)
        })
    }
  }, [statusLogin])


  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    })
  }, [])
  return (
    <div
      className={classes.container_header}
      style={{ background: scroll ? 'white' : 'white' }}
    >
      <div>
        <img src={hamburgerMenu} alt='' onClick={handleClick} />
        <div onClick={() => navigate(ROUTE.HOME)}>
          <img src={logo} alt="logo" />
          <div>
            GM4 Company
            <p>
              Solution
            </p>
          </div>
        </div>
      </div>
      <ul>
        <li onClick={() => console.log("ROUTE.HOME")}>About</li>
        <li onClick={() => navigate(ROUTE.DEPOSITANDHISTORY)}>Solution</li>
        <li onClick={() => console.log("ROUTE.PRICE")}>Price</li>
        <li onClick={() => navigate(ROUTE.CUSTOMERCENTER)}>Contact</li>
      </ul>
      <div>
        {user ? (
          <div onClick={handleClickMenuUser}>
            <img
              src={
                user?.photo
              }
              alt=''
            />
            <img src={hamburgerMenu} alt='' />
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
              <p>{user?.firstName} {user?.lastName}</p>
              <p>{user?.email}</p>
            </div>
          </div>
          <p>파트너 관리</p>
          <p>로그아웃</p>
        </div>
      </Modal>


    </div>
  )
}

export default Header
