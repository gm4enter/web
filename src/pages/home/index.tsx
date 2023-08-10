// import React, { useEffect, useState } from 'react';
// import ScrollableSection from './components/ScrollableSection';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles(() => ({
//   scrollContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '100%',
//     overflowX: 'auto',
//     // overflowY: 'auto',
//     whiteSpace: 'nowrap',
//     horizontalScrollBehavior: 'smooth',
//   },
// }));

// const Home: React.FC = () => {
//   const classes = useStyles();
//   const contentSections: React.ReactNode[] = [
//     <img style={{height:'100%', width:'100%'}} src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt="" />,
//     <img style={{height:'100%', width:'100%'}} src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt="" />,
//     <img style={{height:'100%', width:'100%'}} src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt="" />,
//     <img style={{height:'100%', width:'100%'}} src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt="" />,
//     // Add more content sections as needed
//   ];

//   const settings = {
//     dots: false, // Display navigation dots
//     infinite: true, // Loop through slides infinitely
//     speed: 1000, // Transition speed in milliseconds
//     slidesToShow: 1, // Number of slides to show at a time
//     slidesToScroll: 1, // Number of slides to scroll per action
//     autoplay: true, // Enable auto-sliding
//     autoplaySpeed: 5000 // Auto-sliding interval in milliseconds
//   };

//   return (
//     <div className={classes.scrollContainer}>
//       <Slider {...settings}>
//         {contentSections.map((content, index) => (
//           <ScrollableSection key={index}>{content}</ScrollableSection>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Home;


// ImageList.tsx
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Paper, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import bgHome1 from '../../asset/images/bgHome1.png'
import bgHome2 from '../../asset/images/bgHome2.png'
import { ROUTE } from '../../router/routes';
import { useLocation, useNavigate } from 'react-router-dom';


const images: string[] = [
  bgHome1,
  bgHome2,
  bgHome1,
  bgHome2,
  bgHome1,
  // Add more image URLs here
];

const ImageList: React.FC = () => {
  // const classes = useStyles()
  const navigate = useNavigate()
  const location = useLocation()
  const listRef = useRef<HTMLUListElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleClickDetail = () => {
    console.log('handleClickDetail');
    navigate(ROUTE.ARTISTDETAIL)
  };

  useEffect(() => {
    const scrollList = () => {
      if (listRef.current) {
        const scrollPosition = window.innerHeight * scrollIndex;
        listRef.current.scrollTo({
          top: scrollPosition,
          behavior: 'smooth',
        });

        setScrollIndex(prevIndex => (prevIndex + 1) % images.length);
      }

      requestAnimationFrame(scrollList);
    };

    const animationFrameId = requestAnimationFrame(scrollList);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Paper elevation={3} style={{ overflowY: 'auto', overflowX: 'hidden', gap: '0px' }}>
      <List ref={listRef} sx={{ margin: 0, padding: 0, gap: 0 }}>
        {images.map((image, index) => (
          <ListItem key={index} disableGutters sx={{ margin: 0, padding: 0 }}>
            <div style={{
              width: '100%',
              height: '100vh',
              backgroundImage: `url("${image}")`,
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
                <h1 style={{ color: 'white', fontSize: '80px', fontWeight: 'bold', margin: 0 }}>Sing My Songs</h1>
                <Button
                  variant="outlined"
                  style={{
                    color: 'white',
                    borderColor: 'white',
                    borderRadius: '100px',
                    padding: '12px 80px',
                    fontSize: '18px',
                    background: "rgba(0, 0, 0, 0.32)",
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
      <div>
        <KeyboardArrowDown />
      </div>
    </Paper>
  );
};

export default ImageList;


