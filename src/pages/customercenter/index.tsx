import { Modal } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useRef, useState } from 'react'
import moment from 'moment'
import SendIcon from '../../asset/icons/send'
import GalleryAdd from '../../asset/images/GalleryAdd.png'
import MenuDots from '../../asset/images/MenuDots.png'
import arrowIcon from '../../asset/images/arrow.png'
import avatarChat1 from '../../asset/images/avatarChat1.png'
import avatarDemoCustomer from '../../asset/images/avatarDemoCustomer.png'
import closeIcon from '../../asset/images/cancel.png'
import iconPlusBlue from '../../asset/images/iconPlusBlue.png'
import { Input } from '../../components/base/input/Input'
import { InputImage } from '../../components/base/input/InputImage'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router'
import { ROUTE } from '../../router/routes'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { conversationActions, selectListData } from '../../features/conversation/conversationSlice'
import { loadingActions } from '../../components/loading/loadingSlice'
import axiosClient from '../../apis/axiosClient'
import { CONVERSATION, MESSAGE } from '../../apis/urlConfig'
import { ConversationDetailType } from '../../types/conversationDetail.type'
import { conversationApi } from '../../apis/conversationApi'

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
        '&>p': { padding: 0, margin: 0 },
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
          '&>img': { height: '20px', width: '20px' },
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
                fontSize: '12px',
                fontWeight: 500,
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
        padding: '32px 24px 24px 24px',
        borderBottom: '1px solid #D0D5DD',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&>div': {
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          '&>p:nth-of-type(1)': {
            padding: 0,
            margin: 0,
            fontSize: '18px',
            fontWeight: 700,
            borderRadius: '10px',
            color: '#2D2F31',
            maxWidth: '100%',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
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
          '&>span': { color: '#0078FF' },
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
          '&>img': { height: '32px', width: '32px' },
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
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      marginRight: '1rem',
    },
    '&>div': {
      '&>p:nth-of-type(1)': {
        fontSize: '14px',
        margin: 0,
        marginBottom: '0',
      },
      '&>p:nth-of-type(2)': {
        fontSize: '12px',
        fontWeight: 400,
        color: 'rgba(45, 47, 49, 0.5)',
        margin: 0,
      },
      '&>div': {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        margin: '12px 0 12px 0',
        '&>img': {
          height: '53px',
          width: '44px',
          borderRadius: '4px',
        }
      },
      '&>p:nth-of-type(3)': {
        // width: '70%',
        height: '40px',
        margin: 0,
        fontSize: '14px',
        marginTop: '8px',
        fontWeight: 400,
        color: '#666666',
        maxWidth: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
    '&>img:nth-of-type(2)': {
      // height: 'calc(100% - 60px)',
      position: 'absolute',
      left: '-2px',
      top: '-120px',
      height: '150px',
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
  active: {
    display: 'flex',
    padding: '12px',
    gap: '12px',
    color: '#272B30',
    backgroundColor: 'rgba(43, 131, 254, 0.1)',
    borderRadius: '8px',
    '@media (max-width: 768px)': {
      backgroundColor: '#fff',
      borderRadius: 'none',
    },
  },
  inActive: {
    display: 'flex',
    padding: '12px',
    gap: '12px',
    color: '#272B30',
  },

  type1Conversation: {
    padding: '4px 8px',
    backgroundColor: '#FFE7E4',
    borderRadius: '10px',
    width: 'fit-content',
    '&>p:nth-of-type(1)': {
      padding: 0,
      margin: 0,
      fontSize: '16px',
      lineHeight: '16px',
      fontWeight: 500,
      color: '#FD3535',
    },
  },
  type2Conversation: {
    padding: '4px 8px',
    backgroundColor: 'rgba(253, 53, 233, 0.1)',
    borderRadius: '10px',
    width: 'fit-content',
    '&>p:nth-of-type(1)': {
      padding: 0,
      margin: 0,
      fontSize: '16px',
      lineHeight: '16px',
      fontWeight: 500,
      color: '#FD35E9',
    },
  },
  type3Conversation: {
    padding: '4px 8px',
    backgroundColor: '#ccc',
    borderRadius: '10px',
    width: 'fit-content',
    '&>p:nth-of-type(1)': {
      padding: 0,
      margin: 0,
      fontSize: '16px',
      lineHeight: '16px',
      fontWeight: 500,
      color: '#fff',
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

const formatDate = (date: string) => {
  const index = date.indexOf('T')
  return date.slice(0, index)
}

const CustomerCenter = () => {
  const classes = useStyles()
  const theme = useTheme()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const ref = useRef<HTMLDivElement>(null)
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const [valueMessage, setValueMessage] = useState('')
  const [valueInputModal1, setValueInputModal1] = useState('')
  const [valueInputModal2, setValueInputModal2] = useState('')
  const [valueInputModal3, setValueInputModal3] = useState('')
  const [valueImages, setValueImages] = useState<string[]>([])

  const [conversationActiveId, setConversationActiveId] = useState('')

  const [conversationDetail, setConversationDetail] = useState<ConversationDetailType>()
  console.log('conversationDetail', conversationDetail);

  const [reload, setReload] = useState(true)
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleListItemClick = (item: any) => {
    if (fullScreen) {
      setConversationActiveId(item._id)
      navigate(`${ROUTE.CUSTOMERCENTER}/${item._id}`)
    }
    else {
      setConversationActiveId(item._id)
      setReload(true)
    }

  }

  const checkTypeConversation = (type: string) => {
    switch (type) {
      case '추가 질문':
        return classes.type1Conversation
      case '완료':
        return classes.type2Conversation
      case 'TYPE_3':
        return classes.type3Conversation
      default:
        return classes.type3Conversation
    }
  }



  const handleImageChange = (images: string[]) => {
    setValueImages(images)
  }
  const handleCreateConversation = () => {
    if (valueInputModal1 !== '' && valueInputModal2 !== '' && valueInputModal3 !== '' && valueImages.length > 0) {
      const data = {
        topic: valueInputModal1,
        title: valueInputModal2,
        description: valueInputModal3,
        thumbnail: valueImages
      }

      conversationApi.create(data)
        .then((res: any) => {
          if (res.statusCode === 201) {
            console.log('create conversation success');
            handleClose()
          }
          else {
            console.log('message: ', res.message);
          }
        })
        .catch((error: any) => {
          console.log(error)
        })
    }
    else {
      alert('내용을 입력해주세요')
    }
  }


  const listConversation = useAppSelector(selectListData)

  useEffect(() => {
    dispatch(conversationActions.getList({ params: undefined }))
  }, [dispatch])

  useEffect(() => {
    listConversation.length > 0 &&
      setConversationActiveId(listConversation[0]._id)
  }, [listConversation])

  useEffect(() => {
    const getDetailConversation = async () => {
      try {
        dispatch(loadingActions.openLoading())
        const data: { data: ConversationDetailType } = await axiosClient.get(
          `${CONVERSATION}/get/${conversationActiveId}`
        )
        setConversationDetail(data.data)
        dispatch(loadingActions.loadingSuccess())
        setReload(false)
      } catch (error) {
        console.log(error)
        dispatch(loadingActions.loadingSuccess())
      }
    }
    reload && conversationActiveId && getDetailConversation()
  }, [conversationActiveId, reload, dispatch])

  const handleMessage = async () => {
    try {
      dispatch(loadingActions.openLoading())
      await axiosClient.post(`${MESSAGE}/create`, {
        content: valueMessage,
        conversation: conversationActiveId,
      })
      setValueMessage('')
      setReload(true)
      dispatch(loadingActions.loadingSuccess())
    } catch (error) {
      console.log(error)
      dispatch(loadingActions.loadingSuccess())
    }
  }
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
          {listConversation.map((item, index) => (
            <div
              className={conversationActiveId === item._id ? classes.active : classes.inActive}
              onClick={() => handleListItemClick(item)}
            >
              <img src={item.thumbnail[0]} alt='' />
              <div>
                <p>{item.title}</p>
                <div>
                  <p>상태: </p>
                  <div className={checkTypeConversation(item.topic)}>
                    <p>{item.topic}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div>
          <div>
            <div className={checkTypeConversation(conversationDetail?.topic || '')}>
              <p>{conversationDetail?.topic}</p>
            </div>
            <p>{conversationDetail?.title}</p>
          </div>
          <img src={MenuDots} alt='' />
        </div>

        <div>
          <p>
            댓글
            <span> ({conversationDetail?.messages?.length})</span>
          </p>
          <div ref={ref}>
            <div>
              <div className={classes.message_user_container}>
                <img src={conversationDetail?.creator?.photo} alt='' />
                <div>
                  <p>{conversationDetail?.creator?.firstName} {conversationDetail?.creator?.lastName}</p>
                  <p>{formatDate(conversationDetail?.creator?.createdAt || '')}</p>
                  <div>
                    {(conversationDetail?.thumbnail || []).map((item, index) => (
                      <img
                        src={item}
                        alt=''
                      />
                    ))}
                  </div>
                  <p>{conversationDetail?.description}</p>
                </div>
              </div>
            </div>

            {conversationDetail?.messages?.map((item, index, array) => {
              const styleItem = { marginLeft: '60px', borderLeft: '1px solid #DCE1E7' }
              if (index + 1 === array.length) {
                styleItem.borderLeft = '1px solid #FAFAFA'
              }
              return (
                <div
                  className={classes.message_user_container}
                  style={styleItem}
                  key={item._id}
                >
                  <img
                    src={item.sender?.photo}
                    alt=''
                  />
                  <div>
                    <p>{item.sender.firstName} {item.sender.lastName}</p>
                    <p>{formatDate(item.updatedAt || '')}</p>
                    <p>{item.content}</p>
                    <img src={avatarChat1} alt='' />
                  </div>
                  <img src={arrowIcon} alt='' />
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <button>
            <img src={GalleryAdd} alt='' />
          </button>
          <input
            placeholder='Type here.......'
            onChange={(e) => {
              setValueMessage(e.target.value)
            }}
            value={valueMessage}
          />
          <button type='submit' onClick={handleMessage}>
            <SendIcon color={valueMessage ? '#3B71FE' : ''} />
          </button>
        </div>
      </div>
      <Modal open={open} onClose={handleClose} disableAutoFocus>
        <div className={classes.modal}>
          <div>
            <p>문의 작성</p>
            <img src={closeIcon} alt='close' onClick={handleClose} />
          </div>
          <div>
            <Input
              value={valueInputModal1}
              onChange={(e) => {
                setValueInputModal1(e.target.value)
              }}
              label='연락처'
              placeholder='휴대폰 번호를 입력해주세요.'
            />
            <Input
              value={valueInputModal2}
              onChange={(e) => {
                setValueInputModal2(e.target.value)
              }}
              label='제목'
              placeholder='입력해주세요.'
            />
            <textarea
              rows={5}
              placeholder='내용을 입력해주세요.'
              value={valueInputModal3}
              onChange={(e) => {
                setValueInputModal3(e.target.value)
              }} />
            <div>
              <p>캡처이미지 & 이미지 자료</p>
              <InputImage onImageChange={handleImageChange} />
            </div>
          </div>
          <button onClick={handleCreateConversation}>
            <p>완료</p>
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default CustomerCenter
