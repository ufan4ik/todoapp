import { combineReducers } from "redux"
import projects, { initialState as projectsState } from "./projects"
import tasks, { initialState as tasksState } from "./tasks"
import notification, { initialState as notificationState } from './notification'

export const exampleInitialState = {
	projects: projectsState,
	tasks: tasksState,
	notification: notificationState,
}

const rootReducer = combineReducers({ projects, tasks, notification })

export default rootReducer
