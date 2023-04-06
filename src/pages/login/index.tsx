import { makeStyles } from '@mui/styles'
import React from 'react'
import naver from '../../asset/images/naver.png'
import kakao from '../../asset/images/kakao.png'
import google from '../../asset/images/google.png'

const useStyles = makeStyles({
  login_container: {
    height: 'calc(100vh - 86px - 139px)',
    width: '100%',
    background: '#F1F1F1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&>div': {
      padding: '2rem',
      background: 'white',
      width: '535px',
      borderRadius: '16px',
      '&>p:nth-of-type(1)': {
        textAlign: 'center',
        fontWeight: 700,
        fontSize: '28px',
        background: 'white',
      },
      '&>p': {
        fontWeight: 400,
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        background: '#F1F1F1',
        padding: '10px 32px',
        borderRadius: '8px',
        justifyContent: 'center',
        '&>img': {
          width: '44px',
          height: '44px',
          marginRight: '1rem',
        },
      },
    },
  },
})

const Login = () => {
  const classes = useStyles()
  return (
    <div className={classes.login_container}>
      <div>
        <p>로그인</p>
        <p>
          <img src={naver} alt='' /> 네이버로 로그인
        </p>
        <p>
          <img src={kakao} alt='' />
          카카오로 로그인
        </p>
        <p>
          <img src={google} alt='' />
          구글로 로그인
        </p>
      </div>
    </div>
  )
}

export default Login
