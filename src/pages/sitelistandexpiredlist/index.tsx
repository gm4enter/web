import { makeStyles } from '@material-ui/styles';
import InputAdornment from '@mui/material/InputAdornment';
import { SelectChangeEvent } from "@mui/material/Select";
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppleIcon from '../../asset/images/AppleLogo.png';
import CHPlay from '../../asset/images/CHPlayIcon.png';
import plusIcon from '../../asset/images/plusIcon.png';
import searchIcon from '../../asset/images/searchIcon.png';
import MenuDots from '../../asset/images/MenuDots.png';
import { ROUTE } from '../../router/routes';

const useStyles = makeStyles({
  cell_action: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    '&>button': {
      backgroundColor: '#fff',
      padding: '10px 12px',
      border: '.5px solid #D0D5DD',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      cursor: 'pointer',
      '&>img': {
        height: '20px',
        width: '20px',
      },
      '&>p': {
        textAlign: 'center',
        padding: '0',
        margin: '0',
      },
    },
    '&>button:nth-of-type(6)': {
      backgroundColor: 'transparent',
      padding: '10px 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      border: 'none',
      '&>img': {
        height: '20px',
        width: '20px',
      },
    }
  },
})



const rows = [
  { id: 1, address: 'VN추가 \n도메인 미정', endDate: '130일 남음', startDate: '2023.01.01', director: 'tiendatnguyenitnguyen@123.com', },
  { id: 2, address: 'VN추가 \n onjob (world1.shop)', endDate: '130일 남음', startDate: '2023.01.02', director: 'redjword@naver.com', },
  { id: 3, address: 'VN추가 \n onjob (world1.shop)', endDate: '130일 남음', startDate: '2023.01.12', director: 'redjword@naver.com', },
  { id: 4, address: 'VN추가 \n onjob (world1.shop)', endDate: '130일 남음', startDate: '2023.01.03', director: 'redjword@naver.com', },
  { id: 5, address: 'VN추가 \n onjob (world1.shop)', endDate: '130일 남음', startDate: '2023.01.04', director: 'redjword@naver.com', },
  { id: 6, address: 'VN추가 \n onjob (world1.shop)', endDate: '130일 남음', startDate: '2023.01.05', director: 'redjword@naver.com', },
  { id: 7, address: 'VN추가 \n onjob (world1.shop)', endDate: '130일 남음', startDate: '2023.01.06', director: 'redjword@naver.com', },
  { id: 8, address: 'VN추가 \n onjob (world1.shop)', endDate: '130일 남음', startDate: '2023.01.07', director: 'redjword@naver.com', },
  { id: 9, address: 'VN추가 \n onjob (world1.shop)', endDate: '130일 남음', startDate: '2023.01.08', director: 'redjword@naver.com', },
  { id: 10, address: 'VN추가 \n onjob (world1.shop)', endDate: '130일 남음', startDate: '2023.01.09', director: 'redjword@naver.com', },
  { id: 11, address: 'VN추가 \n onjob (world1.shop)', endDate: '130일 남음', startDate: '2023.01.10', director: 'redjword@naver.com', },
  { id: 12, address: 'VN추가 \n onjob (world1.shop)', endDate: '130일 남음', startDate: '2023.01.11', director: 'redjword@naver.com', },
];

const SiteListAndExpiredList = () => {
  const navigate = useNavigate();
  const classes = useStyles()

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const columns = [
    {
      field: 'address', headerName: '사이트', disableColumnMenu: true, sortable: false, flex: .5, minWidth: 150,
      renderCell: (params: any) => (
        <div style={{ whiteSpace: 'pre-line' }}>
          {params.value.split('\n').map((line: string, i: number) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      ),
    },
    { field: 'endDate', headerName: '만료일', disableColumnMenu: true, sortable: false, minWidth: 100 },
    { field: 'startDate', headerName: '개설일', disableColumnMenu: true, type: 'Date', minWidth: 100 },
    {
      field: 'director',
      headerName: '관리자',
      disableColumnMenu: true,
      sortable: false,
      type: 'email',
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'action',
      headerName: '',
      sortable: false,
      disableColumnMenu: true,
      flex: 1,
      renderCell: (params: any) => {
        return (
          <div className={classes.cell_action}>
            <button >
              <p>관리</p>
            </button>
            <button onClick={() => { navigate(ROUTE.INFOWEBSITE) }} >
              <p>정보</p>
            </button>
            <button >
              <p>결제</p>
            </button>
            <button onClick={() => { navigate(ROUTE.REGISTERANDMODIFYGOOGLEPLAY) }}>
              <img src={CHPlay} />
              <p>신청</p>
            </button>
            <button onClick={() => { navigate(ROUTE.REGISTERANDMODIFYAPPLESTORE) }}>
              <img src={AppleIcon} />
              <p>신청</p>
            </button>
            <button onClick={() => { }}>
              <img src={MenuDots} />
            </button>
          </div>

        )
      }
    },
  ];

  const columnStyles = {
    action: {
      fontWeight: 'bold',
      color: 'blue',
    },
  };


  return (
    <div style={{ padding: "24px" }}>
      <p style={{ padding: 0, margin: 0, fontSize: '18px', fontWeight: 500, }}>분류</p>
      <div style={{ marginTop: '12px', display: 'flex', gap: '12px' }}>
        <TextField
          id="outlined-start-adornment"
          placeholder="Search bar..."
          size="small"
          InputProps={{
            startAdornment: <InputAdornment style={{ marginLeft: '2px', padding: 0 }} position="start"><img src={searchIcon} style={{ height: '24px', width: '24px' }} /></InputAdornment>,
            style: { padding: '0 0 0 16px', margin: 0, borderRadius: '8px', borderColor: '#D0D5DD', fontSize: '16px', fontWeight: 400 },
          }}
        />
        <select style={{ width: '240px', border: '1px solid #D0D5DD', borderRadius: '8px', padding: '10px 16px', fontSize: '16px', fontWeight: 500, lineHeight: '24px' }} >
          <option value="사용중">사용중</option>
          <option value="사용중">사용중</option>
          <option value="사용중">사용중</option>
        </select>

        {/* <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          sx={{
            minWidth: 300,
            backgroundColor: 'rgba(238, 242, 242, 0.4)',

            borderColor: '#D0D5DD',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '24px'
          }}
          inputProps={{ "aria-label": "Without label", style: { padding: '10px' } }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
      </div>
      <div style={{ display: 'flex', gap: '23px', margin: '24px 0 12px 0', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', height: '28px' }}>
          <p style={{ padding: 0, margin: 0, fontSize: '18px', fontWeight: 500, }}>생성한 사이트</p>
          <div style={{ height: '28px', width: '28px', borderRadius: '50%', backgroundColor: '#2B83FE', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p style={{ padding: 0, margin: 0, fontSize: '14px', fontWeight: 700, textAlign: 'center', color: '#fff' }}>2</p>
          </div>
        </div>
        <button onClick={() => { }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', backgroundColor: '#2B83FE', padding: '8px 12px', textAlign: 'center' }}>
          <img src={plusIcon} />
          <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#fff' }}>사이트 생성</p>
        </button>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        // columnStyles={columnStyles}
        checkboxSelection
        disableRowSelectionOnClick
        hideFooter
        sx={{
          '& .MuiDataGrid-main': {
            display: 'flex',
            '& .MuiDataGrid-columnHeaders': {
              borderColor: '#D0D5DD',
              backgroundColor: '#F1F1F1',
              color: '#000',
              fontSize: '16px',
              fontWeight: 700,
            },
            '&>div: nth-child(2)': {
              overflow: 'initial !important',
            },
          },
        }}
      />
    </div>
  )
}

export default SiteListAndExpiredList