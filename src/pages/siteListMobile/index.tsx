import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import {makeStyles} from '@mui/styles'
import searchIcon from '../../asset/images/searchIcon.png'
import AddIcon from '@mui/icons-material/Add'
import {Checkbox} from '@mui/material'
import SiteItem from '../../components/siteItem'

const useStyles = makeStyles({
  '@media (min-width: 768px)': {
    site_list_mobile: {
      display: 'none',
    },
  },
  site_list_mobile: {
    padding: '12px',
    '&>p': {
      display: 'flex',
      justifyContent: 'space-between',
      '&>span': {},
    },
    '&>div:nth-of-type(2)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '1rem',
      '&>span': {
        display: 'flex',
        '&>span': {
          width: '28px',
          height: '28px',
          display: 'flex',
          background: '#2B83FE',
          borderRadius: '100px',
          justifyContent: 'center',
          fontSize: '12px',
          color: 'white',
          alignItems: 'center',
          marginLeft: '8px',
        },
      },
    },
    '&>div:nth-of-type(3)': {
      marginTop: '1rem',
      '&>div:nth-of-type(1)': {
        background: '#F1F1F1',
        borderRadius: '4px',
        color: '#70777F',
        fontSize: '14px',
      },
    },
  },
})

const SiteListMobile = () => {
  const classes = useStyles()
  return (
    <div className={classes.site_list_mobile}>
      <p>
        <span>분류</span>{' '}
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={1}
          sx={{
            height: '32px',
            borderColor: '#D0D5DD',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '24px',
            background: '#F1F1F1',
            borderRadius: '100px',
          }}
          inputProps={{'aria-label': 'Without label'}}
        >
          <MenuItem value={1}>사용중</MenuItem>
          <MenuItem value={2}>사용중</MenuItem>
          <MenuItem value={3}>사용중</MenuItem>
        </Select>{' '}
      </p>
      <TextField
        id='outlined-start-adornment'
        placeholder='Search bar...'
        size='small'
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment
              style={{marginLeft: '2px', padding: 0}}
              position='start'
            >
              <img src={searchIcon} style={{height: '24px', width: '24px'}} />
            </InputAdornment>
          ),
          style: {
            padding: '0 0 0 16px',
            margin: 0,
            borderRadius: '8px',
            borderColor: '#D0D5DD',
            fontSize: '16px',
            fontWeight: 400,
          },
        }}
      />
      <div>
        <span>
          생성한 사이트 <span>2</span>
        </span>
        <Button
          variant='contained'
          style={{background: '#2B83FE', borderRadius: '0'}}
        >
          <AddIcon /> 사이트 생성
        </Button>
      </div>
      <div>
        <div>
          <Checkbox defaultChecked /> 모두 선택
        </div>
        <SiteItem />
      </div>
    </div>
  )
}

export default SiteListMobile
