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
import { Button, MenuItem, TextField, Checkbox, Radio, FormLabel, RadioGroup, FormControlLabel, FormControl, OutlinedInput, Select, useTheme, SelectChangeEvent, Theme } from '@mui/material'
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

const infoUser = []

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

const Audition5 = () => {
    const classes = useStyles()
    const navigate = useNavigate()

    const handleClickNext = () => {
        console.log('handleClickNext');
    }

    const handleClickBack = () => {
        console.log('handleClickBack');
        navigate(ROUTE.AUDITION + '/step4')
    }

    const handleClickContact = () => {
        navigate(ROUTE.CONTACT)
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
                                            {
                                                padding: 0,
                                                '&.Mui-checked': {
                                                    color: '#000',
                                                }
                                            }
                                        }
                                        defaultChecked={true}
                                        disabled
                                    />
                                    <label htmlFor="policy" style={{ fontSize: '20px', fontWeight: 'bold' }}>{item.title}</label>
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
                                defaultChecked={true}
                                disabled
                            />
                            <label htmlFor="policy" style={{ color: '#0063F7', fontSize: '20px', fontWeight: 'bold' }}>지원서 확인</label>
                        </div>
                    </div>

                </div>

                <div>
                    <div>
                        <label>지원자 정보</label>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label>이름</label>
                            <div>Son Hung Min</div>
                        </div>

                        <div>
                            <label>성별</label>
                            <div>남</div>
                        </div>

                        <div>
                            <label>생년월일</label>
                            <div>1982/03/22</div>
                        </div>

                        <div>
                            <label>국적</label>
                            <div>Korean</div>
                        </div>

                        <div>
                            <label>연락처</label>
                            <div>+82 123456789</div>
                        </div>

                        <div>
                            <label>아이디(이메일)</label>
                            <div>greenapp@naver.com</div>
                        </div>

                        <div className={classes.label}>
                            <label>지원서 입력</label>
                        </div>

                        <div>
                            <label>지원분야</label>
                            <div>마사지, 부동산</div>
                        </div>

                        <div>
                            <label>신장(cm)</label>
                            <div>179</div>
                        </div>
                        <div>
                            <label>체중(kg)</label>
                            <div>70</div>
                        </div>
                        <div>
                            <label>주소</label>
                            <div>경기도 시흥시 군자로 510(거모동)</div>
                        </div>
                        <div>
                            <label>직업</label>
                            <div>사진 모델</div>
                        </div>
                        <div>
                            <label>혈액형</label>
                            <div>혈액형 O</div>
                        </div>
                        <div>
                            <label>사용가능언어및 수준 (모국어제외)</label>
                            <div>영어 아이엘츠 7.0</div>
                        </div>
                        <div>
                            <label>취미/특기</label>
                            <div>다리를 건너기, 음악감상, 사이클링, 배구, 요리</div>
                        </div>

                        <div className={classes.label}>
                            <label>지원서 입력</label>
                        </div>

                        <div>
                            <label>프로필 사진(필수)</label>
                            <div>
                                <a href='#'>Mypicture.png</a>
                            </div>
                        </div>

                        <div>
                            <label>사진 첨부(선택)</label>
                            <div>
                                <a href='#'>Hipictureabcxyz.jpeg</a>
                            </div>
                        </div>

                        <div>
                            <label>영상 첨부</label>
                            <div>
                                <a href='#'>auditonabcxyz.mp4</a>
                            </div>
                        </div>

                        <div className={classes.buttom_area}>
                            <div>
                                <div onClick={handleClickBack}>
                                    <img src={arrowBack} alt='' />
                                    이전 단계
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
                            // style={(!formik.values) ? { backgroundColor: '#E4E4E7', color: '#fff' } : { backgroundColor: '#000', color: '#fff' }}
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

export default Audition5
