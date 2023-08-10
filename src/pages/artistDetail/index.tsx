// ImageList.tsx
import { makeStyles } from '@mui/styles';
import React, { useLayoutEffect, useRef, useState } from 'react';
import ArrowBendUpLeftWhite from '../../asset/images/ArrowBendUpLeftWhite.png';
import bgArtistDetail from '../../asset/images/bgArtistDetail.png';
import { useLocation, useNavigate } from 'react-router-dom';


const useStyles = makeStyles({
  detail_container: {
    width: '100%',
    backgroundImage: `url("${bgArtistDetail}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    boxSizing: 'border-box',
    padding: '158px 56px',
    '&>div:nth-of-type(1)': {
      width: 'fit-content',
      display: 'flex',
      gap: '12px',
      marginBottom: '100px',
      color: '#fff',
      fontSize: '32px',
      cursor: 'pointer',
      '&>img': {
        width: '46px',
        height: '46px',
      },
    },
    '&>div:nth-of-type(2)': {
      marginBottom: '50px',
      '&>div:nth-of-type(1)': {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '12px',
        color: '#fff',
        fontSize: '80px',
        fontWeight: 'bold',
        '&>p': {
          fontSize: '20px',
          fontWeight: 'normal',
          color: '#fff',
          margin: '0',
          padding: '0',
        },
      },
      '&>div:nth-of-type(2)': {
        marginLeft: 'auto',
        display: 'flex',
        gap: '24px',
        '&>div:nth-of-type(1)': {
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          color: '#fff',
          fontSize: '20px',
          fontWeight: 'normal',
          '&>p': {
            fontSize: '20px',
            fontWeight: 'normal',
            color: '#fff',
            margin: '0',
            padding: '0',
            textAlign: 'right',

          },
        },
        '&>div:nth-of-type(2)': {
          width: '1px',
          backgroundColor: '#fff',
        },
      },
    },
  },
});

const ActistDetail: React.FC = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const location = useLocation()

  const handleClickBack = () => {
    console.log('handleClickBack');
    navigate(-1)
  }

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className={classes.detail_container}
    >
      <div onClick={handleClickBack}>
        <img src={ArrowBendUpLeftWhite} alt='' />
        back
      </div>
      <div>
        <div>
          Song Hye-kyo ( 송혜교 )
          <p>Song Hye-kyo( born November 22, 1981) is a South Korean actress. She gained international popularity through her leading roles</p>
          <p>1996-Now</p>
        </div>
        <div>
          <div>
            <p>Movie</p>
            <p>Autumn in My Heart (2000), All In (2003), Full House (2004), That Winter, the Wind Blows (2013), Descendants of the Sun (2016), Encounter (2018) and The Glory (2022)...</p>
            <p>Awards</p>
            <p>Autumn in My Heart (2000), All In (2003), Full House (2004), That Winter, the Wind Blows (2013), Descendants of the Sun (2016), Encounter (2018) and The Glory (2022)...</p>
          </div>
          <div />
        </div>
      </div>
      <iframe
        width="100%"
        height="746px"
        src="https://www.youtube.com/embed/Vdm6i1m4tDE"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />

    </div>
  );
};

export default ActistDetail;


