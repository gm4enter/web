import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Paper, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
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

const ImageList = () => {
  // const classes = useStyles()
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const location = useLocation()
  const listArtist = useAppSelector(selectListData)

  console.log('listArtist', listArtist);
  

  const listRef = useRef<HTMLUListElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleClickDetail = () => {
    console.log('handleClickDetail');
    navigate(ROUTE.ARTISTDETAIL)
  };

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
              width: '100%',
              height: '100vh',
              backgroundImage: `url("http://13.125.36.208:9000/static/image/${artist.thumbnail}")`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              boxSizing: 'border-box',
              padding: '0px 80px 88px 80px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
              {/* <img src={image} alt={`Image ${index + 1}`} style={{ }} /> */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
                <h1 style={{ color: 'white', fontSize: '80px', fontWeight: 'bold', margin: 0 }}>{artist.nickname}</h1>
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
                    }
                  }}
                  onClick={handleClickDetail}
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


