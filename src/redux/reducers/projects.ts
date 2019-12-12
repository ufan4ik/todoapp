import { Reducer } from 'redux'

import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  PROJECTS_ADD
} from "../actions/projects"

const initialState: ProjectsState = {
  data: [],
  loading: false,
  error: null
}

export interface ProjectsState {
  data: any[]
  loading: boolean
  error: any
}


const projectReducer: Reducer<ProjectsState> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_REQUEST:
      return { ...state, loading: true }
    case FETCH_PROJECTS_SUCCESS:
      return { ...state, data: action.payload, loading: false, error: null }
    case FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload
      }
    case PROJECTS_ADD:
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    default:
      return state
  }
}

export default projectReducer
