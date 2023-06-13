import { Checkbox, Modal } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { makeStyles } from '@mui/styles';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../apis/axiosClient';
import { SITE, THEME, USER } from '../../apis/urlConfig';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import eyeIcon from '../../asset/images/EyeScan.png';
import closeIcon from '../../asset/images/cancel.png';
import wallet02 from '../../asset/images/Wallet 02.png';
import { snackBarActions } from '../../components/snackbar/snackbarSlice';
import { planActions, selectListData } from '../../features/plan/planSlice';
import { ROUTE } from '../../router/routes';
import { PlanType } from '../../types/plan.type';
import { ThemeType } from '../../types/theme.type';
import { numberWithCommas } from '../../utils';
import { transactionActions } from '../../features/transaction/transactionSlice';
import { TYPE_SORT } from '../../types/enum';
import { selectUserData, userActions } from '../../features/user/userSlice';
import { siteActions } from '../../features/site/siteSlice';

const useStyles = makeStyles({
    container_site: {
        padding: '24px',
        '&>div:nth-of-type(1)': {
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '10px 12px',
            '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, },
            '&>div': {
                backgroundColor: 'rgba(235, 243, 255, 0.24)',
                border: '1px solid rgba(112, 119, 127, 0.2)',
                borderRadius: '4px',
                padding: '10px 24px',
                cursor: 'pointer',
                '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500 },
            },
        },
        '&>div:nth-of-type(2)': {
            display: 'flex',
            padding: '10px 12px',
            marginTop: '16px',
            '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, marginRight: '77px' },
        },
        '&>div:nth-of-type(3)': {
            display: 'flex',
            gap: '81px',
            padding: '10px 12px',
            marginTop: '16px',
            '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, },
            '&>div': {
                '&>p:nth-of-type(1)': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 400, marginBottom: '8px' },
                '&>p:nth-of-type(2)': { padding: 0, margin: 0, fontSize: '14px', fontWeight: 400, color: '#70777F' },
            },
        },
        '&>div:nth-of-type(4)': {
            display: 'flex',
            gap: '63px',
            padding: '10px 12px',
            marginTop: '16px',
            '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, },
        },
        '&>div:nth-of-type(5)': {
            marginTop: '22px',
            display: 'flex',
            justifyContent: 'center',
            '&>button': {
                border: 'none', backgroundColor: '#2B83FE', padding: '8px 24px',
                '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, textAlign: 'center', color: '#fff' },
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
        // padding: '4px',
        '&>div:nth-of-type(1)': {
            display: 'flex', padding: '16px 24px 16px 32px', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EDEDED', textAlign: 'center',
            '&>p': { padding: 0, margin: 0, fontSize: '20px', fontWeight: 500, textAlign: 'center', },
            '&>img': { cursor: 'pointer', height: '24px', width: '24px' },
        },
        '&>div:nth-of-type(2)': {
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            '&>div': {
                width: '800px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '&>div': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#4B5563' },
                    '&>img': { height: '24px', width: '24px' },
                },
                '&>img': { cursor: 'pointer', height: '24px', width: '24px', margin: '0px 10px 16px 10px' },
            },
        },
        '&>div:nth-of-type(3)': {
            display: 'flex', padding: '16px 44px 24px 24px', justifyContent: 'flex-end', alignItems: 'center', borderTop: '1px solid #EDEDED', textAlign: 'center', gap: '16px',
            '&>button:nth-of-type(1)': {
                display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #D0D5DD', borderRadius: '8px', backgroundColor: '#fff', padding: '10px 24px', textAlign: 'center',
                '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#272B30' },
            },
            '&>button:nth-of-type(2)': {
                display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', borderRadius: '8px', backgroundColor: '#2B83FE', padding: '10px 24px', textAlign: 'center',
                '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#fff' },
            },
        },
    },

    modalNotEnoughPoint: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.25)',
        border: 'none',
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
                display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', borderRadius: '8px', backgroundColor: '#2B83FE', padding: '10px 24px', textAlign: 'center',
                '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#fff' },
            },
        },
    },

    '@media (max-width: 768px)': {
        container_site: {
            height: 'calc(100vh - 108px)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            '&>div:nth-of-type(1)': {
                display: 'block',
                padding: '0',
                '&>div': {
                    marginTop: '12px',
                    textAlign: 'center',

                    '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500 },
                },
            },
            '&>div:nth-of-type(2)': {
                display: 'block',
                padding: '0',
                marginTop: '16px',
                '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, marginRight: '0' },
            },
            '&>div:nth-of-type(3)': {
                display: 'block',
                padding: 0,
                marginTop: '16px',
            },
            '&>div:nth-of-type(4)': {
                display: 'block',
                padding: 0,
                flex: 1,
            },
            '&>div:nth-of-type(5)': {
                marginTop: '16px',
                display: 'flex',
                justifyContent: 'center',
                '&>button': {
                    flex: 1,
                    borderRadius: '4px',
                    '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, textAlign: 'center', color: '#fff' },
                },
            },
        },
        modal: {
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            // height: '312px',
            transform: 'translate(0%, 0%)',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 0,
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            '&>div:nth-of-type(1)': {
                display: 'flex', padding: '16px 24px 16px 32px', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EDEDED', textAlign: 'center',
                '&>p': { padding: 0, margin: 0, fontSize: '20px', fontWeight: 500, textAlign: 'center', color: '#111315' },
                '&>img': { cursor: 'pointer', height: '24px', width: '24px' },
            },
            '&>div:nth-of-type(2)': {
                flex: 1,
                padding: '16px 24px',
                '&>div': {
                    width: '100%',
                    '&>div': {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#4B5563' },
                        '&>img': { height: '24px', width: '24px' },
                    },
                    '&>img': { cursor: 'pointer', height: '24px', width: '24px', margin: '0px 10px 16px 10px' },
                },
            },
            '&>div:nth-of-type(3)': {
                display: 'flex', padding: '24px 16px', justifyContent: 'flex-end', alignItems: 'center', borderTop: 'none', textAlign: 'center', gap: '10px',
                '&>button:nth-of-type(1)': {
                    flex: 1, justifyContent: 'center', alignItems: 'center', border: '1px solid #D0D5DD', borderRadius: '8px', backgroundColor: '#fff', padding: '10px 24px', textAlign: 'center',
                    '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#272B30' },
                },
                '&>button:nth-of-type(2)': {
                    flex: 1, justifyContent: 'center', alignItems: 'center', border: 'none', borderRadius: '8px', backgroundColor: '#2B83FE', padding: '10px 24px', textAlign: 'center',
                    '&>p': { padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#fff' },
                },
            },
        },
    },

});

const SiteCreation = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const listPlan = useAppSelector(selectListData)
    const userProfile = useAppSelector(selectUserData)
    const [open, setOpen] = useState(false);
    const [openModalNotEnoughPoint, setOpenModalNotEnoughPoint] = useState(false);
    const [plan, setPlan] = useState<PlanType>();
    const [listTheme, setListTheme] = useState<ThemeType[]>([]);

    const [themeId, setThemeId] = useState('');
    const [theme, setTheme] = useState<ThemeType>({} as ThemeType)
    const [point, setPoint] = useState<number>()

    //handle pick plan
    const handleOnClickRadio = (e: any) => {
        listPlan.map((item, index) => {
            if (item._id === e.target.value) {
                setPlan(item)
            }
        })
    }

    //handle modal ( open, call api get list theme, close, submit )
    const handleOpenModal = () => {
        setOpen(true)
        axiosClient.get(`${THEME}/list`)
            .then((res: any) => {
                if (res.statusCode === 200) {
                    setListTheme(res.data)
                } else {
                    console.log('get theme failed!', res.message)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    };
    const handleClose = () => {
        setOpen(false)
        theme ? setThemeId(theme._id) : setThemeId('')
    };
    const handleSubmitModal = () => {
        setTheme(listTheme.find((item) => item._id === themeId) as ThemeType)
        setOpen(false)
    }

    //handle not enough point
    const handleOpenModalNotEnoughPoint = () => {
        setOpenModalNotEnoughPoint(true)
    }
    const handleCloseModalNotEnoughPoint = () => {
        setOpenModalNotEnoughPoint(false)
    }
    const handleNotEnoughPoint = () => { }


    //handle create website
    const handleCreateWebsite = () => {
        if (plan && theme) {
            axiosClient.post(`${SITE}/create`, { plan: plan._id, theme: theme._id })
                .then((res: any) => {
                    if (res.statusCode === 201) {
                        //dispatch action get list website
                        dispatch(siteActions.getList({ params: { _sort: TYPE_SORT.CREATED_AT_DESC } }))

                        // dispatch action update list transaction
                        dispatch(transactionActions.createTransaction({ newData: res.data.transaction }))

                        //dispatch action get user (update point)
                        dispatch(userActions.getUser({ params: undefined }))
                        
                        dispatch(snackBarActions.setStateSnackBar({
                            content: '성공',
                            type: 'success',
                        }))
                        navigate(ROUTE.SITELISTANDEXPIREDLIST)
                    }
                    else {
                        console.log('create website failed!', res.message);
                        handleOpenModalNotEnoughPoint()
                        dispatch(snackBarActions.setStateSnackBar({
                            content: '실패',
                            type: 'error',
                        }))
                    }
                })
                .catch((err) => {
                    console.log('catch err', err)
                    if (err.response.data.message === 'insufficient balance') {
                        handleOpenModalNotEnoughPoint()
                    }
                    else {
                        dispatch(snackBarActions.setStateSnackBar({
                            content: '실패',
                            type: 'error',
                        }))
                    }
                })
        }
    }

    useEffect(() => {
        dispatch(planActions.getList({ params: undefined }))
        axiosClient.get(`${THEME}/list`)
            .then((res: any) => {
                if (res.statusCode === 200) {
                    setListTheme(res.data)
                } else {
                    console.log('get theme failed!', res.message)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useLayoutEffect(() => {
        (Object.entries(userProfile).length === 0) ?
            dispatch(userActions.getUser({ params: undefined })) :
            setPoint(userProfile.wallet?.balance)
    }, [userProfile])


    return (
        <div className={classes.container_site}>
            <div>
                <p>생성할 사이트 선택</p>
                <div onClick={handleOpenModal}>
                    {(Object.entries(theme).length === 0) ? <p>눌러서 선택해주세요.</p> : <p>{theme.name}</p>}
                </div>
            </div>

            <div>
                <p>개설 구분</p>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    // defaultValue="female"
                    name="radio-buttons-group"
                >
                    {listPlan.map((item, index) => {
                        return (
                            <FormControlLabel key={item._id} value={item._id} control={<Radio />} label={item.description} onChange={handleOnClickRadio} />)
                    })}
                </RadioGroup>
            </div>

            <div>
                <p>개설 비용</p>
                <div>
                    {plan && <p>{plan.duration} {plan.typeDuration === 'year' ? '년' : '개월'} ({numberWithCommas(plan.price || 0)}원) - VAT 포함</p>}
                    <p>부가세 포함</p>
                </div>
            </div>

            <div>
                <p>예치금 잔액</p>
                <p>{numberWithCommas(point || 0)} 원</p>
            </div>

            <div>
                <button onClick={handleCreateWebsite}>
                    <p>사이트 생성하기</p>
                </button>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                disableAutoFocus
            >
                <div className={classes.modal}>
                    <div>
                        <p>테마 선택</p>
                        <img src={closeIcon} alt="close" onClick={handleClose} />
                    </div>
                    <div>
                        {listTheme.length > 0 && listTheme.map((item, index) => {

                            return (
                                <div>
                                    <div>
                                        <p>{index + 1}.{item.name}</p>
                                        <img src={eyeIcon} alt='' />
                                    </div>
                                    <Checkbox
                                        // defaultChecked
                                        sx={{
                                            padding: 0,
                                            '&.Mui-checked': {
                                                color: '#1DC9A0',
                                            }
                                        }}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setThemeId(item._id)
                                            }
                                        }}
                                        checked={themeId === item._id}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <button onClick={handleClose}>
                            <p>취소</p>
                        </button>
                        <button onClick={handleSubmitModal}>
                            <p>생성</p>
                        </button>
                    </div>
                </div>
            </Modal>
            <Modal
                open={openModalNotEnoughPoint}
                onClose={handleCloseModalNotEnoughPoint}
                disableAutoFocus
            >
                <div className={classes.modalNotEnoughPoint}>
                    <div>
                        <p></p>
                        <img src={closeIcon} alt="close" onClick={handleCloseModalNotEnoughPoint} />
                    </div>
                    <div>
                        <img src={wallet02} alt="" />
                        <div>
                            <p>잔액부족</p>
                            <p>계정 잔액이 부족하여 이 작업을 수행할 수 없습니다.</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleCloseModalNotEnoughPoint}>
                            <p>충전하기</p>
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default SiteCreation