import '../../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withPost from './post'
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

// TODO: create WrappedWithPost which is the higher order component
// that can be created by passing a component to the withPost function
// (you should replace the below fake implementation with the proper one)
const WrappedWithPost = () => <p> TODO: Fix me!</p>

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
        <WrappedWithPost id={this.state.searchId} />
      </div>
    )
  }
}

const App = () => {
  return <PostSearch />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
