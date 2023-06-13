import { MenuItem, Modal, Select } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@mui/styles'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState, useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import AppleIcon from '../../asset/images/AppleLogo.png'
import CHPlay from '../../asset/images/CHPlayIcon.png'
import noDataIcon from '../../asset/images/ListNone.png'
import MenuDots from '../../asset/images/MenuDots.png'
import plusIcon from '../../asset/images/plusIcon.png'
import searchIcon from '../../asset/images/searchIcon.png'
import { selectListData, selectTotalData, siteActions } from '../../features/site/siteSlice'
import { ROUTE } from '../../router/routes'
import { SiteType } from '../../types/site.type'
import { formatDate } from '../customercenter'
import SiteListMobile from '../siteListMobile'
import { io } from "socket.io-client"
import closeIcon from '../../asset/images/cancel.png';
import changePoint from '../../asset/images/ChangePoint.png';
import { selectUserData } from '../../features/user/userSlice'
import { TYPE_SORT } from '../../types/enum'

const useStyles = makeStyles({
  container: {
    padding: '24px',
    '@media (max-width: 768px)': {
      display: 'none',
    },
    '&>p:nth-of-type(1)': {
      padding: 0,
      margin: 0,
      fontSize: '18px',
      fontWeight: 500,
    },
    '&>div:nth-of-type(1)': {
      marginTop: '12px',
      display: 'flex',
      gap: '12px',
    },
    '&>div:nth-of-type(2)': {
      display: 'flex',
      gap: '23px',
      margin: '24px 0 12px 0',
      justifyContent: 'space-between',
      alignItems: 'center',
      '&>div': {
        display: 'flex',
        gap: '8px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '28px',
      },
    },
  },
  no_data: {
    height: 'calc(100vh - 258px - 24px) ',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    '&>img': {
      height: '240px',
      width: '240px',
    },
    '&>p': {
      margin: 0,
      padding: 0,
      fontSize: '18px',
      fontWeight: 500,
      color: '#70777F',
    },
  },
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
    },
  },
  modal: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.25)',
    border: 'none',
    width: '396px',
    // padding: '4px',
    '&>div:nth-of-type(1)': {
      display: 'flex', padding: '16px 24px 0px 32px', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center',
      '&>p': { padding: 0, margin: 0, fontSize: '20px', fontWeight: 500, textAlign: 'center', },
      '&>img': { cursor: 'pointer', height: '24px', width: '24px' },
    },
    '&>div:nth-of-type(2)': {
      padding: '0px 24px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      justifyContent: 'center',
      alignItems: 'center',
      '&>img': { height: '160px', width: '160px' },
      '&>div': {
        '&>p:nth-of-type(1)': {
          padding: 0, margin: '0 0 8px 0', fontSize: '18px', fontWeight: 700, color: '#111315', textAlign: 'center',
        },
        '&>p:nth-of-type(2)': {
          padding: 0, margin: 0, fontSize: '16px', fontWeight: 400, color: '#272B30', textAlign: 'center',
        }
      },
    },
    '&>div:nth-of-type(3)': {
      display: 'flex', padding: ' 0 24px 24px', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '16px',
      '&>button:nth-of-type(1)': {
        display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', borderRadius: '8px', backgroundColor: '#EBF3FF', padding: '10px 24px', textAlign: 'center',
        '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 700, color: '#2B83FE' },
      },
    },
  },
})

const CustomEndDateCell = (props: any) => {
  const { params } = props;
  const [showValue, setShowValue] = useState(true);

  const handleClick = () => {
    setShowValue(!showValue);
  };

  return (
    <div style={{ cursor: 'pointer' }} onClick={handleClick}>
      {showValue ? (
        <p style={{}}>{params.value}</p>
      ) : (
        <p>{params.row.expirationDate}</p>
      )}
    </div>
  );
};

const SiteListAndExpiredList = () => {
  const navigate = useNavigate()
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const listDataWebsite = useAppSelector(selectListData)
  const totalData = useAppSelector(selectTotalData)
  const socketRef = useRef<any>(null)
  const [openModal, setOpenModal] = useState(false);
  const userProfile = useAppSelector(selectUserData)
  const point = userProfile?.wallet?.balance || 0
  const [Message, setMessage] = useState<{
    title: string,
    content: string,
  }>({
    title: '',
    content: '',
  })

  const [page, setPage] = useState<number>(1)

  const perPage = 15

  const [rows, setRows] = useState<any>([{
    id: '',
    address: '',
    endDate: '',
    expirationDate: '',
    startDate: '',
    director: '',
  },]);
  
  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const handleClickModal = () => {
    setOpenModal(false)
    // window.location.reload()
    dispatch(siteActions.getList({ params: {perPage, _sort: TYPE_SORT.CREATED_AT_DESC } }))
  }



  const [paymentMethod, setPaymentMethod] = useState('1')
  const handleChangePaymentMethod = (event: SelectChangeEvent) => {
    setPaymentMethod(event.target.value)
  }

  const columns = [
    {
      field: 'address',
      headerName: '사이트',
      disableColumnMenu: true,
      sortable: false,
      minWidth: 200,
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
    {
      field: 'endDate',
      headerName: '만료일',
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params: any) => <CustomEndDateCell params={params} />,
    },
    {
      field: 'startDate',
      headerName: '개설일',
      disableColumnMenu: true,
      type: 'Date',
    },
    {
      field: 'director',
      headerName: '관리자',
      disableColumnMenu: true,
      sortable: false,
      type: 'email',
      minWidth: 300,
    },
    {
      field: 'action',
      headerName: '',
      sortable: false,
      disableColumnMenu: true,
      flex: 1,
      minWidth: 340,
      // maxWidth: 890,
      renderCell: (params: any) => {
        return (
          <div className={classes.cell_action}>
            <button>
              <p>관리</p>
            </button>

            <button
              onClick={() => {
                navigate(`${ROUTE.INFOWEBSITE}/${params.id}`)
              }}
            >
              <p>정보</p>
            </button>

            <button>
              <p>결제</p>
            </button>

            <button
              onClick={() => {
                navigate(`${ROUTE.REGISTERANDMODIFYGOOGLEPLAY}/${params.id}`)
              }}
            >
              <img src={CHPlay} />
              <p>신청</p>
            </button>

            <button
              onClick={() => {
                navigate(`${ROUTE.REGISTERANDMODIFYAPPLESTORE}/${params.id}`)
              }}
            >
              <img src={AppleIcon} />
              <p>신청</p>
            </button>

            <button onClick={() => { }}>
              <img src={MenuDots} />
            </button>

          </div>
        )
      },
    },
  ]

  useEffect(() => {
    dispatch(siteActions.getList({ params: { page, perPage, _sort: TYPE_SORT.CREATED_AT_DESC } }))
  }, [dispatch, page])

  useEffect(() => {
    if (!listDataWebsite) return;
    else {
      const data: any = [];
      listDataWebsite?.forEach((item: SiteType, index) => {
        const transformedData = {
          id: item._id,
          address: `${item.name || '사이트 이름 미정'} \n${item.webInfo?.domainName || '도메인 미정'}`,
          endDate: `${Math.floor(item.remainingDays)}일 남음`,
          expirationDate: formatDate(item.expirationDate || ''),
          startDate: formatDate(item.createdAt || ''),
          director: item.adminEmail,
        };
        data.push(transformedData);
      });
      setRows(data);
    }
  }, [listDataWebsite])

  
  useEffect(() => {
    socketRef.current = io('https://server.gmapps.net', {
      extraHeaders: {
        Authorization: "Bearer " + localStorage.getItem('accessToken'),
      }
    })

    // socketRef.current.on('getId', (data: string) => {
    //   setIdSocket(data)
    // })

    socketRef.current.on('adminApproveSite', (Message: {
      title: string,
      content: string,
    }) => {
      setMessage(Message)
      setOpenModal(true)
      
    })
    return () => {
      socketRef.current.disconnect();
    };

  }, []);

  return (
    <>
      <div className={classes.container}>
        <p>분류</p>
        <div>
          <TextField
            id='outlined-start-adornment'
            placeholder='Search bar...'
            size='small'
            InputProps={{
              startAdornment: (
                <InputAdornment
                  style={{ marginLeft: '2px', padding: 0 }}
                  position='start'
                >
                  <img
                    src={searchIcon}
                    style={{ height: '24px', width: '24px' }}
                  />
                </InputAdornment>
              ),
              style: {
                padding: '0 0 0 16px',
                margin: 0,
                borderRadius: '8px',
                borderColor: '#D0D5DD',
                fontSize: '16px',
                fontWeight: 400,
                height: '44px',
              },
            }}
            sx={{
              width: '240px',
            }}
          />
          <Select
            value={paymentMethod}
            onChange={handleChangePaymentMethod}
            displayEmpty
            sx={{
              width: '240px',
              height: '44px',
              borderColor: '#D0D5DD',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '24px',
            }}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={1}>활성화</MenuItem>
            <MenuItem value={2}>비활성화</MenuItem>
          </Select>
        </div>
        <div>
          <div>
            <p
              style={{ padding: 0, margin: 0, fontSize: '18px', fontWeight: 500 }}
            >
              생성한 사이트
            </p>
            {listDataWebsite?.length ? <div
              style={{
                height: '28px',
                width: '28px',
                borderRadius: '50%',
                backgroundColor: '#2B83FE',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p
                style={{
                  padding: 0,
                  margin: 0,
                  fontSize: '14px',
                  fontWeight: 700,
                  textAlign: 'center',
                  color: '#fff',
                }}
              >
                {listDataWebsite?.length}
              </p>
            </div> : <div />}
          </div>
          <button
            onClick={() => { navigate(ROUTE.SITECREATION) }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: 'none',
              backgroundColor: '#2B83FE',
              padding: '8px 12px',
              textAlign: 'center',
            }}
          >
            <img src={plusIcon} />
            <p
              style={{
                padding: 0,
                margin: 0,
                fontSize: '16px',
                fontWeight: 500,
                color: '#fff',
              }}
            >
              사이트 생성
            </p>
          </button>
        </div>
        {rows.length > 0 ?
          <div>
            <InfiniteScroll
              dataLength={listDataWebsite.length || 0}
              next={() => setPage(page + 1)}
              hasMore={true}
              loader={<></>}
            >
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
                    '& .MuiDataGrid-cell:focus': {
                      outline: 'none', // Remove the outline on focus
                    },
                    '& .MuiDataGrid-withBorderColor': {
                      outline: 'none',
                    },
                  },
                }}
              />
            </InfiniteScroll>
          </div>
          : <div className={classes.no_data}>
            <img src={noDataIcon} alt='' />
            <p>내역이 없습니다</p>
          </div>
        }
      </div>
      <SiteListMobile />
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        disableAutoFocus
      >
        <div className={classes.modal}>
          <div>
            <p></p>
            <img src={closeIcon} alt="close" onClick={handleCloseModal} />
          </div>
          <div>
            <img src={changePoint} alt="" />
            <div>
              <p>{Message.title}</p>
              <p>{Message.content}</p>
            </div>
          </div>
          <div>
            <button onClick={handleClickModal}>
              <p>오케</p>
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default SiteListAndExpiredList
