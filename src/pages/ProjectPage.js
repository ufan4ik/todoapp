import React, { Component } from "react"

import { getProject } from "../api/projects"
import Tasks from "../components/Tasks"
import { ProjectContext } from "../contexts/ProjectContext"

class ProjectPage extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    const { id } = this.props.match.params
    getProject(id).then(response => {
      this.setState({ data: response })
    })
  }

  render() {
    const { data } = this.state

    return (
      <ProjectContext.Provider value={data}>
        <div>
          {data ? (
            <div>
              <h2>Название проекта: {data.name}</h2>
            </div>
          ) : (
            <span>Загрузка...</span>
          )}
          <Tasks />
        </div>
      </ProjectContext.Provider>
    )
  }
}

export default ProjectPage
