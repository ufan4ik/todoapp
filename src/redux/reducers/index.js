import { combineReducers } from "redux"
import projects from "./projects"
import tasks from "./tasks"
import notification from './notification'

const rootReducer = combineReducers({ projects, tasks, notification })

export default rootReducer
