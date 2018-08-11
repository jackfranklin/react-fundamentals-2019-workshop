import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'so-fetch-js'
import Post from './post'

export default class Posts extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=5'

    fetch(url).then(response => {
      this.setState({ posts: response.data })
    })
  }

  render() {
    return (
      <ul>
        {this.state.posts.map(post => <Post post={post} key={post.id} />)}
      </ul>
    )
  }
}
