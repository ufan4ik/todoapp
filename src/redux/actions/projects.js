import { showNotification } from "../actions/notification"
import { getProjects } from "../../api/projects"

export const PROJECTS_ADD = "PROJECTS_ADD"
export const addProduct = payload => {
  return {
    type: PROJECTS_ADD,
    payload
  }
}

export const FETCH_PROJECTS_REQUEST = "FETCH_PROJECTS_REQUEST"
const fetchProjectsRequest = () => ({ type: FETCH_PROJECTS_REQUEST })

export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS"
const fetchProjectsSuccess = payload => ({
  type: FETCH_PROJECTS_SUCCESS,
  payload
})

export const FETCH_PROJECTS_FAILURE = "FETCH_PROJECTS_FAILURE"
const fetchProjectsFailure = error => ({
  type: FETCH_PROJECTS_FAILURE,
  payload: error
})

export const fetchProjects = () => {
  return dispatch => {
    dispatch(fetchProjectsRequest())
    return getProjects()
      .then(response => {
        dispatch(fetchProjectsSuccess(response))
      })
      .catch(e => {
        dispatch(fetchProjectsFailure(e))
        dispatch(showNotification(e.message))
      })
  }
}
