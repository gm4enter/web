import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from '@mui/material/TextField';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import plusIcon from '../../asset/images/plusIcon.png';
import searchIcon from '../../asset/images/searchIcon.png';
import { ROUTE } from '../../router/routes';


const columns: GridColDef[] = [
  { field: '사이트', headerName: '사이트', sortable: false, minWidth: 155 },
  { field: '만료일', headerName: '만료일', sortable: false, minWidth: 100 },
  { field: '개설일', headerName: '개설일', type: 'Date', minWidth: 100 },
  {
    field: '관리자',
    headerName: '관리자',
    type: 'email',
    minWidth: 200,
  },
  {
    field: 'function', headerName: '', sortable: false, minWidth: 100, renderCell: (params) => (
      <div style={{ display: 'flex', gap: '12px' }}>
      </div>
    )
  },
];

const rows = [
  { id: 1, 사이트: 'VN추가', 만료일: '130일 남음', 개설일: '2023.01.01', 관리자: 'redjword@naver.com', },
  { id: 2, 사이트: 'VN추가', 만료일: '130일 남음', 개설일: '2023.01.01', 관리자: 'redjword@naver.com', },
  { id: 3, 사이트: 'VN추가', 만료일: '130일 남음', 개설일: '2023.01.01', 관리자: 'redjword@naver.com', },
  { id: 4, 사이트: 'VN추가', 만료일: '130일 남음', 개설일: '2023.01.01', 관리자: 'redjword@naver.com', },
  { id: 5, 사이트: 'VN추가', 만료일: '130일 남음', 개설일: '2023.01.01', 관리자: 'redjword@naver.com', },
  { id: 6, 사이트: 'VN추가', 만료일: '130일 남음', 개설일: '2023.01.01', 관리자: 'redjword@naver.com', },
  { id: 7, 사이트: 'VN추가', 만료일: '130일 남음', 개설일: '2023.01.01', 관리자: 'redjword@naver.com', },
  { id: 8, 사이트: 'VN추가', 만료일: '130일 남음', 개설일: '2023.01.01', 관리자: 'redjword@naver.com', },
  { id: 9, 사이트: 'VN추가', 만료일: '130일 남음', 개설일: '2023.01.01', 관리자: 'redjword@naver.com', },
  { id: 10, 사이트: 'VN추가', 만료일: '130일 남음', 개설일: '2023.01.01', 관리자: 'redjword@naver.com', },
  { id: 11, 사이트: 'VN추가', 만료일: '130일 남음', 개설일: '2023.01.01', 관리자: 'redjword@naver.com', },
  { id: 12, 사이트: 'VN추가', 만료일: '130일 남음', 개설일: '2023.01.01', 관리자: 'redjword@naver.com', },
  { id: 13, 사이트: 'VN추가', 만료일: '130일 남음', 개설일: '2023.01.01', 관리자: 'redjword@naver.com', },
  { id: 14, 사이트: 'VN추가', 만료일: '130일 남음', 개설일: '2023.01.01', 관리자: 'redjword@naver.com', },
  { id: 15, 사이트: 'VN추가', 만료일: '130일 남음', 개설일: '2023.01.01', 관리자: 'redjword@naver.com', },
  { id: 16, 사이트: 'VN추가', 만료일: '130일 남음', 개설일: '2023.01.01', 관리자: 'redjword@naver.com', },
  { id: 17, 사이트: 'VN추가', 만료일: '130일 남음', 개설일: '2023.01.01', 관리자: 'abc@123.com', },
];

const SiteListAndExpiredList = () => {
  const navigate = useNavigate();

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
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
        <button onClick={() => { navigate(ROUTE.INFOWEBSITE) }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', backgroundColor: '#2B83FE', padding: '8px 12px', textAlign: 'center' }}>
          <img src={plusIcon} />
          <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#fff' }}>사이트 생성</p>
        </button>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        hideFooter
        sx={{
          '& .MuiDataGrid-main': {
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