import { makeStyles } from '@mui/styles'
import React, { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../../components/footer'
import Header from '../../components/header'
import HeaderAdmin from '../../components/headerAdmin'
import Sidebar from '../../components/sidebar'
import BaseLayout from '../base'
interface Props {
  children: ReactNode
}

const useStyles = makeStyles({
  container_layout: {
    marginTop: '76px',
  },
  container_admin_layout: {
  },
})

const AdminLayout: React.FC<Props> = ({ children }) => {
  const classes = useStyles()
  const location = useLocation()
  const checkLayout = () => {
    if (location.pathname === '/') {
      return (
        <div className={classes.container_layout}>
          <Header />
          {children}
          <Footer />
        </div>
      )
    }
    else {
      return (
        <div className={classes.container_layout}>
          <HeaderAdmin />
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '256px', flex: 1 }}>
              {children}
            </div>
          </div>
        </div>
      )
    }
  } 
  return (
    checkLayout()
  )
}

export default AdminLayout
