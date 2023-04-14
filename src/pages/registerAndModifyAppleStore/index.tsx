import {FormControlLabel, Radio, RadioGroup} from '@mui/material'
import {makeStyles} from '@mui/styles'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import iconBack from '../../asset/images/iconBack.png'
import infoCircle from '../../asset/images/iconInfoCircle.png'
import iconQuestion from '../../asset/images/iconQuestion.png'
import {InputColor} from '../../components/base/InputColor'
import {Input} from '../../components/base/input/Input'
import {InputuploadImage} from '../../components/base/input/InputuploadImage'
import {ROUTE} from '../../router/routes'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'

const useStyles = makeStyles({
  container: {
    padding: '24px',
    '@media (max-width: 780px)': {
      padding: '16px',
    },
    '&>div:nth-of-type(1)': {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      '&>img': {height: '24px', width: '24px'},
      '&>p': {padding: 0, margin: 0, fontSize: '18px', fontWeight: 500},
      '@media (max-width: 780px)': {'&>p': {fontSize: '16px'}},
    },
    '&>div:nth-of-type(2)': {
      backgroundColor: 'rgba(235, 243, 255, 0.24)',
      border: '1px solid rgba(112, 119, 127, 0.2)',
      borderRadius: '4px',
      padding: '24px',
      marginTop: '24px',
      '&>div:nth-of-type(1)': {
        '&>div:nth-of-type(1)': {
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          '&>img': {height: '24px', width: '24px'},
          '&>p': {padding: 0, margin: 0, fontSize: '16px', fontWeight: 500},
        },
        '&>p:nth-of-type(1)': {
          padding: 0,
          margin: '10px 0 0 0',
          fontSize: '14px',
          fontWeight: 400,
        },
        '&>ul': {
          margin: 0,
          padding: '0 0 0 24px',
          fontSize: '14px',
          fontWeight: 400,
        },
        '&>p:nth-of-type(2)': {
          padding: 0,
          margin: 0,
          fontSize: '14px',
          fontWeight: 400,
          '&>a': {textDecoration: 'none', color: '#2B83FE'},
        },
      },
      '&>div:nth-of-type(2)': {
        display: 'none',
      },
      '@media (max-width: 780px)': {
        padding: '0',
        borderRadius: '0',
        '&>div:nth-of-type(1)': {
          display: 'none',
        },
        '&>div:nth-of-type(2)': {
          display: 'initial',
        },
      },
    },
    '&>div:nth-of-type(3)': {
      backgroundColor: 'rgba(238, 242, 242, 0.4)',
      borderLeft: '3px solid #2B83FE',
      padding: '24px',
      marginTop: '16px',
      '&>p': {padding: 0, margin: 0, fontSize: '14px', fontWeight: 400},
      '@media (max-width: 780px)': {
        padding: '12px',
        '&>p': {
          fontWeight: 400,
          fontSize: '12px',
        },
      },
    },
    '&>div:nth-of-type(4)': {
      marginTop: '16px',
      padding: '24px',
      borderRadius: '12px',
      border: '1px solid #D0D5DD',
      '&>p:nth-of-type(1)': {
        padding: 0,
        margin: 0,
        fontSize: '16px',
        fontWeight: 500,
      },
      '&>div': {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '32px',
        gap: '44px',
        marginTop: '24px',
        '&>div:nth-of-type(1)': {
          display: 'flex',
          width: '190px',
          gap: '4px',
          alignItems: 'center',
          // justifyContent: 'flex-end',
          '&>p': {
            padding: 0,
            margin: 0,
            fontSize: '14px',
            fontWeight: 500,
            color: '#272B30',
          },
          '&>img': {height: '16px', width: '16px'},
        },
      },
      '&>div:nth-of-type(1)': {marginTop: '24px'},
      '&>div:nth-of-type(2)': {marginTop: '24px'},
      '&>div:nth-of-type(3)': {marginTop: '16px'},
      '&>div:nth-of-type(4)': {marginTop: '16px'},
      '&>div:nth-of-type(5)': {marginTop: '16px'},
      '&>div:nth-of-type(6)': {marginTop: '16px'},
      '@media (max-width: 780px)': {
        padding: '0',
        border: 'none',
        '&>div': {
          display: 'initial',
          // '&>div:nth-of-type(1)': {
          //   display: 'initial',
          // },
          '&>div:nth-of-type(1)': {
            // display: 'initial',
            // justifyContent: 'start',
            marginBottom: '6px',
          },
        },
      },
    },
    '&>div:nth-of-type(5)': {
      marginTop: '16px',
      padding: '24px',
      borderRadius: '12px',
      border: '1px solid #D0D5DD',
      '&>p:nth-of-type(1)': {
        padding: 0,
        margin: 0,
        fontSize: '16px',
        fontWeight: 500,
      },
      '&>div': {
        display: 'flex',
        gap: '16px',
        marginTop: '24px',
        '&>div': {
          width: '50%',
          '&>div': {
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
            '&>p': {
              padding: 0,
              margin: 0,
              fontSize: '14px',
              fontWeight: 500,
              color: '#272B30',
            },
            '&>img': {height: '18px', width: '18px'},
          },
          '&>p': {
            padding: 0,
            margin: '8px 0 0 0',
            fontSize: '14px',
            fontWeight: 400,
            color: '#70777F',
          },
        },
      },
      '@media (max-width: 780px)': {
        padding: '0',
        border: 'none',
        '&>div:nth-of-type(1)': {
          display: 'initial',
          '&>div:nth-of-type(1)': {
            width: '100%',
            marginTop: '1rem',
          },
          '&>div:nth-of-type(2)': {
            width: '100%',
            marginTop: '1rem',
          },
        },
        '&>div:nth-of-type(2)': {
          '&>p:nth-of-type(3)': {
            borderBottom: '1px solid #D0D5DD',
            paddingBottom: '1rem',
            marginBottom: '0',
          },
        },

        '&>button': {
          width: '100%',
          height: '44px',
        },
      },
    },
    '&>div:nth-of-type(6)': {
      marginTop: '16px',
      padding: '24px',
      borderRadius: '12px',
      border: '1px solid #D0D5DD',
      '&>p:nth-of-type(1)': {
        padding: 0,
        margin: 0,
        fontSize: '14px',
        fontWeight: 500,
        color: '#111315',
      },
      '&>div': {
        marginTop: '12px',
        '&>p': {
          padding: 0,
          margin: '0 0 12px 0',
          fontSize: '14px',
          fontWeight: 500,
        },
      },
      '&>button': {
        marginTop: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        backgroundColor: '#2B83FE',
        padding: '8px 24px',
        textAlign: 'center',
        '&>p': {
          padding: 0,
          margin: 0,
          fontSize: '16px',
          fontWeight: 500,
          color: '#fff',
        },
      },
      '@media (max-width: 780px)': {
        padding: '0px',
        border: 'none',
        '&>button': {
          width: '100%',
          height: '44px',
        },
      },
    },
  },
  typography_container: {
    '&>p': {
      margin: 0,
      fontWeight: 400,
      fontSize: '12px',
    },
    '&>ul': {
      fontWeight: 400,
      fontSize: '12px',
      marginLeft: '0px',
      paddingLeft: '19px',
    },
    '&>p:nth-of-type(2)': {
      margin: 0,
      fontSize: '12px',
      fontWeight: 400,
      '&>a': {textDecoration: 'none', color: '#2B83FE'},
    },
  },
})

function RegisterAndModifyAppleStore() {
  const navigate = useNavigate()
  const classes = useStyles()
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const [value5, setValue5] = useState('')
  const [value6, setValue6] = useState('')
  return (
    <div className={classes.container}>
      <div>
        <img
          src={iconBack}
          onClick={() => {
            navigate(-1)
          }}
          alt=''
        />
        <p>앱스토어 등록 및 수정</p>
      </div>
      <div>
        <div>
          <div>
            <img src={infoCircle} alt='' />
            <p>주의</p>
          </div>
          <p>
            iOS용 앱은 Apple App Store에 등록하기 위해 Apple의 심사를 받아야
            합니다. Apple의 정책에 의해 거절될 수 있으며 자주 발생하는 유형은
            다음과 같습니다.
          </p>
          <ul>
            <li>
              타사 플랫폼 언급 : 내 사이트에 Apple 플랫폼 외의 Android, Google
              Play 등과 관련된 문구나 이미지가 포함되면 심사에 거절될 수
              있습니다. 안드로이드가 탑재된 기기(예: 갤럭시S7)의 이미지 사용도
              거절 사유가 될 수 있습니다.
            </li>
            <li>
              앱 내 구매 : 디지털 상품, 이용권 등 비실물 상품을 앱 내에서 판매할
              경우 등록 거절 사유가 됩니다. (실물 상품을 판매하는 쇼핑몰은
              문제되지 않습니다.)
            </li>
            <li>
              사행성 콘텐츠 : 도박 등 사행성 콘텐츠가 포함된 사이트는 등록 거절
              사유가 됩니다.
            </li>
            <li>
              저작권/상표권 침해 : 허가받지 않은 타사의 상표를 콘텐츠에
              포함시키거나 저작권을 위반한 콘텐츠가 포함될 경우 등록 거절 사유가
              됩니다.
            </li>
            <li>
              개인정보수집 : 과도한 개인정보를 수집하는 사이트는 등록 거절
              사유가 됩니다.
            </li>
            <li>
              부정확한 설명 : 제출한 스크린샷이나 설명이 앱과 관계가 없거나
              충분하지 않은 경우 거절 사유가 됩니다.
            </li>
            <li>
              컨테이너 앱 : 사이트 구성이 단순 회사소개거나 일반 앱 사용자가
              활동할 수 있는 컨텐츠가 부족할 경우 등록이 제한 됩니다.
            </li>
          </ul>

          <p>
            보다 자세한 사항은
            <a href='#'> Apple App Store 앱 심사 지침 </a>을 참고하시기
            바랍니다.
          </p>
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography
              display={'flex'}
              alignItems={'center'}
              fontSize={'14px'}
            >
              <img
                style={{width: '20x', height: '20px'}}
                src={infoCircle}
                alt=''
              />
              &nbsp; 주의
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div className={classes.typography_container}>
                <p>
                  iOS용 앱은 Apple App Store에 등록하기 위해 Apple의 심사를
                  받아야 합니다. Apple의 정책에 의해 거절될 수 있으며 자주
                  발생하는 유형은 다음과 같습니다.
                </p>
                <ul>
                  <li>
                    타사 플랫폼 언급 : 내 사이트에 Apple 플랫폼 외의 Android,
                    Google Play 등과 관련된 문구나 이미지가 포함되면 심사에
                    거절될 수 있습니다. 안드로이드가 탑재된 기기(예: 갤럭시S7)의
                    이미지 사용도 거절 사유가 될 수 있습니다.
                  </li>
                  <li>
                    앱 내 구매 : 디지털 상품, 이용권 등 비실물 상품을 앱 내에서
                    판매할 경우 등록 거절 사유가 됩니다. (실물 상품을 판매하는
                    쇼핑몰은 문제되지 않습니다.)
                  </li>
                  <li>
                    사행성 콘텐츠 : 도박 등 사행성 콘텐츠가 포함된 사이트는 등록
                    거절 사유가 됩니다.
                  </li>
                  <li>
                    저작권/상표권 침해 : 허가받지 않은 타사의 상표를 콘텐츠에
                    포함시키거나 저작권을 위반한 콘텐츠가 포함될 경우 등록 거절
                    사유가 됩니다.
                  </li>
                  <li>
                    개인정보수집 : 과도한 개인정보를 수집하는 사이트는 등록 거절
                    사유가 됩니다.
                  </li>
                  <li>
                    부정확한 설명 : 제출한 스크린샷이나 설명이 앱과 관계가
                    없거나 충분하지 않은 경우 거절 사유가 됩니다.
                  </li>
                  <li>
                    컨테이너 앱 : 사이트 구성이 단순 회사소개거나 일반 앱
                    사용자가 활동할 수 있는 컨텐츠가 부족할 경우 등록이 제한
                    됩니다.
                  </li>
                </ul>

                <p>
                  보다 자세한 사항은
                  <a href='#'> Apple App Store 앱 심사 지침 </a>을 참고하시기
                  바랍니다.
                </p>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <p>
          Apple App Store 심사는 신청일로부터 약 10영업일이 소요될 수 있습니다.
        </p>
        <p>
          파트너도 앞으로 앱 신청/업데이트시 개별 Apple 개발자 계정이
          필요합니다.
        </p>
      </div>
      <div>
        <p>개발자 정보</p>
        <div>
          <div>
            <p>Apple 개발자 계정</p>
            <img src={iconQuestion} alt='' />
          </div>
          <Input
            placeholder='입력해주세요.'
            value={value1}
            onChange={(e) => {
              setValue1(e.target.value)
            }}
          />
        </div>
        <div>
          <div>
            <p>Apple 개발자 계정 비밀번호</p>
            <img src={iconQuestion} alt='' />
          </div>
          <Input
            placeholder='입력해주세요.'
            value={value2}
            onChange={(e) => {
              setValue2(e.target.value)
            }}
          />
        </div>
        <div>
          <div>
            <p>클라이언트 담당자 연락처</p>
            <img src={iconQuestion} />
          </div>
          <Input
            placeholder='입력해주세요.'
            value={value3}
            onChange={(e) => {
              setValue3(e.target.value)
            }}
          />
        </div>
        <div>
          <div>
            <p>앱 제목</p>
            <img src={iconQuestion} alt='' />
          </div>
          <Input
            placeholder='입력해주세요.'
            value={value4}
            onChange={(e) => {
              setValue4(e.target.value)
            }}
          />
        </div>
        <div>
          <div>
            <p>앱 설명</p>
            <img src={iconQuestion} alt='' />
          </div>
          <Input
            placeholder='입력해주세요.'
            value={value5}
            onChange={(e) => {
              setValue5(e.target.value)
            }}
          />
        </div>
        <div>
          <div>
            <p>검색키워드</p>
            <img src={iconQuestion} alt='' />
          </div>
          <Input
            placeholder='예시)맛집,강남맛집,논현맛집,강남샐러드'
            value={value6}
            onChange={(e) => {
              setValue6(e.target.value)
            }}
          />
        </div>
      </div>
      <div>
        <p>그래픽 저작물</p>
        <div>
          <div>
            <div>
              <p>고해상도 아이콘 가로세로 1024x1024</p>
              <img src={iconQuestion} alt='' />
            </div>
            <p>32비트 PNG(알파 없음), 모서리는 자동으로 둥글게 처리됩니다.</p>
            <InputuploadImage
              type='1024'
              containerStyle={{marginTop: '16px'}}
            />
          </div>

          <div>
            <div>
              <p>시작화면 가로세로 640x960</p>
              <img src={iconQuestion} alt='' />
            </div>
            <p>JPG또는 24비트 PNG(알파 없음)</p>
            <InputuploadImage type='640' containerStyle={{marginTop: '16px'}} />
          </div>
        </div>
      </div>
      <div>
        <p>상단 상태바 글자색상</p>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='흰색'
          name='radio-buttons-group'
          sx={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            marginTop: '12px',
          }}
          row
        >
          <FormControlLabel value='흰색' control={<Radio />} label='흰색' />
          <FormControlLabel value='검정색' control={<Radio />} label='검정색' />
        </RadioGroup>
        <div style={{}}>
          <p style={{}}>상단 상태바 배경색</p>
          <InputColor style={{border: 'none'}} />
        </div>
        <button
          onClick={() => {
            navigate(ROUTE.SITELISTANDEXPIREDLIST)
          }}
        >
          <p>완료</p>
        </button>
      </div>
    </div>
  )
}

export default RegisterAndModifyAppleStore
