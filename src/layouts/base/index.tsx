import { makeStyles } from '@mui/styles'
import React, { ReactNode } from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
interface Props {
  children: ReactNode
}

const useStyles = makeStyles({
  container_layout: {
    // '&>div': {
    //   marginTop: '104px'
    // }
  },
})

const BaseLayout: React.FC<Props> = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.container_layout}>
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default BaseLayout
