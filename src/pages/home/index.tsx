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
import React, { useEffect, useRef, useState } from 'react';
import { Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

const images: string[] = [
  'https://www.w3schools.com/howto/img_nature_wide.jpg',
  'https://www.w3schools.com/howto/img_nature_wide.jpg',
  'https://www.w3schools.com/howto/img_nature_wide.jpg',
  'https://www.w3schools.com/howto/img_nature_wide.jpg',
  'https://www.w3schools.com/howto/img_nature_wide.jpg',
  // Add more image URLs here
];

const ImageList: React.FC = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

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

  return (
    <Paper elevation={3} style={{ overflowY: 'auto', overflowX: 'hidden', background: '#ffccff' }}>
      <List ref={listRef}>
        {images.map((image, index) => (
          <ListItem key={index} disableGutters>
            <ListItemIcon>
              <img src={image} alt={`Image ${index + 1}`} style={{ height: '100vh', width: '100%' }} />
            </ListItemIcon>
            {/* {index !== images.length - 1 && <KeyboardArrowDown fontSize="large" />} */}
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ImageList;


