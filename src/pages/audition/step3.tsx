import { makeStyles } from '@mui/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
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


const Audition3 = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const [value, setValue] = React.useState('');

    console.log('value', value);

    const handleClickNext = () => {
        console.log('handleClickNext');
        navigate(ROUTE.AUDITION + '/step3')
    }

    const handleClickContact = () => {
        navigate(ROUTE.CONTACT)
    }


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <div className={classes.home_container}>
            <div>
                <div>
                    <div>
                        <p>Apply for an audition</p>
                    </div>

                    <div>
                        {dataSteps.map((item, index) => (
                            <>
                                <div>
                                    <Checkbox
                                        id="policy"
                                        name="policy"
                                        icon={<RadioButtonUncheckedIcon />}
                                        checkedIcon={<CheckCircleIcon />}
                                        sx={
                                            (index < 2) ? {
                                                padding: 0,
                                                '&.Mui-checked': {
                                                    color: '#000',
                                                }
                                            } : {
                                                padding: 0,
                                                '&.Mui-checked': {
                                                    color: '#0063F7',
                                                }
                                            }
                                        }
                                        defaultChecked={index <= 2 ? true : false}
                                        disabled
                                    />
                                    <label htmlFor="policy" style={index <= 2 ? (index == 2 ? { color: '#0063F7', fontSize: '20px', fontWeight: 'bold' } : { fontSize: '20px', fontWeight: 'bold' }) : {}}>{item.title}</label>
                                </div>
                                <img src={lineStep} alt='' />
                            </>
                        ))}
                        <div>
                            <Checkbox
                                id="policy"
                                name="policy"
                                icon={<RadioButtonUncheckedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                sx={{
                                    padding: 0,
                                    '&.Mui-checked': {
                                        color: '#0063F7',
                                    }
                                }}
                                defaultChecked={false}
                                disabled
                            />
                            <label htmlFor="policy">지원서 확인</label>
                        </div>
                    </div>

                </div>

                <div>

                    <div>
                        <label>이용 약관 <span>*</span></label>
                    </div>
                    <div>
                        <label>사이트 이용약관 (필수) </label>
                        <TextField
                            fullWidth
                            id="content"
                            name="content"
                            variant="outlined"
                            placeholder='Please enter your content'
                            multiline
                            rows={7}
                            value='1. Collected Personal Information
                  We collect the following personal information for the use of the Website, provision of services, response to inquiries and reports, etc.
                  1) Collected information: Name, contact, E-mail, cookies, IP information.
                  2) Method: Online collection through the Website.
                  
                  2. Purpose of Collecting and Using Personal Information
                  We use the collected personal information for the following purposes.
                  - Individual identification and response to service inquiries.
                  
                  3. Period of Retention and Use of Personal Information
                  In principle, the Company destroys all personal information immediately after attaining the purpose of collecting and using such personal information. However, the Company retains certain personal information, including those specified below, during the period of retention and
                  use consented by the users or for a certain amount of time as obligated by applicable law.
                  1) Service proposals, inquiries, reports: 12 months
                  2) Website log-in and access records: 3 months (Protection of Communications Secrets Act)
                  3) Website log-in and access records: 3 months (Protection of Communications Secrets Act)
                  
                  4. Destruction of Personal Information
                  The Company immediately destroys personal information upon achieving the purpose of the information’s collection and use. The destruction
                  procedure and methods are as follows.
                  1) Destruction Procedure
                  After attaining the personal information’s purpose , the personal information is retained by the Company for a certain amount of time in accordance with the personal information protection grounds under the Company’s internal policy and applicable laws (refer to Period of
                  Retention and Use) and thereafter destroyed. Any personal information transferred to a database will not be used for other purposes unless
                  otherwise provided by law.
                  2) Destruction Method
                  Personal information stored electronically is deleted through a technical method that prevents the restoration of any records.'
                        />
                    </div>

                    <div>
                        <label>개인정보 수집 및 이용 동의 (필수) </label>
                        <TextField
                            fullWidth
                            id="content"
                            name="content"
                            variant="outlined"
                            placeholder='Please enter your content'
                            multiline
                            rows={7}
                            value='1. Collected Personal Information
                  We collect the following personal information for the use of the Website, provision of services, response to inquiries and reports, etc.
                  1) Collected information: Name, contact, E-mail, cookies, IP information.
                  2) Method: Online collection through the Website.
                  
                  2. Purpose of Collecting and Using Personal Information
                  We use the collected personal information for the following purposes.
                  - Individual identification and response to service inquiries.
                  
                  3. Period of Retention and Use of Personal Information
                  In principle, the Company destroys all personal information immediately after attaining the purpose of collecting and using such personal information. However, the Company retains certain personal information, including those specified below, during the period of retention and
                  use consented by the users or for a certain amount of time as obligated by applicable law.
                  1) Service proposals, inquiries, reports: 12 months
                  2) Website log-in and access records: 3 months (Protection of Communications Secrets Act)
                  3) Website log-in and access records: 3 months (Protection of Communications Secrets Act)
                  
                  4. Destruction of Personal Information
                  The Company immediately destroys personal information upon achieving the purpose of the information’s collection and use. The destruction
                  procedure and methods are as follows.
                  1) Destruction Procedure
                  After attaining the personal information’s purpose , the personal information is retained by the Company for a certain amount of time in accordance with the personal information protection grounds under the Company’s internal policy and applicable laws (refer to Period of
                  Retention and Use) and thereafter destroyed. Any personal information transferred to a database will not be used for other purposes unless
                  otherwise provided by law.
                  2) Destruction Method
                  Personal information stored electronically is deleted through a technical method that prevents the restoration of any records.'
                        />
                    </div>

                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            sx={{ flex: 1, justifyContent: 'space-between', alignItem: 'center' }}
                            value={value}
                            onChange={handleChange}
                        >
                            <label>모든 약관 및 정책에 동의</label>
                            <FormControlLabel value={'1'} control={<Radio />} label="동의합니다" />
                            <FormControlLabel value={'2'} control={<Radio />} label="동의하지 않습 LI 다" />
                        </RadioGroup>
                    </FormControl>

                    <div>
                        <Button
                            disabled={!(value === '1')}
                            variant="contained"
                            type="submit"
                            color="primary"
                            sx={{ padding: '12px 60px', backgroundColor: '#0063F7', color: '#fff', marginTop: '12px', }}
                            onClick={handleClickNext}
                        >
                            다음 단계
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Audition3
