import { makeStyles } from '@mui/styles'
import React, { useEffect, useLayoutEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import arowIconLandingPage from '../../asset/images/arowIconLandingPage.png'
import businessGlobalLandingPage from '../../asset/images/businessGlobalLandingPage.png'
import gmaLogoLandingPage from '../../asset/images/gmaLogoLandingPage.png'
import background from '../../asset/images/netBackground.png'
import { ROUTE } from '../../router/routes'
import { Input } from '../../components/base/input/Input'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as yup from 'yup';
import { Button, MenuItem, TextField, Checkbox } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { homeActions, selectListData } from '../../features/home/homeSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { ArtistType } from '../../types/home.type'

//Mobile: width < 768px
//Tablet: 768px < width < 1024px
//Desktop: width >=1024px

const useStyles = makeStyles({
    home_container: {
        // height: 'calc(100vh - 124px - 88px - 80px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '16px 180px 64px 180px',
        '&>div:nth-of-type(1)': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px',
            '&>div': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                '&>p': {
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#18181B',
                    margin: '0',
                    padding: '0',
                },
                '&>div': {
                    width: '100%',
                    height: '1px',
                    backgroundColor: '#18181B',
                },
            },
        },
        '&>div:nth-of-type(2)': {
            flex: 1,
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            justifyContent: 'space-between',

            overflow: 'auto',
            scrollbarWidth: 'none', // Firefox
            '-ms-overflow-style': 'none', // Internet Explorer and Microsoft Edge

            /* For webkit-based browsers (e.g., Chrome, Safari) */
            '&::-webkit-scrollbar': {
                width: 0,
                height: 0,
            },
            '&>div': {
                width: 'calc(100% / 3 - 22px)',
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'space-between',
                gap: '32px',
                cursor: 'pointer',
                '&>div': {
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // '&>div': {
                    '&:hover': {
                        '&>p': {
                            opacity: '1',
                        },
                        '&>img': {
                            filter: 'blur(1px)',
                        },
                    },
                    '&>p': {
                        position: 'absolute',
                        fontSize: '32px',
                        fontWeight: 'bold',
                        color: '#FFF',
                        margin: '0',
                        padding: '0',
                        opacity: '0',
                    },
                    // },
                    '&>img': {
                        borderRadius: '32px',
                        width: '100%',
                    },
                }
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

const originalArray = [
    {
        id: 1,
        name: 'Nguyễn Văn A',
        img: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2023/7/27/1221944/Blackpink-1690252632.jpeg'
    },
    {
        id: 2,
        name: 'Nguyễn Văn B',
        img: 'https://dosi-in.com/images/news_content/507/2021/04/06/bigbang-khong-bao-gio-loi-thoi_2021_04_06_1.jpg'
    },
    {
        id: 3,
        name: 'Nguyễn Văn C',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/250px-Justin_Bieber_in_2015.jpg'
    },
    {
        id: 4,
        name: 'Nguyễn Văn D',
        img: 'https://www.nautiljon.com/images/people/00/67/psy_21376.webp?1603796587'
    },
    {
        id: 5,
        name: 'Nguyễn Văn E',
        img: 'https://revelogue.com/wp-content/uploads/2021/01/jay-park-hiphop-e1609749976522.jpg'

    },
    {
        id: 6,
        name: 'Nguyễn Văn F',
        img: 'https://cdn.tuoitre.vn/thumb_w/730/471584752817336320/2023/7/18/2023-06-28t203848z1561707552rc2js1ah62cfrtrmadp3awards-oscars-members-16896402608731065824850.jpg'
    },
    {
        id: 7,
        name: 'Nguyễn Văn G',
        img: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2023/7/27/1221944/Blackpink-1690252632.jpeg'

    },
    {
        id: 8,
        name: 'Nguyễn Văn H',
        img: 'https://www.azcentral.com/gcdn/-mm-/634fdea703cf498c5806705dd5e2670d62daa854/c=0-126-3450-4726/local/-/media/2017/08/31/Phoenix/Phoenix/636397812339590457--resizeLuis-Fonsi-1376-Final-Photo-Omar-Cruz.jpg?width=660&height=880&fit=crop&format=pjpg&auto=webp'

    },
    {
        id: 9,
        name: 'Nguyễn Văn H',
        img: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/8/5/1077292/E5b493d7-06C4-4B3f-A.jpg'
    },

]

const Artist = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const location = useLocation()
    const listArtist = useAppSelector(selectListData)

    const handleClickContact = () => {
        navigate(ROUTE.CONTACT)
    }

    const formik = useFormik({
        initialValues: {
            inquiryType: '',
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

    // Tạo ba mảng con
    const array1: ArtistType[] = [];
    const array2: ArtistType[] = [];
    const array3: ArtistType[] = [];


    // // Lặp qua mảng gốc và lần lượt chia vào ba mảng con theo thứ tự
    // for (let i = 0; i < originalArray.length; i += 3) {
    //     array1.push(originalArray[i]);
    //     array2.push(originalArray[i + 1]);
    //     array3.push(originalArray[i + 2]);
    // }


    // Lặp qua mảng gốc và lần lượt chia vào ba mảng con theo thứ tự
    if (listArtist.length > 0) {
        console.log('listArtist', listArtist);

        for (let i = 0; i < listArtist.length; i += 3) {
            array1.push(listArtist[i]);
            array2.push(listArtist[i + 1]);
            array3.push(listArtist[i + 2]);
        }
    }

    console.log('array1', array1);
    console.log('array2', array2);
    console.log('array3', array3);

    const handleClickArtist = (id: string) => {
        console.log('handleClickArtist', id);
        navigate(`${ROUTE.ARTISTDETAIL}/${id}`)
    }

    useEffect(() => {
        dispatch(homeActions.getList({ params: undefined }))
    }, []);

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <div className={classes.home_container}>
            <div>
                <div onClick={handleClickContact}>
                    <p>Artist</p>
                    <div />
                </div>
            </div>

            <div>
                <div>
                    {(array1.length > 0) && (array1 || []).map((item, index) => {
                        if (item === undefined)
                            return;
                        else
                            return (
                                <div onClick={() => handleClickArtist(item.id)}>
                                    <img src={`https://server.gm4ent.com/static/image/${item.thumbnail}`} alt='' />
                                    <p>{item.nickname}</p>
                                </div>
                            )
                    })}
                </div>

                <div>
                    {(array2.length > 0) && (array2 || []).map((item, index) => {
                        if (item === undefined)
                            return;
                        else
                            return (
                                <div onClick={() => handleClickArtist(item.id)}>
                                    <img src={`https://server.gm4ent.com/static/image/${item.thumbnail}`} alt='' />
                                    <p>{item.nickname}</p>
                                </div>
                            )
                    })}
                </div>

                <div>
                    {(array3.length > 0) && (array3 || []).map((item, index) => {
                        if (item === undefined)
                            return;
                        else
                            return (
                                <div onClick={() => handleClickArtist(item.id)}>
                                    <img src={`https://server.gm4ent.com/static/image/${item.thumbnail}`} alt='' />
                                    <p>{item.nickname}</p>
                                </div>
                            )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Artist
