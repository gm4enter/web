import { makeStyles } from '@mui/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import arowIconLandingPage from '../../asset/images/arowIconLandingPage.png'
import businessGlobalLandingPage from '../../asset/images/businessGlobalLandingPage.png'
import gmaLogoLandingPage from '../../asset/images/gmaLogoLandingPage.png'
import background from '../../asset/images/netBackground.png'
import AutoScrollHome from './components/AutoScrollHome'


//Mobile: width < 768px
//Tablet: 768px < width < 1024px
//Desktop: width >=1024px

const useStyles = makeStyles({
  home_container: {
  },
});

const Home = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  return (
    <div className={classes.home_container}>
      {/* <div>
        <div>
          <p>Fast - Simple - Optimal</p>
          <p>technology</p>
          <div>
            <p>Solution</p>
            <img src={arowIconLandingPage} alt='' />
          </div>
        </div>
        <img src={gmaLogoLandingPage} alt='' />
      </div>
      <div>
        <img src={businessGlobalLandingPage} alt='' />
      </div>
      <div>
        <img src={gmaLogoLandingPage} alt='' />
      </div> */}
      <AutoScrollHome />
    </div>
  )
}

export default Home
