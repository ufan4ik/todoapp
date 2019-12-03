import React from "react"

import { withRouter } from "react-router-dom"

import { Typography, Breadcrumbs, Link, Icon } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: theme.spacing(2),
  },
  link: {
    marginTop: theme.spacing(2),
    display: "flex"
  },
  icon: {
    marginRight: theme.spacing(1),
    width: 20,
    height: 20
  }
}))

const Header = ({ history }) => {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <Typography variant="h3">ToDo application</Typography>
      {history.location.pathname !== "/" ? (
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            color="inherit"
            className={classes.link}
            onClick={() => history.push("/")}
          >
            <Icon className={classes.icon}>home</Icon>
            Главная
          </Link>
        </Breadcrumbs>
      ) : null}
    </div>
  )
}

export default withRouter(Header)
