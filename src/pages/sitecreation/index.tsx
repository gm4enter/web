import { Checkbox, Dialog, DialogContent, DialogTitle, Modal, useMediaQuery } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useLayoutEffect } from 'react';
import avatarDemoCustomer from '../../asset/images/avatarDemoCustomer.png';
import closeIcon from '../../asset/images/cancel.png';
import eyeIcon from '../../asset/images/EyeScan.png';
import { useTheme } from '@mui/material/styles';
import { CheckBox } from '@material-ui/icons';
import { planActions, selectListData } from '../../features/plan/planSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { PlanType } from '../../types/plan.type';

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
const SiteCreation = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const listPlan = useAppSelector(selectListData)
    console.log('listPlan', listPlan);

    const [plan, setPlan] = React.useState<PlanType>(listPlan[0]);

    console.log('plan', plan);
    
    const handleOnClickRadio = (e: any) => {
        listPlan.map((item, index) => {
            if (item._id === e.target.value) {
                setPlan(item)
            }
        })
    }

    useEffect(() => {
        dispatch(planActions.getList({ params: undefined }))
    }, [dispatch])

    useLayoutEffect(() => {
        setPlan(listPlan[0])
    }, [listPlan])

    return (
        <div className={classes.container_site}>
            <div>
                <p>생성할 사이트 선택</p>
                <div onClick={handleOpen}>
                    <p>눌러서 선택해주세요.</p>
                </div>
            </div>

            <div>
                <p>개설 구분</p>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    // defaultValue="female"
                    name="radio-buttons-group"
                >
                    {listPlan.map((item, index) => (
                        <FormControlLabel key={item._id} value={item._id} control={<Radio />} label={item.description} onChange={handleOnClickRadio} />
                    ))}
                </RadioGroup>
            </div>

            <div>
                <p>개설 비용</p>
                <div>
                    {/* <p>{plan.duration || 1}년 ({plan.price || '1'}원) - VAT 포함</p> */}
                    <p>부가세 포함</p>
                </div>
            </div>

            <div>
                <p>예치금 잔액</p>
                <p>196,982 원</p>
            </div>

            <div>
                <button>
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
                        <div>
                            <div>
                                <p>1.o2o플랫폼</p>
                                <img src={eyeIcon} alt='' />
                            </div>
                            <Checkbox
                                defaultChecked
                                sx={{
                                    padding: 0,
                                    '&.Mui-checked': {
                                        color: '#1DC9A0',
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <div>
                                <p>2.블로그형 홈페이지</p>
                                <img src={eyeIcon} alt='' />
                            </div>
                            <Checkbox
                                sx={{
                                    padding: 0,
                                    '&.Mui-checked': {
                                        color: '#1DC9A0',
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <button onClick={handleClose}>
                            <p>취소</p>
                        </button>
                        <button onClick={handleClose}>
                            <p>생성</p>
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default SiteCreation