import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'
import fetch from 'so-fetch-js'

// TODO: can you fix the bug where we navigate from one post to another but the component doesn't fetch the new post?
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

  componentDidMount() {
    this.fetchPost(this.props.match.params.id)
  }

  render() {
    return this.state.post ? (
      <div>
        <span>viewing post:</span>
        <h1>{this.state.post.title}</h1>
      </div>
    ) : (
      <p>no post yet</p>
    )
  }
}

class Posts extends Component {
  state = { posts: [] }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5').then(
      response => {
        this.setState({ posts: response.data })
      }
    )
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map(post => {
            return (
              <li key={post.id}>
                <NavLink activeClassName="active-link" to={`/posts/${post.id}`}>
                  {post.title}
                </NavLink>
              </li>
            )
          })}
        </ul>

        <Route path="/posts/:id" component={PostPage} />
      </div>
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Posts />
  </BrowserRouter>,
  document.getElementById('react-root')
)
