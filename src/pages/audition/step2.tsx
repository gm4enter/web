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
                        gap: '32px',
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
                },
            },
        },
    },
});

const validationSchema = yup.object().shape({
    inquiryType: yup
        .string()
        .required('Required'),
    name: yup
        .string()
        .required('Required'),
    email: yup
        .string()
        .email('Invalid email')
        .required('Required'),
    content: yup
        .string()
        .required('Required'),
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

    const handleClickContact = () => {
        navigate(ROUTE.CONTACT)
    }

    const formik = useFormik({
        initialValues: {
            gender: '',
            name: '',
            contact: '',
            email: '',
            content: '',
            policy: '',
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
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                id='gender'
                                name="gender"
                                value={formik.values.gender}
                                onChange={formik.handleChange}
                            >
                                <FormControlLabel value={'1'} control={<Radio />} label="남" />
                                <FormControlLabel value={'2'} control={<Radio />} label="여" />
                            </RadioGroup>
                        </div>

                        <div>
                            <label>이름</label>
                            <TextField
                                fullWidth
                                id="content"
                                name="content"
                                variant="outlined"
                                placeholder='Please enter your content'
                                sx={{
                                    backgroundColor: '#F7F7F7',
                                }}
                                value={formik.values.content}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.content && Boolean(formik.errors.content)}
                                helperText={formik.touched.content && formik.errors.content}
                            />
                        </div>

                        <div>
                            <label>생년월일</label>
                            <TextField
                                fullWidth
                                id="name"
                                name="name"
                                variant="outlined"
                                placeholder='Please enter your name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                        </div>

                        <div>
                            <label>국적</label>
                            <TextField
                                fullWidth
                                id="contact"
                                name="contact"
                                variant="outlined"
                                placeholder='Please enter your contact information'
                                value={formik.values.contact}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.contact && Boolean(formik.errors.contact)}
                                helperText={formik.touched.contact && formik.errors.contact}
                            />
                        </div>

                        <div>
                            <label>연락처</label>
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                variant="outlined"
                                placeholder='Please enter your email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </div>

                        <div>
                            <label>아이디(이메일)</label>
                            <TextField
                                fullWidth
                                id="content"
                                name="content"
                                variant="outlined"
                                placeholder='Please enter your content'
                                value={formik.values.content}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.content && Boolean(formik.errors.content)}
                                helperText={formik.touched.content && formik.errors.content}
                            />
                        </div>

                        <div style={{ flexDirection: 'row', marginBottom: '12px' }}>
                            <Checkbox
                                id="policy"
                                name="policy"
                                sx={{
                                    padding: 0,
                                    '&.Mui-checked': {
                                        color: '#000',
                                    }
                                }}
                                value={formik.values.policy}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <span>Please consent to the privacy policy.</span>
                        </div>

                        <Button
                            disabled={!formik.values.policy}
                            variant="contained"
                            fullWidth type="submit"
                            style={(!formik.values.policy) ? { backgroundColor: '#E4E4E7', color: '#fff' } : { backgroundColor: '#000', color: '#fff' }}
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Audition2
