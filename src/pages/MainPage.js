import React from "react"

import {Link} from 'react-router-dom'

import { getProjects } from '../api/projects'

class MainPage extends React.Component {

  state = {
    projects: []
  }

  componentDidMount = () => {
    
    getProjects().then(response => {
        this.setState({ projects: response})
    })

  }

  render() {
    return (
      <ul>
        {this.state.projects.map(item => (
          <li key={item.id}>
              <Link to={`/project/${item.id}`}><h2>{item.name}</h2></Link>
              <span>Комментарии: {item.comment_count}</span>
          </li>
        ))}
      </ul>
    )
  }
}

export default MainPage
