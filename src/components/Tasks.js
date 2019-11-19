import React from "react"

import { withProject } from "../contexts/ProjectContext"

function Tasks(props) {
  console.info("Tasks", props)
  return <div></div>
}

export default withProject(Tasks)
