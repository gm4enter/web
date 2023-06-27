import { makeStyles } from '@mui/styles'
import { useLayoutEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import iconBack from '../../asset/images/iconBack.png'
import infoCircle from '../../asset/images/iconInfoCircle.png'
import iconQuestion from '../../asset/images/iconQuestion.png'
import { Input } from '../../components/base/input/Input'
import { InputuploadImage } from '../../components/base/input/InputuploadImage'
import { ROUTE } from '../../router/routes'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Modal,
  Typography,
} from '@mui/material'
import axiosClient from '../../apis/axiosClient'
import { DataAndroidInfoType, SiteType } from '../../types/site.type'
import { SITE, SYSTEM } from '../../apis/urlConfig'
import { useAppDispatch } from '../../app/hooks'
import { snackBarActions } from '../../components/snackbar/snackbarSlice'
import { IMAGE_SITE_UPLOAD } from '../../types/enum'
import closeIcon from '../../asset/images/cancel.png';
import imageNotSize from '../../asset/images/PictureNotSize.png';

const useStyles = makeStyles({
  container: {
    padding: '24px',
    '@media (max-width: 768px)': {
      padding: 16,
    },
    '&>div:nth-of-type(1)': {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      '&>img': { height: '24px', width: '24px' },
      '&>p': { padding: 0, margin: 0, fontSize: '18px', fontWeight: 500 },
      '@media (max-width: 768px)': {
        '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500 },
      },
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
      marginTop: '16px',
      padding: '24px',
      borderRadius: '12px',
      border: '1px solid #D0D5DD',
      '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500 },
      '@media (max-width: 768px)': {
        padding: '0',
        borderRadius: '12px',
        border: 'none',
        '&>input': {
          width: '100%',
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
      '&>p:nth-of-type(2)': {
        padding: 0,
        margin: '8px 0 0 0',
        fontSize: '14px',
        fontWeight: 400,
      },
      '@media (max-width: 768px)': {
        padding: '0 0 16px 0 ',
        borderRadius: '0',
        border: 'none',
        borderBottom: '1px solid #D0D5DD',
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
      '&>div:nth-of-type(1)': {
        display: 'flex',
        gap: '16px',
        marginTop: '20px',
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
      '&>div:nth-of-type(2)': {
        marginTop: '24px',
        '&>div': {
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
          '&>p': { padding: 0, margin: 0, fontSize: '14px', fontWeight: 500 },
          '&>img': { height: '18px', width: '18px' },
        },
        '&>p': {
          padding: 0,
          margin: '8px 0 0 0',
          fontSize: '14px',
          fontWeight: 400,
          color: '#70777F',
        },
        '&>p:nth-of-type(2)': {
          margin: '4px 0 0 0',
          color: '#343941',
          '&>span:nth-of-type(1)': { color: '#FD3535' },
          '&>a': { textDecoration: 'none', color: '#2B83FE' },
        },
      },
      '&>button': {
        marginTop: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        backgroundColor: '#2B83FE',
        padding: '8px 12px',
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

function RegisterAndModifyGooglePlay() {
  const navigate = useNavigate()
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const { id } = useParams()

  const [reload, setReload] = useState(false)

  const [site, setSite] = useState<SiteType>()

  const [inputValueNameApp, setInputValueNameApp] = useState('')

  //user and password
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')

  //image
  const [value4, setValue4] = useState<File | null>(null);
  const [value5, setValue5] = useState<File | null>(null);
  const [value6, setValue6] = useState<File | null>(null);

  const [icon, setIcon] = useState('')
  const [homeScreen, setHomeScreen] = useState('')
  const [notificationIcon, setNotificationIcon] = useState('')

  const [openModal, setOpenModal] = useState(false)

  const handleIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file: File = e.target.files[0];
      setValue4(file);
    }
  }
  const handleDelIcon = () => {
    setValue4(null)
    setIcon('')
  }

  const handleHomeScreen = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file: File = e.target.files[0];
      setValue5(file);
    }
  }
  const handleDelHomeScreen = () => {
    setValue5(null)
    setHomeScreen('')
  }

  const handleNotificationIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file: File = e.target.files[0];
      setValue6(file);
    }
  };
  const handleDelNotificationIcon = () => {
    setValue6(null)
    setNotificationIcon('')
  }

  const handleSubmit = async () => {
    try {

      const formData = new FormData()
      const formData2 = new FormData()
      const formData3 = new FormData()

      value4 && formData.append('file', value4)

      value5 && formData2.append('file', value5)

      value6 && formData3.append('file', value6)

      const [resIcon, resHomeScreen, resNotiIcon] = await Promise.all([
        value4 && axiosClient.post(`${SYSTEM}/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }),
        value5 && axiosClient.post(`${SYSTEM}/upload`, formData2, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }),
        value6 && axiosClient.post(`${SYSTEM}/upload`, formData3, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
      ])

      const dataPut: DataAndroidInfoType = {
        androidInfo: {
          user: value1,
          password: value2,
          appName: inputValueNameApp,
        },
      }

      !icon && (dataPut.androidInfo.icon = icon)
      !homeScreen && (dataPut.androidInfo.homeScreen = homeScreen)
      !notificationIcon && (dataPut.androidInfo.notificationIcon = notificationIcon)

      resIcon && (dataPut.androidInfo.icon = resIcon.data.filename)
      resHomeScreen && (dataPut.androidInfo.homeScreen = resHomeScreen.data.filename)
      resNotiIcon && (dataPut.androidInfo.notificationIcon = resNotiIcon.data.filename)

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
          if (res.data.androidInfo) {
            setValue1(res.data.androidInfo.user)
            setValue2(res.data.androidInfo.password)
            setInputValueNameApp(res.data.androidInfo.appName)

            setIcon(res.data.androidInfo.icon)
            setHomeScreen(res.data.androidInfo.homeScreen)
            setNotificationIcon(res.data.androidInfo.notificationIcon)
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
        <p>구글플레이 등록 및 수정</p>
      </div>

      <div>
        <div>
          <div>
            <img src={infoCircle} alt='' />
            <p>주의</p>
          </div>
          <p>
            Google Play에서는 아래와 같은 정책을 시행하고 있으며, 이를 준수하지
            않을 경우 App이 강제로 삭제되거나 개발자 계정이 정지될 수 있습니다.
            Google 정책에 의해 삭제된 앱에 대해서는 지엠포컴퍼니가이 책임지지
            않으므로 Google 에서 개발자 계정 메일로 보내주는 정책 알림을 수시로
            확인하여 대응하셔야 합니다.
          </p>
          <ul>
            <li>음란물 : 성매매 또는 유흥 등 성인용 컨텐츠</li>
            <li>명의도용 또는 사기행위 : 모조품 판매 또는 연결 컨텐츠</li>
            <li>
              제휴사 트래픽 유도 : App의 주 목적이 제휴사 트래픽을 웹사이트로
              유도하는 것(주요 메뉴들이 외부 웹사이트로 연결되어 있는 경우)
            </li>
            <li>
              스팸성 키워드 : App 제목이나 설명에 관련 없는 키워드나 설명을
              나열하는 행위
            </li>
            <li>
              상표권 도용 : 등록된 상표를 무단으로 App 아이콘에 사용하는 경우
            </li>
            <li>
              저작권 침해 : 영화 포스터 등 저작권이 있는 이미지를 홈화면, 그래픽
              이미지, 앱 아이콘, 캡쳐화면, 시작화면 이미지로 설정하는 경우
            </li>
            <li>
              컨텐츠 수위 : 주류, 담배, 국제결혼 등을 취급하는 App에서
              전체이용가 등으로 설정하는 경우
            </li>
            <li>
              개인정보처리방침 누락/불일치 : 앱의 각종 권한, 회원가입,
              위치정보사용 등 취급하는 개인정보에 대해 개인정보처리방침에
              명시하고 Google Play 앱 등록정보에 URL을 기재해야 합니다. 보다
              자세한 사항은 구글 플레이 개발자 정책을 참고하시기 바랍니다.
            </li>
          </ul>
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
                  Google Play에서는 아래와 같은 정책을 시행하고 있으며, 이를
                  준수하지 않을 경우 App이 강제로 삭제되거나 개발자 계정이
                  정지될 수 있습니다. Google 정책에 의해 삭제된 앱에 대해서는
                  지엠포컴퍼니가이 책임지지 않으므로 Google 에서 개발자 계정
                  메일로 보내주는 정책 알림을 수시로 확인하여 대응하셔야 합니다.
                </p>
                <ul>
                  <li>음란물 : 성매매 또는 유흥 등 성인용 컨텐츠</li>
                  <li>명의도용 또는 사기행위 : 모조품 판매 또는 연결 컨텐츠</li>
                  <li>
                    제휴사 트래픽 유도 : App의 주 목적이 제휴사 트래픽을
                    웹사이트로 유도하는 것(주요 메뉴들이 외부 웹사이트로
                    연결되어 있는 경우)
                  </li>
                  <li>
                    스팸성 키워드 : App 제목이나 설명에 관련 없는 키워드나
                    설명을 나열하는 행위
                  </li>
                  <li>
                    상표권 도용 : 등록된 상표를 무단으로 App 아이콘에 사용하는
                    경우
                  </li>
                  <li>
                    저작권 침해 : 영화 포스터 등 저작권이 있는 이미지를 홈화면,
                    그래픽 이미지, 앱 아이콘, 캡쳐화면, 시작화면 이미지로
                    설정하는 경우
                  </li>
                  <li>
                    컨텐츠 수위 : 주류, 담배, 국제결혼 등을 취급하는 App에서
                    전체이용가 등으로 설정하는 경우
                  </li>
                  <li>
                    개인정보처리방침 누락/불일치 : 앱의 각종 권한, 회원가입,
                    위치정보사용 등 취급하는 개인정보에 대해 개인정보처리방침에
                    명시하고 Google Play 앱 등록정보에 URL을 기재해야 합니다.
                    보다 자세한 사항은 구글 플레이 개발자 정책을 참고하시기
                    바랍니다.
                  </li>
                </ul>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div>
        <p>구글플레이 계정정보</p>

        <Input
          label='아이디'
          placeholder='입력해주세요.'
          value={value1}
          onChange={(e) => {
            setValue1(e.target.value)
          }}
          containerStyle={{ width: 'calc(50% + 32px)', marginTop: '20px', }}
        />
        <Input
          label='비밀번호'
          placeholder='입력해주세요.'
          value={value2}
          onChange={(e) => {
            setValue2(e.target.value)
          }}
          containerStyle={{ width: 'calc(50% + 32px)', marginTop: '16px' }}
          isPassword
        />
      </div>

      <div>
        <p>앱 기본정보</p>
        <Input
          label='앱 제목'
          value={inputValueNameApp}
          isCountValueLength
          placeholder='입력해주세요.'
          onChange={(e) => {
            setInputValueNameApp(e.target.value)
          }}
          containerStyle={{ width: 'calc(50% + 32px)', marginTop: '20px' }}
          maxLength={40}
        />
        <p>* 앱 설치 후 아이콘 아래에 표시되는 이름입니다.</p>
      </div>

      <div>
        <p>그래픽 저작물</p>
        <div>
          <div>
            <div>
              <p>패비콘</p>
              <img src={iconQuestion} alt='' />
            </div>
            <p>고해상도 아이콘: 512x512 / 32비트 PNG(알파 있음)</p>
            <InputuploadImage
              type={IMAGE_SITE_UPLOAD.TYPE_512}
              containerStyle={{ marginTop: '16px' }}
              onChange={handleIcon}
              onDeleted={handleDelIcon}
              onError={handleOpenModal}
              images={icon} />
          </div>

          <div>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <p>시작화면 (선택사항)</p>
              <img src={iconQuestion} alt='' />
            </div>
            <p>가로x세로 1440x2960 JPG또는 24비트 PNG(알파 없음)</p>
            <InputuploadImage
              type={IMAGE_SITE_UPLOAD.TYPE_1440}
              containerStyle={{ marginTop: '16px' }}
              onChange={handleHomeScreen}
              onDeleted={handleDelHomeScreen}
              onError={handleOpenModal}
              images={homeScreen}
            />
          </div>
        </div>

        <div>
          <div>
            <p>알림 아이콘(선택사항)</p>
            <img src={iconQuestion} alt='' />
          </div>
          <p>권장 해상도: 96x96 / PNG / 배경 투명으로, 흰색으로 표현</p>
          <p>
            <span>안내: </span>
            <span>
              안드로이드 5.0 이상부터 유채색 알림 아이콘을 지원하지 않아 단색
              아이콘을 첨부하셔야 합니다.{' '}
            </span>
            <a href='#'>자세히 알아보기</a>
          </p>
          <InputuploadImage 
          type={IMAGE_SITE_UPLOAD.TYPE_96} 
          containerStyle={{ marginTop: '16px' }} 
          onChange={handleNotificationIcon} 
          onDeleted={handleDelNotificationIcon} 
          onError={handleOpenModal}
          images={notificationIcon} 
          />
          <p>
            *알림 아이콘은 앱에서 알림이 왔을때 상단에 보여지는 아이콘입니다.
          </p>
        </div>

        <button
          onClick={handleSubmit}
        >
          <p>제출하기</p>
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

export default RegisterAndModifyGooglePlay
