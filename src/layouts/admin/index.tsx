import { makeStyles } from '@mui/styles'
import React, { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../../components/footer'
import Header from '../../components/header'
import HeaderAdmin from '../../components/headerAdmin'
import Sidebar from '../../components/sidebar'
import SidebarMobile from '../../components/sidebar/mobile'
import useLang, { LANG } from '../../hooks/useLang'
interface Props {
  children: ReactNode
}

const useStyles = makeStyles({
  container_layout: {
    // marginTop: '104px',
  },
  container_admin_layout: {
    marginTop: '88px',
  },
  sidebar: {
    '&>div:nth-child(1)': {
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    '&>div:nth-child(2)': {
      '@media (min-width: 768px)': {
        display: 'none',
      },
    },
  },
})

const AdminLayout: React.FC<Props> = ({ children }) => {
  const classes = useStyles()
  const location = useLocation()
  const [isShowSidebar, setIsShowSidebar] = React.useState(false)


  const { changeLang } = useLang();

  //* Check lang
  React.useEffect(() => {
    console.log('check lang');

    const currentLang = localStorage.getItem(LANG);
    if (currentLang) {
      changeLang(currentLang);
    }
  }, [changeLang]);

  const handleButtonShow = (check: boolean) => {
    setIsShowSidebar(check)
  }

  return (
    <div className={(location.pathname === '/' || location.pathname.includes('/artistdetail/')) ? classes.container_layout : classes.container_admin_layout}>
      {<Header handleButtonShow={handleButtonShow} isHome={!!(location.pathname === '/') || !!(location.pathname.includes('/artistdetail/'))} />}
      {children}
      {!!(location.pathname !== '/' && !(location.pathname.includes('/artistdetail/'))) && <Footer />}
    </div>
  )
}

export default AdminLayout
