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
      this.setState({ post })
    })
  }

  render() {
    return this.state.post ? (
      <div>
        <h1>{this.state.post.title}</h1>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <p>Loading!</p>
    )
  }
}

const App = () => {
  return <Post id={1} />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
