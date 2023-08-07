import { makeStyles } from '@mui/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import arrowBack from '../../asset/images/ArrowBendUpLeft.png'
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
                '&>div:nth-of-type(1)': {
                    borderBottom: '1px solid #000',
                    padding: '10px 0 12px 0',
                    '&>label': {
                        margin: '0',
                        padding: '0',
                        color: '#18181B',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        '&>span': {
                            color: '#FF0000',
                        },
                    },
                },
                '&>form': {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                    // background: '#ffccff',
                    '&>div': {
                        display: 'flex',
                        // gap: '32px',
                        '&>label': {
                            minWidth: '70px',
                            flex: 1,
                            margin: '0',
                            padding: '0',
                            color: '#18181B',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            '&>span': {
                                color: '#FF0000',
                            },
                        },
                        '&>div': {
                            flex: 5,
                            minWidth: '180px',
                        },
                    },
                    '&>div:nth-of-type(7)': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        '&>div:nth-of-type(1)': {
                            display: 'flex',
                            alignItems: 'center',
                            '&>div': {
                                padding: '12px',
                                display: 'flex',
                                gap: '8px',
                                cursor: 'pointer',
                            },
                            '&>div:nth-of-type(2)': {
                                '&>img': {
                                    transform: 'scaleX(-1) scaleY(1)'
                                },
                            },
                        },
                    },
                },
            },
        },
    },
});

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Invalid email'),
    // gender: yup
    //     .string()
    //     .required('Required'),
    // name: yup
    //     .string()
    //     .required('Required'),

    // password: yup
    //   .string()
    //   .min(8, 'Password should be of minimum 8 characters length')
    //   .required('Password is required'),
});

const Audition2 = () => {
    const classes = useStyles()
    const navigate = useNavigate()

    const handleClickNext = () => {
        console.log('handleClickNext');
        navigate(ROUTE.AUDITION + '/step3')
    }

    const handleClickBack = () => {
        console.log('handleClickBack');
        navigate(ROUTE.AUDITION)
    }

    const handleClickContact = () => {
        navigate(ROUTE.CONTACT)
    }

    // Function to convert the selected date format
    const formatDate = (dateValue: string) => {
        const dateObject = new Date(dateValue);
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, '0');
        const day = String(dateObject.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const formik = useFormik({
        initialValues: {
            gender: '',
            name: '',
            date: '',
            countries: '',
            phoneNumber: '',
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            console.log('values', values);

        },
    });

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
                                            (index < 1) ? {
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
                                        defaultChecked={index <= 1 ? true : false}
                                        disabled
                                    />
                                    <label htmlFor="policy" style={index <= 1 ? (index == 1 ? { color: '#0063F7', fontSize: '20px', fontWeight: 'bold' } : { fontSize: '20px', fontWeight: 'bold' }) : {}}>{item.title}</label>
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
                        <label>지원자 정보 <span>*</span></label>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label>성별</label>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    id='gender'
                                    name="gender"
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}
                                >
                                    <FormControlLabel value={'1'} control={<Radio />} label="남" />
                                    <FormControlLabel value={'0'} control={<Radio />} label="여" />
                                </RadioGroup>
                                <p style={{ margin: '3px 14px 0px', padding: 0, fontSize: '12px', color: '#d32f2f' }}>{formik.touched.gender && formik.errors.gender}</p>
                            </div>
                        </div>

                        <div>
                            <label>이름</label>
                            <TextField
                                fullWidth
                                id="name"
                                name="name"
                                variant="outlined"
                                placeholder='당신의 성명을 입력 해주세요'
                                sx={{
                                    backgroundColor: '#F7F7F7',
                                }}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                        </div>

                        <div>
                            <label>생년월일</label>
                            <TextField
                                fullWidth
                                id="date"
                                name="date"
                                variant="outlined"
                                placeholder='YYYY/MM/DD'
                                type='date'
                                sx={{
                                    backgroundColor: '#F7F7F7',
                                }}
                                value={formik.values.date}
                                // onChange={formik.handleChange}
                                onChange={event => {
                                    const formattedDate = formatDate(event.target.value);
                                    formik.handleChange(event);
                                    formik.setFieldValue('date', formattedDate);
                                }}
                                onBlur={formik.handleBlur}
                                error={formik.touched.date && Boolean(formik.errors.date)}
                                helperText={formik.touched.date && formik.errors.date}
                            />
                        </div>

                        <div>
                            <label>국적</label>
                            <TextField
                                fullWidth
                                id="countries"
                                name="countries"
                                variant="outlined"
                                placeholder='Please enter your contact information'
                                sx={{
                                    backgroundColor: '#F7F7F7',
                                }}
                                value={formik.values.countries}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.countries && Boolean(formik.errors.countries)}
                                helperText={formik.touched.countries && formik.errors.countries}
                            />
                        </div>

                        <div>
                            <label>연락처</label>
                            <TextField
                                fullWidth
                                id="phoneNumber"
                                name="phoneNumber"
                                variant="outlined"
                                placeholder='전화번호를 입력하세요'
                                sx={{
                                    backgroundColor: '#F7F7F7',
                                }}
                                value={formik.values.phoneNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                            />
                        </div>

                        <div>
                            <label>아이디(이메일)</label>
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                variant="outlined"
                                placeholder='Please enter your content'
                                sx={{
                                    backgroundColor: '#F7F7F7',
                                }}
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </div>

                        <div>
                            <div>
                                <div onClick={handleClickBack}>
                                    <img src={arrowBack} alt='' />
                                    이전 단계
                                </div>
                                <div onClick={handleClickNext}>
                                    다음 단계
                                    <img src={arrowBack} alt='' />
                                </div>
                            </div>
                            <Button
                                disabled={!formik.values}
                                sx={{
                                    marginRight: '24px',
                                    padding: '12px 60px',
                                    backgroundColor: '#fff',
                                    color: '#0063F7',
                                    border: '1px solid #0063F7',
                                }}
                                onClick={handleClickNext}
                            >
                                다음 단계
                            </Button>
                            <Button
                                disabled={!formik.values}
                                variant="contained"
                                type="submit"
                                color='primary'
                                sx={{
                                    padding: '12px 60px'
                                }}
                            // style={(!formik.values) ? { backgroundColor: '#E4E4E7', color: '#fff' } : { backgroundColor: '#000', color: '#fff' }}
                            onClick={handleClickNext}

                            >
                                지원서 저장
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Audition2
