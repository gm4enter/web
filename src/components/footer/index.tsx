
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
    '&>p:nth-of-type(2)': {
      display: 'none'
    },
    // '&>svg': {
    //   position: 'absolute',
    //   left: '50%',
    // },
    '@media (max-width: 768px)': {
      padding: '1rem',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',

      '&>p': {
        fontSize: '14px',
        color: '#71717A',
      },

      '&>p:nth-of-type(1)': {
        display: 'none',
      },
      '&>p:nth-of-type(2)': {
        display: 'block',
        margin: '24px 0 1rem 0',
      },
    },
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
        {t(`footer:document`)}
      </p>
      <p>
        © {date} {t(`footer:allRightReserved`)}
      </p>
    </div>
  )
}

export default Footer
