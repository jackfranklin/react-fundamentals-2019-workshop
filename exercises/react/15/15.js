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
    setLoginName(event.target.value)
  }

  const onLoginSubmit = event => {
    event.preventDefault()
    props.setName(loginName)
    setIsShowingModal(false)
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
  const userIdForName = name => {
    return {
      alice: 1,
      bob: 2,
      charlotte: 3,
    }[name]
  }

  const [name, setName] = useState('')
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    // TODO: update this useEffect call so it makes a request to fetch posts for a given user Id
    // which you can do with: /posts?userId=1
    fetch(`http://localhost:3000/posts`).then(response => {
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
