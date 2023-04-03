import Fade from '@material-ui/core/Fade'
import Menu from '@material-ui/core/Menu'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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
  Legend
)
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

const labels = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
]

export const data = {
  labels,
  datasets: [
    {
      label: '조회수',
      data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: '#00BF71',
      backgroundColor: 'white',
    },
  ],
}
export default function DialogChart(props: {
  open: boolean
  close: () => void
  anchorEl: null | HTMLElement
}) {
  return (
    <div>
      <Menu
        id='fade-menu'
        anchorEl={props.anchorEl}
        keepMounted
        open={props.open}
        onClose={props.close}
        TransitionComponent={Fade}
      >
        <div
          style={{
            height: '475px',
            display: 'flex',
          }}
        >
          {data && options && <Line options={options} data={data} />}
        </div>
      </Menu>
    </div>
  )
}
