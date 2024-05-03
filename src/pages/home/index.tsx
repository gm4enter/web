import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Paper, List, ListItem, ListItemIcon, ListItemText, Button, LinearProgress } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { makeStyles } from '@mui/styles'
import bgHome1 from '../../asset/images/bgHome1.png'
import ScrollDown from '../../asset/images/scrollDown.png'

import { ROUTE } from '../../router/routes';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosClient from '../../apis/axiosClient';
import { homeActions, selectListData } from '../../features/home/homeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, Events, Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import MobileStepper from '@mui/material/MobileStepper';


const useStyles = makeStyles({
  progress: {
    position: 'fixed',
    bottom: 0,
    left: '80px',
    top: 0,
    '&>div': {
      height: '100vh',
      width: 'fit-content',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      '&>p': {
        color: '#fff',
        fontSize: '16px',
        margin: 0,
        padding: 0,
      },
      '&>div': {
        width: '2px',
        height: '200px',
        background: '#fff',
        borderRadius: '2px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&>div': {
          width: '4px',
          height: '50px',
          background: '#fff',
          borderRadius: '2px',
        },
      },
    },
    '@media (max-width: 768px)': {
      display: 'none',
    }
  },
  scrollableSection: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    top: 0,
    '&>div': {
      height: '100vh',
      width: 'fit-content',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '64px',
      marginRight: '40px',
      '&>p': {
        color: '#fff',
        fontSize: '16px',
        margin: 0,
        padding: 0,
        transform: 'rotate(-90deg)',
        float: 'left',
      },
      '&>img': {

      }
    },
    '@media (max-width: 768px)': {
      display: 'none !important',
    }
  },
  put_to_top: {
    position: 'fixed',
    bottom: '72px',
    right: '80px',
    width: '32px',
    height: '32px',
    color: '#fff',
    '@media (max-width: 768px)': {
      display: 'none',
    }
  },
  title: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px',
    padding: '0px 80px 88px 80px',
    width: '100%',
    textAlign: 'center',
    '&>h1': {
      position: 'relative',
      color: '#fff',
      fontSize: '80px',
      fontWeight: 'bold',
      margin: 0,
      '@media (max-width: 768px)': {
        fontSize: '36px',
      },
    },
  },
});

const formatNumber = (number: number) => {
  return number < 10 ? `0${number}` : `${number}`;
}

const ImageList = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const location = useLocation()
  const listArtist = useAppSelector(selectListData)

  console.log('listArtist', listArtist);

  const [activeStep, setActiveStep] = React.useState(0);

  const listRef = useRef<HTMLUListElement>(null);
  const [page, setPage] = useState(1);

  const [scrollIndex, setScrollIndex] = useState(0);
  console.log('scrollIndex', scrollIndex);

  const handleClickDetail = (id: string) => {
    console.log('handleClickDetail', id);
    // navigate(ROUTE.ARTISTDETAIL)
    navigate(`${ROUTE.ARTISTDETAIL}/${id}`)
  };

  const capitalizeWords = (inputString: string) => {
    // Split the input string into an array of words
    const words = inputString.split(" ");

    // Capitalize the first letter of each word and join them back together
    const capitalizedWords = words.map((word) => {
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word; // Preserve empty words (e.g., multiple spaces)
      }
    });

    return capitalizedWords.join(" ");
  }

  useEffect(() => {
    dispatch(homeActions.getList({ params: undefined }))
    // const scrollList = () => {
    //   if (listRef.current) {
    //     const scrollPosition = window.innerHeight * scrollIndex;
    //     listRef.current.scrollTo({
    //       top: scrollPosition,
    //       behavior: 'smooth',
    //     });

    //     setScrollIndex(prevIndex => (prevIndex + 1) % images.length);
    //   }

    //   requestAnimationFrame(scrollList);
    // };

    // const animationFrameId = requestAnimationFrame(scrollList);

    // return () => {
    //   cancelAnimationFrame(animationFrameId);
    // };
  }, []);

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [location.pathname])




  const handleScroll = () => {
    const scrollY = window.scrollY;
    console.log('scrollY', scrollY);
    const page = Math.round(scrollY / window.innerHeight);
    console.log('page', page);
    setScrollIndex(page);
    if (!scrollY){
      setScrollIndex(0);
    }
      // scrollTo(page)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScrollIndex]);
  // }, [totalPages]);

  const scrollTo = (index: number) => {
    scroller.scrollTo(`page-${index}`, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
    window.removeEventListener('scroll', handleScroll);
    setScrollIndex(index);
  }

  // useEffect(() => {
  //   scrollTo(scrollIndex)
  // }, [scrollIndex]);

  return (
    <Paper elevation={3} style={{ gap: '0px' }}>
      <InfiniteScroll
        dataLength={listArtist.length || 0}
        next={() => { setPage(page + 1) }}
        hasMore={true}
        loader={<></>}
      >
        <List ref={listRef} sx={{ margin: 0, padding: 0, gap: 0, overflowY: 'auto', overflowX: 'hidden' }}>
          {listArtist.map((artist, index) => (
            <div
              style={{
                minWidth: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
              id={`page-${index}`}
              key={`page-${index}`}
            >
              <img
                src={`https://server.gm4ent.com/static/image/${artist.thumbnail}`}
                alt={''}
                style={{
                  minWidth: '100%',
                  height: '100vh',
                  position: 'absolute',
                  backgroundSize: 'cover',
                }} />
              <div className={classes.title}>
                <h1>{capitalizeWords(artist.nickname)}</h1>
                <Button
                  variant="outlined"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    borderRadius: '100px',
                    padding: '12px 80px',
                    fontSize: '18px',
                    background: "rgba(0, 0, 0, 0.32)",
                    '&:hover': {
                      color: 'white',
                      borderColor: 'white',
                      borderRadius: '100px',
                      padding: '12px 80px',
                      fontSize: '18px',
                      background: "#000",
                    },
                    '@media (max-width: 768px)': {
                      padding: '12px 40px',
                      fontSize: '14px',
                      '&:hover': {
                        padding: '12px 40px',
                        fontSize: '14px',
                      },
                    }
                  }}
                  onClick={() => handleClickDetail(artist.id)}
                >
                  Visit Me
                </Button>
              </div>
            </div>
          ))}
        </List>
      </InfiniteScroll>
      <div className={classes.progress}>
        <div>
          <p>{formatNumber(scrollIndex + 1)}</p>
          <div>
            <div style={{ height: `${(scrollIndex + 1) / listArtist.length * 100}%` }} />
          </div>
          <p>{formatNumber(listArtist.length)}</p>
        </div>
      </div>
      <div className={classes.scrollableSection} style={{
        display: (scrollIndex + 1) === listArtist.length ? 'none' : 'flex',
      }} >
        <div>
          <p>scroll down</p>
          <img src={ScrollDown} alt='' />
        </div>
      </div>
      {scrollIndex > 0 &&
        (<div className={classes.put_to_top}>
          <ArrowCircleUpOutlinedIcon
            onClick={() => scrollTo(0)}
            sx={{
              cursor: 'pointer',
              height: '32px',
              width: '32px',
            }}
          />
        </div>)}
    </Paper >
  );
};

export default ImageList;


