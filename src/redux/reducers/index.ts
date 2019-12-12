import { combineReducers, Reducer } from "redux"
import projects, { ProjectsState } from "./projects"
import tasks, { TasksState } from "./tasks"
import notification, { NotificationState } from './notification'

export interface ApplicationState {
  projects: ProjectsState
  tasks: TasksState
  notification: NotificationState
}

const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({ projects, tasks, notification })

export default rootReducer
