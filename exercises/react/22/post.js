import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserActions from './user-actions'

export default class Post extends Component {
  static propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    const { id, title, body } = this.props.post

    return (
      <div className="post">
        <h3>{title}</h3>
        <p>{body}</p>
        <UserActions postId={id} />
      </div>
    )
  }
}
