import '../../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// TODO: add propTypes to the Count component
class Count extends Component {
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
      </div>
    )
  }
}

// TODO: make the counter component take a prop that configures the starting value
// so I could do <Counter start={4} /> to start the counter at 4
// remember to document it with prop types!
const App = () => {
  return <Counter />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
