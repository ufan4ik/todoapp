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

import { fetchTasks } from "../redux/actions/tasks"

function Tasks({ projectId, fetchTasks, tasks }) {
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

export default connect(state => ({ tasks: state.tasks }), {
  fetchTasks
})(Tasks)
