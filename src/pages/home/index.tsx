import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Paper, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { makeStyles } from '@mui/styles'
import bgHome1 from '../../asset/images/bgHome1.png'
import bgHome2 from '../../asset/images/bgHome2.png'
import { ROUTE } from '../../router/routes';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosClient from '../../apis/axiosClient';
import { homeActions, selectListData } from '../../features/home/homeSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';


const images: string[] = [
  bgHome1,
  bgHome2,
  bgHome1,
  bgHome2,
  bgHome1,
  // Add more image URLs here
];


const useStyles = makeStyles({
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

const ImageList = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const location = useLocation()
  const listArtist = useAppSelector(selectListData)

  console.log('listArtist', listArtist);


  const listRef = useRef<HTMLUListElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

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

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Paper elevation={3} style={{ overflowY: 'auto', overflowX: 'hidden', gap: '0px' }}>
      <List ref={listRef} sx={{ margin: 0, padding: 0, gap: 0 }}>
        {listArtist.map((artist, index) => (
          <ListItem key={artist.id} disableGutters sx={{ margin: 0, padding: 0 }}>
            <div style={{
              minWidth: '100%',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
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
                    }
                  }}
                  onClick={() => handleClickDetail(artist.id)}
                >
                  Visit Me
                </Button>
              </div>

            </div>
          </ListItem>
        ))}
      </List>
      {/* <div>
        <KeyboardArrowDown />
      </div> */}
    </Paper>
  );
};

export default ImageList;


