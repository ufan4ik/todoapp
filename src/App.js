import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Container from './components/Container'
import MainPage from './pages/MainPage'
import ProjectPage from './pages/ProjectPage'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Container>
          <Switch>
              <Route exact path={["/","/projects"]} component={MainPage}/>
              <Route path="/project/:id" component={ProjectPage}/>
          </Switch>
        </Container>
      </div>
    )
  }
}

export default App