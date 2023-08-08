// ScrollableSection.tsx
import React, { ReactNode } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  contentSection: {
    width: '100%',
    height: '100vh',
  },
}));

interface ScrollableSectionProps {
  children: ReactNode;
}

const ScrollableSection: React.FC<ScrollableSectionProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.contentSection}>
      {children}
    </div>
  );
};

export default ScrollableSection;
