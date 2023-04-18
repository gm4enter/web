import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import iconSidebar1 from '../../asset/images/iconSidebar1.png';
import iconSidebar1Active from '../../asset/images/iconSidebar1Active.png';
import iconSidebar2 from '../../asset/images/iconSidebar2.png';
import iconSidebar2Active from '../../asset/images/iconSidebar2Active.png';
import iconSidebar3 from '../../asset/images/iconSidebar3.png';
import iconSidebar3Active from '../../asset/images/iconSidebar3Active.png';
import iconSidebar4 from '../../asset/images/iconSidebar4.png';
import iconSidebar4Active from '../../asset/images/iconSidebar4Active.png';
import { ROUTE } from '../../router/routes';
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal } from '@mui/material';
import cancelCircleIcon from '../../asset/images/cancelCircle.png'


const useStyles = makeStyles({
    sidebar_mobile: {

    },
    list: {
        position: 'fixed',
        left: 0,
        zIndex: 1001,
        height: '100%',
        width: '85%',
        display: 'flex',
        boxSizing: 'border-box',
        '&>div:nth-child(1)': {
            backgroundColor: '#fff',
            boxShadow: '1px 0px 4px rgba(0, 0, 0, 0.12)',
            padding: '24px 24px 0 24px',
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
            padding: '49px 0 0 24px',
        },
    },
})

const dataDeposits = [
    { name: '예치금충전 및 내역', icon: iconSidebar1, iconActive: iconSidebar1Active, path: ROUTE.DEPOSITANDHISTORY },
    { name: '사이트생성', icon: iconSidebar2, iconActive: iconSidebar2Active, path: ROUTE.SITECREATION },
    { name: '사이트 목록 및 만료목록', icon: iconSidebar3, iconActive: iconSidebar3Active, path: ROUTE.SITELISTANDEXPIREDLIST },
    { name: '고객센터', icon: iconSidebar4, iconActive: iconSidebar4Active, path: ROUTE.CUSTOMERCENTER },
];
const dataHeaders = [
    { name: 'About', icon: iconSidebar1, iconActive: iconSidebar1Active, path: ROUTE.ABOUT },
    { name: 'Solution', icon: iconSidebar1, iconActive: iconSidebar1Active, path: ROUTE.DEPOSITANDHISTORY },
    { name: 'Price', icon: iconSidebar1, iconActive: iconSidebar1Active, path: ROUTE.PRICE },
    { name: 'Contact', icon: iconSidebar1, iconActive: iconSidebar1Active, path: ROUTE.CONTACT },
];

interface IProps {
    isOpen: boolean;
    dataHeader?: boolean;

}
export default function SidebarMobile(props: IProps) {
    const location = useLocation()
    const navigate = useNavigate()
    const classes = useStyles()
    const { isOpen, dataHeader } = props

    const [open, setOpen] = React.useState(false);
    const [checkFirstTime, setCheckFirstTime] = React.useState(false);

    const list = () => (
        <Box
            role="presentation"
            onClick={() => setOpen(false)}
            onKeyDown={() => setOpen(false)}
            sx={{ backgroundColor: 'red' }}
        >
            <div className={classes.list}>
                <div>
                    {(dataHeader ? dataHeaders : dataDeposits).map((item, index) => (
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
                            {!dataHeader && <img src={(location.pathname.includes(item.path)) ? item.iconActive : item.icon} />}
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <img src={cancelCircleIcon} alt='close' onClick={() => setOpen(false)} />
                </div>
            </div>
        </Box>
    );

    React.useLayoutEffect(() => {
        setCheckFirstTime(true);
        if (checkFirstTime) {
            setOpen(true)
        }
    }, [isOpen])

    return (
        <div className={classes.sidebar_mobile}>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                sx={{
                    '@media (min-width: 768px)': {
                        display: 'none',
                    },
                }}
            >
                {list()}
            </Drawer>

        </div>
    );
}