import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import iconLogoutSidebar from '../../asset/images/iconLogoutSidebar.png';
import iconSidebar1 from '../../asset/images/iconSidebar1.png';
import iconSidebar1Active from '../../asset/images/iconSidebar1Active.png';
import iconSidebar2 from '../../asset/images/iconSidebar2.png';
import iconSidebar2Active from '../../asset/images/iconSidebar2Active.png';
import iconSidebar3 from '../../asset/images/iconSidebar3.png';
import iconSidebar3Active from '../../asset/images/iconSidebar3Active.png';
import iconSidebar4 from '../../asset/images/iconSidebar4.png';
import iconSidebar4Active from '../../asset/images/iconSidebar4Active.png';
import { userActions } from '../../features/user/userSlice';
import { ROUTE } from '../../router/routes';



const dataDeposits = [
    { name: '사이트 목록 및 만료목록', icon: iconSidebar3, iconActive: iconSidebar3Active, path: ROUTE.SITELISTANDEXPIREDLIST },
    { name: '예치금충전 및 내역', icon: iconSidebar1, iconActive: iconSidebar1Active, path: ROUTE.DEPOSITANDHISTORY },
    { name: '사이트생성', icon: iconSidebar2, iconActive: iconSidebar2Active, path: ROUTE.SITECREATION },
    { name: '고객센터', icon: iconSidebar4, iconActive: iconSidebar4Active, path: ROUTE.CUSTOMERCENTER },
];

const useStyles = makeStyles({
    container_sidebar: {
        '@media (max-width: 768px)': {
            display: 'none',
        },
        '&>div:nth-child(1)': {
            position: 'fixed',
            left: 0,
            zIndex: 1000,
            backgroundColor: '#fff',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            boxShadow: '1px 0px 4px rgba(0, 0, 0, 0.12)',
            '&>div:nth-child(1)': {
                margin: '24px 24px 0 24px',
                flex: 1,
                overflow: 'auto',
                '&>img': {
                    height: '24px', width: '24px'
                },
                '&>div': {
                    '&>p': {
                        padding: 0, margin: 0, fontSize: '14px', fontWeight: 500
                    },
                },
            },
            '&>div:nth-child(2)': {
                marginBottom: '76px',
                borderTop: '1px solid #D0D5DD',
                '&>div': {
                    display: 'flex',
                    alignItems: 'center',
                    padding: '24px',
                    gap: '8px',
                    cursor: 'pointer',
                    '&>img': {
                        height: '24px', width: '24px'
                    },
                    '&>p': {
                        padding: 0, margin: 0, fontSize: '14px', fontWeight: 500
                    },
                },
            },
        },
        '&>div:nth-child(2)': {},
    },
    container_sidebar_mb: {
        '@media (min-width: 768px)': {
            display: 'none',
        },
    },

})
interface IProps {
    isOpen: boolean
}
export default function SideBar(props: IProps) {
    const location = useLocation()
    const navigate = useNavigate()
    const classes = useStyles()
    const dispatch = useAppDispatch()
    const { isOpen } = props

    const [state, setState] = React.useState({
        left: false,
    });
    const toggleDrawer =
        (anchor: 'left', open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const handleLogout = () => {
        if (window.confirm('로그아웃하시겠습니까?')) {
            localStorage.clear()
            dispatch(userActions.deleteUser({ params: undefined }))
            navigate(ROUTE.HOME)
        }
    }

    return (
        <div className={classes.container_sidebar}>
            <div>
                <div>
                    {dataDeposits.map((item, index) => (
                        <div
                            style={
                                (location.pathname.includes(item.path))
                                    ? {
                                        display: 'flex', alignItems: 'center', padding: '12px 10px', gap: '8px',
                                        fontWeight: 500,
                                        color: '#000',
                                        backgroundColor: '#EDEDED',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                    }
                                    : {
                                        display: 'flex', alignItems: 'center', padding: '12px 10px', gap: '8px',
                                        fontWeight: 500,
                                        color: '#70777F',
                                        cursor: 'pointer',
                                    }
                            }
                            onClick={() => navigate(item.path)}
                        >
                            <img src={(location.pathname.includes(item.path)) ? item.iconActive : item.icon} />
                            {/* {!isOpen && <p>{item.name}</p>} */}
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <div onClick={handleLogout}>
                        <img src={iconLogoutSidebar} />
                        {/* {!isOpen && <p>고객센터</p>} */}
                        <p>로그아웃</p>
                    </div>
                </div>
            </div>
            {/* <div
                style={
                    (!isOpen)
                        ? {
                            width: '256px',
                        }
                        : {
                            width: '110px',
                        }
                }
            /> */}
            <div
                style={
                    {
                        width: '256px',
                    }

                }
            />
        </div>
    );
}