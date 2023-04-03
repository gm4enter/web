import {makeStyles} from '@material-ui/core/styles'
import React, {ReactNode} from 'react'

const useStyles = makeStyles({
  input_search_container: {
    '&>span': {
      position: 'relative',
      '&>input': {
        boxSizing: 'border-box',
        width: '562px',
        height: '55px',
        fontWeight: 400,
        fontSize: '18px',
        color: '#777E90',
        border: '1px solid #3B71FE',
        borderRadius: '4px',
        padding: '16px',
      },
      '&>div': {
        width: '80px',
        height: '56px',
        borderRadius: '4px',
        position: 'absolute',
        right: 0,
        top: -20,
        background: '#3B71FE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
})

const InputSearch = (props: {
  placeholder: string
  onChange: (e: any) => void
  buttonSend: ReactNode
}) => {
  const classes = useStyles()
  return (
    <div className={classes.input_search_container}>
      <span>
        <input
          placeholder={props.placeholder}
          onChange={(e) => props.onChange(e.target.value)}
        />
        <div>{props.buttonSend}</div>
      </span>
    </div>
  )
}

export default InputSearch
