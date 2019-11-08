import React from "react"

import { Link } from "react-router-dom"

import { getProjects } from "../api/projects"

class MainPage extends React.Component {
  state = {
    projects: [],
    loading: false,
    error: null
  }

  componentDidMount = () => {
    this.setState({ loading: true })
    getProjects()
      .then(response => {
        this.setState({ loading: false, projects: response })
      })
      .catch(e => {
        this.setState({ loading: false, error: e.message })
      })
  }

  render() {
    return this.state.loading ? (
      <div>Загрузка...</div>
    ) : (
      <ul>
        {this.state.projects.map(item => (
          <li key={item.id}>
            <Link to={`/project/${item.id}`}>
              <h2>{item.name}</h2>
            </Link>
            <span>Комментарии: {item.comment_count}</span>
          </li>
        ))}
      </ul>
    )
  }
}

export default MainPage
