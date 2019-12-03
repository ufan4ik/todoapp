import {showNotification} from '../actions/notification'
import { getTasksByProject } from "../../api/tasks"

export const FETCH_TASKS_REQUEST = "FETCH_TASKS_REQUEST"
const fetchTasksRequest = () => ({ type: FETCH_TASKS_REQUEST })

export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS"
const fetchTasksSuccess = (payload) => ({ type: FETCH_TASKS_SUCCESS, payload })

export const FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE"
const fetchTasksFailure = (error) => ({ type: FETCH_TASKS_FAILURE, payload: error })


export const fetchTasks = (projectId) => {
  return dispatch => {
    dispatch(fetchTasksRequest())
    getTasksByProject(projectId)
      .then(response => {
        dispatch(fetchTasksSuccess(response))
      })
      .catch(e => {
        dispatch(fetchTasksFailure(e))
        dispatch(showNotification(e.message))
      })
  }
}
