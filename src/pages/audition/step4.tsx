import { makeStyles } from '@mui/styles'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import arrowBack from '../../asset/images/ArrowBendUpLeft.png'
import businessGlobalLandingPage from '../../asset/images/businessGlobalLandingPage.png'
import UploadFileIcon from '../../asset/images/iconUploadFile.png'
import background from '../../asset/images/Audition.png'
import lineStep from '../../asset/images/lineStep.png'
import { ROUTE } from '../../router/routes'
import { Input } from '../../components/base/input/Input'
import { Formik, Form, Field, ErrorMessage, useFormik, useField } from 'formik';
import * as yup from 'yup';
import { Button, MenuItem, TextField, Checkbox, Radio, FormLabel, RadioGroup, FormControlLabel, FormControl, OutlinedInput, Select, useTheme, SelectChangeEvent, Theme, InputAdornment } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { dataSteps } from '../../constants'
import { useAuditionContext } from '../../context/auditionContext'
import { snackBarActions } from '../../components/snackbar/snackbarSlice'
import { useAppDispatch } from '../../app/hooks'
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
    image: yup
        .string()
        .required('Required'),
    // video: yup
    //     .string()
    //     .required('Required'),

});

export const AuditionStep4 = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useAppDispatch();
    const { data, setData } = useAuditionContext();

    console.log('dataContext child 4', data);
    const savedDataStep4Local = localStorage.getItem('dataSaveStep4');

    console.log('GET savedDataStep4Local', savedDataStep4Local);
    


    const [image, setImage] = React.useState<File | null>(null);
    const [imageOptional, setImageOptional] = React.useState<File | null>(null);
    const [video, setVideo] = React.useState<File | null>(null);
    const [videoOptional, setVideoOptional] = React.useState<File | null>(null);

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
        if (formik.values.image || formik.values.imageOptional || formik.values.video || formik.values.videoOptional ) {
            const dataStep4 = {
                image: image,
                imageOptional: imageOptional,
                video: video,
                videoOptional: videoOptional,
            }
            console.log('dataStep411111', dataStep4);
            
            localStorage.setItem('dataSaveStep4', JSON.stringify(dataStep4));
            dispatch(snackBarActions.setStateSnackBar({
                content: '성공',
                type: 'success',
            }))
        }

    }

    //funcs change
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const fileInputRef2 = useRef<HTMLInputElement | null>(null);
    const fileInputRef3 = useRef<HTMLInputElement | null>(null);
    const fileInputRef4 = useRef<HTMLInputElement | null>(null);

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleImageOptionalClick = () => {
        if (fileInputRef2.current) {
            fileInputRef2.current.click();
        }
    }

    const handleVideoClick = () => {
        if (fileInputRef3.current) {
            fileInputRef3.current.click();
        }
    };

    const handleVideoOptionalClick = () => {
        if (fileInputRef4.current) {
            fileInputRef4.current.click();
        }
    }

    const handleChangeImage = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            const file: File = e.target.files[0];
            setImage(file);
            formik.setFieldValue('image', file.name);
        }
    }
    const handleChangeImageOptional = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            const file: File = e.target.files[0];
            setImageOptional(file);
            formik.setFieldValue('imageOptional', file.name);
        }
    }
    const handleChangeVideo = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            const file: File = e.target.files[0];
            setVideo(file);
            formik.setFieldValue('video', file.name);
        }
    }

    const handleChangeVideoOptional = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            const file: File = e.target.files[0];
            setVideoOptional(file);
            formik.setFieldValue('videoOptional', file.name);
        }
    }


    const formik = useFormik({
        initialValues: {
            image: data.dataStep4?.image,
            imageOptional: data.dataStep4?.imageOptional,
            video: data.dataStep4?.video,
            videoOptional: data.dataStep4?.videoOptional,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('handleClickSubmit');
            console.log('values formik', values);

            console.log('image', image);
            console.log('imageOptional', imageOptional);
            console.log('video', video);
            console.log('videoOptional', videoOptional);
            const dataStep4 = {
                image: image,
                imageOptional: imageOptional,
                video: video,
                videoOptional: videoOptional,
            }
            setData({ ...data, step: 5, dataStep4: dataStep4 })
        },
    });


    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    useEffect(() => {
        if (data.dataStep4) {
            if (data.dataStep4.image) {
              setImage(data.dataStep4.image);
              formik.setFieldValue('image', data.dataStep4.image.name);
            }
            
            if (data.dataStep4.imageOptional) {
              setImageOptional(data.dataStep4.imageOptional);
              formik.setFieldValue('imageOptional', data.dataStep4.imageOptional.name);
            }
            
            if (data.dataStep4.video) {
              setVideo(data.dataStep4.video);
              formik.setFieldValue('video', data.dataStep4.video.name);
            }
            
            if (data.dataStep4.videoOptional) {
              setVideoOptional(data.dataStep4.videoOptional);
              formik.setFieldValue('videoOptional', data.dataStep4.videoOptional.name);
            }
          }

    }, [])

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
                                        id="image"
                                        name="image"
                                        variant="outlined"
                                        placeholder='지원하고자 하는 분야를 선택하세요 (최대 2개) '
                                        InputProps={{
                                            style: {
                                                backgroundColor: '#F7F7F7',
                                            },
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
                                                        onClick={handleImageClick}
                                                    >
                                                        <img src={UploadFileIcon} alt='' />
                                                        파일첨부
                                                    </div>
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            flex: 1,
                                            // backgroundColor: '#F7F7F7',
                                        }}
                                        value={formik.values.image}
                                        disabled
                                        // onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.image && Boolean(formik.errors.image)}
                                        helperText={formik.touched.image && formik.errors.image}
                                    />
                                    <input
                                        id="image"
                                        name="image"
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={handleChangeImage}
                                        onBlur={formik.handleBlur}
                                        ref={fileInputRef}
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
                                        id="imageOptional"
                                        name="imageOptional"
                                        variant="outlined"
                                        placeholder='지원하고자 하는 분야를 선택하세요 (최대 2개) '
                                        InputProps={{
                                            style: {
                                                backgroundColor: '#F7F7F7',
                                            },
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
                                                        onClick={handleImageOptionalClick}
                                                    >
                                                        <img src={UploadFileIcon} alt='' />
                                                        파일첨부
                                                    </div>
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            flex: 1,
                                            // backgroundColor: '#F7F7F7',
                                        }}
                                        value={formik.values.imageOptional}
                                        disabled
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.imageOptional && Boolean(formik.errors.imageOptional)}
                                        helperText={formik.touched.imageOptional && formik.errors.imageOptional}
                                    />
                                    <input
                                        id="imageOptional"
                                        name="imageOptional"
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={handleChangeImageOptional}
                                        onBlur={formik.handleBlur}
                                        ref={fileInputRef2}
                                    />
                                </div>
                                <p>상반신, 정면, 전신 등 본인의 사진을 추가로 첨부</p>
                                <p>과도한 보정이나 어플로 찍은 사진이 아닌 정면 사진 원본으로 첨부 (10MB이하)</p>
                            </div>
                        </div>

                        <div>
                            <label>영상 첨부</label>
                            <div>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <TextField
                                        fullWidth
                                        id="video"
                                        name="video"
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
                                                        onClick={handleVideoClick}
                                                    >
                                                        <img src={UploadFileIcon} alt='' />
                                                        파일 첨부 (필수)
                                                    </div>
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            flex: 1,
                                            backgroundColor: '#F7F7F7',
                                        }}
                                        value={formik.values.video}
                                        disabled
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.video && Boolean(formik.errors.video)}
                                        helperText={formik.touched.video && formik.errors.video}
                                    />
                                    <input
                                        id="video"
                                        name="video"
                                        type="file"
                                        accept="video/*"
                                        style={{ display: 'none' }}
                                        onChange={handleChangeVideo}
                                        onBlur={formik.handleBlur}
                                        ref={fileInputRef3}
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label></label>
                            <div>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <TextField
                                        fullWidth
                                        id="videoOptional"
                                        name="videoOptional"
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
                                                        onClick={handleVideoOptionalClick}
                                                    >
                                                        <img src={UploadFileIcon} alt='' />
                                                        파일 첨부 (선택)
                                                    </div>
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            flex: 1,
                                            backgroundColor: '#F7F7F7',
                                        }}
                                        value={formik.values.videoOptional}
                                        disabled
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.videoOptional && Boolean(formik.errors.videoOptional)}
                                        helperText={formik.touched.videoOptional && formik.errors.videoOptional}
                                    />
                                    <input
                                        id="videoOptional"
                                        name="videoOptional"
                                        type="file"
                                        accept="video/*"
                                        style={{ display: 'none' }}
                                        onChange={handleChangeVideoOptional}
                                        onBlur={formik.handleBlur}
                                        ref={fileInputRef4}
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
                            <Button
                                disabled={!formik.values}
                                variant="contained"
                                color='primary'
                                sx={{
                                    padding: '12px 60px'
                                }}
                                onClick={handleClickSave}

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