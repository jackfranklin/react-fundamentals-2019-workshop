import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { increment } from './actions'
import { connect } from 'react-redux'

class Counter extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
  }

  // EXERCISE: take this state and move it into the Redux store you'll need to
  // create actions for it (SET_INCREMENT_BY might be a good name)

  state = {
    inputCount: 0,
  }

  onInputCountChange = e => {
    this.setState({ inputCount: Number(e.target.value) })
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' })
  }

  increment = () => {
    this.props.dispatch(increment())
  }

  render() {
    return (
      <div className="counter">
        <span className="count">{this.props.count}</span>
        <br />
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
        <br />
        {/* EXERCISE: This input will read the increment by count from this.props as it will be supplied by the Redux store */}
        <input
          type="number"
          value={this.state.inputCount}
          onChange={this.onInputCountChange}
        />
      </div>
    )
  }
}

const ConnectedCounter = connect(storeState => {
  // EXERCISE: give the counter access to the increment by value that we're now putting into the store
  return {
    count: storeState.count,
  }
})(Counter)

export default ConnectedCounter
