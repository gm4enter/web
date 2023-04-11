import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import iconPlusBlue from '../../asset/images/iconPlusBlue.png'
import avatarDemoCustomer from '../../asset/images/avatarDemoCustomer.png'
import GalleryAdd from '../../asset/images/GalleryAdd.png'
import Plain from '../../asset/images/Plain.png'
import avatarChat1 from '../../asset/images/avatarChat1.png'
import closeIcon from '../../asset/images/cancel.png'
import MenuDots from '../../asset/images/MenuDots.png'
import arrowIcon from '../../asset/images/arrow.png'
import moment from 'moment'
import { makeStyles } from '@mui/styles';
import { Modal } from '@mui/material';
import { Input } from '../../components/base/input/Input';
import {InputImage} from '../../components/base/input/InputImage';



const data = [
  { id: 1, title: '1:1문의 이메일무단수집거부 이메일무단수집거부 이메일무단수집거부 이메일무단수집거부 이메일무단수집거부 이메일무단수집거부', button: '문의작성' },
  { id: 2, title: '공지사항', button: '공지사항' },
  { id: 3, title: '자주묻는질문', button: '자주묻는질문' },
  { id: 4, title: '이용약관', button: '이용약관' },
  { id: 5, title: '개인정보처리방침', button: '개인정보처리방침' },
  { id: 6, title: '이메일무단수집거부', button: '이메일무단수집거부' },
]
const data2 = [
  { id: 1, title: '1:1문의 이메일무단수집거부 이메일무단수집거부 이메일무단수집거부 이메일무단수집거부 이메일무단수집거부 이메일무단수집거부', button: '문의작성' },
  { id: 2, title: '공지사항', button: '공지사항' },
  { id: 2, title: '공지사항', button: '공지사항' },
  { id: 2, title: '공지사항', button: '공지사항' },
  { id: 2, title: '공지사항', button: '공지사항' },
]

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.25)',
  border: 'none',
};

const dataImg = [
  avatarDemoCustomer,
  avatarDemoCustomer,
  avatarDemoCustomer,
  avatarDemoCustomer,
  avatarDemoCustomer,
  avatarDemoCustomer,
  avatarDemoCustomer,
  avatarDemoCustomer,
  avatarDemoCustomer,
  avatarDemoCustomer,
  avatarDemoCustomer,
  avatarDemoCustomer,
  avatarDemoCustomer,
  avatarDemoCustomer,
  avatarDemoCustomer,
]

const useStyles = makeStyles({
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
})

const CustomerCenter = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const classes = useStyles();
  const ref = useRef<HTMLDivElement>(null)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{
      height: 'calc(100vh - 76px)',
      marginRight: '24px',
      display: 'flex',
      // position: 'absolute',
      // top: 76,
      // right: 0,
      // bottom: 0,
      // left: 256,

    }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '40%', height: '100%', borderLeft: '1px solid #D0D5DD', borderRight: '1px solid #D0D5DD', }}>
        <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', padding: '24px 16px', borderBottom: '1px solid #D0D5DD', }}>
          <p style={{ padding: 0, margin: 0 }}>1:1문의</p>
          <button onClick={handleOpen} style={{ display: 'flex', padding: '8px', gap: '4px', backgroundColor: '#fff', border: '1px solid #2B83FE ', borderRadius: '4px', alignItems: 'center' }}>
            <img src={iconPlusBlue} style={{ height: '20px', width: '20px' }} alt="" />
            <p style={{ padding: 0, margin: 0, color: '#2B83FE' }}>문의작성</p>
          </button>
        </div>
        <div
          style={{ marginLeft: '16px', flex: 1, overflow: 'auto', }}
        >
          {data.map((item, index) => (
            <div
              style={
                (selectedIndex === index)
                  ? {
                    display: 'flex', padding: '12px', gap: '12px',
                    color: '#272B30',
                    backgroundColor: 'rgba(43, 131, 254, 0.1)',
                    borderRadius: '8px',
                  }
                  : {
                    display: 'flex', padding: '12px', gap: '12px',
                    color: '#272B30',
                  }
              }
              onClick={() => setSelectedIndex(index)}
            >
              <img src={avatarDemoCustomer} style={{ height: '110px', width: '92px', boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.12)', borderRadius: '8px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <p style={{
                  padding: 0, margin: 0, fontSize: '16px', fontWeight: 400,
                  maxWidth: '100%',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>{item.title}</p>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <p style={{ padding: 0, margin: 0, fontSize: '14px', fontWeight: 400, color: '#70777F' }}>상태: </p>
                  <p style={{ padding: '4px 8px', margin: 0, fontSize: '14px', fontWeight: 400, backgroundColor: '#FFE7E4', borderRadius: '10px' }}>추가 질문</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', width: '60%', height: '100%', borderRight: '1px solid #D0D5DD', }}>
        <div style={{ padding: '32px 24px', borderBottom: '1px solid #D0D5DD', }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src={avatarChat1} style={{ height: '54px', width: '54px', borderRadius: '50%' }} alt="" />
              <div style={{ display: "flex", flexDirection: 'column', gap: '8px' }}>
                <p style={{ padding: 0, margin: '0', fontSize: '18px', fontWeight: 700, color: '#141416' }}>name12</p>
                <p style={{ padding: 0, margin: '0', fontSize: '14px', fontWeight: 400, color: '#272B30' }}>(684) 555-0102</p>
              </div>
            </div>
            <img src={MenuDots} style={{ height: '24px', width: '24px', border: '.5px solid #B1B5C3', padding: '4px', borderRadius: '10px' }} alt="" />
          </div>
          <p style={{ padding: 0, margin: '16px 0 0 0', fontSize: '16px', fontWeight: 500, color: '#2D2F31' }}>아까 입금했는데 이기명이름으로 30만원했어요 확인해주 세요.</p>
        </div>
        <div style={{ padding: '24px 24px 0 24px', display: "flex", flexDirection: 'column', flex: 1, overflow: 'auto', backgroundColor: '#FAFAFA', }}>
          <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 700, color: '#262626' }}>
            댓글
            <span style={{ color: '#0078FF' }}> (3)</span>
          </p>
          <div ref={ref}>
            <div>
              <div className={classes.message_user_container}>
                <img
                  src={avatarChat1}
                  alt=''
                />
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
              style={{ marginLeft: '60px', borderLeft: '1px solid #DCE1E7' }}
            >
              <img
                style={{ width: '40px', height: '40px' }}
                src={avatarChat1}
                alt=''
              />
              <div>
                <p>우리집</p>
                <p>{moment().format('YYYY-MM-DD')}</p>
                <p>안녕하세요. 확인 되셨습니다. 감사합니다.</p>
                <img
                  src={avatarChat1}
                  alt=''
                />
              </div>
              <img src={arrowIcon} alt='' />
            </div>
            <div
              className={classes.message_user_container}
              style={{ marginLeft: '60px', borderLeft: '1px solid #DCE1E7' }}
            >
              <img
                style={{ width: '40px', height: '40px' }}
                src={avatarChat1}
                alt=''
              />
              <div>
                <p>우리집</p>
                <p>{moment().format('YYYY-MM-DD')}</p>
                <p>안녕하세요. 확인 되셨습니다. 감사합니다.</p>
                <img
                  src={avatarChat1}
                  alt=''
                />
              </div>
              <img src={arrowIcon} alt='' />
            </div>
            <div
              className={classes.message_user_container}
              style={{ marginLeft: '60px' }}
            >
              <img
                style={{ width: '40px', height: '40px' }}
                src={avatarChat1}

                alt=''
              />
              <div>
                <p>우리집</p>
                <p>{moment().format('YYYY-MM-DD')}</p>
                <p>안녕하세요. 확인 되셨습니다. 감사합니다.</p>
                <img
                  src={avatarChat1}
                  alt=''
                />
              </div>
              <img src={arrowIcon} alt='' />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: 'center', padding: '24px 20px', borderTop: '1px solid #3B71FE', gap: '8px' }}>
          <button style={{ display: 'flex', padding: '4px', backgroundColor: '#fff', border: 'none', borderRadius: '10px', alignItems: 'center' }}>
            <img src={GalleryAdd} style={{ height: '32px', width: '32px' }} alt="" />
          </button>
          <input style={{ flex: 1, fontSize: '16px', fontWeight: 500, border: '1px solid #B1B5C3', padding: '12px 16px', borderRadius: '12px', }} placeholder='Type here.......' />
          <button type='submit' style={{ display: 'flex', padding: '4px', backgroundColor: '#fff', border: 'none', borderRadius: '10px', alignItems: 'center' }}>
            <img src={Plain} style={{ height: '32px', width: '32px' }} alt="" />
          </button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        disableAutoFocus
      >
        <div style={style}>
          <div style={{ display: 'flex', padding: '16px 32px', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EDEDED', textAlign: 'center', }}>
            <p style={{ padding: 0, margin: 0, fontSize: '20px', fontWeight: 500, textAlign: 'center', }}>문의 작성</p>
            <img src={closeIcon} alt="close" style={{ cursor: 'pointer', height: '24px', width: '24px' }} onClick={handleClose} />
          </div>
          <div style={{ padding: '24px 32px 32px 32px', alignItems: 'center', borderBottom: '1px solid #EDEDED', }}>
            <Input containerStyle={{ width: '430px' }} value='' onChange={() => { }} label='연락처' placeholder='휴대폰 번호를 입력해주세요.' />
            <Input containerStyle={{ width: '430px', marginTop: '16px' }} value='' onChange={() => { }} label='제목' placeholder='휴대폰 번호를 입력해주세요.' />
            <textarea
              style={{
                width: '398px', marginTop: '16px',
                border: '1px solid #D0D5DD',
                borderRadius: '8px',
                padding: '10px 16px',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px'
              }}
              rows={5}
              placeholder='내용을 입력해주세요.'
            />
            <div>
              <p style={{ padding: 0, margin: '16px 0 8px 0', fontSize: '16px', fontWeight: 500, lineHeight: '24px', color: '#272B30', }}>캡처이미지 & 이미지 자료</p>
              <InputImage />
            </div>
          </div>
          <button onClick={handleClose} style={{ width: '100%', justifyContent: 'center', alignItems: 'center', border: 'none', borderRadius: '8px', backgroundColor: '#2B83FE', padding: '10px 24px', textAlign: 'center', }}>
            <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#fff' }}>완료</p>
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default CustomerCenter