import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { makeStyles } from '@mui/styles'
import { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { conversationApi } from '../../apis/conversationApi'
import { useAppDispatch } from '../../app/hooks'
import iconBack from '../../asset/images/iconBack.png'
import { Input } from '../../components/base/input/Input'
import { InputImage } from '../../components/base/input/InputImage'
import { conversationActions } from '../../features/conversation/conversationSlice'
import { loadingActions } from '../../components/loading/loadingSlice'

const useStyles = makeStyles({
    container_create_conversation: {
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 92px)',
        padding: '0 16px 16px 16px',
        backgroundColor: '#fff',
        '&>div:nth-of-type(1)': {
            display: 'flex',
            paddingTop: ' 16px',
            alignItems: 'center',
            textAlign: 'center',
            gap: '8px',
            '&>p': {
                padding: 0,
                margin: 0,
                fontSize: '16px',
                fontWeight: 500,
                textAlign: 'center',
            },
            '&>img': {
                cursor: 'pointer',
                height: '24px',
                width: '24px',
            },
        },
        '&>div:nth-of-type(2)': {
            flex: 1,
            paddingBottom: '16px',
            alignItems: 'center',
            borderBottom: '1px solid #EDEDED',
            '&>textarea': {
                width: 'calc(100% - 32px)',
                marginTop: '12px',
                border: '1px solid #D0D5DD',
                borderRadius: '8px',
                padding: '10px 16px',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
            },
            '&>div:nth-of-type(1)': {
                '&>p': {
                    padding: 0,
                    margin: 0,
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '24px',
                    color: '#272B30',
                },
            },
        },
        '&>button': {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#2B83FE',
            padding: '12px 24px',
            textAlign: 'center',
            cursor: 'pointer',
            boxShadow: '0px 2px 16px rgba(0, 88, 212, 0.22)',
            '&>p': {
                padding: 0,
                margin: 0,
                fontSize: '16px',
                fontWeight: 500,
                color: '#fff',
            },
        },
    },
})


const CreateConversationMb = () => {
    const classes = useStyles()
    const theme = useTheme()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { id } = useParams()

    const [valueInputModal1, setValueInputModal1] = useState('')
    const [valueInputModal2, setValueInputModal2] = useState('')
    const [valueInputModal3, setValueInputModal3] = useState('')
    const [valueImages, setValueImages] = useState<string[]>([])


    const handleImageChange = (images: string[]) => {
        setValueImages(images)
    }
    const handleCreateConversation = () => {
        if (valueInputModal1 !== '' && valueInputModal2 !== '' && valueInputModal3 !== '' && valueImages.length > 0) {
            const data = {
                topic: valueInputModal1,
                title: valueInputModal2,
                description: valueInputModal3,
                thumbnail: valueImages
            }
            dispatch(loadingActions.openLoading())
            conversationApi.create(data)
                .then((res: any) => {
                    if (res.statusCode === 201) {
                        console.log('create conversation success');
                        dispatch(conversationActions.getList({ params: undefined }))
                        dispatch(loadingActions.loadingSuccess())
                        navigate(-1)
                    }
                    else {
                        console.log('message: ', res.message);
                        dispatch(loadingActions.loadingSuccess())
                    }
                })
                .catch((error: any) => {
                    console.log(error)
                    dispatch(loadingActions.loadingSuccess())
                })
        }
        else {
            alert('내용을 입력해주세요')
        }
    }

    return (
        <div className={classes.container_create_conversation}>
            <div>
                <img
                    src={iconBack}
                    onClick={() => {
                        navigate(-1)
                    }}
                    alt=''
                />
                <p>예치금 내역</p>
            </div>
            <div>
                <Input
                    value={valueInputModal1}
                    onChange={(e) => {
                        setValueInputModal1(e.target.value)
                    }}
                    label='연락처'
                    placeholder='휴대폰 번호를 입력해주세요.'
                />
                <Input
                    value={valueInputModal2}
                    onChange={(e) => {
                        setValueInputModal2(e.target.value)
                    }}
                    label='제목'
                    placeholder='입력해주세요.'
                />
                <textarea
                    rows={5}
                    placeholder='내용을 입력해주세요.'
                    value={valueInputModal3}
                    onChange={(e) => {
                        setValueInputModal3(e.target.value)
                    }} />
                <div>
                    <p>캡처이미지 & 이미지 자료</p>
                    <InputImage onImageChange={handleImageChange} />
                </div>
            </div>
            <button onClick={handleCreateConversation}>
                <p>완료</p>
            </button>
        </div>
    )
}

export default CreateConversationMb
