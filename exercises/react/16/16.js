import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from './post'
import UserInput from './input'

class PostSearch extends Component {
  state = {
    searchId: 1,
  }

  onSubmit = id => {
    this.setState({ searchId: id })
  }

  // TODO: the exercises you're looking for are in the UserInput component :)

  render() {
    return (
      <div>
        <UserInput onSearchInputChange={this.onSubmit} />
        <Post id={this.state.searchId} />
      </div>
    )
  }
}

const App = () => {
  return <PostSearch />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
