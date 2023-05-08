import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { makeStyles } from '@mui/styles'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { io } from 'socket.io-client'
import axiosClient from '../../apis/axiosClient'
import { CONVERSATION, MESSAGE } from '../../apis/urlConfig'
import { useAppDispatch } from '../../app/hooks'
import SendIcon from '../../asset/icons/send'
import GalleryAdd from '../../asset/images/GalleryAdd.png'
import MenuDots from '../../asset/images/MenuDots.png'
import arrowIcon from '../../asset/images/arrow.png'
import avatarChat1 from '../../asset/images/avatarChat1.png'
import { loadingActions } from '../../components/loading/loadingSlice'
import { ConversationDetailType } from '../../types/conversationDetail.type'
import { ConversationDetailMessageType } from '../../types/conversationDetailMessage.type'

const useStyles = makeStyles({
  customer_center_item: {
    height: 'calc(100vh - 132px)',
    '&>div:nth-of-type(1)': {
      display: 'flex',
      alignItems: 'center',
      padding: '16px',
      gap: '4px',
      '&>span': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    '&>div:nth-of-type(2)': {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      borderRight: '1px solid #D0D5DD',
      '&>div:nth-of-type(1)': {
        padding: '24px 16px',
        borderBottom: '1px solid #D0D5DD',
        display: 'flex',
        justifyContent: 'space-between',
        // alignItems: 'center',
        '&>div': {
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          '&>p:nth-of-type(1)': {
            padding: 0,
            margin: 0,
            fontSize: '16px',
            fontWeight: 700,
            color: '#141416',
            maxWidth: '100%',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        },
        '&>img': {
          height: '24px',
          width: '24px',
          border: 'none',
          padding: '4px',
          borderRadius: '10px',
        },
      },
      '&>div:nth-of-type(2)': {
        padding: '16px',
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
        '&>div:nth-of-type(1)': {
          overflowY: 'auto'
        },
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
    },
    '@media (min-width: 769px)': {
      display: 'none',
    },
  },
  message_user_container: {
    display: 'flex',
    padding: '0 1rem',
    marginTop: '1rem',
    // maxHeight: 'calc(100vh - 78px - 90px)',

    position: 'relative',
    '&>img:nth-of-type(1)': {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      marginRight: '1rem',
    },
    '&>div:nth-of-type(1)': {
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
      '&>img': {
        width: '80px',
        height: '80px',
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
    padding: '0 1rem',
    '&>span': {
      color: '#0078FF',
    },
  },
  border: {
    borderRight: '1px solid #DCE1E7',
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
})

const formatDate = (date: string) => {
  const index = date.indexOf('T')
  return date.slice(0, index)
}

const CustomerCenterItem = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useAppDispatch()

  const socketRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [reload, setReload] = useState(true)
  const [valueMessage, setValueMessage] = useState('')



  const [idSocket, setIdSocket] = useState<string>('')
  const [conversationDetailMessage, setConversationDetailMessage] = useState<ConversationDetailMessageType[]>([])

  const conversationActiveId = id

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

  const [conversationDetail, setConversationDetail] = useState<ConversationDetailType>()
  console.log('````conversationDetail', conversationDetail);

  const handleMessage = async () => {
    try {
      setValueMessage('')
      await axiosClient.post(`${MESSAGE}/create`, {
        content: valueMessage,
        conversation: conversationActiveId,
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getDetailConversation = async () => {
      try {
        dispatch(loadingActions.openLoading())
        const data: { data: ConversationDetailType } = await axiosClient.get(
          `${CONVERSATION}/get/${conversationActiveId}`
        )
        setConversationDetail(data.data)
        setConversationDetailMessage(data.data?.messages)
        dispatch(loadingActions.loadingSuccess())
        setReload(false)
      } catch (error) {
        console.log(error)
        dispatch(loadingActions.loadingSuccess())
      }
    }
    reload && conversationActiveId && getDetailConversation()
  }, [reload, conversationActiveId, dispatch])

  useEffect(() => {
    socketRef.current = io('https://server.gmapps.net', {
      extraHeaders: {
        Authorization: "Bearer " + localStorage.getItem('accessToken'),
      }
    })

    socketRef.current.on('getId', (data: string) => {
      setIdSocket(data)
    })

    socketRef.current.on('createMessage', (dataGot: ConversationDetailMessageType) => {
      setConversationDetailMessage(oldMsgs => [...oldMsgs, dataGot])
    })
    return () => {
      socketRef.current.disconnect();
    };

  }, []);

  useEffect(() => {
    // Scroll to the end of the container when data length updates
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [conversationDetailMessage.length]);


  return (
    <div className={classes.customer_center_item}>
      <div>
        <span
          onClick={() => {
            navigate(-1)
          }}
        >
          <KeyboardBackspaceIcon />
        </span>{' '}
        Back
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
          <div ref={containerRef}>
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

            {conversationDetailMessage.map((item, index, array) => {
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
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleMessage()
              }
            }}
          />
          <button type='submit' onClick={handleMessage}>
            <SendIcon color={valueMessage ? '#3B71FE' : ''} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CustomerCenterItem
