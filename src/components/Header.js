import React, { Component } from "react"

import { Link, withRouter } from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <div>
        <h1>ToDo application</h1>
        {this.props.history.location.pathname !== "/" ? (
          <Link to="/">Вернутся к проектам</Link>
        ) : null}
      </div>
    )
  }
}

export default withRouter(Header)
