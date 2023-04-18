
import React from 'react'
import earth from '../../asset/images/earth.png'
import instaIcon from '../../asset/images/instagram.png'
import gitIcon from '../../asset/images/githubIcon.png'
import ytIcon from '../../asset/images/youtubeIcon.png'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  footer_container: {
    background: '#FAFAFA',
    padding: '1rem 5rem',
    '@media (max-width: 768px)': {
      padding: '1rem',
    },
    '&>div:nth-of-type(1)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      '&>div:nth-of-type(1)': {
        display: 'flex',
        alignItems: 'center',
        fontSize: 18,
        gap: '16px',
        fontWeight: 500,
        '@media (max-width: 768px)': {
          alignItems: 'flex-start',
          flexDirection: 'column',
          fontSize: 12,
        },
        '&>ul': {
          display: 'flex',
          padding: '0',
          margin: '0',
          gap: '11px',
          '&>li': {
            marginLeft: '2rem',
            fontWeight: 500,
            fontSize: '18px',
          },
          '@media (max-width: 768px)': {
            fontSize: 12,
            gap: '4px',
            '&>li': {
              fontWeight: 500,
              fontSize: '12px',
              marginLeft: '1rem',
            },
          },
        },
      },
      '&>div:nth-of-type(2)': {
        display: 'flex',
        padding: '0',
        margin: '0',
        gap: '24px',
        alignItems: 'center',
        fontWeight: 500,
        fontSize: '18px',
        '@media (max-width: 768px)': {
          flexDirection: 'column',
          fontSize: 12,
          alignItems: 'flex-end',
        },
        '&>div:nth-of-type(1)': {
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          '@media (max-width: 768px)': {
            gap: '4px',
            '&>img': {
              height: '20px',
              width: '20px',
            },
          },
        },
        '&>div:nth-of-type(2)': {
          display: 'flex',
          alignItems: 'center',
          gap: '25px',

          '&>div': {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            '&img': {
              width: '32px',
              height: '32px',
            },
          },
          '@media (max-width: 768px)': {
            gap: '8px',
            '&>div': {
              '&>img': {
                width: '20px',
                height: '20px',
              },
            },
          },
        },
      },
    },
  },
})

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.footer_container}>
      <div>
        <div>
          © GM4 Company 2023
          <ul>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
        <div>
          <div>
            <img src={earth} alt="earth" />
            English (ENG)
          </div>
          <div>
            Follow us on
            <div>
              <img src={instaIcon} alt="instagram" onClick={() => { }} />
              <img src={gitIcon} alt="github" onClick={() => { }} />
              <img src={ytIcon} alt="youtube" onClick={() => { }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
