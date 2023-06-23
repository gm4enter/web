import { makeStyles } from '@mui/styles'
import React, { useEffect, useRef, useState } from 'react'
import closeBoldIcon from '../../../asset/images/cancel.png'
import closeWhiteIcon from '../../../asset/images/cancelWhite.png'

const useStyles = makeStyles({
  container: {
    width: '100%',
    display: 'block',
    flexDirection: 'column',

    '&>div:nth-of-type(1)': {
      width: '100%',
    },
    '&>button': {
      marginRight: 'auto',
      borderRadius: '2px',
      border: '.5px solid #6B7280',
      backgroundColor: '#fff',
      padding: '8px 12px',
      textAlign: 'center',
      '&>p': {
        padding: 0,
        margin: 0,
        fontSize: '16px',
        fontWeight: 400,
        color: '#374151',
      },
    },
    '@media (max-width: 768px)': {
      '&>button': {
        width: '100%',
        height: '44px',
        background: 'rgba(235, 243, 255, 0.24)',
        border: '1px solid #D0D5DD',
      },
    },
  },
  img96: {
    display: 'flex',
    gap: '12px',
    marginBottom: '16px',
    '&>img:nth-of-type(1)': {
      height: '96px',
      width: '96px',
    },
    '&>img:nth-of-type(2)': {
      height: '24px',
      width: '24px',
    },
    '&>div': {
      display: 'none',
    },
    '@media (max-width: 768px)': {
      display: 'flex',
      marginBottom: '16px',
      '&>img:nth-of-type(2)': {
        display: 'none',
      },
      '&>div': {
        display: 'flex',
        position: 'absolute',
        left: '82px',
        marginTop: '4px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        '&>img': {
          width: '10px',
          height: '10px',
        },
      },

    },
  },
  img512: {
    display: 'flex',
    gap: '12px',
    marginBottom: '16px',

    '&>img:nth-of-type(1)': {
      height: '358px',
      width: '358px',
    },
    '&>img:nth-of-type(2)': {
      height: '24px',
      width: '24px',
    },
    '&>img:nth-of-type(3)': {
      display: 'none',
    },
    '@media (max-width: 768px)': {
      display: 'flex',
      marginBottom: '16px',
      '&>img:nth-of-type(1)': {
        height: '343px',
        width: '343px',
      },
      '&>img:nth-of-type(2)': {
        display: 'none',
      },
      '&>div': {
        display: 'flex',
        position: 'absolute',
        left: '323px',
        marginTop: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        '&>img': {
          width: '10px',
          height: '10px',
        },
      },
    },
  },
  img640: {
    display: 'flex',
    gap: '12px',
    marginBottom: '16px',

    '&>img:nth-of-type(1)': {
      width: '239px',
      height: '358px',
    },
    '&>img:nth-of-type(2)': {
      height: '24px',
      width: '24px',
    },
    '&>img:nth-of-type(3)': {
      display: 'none',
    },
    '@media (max-width: 768px)': {
      display: 'flex',
      marginBottom: '16px',
      '&>img:nth-of-type(2)': {
        display: 'none',
      },
      '&>div': {
        display: 'flex',
        position: 'absolute',
        left: '223px',
        marginTop: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        '&>img': {
          width: '10px',
          height: '10px',
        },
      },
    },
  },
  img1024: {
    display: 'flex',
    gap: '12px',
    marginBottom: '16px',

    '&>img:nth-of-type(1)': {
      height: '358px',
      width: '358px',
    },
    '&>img:nth-of-type(2)': {
      height: '24px',
      width: '24px',
    },
    '&>img:nth-of-type(3)': {
      display: 'none',
    },
    '@media (max-width: 768px)': {
      display: 'flex',
      marginBottom: '16px',
      '&>img:nth-of-type(1)': {
        height: '343px',
        width: '343px',
      },
      '&>img:nth-of-type(2)': {
        display: 'none',
      },
      '&>div': {
        display: 'flex',
        position: 'absolute',
        left: '323px',
        marginTop: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        '&>img': {
          width: '10px',
          height: '10px',
        },
      },
    },
  },
  img1440: {
    display: 'flex',
    gap: '12px',
    marginBottom: '16px',
    '&>img:nth-of-type(1)': {
      width: '174px',
      height: '358px',
    },
    '&>img:nth-of-type(2)': {
      height: '24px',
      width: '24px',
    },
    '&>img:nth-of-type(3)': {
      display: 'none',
    },
    '@media (max-width: 768px)': {
      display: 'flex',
      marginBottom: '16px',
      '&>img:nth-of-type(2)': {
        display: 'none',
      },
      '&>div': {
        display: 'flex',
        position: 'absolute',
        left: '156px',
        marginTop: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        '&>img': {
          width: '10px',
          height: '10px',
        },
      },
    },
  },
})

interface Iprops {
  type: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  images?: string
  containerStyle?: React.CSSProperties
  onDeleted?: () => void
}

export const InputuploadImage = (props: Iprops) => {
  const { type, onChange, containerStyle, images, onDeleted, ...restProps } = props
  const classes = useStyles()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<string | null>(null)

  const checkType = (type: string | undefined) => {
    switch (type) {
      case '96':
        return classes.img96
      case '512':
        return classes.img512
      case '640':
        return classes.img640
      case '1024':
        return classes.img1024
      case '1440':
        return classes.img1440
      default:
        return classes.img512
    }
  }

  const checkSize = (file: File, type: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      const imageCheck = new Image();

      imageCheck.onload = () => {
        const width = imageCheck.width;
        const height = imageCheck.height;
        console.log("Image width:", width);
        console.log("Image height:", height);
        console.log("Image type:", type);

        switch (type) {
          case '96':
            if (width === 96 || height === 96) {
              setImage(URL.createObjectURL(file));
              resolve(true);
            } else {
              resolve(false);
            }
            break;
          case '512':
            if (width === 512 || height === 512) {
              setImage(URL.createObjectURL(file));
              resolve(true);
            } else {
              resolve(false);
            }
            break;
          case '640':
            if (width === 640 || height === 960) {
              setImage(URL.createObjectURL(file));
              resolve(true);
            } else {
              resolve(false);
            }
            break;
          case '1024':
            if (width === 1024 || height === 1024) {
              setImage(URL.createObjectURL(file));
              resolve(true);
            } else {
              resolve(false);
            }
            break;
          case '1440':
            if (width === 1440 || height === 2960) {
              setImage(URL.createObjectURL(file));
              resolve(true);
            } else {
              resolve(false);
            }
            break;
          default:
            resolve(false);
        }
      };

      imageCheck.onerror = () => {
        reject(new Error('Failed to load the image.'));
      };

      imageCheck.src = URL.createObjectURL(file);
    });
  };


  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.files) {
      const file = event.target.files[0];
      checkSize(file, type)
      .then(result => {
        if (result) {
          // Image meets the specified size requirements
          setImage(URL.createObjectURL(file));
          onChange && onChange(event)
        } else {
          // Image does not meet the specified size requirements
          console.log('Image size does not match the specified requirements.');
        }
      })
      .catch(error => {
        console.error(error);
      });
    }
  }

  const handleImageDelete = () => {
    setImage(null)
    onDeleted && onDeleted()
  }

  const handleAddImageClick = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  useEffect(() => {
    if (images) {
      setImage(images)
    }
  }, [images])

  return (
    <div className={classes.container} style={containerStyle}>
      {image && (
        <div className={checkType(type)}>
          <img src={image} alt='selected' />
          <img src={closeBoldIcon} alt='close' onClick={handleImageDelete} />
          <div onClick={handleImageDelete}>
            <img src={closeWhiteIcon} alt='close' />
          </div>
        </div>
      )}
      <button onClick={handleAddImageClick}>
        <p>{type === '96' ? 'PNG 파일 업로드' : '업로드'}</p>
      </button>
      <input
        hidden
        type='file'
        accept='image/*'
        onChange={handleImageChange}
        ref={fileInputRef}
        {...restProps}
      />
    </div>
  )
}
