import React from "react"

import { Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import Notification from './components/Notification'

import MainPage from "./pages/MainPage"
import ProjectPage from "./pages/ProjectPage"

import { Container } from "@material-ui/core"

class App extends React.Component {
  render() {
    return (
      <Container maxWidth="md">
        <Header />
        <Switch>
          <Route exact path={["/", "/projects"]} component={MainPage} />
          <Route path="/project/:id" component={ProjectPage} />
        </Switch>
        <Notification/>
      </Container>
    )
  }
}

export default App
