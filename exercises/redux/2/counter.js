import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Counter extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
  }

  // EXERCISE: make decrement and increment work by dispatching
  // an action to the store
  // remember: a connected component is given this.props.dispatch
  decrement = () => {
    // you need to make the reducer deal with decrement - it doesn't know
    // about it right now!
  }

  increment = () => {}

  render() {
    return (
      <div className="counter">
        <span className="count">{this.props.count}</span>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

// const ConnectedCounter = ...
// exercise: create a ConnectedCounter that connects the Counter to the store
// and provides access to the count property on the state
// and export that component instead
