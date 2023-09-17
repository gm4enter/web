import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import { Button, Checkbox, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField, Theme, useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useFormik } from 'formik'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useDaumPostcodePopup } from 'react-daum-postcode'
import { useLocation, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useAppDispatch } from '../../app/hooks'
import arrowBack from '../../asset/images/ArrowBendUpLeft.png'
import background from '../../asset/images/Audition.png'
import lineStep from '../../asset/images/lineStep.png'
import { snackBarActions } from '../../components/snackbar/snackbarSlice'
import { dataSteps } from '../../constants'
import { useAuditionContext } from '../../context/auditionContext'
import { countriesTypes } from './step2'
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
                    '&>div:nth-of-type(4)': {
                        '&>div': {
                            '&>div': {
                                display: 'flex', gap: '12px',
                                '@media (max-width: 768px)': {
                                    flexDirection: 'column',
                                    height: '124px',
                                },
                                '&>div': {
                                    height: '56px',
                                },
                            },
                        },
                    },
                    // '&>div:nth-of-type(11)': {
                    //     display: 'flex',
                    //     justifyContent: 'space-between',
                    //     '&>div:nth-of-type(1)': {
                    //         display: 'flex',
                    //         alignItems: 'center',
                    //         gap: '8px',
                    //         '&>div': {
                    //             padding: '12px',
                    //             display: 'flex',
                    //             gap: '8px',
                    //             cursor: 'pointer',
                    //             '&>p': {
                    //                 margin: '0',
                    //                 padding: '0',
                    //                 color: '#18181B',
                    //                 fontSize: '16px',
                    //                 '@media (max-width: 768px)': {
                    //                     display: 'none',
                    //                 }
                    //             },
                    //             '@media (max-width: 768px)': {
                    //                 border: '1px solid #D4D4D8',
                    //                 padding: '10px',
                    //             }
                    //         },
                    //         '&>button': {
                    //             backgroundColor: 'transparent',
                    //             border: 'none',
                    //             padding: '12px',
                    //             fontSize: '16px',
                    //             display: 'flex',
                    //             gap: '8px',
                    //             cursor: 'pointer',
                    //             alignItems: 'center',
                    //             '&>p': {
                    //                 margin: '0',
                    //                 padding: '0',
                    //                 color: '#18181B',
                    //                 fontSize: '16px',
                    //                 '@media (max-width: 768px)': {
                    //                     display: 'none',
                    //                 }
                    //             },
                    //             '&>img': {
                    //                 transform: 'scaleX(-1) scaleY(1)'
                    //             },
                    //             '@media (max-width: 768px)': {
                    //                 border: '1px solid #D4D4D8',
                    //                 padding: '10px',
                    //             }
                    //         },
                    //     },
                    // },
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
        display: 'flex',
        justifyContent: 'space-between',
        '&>div:nth-of-type(1)': {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            '&>div': {
                padding: '12px',
                display: 'flex',
                gap: '8px',
                cursor: 'pointer',
                '&>p': {
                    margin: '0',
                    padding: '0',
                    color: '#18181B',
                    fontSize: '16px',
                    '@media (max-width: 768px)': {
                        display: 'none',
                    }
                },
                '@media (max-width: 768px)': {
                    border: '1px solid #D4D4D8',
                    padding: '10px',
                }
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
                    '@media (max-width: 768px)': {
                        display: 'none',
                    }
                },
                '&>img': {
                    transform: 'scaleX(-1) scaleY(1)'
                },
                '@media (max-width: 768px)': {
                    border: '1px solid #D4D4D8',
                    padding: '10px',
                }
            },
        },
    },

    '@media (max-width: 768px)': {
        home_container: {
            padding: '16px 16px 64px 16px',
            '&>div:nth-of-type(1)': {
                flexDirection: 'column',
                gap: '16px',
                '&>div:nth-of-type(1)': {
                    '&>div:nth-of-type(1)': {
                        height: '64px',
                        backgroundImage: `url("${background}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        '&>p': {
                            marginTop: '0',
                            color: '#18181B',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            marginBottom: '32px',
                        },
                    },
                    '&>div:nth-of-type(2)': {
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '16px',
                        width: '100%',
                        padding: '16px 0',
                        overflowX: 'auto', /* Enable horizontal scrolling */
                        whiteSpace: 'nowrap', /* Prevent items from wrapping to the next line */
                        '&>div': {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            '&>p': {
                                margin: '0',
                                padding: '0',
                                color: '#18181B',
                                fontSize: '16px',
                                fontWeight: 'bold',
                            },
                        },
                        '&>img': {
                            display: 'none',
                        },
                    },
                },
                '&>div:nth-of-type(2)': {
                    padding: '16px',
                    margin: '0 -16px',
                },
            },
        },
    },
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
    '보컬 (Singing)',
    '랩 (Rapping)',
    '댄스 (Dancing)',
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
    supportType: yup
        .array()
        .min(1, 'At least one support type is required')
        .required('Required'),
    height: yup
        .number()
        .typeError('Must be a number')
        .required('Required'),
    weight: yup
        .number()
        .typeError('Must be a number')
        .required('Required'),
    postalCode: yup
        .string()
        .required('Required'),
    address: yup
        .string()
        .required('Required'),
    job: yup
        .string()
        .required('Required'),
    bloodGroup: yup
        .string()
        .required('Required'),
    language: yup
        .string()
        .required('Required'),
    hobby: yup
        .string()
        .required('Required'),
});

export const AuditionStep3 = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useAppDispatch();

    const scrollableDivRef = useRef<HTMLDivElement | null>(null);

    const { data, setData } = useAuditionContext();

    console.log('dataContext child 3', data);
    const savedDataStep3Local = localStorage.getItem('dataSaveStep3');


    const handleClickNext = () => {
        console.log('handleClickNext');
        setData({ ...data, step: 4 })
    }

    const handleClickBack = () => {
        console.log('handleClickBack');
        setData({ ...data, step: 2 })
    }

    const handleClickSave = () => {
        console.log('handleClickSave');
        setData({ ...data, curentStepSave: 3 })
        if (
            formik.values.supportType.length > 0 || formik.values.address || formik.values.bloodGroup ||
            formik.values.height || formik.values.hobby || formik.values.job || formik.values.language ||
            formik.values.postalCode || formik.values.weight || formik.values.supportType.length > 0) {
            console.log('formik.values', formik.values);
            const delimiter = ', '; // You can use any delimiter you prefer

            const stringSupportType = formik.values.supportType.join(delimiter);
            console.log('stringSupportType', stringSupportType);

            const dataSave = {
                ...formik.values,
                supportType: stringSupportType,
            }
            console.log('dataSave', dataSave);

            localStorage.setItem('dataSaveStep3', JSON.stringify(dataSave));
            dispatch(snackBarActions.setStateSnackBar({
                content: '성공',
                type: 'success',
            }))
        }
    }


    const formik = useFormik({
        initialValues: {
            supportType: data.dataStep3?.supportType || [],
            height: data.dataStep3?.height || '',
            weight: data.dataStep3?.weight || '',
            postalCode: data.dataStep3?.postalCode || '',
            address: data.dataStep3?.address || '',
            job: data.dataStep3?.job || '',
            bloodGroup: data.dataStep3?.bloodGroup || '',
            language: data.dataStep3?.language || '',
            hobby: data.dataStep3?.hobby || '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('values formik', values);
            console.log('handleClickSubmit');
            handleClickSave();
            setData({ ...data, step: 4, dataStep3: values })
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

    //popup address
    const scriptUrl = 'URL_TO_DAUM_POSTCODE_SCRIPT';
    const open = useDaumPostcodePopup();

    const handleComplete = (data: any) => {
        let fullAddress = data.address;
        let extractedPostalCode = data.zonecode;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'

        console.log(extractedPostalCode); // e.g. '04794'

        formik.setFieldValue('postalCode', extractedPostalCode);
        formik.setFieldValue('address', fullAddress);
    };

    const handleClickPostalCode = () => {
        open({ onComplete: handleComplete });
    };
    //end

    // useEffect(() => {
    //     const scrollableDiv = scrollableDivRef.current;

    //     if (scrollableDiv) {
    //         // Calculate the scroll distance as 50% of the scrollable width
    //         const scrollDistance = scrollableDiv.scrollWidth / 2;

    //         // Check if the screen width is less than or equal to 768px
    //         const isMobile = window.innerWidth <= 768;

    //         if (isMobile) {
    //             // Scroll to the right by 50% of the scrollable width on mobile
    //             if (scrollableDiv.scrollLeft !== undefined) {
    //                 scrollableDiv.scrollLeft = scrollDistance;
    //             }
    //         }
    //     }
    // }, []);


    useEffect(() => {
        const scrollableDiv = scrollableDivRef.current;

        if (scrollableDiv) {
            // Calculate the scroll distance as half of the visible width
            const scrollDistance = scrollableDiv.clientWidth / 2;

            // Check if the screen width is less than or equal to 768px
            const isMobile = window.innerWidth <= 768;

            if (isMobile) {
                // Scroll to the right by the calculated scroll distance on mobile
                if (scrollableDiv.scrollBy !== undefined) {
                    scrollableDiv.scrollBy({
                        left: scrollDistance,
                        behavior: 'smooth', // You can use 'auto' for immediate scrolling
                    });
                }
            }
        }
    }, []);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    useLayoutEffect(() => {
        if (data.dataStep3?.supportType) {
            setSupportType(data.dataStep3?.supportType);
        }
        if (savedDataStep3Local) {
            const dataStep3Local = JSON.parse(savedDataStep3Local);
            if (dataStep3Local.supportType) {
                console.log('local countries', dataStep3Local.supportType);
                const delimiter = ", "; // This should match the delimiter used in your input string

                const resultArray = dataStep3Local.supportType.split(delimiter);
                setSupportType(resultArray);
                formik.setFieldValue('supportType', resultArray);
            }
            if (dataStep3Local.height) {
                formik.setFieldValue('height', dataStep3Local.height);
            }
            if (dataStep3Local.weight) {
                formik.setFieldValue('weight', dataStep3Local.weight);
            }
            if (dataStep3Local.postalCode) {
                formik.setFieldValue('postalCode', dataStep3Local.postalCode);
            }
            if (dataStep3Local.address) {
                formik.setFieldValue('address', dataStep3Local.address);
            }
            if (dataStep3Local.job) {
                formik.setFieldValue('job', dataStep3Local.job);
            }
            if (dataStep3Local.bloodGroup) {
                formik.setFieldValue('bloodGroup', dataStep3Local.bloodGroup);
            }
            if (dataStep3Local.language) {
                formik.setFieldValue('language', dataStep3Local.language);
            }
            if (dataStep3Local.hobby) {
                formik.setFieldValue('hobby', dataStep3Local.hobby);
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

                    <div ref={scrollableDivRef}>
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
                        <label>필수입력 <span>*</span></label>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label>지원분야</label>
                            <div>
                                <Select
                                    id="supportType"
                                    name="supportType"
                                    labelId="demo-multiple-name-label"
                                    multiple
                                    displayEmpty
                                    fullWidth
                                    value={supportType}
                                    onChange={handleChange}
                                    input={<OutlinedInput />}
                                    MenuProps={MenuProps}
                                    renderValue={(selected) => {
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
                                    {supportType.length === 0 && (
                                        <MenuItem disabled value="">
                                            <em>지원하고자 하는 분야를 선택하세요 (최대 2개) </em>
                                        </MenuItem>
                                    )}
                                    {supportTypes.map((type) => (
                                        <MenuItem
                                            key={type}
                                            value={type}
                                            style={getStyles(type, supportType, theme)}
                                            disabled={supportType.length >= 2 && !supportType.includes(type)}
                                        >
                                            {type}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <p style={{ margin: '3px 14px 0px', padding: 0, fontSize: '12px', color: '#d32f2f' }}>{formik.touched.supportType && formik.errors.supportType}</p>
                            </div>
                        </div>

                        <div>
                            <label>신장(cm)</label>
                            <TextField
                                fullWidth
                                id="height"
                                name="height"
                                variant="outlined"
                                placeholder='신장츠 단위, 숫자만'
                                inputProps={{
                                    style: {
                                        backgroundColor: '#F7F7F7',
                                    }
                                }}
                                value={formik.values.height}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.height && Boolean(formik.errors.height)}
                                helperText={formik.touched.height && formik.errors.height}
                            />
                        </div>

                        <div>
                            <label>체중(kg)</label>
                            <TextField
                                fullWidth
                                id="weight"
                                name="weight"
                                variant="outlined"
                                placeholder='단위, 숫자만 입력'
                                inputProps={{
                                    style: {
                                        backgroundColor: '#F7F7F7',
                                    }
                                }}
                                value={formik.values.weight}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.weight && Boolean(formik.errors.weight)}
                                helperText={formik.touched.weight && formik.errors.weight}
                            />
                        </div>

                        <div>
                            <label>주소</label>
                            <div>
                                <div>
                                    <div
                                        onClick={handleClickPostalCode}
                                        style={{
                                            flex: 1,
                                            backgroundColor: '#F7F7F7',
                                            zIndex: 1,
                                            cursor: 'pointer', // Add this style to indicate that it's clickable
                                            display: 'flex',
                                            alignItems: 'center', // Center text vertically
                                            padding: '0 12px', // Add padding to match TextField
                                            border: '1px solid #ccc', // Add border to make it look like a TextField
                                        }}
                                        onBlur={formik.handleBlur}
                                    >
                                        {formik.values.postalCode}
                                    </div>
                                    <Button
                                        disabled={!formik.values}
                                        variant="contained"
                                        color='primary'
                                        sx={{
                                            padding: '12px 16px',
                                            backgroundColor: '#000',
                                            color: '#fff',
                                            height: '56px'
                                        }}
                                        onClick={handleClickPostalCode}
                                    >
                                        우편번호 찾기 (대한민국 한정)
                                    </Button>
                                </div>
                                {/* <p style={{ margin: '3px 14px 0px', padding: 0, fontSize: '12px', color: '#d32f2f' }}>{formik.touched.supportType && formik.errors.supportType}</p> */}
                            </div>
                        </div>

                        <div>
                            <label></label>
                            <TextField
                                fullWidth
                                id="address"
                                name="address"
                                variant="outlined"
                                placeholder='상세주소'
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

                        <div className={classes.label}>
                            <label>선택입력 <span>*</span></label>
                        </div>

                        <div>
                            <label>직업</label>
                            <TextField
                                fullWidth
                                id="job"
                                name="job"
                                variant="outlined"
                                placeholder='학생인 경우, 학교명/ 학년 기재'
                                inputProps={{
                                    style: {
                                        backgroundColor: '#F7F7F7',
                                    }
                                }}
                                value={formik.values.job}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.job && Boolean(formik.errors.job)}
                                helperText={formik.touched.job && formik.errors.job}
                            />
                        </div>

                        <div>
                            <label>혈액형</label>
                            <div>
                                <Select
                                    labelId="demo-multiple-name-label"
                                    id="bloodGroup"
                                    name="bloodGroup"
                                    displayEmpty
                                    fullWidth
                                    value={formik.values.bloodGroup}
                                    onChange={formik.handleChange}
                                    input={<OutlinedInput />}
                                    MenuProps={MenuProps}
                                    renderValue={(selected) => {
                                        if (selected === '') {
                                            return <em>혈액형을 선택하세요</em>;
                                        }
                                        return selected;
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
                                    <MenuItem key={1} value={'A'}> A </MenuItem>
                                    <MenuItem key={2} value={'B'}> B </MenuItem>
                                    <MenuItem key={3} value={'AB'}> AB </MenuItem>
                                    <MenuItem key={4} value={'O'}> O </MenuItem>
                                </Select>
                                <p style={{ margin: '3px 14px 0px', padding: 0, fontSize: '12px', color: '#d32f2f' }}>{formik.touched.bloodGroup && formik.errors.bloodGroup}</p>
                            </div>
                        </div>

                        <div>
                            <label>사용가능언어및 수준 (모국제외)</label>
                            <div>
                                <Select
                                    labelId="demo-multiple-name-label"
                                    id="language"
                                    name="language"
                                    displayEmpty
                                    fullWidth
                                    value={formik.values.language}
                                    onChange={formik.handleChange}
                                    input={<OutlinedInput />}
                                    MenuProps={MenuProps}
                                    renderValue={(selected) => {
                                        if (selected === '') {
                                            return <em>사용 가능한 언어 및 레벨을 선택하십시오</em>;
                                        }
                                        return selected;
                                    }}
                                    inputProps={{
                                        style: {
                                            backgroundColor: '#F7F7F7',
                                        }
                                    }}
                                    sx={{
                                        backgroundColor: '#F7F7F7',
                                    }}
                                >
                                    {countriesTypes.map((type) => (
                                        <MenuItem
                                            key={type}
                                            value={type}
                                        // style={getStyles(type, countries, theme)}
                                        // disabled={countries.length >= 2 && !countries.includes(type)}
                                        >
                                            {type}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <p style={{ margin: '3px 14px 0px', padding: 0, fontSize: '12px', color: '#d32f2f' }}>{formik.touched.language && formik.errors.language}</p>
                            </div>

                        </div>

                        <div>
                            <label>취미/특기</label>
                            <TextField
                                fullWidth
                                id="hobby"
                                name="hobby"
                                variant="outlined"
                                multiline
                                rows={5}
                                placeholder='예시, 피아노, 현대무용, 미디, 작곡 등'
                                sx={{
                                    backgroundColor: '#F7F7F7',
                                }}
                                // inputProps={{
                                //     style: {
                                //         backgroundColor: '#F7F7F7',
                                //     }
                                // }}
                                value={formik.values.hobby}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.hobby && Boolean(formik.errors.hobby)}
                                helperText={formik.touched.hobby && formik.errors.hobby}
                            />
                        </div>

                        <div className={classes.buttom_area}>
                            <div>
                                <div onClick={handleClickBack}>
                                    <img src={arrowBack} alt='' />
                                    <p> 이전 단계</p>
                                </div>
                                <button type="submit">
                                    <p>다음 단계</p>
                                    <img src={arrowBack} alt='' />
                                </button>
                            </div>
                            <Button
                                disabled={!(formik.values.supportType.length > 0 || formik.values.address || formik.values.bloodGroup ||
                                    formik.values.height || formik.values.hobby || formik.values.job || formik.values.language ||
                                    formik.values.postalCode || formik.values.weight)}
                                variant="contained"
                                color='primary'
                                sx={{
                                    padding: '12px 60px',
                                    marginRight: '24px',
                                    '@media (max-width: 768px)': {
                                        padding: '6px 12px', // Adjust padding for screens with a maximum width of 768px (typical mobile devices)
                                        marginRight: '8px',
                                        fontSize: '12px',

                                    },
                                }}
                                onClick={handleClickSave}
                            // style={(!formik.values) ? { backgroundColor: '#E4E4E7', color: '#fff' } : { backgroundColor: '#000', color: '#fff' }}
                            >
                                저장
                            </Button>
                            <Button
                                // disabled={!formik.values}
                                type="submit"
                                sx={{
                                    padding: '12px 60px',
                                    backgroundColor: '#fff',
                                    color: '#0063F7',
                                    border: '1px solid #0063F7',
                                    '@media (max-width: 768px)': {
                                        padding: '6px 12px',
                                        fontSize: '12px',

                                    },
                                }}
                            >
                                다음 단계
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
