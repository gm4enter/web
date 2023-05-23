import { makeStyles } from '@mui/styles'
import React, { useEffect, useRef, useState } from 'react'
import closeBoldIcon from '../../../asset/images/cancel.png'
import axiosClient from '../../../apis/axiosClient'
import { SYSTEM } from '../../../apis/urlConfig'

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
  },
})

interface Iprops {
  type?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  images?: string
  containerStyle?: React.CSSProperties
}

export const InputuploadImage = (props: Iprops) => {
  const { type, onChange, containerStyle, images, ...restProps } = props
  const classes = useStyles()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [image, setImage] = useState<string | null>(null)

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.files) {
      setImage(URL.createObjectURL(event.target.files[0]))
      onChange && onChange(event)
    }
  }

  const handleImageDelete = () => {
    setImage(null)
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

  return (
    <div className={classes.container} style={containerStyle}>
      {image && (
        <div className={checkType(type)}>
          <img src={image} alt='selected' />
          <img src={closeBoldIcon} alt='close' onClick={handleImageDelete} />
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
