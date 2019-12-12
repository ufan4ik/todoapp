import { SHOW_NOTIFICATION } from "../actions/notification"
import { Reducer } from 'redux'

const initialState: NotificationState = {
  message: null,
  variant: null
}

export interface NotificationState {
  message: string | null
  variant: any | null
}


const notificationReducer: Reducer<NotificationState> = (state = initialState, action) => {
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
export default notificationReducer