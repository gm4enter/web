import { makeStyles } from '@mui/styles'
import React, { useLayoutEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import arrowBack from '../../asset/images/ArrowBendUpLeft.png'
import businessGlobalLandingPage from '../../asset/images/businessGlobalLandingPage.png'
import gmaLogoLandingPage from '../../asset/images/gmaLogoLandingPage.png'
import background from '../../asset/images/Audition.png'
import lineStep from '../../asset/images/lineStep.png'
import succcess from '../../asset/images/success.png'
import { ROUTE } from '../../router/routes'
import { Input } from '../../components/base/input/Input'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as yup from 'yup';
import { Button, MenuItem, TextField, Checkbox, Radio, FormLabel, RadioGroup, FormControlLabel, FormControl, OutlinedInput, Select, useTheme, SelectChangeEvent, Theme, Modal } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { dataSteps } from '../../constants'
import { useAuditionContext } from '../../context/auditionContext'
import axiosClient from '../../apis/axiosClient'
import { useAppDispatch } from '../../app/hooks'
import { snackBarActions } from '../../components/snackbar/snackbarSlice'
import { DataApplyArtist } from '../../types/dataAuditionContext'
import { loadingActions } from '../../components/loading/loadingSlice'
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
    },
    modal: {
        position: 'absolute',
        left: '40%',
        top: '30%',
        width: '308px',
        padding: '16px 20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0px 2px 16px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        '&>p': {
            margin: '0',
            padding: '0',
        },
        '&>p:nth-of-type(1)': {
            color: '#18181B',
            fontSize: '36px',
            fontWeight: 'bold',
        },

        '@media (max-width: 768px)': {
            right: '16px',
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

export const AuditionStep5 = () => {

    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useAppDispatch();
    const { data, setData } = useAuditionContext();

    const [isSuccess, setIsSuccess] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    console.log('dataContext child 5', data);

    const handleCloseModal = () => setOpenModal(false);

    const handleClickNext = () => {
        console.log('handleClickNext');
    }

    const handleClickBack = () => {
        console.log('handleClickBack');
        setData({ ...data, step: 4 })
    }

    const handleClickSave = async () => {
        console.log('handleClickSave');
        console.log('dataContext', data);

        try {
            dispatch(loadingActions.openLoading())

            const formDataImg = new FormData()
            const formDataImgOptional = new FormData()
            const formDataVideo = new FormData()
            const formDataVideoOptional = new FormData()

            data.dataStep4?.image && formDataImg.append('images', data.dataStep4?.image)
            data.dataStep4?.imageOptional && formDataImgOptional.append('images', data.dataStep4?.imageOptional)
            data.dataStep4?.video && formDataVideo.append('images', data.dataStep4?.video)
            data.dataStep4?.videoOptional && formDataVideoOptional.append('images', data.dataStep4?.videoOptional)

            // const [resImg, resImgOp, resVideo, resVideoOp] = await Promise.all([
            //     data.dataStep4?.image && axiosClient.post('/upload', formDataImg, {
            //         headers: {
            //             'Content-Type': 'multipart/form-data'
            //         }
            //     }),
            //     data.dataStep4?.imageOptional && axiosClient.post('/upload', formDataImgOptional, {
            //         headers: {
            //             'Content-Type': 'multipart/form-data'
            //         }
            //     }),
            //     data.dataStep4?.video && axiosClient.post('/upload', formDataVideo, {
            //         headers: {
            //             'Content-Type': 'multipart/form-data'
            //         }
            //     }),
            //     data.dataStep4?.videoOptional && axiosClient.post('/upload', formDataVideoOptional, {
            //         headers: {
            //             'Content-Type': 'multipart/form-data'
            //         }
            //     }),
            // ])

            // console.log('resImg: ', resImg);
            // console.log('resImgOp: ', resImgOp);
            // console.log('resVideo: ', resVideo);
            // console.log('resVideoOp: ', resVideoOp);

            const mockImg = {
                img: 'images-1693388517249.jpg',
                imgop: 'images-1693388517259.jpg',
                video: [
                    'images-1693388517291.mp4',
                    'images-1693388517312.mp4',
                ]
            }

            const dataStep5: DataApplyArtist = {
                name: data.dataStep2?.name || '',
                gender: (data.dataStep2?.gender === '1' ? '남' : '여'),
                birthday: data.dataStep2?.dob || '',
                national: data.dataStep2?.countries.join(', ') || '',
                phone_number: data.dataStep2?.phoneNumber || '',
                email: data.dataStep2?.email || '',
                support_field: data.dataStep3?.supportType.join(', ') || '',
                height: parseFloat(data.dataStep3?.height || '0'),
                weight: parseFloat(data.dataStep3?.weight || '0'),
                postal_code: data.dataStep3?.postalCode || '',
                address: data.dataStep3?.address || '',
                career: data.dataStep3?.job || '',
                blood_group: data.dataStep3?.bloodGroup || '',
                languages: String(data.dataStep3?.language) || '',
                hobby: data.dataStep3?.hobby || '',
                // profile_files: resImg && resImg.data.length > 0 ? [resImg.data[0]] : [],
                // files: resImgOp && resImgOp.data.length > 0 ? [resImgOp.data[0]] : [],
                // weight_files: [
                //     resVideo && resVideo.data.length > 0 ? resVideo.data[0] : null,
                //     resVideoOp && resVideoOp.data.length > 0 ? resVideoOp.data[0] : null,
                // ],
                profile_files: mockImg.img ? [mockImg.img] : [],
                files: mockImg.imgop ? [mockImg.imgop] : [],
                weight_files: mockImg.video,
            }

            console.log('dataStep5', dataStep5);

            axiosClient.post('/apply', dataStep5)
                .then(res => {
                    console.log('res apply', res);
                    dispatch(snackBarActions.setStateSnackBar({
                        content: '성공',
                        type: 'success',
                    }))
                    localStorage.removeItem('dataSaveStep2');
                    localStorage.removeItem('dataSaveStep3');
                    localStorage.removeItem('dataSaveStep4');
                    setIsSuccess(true)
                    setOpenModal(true)
                })
                .catch(err => {
                    console.log('err', err);
                    dispatch(snackBarActions.setStateSnackBar({
                        content: '실패',
                        type: 'error',
                    }))
                    setIsSuccess(false)
                    setOpenModal(true)
                })
                .finally(() => {
                    dispatch(loadingActions.loadingSuccess())
                })

        } catch (error) {
            console.log('error:', error)
        }

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
            console.log('values formik', values);
            console.log('dataContext', data);
        },
    });

    // Handler to open the selected file
    const handleImageLinkClick = () => {
        const imageFile = data.dataStep4?.image;
        if (imageFile) {
            const imageUrl = URL.createObjectURL(imageFile);
            window.open(imageUrl); // Open the image in a new tab or window
        }
    };

    const handleFileLinkClick = (file: File | null) => {
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            window.open(fileUrl); // Open the file in a new tab or window
        }
    };

    const getFileLink = (file: File | null | undefined, label: string) => {
        if (file) {
            return (
                <div>
                    <label>{label}</label>
                    <div>
                        <a href="#" onClick={() => handleFileLinkClick(file)}>
                            {file?.name}
                        </a>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <label>{label}</label>
                <div>
                    <a href="#"></a>
                </div>
            </div>
        )
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
                            <div>{data.dataStep2?.name}</div>
                        </div>

                        <div>
                            <label>성별</label>
                            <div>{data.dataStep2?.gender && (data.dataStep2?.gender === '1' ? '남' : '여')}</div>
                        </div>

                        <div>
                            <label>생년월일</label>
                            <div>{data.dataStep2?.dob}</div>
                        </div>

                        <div>
                            <label>국적</label>
                            <div>
                                {data.dataStep2?.countries.join(', ')}
                            </div>
                        </div>

                        <div>
                            <label>연락처</label>
                            <div>{data.dataStep2?.phoneNumber}</div>
                        </div>

                        <div>
                            <label>아이디(이메일)</label>
                            <div>{data.dataStep2?.email}</div>
                        </div>

                        <div className={classes.label}>
                            <label>지원서 입력</label>
                        </div>

                        <div>
                            <label>지원분야</label>
                            <div>
                                {data.dataStep3?.supportType.join(', ')}
                            </div>
                        </div>

                        <div>
                            <label>신장(cm)</label>
                            <div>{data.dataStep3?.height}</div>
                        </div>
                        <div>
                            <label>체중(kg)</label>
                            <div>{data.dataStep3?.weight}</div>
                        </div>
                        <div>
                            <label>주소</label>
                            <div>{data.dataStep3?.address}</div>
                        </div>
                        <div>
                            <label>직업</label>
                            <div>{data.dataStep3?.job}</div>
                        </div>
                        <div>
                            <label>혈액형</label>
                            <div>{data.dataStep3?.bloodGroup && (`혈액형 ${data.dataStep3?.bloodGroup}`)}</div>
                        </div>
                        <div>
                            <label>사용가능언어및 수준 (모국어제외)</label>
                            <div>{data.dataStep3?.language}</div>
                        </div>
                        <div>
                            <label>취미/특기</label>
                            <div>{data.dataStep3?.hobby}</div>
                        </div>

                        <div className={classes.label}>
                            <label>지원서 입력</label>
                        </div>
                        {getFileLink(data.dataStep4?.image, '프로필 사진(필수)')}
                        {getFileLink(data.dataStep4?.imageOptional, '사진 첨부(선택)')}
                        {getFileLink(data.dataStep4?.video, '사진 첨부(선택)')}
                        {getFileLink(data.dataStep4?.videoOptional, '')}

                        <div className={classes.buttom_area}>
                            <div>
                                <div onClick={handleClickBack}>
                                    <img src={arrowBack} alt='' />
                                    이전 단계
                                </div>
                            </div>
                            <Button
                                variant="contained"
                                color='primary'
                                sx={{
                                    padding: '12px 60px',
                                    marginRight: '24px',
                                }}
                            // onClick={handleClickNext}
                            >
                                다음 단계
                            </Button>
                            <Button
                                // disabled={!formik.values}
                                variant="contained"
                                // type="submit"
                                sx={{
                                    padding: '12px 60px',
                                    background: '#00AB07'
                                }}
                                onClick={handleClickSave}
                            // style={(!formik.values) ? { backgroundColor: '#E4E4E7', color: '#fff' } : { backgroundColor: '#000', color: '#fff' }}
                            >
                                제출
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                disableAutoFocus
            // sx={
            //     {
            //         '.MuiModal-backdrop': {
            //             backgroundColor: 'transparent',
            //         },
            //     }
            // }
            >
                <div className={classes.modal}>
                    <img src={isSuccess ? succcess : succcess} alt='' />
                    <p>{isSuccess ? 'Success' : 'Failure'}</p>
                    <p>{isSuccess ? 'Your request has been sent successfully' : 'Your request has failed to send'}</p>
                    <Button
                        variant="contained"
                        sx={{
                            padding: '12px 60px',
                        }}
                        onClick={handleCloseModal}
                    >
                        Okey
                    </Button>
                </div>
            </Modal>
        </div>
    )
}