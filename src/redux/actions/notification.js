export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION"
export const showNotification = (message, variant = "error") => {
  return {
    type: SHOW_NOTIFICATION,
    payload: {
      message,
      variant
    }
  }
}
