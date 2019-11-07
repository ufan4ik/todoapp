import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Page from './components/Page'
import MainPage from './pages/MainPage'
import ProjectPage from './pages/ProjectPage'

class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Page>
          <Switch>
              <Route exact path="/" component={MainPage}/>
              <Route exact path="/project/:id" component={ProjectPage}/>
          </Switch>
        </Page>
      </div>
    )
  }
}

export default App