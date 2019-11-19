import React from "react"

export const ProjectContext = React.createContext()

export const withProject = Comp => {
  return props => (
    <ProjectContext.Consumer>
      {value => <Comp project={value} />}
    </ProjectContext.Consumer>
  )
}
