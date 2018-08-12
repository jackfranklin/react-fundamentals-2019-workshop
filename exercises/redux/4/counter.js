import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { increment } from './actions'
import { connect } from 'react-redux'

class Counter extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
  }

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
  return {
    count: storeState.count,
  }
})(Counter)

export default ConnectedCounter
