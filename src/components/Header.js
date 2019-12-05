import React from "react"
import { useRouter } from 'next/router'
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

const Header = () => {
  const classes = useStyles()
  const router = useRouter()

  return (
    <div className={classes.header}>
      <Typography variant="h3">ToDo application</Typography>
      {router.route !== '/' ? (
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            color="inherit"
            className={classes.link}
            onClick={() => router.push("/")}
          >
            <Icon className={classes.icon}>home</Icon>
            Главная
          </Link>
        </Breadcrumbs>
      ) : null}
    </div>
  )
}

export default Header
