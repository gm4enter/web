import { makeStyles } from '@mui/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import arowIconLandingPage from '../../asset/images/arowIconLandingPage.png'
import businessGlobalLandingPage from '../../asset/images/businessGlobalLandingPage.png'
import ticketSale from '../../asset/images/TicketSale.png'
import flashIcon from '../../asset/images/flash.png'
import diamondsIcon from '../../asset/images/diamonds.png'
import saleIcon from '../../asset/images/Sale.png'
import tickIcon from '../../asset/images/tickIcon.png'
import noTickIcon from '../../asset/images/noTickIcon.png'
import dangerCircle from '../..//asset/images/DangerCircle.png'
import { ROUTE } from '../../router/routes'


//Mobile: width < 768px
//Tablet: 768px < width < 1024px
//Desktop: width >=1024px

const useStyles = makeStyles({
    price_container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 104px - 48px)',
        boxSizing: 'border-box',
        marginTop: '48px',
        '&>div:nth-of-type(1)': {
            position: 'absolute',
            top: '104px',
            left: '0',
            width: 'calc(100% - 24px)',
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px',
            background: 'linear-gradient(to top, rgba(255, 126, 224, 0.12) 0%, rgba(67, 14, 255, 0.12) 100%)',
            '&>img': {
                width: '24px',
                height: '24px',
            },
            '&>p:nth-of-type(1)': {
                margin: 0,
                padding: 0,
                color: '#252B32'
            },
        },
        '&>div:nth-of-type(2)': {
            display: 'flex',
            justifyContent: 'center',
            // alignItems: 'center',
            gap: '24px',
            marginBottom: '32px',
            '&>div': {
                borderRadius: '8px',
                background: '#ffffff',
                border: '1px solid #e5e5e5',
                padding: '32px 44px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                '&>div:nth-of-type(1)': {
                    minWidth: '328px',
                    paddingBottom: '24px',
                    borderBottom: '.5px solid #D2D2D2',
                    '&>img': {
                        width: '44px',
                        height: '44px',
                    },
                    '&>p:nth-of-type(1)': {
                        margin: 0,
                        padding: 0,
                        fontSize: '28px',
                        fontWeight: 700,
                        color: '#171A1F',
                    },
                    '&>div:nth-of-type(1)': {
                        display: 'flex',
                        margin: '16px 0',
                        gap: '8px',
                        '&>p:nth-of-type(1)': {
                            margin: 0,
                            padding: 0,
                            fontSize: '20px',
                            fontWeight: 500,
                            color: '#717171',
                            textDecoration: 'line-through',
                        },
                        '&>div:nth-of-type(1)': {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '4px 8px',
                            background: '#FF5300',
                            borderRadius: '100px',
                            '&>img': {
                                height: '24px',
                                width: '24px',
                            },
                            '&>p:nth-of-type(1)': {
                                margin: 0,
                                padding: 0,
                                fontSize: '16px',
                                fontWeight: 500,
                                color: '#fff',
                            }
                        },
                    },
                    '&>p:nth-of-type(2)': {
                        margin: 0,
                        padding: 0,
                        fontSize: '28px',
                        fontWeight: 700,
                        color: '#171A1F',
                    },
                },
                '&>div:nth-of-type(2)': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    margin: '16px 0 24px 0',
                    width: '100%',
                    '&>div': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        '&>p': {
                            margin: 0,
                            padding: 0,
                        },
                        '&>p:nth-of-type(2)': {
                            color: '#0078FF',
                            fontWeight: 700,
                        },
                        '&>img': {
                            width: '24px',
                            height: '24px',
                        }
                    },
                },
                '&>button': {
                    padding: '12px 32px',
                    background: '#fff',
                    border: '1px solid #0078FF',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 700,
                    color: '#0078FF',
                },
            },
        },
        '&>div:nth-of-type(3)': {
            width: '812px',
            background: '#FAFAFC',
            border: '1px solid #F2F2F5',
            borderRadius: '12px',
            padding: '24px',
            '&>div': {
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                '&>img': {
                    width: '26px',
                    height: '26px',
                },
                '&>p': {
                    margin: 0,
                    padding: 0,
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#1C1C28',
                },
            },
            '&>ul': {
                margin: '16px 0 0 0',
                padding: '0 0 0 24px',
                '&>li': {
                    margin: 0,
                    padding: 0,
                    color: '#252B32',
                }
            },
        }
    },
    '@media (max-width: 768px)': {
        price_container: {
            position: 'relative',
            marginLeft: '0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItem: 'center',
            height: 'calc(100vh - 104px - 120px)',
            backgroundSize: 'center',
            backgroundRepeat: 'no-repeat',
            boxSizing: 'border-box',

            '&>div:nth-of-type(1)': {
                '&>div:nth-of-type(1)': {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&>p:nth-of-type(1)': {
                        fontSize: '24px', padding: 0, margin: 0, fontWeight: 500, lineHeight: '30px', color: '#272B30'
                    },
                    '&>p:nth-of-type(2)': {
                        textTransform: "uppercase", fontSize: '40px', fontWeight: 900, lineHeight: '60px', padding: 0, margin: 0, color: '#272B30'
                    },
                    '&>div': {
                        display: 'flex', gap: '8px', alignItems: 'center',
                        '&>p:nth-of-type(1)': {
                            textTransform: "uppercase", fontSize: '36px', fontWeight: 500, padding: 0, margin: 0, textAlign: 'center', color: '#272B30'
                        },
                        '&>img:nth-of-type(1)': {
                            width: '100px', height: '36px'
                        },
                    },
                },
                '&>img': {
                    display: 'none',
                },
            },
            '&>div:nth-of-type(2)': {
                '&>img': {
                    width: '375px',
                    height: 'auto',
                },
            },
            '&>div:nth-of-type(3)': {
                display: 'block',
                position: 'absolute',
                left: '15px',
                bottom: '12px',
                '&>img': {
                    width: '75px',
                    height: '75px',
                },
            },
        }
    },
});

const Price = () => {
    const classes = useStyles()
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(ROUTE.DEPOSITANDHISTORY)
    }

    return (
        <div className={classes.price_container}>
            <div>
                <img src={ticketSale} alt='' />
                <p>국내 APP 유일한 솔루션</p>
            </div>
            <div>
                <div>
                    <div>
                        <img src={flashIcon} alt='' />
                        <p>O2O플랫폼 솔루션</p>
                        <div>
                            <p>1,800,000</p>
                            <div>
                                <img src={saleIcon} alt='' />
                                <p>3개월</p>
                            </div>
                        </div>
                        <p>1,500,000원</p>
                    </div>
                    <div>
                        <div>
                            <p>트래픽 무제한</p>
                            <p>AWS서버</p>
                        </div>
                        <div>
                            <p>사이트 & APP</p>
                            <img src={tickIcon} alt='' />
                        </div>
                        <div>
                            <p>관리자페이지</p>
                            <img src={tickIcon} alt='' />
                        </div>
                        <div>
                            <p style={{ color: '#818488' }}>디자이너 지원불가</p>
                            <img src={noTickIcon} alt='' />
                        </div>
                        <div>
                            <p style={{ color: '#818488' }}>컨설팅 지원불가</p>
                            <img src={noTickIcon} alt='' />
                        </div>
                    </div>
                    <button onClick={handleClick}>결제</button>
                </div>

                <div>
                    <div>
                        <img src={diamondsIcon} alt='' />
                        <p>O2O플랫폼 솔루션</p>
                        <div>
                            <p>6,000,000원</p>
                            <div>
                                <img src={saleIcon} alt='' />
                                <p>1년</p>
                            </div>
                        </div>
                        <p>5,500,000원</p>
                    </div>
                    <div>
                        <div>
                            <p>트래픽 무제한</p>
                            <p>AWS서버</p>
                        </div>
                        <div>
                            <p>사이트 & APP</p>
                            <img src={tickIcon} alt='' />
                        </div>
                        <div>
                            <p>관리자페이지</p>
                            <img src={tickIcon} alt='' />
                        </div>
                        <div>
                            <p>디자이너 지원(로고&출시 이미지)</p>
                            <img src={tickIcon} alt='' />
                        </div>
                        <div>
                            <p>컨설팅</p>
                            <img src={tickIcon} alt='' />
                        </div>
                    </div>
                    <button onClick={handleClick}>결제</button>
                </div>
            </div>

            <div>
                <div>
                    <img src={dangerCircle} alt='' />
                    <p>꼭 알아두세요!</p>
                </div>
                <ul>
                    <li>모바일 APP (안드로이드 APP / IOS APP 포함)</li>
                    <li>보안서버(SSL) 무료</li>
                    <li>추가개발 희망시 가능 단 개발자 투입 비용 별도</li>
                </ul>
            </div>
        </div>
    )
}

export default Price
