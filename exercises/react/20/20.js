import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from './post'
import UserInput from './input'

const PostOutput = ({ post }) =>
  post ? (
    <div>
      <span>Loaded post ID: {post.id}</span>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  ) : (
    <p>Loading</p>
  )

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
          {post => <PostOutput post={post} />}
        </Post>

        {/* TODO: can you make it so we can use <Post /> by passing
          * either a `render` prop or a `children` prop?
          * so that the below component outputs the same output as the above component?
          * you'll have to edit the code in post.js :)
          */}
        <Post
          id={this.state.searchId}
          render={post => <PostOutput post={post} />}
        />
      </div>
    )
  }
}

const App = () => {
  return <PostSearch />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
