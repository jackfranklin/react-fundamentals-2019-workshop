import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'so-fetch-js'

export default class Post extends Component {
  static propTypes = {
    id: PropTypes.number,
    // TODO: update the prop types so we take children or render
    // (you can't declare this explicitly, but you can declare two props that
    // are both not required)
    children: PropTypes.func.isRequired,
  }

  state = {
    post: null,
  }

  componentDidMount() {
    this.fetchPost()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      this.setState({ post: null })
      this.fetchPost()
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
    // TODO: don't assume this.props.children here
    // and also see if we have this.props.render
    return this.props.children(this.state.post)
  }
}
