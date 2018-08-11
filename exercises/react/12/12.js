import '../../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'so-fetch-js'

class Post extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
  }

  state = {
    post: null,
  }

  componentDidMount() {
    const urlForPost = `https://jsonplaceholder.typicode.com/posts/${
      this.props.id
    }`

    fetch(urlForPost).then(response => {
      const post = response.data
      // TODO: put this post into the state
      console.log('I got the post!', post)
    })
  }

  render() {
    // TODO: return something other than "null" when we don't have a post
    if (!this.state.post) return null

    return (
      <div>
        <h1>{this.state.post.title}</h1>
        <p>{this.state.post.body}</p>
      </div>
    )
  }
}

const App = () => {
  return <Post id={1} />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
