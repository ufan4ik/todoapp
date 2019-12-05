import React, { useCallback } from "react"
import { connect } from "react-redux"
import { useRouter } from 'next/router'

import { fetchProjects, addProduct } from "../redux/actions/projects"

import ProjectForm from "../components/ProjectForm"

import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  withStyles
} from "@material-ui/core"
import CircularProgress from "@material-ui/core/CircularProgress"

const CardStyled = withStyles({
  root: {
    height: "100%"
  }
})(Card)

function MainPage({ fetchProjects, addProduct, projects, history }) {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()


  const onClick = useCallback(
    item => {
      router.push(
        {
          pathname: '/project/detail',
          query: { id: item.id }
        }, '/project/' + item.id
      )
    },
    [router]
  )

  return (
    <>
      <Grid container direction="row" spacing={1}>
        {projects.loading && (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        )}
        {projects.data && projects.data.map(item => (
          <Grid key={item.id} item xs={4}>
            <CardStyled onClick={() => onClick(item)}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
              </CardContent>
            </CardStyled>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            Новый проект
          </Button>
        </Grid>
      </Grid>
      <ProjectForm
        open={open}
        onClose={() => setOpen(false)}
        onProjectAdded={addProduct}
      />
    </>
  )
}

MainPage.getInitialProps = async ({ reduxStore, req, isServer }) => {
  await reduxStore.dispatch(fetchProjects())
  return { isServer }
}

export default connect(state => ({ projects: state.projects }), {
  /* fetchProjects, */
  addProduct
})(MainPage)