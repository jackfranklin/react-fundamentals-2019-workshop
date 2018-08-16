import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  static defaultProps = {
    start: 0,
  }

  static propTypes = {
    start: PropTypes.number,
  }

  constructor(props) {
    super(props)

    this.state = {
      count: props.start,
    }
  }

  onButtonClickIncrement() {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  onButtonClickDecrement() {
    this.setState(prevState => {
      return { count: prevState.count - 1 }
    })
  }

  render() {
    // TODO: add another button that decrements the count
    return (
      <div>
        <p>current count: {this.state.count}</p>
        <button onClick={this.onButtonClickIncrement.bind(this)}>
          Click to increment
        </button>
        <button onClick={this.onButtonClickDecrement.bind(this)}>
          Click to decrement
        </button>
      </div>
    )
  }
}

// TODO: make the counter component take a prop that configures the starting value
// so I could do <Counter start={4} /> to start the counter at 4
// remember to document it with prop types!
const App = () => {
  return <Counter start={4} />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
