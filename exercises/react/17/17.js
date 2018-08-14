

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from './post'
import UserInput from './input'

const PostOutput = props =>
  props.post ? (
    <div>
      <span>Loaded post ID: {props.post.id}</span>
      <h1>{props.post.title}</h1>
      <p>{props.post.body}</p>
    </div>
  ) : (
    <p>Loading</p>
  )

PostOutput.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
}

class PostSearch extends Component {
  state = {
    searchId: 1,
  }

  onSubmit = id => {
    this.setState({ searchId: id })
  }

  render() {
    return (
      <div>
        <UserInput onSearchInputChange={this.onSubmit} />
        <Post id={this.state.searchId}>
          <PostOutput />
        </Post>
      </div>
    )
  }
}

const App = () => {
  return <PostSearch />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
