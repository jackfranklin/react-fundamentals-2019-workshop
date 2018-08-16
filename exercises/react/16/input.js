import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class UserInput extends Component {
  static propTypes = {
    onSearchInputChange: PropTypes.func.isRequired,
  }

  state = {
    userPostInput: '',
  }

  userInputChange = e => {
    this.setState({ userPostInput: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.onSearchInputChange(parseInt(this.state.userPostInput, 10))
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="search-form">
        <label>
          Please enter the ID of a post
          <input
            type="text"
            name="post-id"
            value={this.state.userPostInput}
            onChange={this.userInputChange}
          />
        </label>
        <button type="submit">Go</button>
      </form>
    )
  }
}
