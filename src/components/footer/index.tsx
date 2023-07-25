
import React from 'react'
import LogoIcon from '../../asset/icons/logo'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
  footer_container: {
    background: '#FFFFFF',
    padding: '40px 80px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      padding: '1rem',
    },

    '&>p': {
      fontSize: '16px',
      fontWeight: 400,
      color: '#71717A',
      margin: 0,
      padding: 0,
    },
    '&>p:nth-of-type(1)': {
      width: '366px',
    },
    // '&>svg': {
    //   position: 'absolute',
    //   left: '50%',
    // },
  },
})

const Footer = () => {
  const classes = useStyles()
  const { t } = useTranslation();
  const today = new Date()
  const date = today.getFullYear()
  return (
    <div className={classes.footer_container}>
      <p>
        {t(`footer:document`)}
      </p>
      <LogoIcon color='#000' width='44' height='44' />
      <p>
        © {date} {t(`footer:allRightReserved`)}
      </p>
    </div>
  )
}

export default Footer
