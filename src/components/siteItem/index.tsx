import {makeStyles} from '@mui/styles'
import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import moment from 'moment'
import appleIcon from '../../asset/images/AppleLogo.png'
import chplay from '../../asset/images/CHPlayIcon.png'

const useStyles = makeStyles({
  site_item_container: {
    marginTop: '1rem',
    background: '#FFFFFF',
    border: '0.5px solid #D0D5DD',
    borderRadius: '8px',
    padding: '10px 0',
    '&>div:nth-of-type(1)': {
      display: 'flex',
      justifyContent: 'space-between',
      '&>div:nth-of-type(1)': {
        display: 'flex',
        '&>div:nth-of-type(1)': {
          '&>p': {
            margin: 0,
            fontSize: '14px',
          },
          '&>p:nth-of-type(2)': {
            fontWeight: 400,
            fontSize: '10px',
            color: '#343941',
          },
        },
      },
    },
    '&>div:nth-of-type(3)': {
      padding: '0 12px',
      '&>p': {
        fontWeight: 400,
        fontSize: '14px',
        '&>span:nth-of-type(1)': {
          fontSize: '14px',
          marginRight: '2rem',
          fontWeight: 600,
        },
        '&>span:nth-of-type(2)': {
          color: '#FD3535',
        },
      },
      '&>p:nth-of-type(1)': {
        marginTop: '5px',
      },
      '&>p:nth-of-type(3)': {
        marginBottom: '0',
      },
    },
  },
  style_menu_item: {
    fontSize: '14px',
  },
})

const SiteItem = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className={classes.site_item_container}>
      <div>
        <div>
          <Checkbox />
          <div>
            <p>VN추가</p>
            <p>도메인 미정</p>
          </div>
        </div>
        <IconButton
          aria-label='more'
          id='long-button'
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='true'
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
      </div>
      <div style={{borderTop: '1px solid #D0D5DD', margin: '0 10px'}}></div>
      <div>
        <p>
          <span>만료일</span> <span>0</span> 남음
        </p>
        <p>
          <span>만료일</span> {moment().format('YYYY.MM.DD')}
        </p>
        <p>
          <span>관리자</span> redjword@naver.com
        </p>
      </div>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          className={classes.style_menu_item}
          key={1}
          onClick={handleClose}
        >
          관리
        </MenuItem>
        <MenuItem
          className={classes.style_menu_item}
          key={1}
          onClick={handleClose}
        >
          정보
        </MenuItem>
        <MenuItem
          className={classes.style_menu_item}
          key={1}
          onClick={handleClose}
        >
          결제
        </MenuItem>
        <MenuItem
          className={classes.style_menu_item}
          key={1}
          onClick={handleClose}
        >
          <img style={{width: '20px', height: '20px'}} src={chplay} alt='' />{' '}
          신청
        </MenuItem>
        <MenuItem key={1} onClick={handleClose}>
          <img style={{width: '20px', height: '20px'}} src={appleIcon} alt='' />{' '}
          신청
        </MenuItem>
      </Menu>
    </div>
  )
}

export default SiteItem
