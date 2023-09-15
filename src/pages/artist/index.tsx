import { makeStyles } from '@mui/styles'
import React, { useEffect, useLayoutEffect, useState } from 'react'
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
    '@media (max-width: 768px)': {
        home_container: {
            padding: '16px 16px 64px 16px',

            '&>div:nth-of-type(2)': {
                gap: '12px',
                '&>div': {
                    width: 'calc(100% / 2 - 6px)',
                    gap: '12px',
                    '&>div': {
                        '&>p': {
                            fontSize: '24px',
                        },
                        '&>img': {
                            borderRadius: '20px',
                            width: '100%',
                        },
                    }
                },
                '&>div:nth-of-type(3)': {
                    display: 'none',
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

const Artist = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const location = useLocation()
    const listArtist = useAppSelector(selectListData)

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


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

    // create 3 child array
    const array1: ArtistType[] = [];
    const array2: ArtistType[] = [];
    const array3: ArtistType[] = [];




    // loop origin array and share to 3 child array
    if (listArtist.length > 0) {
        console.log('listArtist', listArtist);
        if (isMobile) {
            for (let i = 0; i < listArtist.length; i += 2) {
                array1.push(listArtist[i]);
                array2.push(listArtist[i + 1]);
            }
        }
        else {
            for (let i = 0; i < listArtist.length; i += 3) {
                array1.push(listArtist[i]);
                array2.push(listArtist[i + 1]);
                array3.push(listArtist[i + 2]);
            }
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
        // Function to update isMobile state based on window width
        function handleResize() {
            setIsMobile(window.innerWidth < 768);
        }

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
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
