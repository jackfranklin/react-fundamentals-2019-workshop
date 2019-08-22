import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import fetch from 'so-fetch-js'

const Post = props => {
  return (
    <div className="post">
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
  const [posts, setPosts] = useState([])

  useEffect(() => {
    console.log('I get run on every render')

    // let this code run to see the infinite looping happen
    // warning: this might crash your browser!
    // setPosts([])

    // TODO: run this code to fetch the posts ensuring that you add the empty
    // dependencies array to the useEffect call so it doesn't cause an infinite
    // loop!

    // fetch('http://localhost:3000/posts').then(response => {
    // })
  })

  return (
    <div className="journal-app">
      <JournalHeader name={name} setName={setName} />

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

const Render = () => <JournalApp />
export default Render
