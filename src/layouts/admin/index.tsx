import { makeStyles } from '@mui/styles'
import React, { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../../components/footer'
import Header from '../../components/header'
import HeaderAdmin from '../../components/headerAdmin'
import Sidebar from '../../components/sidebar'
import SidebarMobile from '../../components/sidebar/mobile'
interface Props {
  children: ReactNode
}

const useStyles = makeStyles({
  container_layout: {
    marginTop: '104px',
  },
  container_admin_layout: {
    marginTop: '76px',
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

  const handleButtonShow = (check: boolean) => {
    setIsShowSidebar(check)
  }
  const checkLayout = () => {
    if (location.pathname === '/') {
      return (
        <div className={classes.container_layout}>
          <Header handleButtonShow={handleButtonShow} />
          <SidebarMobile isOpen={isShowSidebar} dataHeader />
          {children}
          <Footer />
        </div>
      )
    } else {
      return (
        <div className={classes.container_admin_layout}>
          <HeaderAdmin handleButtonShow={handleButtonShow} />
          <div style={{ display: 'flex' }}>
            <div className="sidebar">
              <Sidebar isOpen={isShowSidebar} />
              <SidebarMobile isOpen={isShowSidebar} />
            </div>

            <div style={{ flex: 1 }}>{children}</div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className={(location.pathname === '/' || location.pathname === '/price') ? classes.container_layout : classes.container_admin_layout}>
      {(location.pathname === '/' || location.pathname === '/price') ? <Header handleButtonShow={handleButtonShow} /> : <HeaderAdmin handleButtonShow={handleButtonShow} />}
      <div style={{ display: 'flex' }}>
        <div className="sidebar">
          {!(location.pathname === '/' || location.pathname === '/price') && <Sidebar isOpen={isShowSidebar} />}
          <SidebarMobile isOpen={isShowSidebar} dataHeader={(location.pathname === '/' || location.pathname === '/price') ? true : false} />
        </div>
        <div style={{ flex: 1 }}>
          {children}
        </div>
      </div>
      {!!(location.pathname === '/') && <Footer />}
    </div>
  )
}

export default AdminLayout
