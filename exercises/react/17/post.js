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
    const { post } = this.state
    return React.Children.map(this.props.children, child => {
      // TODO: update this function to return the child, but cloned and given the `post` prop
      return child
    })
  }
}
