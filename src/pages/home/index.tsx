import { makeStyles } from '@mui/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import arowIconLandingPage from '../../asset/images/arowIconLandingPage.png'
import businessGlobalLandingPage from '../../asset/images/businessGlobalLandingPage.png'
import gmaLogoLandingPage from '../../asset/images/gmaLogoLandingPage.png'
import background from '../../asset/images/netBackground.png'


//Mobile: width < 740px
//Tablet: 740px < width < 1024px
//Desktop: width >=1024px

const useStyles = makeStyles({
  home_container: {
    marginLeft: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    height: 'calc(100vh - 104px - 88px)',
    backgroundImage: `url("${background}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    boxSizing: 'border-box',
    '&>div': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      '&>div:nth-of-type(1)': {
        '&>p:nth-of-type(1)': {
          fontSize: '46px', padding: 0, margin: 0, fontWeight: 500, lineHeight: '66px', color: '#272B30'
        },
        '&>p:nth-of-type(2)': {
          textTransform: "uppercase", fontSize: '68px', fontWeight: 900, lineHeight: '66px', padding: 0, margin: 0, color: '#272B30'
        },
        '&>div': {
          display: 'flex', gap: '12px', alignItems: 'center',
          '&>p:nth-of-type(1)': {
            textTransform: "uppercase", fontSize: '61px', fontWeight: 500, padding: 0, margin: 0, textAlign: 'center', color: '#272B30'
          },
          '&>img:nth-of-type(1)': {
            // width: '180px', height: '64px'
          },
        },
      },
      '&>img': {},
    },

  }
});

const Home = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  return (
    <div className={classes.home_container}>
      <div>
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
      <img src={businessGlobalLandingPage} alt='' />
    </div>
  )
}

export default Home
