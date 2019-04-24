import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import fetch from 'so-fetch-js'
import Spinner from '../../spinner'

const Post = props => {
  return (
    <div>
      <a href="">{props.post.title}</a>
      <span>Posted on {props.post.date}</span>
    </div>
  )
}

const JournalHeader = props => {
  const login = () => {
    props.setName('Jack')
  }

  return (
    <div className="journal-header-wrapper">
      <h1 className="journal-header">Journal App</h1>
      <h2 className="journal-subheader">Journal for {props.name}</h2>
      <button className="journal-login" onClick={login}>
        Login
      </button>
    </div>
  )
}

const JournalApp = () => {
  const [name, setName] = useState('')
  // TODO: update this so the default state of posts is `null`
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/posts').then(response => {
      setPosts(response.data)
    })
  }, [])

  return (
    <div>
      <JournalHeader name={name} setName={setName} />

      {/* TODO: update this so we check if posts === null
and if it is, we render the <Spinner /> component (which is already imported for you) */}
      <ul>
        {posts.map(post => {
          return (
            <li key={post.id}>
              <Post post={post} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

ReactDOM.render(<JournalApp />, document.getElementById('react-root'))
