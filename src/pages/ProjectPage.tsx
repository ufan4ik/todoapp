import React, { useEffect, useCallback } from "react"

import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Grid, Typography, Box } from "@material-ui/core"

import { IProject } from "../api/projects"
import Tasks from "../components/Tasks"

import { RouteComponentProps } from "react-router-dom"
import { ApplicationState } from '../redux/reducers'
import { fetchProjects } from "../redux/actions/projects"
import { connect } from "react-redux"


interface StateProps {
  projects: {
    loading: boolean
    data: IProject[]
  }
}
interface DispatchProps {
  fetchProjects: () => void
}

type ProjectPageProps = StateProps & DispatchProps & RouteComponentProps<{ id: string }>

const ProjectPage: React.FC<ProjectPageProps> = ({ projects, fetchProjects, match, history }) => {

  const { id: projectId } = match.params

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  const onClick = useCallback(
    item => {
      history.push(`/project/${item.id}`)
    },
    [history]
  )

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        {projects.loading && <CircularProgress />}
        <Tabs orientation="vertical" variant="scrollable" value={projectId}>
          {projects.data.map(item => (
            <Tab
              key={item.id}
              value={item.id}
              label={item.name}
              onClick={() => onClick(item)}
            />
          ))}
        </Tabs>
      </Grid>
      <Grid item xs={8}>
        <Box mb={2}>
          <Typography variant="h5" component="h2">
            Задачи
          </Typography>
        </Box>
        <Tasks projectId={projectId} />
      </Grid>
    </Grid>
  )
}


const mapStateToProps = (state: ApplicationState) => ({ projects: state.projects })

const mapDispatch = {
  fetchProjects
}

export default connect(mapStateToProps, mapDispatch)(ProjectPage)
