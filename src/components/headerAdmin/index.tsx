import { makeStyles } from '@mui/styles'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../../asset/images/logo.png'
import hamburgerMenu from '../../asset/images/HamburgerMenu.png'
import { ROUTE } from '../../router/routes'

const useStyles = makeStyles({
    container_header: {
        position: 'fixed',
        zIndex: 1300,
        top: 0,
        left: 0,
        right: 0,
        height: 76,
        padding: '14px 24px',
        display: 'flex',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: '0.4s',
        boxSizing: 'border-box',
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.12)',
        '&>div:nth-child(1)': {
            display: 'flex',
            gap: '4px',
            justifyContent: 'center',
            alignItems: 'center',
            '&>img': {
                width: '24px',
                height: '24px',
                cursor: 'pointer',
            },
            '&>div': {
                display: 'flex',
                gap: '6px',
                paddingRight: '4px',
                alignItems: 'center',
                cursor: 'pointer',
                '&>img': {
                    width: '48px',
                    height: '48px',
                },
                '&>div': {
                    fontWeight: 700,
                    fontSize: '24px',
                    '&>p': {
                        color: 'blue',
                        fontWeight: 500,
                        fontSize: '16px',
                        padding: 0,
                        margin: 0
                    },
                },
            },
        },
        '&>:nth-child(2)': {
            '&>div': {
                backgroundColor: '#fff',
                fontSize: '18px',
                fontWeight: 500,
                margin: '16px 24px 16px 0px',
                '&>img:nth-child(1)': {
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                },
            },
        },
    },
})

const HeaderAdmin = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    return (
        <div
            className={classes.container_header}
        >
            <div>
                <img src={hamburgerMenu} alt='' />
                <div onClick={() => { navigate(ROUTE.HOME) }}>
                    <img src={logo} alt="logo" />
                    <div>
                        GM4 Company
                        <p>
                            Solution
                        </p>
                    </div>
                </div>

            </div>
            <div>
                <div>
                    <img
                        src={
                            'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
                        }
                        alt=''
                    />
                </div>
            </div>

        </div>
    )
}

export default HeaderAdmin
