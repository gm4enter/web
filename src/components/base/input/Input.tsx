import { Visibility, VisibilityOff } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles({
  container: {
    width: '100%',
    '&>div:nth-of-type(1)': {
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
    '&>div:nth-of-type(2)': {
      display: 'flex',
      // width: '656px',
      border: '1px solid #D0D5DD',
      borderRadius: '8px',
      alignItems: 'center',
      gap: '8px',
      
      '&>input': {
        flex: 1,
        border: 'none',
        outline: 'none',
        borderRadius: '8px',
        padding: '10px 16px',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '24px',
      },
      '&>div': {
        marginRight: '8px',
      }
    },
    '@media (max-width: 768px)': {
      width: '100% !important',
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
  disabled?: boolean
  isPassword?: boolean
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
    disabled,
    isPassword,
    ...restProps
  } = props
  const classes = useStyles()
  const [showPassword, setShowPassword] = useState(false)
  const [typeInput, setTypeInput] = useState('text')

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }


  const styleInput = {
    ...inputStyle,
  }
  const checkLength = (maxLengths?: number) => {
      if(maxLengths){
        if (value.length > (maxLengths)) {
          styleInput.border = '1px solid red'
        }
      }
  }
  checkLength(maxLength)

  
  const checkType = (inputType: any) => {
    if (inputType) {
      setTypeInput(inputType)
      if (isPassword) {
        showPassword ? setTypeInput('inputType') : setTypeInput('password')
      }
    }
    else {
      if (isPassword) {
        showPassword ? setTypeInput('text') : setTypeInput('password')
      }
      else {
        setTypeInput('text')
      }
    }
  }

  useEffect(() => {
    checkType(type)
  }, [type, isPassword, showPassword])

  return (
    <div className={classes.container} style={containerStyle}>
      {(label || isCountValueLength) ? (
        <div style={labelContainerStyle}>
          {label && <p style={labelStyle}>{label}</p>}
          {isCountValueLength && (
            <p style={countStyle}>
              {value.length}/{maxLength || 40}
            </p>
          )}
        </div>
      ) : <div />}
      <div>
        <input
          type={typeInput}
          value={value}
          onChange={(text) => onChange(text)}
          placeholder={placeholder}
          style={styleInput}
          {...restProps}
          disabled={disabled}
        />
        {isPassword && <div onClick={handleShowPassword}>{showPassword ? <Visibility style={{ height: '22px', width: '22px' }} /> : <VisibilityOff style={{ height: '22px', width: '22px' }} />}</div>}
      </div>
    </div>
  )
}
