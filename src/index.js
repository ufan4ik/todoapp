import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter } from "react-router-dom"

import App from "./App"

ReactDOM.render(
  <BrowserRouter>
    <App name={"TODO list"} />
  </BrowserRouter>,
  document.getElementById("root")
)
