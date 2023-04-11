import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import iconSidebar1 from '../../asset/images/iconSidebar1.png'
import iconSidebar2 from '../../asset/images/iconSidebar2.png'
import iconSidebar3 from '../../asset/images/iconSidebar3.png'
import iconSidebar4 from '../../asset/images/iconSidebar4.png'
import iconSidebar1Active from '../../asset/images/iconSidebar1Active.png'
import iconSidebar2Active from '../../asset/images/iconSidebar2Active.png'
import iconSidebar3Active from '../../asset/images/iconSidebar3Active.png'
import iconSidebar4Active from '../../asset/images/iconSidebar4Active.png'
import iconLogoutSidebar from '../../asset/images/iconLogoutSidebar.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE } from '../../router/routes'



const dataDeposits = [
    { name: '예치금충전 및 내역', icon: iconSidebar1, iconActive: iconSidebar1Active, path: ROUTE.DEPOSITANDHISTORY },
    { name: '사이트생성', icon: iconSidebar2, iconActive: iconSidebar2Active, path: ROUTE.SITECREATION },
    { name: '사이트 목록 및 만료목록', icon: iconSidebar3, iconActive: iconSidebar3Active, path: ROUTE.SITELISTANDEXPIREDLIST },
    { name: '고객센터', icon: iconSidebar4, iconActive: iconSidebar4Active, path: ROUTE.CUSTOMERCENTER },
];

export default function SideBar() {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <div>
            <div
                style={
                    {
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
                    }
                }
            >
                <div
                    style={{
                        margin: '24px 24px 0 24px',
                        flex: 1,
                        overflow: 'auto',
                    }}

                >
                    {dataDeposits.map((item, index) => (
                        <div
                            // style={{ display: 'flex', alignItems: 'center', padding: '12px 10px', gap: '8px' }}
                            style={
                                // location.pathname === item.path || location.pathname === item.path2
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
                            <img src={(location.pathname.includes(item.path)) ? item.iconActive : item.icon} style={{ height: '24px', width: '24px' }} />
                            <p style={{ padding: 0, margin: 0, fontSize: '14px', fontWeight: 500 }}>{item.name}</p>
                        </div>
                    ))}
                </div>
                <div style={{ marginBottom: '76px', borderTop: '1px solid #D0D5DD' }}>
                    <div style={{ display: 'flex', alignItems: 'center', padding: '24px', gap: '8px' }}>
                        <img src={iconLogoutSidebar} style={{ height: '24px', width: '24px' }} />
                        <p style={{ padding: 0, margin: 0, fontSize: '14px', fontWeight: 500 }}>고객센터</p>
                    </div>
                </div>
            </div>
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