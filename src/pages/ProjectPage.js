import React, { useEffect, useCallback } from "react"

import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Grid, Typography, Box } from "@material-ui/core"

import { getProjects } from "../api/projects"
import Tasks from "../components/Tasks"

function ProjectPage(props) {
  const [projects, setProjects] = React.useState([])
  const [loadingProjects, setLoadingProjects] = React.useState(false)

  const { id: projectId } = props.match.params

  useEffect(() => {
    setLoadingProjects(true)
    getProjects()
      .then(response => {
        setProjects(response)
        setLoadingProjects(false)
      })
      .catch(e => {
        setLoadingProjects(false)
      })
  }, [])

  const onClick = useCallback(
    item => {
      props.history.push(`/project/${item.id}`)
    },
    [props.history]
  )

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        {loadingProjects && <CircularProgress />}
        <Tabs orientation="vertical" variant="scrollable" value={projectId}>
          {projects.map(item => (
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

export default ProjectPage
