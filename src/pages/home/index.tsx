import { makeStyles } from '@mui/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import arowIconLandingPage from '../../asset/images/arowIconLandingPage.png'
import businessGlobalLandingPage from '../../asset/images/businessGlobalLandingPage.png'
import gmaLogoLandingPage from '../../asset/images/gmaLogoLandingPage.png'
import background from '../../asset/images/netBackground.png'

const useStyles = makeStyles({
  home_container: {
    marginTop: '-50px',
    marginLeft: '100px',
    '&>div:nth-of-type(1)': {
      // width: '100%',
      backgroundImage: `url("${background}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      boxSizing: 'border-box',
    },
  }
});

const Home = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  return (
    <div className={classes.home_container}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ position: 'relative' }} >
          <div style={{ marginTop: '162px' }}>
            <p style={{ fontSize: '46px', padding: 0, margin: 0, fontWeight: 500, lineHeight: '66px', color: '#272B30' }}>Fast - Simple - Optimal</p>
            <p style={{ textTransform: "uppercase", fontSize: '68px', fontWeight: 900, lineHeight: '66px', padding: 0, margin: 0, }}>technology</p>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <p style={{ textTransform: "uppercase", fontSize: '61px', fontWeight: 500, padding: 0, margin: 0, textAlign: 'center' }}>Solution</p>
              <img
                style={{ width: '180px', height: '64px' }} src={arowIconLandingPage} alt='' />
            </div>
          </div>
          <img style={{ height: '137px', width: '139px', position: 'absolute', left: '187px', bottom: '106px' }} src={gmaLogoLandingPage} alt='' />
        </div>
        <img style={{ height: '724px', width: '736px', margin: '63px 63px 33px 0 ' }} src={businessGlobalLandingPage} alt='' />
      </div>
    </div>
  )
}

export default Home
