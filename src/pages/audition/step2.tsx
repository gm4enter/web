import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import { Button, Checkbox, FormControlLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, SelectChangeEvent, TextField, Theme, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import dayjs, { Dayjs } from 'dayjs'
import { useFormik } from 'formik'
import { useLayoutEffect, useState } from 'react'
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import { useLocation, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useAppDispatch } from '../../app/hooks'
import arrowBack from '../../asset/images/ArrowBendUpLeft.png'
import background from '../../asset/images/Audition.png'
import lineStep from '../../asset/images/lineStep.png'
import { snackBarActions } from '../../components/snackbar/snackbarSlice'
import { dataSteps } from '../../constants'
import { useAuditionContext } from '../../context/auditionContext'

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
                            '&>button': {
                                backgroundColor: 'transparent',
                                border: 'none',
                                padding: '12px',
                                fontSize: '16px',
                                display: 'flex',
                                gap: '8px',
                                cursor: 'pointer',
                                alignItems: 'center',
                                '&>p': {
                                    margin: '0',
                                    padding: '0',
                                    color: '#18181B',
                                    fontSize: '16px',
                                },
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
    date_picker: {
        height: "56px",
        backgroundColor: '#F7F7F7',
    }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export const countriesTypes = [
    '한국',
    '미국',
    '일본',
    '중국',
    '베트남',
    '태국'
]

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const validationSchema = yup.object().shape({
    gender: yup
        .string()
        .required('Required'),
    name: yup
        .string()
        .required('Required'),
    dob: yup
        .date()
        .required('Required')
        // .test(
        //     'not-today',
        //     'Required',
        //     (value) => !dayjs(value).isSame(dayjs(), 'day')
        //   )
        .max(dayjs().subtract(1, 'day').toDate(), 'Birthday cannot be today or in the future'),
    countries: yup
        .array()
        .min(1, 'At least one support type is required')
        .required('Required'),
    phoneNumber: yup
        .string()
        .required('Required')
        .min(8, 'Invalid phone number'),
    email: yup
        .string()
        .email('Invalid email')
        .required('Required'),

    // password: yup
    //   .string()
    //   .min(8, 'Password should be of minimum 8 characters length')
    //   .required('Password is required'),
});

export const AuditionStep2 = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const [countries, setCountries] = useState<string[]>([]);
    const { data, setData } = useAuditionContext();

    const handleChangeDatePicker = (newValue: Dayjs | null) => {
        if (newValue !== null) {
            console.log('newValue', newValue.format('YYYY-MM-DD'));
            const formattedDate = formatDate(newValue.format('YYYY-MM-DD'));
            formik.setFieldValue('dob', formattedDate);
        } else {
            formik.setFieldValue('dob', dayjs().format('YYYY-MM-DD'));
        }
    };

    console.log('dataContext child 2', data);

    const savedDataStep2Local = localStorage.getItem('dataSaveStep2');

    const handleClickNext = () => {
        console.log('handleClickNext');
        setData({ ...data, step: 3 })
    }

    const handleClickBack = () => {
        console.log('handleClickBack');
        setData({ ...data, step: 1 })
    }

    const handleClickSave = () => {
        console.log('handleClickSave');
        setData({ ...data, curentStepSave: 2, })
        if (formik.values.gender || formik.values.name || formik.values.dob || formik.values.countries.length > 0 || formik.values.phoneNumber || formik.values.email) {
            console.log('formik.values', formik.values);
            const delimiter = ', '; // You can use any delimiter you prefer

            const stringCountries = formik.values.countries.join(delimiter);
            console.log('stringCountries', stringCountries);

            const dataSave = {
                ...formik.values,
                countries: stringCountries,
            }
            console.log('dataSave', dataSave);

            localStorage.setItem('dataSaveStep2', JSON.stringify(dataSave));
            dispatch(snackBarActions.setStateSnackBar({
                content: '성공',
                type: 'success',
            }))
        }
    }


    const handleChangeContries = (event: SelectChangeEvent<typeof countries>) => {
        const {
            target: { value },
        } = event;
        // On autofill we get a stringified value.
        const countriesTypes = typeof value === 'string' ? value.split(',') : value;

        // Allow selecting a maximum of two items
        if (countriesTypes.length <= 2) {
            setCountries(countriesTypes);
            formik.setFieldValue('countries', countriesTypes);
        }
    };

    // Function to convert the selected date format
    const formatDate = (dateValue: string) => {
        console.log('dateValue', dateValue);

        const dateObject = new Date(dateValue);
        const year = dateObject.getFullYear();
        const month = String(dateObject.getMonth() + 1).padStart(2, '0');
        const day = String(dateObject.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const formik = useFormik({
        initialValues: {
            gender: data.dataStep2?.gender || '',
            name: data.dataStep2?.name || '',
            dob: data.dataStep2?.dob || '',
            countries: data.dataStep2?.countries || [],
            phoneNumber: data.dataStep2?.phoneNumber || '',
            email: data.dataStep2?.email || '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            console.log('values formik', values);
            console.log('handleClickNext');
            handleClickSave();
            setData({ ...data, step: 3, dataStep2: values })
        },
    });

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    useLayoutEffect(() => {
        if (data.dataStep2?.countries) {
            setCountries(data.dataStep2?.countries)
        }
        if (savedDataStep2Local) {
            const dataStep2Local = JSON.parse(savedDataStep2Local);
            if (dataStep2Local.gender) {
                formik.setFieldValue('gender', dataStep2Local.gender);
            }
            if (dataStep2Local.name) {
                formik.setFieldValue('name', dataStep2Local.name);
            }
            if (dataStep2Local.dob) {
                formik.setFieldValue('dob', dataStep2Local.dob);
            }
            if (dataStep2Local.countries) {
                console.log('local countries', dataStep2Local.countries);
                const delimiter = ", "; // This should match the delimiter used in your input string

                const resultArray = dataStep2Local.countries.split(delimiter);
                setCountries(resultArray);
                formik.setFieldValue('countries', resultArray);
            }
            if (dataStep2Local.phoneNumber) {
                formik.setFieldValue('phoneNumber', dataStep2Local.phoneNumber);
            }
            if (dataStep2Local.email) {
                formik.setFieldValue('email', dataStep2Local.email);
            }
        }
    }, []);

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
                                inputProps={{
                                    style: {
                                        backgroundColor: '#F7F7F7',
                                        borderColor: '#F7F7F7',
                                    }
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
                            {/* <TextField
                                fullWidth
                                id="dob"
                                name="dob"
                                variant="outlined"
                                placeholder='YYYY/MM/DD'
                                type='date'
                                inputProps={{
                                    style: {
                                        backgroundColor: '#F7F7F7',
                                    }
                                }}
                                value={formik.values.dob}
                                // onChange={formik.handleChange}
                                onChange={event => {
                                    const formattedDate = formatDate(event.target.value);
                                    formik.handleChange(event);
                                    formik.setFieldValue('dob', formattedDate);
                                }}
                                onBlur={formik.handleBlur}
                                error={formik.touched.dob && Boolean(formik.errors.dob)}
                                helperText={formik.touched.dob && formik.errors.dob}
                            /> */}
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <MobileDatePicker
                                        value={formik.values.dob == '' ? null : (dayjs(formik.values.dob) || null)}
                                        onChange={handleChangeDatePicker}
                                        sx={{
                                            backgroundColor: '#F7F7F7',
                                        }}
                                    />
                                </LocalizationProvider>
                                {(formik.touched.dob && Boolean(formik.errors.dob)) && <p style={{ margin: '3px 14px 0px', padding: 0, fontSize: '12px', color: '#d32f2f' }}>{formik.touched.dob && formik.errors.dob}</p>}
                            </div>
                        </div>

                        <div>
                            <label>국적</label>
                            <div>
                                <Select
                                    id="countries"
                                    name="countries"
                                    labelId="demo-multiple-name-label"
                                    multiple
                                    displayEmpty
                                    fullWidth
                                    value={countries}
                                    onChange={handleChangeContries}
                                    input={<OutlinedInput />}
                                    MenuProps={MenuProps}
                                    renderValue={(selected) => {
                                        console.log('selected', selected);

                                        const selectedCountries = selected as string[];


                                        if (selected.length === 0) {
                                            return <em>지원하고자 하는 분야를 선택하세요 (최대 2개) </em>;
                                        }

                                        return selected.join(', ');
                                    }}
                                    sx={{
                                        backgroundColor: '#F7F7F7',
                                    }}
                                    inputProps={{
                                        style: {
                                            backgroundColor: '#F7F7F7',
                                        }
                                    }}
                                >
                                    {countries.length === 0 && (
                                        <MenuItem disabled value="">
                                            <em>지원하고자 하는 분야를 선택하세요 (최대 2개) </em>
                                        </MenuItem>
                                    )}
                                    {countriesTypes.map((type) => (
                                        <MenuItem
                                            key={type}
                                            value={type}
                                            style={getStyles(type, countries, theme)}
                                            disabled={countries.length >= 2 && !countries.includes(type)}
                                        >
                                            {type}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <p style={{ margin: '3px 14px 0px', padding: 0, fontSize: '12px', color: '#d32f2f' }}>{formik.touched.countries && formik.errors.countries}</p>
                            </div>
                        </div>

                        <div>
                            <label>연락처</label>
                            <div>
                                <label htmlFor="phoneNumber" style={{ display: 'none' }}>연락처</label>
                                <PhoneInput
                                    country={'kr'}
                                    placeholder='전화번호를 입력하세요'
                                    inputStyle={{
                                        width: '100%',
                                        height: '100%',
                                        padding: '10px 16px 10px 48px',
                                        fontSize: '16px',
                                        fontWeight: '500',
                                        borderRadius: '4px',
                                        backgroundColor: '#F7F7F7',
                                    }}
                                    containerStyle={{ height: '56px' }}
                                    value={formik.values.phoneNumber}
                                    onChange={value => formik.setFieldValue('phoneNumber', `+${value}`)}  // Update formik value
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                    <p style={{ margin: '3px 14px 0px', padding: 0, fontSize: '12px', color: '#d32f2f' }}>{formik.errors.phoneNumber}</p>
                                ) : null}
                            </div>
                        </div>

                        <div>
                            <label>아이디(이메일)</label>
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                variant="outlined"
                                placeholder='Please enter your content'
                                inputProps={{
                                    style: {
                                        backgroundColor: '#F7F7F7',
                                    }
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
                                <button type="submit">
                                    <p>다음 단계</p>
                                    <img src={arrowBack} alt='' />
                                </button>
                            </div>
                            <Button
                                disabled={!(formik.values.gender || formik.values.name || formik.values.dob || formik.values.countries.length > 0 || formik.values.phoneNumber || formik.values.email)}
                                variant="contained"
                                // type="submit"
                                color='primary'
                                sx={{
                                    padding: '12px 60px',
                                    marginRight: '24px',
                                }}
                                // style={(!formik.values) ? { backgroundColor: '#E4E4E7', color: '#fff' } : { backgroundColor: '#000', color: '#fff' }}
                                onClick={handleClickSave}

                            >
                                다음
                            </Button>
                            <Button
                                // disabled={!formik.values}
                                type="submit"
                                sx={{

                                    padding: '12px 60px',
                                    backgroundColor: '#fff',
                                    color: '#0063F7',
                                    border: '1px solid #0063F7',
                                }}
                            // onClick={handleClickNext}
                            >
                                다음 단계
                            </Button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

