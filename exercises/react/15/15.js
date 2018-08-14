import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from './post'

class PostSearch extends Component {
  state = {
    userPostInput: '',
    searchId: 1,
  }

  userInputChange = e => {
    this.setState({ userPostInput: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    // TODO: when the user updates the form and hits submit,
    // the new post is not loaded correctly
    // can you fix the bug?
    // HINT: the problem is in post.js, not here!
    this.setState({ searchId: Number(this.state.userPostInput) })
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
        </form>
        <Post id={this.state.searchId} />
      </div>
    )
  }
}

const App = () => {
  return <PostSearch />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
