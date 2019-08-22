import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import fetch from 'so-fetch-js'
import Spinner from '../../spinner'
import JournalHeader from './journal-header'
import Post from './post'
import AuthContext from './auth-context'

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

  const authContextValue = {
    loggedInUserName: name,
  }

  useEffect(() => {
    const userId = userIdForName(authContextValue.loggedInUserName)

    if (!userId) return

    fetch(`http://localhost:3000/posts?userId=${userId}`).then(response => {
      setPosts(response.data)
    })
  }, [authContextValue.loggedInUserName])

  return (
    <div>
      <AuthContext.Provider value={authContextValue}>
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
      </AuthContext.Provider>
    </div>
  )
}

const Render = () => <JournalApp />
export default Render
