import apiPort from '../../api-port'
import ReactDOM from 'react-dom'
import React, { useState, useEffect, useMemo } from 'react'
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

  // TODO: wrap this in a useMemo call
  console.log('Updating the context')
  const authContextValue = {
    loggedInUserName: name,
    setLoggedInUser: setName,
  }

  useEffect(() => {
    const userId = userIdForName(authContextValue.loggedInUserName)

    if (!userId) return

    fetch(`http://localhost:${apiPort}/posts?userId=${userId}`).then(
      response => {
        setPosts(response.data)
      }
    )
  }, [authContextValue.loggedInUserName])

  return (
    <div>
      <AuthContext.Provider value={authContextValue}>
        <JournalHeader />

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
