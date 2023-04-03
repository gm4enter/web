import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import earth from '../../asset/images/earth.png'
import instaIcon from '../../asset/images/instagram.png'
import gitIcon from '../../asset/images/githubIcon.png'
import ytIcon from '../../asset/images/youtubeIcon.png'

const useStyles = makeStyles({
  footer_container: {
    background: '#FAFAFA',
    padding: '1rem 5rem',
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
        '&>div:nth-of-type(1)': {
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        },
        '&>div:nth-of-type(2)': {
          display: 'flex',
          alignItems: 'center',
          gap: '25px',
          '&>div': {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            '&>a': {
              height: '32px',
              width: '32px',
              '&img': {
                width: '32px',
                height: '32px',
              }
            }
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
              <a href=''>
                <img src={instaIcon} alt="instagram" />
              </a>
              <a href=''>
                <img src={gitIcon} alt="github" />
              </a>
              <a href=''>
                <img src={ytIcon} alt="youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
