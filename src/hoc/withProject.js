import React from "react"

import { getProject } from "../api/projects"

export default function withProject(InputComponent) {
  return props => {
    const { id } = props.match.params

    const [project, setProject] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
      setLoading(true)
      getProject(id)
        .then(response => {
          setProject(response)
          setLoading(false)
        })
        .catch(e => {
          setLoading(false)
        })
    }, [id])

    return <InputComponent project={project} loading={loading} {...props} />
  }
}
