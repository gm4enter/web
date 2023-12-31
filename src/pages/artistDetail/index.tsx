// ImageList.tsx
import { makeStyles } from '@mui/styles';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ArrowBendUpLeftWhite from '../../asset/images/ArrowBendUpLeftWhite.png';
import bgArtistDetail from '../../asset/images/bgArtistDetail.png';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axiosClient from '../../apis/axiosClient';
import { ROUTE } from '../../router/routes';
import { loadingActions } from '../../components/loading/loadingSlice';
import { useAppDispatch } from '../../app/hooks';


const useStyles = makeStyles({
  detail_container: {
    width: '100%',
    // backgroundImage: `url("${bgArtistDetail}")`,
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
          width: '100%',
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
  '@media (max-width: 768px)': {
    detail_container: {
      padding: '100px 16px',
      '&>div:nth-of-type(1)': {
        marginBottom: '32px',
        fontSize: '16px',
        '&>img': {
          width: '24px',
          height: '24px',
        },
      },
      '&>div:nth-of-type(2)': {
        '&>div:nth-of-type(1)': {
          width: '100%',
          fontSize: '32px',
          '&>p': {
            fontSize: '12px',
          },
        },
        '&>div:nth-of-type(2)': {
          '&>div:nth-of-type(1)': {
            fontSize: '12px',
            width: '100%',
            '&>p': {
              fontSize: '12px',
            },
          },
        },
      },
    },
  },
});

const ActistDetail: React.FC = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams()
  const dispatch = useAppDispatch();

  console.log('id artist', id);

  const [dataArtist, setDataArtist] = useState<any>(null)

  console.log('dataArtist', dataArtist);

  const handleClickBack = () => {
    console.log('handleClickBack');
    navigate(ROUTE.HOME)
  }

  useLayoutEffect(() => {
    dispatch(loadingActions.openLoading())
    axiosClient.get(`/artist/${id}`)
      .then(res => {
        console.log('res');
        setDataArtist(res.data)
        dispatch(loadingActions.loadingSuccess())
      })
      .catch(err => {
        console.log('err', err);
        dispatch(loadingActions.loadingSuccess())
      })
  }, [])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className={classes.detail_container}
      // style={{ backgroundImage: `url("https://server.gm4ent.com/static/image/${dataArtist?.image}")` }}
      style={dataArtist?.image ? { backgroundImage: `url("https://server.gm4ent.com/static/image/${dataArtist?.image}")` } : {}}
    >
      <div onClick={handleClickBack}>
        <img src={ArrowBendUpLeftWhite} alt='' />
        back
      </div>
      <div>
        <div>
          {dataArtist?.full_name}
          <p>{dataArtist?.description1}</p>
          {/* <p>{dataArtist?.birthday}-Now</p> */}
        </div>
        <div>
          <div>
            <p>{dataArtist?.description2}</p>
            <p>{dataArtist?.description3}</p>
            {/* <p>Movie</p>
            <p>Autumn in My Heart (2000), All In (2003), Full House (2004), That Winter, the Wind Blows (2013), Descendants of the Sun (2016), Encounter (2018) and The Glory (2022)...</p>
            <p>Awards</p>
            <p>Autumn in My Heart (2000), All In (2003), Full House (2004), That Winter, the Wind Blows (2013), Descendants of the Sun (2016), Encounter (2018) and The Glory (2022)...</p> */}
          </div>
          <div />
        </div>
      </div>
      {
        (dataArtist?.url || []).map((item: string, index: number) => {
          console.log('item', item);
          const embedurl = item.replace('watch?v=', 'embed/');
          console.log('embedurl', embedurl);

          return (
            <iframe
              width="100%"
              height="746px"
              style={{ marginBottom: '50px' }}
              src={embedurl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          )
        })
      }
      {/* <iframe 
      width="100%"
      height="746"
      src="https://www.youtube.com/embed/jfKfPfyJRdk?si=OeG4wtrOHlGPL5po" 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      /> */}
    </div>
  );
};

export default ActistDetail;


