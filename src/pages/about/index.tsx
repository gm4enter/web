import { makeStyles } from '@mui/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import arowIconLandingPage from '../../asset/images/arowIconLandingPage.png'
import businessGlobalLandingPage from '../../asset/images/businessGlobalLandingPage.png'
import gmaLogoLandingPage from '../../asset/images/gmaLogoLandingPage.png'
import background from '../../asset/images/netBackground.png'
import { ROUTE } from '../../router/routes'



//Mobile: width < 768px
//Tablet: 768px < width < 1024px
//Desktop: width >=1024px

const useStyles = makeStyles({
  home_container: {
    // height: 'calc(100vh - 124px - 88px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '55px',
    padding: '16px 80px',
    '&>div:nth-of-type(1)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '34px',
      '&>div': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        '&>p': {
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#A1A1AA',
          margin: '0',
          padding: '0',
        },
        '&>div': {
          width: '100%',
          height: '1px',
          backgroundColor: '#18181B',
        },
      },
    },
    '&>div:nth-of-type(2)': {
      display: 'flex',
      gap: '44px',
      '&>div:nth-of-type(1)': {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        '&>div': {
          display: 'flex',
          flexDirection: 'column',
          '&>div:nth-of-type(1)': {
            width: '302px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '80px',
            color: '#18181B',
            fontWeight: 'bold',
            padding: '0 8px',
            '&>div:nth-of-type(1)': {
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              '&>p': {
                margin: '0',
                padding: '0',
              },
              '&>p:nth-of-type(1)': {
                fontSize: '20px',
                color: "#18181B",
                fontWeight: 'bold',
              },
              '&>p:nth-of-type(2)': {
                fontSize: '14px',
                color: '#71717A',
                fontWeight: '400',

              }
            },
          },

          '&>img': {
            width: '318px',
            height: '240px',
            borderRadius: '12px',
            marginTop: '-16px'
          },
        },
        '&>div:nth-of-type(2)': {
          marginLeft: 'auto',
        },
      },
      '&>div:nth-of-type(2)': {
        flex: 1,
        color: '#18181B',
        fontSize: '60px',
        fontWeight: 'bold',
        '&>div:nth-of-type(1)': {
          marginTop: '16px',
          height: '9px',
          width: '77px',
          backgroundColor: '#00CFDE',
        },
        '&>div:nth-of-type(2)': {
          marginTop: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          '&>p': {
            margin: '0',
            padding: '0',
            color: '#27272A',
            fontSize: '16px',
            fontWeight: '400',
          },
        },
      },
    },
  },
  '@media (max-width: 768px)': {
    home_container: {
      padding: '16px 16px 64px 16px',
      '&>div:nth-of-type(1)': {
        gap: '24px',
        '&>div': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          '&>p': {
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#A1A1AA',
            margin: '0',
            padding: '0',
          },
          '&>div': {
            width: '100%',
            height: '1px',
            backgroundColor: '#18181B',
          },
        },
      },
      '&>div:nth-of-type(2)': {
        flexDirection: 'column',
        '&>div:nth-of-type(1)': {
          order: 2,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          '&>div': {
            display: 'flex',
            flexDirection: 'column',
            '&>div:nth-of-type(1)': {
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '80px',
              color: '#18181B',
              fontWeight: 'bold',
              padding: '0 8px',
              '&>div:nth-of-type(1)': {
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                '&>p': {
                  margin: '0',
                  padding: '0',
                },
                '&>p:nth-of-type(1)': {
                  fontSize: '20px',
                  color: "#18181B",
                  fontWeight: 'bold',
                },
                '&>p:nth-of-type(2)': {
                  fontSize: '14px',
                  color: '#71717A',
                  fontWeight: '400',

                }
              },
            },
            '&>img': {
              width: '100%',
              height: '240px',
              borderRadius: '12px',
              marginTop: '-16px'
            },
          },
          '&>div:nth-of-type(2)': {
            marginLeft: '0',
          },
        },
        '&>div:nth-of-type(2)': {
          fontSize: '36px',
        },
      },
      '&>div:nth-of-type(3)': {
        padding: '0 16px',
        '&>div:nth-of-type(2)': {
          width: '100%',
        },
      }
    },
  },
});

const About = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  const handleClickAbout = () => {
    navigate(ROUTE.ABOUT)
  }

  const handleClickContact = () => {
    navigate(ROUTE.CONTACT)
  }

  return (
    <div className={classes.home_container}>
      <div>
        <div onClick={handleClickAbout}>
          <p style={{ color: '#18181B', }}>About</p>
          <div />
        </div>
        <div onClick={handleClickContact}>
          <p>Contact</p>
          <div style={{ opacity: 0 }} />
        </div>
      </div>

      <div>
        <div>
          <div>
            <div>
              <div>
                <p>Bigbang</p>
                <p>Musical groups</p>
              </div>
              01
            </div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDM7dr5bsXNMYlR3qayHNHMWqiZkdzB8RVw&usqp=CAU' alt='' />
          </div>

          <div>
            <div>
              <div>
                <p>Jaypark</p>
                <p>Solo singer</p>
              </div>
              02
            </div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDM7dr5bsXNMYlR3qayHNHMWqiZkdzB8RVw&usqp=CAU' alt='' />
          </div>

          <div>
            <div>
              <div>
                <p>SNSD</p>
                <p>Musical groups</p>
              </div>
              03
            </div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDM7dr5bsXNMYlR3qayHNHMWqiZkdzB8RVw&usqp=CAU' alt='' />
          </div>

        </div>

        <div>
          Leader In Entertainment.
          <div />
          <div>
            <p>YP엔터테인먼트가 추구해 온 가치이자 목표입니다.JYP엔터테인먼트는 이를 모토로 엔터테인먼트 산업의 변화를 선도하는 기업이 되기 위해 최선을 다 해왔습니다.</p>
            <p>JYP엔터테인먼트는 아시아 최고 프로듀서 박진영을 필두로 국내에서 god, 비, 원더걸스, 2PM, 2AM, miss A, GOT7, DAY6, TWICE, Stray Kids, ITZY, Xdinary Heroes, NMIXX를, 일본에서 NiziU, 중국에서는 BOY STORY, YAOCHEN에 이르기까지 글로벌을 대표하는 최고의 아티스트를 배출했습니다.</p>
            <p>YP엔터테인먼트가 추구해 온 가치이자 목표입니다.JYP엔터테인먼트는 이를 모토로 엔터테인먼트 산업의 변화를 선도하는 기업이 되기 위해 최선을 다 해왔습니다.</p>
            <p>YP엔터테인먼트가 추구해 온 가치이자 목표입니다.JYP엔터테인먼트는 이를 모토로 엔터테인먼트 산업의 변화를 선도하는 기업이 되기 위해 최선을 다 해왔습니다.</p>
            <p>YP엔터테인먼트가 추구해 온 가치이자 목표입니다.JYP엔터테인먼트는 이를 모토로 엔터테인먼트 산업의 변화를 선도하는 기업이 되기 위해 최선을 다 해왔습니다.</p>
            <p>YP엔터테인먼트가 추구해 온 가치이자 목표입니다.JYP엔터테인먼트는 이를 모토로 엔터테인먼트 산업의 변화를 선도하는 기업이 되기 위해 최선을 다 해왔습니다.</p>
            <p>YP엔터테인먼트가 추구해 온 가치이자 목표입니다.JYP엔터테인먼트는 이를 모토로 엔터테인먼트 산업의 변화를 선도하는 기업이 되기 위해 최선을 다 해왔습니다.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
