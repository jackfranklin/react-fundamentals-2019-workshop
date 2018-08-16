import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// TODO: add propTypes to the Count component
class Count extends Component {
  static propTypes = {
    onIncrement: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
  }

  onButtonClick() {
    this.props.onIncrement()
  }

  render() {
    return (
      <div>
        <p>Count: {this.props.count}</p>
        <button onClick={this.onButtonClick.bind(this)}>Increment</button>
      </div>
    )
  }
}

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count1: 0,
      count2: 0,
    }
  }

  incrementCount1() {
    this.setState(prevState => {
      return { count1: prevState.count1 + 1 }
    })
  }

  incrementCount2() {
    this.setState(prevState => {
      return { count2: prevState.count2 + 1 }
    })
  }

  render() {
    // TODO: create another <Count /> component
    // that deals with this.state.count2
    // and lets it be incremented
    return (
      <div>
        <Count
          count={this.state.count1}
          onIncrement={this.incrementCount1.bind(this)}
        />
        <Count
          count={this.state.count2}
          onIncrement={this.incrementCount2.bind(this)}
        />
      </div>
    )
  }
}

const App = () => {
  return <Counter />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
