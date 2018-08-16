import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'so-fetch-js'

class Post extends Component {
  state = {
    userPostInput: '',
    searchId: null,
  }

  userInputChange = e => {
    this.setState({
      userPostInput: e.target.value,
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.setState(prevState => {
      return { searchId: prevState.userPostInput }
    })
  }

  render() {
    return (
      <div>
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
          {/* TODO: add another button that clears out the user input value */}
        </form>

        {this.state.searchId && (
          <p>The ID you searched for is: {this.state.searchId}</p>
        )}
      </div>
    )
  }
}

const App = () => {
  return <Post />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
