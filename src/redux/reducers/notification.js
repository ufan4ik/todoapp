import { SHOW_NOTIFICATION } from "../actions/notification"

const initialState = {
  message: null,
  variant: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
