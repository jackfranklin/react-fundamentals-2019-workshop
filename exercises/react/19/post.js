import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'so-fetch-js'

export default class Post extends Component {
  static propTypes = {
    id: PropTypes.number,
    render: PropTypes.func.isRequired,
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
    return this.props.render(this.state.post)
  }
}
