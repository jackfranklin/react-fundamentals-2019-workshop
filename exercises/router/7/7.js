import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
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

const NotFoundPage = () => <p>404! You're on a bad route.</p>

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

        {/* TODO: can you wrap these in a Switch to make sure the 404 page shows only when no other route is active? */}
        <Route path="/posts/:id" component={PostPage} />

        <Route component={NotFoundPage} />
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
