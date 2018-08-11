import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'so-fetch-js'

export default class Post extends Component {
  static propTypes = {
    id: PropTypes.number,
  }

  state = {
    post: null,
  }

  componentDidMount() {
    this.fetchPost()
  }

  componentDidUpdate(prevProps, prevState) {
    // TODO: can you make this.fetchPost run when the component is updated?
    // remember to check if the ID prop has changed, so we don't
    // make network calls that are pointless
    if (prevProps.id !== this.props.id) {
    }
  }

  fetchPost() {
    const urlForPost = `https://jsonplaceholder.typicode.com/posts/${
      this.props.id
    }`

    fetch(urlForPost).then(response => {
      this.setState({ post: response.data })
    })
  }

  render() {
    const { post } = this.state
    return (
      <div>
        {post ? (
          <div>
            <span>Loaded post ID: {post.id}</span>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
  }
}
