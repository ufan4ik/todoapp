import React, { useEffect, useCallback } from "react"

import { getProjects } from "../api/projects"

function MainPage(props) {
  const [projects, setProjects] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  useEffect(() => {
    setLoading(true)
    getProjects()
      .then(response => {
        setProjects(response)
        setLoading(false)
      })
      .catch(e => {
        setError(e.message)
        setLoading(false)
      })
  }, [])

  const onClick = useCallback(
    item => {
      props.history.push(`/project/${item.id}`)
    },
    [props.history]
  )

  return (
    <>
      {loading ? (
        <div>Загрузка...</div>
      ) : error ? (
        <div>Ошибка запроса: {error}</div>
      ) : (
        <ul>
          {projects.map(item => (
            <li key={item.id}>
              <button onClick={() => onClick(item)}>
                <h2>{item.name}</h2>
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default MainPage
