import {makeStyles} from '@mui/styles'
import React, {useRef, useState} from 'react'
import moment from 'moment'
import SendIcon from '../../asset/icons/send'
import GalleryAdd from '../../asset/images/GalleryAdd.png'
import MenuDots from '../../asset/images/MenuDots.png'
import arrowIcon from '../../asset/images/arrow.png'
import avatarChat1 from '../../asset/images/avatarChat1.png'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import avatarDemoCustomer from '../../asset/images/avatarDemoCustomer.png'
import closeIcon from '../../asset/images/cancel.png'
import iconPlusBlue from '../../asset/images/iconPlusBlue.png'
import {Input} from '../../components/base/input/Input'
import {InputImage} from '../../components/base/input/InputImage'
import {useNavigate} from 'react-router'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


const useStyles = makeStyles({
  customer_center_item: {
    paddingBottom: '100px',
    '&>div:nth-of-type(1)': {
      display: 'flex',
      alignItems: 'center',
      padding: '12px',
      '&>span': {
        marginRight: '8px',
      },
    },
    '&>div:nth-of-type(2)': {
      display: 'flex',
      flexDirection: 'column',
      width: '60%',
      height: '100%',
      borderRight: '1px solid #D0D5DD',
      '&>div:nth-of-type(1)': {
        padding: '12px',
        borderBottom: '1px solid #D0D5DD',

        background: '#F1F1F1',
        '&>div:nth-of-type(1)': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '&>div': {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            '&>img': {height: '44px', width: '44px', borderRadius: '50%'},
            '&>div': {
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              '&>p': {padding: 0, margin: 0},
              '&>p:nth-of-type(1)': {
                fontSize: '16px',
                fontWeight: 700,
                color: '#141416',
              },
              '&>p:nth-of-type(2)': {
                fontSize: '12px',
                fontWeight: 400,
                color: '#272B30',
              },
            },
          },
          '&>img': {
            height: '24px',
            width: '24px',
            // border: '.5px solid #B1B5C3',
            padding: '4px',
            borderRadius: '10px',
          },
        },
        '&>p': {
          padding: 0,
          margin: '16px 0 0 0',
          fontSize: '14px',
          fontWeight: 500,
          color: '#2D2F31',
        },
      },
      '&>div:nth-of-type(2)': {
        padding: '12px 12px 0 12px',
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
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        padding: '24px 20px',
        boxShadow: '0px -1px 2px rgba(0, 0, 0, 0.16)',
        gap: '8px',
        background: 'white',
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
        width: '100%',
      },
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
})

const CustomerCenterItem = () => {
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = React.useState(1)
  const ref = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const [valueInput, setValueInput] = useState('')

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
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
              style={{marginLeft: '40px', borderLeft: '1px solid #DCE1E7'}}
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
              style={{marginLeft: '40px', borderLeft: '1px solid #DCE1E7'}}
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
              style={{marginLeft: '40px'}}
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
    </div>
  )
}

export default CustomerCenterItem
