import '../../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'so-fetch-js'

class Post extends Component {
  state = {
    post: null,
    userPostInput: '',
  }

  userInputChange = e => {
    console.log('got user input value', e.target.value)
    // TODO: update the userPostInput state with the new value when the user types
  }

  onSubmit = e => {
    e.preventDefault()
    console.log('got form submit!')
    // TODO: call this.fetchPost(), passing in the right ID
  }

  fetchPost(id) {
    // TODO: make the urlForPost take into account the ID variable
    const urlForPost = `https://jsonplaceholder.typicode.com/posts/1`

    fetch(urlForPost).then(response => {
      this.setState({ post: response.data })
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
          {/* TODO: add another button that clears out the user input value, and clears this.state.post */}
        </form>
        <div>
          {this.state.post ? (
            <div>
              <h1>{this.state.post.title}</h1>
              <p>{this.state.post.body}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    )
  }
}

const App = () => {
  return <Post />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
