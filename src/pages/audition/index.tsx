import { makeStyles } from '@mui/styles'
import React, { useLayoutEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import arowIconLandingPage from '../../asset/images/arowIconLandingPage.png'
import businessGlobalLandingPage from '../../asset/images/businessGlobalLandingPage.png'
import gmaLogoLandingPage from '../../asset/images/gmaLogoLandingPage.png'
import background from '../../asset/images/Audition.png'
import lineStep from '../../asset/images/lineStep.png'
import { ROUTE } from '../../router/routes'
import { Input } from '../../components/base/input/Input'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as yup from 'yup';
import { Button, MenuItem, TextField, Checkbox, Radio, FormLabel, RadioGroup, FormControlLabel, FormControl } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { dataSteps } from '../../constants'
import { AuditionContext, AuditionContextProvider } from '../../context/auditionContext'
import { AuditionStep1 } from './step1'
import { AuditionStep2 } from './step2'
import { AuditionStep3 } from './step3'
import { AuditionStep4 } from './step4'
import { AuditionStep5 } from './step5'
import { DataAuditionContextType } from '../../types/dataAuditionContext'
//Mobile: width < 768px
//Tablet: 768px < width < 1024px
//Desktop: width >=1024px

const useStyles = makeStyles({
    home_container: {
        minHeight: 'calc(100vh - 124px - 88px - 44px - 0px)',
        padding: '44px 80px 80px 80px',
        backgroundColor: '#f8f8f8',
        '&>div:nth-of-type(1)': {
            display: 'flex',
            gap: '23px',
            '&>div:nth-of-type(1)': {
                '&>div:nth-of-type(1)': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    height: '219px',
                    backgroundImage: `url("${background}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    '&>p': {
                        margin: '0',
                        padding: '0',
                        marginTop: '60px',
                        color: '#18181B',
                        fontSize: '36px',
                        fontWeight: 'bold',

                    },
                },
                '&>div:nth-of-type(2)': {
                    display: 'flex',
                    flexDirection: 'column',
                    '&>div': {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        '&>p': {
                            margin: '0',
                            padding: '0',
                            color: '#18181B',
                            fontSize: '20px',
                            fontWeight: 'bold',
                        },
                    },
                    '&>img': {
                        width: '24px',
                    },
                },
            },
            '&>div:nth-of-type(2)': {
                flex: 1,
                background: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                padding: '32px',
                '&>div': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    '&>label': {
                        margin: '0',
                        padding: '0',
                        color: '#18181B',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        '&>span': {
                            color: '#FF0000',
                        },
                    },
                },
                '&>div:nth-of-type(1)': {
                    borderBottom: '1px solid #000',
                    padding: '10px 0 12px 0',
                },
                '&>div:nth-of-type(2)': {
                    '&>div:nth-of-type(1)': {
                        height: '350px',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'auto',
                        border: ' 1px solid #a1a1a9',
                        padding: '16px',
                        gap: '16px',
                        '&>div': {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            '&>p': {
                                margin: '0',
                                padding: '0',
                                color: '#27272A',
                            },
                            '&>p:nth-of-type(1)': {
                                fontSize: '16px',
                                fontWeight: 'bold',
                            },
                            '&>p:nth-of-type(2)': {
                                fontSize: '18px',
                                fontWeight: '400',
                                color: '#3F3F46'
                            },
                        },
                    },
                },

                '&>div:nth-of-type(3)': {
                    '&>div:nth-of-type(1)': {
                        height: '350px',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'auto',
                        border: ' 1px solid #a1a1a9',
                        padding: '16px',
                        gap: '16px',
                        '&>div': {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            '&>p': {
                                margin: '0',
                                padding: '0',
                                color: '#27272A',
                            },
                            '&>p:nth-of-type(1)': {
                                fontSize: '16px',
                                fontWeight: 'bold',
                            },
                            '&>p:nth-of-type(2)': {
                                fontSize: '18px',
                                fontWeight: '400',
                                color: '#3F3F46'
                            },
                        },
                        '&>table': {
                            flex: 1,
                            background: '#A1A1AA',
                            '&>tr': {
                                fontSize: '14px',
                                color: '#18181B',
                                background: '#fff',
                                '&>td:nth-of-type(1)': {
                                    width: '30%',
                                    padding: '16px',

                                },
                                '&>td:nth-of-type(2)': {
                                    padding: '16px',
                                    '&>ul': {
                                        margin: '0',
                                        padding: '0 0 0 16px',
                                        '&>li:nth-of-type(1)': {
                                            marginBottom: '8px',
                                        },
                                    }
                                },
                            }
                        },
                    },
                },

                '&>div:nth-of-type(4)': {
                    '&>div': {
                        '&>label': {
                            margin: '0',
                            padding: '0',
                            color: '#18181B',
                            fontSize: '20px',
                            fontWeight: 'bold',
                        },
                    },

                },
                '&>div:nth-of-type(5)': {
                    marginLeft: 'auto',
                },
            },
        },
    },
});

const Audition = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()

    const initialData: DataAuditionContextType = {
        step: 1,
        curentStepSave: 1,

    };
    const [data, setData] = useState<DataAuditionContextType>(initialData);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <AuditionContext.Provider value={{ data, setData }}>
            {data.step === 1 && <AuditionStep1 />}
            {data.step === 2 && <AuditionStep2 />}
            {data.step === 3 && <AuditionStep3 />}
            {data.step === 4 && <AuditionStep4 />}
            {data.step === 5 && <AuditionStep5 />}
        </AuditionContext.Provider>
    )
}

export default Audition
