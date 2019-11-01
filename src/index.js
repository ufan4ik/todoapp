import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [{ name: "Item1" }, { name: "Item2" }, { name: "Item3" }],
    }
  }

  componentDidMount = () => {
    console.log("Я смонтировался")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Я обновился",prevState.items,this.state.items)
  }

  handleClick = () => {
    this.setState({items: [ ...this.state.items, { name: `Item${this.state.items.length + 1}`} ]})
  }


  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          {this.state.items.map(({ name }, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
        <button onClick={this.handleClick}>Добавить</button>
      </div>
    )
  }
}

ReactDOM.render(<App name={"TODO list"} />, document.getElementById("root"))
