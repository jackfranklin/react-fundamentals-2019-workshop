import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'
import fetch from 'so-fetch-js'

// TODO: can you make the post page request the right post based on its params?
class PostPage extends Component {
  state = {
    post: null,
  }

  fetchPost(id) {
    const urlForPost = `https://jsonplaceholder.typicode.com/posts/${id}`
    console.log('url', urlForPost)

    fetch(urlForPost).then(response => {
      const post = response.data
      this.setState({ post })
    })
  }

  componentDidMount() {}

  render() {
    return this.state.post ? (
      <h1>Post: {this.state.post.title}</h1>
    ) : (
      <p>no post yet</p>
    )
  }
}

const HelloWorld = () => {
  return (
    <div>
      <h1>My great app!</h1>
      <Route path="/posts/:id" component={PostPage} />
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <HelloWorld />
  </BrowserRouter>,
  document.getElementById('react-root')
)
