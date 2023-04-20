import {Modal} from '@mui/material'
import {makeStyles} from '@mui/styles'
import React, {useRef, useState} from 'react'
import moment from 'moment'
import SendIcon from '../../asset/icons/send'
import GalleryAdd from '../../asset/images/GalleryAdd.png'
import MenuDots from '../../asset/images/MenuDots.png'
import arrowIcon from '../../asset/images/arrow.png'
import avatarChat1 from '../../asset/images/avatarChat1.png'
import avatarDemoCustomer from '../../asset/images/avatarDemoCustomer.png'
import closeIcon from '../../asset/images/cancel.png'
import iconPlusBlue from '../../asset/images/iconPlusBlue.png'
import {Input} from '../../components/base/input/Input'
import {InputImage} from '../../components/base/input/InputImage'
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'
import {useNavigate} from 'react-router'
import {ROUTE} from '../../router/routes'

const data = [
  {
    id: 1,
    title:
      '1:1문의 이메일무단수집거부 이메일무단수집거부 이메일무단수집거부 이메일무단수집거부 이메일무단수집거부 이메일무단수집거부',
    button: '문의작성',
    avatar: avatarDemoCustomer,
  },
  {id: 2, title: '공지사항', button: '공지사항', avatar: avatarDemoCustomer},
  {
    id: 3,
    title: '자주묻는질문',
    button: '자주묻는질문',
    avatar: avatarDemoCustomer,
  },
  {id: 4, title: '이용약관', button: '이용약관', avatar: avatarDemoCustomer},
  {
    id: 5,
    title: '개인정보처리방침',
    button: '개인정보처리방침',
    avatar: avatarDemoCustomer,
  },
  {
    id: 6,
    title: '이메일무단수집거부',
    button: '이메일무단수집거부',
    avatar: avatarDemoCustomer,
  },
]

const style = {}

const useStyles = makeStyles({
  container: {
    height: 'calc(100vh - 76px)',
    marginRight: '24px',
    '@media (max-width: 768px)': {
      marginRight: '0',
    },
    display: 'flex',
    '&>div:nth-of-type(1)': {
      display: 'flex',
      flexDirection: 'column',
      width: '40%',
      height: '100%',
      borderLeft: '1px solid #D0D5DD',
      borderRight: '1px solid #D0D5DD',
      boxSizing: 'border-box',
      '&>div:nth-of-type(1)': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 16px',
        boxSizing: 'border-box',
        borderBottom: '1px solid #D0D5DD',
        '&>p': {padding: 0, margin: 0},
        '&>button': {
          display: 'flex',
          padding: '8px',
          gap: '4px',
          backgroundColor: '#fff',
          border: '1px solid #2B83FE ',
          borderRadius: '4px',
          alignItems: 'center',
          textAlign: 'center',
          cursor: 'pointer',
          '&>img': {height: '20px', width: '20px'},
          '&>p': {
            margin: 0,
            padding: 0,
            fontSize: '14px',
            fontWeight: 500,
            color: '#2B83FE',
          },
        },
      },
      '&>div:nth-of-type(2)': {
        marginLeft: '16px',
        flex: 1,
        overflow: 'auto',
        '&>div': {
          '&>img': {
            height: '110px',
            width: '92px',
            boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.12)',
            borderRadius: '8px',
          },
          '&>div': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            '&>p': {
              padding: 0,
              margin: 0,
              fontSize: '16px',
              fontWeight: 400,
              maxWidth: '100%',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            '&>div': {
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              '&>p:nth-of-type(1)': {
                padding: 0,
                margin: 0,
                fontSize: '14px',
                fontWeight: 400,
                color: '#70777F',
              },
              '&>p:nth-of-type(2)': {
                padding: '4px 8px',
                margin: 0,
                fontSize: '14px',
                fontWeight: 400,
                backgroundColor: '#FFE7E4',
                borderRadius: '10px',
              },
            },
          },
        },
      },
      '@media (max-width: 768px)': {
        width: '100%',
        marginRight: '0',
        border: 'none',
        boxSizing: 'border-box',
        '&>div:nth-of-type(1)': {
          width: '100%',
        },
        '&>div:nth-of-type(2)': {
          margin: '0 16px',
        },
      },
    },
    '&>div:nth-of-type(2)': {
      display: 'flex',
      flexDirection: 'column',
      width: '60%',
      height: '100%',
      borderRight: '1px solid #D0D5DD',
      '&>div:nth-of-type(1)': {
        padding: '32px 24px',
        borderBottom: '1px solid #D0D5DD',
        '&>div:nth-of-type(1)': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '&>div': {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            '&>img': {height: '54px', width: '54px', borderRadius: '50%'},
            '&>div': {
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              '&>p': {padding: 0, margin: 0},
              '&>p:nth-of-type(1)': {
                fontSize: '18px',
                fontWeight: 700,
                color: '#141416',
              },
              '&>p:nth-of-type(2)': {
                fontSize: '14px',
                fontWeight: 400,
                color: '#272B30',
              },
            },
          },
          '&>img': {
            height: '24px',
            width: '24px',
            border: '.5px solid #B1B5C3',
            padding: '4px',
            borderRadius: '10px',
          },
        },
        '&>p': {
          padding: 0,
          margin: '16px 0 0 0',
          fontSize: '16px',
          fontWeight: 500,
          color: '#2D2F31',
        },
      },
      '&>div:nth-of-type(2)': {
        padding: '24px 24px 0 24px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflow: 'auto',
        backgroundColor: '#FAFAFA',
        '&>p': {
          padding: 0,
          margin: 0,
          fontSize: '16px',
          fontWeight: 700,
          color: '#262626',
          '&>span': {color: '#0078FF'},
        },
        '&>div:nth-of-type(1)': {},
      },
      '&>div:nth-of-type(3)': {
        display: 'flex',
        alignItems: 'center',
        padding: '24px 20px',
        borderTop: '1px solid #3B71FE',
        gap: '8px',
        '&>button:nth-of-type(1)': {
          display: 'flex',
          padding: '4px',
          backgroundColor: '#fff',
          border: 'none',
          borderRadius: '10px',
          alignItems: 'center',
          cursor: 'pointer',
          '&>img': {height: '32px', width: '32px'},
        },
        '&>input': {
          flex: 1,
          fontSize: '16px',
          fontWeight: 500,
          border: '1px solid #B1B5C3',
          padding: '12px 16px',
          borderRadius: '12px',
        },
        '&>button:nth-of-type(2)': {
          display: 'flex',
          padding: '4px',
          backgroundColor: '#fff',
          border: 'none',
          borderRadius: '10px',
          alignItems: 'center',
        },
      },
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
  },
  message_user_container: {
    display: 'flex',
    padding: '0 2rem',
    marginTop: '1rem',
    // maxHeight: 'calc(100vh - 78px - 90px)',

    position: 'relative',
    '&>img:nth-of-type(1)': {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      marginRight: '1rem',
    },
    '&>div': {
      '&>p:nth-of-type(1)': {
        fontSize: '14px',
        marginBottom: '0',
      },
      '&>p:nth-of-type(2)': {
        fontSize: '12px',
        fontWeight: 400,
        color: 'rgba(45, 47, 49, 0.5)',
        margin: 0,
      },
      '&>img': {
        width: '100px',
        height: '100px',
        borderRadius: '10px',
      },
      '&>p:nth-of-type(3)': {
        // width: '70%',
        margin: '10px 0',
        fontSize: '14px',
        marginTop: 0,
        fontWeight: 400,
        color: '#666666',
      },
    },
    '&>img:nth-of-type(2)': {
      // height: 'calc(100% - 60px)',
      position: 'absolute',
      left: '-2px',
      top: '-40px',
      height: '68px',
      width: '20px',
    },
  },
  total_message: {
    fontWeight: 700,
    color: '#262626',
    padding: '0 2rem',
    '&>span': {
      color: '#0078FF',
    },
  },
  border: {
    borderRight: '1px solid #DCE1E7',
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
    '&>div:nth-of-type(1)': {
      display: 'flex',
      padding: '16px 32px',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #EDEDED',
      textAlign: 'center',
      '&>p': {
        padding: 0,
        margin: 0,
        fontSize: '20px',
        fontWeight: 500,
        textAlign: 'center',
      },
      '&>img': {
        cursor: 'pointer',
        height: '24px',
        width: '24px',
      },
    },
    '&>div:nth-of-type(2)': {
      padding: '24px 32px 32px 32px',
      alignItems: 'center',
      borderBottom: '1px solid #EDEDED',
      '&>textarea': {
        width: 'calc(100% - 32px)',
        marginTop: '16px',
        border: '1px solid #D0D5DD',
        borderRadius: '8px',
        padding: '10px 16px',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '24px',
      },
      '&>div:nth-of-type(1)': {
        '&>p': {
          padding: 0,
          margin: '16px 0 8px 0',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '24px',
          color: '#272B30',
        },
      },
    },
    '&>button': {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: '#2B83FE',
      padding: '10px 24px',
      textAlign: 'center',
      cursor: 'pointer',
      '&>p': {
        padding: 0,
        margin: 0,
        fontSize: '16px',
        fontWeight: 500,
        color: '#fff',
      },
    },
  },
})

const CustomerCenter = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1)
  const classes = useStyles()
  const ref = useRef<HTMLDivElement>(null)

  const [valueInput, setValueInput] = useState('')
  const [valueInputModal1, setValueInputModal1] = useState('')
  const [valueInputModal2, setValueInputModal2] = useState('')

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const navigate = useNavigate()

  return (
    <div className={classes.container}>
      <div>
        <div>
          <p>1:1문의</p>
          <button onClick={handleOpen}>
            <img src={iconPlusBlue} alt='' />
            <p>문의작성</p>
          </button>
        </div>
        <div>
          {data.map((item, index) => (
            <div
              style={
                selectedIndex === index
                  ? {
                      display: 'flex',
                      padding: '12px',
                      gap: '12px',
                      color: '#272B30',
                      backgroundColor: 'rgba(43, 131, 254, 0.1)',
                      borderRadius: '8px',
                    }
                  : {
                      display: 'flex',
                      padding: '12px',
                      gap: '12px',
                      color: '#272B30',
                    }
              }
              onClick={() => {
                fullScreen
                  ? navigate(`${ROUTE.CUSTOMERCENTER}/11`)
                  : setSelectedIndex(index)
              }}
            >
              <img src={item.avatar} alt='' />
              <div>
                <p>{item.title}</p>
                <div>
                  <p>상태: </p>
                  <p>추가 질문</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div>
          <div>
            <div>
              <img src={avatarChat1} alt='' />
              <div>
                <p>name12</p>
                <p>(684) 555-0102</p>
              </div>
            </div>
            <img src={MenuDots} alt='' />
          </div>
          <p>아까 입금했는데 이기명이름으로 30만원했어요 확인해주 세요.</p>
        </div>
        <div>
          <p>
            댓글
            <span> (3)</span>
          </p>
          <div ref={ref}>
            <div>
              <div className={classes.message_user_container}>
                <img src={avatarChat1} alt='' />
                <div>
                  <p>우리집</p>
                  <p>{moment().format('YYYY-MM-DD')}</p>
                  <p>안녕하세요. 확인 되셨습니다. 감사합니다.</p>
                  {/* <img
                  src='https://bedental.vn/wp-content/uploads/2022/12/Anh-Avatar-Doremon-dep-ngau-cute.jpg'
                  alt=''
                /> */}
                </div>
                {/* <img src={arrowIcon} alt='' /> */}
              </div>
            </div>
            <div
              className={classes.message_user_container}
              style={{marginLeft: '60px', borderLeft: '1px solid #DCE1E7'}}
            >
              <img
                style={{width: '40px', height: '40px'}}
                src={avatarChat1}
                alt=''
              />
              <div>
                <p>우리집</p>
                <p>{moment().format('YYYY-MM-DD')}</p>
                <p>안녕하세요. 확인 되셨습니다. 감사합니다.</p>
                <img src={avatarChat1} alt='' />
              </div>
              <img src={arrowIcon} alt='' />
            </div>
            <div
              className={classes.message_user_container}
              style={{marginLeft: '60px', borderLeft: '1px solid #DCE1E7'}}
            >
              <img
                style={{width: '40px', height: '40px'}}
                src={avatarChat1}
                alt=''
              />
              <div>
                <p>우리집</p>
                <p>{moment().format('YYYY-MM-DD')}</p>
                <p>안녕하세요. 확인 되셨습니다. 감사합니다.</p>
                <img src={avatarChat1} alt='' />
              </div>
              <img src={arrowIcon} alt='' />
            </div>
            <div
              className={classes.message_user_container}
              style={{marginLeft: '60px'}}
            >
              <img
                style={{width: '40px', height: '40px'}}
                src={avatarChat1}
                alt=''
              />
              <div>
                <p>우리집</p>
                <p>{moment().format('YYYY-MM-DD')}</p>
                <p>안녕하세요. 확인 되셨습니다. 감사합니다.</p>
                <img src={avatarChat1} alt='' />
              </div>
              <img src={arrowIcon} alt='' />
            </div>
          </div>
        </div>

        <div>
          <button>
            <img src={GalleryAdd} alt='' />
          </button>
          <input
            placeholder='Type here.......'
            onChange={(e) => {
              setValueInput(e.target.value)
            }}
            value={valueInput}
          />
          <button type='submit'>
            <SendIcon color={valueInput ? '#3B71FE' : ''} />
          </button>
        </div>
      </div>
      <Modal open={open} onClose={handleClose} disableAutoFocus>
        <div className={classes.modal}>
          <div>
            <p>문의 작성</p>
            <img src={closeIcon} alt='close' onClick={handleClose} />
          </div>
          <div style={{}}>
            <Input
              // containerStyle={{width: '430px'}}
              value={valueInputModal1}
              onChange={(e) => {
                setValueInputModal1(e.target.value)
              }}
              label='연락처'
              placeholder='휴대폰 번호를 입력해주세요.'
            />
            <Input
              // containerStyle={{width: '430px', marginTop: '16px'}}
              value={valueInputModal2}
              onChange={(e) => {
                setValueInputModal2(e.target.value)
              }}
              label='제목'
              placeholder='입력해주세요.'
            />
            <textarea rows={5} placeholder='내용을 입력해주세요.' />
            <div>
              <p>캡처이미지 & 이미지 자료</p>
              <InputImage />
            </div>
          </div>
          <button onClick={handleClose} style={{}}>
            <p style={{}}>완료</p>
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default CustomerCenter
