import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Counter extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' })
  }

  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' })
  }

  render() {
    return (
      <div className="counter">
        <span className="count">{this.props.count}</span>
        <br />
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

const ConnectedCounter = connect(storeState => {
  return {
    count: storeState.count,
  }
})(Counter)

export default ConnectedCounter