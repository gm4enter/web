import React, { useEffect } from 'react'
import { MuiColorInput, MuiColorInputColors } from 'mui-color-input'
import styled from '@emotion/styled'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    muiColorInput_container: {
        '&>div:nth-of-type(1)': {
            display: 'flex',
            alignItems: 'center',
            padding: '0',
            flexDirection: 'row-reverse',
            border: 'none !important',
            // borderRadius: '0px',
            // backgroundColor: 'green',
            '&>input': {
                // border: '1px solid #D0D5DD',
                borderRadius: '8px',
                // backgroundColor: 'red',
                padding: '12px 16px',
                marginRight: '8px',
                fontSize: '14px',
                fontWeight: 400,
            },
            '&>div': {
                padding: '0',
                border: 'none !important',
                '&>button': {
                    borderRadius: '50%',
                },
            },
        },
    },
})

interface Iprops {
    style?: any
    onChange?: (color: string, colors?: MuiColorInputColors) => void
    value?: string
}
export const InputColor = (props: Iprops) => {
    const { style, onChange, value } = props
    const [color, setColor] = React.useState('#000')
    const classes = useStyles()


    const handleChange = (color: string, colors: MuiColorInputColors) => {
        setColor(color)
        if (onChange)
        onChange(color, colors)
    }
    useEffect(() => {
        value && setColor(value)
    }, [value])

    return (
        <MuiColorInput className={classes.muiColorInput_container} style={style} format='hex' value={color} fallbackValue="#000" onChange={handleChange} />
    )
}