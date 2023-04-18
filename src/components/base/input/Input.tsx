import {makeStyles} from '@mui/styles'
import React, {useState} from 'react'

const useStyles = makeStyles({
  container: {
    width: '100%',
    '&>div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '14px',
      fontWeight: 500,
      marginBottom: '8px',
      // marginTop: '16px',
      '&>p': {
        margin: 0,
        padding: 0,
      },
    },
    '&>input': {
      width: '656px',
      border: '1px solid #D0D5DD',
      borderRadius: '8px',
      padding: '10px 16px',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '24px',
    },
    '@media (max-width: 768px)': {
      '&>input': {
        width: '100%',
        boxSizing: 'border-box',
      },
      '&>div': {
        marginTop: '1rem',
      },
    },
  },
  // ''
})

interface Iprops {
  label?: string
  value: string
  type?: string
  placeholder?: string
  isCountValueLength?: boolean
  maxLength?: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  containerStyle?: React.CSSProperties
  labelContainerStyle?: React.CSSProperties
  labelStyle?: React.CSSProperties
  countStyle?: React.CSSProperties
  inputStyle?: React.CSSProperties
}

export const Input = (props: Iprops) => {
  const {
    label,
    value,
    type,
    onChange,
    placeholder,
    labelContainerStyle,
    labelStyle,
    countStyle,
    containerStyle,
    inputStyle,
    isCountValueLength,
    maxLength,
    ...restProps
  } = props
  const classes = useStyles()

  return (
    <div className={classes.container} style={containerStyle}>
      {(label || isCountValueLength) && (
        <div style={labelContainerStyle}>
          {label && <p style={labelStyle}>{label}</p>}
          {isCountValueLength && (
            <p style={countStyle}>
              {value.length}/{maxLength || 40}
            </p>
          )}
        </div>
      )}
      <input
        type={type || 'text'}
        value={value}
        onChange={(text) => onChange(text)}
        placeholder={placeholder}
        style={inputStyle}
        {...restProps}
      />
    </div>
  )
}
