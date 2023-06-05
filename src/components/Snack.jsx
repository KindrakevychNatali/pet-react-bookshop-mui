import { Alert, Snackbar } from '@mui/material'
import React from 'react'

export default function Snack({isOpen, handleClose = Function.prototype}) {
  return (
    <Snackbar
        open={isOpen}
        onClose={handleClose}
        autoHideDuration={3000}>
        <Alert
            severity="success">
            Book has added to basket!
        </Alert>

    </Snackbar>
  )
}
