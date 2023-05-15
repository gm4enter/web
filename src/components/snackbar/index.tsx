import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { SelectSnackBar } from './snackbarSlice'
import { Snackbar, Stack, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import MuiAlert, { AlertProps } from '@mui/material/Alert';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

export default function CustomizedSnackbars() {
  const classes = useStyles()
  const snackbar = useAppSelector(SelectSnackBar)
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setOpen(snackbar.open)
  }, [snackbar])

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity={snackbar.type} sx={{ width: '100%' }}>
          {snackbar.content}
        </Alert>
      </Snackbar>
    </Stack>
  )
}
