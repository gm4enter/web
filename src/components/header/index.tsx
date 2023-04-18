import { makeStyles } from '@mui/styles'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../asset/images/logo.png'
import hamburgerMenu from '../../asset/images/HamburgerMenu.png'
import { ROUTE } from '../../router/routes'

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

  const handleClick = () => {
    setIsShowSideBar(!isShowSideBar)
    handleButtonShow(isShowSideBar)
  }
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
        <li onClick={() => console.log("ROUTE.CONTACT")}>Contact</li>
      </ul>
      <div>
        <div>
          <img
            src={
              'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
            }
            alt=''
          />
          <img src={hamburgerMenu} alt='' />
        </div>
        {/* {localStorage.getItem('accessToken') ? (
          <div>
            <img
              src={
                'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
              }
              alt=''
            />
          </div>

        ) : (
          <button onClick={() => navigate('/login')}>
            로그인
          </button>
        )} */}
      </div>

    </div>
  )
}

export default Header
