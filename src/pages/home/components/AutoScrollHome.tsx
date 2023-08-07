// AutoScrollHome.tsx
import React, { useEffect, useState } from 'react';
import ScrollableSection from './ScrollableSection';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  scrollContainer: {
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    /* Add any additional styling for the scroll container */
  },
}));

const AutoScrollHome: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const contentSections: React.ReactNode[] = [
    <Typography variant="h6">Content 1</Typography>,
    <Typography variant="h6">Content 2</Typography>,
    <Typography variant="h6">Content 3</Typography>,
    // Add more content sections as needed
  ];
  const intervalDuration: number = 5000;
  let autoSlideInterval: NodeJS.Timeout;

  const classes = useStyles();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentIndex,
    beforeChange: (_: number, next: number) => setCurrentIndex(next),
  };

  useEffect(() => {
    autoSlideInterval = setInterval(scrollToNextSection, intervalDuration);
    return () => clearInterval(autoSlideInterval);
  }, []);

  const scrollToNextSection = () => {
    const nextIndex: number = (currentIndex + 1) % contentSections.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className={classes.scrollContainer}>
      <Slider {...settings}>
        {contentSections.map((content, index) => (
          <ScrollableSection key={index}>{content}</ScrollableSection>
        ))}
      </Slider>
    </div>
  );
};

export default AutoScrollHome;
