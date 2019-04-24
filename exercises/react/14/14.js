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
  const [loginName, setLoginName] = useState('')

  const [isShowingModal, setIsShowingModal] = useState(false)

  const showModal = () => setIsShowingModal(true)

  const onLoginInputChange = event => {
    // TODO: set the state of the loginName here
  }

  const onLoginSubmit = event => {
    event.preventDefault()

    // TODO: call props.setName here, passing in the name
    // from the input field
  }

  return (
    <div className="journal-header-wrapper">
      <h1 className="journal-header">Journal App</h1>
      <h2 className="journal-subheader">Journal for {props.name}</h2>
      <button className="journal-login" onClick={showModal}>
        Login
      </button>

      {isShowingModal && (
        <div className="journal-login-modal">
          <span onClick={() => setIsShowingModal(false)}>Cancel</span>
          <form onSubmit={onLoginSubmit}>
            <p>Login to your Journal.</p>
            <input
              type="text"
              value={loginName}
              placeholder="jack"
              onChange={onLoginInputChange}
            />
            <input type="submit" value="Login" />
          </form>
        </div>
      )}
    </div>
  )
}

const JournalApp = () => {
  const [name, setName] = useState('')
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/posts').then(response => {
      setPosts(response.data)
    })
  }, [])

  return (
    <div>
      <JournalHeader name={name} setName={setName} />

      {posts ? (
        <ul>
          {posts.map(post => {
            return (
              <li key={post.id}>
                <Post post={post} />
              </li>
            )
          })}
        </ul>
      ) : (
        <Spinner />
      )}
    </div>
  )
}

ReactDOM.render(<JournalApp />, document.getElementById('react-root'))
