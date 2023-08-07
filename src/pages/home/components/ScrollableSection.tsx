// ScrollableSection.tsx
import React, { ReactNode } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  contentSection: {
    // minWidth: '100%',
    // minheight: 'calc(100vh - 88px)',
    /* Add any additional styling for the content section */
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
