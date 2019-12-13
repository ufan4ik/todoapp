import React, { useEffect, useCallback } from "react"
import { connect } from "react-redux"

import { fetchProjects, addProduct } from "../redux/actions/projects"
import { RouteComponentProps } from "react-router-dom"

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
import { IStoreState } from "../redux/reducers/index"
import { IProjectsState } from "../redux/reducers/projects"


const CardStyled = withStyles({
  root: {
    height: "100%"
  }
})(Card)

interface MainPageProps extends RouteComponentProps {
  fetchProjects: () => void
  addProduct: () => void
  projects: IProjectsState
}

const MainPage: React.FC<MainPageProps> = ({ fetchProjects, addProduct, projects, history }) => {
  const [open, setOpen] = React.useState(false)

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
    <>
      <Grid container direction="row" spacing={1}>
        {projects.loading && (
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        )}
        {projects.data.map(item => (
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

export default connect((state: IStoreState) => ({ projects: state.projects }), {
  fetchProjects,
  addProduct
})(MainPage)
