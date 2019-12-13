import { combineReducers } from "redux"
import projects, { IProjectsState } from "./projects"
import tasks from "./tasks"
import notification from './notification'

const rootReducer = combineReducers({ projects, tasks, notification })

export interface IStoreState {
    projects: IProjectsState
}


export default rootReducer
