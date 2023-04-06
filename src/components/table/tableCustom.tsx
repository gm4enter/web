import { makeStyles } from '@mui/styles'
import React from 'react'
import SortDown from '../../asset/icons/sort_down'
import SortUp from '../../asset/icons/sort_up'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'

const useStyles = makeStyles({
  table_container: {
    '&>table': {
      borderCollapse: 'collapse',
      width: '100%',
      '&>thead': {
        border: '',
        '&>tr': {
          textAlign: 'start',
          borderBottom: '1px solid #B1B5C3',
          '&>th': {
            textAlign: 'left',
            fontWeight: 700,
            fontSize: '20px',
            padding: '8px',
          },
        },
      },
      '&>tbody': {
        '&>tr': {
          borderBottom: '1px solid #B1B5C3',
          '&>td': {
            padding: '8px',
            fontWeight: 500,
            fontSize: '20px',
            textAlign: 'left',
          },
        },
      },
    },
  },
})

const TableCustom = (props: {
  column: {
    title: string
    dataIndex: string
    render: any
    sort: boolean
  }[]
  url: string
  style?: React.CSSProperties
}) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const data: any[] = [
    // {
    //   id: 1,
    //   제목: '[R]S/S 세인트 포켓 가디건',
    //   조회수: 123312321,
    //   게시자: '최민서',
    //   Platform: '',
    // },
  ]
  return (
    <div className={classes.table_container}>
      <table>
        <thead>
          <tr>
            {props.column.map((item) => (
              <th>
                {item.title}{' '}
                {item.sort && (
                  <span>
                    <SortDown /> <SortUp />
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((itemData: any, index) => (
            <tr>
              {props.column.map((item) => (
                <td>
                  {item.render(itemData[`${item.dataIndex}`])}{' '}
                  {item.dataIndex === '시청그래프' && (
                    <span
                      aria-controls='fade-menu'
                      aria-haspopup='true'
                      onClick={handleClick}
                      style={{margin: 0, padding: 0}}
                    >
                      <SearchOutlinedIcon />
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableCustom
