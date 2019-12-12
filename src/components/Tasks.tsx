import React, { useEffect } from "react"
import { connect } from "react-redux"

import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box
} from "@material-ui/core"
import CircularProgress from "@material-ui/core/CircularProgress"

import { ApplicationState } from '../redux/reducers'
import { fetchTasks } from "../redux/actions/tasks"
import { ITask } from '../api/tasks';

interface StateProps {
  projectId: string
  tasks: {
    loading: boolean
    data: ITask[]
  }
}
interface DispatchProps {
  fetchTasks: (n: string) => void
}

type TasksProps = StateProps & DispatchProps

const Tasks: React.FC<TasksProps> = ({ projectId, fetchTasks, tasks }) => {
  useEffect(() => {
    if (projectId) {
      fetchTasks(projectId)
    }
  }, [projectId, fetchTasks])

  return (
    <Paper>
      {(tasks.loading || tasks.data.length === 0) && (
        <Box display="flex" justifyContent="center" py={5}>
          {tasks.loading && <CircularProgress />}
          {tasks.data.length === 0 && !tasks.loading ? (
            <Typography variant="h5" component="h5">
              Нет задач
            </Typography>
          ) : null}
        </Box>
      )}
      {tasks.data.length > 0 && (
        <List>
          {tasks.data.map(item => (
            <ListItem key={item.id}>
              <ListItemText primary={item.content} />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  )
}

const mapStateToProps = (state: ApplicationState) => ({ tasks: state.tasks })
const mapDispatch = {
  fetchTasks
}
export default connect(mapStateToProps, mapDispatch)(Tasks)