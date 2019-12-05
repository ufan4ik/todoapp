import React, { useEffect, useCallback } from "react"
import Router from 'next/router'
import { connect } from "react-redux"

import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import CircularProgress from "@material-ui/core/CircularProgress"
import { Grid, Typography, Box } from "@material-ui/core"

import { fetchProjects } from "../redux/actions/projects"
import { getProjects } from "../api/projects"
import Tasks from "../components/Tasks"

function ProjectPage({ projectId, projects }) {

  const onClick = useCallback(
    item => {
      Router.push(
        {
          pathname: '/project/detail',
          query: { id: item.id }
        }, '/project/' + item.id
      )
    },
    []
  )

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Tabs orientation="vertical" variant="scrollable" value={projectId}>
          {projects.data && projects.data.map(item => (
            <Tab
              key={item.id}
              value={item.id}
              label={item.name}
              onClick={() => onClick(item)}
            />
          ))}
        </Tabs>
        {projects.loading && <CircularProgress />}
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

ProjectPage.getInitialProps = async ({ reduxStore, query, isServer }) => {
  await reduxStore.dispatch(fetchProjects())
  return { projectId: query.id }
}

export default connect(state => ({ projects: state.projects }), {
})(ProjectPage)

