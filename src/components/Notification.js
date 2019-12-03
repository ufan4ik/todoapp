import React from "react"

import { connect } from "react-redux"

import Snackbar from "@material-ui/core/Snackbar"
import SnackbarContent from "@material-ui/core/SnackbarContent"

function Notification({ message, variant }) {
  const [open, setOpen] = React.useState(false)

  const handleClose = React.useCallback(() => {
    setOpen(false)
  }, [])

  React.useEffect(() => {
    if (message) {
      setOpen(true)
    }
  }, [message])

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <SnackbarContent
        aria-describedby="client-snackbar"
        message={message}
      />
    </Snackbar>
  )
}

export default connect(({ notification }) => ({
  message: notification.message,
  variant: notification.variant
}))(Notification)
