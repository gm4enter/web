import { makeStyles } from '@mui/styles'
import React, { useLayoutEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import arrowBack from '../../asset/images/ArrowBendUpLeft.png'
import businessGlobalLandingPage from '../../asset/images/businessGlobalLandingPage.png'
import linkIcon from '../../asset/images/link-2.png'
import background from '../../asset/images/Audition.png'
import lineStep from '../../asset/images/lineStep.png'
import { ROUTE } from '../../router/routes'
import { Input } from '../../components/base/input/Input'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as yup from 'yup';
import { Button, MenuItem, TextField, Checkbox, Radio, FormLabel, RadioGroup, FormControlLabel, FormControl, OutlinedInput, Select, useTheme, SelectChangeEvent, Theme, InputAdornment } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
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
    label: {
        borderBottom: '1px solid #000',
        padding: '10px 0 12px 0',
        margin: '8px 0 16px 0',
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
    buttom_area: {
        marginTop: '28px',
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

const supportTypes = [
    '선택',
    '(Singing)',
    '(Rapping)',
    '(Dancing)',
    '연기 (Acting)',
    '모델 (Model)'
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

export const AuditionStep4 = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()

    const { data, setData } = useAuditionContext();

    console.log('dataContext child 4', data);

    const handleClickNext = () => {
        console.log('handleClickNext');
        setData({ ...data, step: 5 })
    }

    const handleClickBack = () => {
        console.log('handleClickBack');
        setData({ ...data, step: 3 })
    }

    const handleClickSave = () => {
        console.log('handleClickSave');
        setData({ ...data, curentStepSave: 4 })
        navigate(ROUTE.HOME)
    }

    const formik = useFormik({
        initialValues: {
            supportType: '',
            height: '',
            weight: '',
            address: '',
            address2: '',
            job: '',
            bloodGroup: '',
            language: '',
            hobby: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // alert(JSON.stringify(values, null, 2));
            console.log('values', values);

        },
    });

    const theme = useTheme();
    const [supportType, setSupportType] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof supportType>) => {
        const {
            target: { value },
        } = event;
        // On autofill we get a stringified value.
        const supportTypes = typeof value === 'string' ? value.split(',') : value;

        // Allow selecting a maximum of two items
        if (supportTypes.length <= 2) {
            setSupportType(supportTypes);
            formik.setFieldValue('supportType', supportTypes);
        }
    };

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

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
                                            (index < 3) ? {
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
                                        defaultChecked={index <= 3 ? true : false}
                                        disabled
                                    />
                                    <label htmlFor="policy" style={index <= 3 ? (index == 3 ? { color: '#0063F7', fontSize: '20px', fontWeight: 'bold' } : { fontSize: '20px', fontWeight: 'bold' }) : {}}>{item.title}</label>
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
                        <label>필수입력 <span>*</span></label>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label>프로필 사진(필수)</label>
                            <div>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <TextField
                                        fullWidth
                                        id="address"
                                        name="address"
                                        variant="outlined"
                                        placeholder='지원하고자 하는 분야를 선택하세요 (최대 2개) '
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <div
                                                        style={{
                                                            padding: '12px 16px',
                                                            marginRight: '-8px',
                                                            backgroundColor: '#000',
                                                            color: '#fff',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '4px',
                                                        }}
                                                        onClick={() => { console.log('verify email') }}
                                                    >
                                                        <img src={linkIcon} alt='' />
                                                        파일첨부
                                                    </div>
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            flex: 1,
                                            // backgroundColor: '#F7F7F7',
                                        }}
                                        inputProps={{
                                            style: {
                                                backgroundColor: '#F7F7F7',
                                            }
                                        }}
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.address && Boolean(formik.errors.address)}
                                        helperText={formik.touched.address && formik.errors.address}
                                    />
                                </div>
                                <p>과도한 보정이나 어클로 찍은 사진이 아닌 정면 사진 원본으로 첨부 (10MB 아하) 파일</p>
                            </div>
                        </div>

                        <div>
                            <label>사진 첨부(선택)</label>
                            <div>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <TextField
                                        fullWidth
                                        id="address"
                                        name="address"
                                        variant="outlined"
                                        placeholder='지원하고자 하는 분야를 선택하세요 (최대 2개) '
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <div
                                                        style={{
                                                            padding: '12px 16px',
                                                            marginRight: '-8px',
                                                            backgroundColor: '#000',
                                                            color: '#fff',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '4px',
                                                        }}
                                                        onClick={() => { console.log('verify email') }}
                                                    >
                                                        <img src={linkIcon} alt='' />
                                                        파일첨부
                                                    </div>
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            flex: 1,
                                            // backgroundColor: '#F7F7F7',
                                        }}
                                        inputProps={{
                                            style: {
                                                backgroundColor: '#F7F7F7',
                                            }
                                        }}
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.address && Boolean(formik.errors.address)}
                                        helperText={formik.touched.address && formik.errors.address}
                                    />
                                </div>
                                <p>상반신, 정면, 전신 등 본인의 사진을 추가로 첨부</p>
                                <p>과도한 보정이나 어플로 찍은 사진이 아닌 정면 사진 원본으로 첨부 (10MB이하)</p>
                            </div>
                        </div>

                        <div>
                            <label>체중(kg)</label>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <TextField
                                    fullWidth
                                    id="address"
                                    name="address"
                                    variant="outlined"
                                    placeholder='지원하고자 하는 분야를 선택하세요 (최대 2개) '
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <div
                                                    style={{
                                                        padding: '12px 16px',
                                                        marginRight: '-8px',
                                                        backgroundColor: '#000',
                                                        color: '#fff',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '4px',
                                                    }}
                                                    onClick={() => { console.log('verify email') }}
                                                >
                                                    <img src={linkIcon} alt='' />
                                                    파일 첨부 (필수)
                                                </div>
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{
                                        flex: 1,
                                        // backgroundColor: '#F7F7F7',
                                    }}
                                    inputProps={{
                                        style: {
                                            backgroundColor: '#F7F7F7',
                                        }
                                    }}
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.address && Boolean(formik.errors.address)}
                                    helperText={formik.touched.address && formik.errors.address}
                                />
                            </div>
                        </div>

                        <div>
                            <label></label>
                            <div>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <TextField
                                        fullWidth
                                        id="address"
                                        name="address"
                                        variant="outlined"
                                        placeholder='지원하고자 하는 분야를 선택하세요 (최대 2개) '
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <div
                                                        style={{
                                                            padding: '12px 16px',
                                                            marginRight: '-8px',
                                                            backgroundColor: '#000',
                                                            color: '#fff',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '4px',
                                                        }}
                                                        onClick={() => { console.log('verify email') }}
                                                    >
                                                        <img src={linkIcon} alt='' />
                                                        파일 첨부 (필수)
                                                    </div>
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            flex: 1,
                                            backgroundColor: '#F7F7F7',
                                        }}
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.address && Boolean(formik.errors.address)}
                                        helperText={formik.touched.address && formik.errors.address}
                                    />
                                </div>
                                <p>노래 / 랩 부문 : 1분30초 내에 밝은 곳, 얼굴 정면으로 삼 반신까지 나오게 촬영 한 노래 / 랩 영상 첨부</p>
                                <p>노래 / 랩 부문 : 1분30초 내에 밝은 곳, 얼굴 정면으로 삼 반신까지 나오게 촬영 한 노래 / 랩 영상 첨부</p>
                                <p>외모 부문 1분 내에 밝은곳, 얼굴 정면으로 상반신까지 나오게 촬영한 자기소개 영상 첨부</p>
                                <p>기 부문 :1분 내에 밝은곳, 얼굴 정면으로 상반신까지 나오게 촬영한 자유연기 영상 첨부</p>
                            </div>
                        </div>

                        <div className={classes.buttom_area}>
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
                                onClick={handleClickNext}

                            // style={(!formik.values) ? { backgroundColor: '#E4E4E7', color: '#fff' } : { backgroundColor: '#000', color: '#fff' }}
                            >
                                지원서 저장
                            </Button>
                        </div>

                    </form>
                </div>
            </div >
        </div >
    )
}