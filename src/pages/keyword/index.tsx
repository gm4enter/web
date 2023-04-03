import {makeStyles} from '@material-ui/styles'
import React from 'react'
import background from '../../asset/images/background_home.png'
import InputSearch from '../../components/input_search'
import CloseIcon from '@material-ui/icons/Close'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import VideoIcon from '../../asset/icons/video_icon'
import Shorts from '../../asset/icons/shorts'
import TableCustom from '../../components/table/tableCustom'
import {COLUMN_TABLE_HOME, COLUMN_TABLE_KEYWORD} from '../../constants/column'
import buttonAdd from '../../asset/images/button_add.png'
import SearchIcon from '@material-ui/icons/Search'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'
import {Line} from 'react-chartjs-2'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

const useStyles = makeStyles({
  home_container: {
    '&>div:nth-of-type(1)': {
      backgroundImage: `url("${background}")`,
      height: '374px',
      textAlign: 'center',
      padding: '60px 0',
      boxSizing: 'border-box',
      '&>p:nth-of-type(1)': {
        fontWeight: 700,
        fontSize: '28px',
        width: '560px',
        margin: '0 auto',
        marginBottom: '1rem',
      },
      '&>p:nth-of-type(2)': {
        fontWeight: 400,
        fontSize: '16px',
        color: '#353945',
        width: '530px',
        margin: '0 auto',
        marginBottom: '1.5rem',
      },
      '&>div:nth-of-type(2)': {
        marginTop: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#353945',
        '&>span:nth-of-type(1)': {
          color: 'black',
          marginRight: '1rem',
        },
      },
    },
    '&>div:nth-of-type(2)': {
      textAlign: 'center',
      fontWeight: 500,
      // fontSize: '24px',
      '&>div': {
        padding: '1rem 2rem',
      },
      '&>p:nth-of-type(1)': {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 2rem',
        fontSize: '18px',
        '&>span:nth-of-type(1)': {
          '&>span': {
            color: '#3B71FE',
            fontWeight: 600,
          },
        },
        '&>span:nth-of-type(2)': {
          border: '1px solid #B1B5C4',
          borderRadius: '10px',
          color: '#141416',
          padding: '12px 16px',
          cursor: 'pointer',
        },
      },
    },
  },
  span_style: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 12px 8px 16px',
    boxSizing: 'border-box',
    gap: '10px',

    height: '39px',

    border: '1px solid #777E90',
    borderRadius: '100px',
    margin: '0 0.5rem',
    '&>svg': {
      color: '#777E90',
    },
  },
  span_tab_style: {
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '30px',
    display: 'flex',
    alignItems: 'center',
  },
})

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: [5, 22, 22, 22.5, 23, 22, 22],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

const Keyword = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  return (
    <div className={classes.home_container}>
      <div>
        <p>원하는 키워드를 검색해보세요.</p>
        <p>
          구독자와 영상조회수를 분석하기 위해서는 키워드를 입력후에
          확인해보세요. 유튜브 채널을 운영하는데 필수 분석툴 입니다.
        </p>
        <InputSearch
          onChange={() => {}}
          placeholder='검색창.......'
          buttonSend={
            <span style={{color: 'white'}}>
              <SearchIcon />
            </span>
          }
        />
        <div>
          <span>검색기록</span>
          <span className={classes.span_style}>
            하이
            <CloseIcon />
          </span>
          <span className={classes.span_style}>
            우리
            <CloseIcon />
          </span>
          <span className={classes.span_style}>
            하이하이하이
            <CloseIcon />
          </span>
          <span className={classes.span_style}>
            하이
            <CloseIcon />
          </span>
          <span className={classes.span_style}>
            하이
            <CloseIcon />
          </span>
        </div>
      </div>
      <div>
        <Line options={options} data={data} />
        <p>
          <span>
            검색 키워드: <span>베트남 </span>
          </span>{' '}
          <span>커뮤니티 추가 요청</span>
        </p>
        <div>
          <TableCustom column={COLUMN_TABLE_KEYWORD} url='' />
          <p>
            <img
              src={buttonAdd}
              alt=''
              style={{width: '44px', height: '44px'}}
            />
            <p
              style={{
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '22px',
                padding: 0,
                margin: 0,
              }}
            >
              참고 항목
            </p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Keyword
