import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE
} from "../actions/tasks"

export const initialState = {
  data: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
      return { ...state, loading: true }
    case FETCH_TASKS_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null }
    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
