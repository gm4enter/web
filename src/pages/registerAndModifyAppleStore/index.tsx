import { FormControlLabel, Modal, Radio, RadioGroup } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useLayoutEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import iconBack from '../../asset/images/iconBack.png'
import infoCircle from '../../asset/images/iconInfoCircle.png'
import iconQuestion from '../../asset/images/iconQuestion.png'
import { InputColor } from '../../components/base/InputColor'
import { Input } from '../../components/base/input/Input'
import { InputuploadImage } from '../../components/base/input/InputuploadImage'
import { ROUTE } from '../../router/routes'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import { SITE, SYSTEM } from '../../apis/urlConfig'
import { snackBarActions } from '../../components/snackbar/snackbarSlice'
import { useAppDispatch } from '../../app/hooks'
import { DataIosInfoType, SiteType } from '../../types/site.type'
import axiosClient from '../../apis/axiosClient'
import { IMAGE_SITE_UPLOAD } from '../../types/enum'
import closeIcon from '../../asset/images/cancel.png';
import imageNotSize from '../../asset/images/PictureNotSize.png';

const useStyles = makeStyles({
  container: {
    padding: '24px',
    '@media (max-width: 768px)': {
      padding: '16px',
    },
    '&>div:nth-of-type(1)': {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      '&>img': { height: '24px', width: '24px' },
      '&>p': { padding: 0, margin: 0, fontSize: '18px', fontWeight: 500 },
      '@media (max-width: 768px)': { '&>p': { fontSize: '16px' } },
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
          '&>img': { height: '24px', width: '24px' },
          '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500 },
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
          '&>a': { textDecoration: 'none', color: '#2B83FE' },
        },
      },
      '&>div:nth-of-type(2)': {
        display: 'none',
      },
      '@media (max-width: 768px)': {
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
      '&>p': { padding: 0, margin: 0, fontSize: '14px', fontWeight: 400 },
      '@media (max-width: 768px)': {
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
          width: '220px',
          gap: '4px',
          alignItems: 'center',
          justifyContent: 'flex-end',
          '&>p': {
            padding: 0,
            margin: 0,
            fontSize: '14px',
            fontWeight: 500,
            color: '#272B30',
          },
          '&>img': { height: '16px', width: '16px' },
        },
      },
      '&>div:nth-of-type(1)': { marginTop: '24px' },
      '&>div:nth-of-type(2)': { marginTop: '24px' },
      '&>div:nth-of-type(3)': { marginTop: '16px' },
      '&>div:nth-of-type(4)': { marginTop: '16px' },
      '&>div:nth-of-type(5)': {
        marginTop: '16px',
        '&>textarea': {
          width: 'calc(100% - 32px)',
          height: '100px',
          padding: '10px 16px',
          outline: 'none',
          border: '1px solid #D0D5DD',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '24px',
          '@media (max-width: 768px)': {
            width: 'calc(100% - 32px) !important',
          },
        }
      },
      '&>div:nth-of-type(6)': { marginTop: '16px' },
      '@media (max-width: 768px)': {
        padding: '0',
        border: 'none',
        '&>div': {
          display: 'initial',
          justifyContent: 'flex-start',

          // '&>div:nth-of-type(1)': {
          //   display: 'initial',
          // },
          '&>div:nth-of-type(1)': {
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
            justifyContent: 'flex-start !important',
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
            '&>img': { height: '18px', width: '18px' },
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
      '@media (max-width: 768px)': {
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
      '@media (max-width: 768px)': {
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
      '&>a': { textDecoration: 'none', color: '#2B83FE' },
    },
  },
  modal: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.25)',
    border: 'none',
    // padding: '4px',
    '&>div:nth-of-type(1)': {
      display: 'flex', padding: '16px 24px 0px 32px', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center',
      '&>p': { padding: 0, margin: 0, fontSize: '20px', fontWeight: 500, textAlign: 'center', },
      '&>img': { cursor: 'pointer', height: '24px', width: '24px' },
    },
    '&>div:nth-of-type(2)': {
      padding: '0px 24px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      justifyContent: 'center',
      alignItems: 'center',
      '&>img': { height: '160px', width: '160px' },
      '&>div': {
        '&>p:nth-of-type(1)': {
          padding: 0, margin: '0 0 8px 0', fontSize: '18px', fontWeight: 700, color: '#111315', textAlign: 'center',
        },
        '&>p:nth-of-type(2)': {
          padding: 0, margin: 0, fontSize: '16px', fontWeight: 400, color: '#272B30', textAlign: 'center',
        }
      },
    },
    '&>div:nth-of-type(3)': {
      display: 'flex', padding: ' 0 24px 24px', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '16px',
      '&>button:nth-of-type(1)': {
        display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', borderRadius: '8px', backgroundColor: '#2B83FE', padding: '10px 24px', textAlign: 'center',
        '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#fff' },
      },
    },
  },
})

function RegisterAndModifyAppleStore() {
  const navigate = useNavigate()
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const { id } = useParams()

  const [reload, setReload] = useState(false)

  const [site, setSite] = useState<SiteType>()

  //user
  const [value1, setValue1] = useState('')

  //password
  const [value2, setValue2] = useState('')

  //contactInfo
  const [value3, setValue3] = useState('')

  //appName
  const [value4, setValue4] = useState('')

  //description
  const [value5, setValue5] = useState('')

  //keywords
  const [value6, setValue6] = useState('')

  //color and radio
  const [selectedValue, setSelectedValue] = useState('WHITE')
  const [color, setColor] = useState('#000')

  //image
  const [value7, setValue7] = useState<File | null>(null);
  const [value8, setValue8] = useState<File | null>(null);

  const [icon, setIcon] = useState('')
  const [homeScreen, setHomeScreen] = useState('')

  const [openModal, setOpenModal] = useState(false)

  const handleIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file: File = e.target.files[0];
      setValue7(file);
    }
  }
  const handleDelIcon = () => {
    setValue7(null)
    setIcon('')
  }

  const handleHomeScreen = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file: File = e.target.files[0];
      setValue8(file);
    }
  }
  const handleDelHomeScreen = () => {
    setValue8(null)
    setHomeScreen('')
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleColorChange = (color: string) => {
    setColor(color);
  }

  const handleSubmit = async () => {
    try {

      const formData = new FormData()
      const formData2 = new FormData()

      value7 && formData.append('file', value7)

      value8 && formData2.append('file', value8)

      const [resIcon, resHomeScreen] = await Promise.all([
        value7 && axiosClient.post(`${SYSTEM}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }),
        value8 && axiosClient.post(`${SYSTEM}/upload`, formData2, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }),
      ])

      const dataPut: DataIosInfoType = {
        iosInfo: {
          user: value1,
          password: value2,
          contactInfo: value3,
          appName: value4,
          description: value5,
          keyword: value6,
          textColor: selectedValue,
          backgroundColor: color,
        }
      }

      !icon && (dataPut.iosInfo.icon = icon)
      !homeScreen && (dataPut.iosInfo.homeScreen = homeScreen)

      resIcon && (dataPut.iosInfo.icon = resIcon.data.filename)
      resHomeScreen && (dataPut.iosInfo.homeScreen = resHomeScreen.data.filename)

      await axiosClient.put(`${SITE}/update/${id}`, dataPut)
      dispatch(snackBarActions.setStateSnackBar({
        content: '성공',
        type: 'success',
      }))
      setReload(!reload)
      navigate(ROUTE.SITELISTANDEXPIREDLIST)

    } catch (error) {
      console.log('error:', error)
      dispatch(snackBarActions.setStateSnackBar({
        content: '실패',
        type: 'error',
      }))
    }
  }

  //handle modal
  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  useLayoutEffect(() => {
    if (id) {
      axiosClient.get(`${SITE}/get/${id}`)
        .then((res: { data: SiteType }) => {
          setSite(res.data)
          if (res.data.iosInfo) {
            setValue1(res.data.iosInfo.user)
            setValue2(res.data.iosInfo.password)
            setValue3(res.data.iosInfo.contactInfo)
            setValue4(res.data.iosInfo.appName)
            setValue5(res.data.iosInfo.description)
            setValue6(res.data.iosInfo.keyword)
            setSelectedValue(res.data.iosInfo.textColor)
            setColor(res.data.iosInfo.backgroundColor)

            setIcon(res.data.iosInfo.icon)
            setHomeScreen(res.data.iosInfo.homeScreen)

          }
        })
        .catch((error: any) => {
          console.log(error)
        })
    }
  }, [id, reload])
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
                style={{ width: '20x', height: '20px' }}
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
            containerStyle={{ width: '522px' }}
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
            isPassword
            containerStyle={{ width: '522px' }}

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
            containerStyle={{ width: '522px' }}

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
            // maxLength={40}
            containerStyle={{ width: '522px' }}

          />
        </div>
        <div>
          <div>
            <p>앱 설명</p>
            <img src={iconQuestion} alt='' />
          </div>
          <textarea
            rows={5}
            placeholder='입력해주세요'
            value={value5}
            onChange={(e) => {
              setValue5(e.target.value)
            }}
            style={{ width: 'calc(522px - 32px)' }}
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
            containerStyle={{ width: '522px' }}
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
              type={IMAGE_SITE_UPLOAD.TYPE_1024}
              containerStyle={{ marginTop: '16px' }}
              onChange={handleIcon}
              onError={handleOpenModal}
              images={icon}
              onDeleted={handleDelIcon}
            />
          </div>

          <div>
            <div>
              <p>시작화면 가로세로 640x960</p>
              <img src={iconQuestion} alt='' />
            </div>
            <p>JPG또는 24비트 PNG(알파 없음)</p>
            <InputuploadImage type={IMAGE_SITE_UPLOAD.TYPE_640} containerStyle={{ marginTop: '16px' }} onChange={handleHomeScreen} onDeleted={handleDelHomeScreen} onError={handleOpenModal} images={homeScreen} />
          </div>
        </div>
      </div>
      <div>
        <p>상단 상태바 글자색상</p>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='WHITE'
          name='radio-buttons-group'
          value={selectedValue}
          onChange={handleRadioChange}
          sx={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            marginTop: '12px',
          }}
          row
        >
          <FormControlLabel value='WHITE' control={<Radio />} label='흰색' />
          <FormControlLabel value='BLACK' control={<Radio />} label='검정색' />
        </RadioGroup>
        <div>
          <p>상단 상태바 배경색</p>
          <InputColor
            style={{ border: 'none' }}
            onChange={handleColorChange}
            value={color}
          />
        </div>
        <button
          onClick={handleSubmit}
        >
          <p>완료</p>
        </button>
      </div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        disableAutoFocus
      >
        <div className={classes.modal}>
          <div>
            <p></p>
            <img src={closeIcon} alt="close" onClick={handleCloseModal} />
          </div>
          <div>
            <img src={imageNotSize} alt="" />
            <div>
              <p>어이쿠! 이미지 크기가 적합하지 않습니다.</p>
              <p>최상의 품질을 위해 사진의 크기를 확인하십시오.</p>
            </div>
          </div>
          <div>
            <button onClick={handleCloseModal}>
              <p>닫기</p>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default RegisterAndModifyAppleStore
