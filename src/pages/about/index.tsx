import { makeStyles } from '@mui/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import arowIconLandingPage from '../../asset/images/arowIconLandingPage.png'
import businessGlobalLandingPage from '../../asset/images/businessGlobalLandingPage.png'
import gmaLogoLandingPage from '../../asset/images/gmaLogoLandingPage.png'
import background from '../../asset/images/netBackground.png'


//Mobile: width < 768px
//Tablet: 768px < width < 1024px
//Desktop: width >=1024px

const useStyles = makeStyles({
  home_container: {
    height: 'calc(100vh - 104px - 88px)',
    boxSizing: 'border-box',
  },
});

const About = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  return (
    <div className={classes.home_container}>
      <div>
        <div>
          <p>About</p>
          <div>----------</div>
        </div>
        <div>
          <p>Contact</p>
          <div>----------</div>
        </div>
      </div>

      <div>
        
      </div>

      <div>

      </div>
    </div>
  )
}

export default About
