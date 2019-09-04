import React, { useState, useEffect, useMemo } from 'react'
import fetch from 'so-fetch-js'
import Spinner from '../../spinner'
import JournalHeader from './journal-header'
import Post from './post'
import AuthContext from './auth-context'
import usePostsLoader from './use-posts-loader.js'

const JournalApp = () => {
  const userIdForName = name => {
    return {
      alice: 1,
      bob: 2,
      charlotte: 3,
    }[name]
  }

  const [name, setName] = useState('')

  const authContextValue = useMemo(() => {
    return {
      loggedInUserName: name,
      setLoggedInUser: setName,
    }
  }, [name])

  // TODO: make this work!
  // all the code you should write is in ./use-posts-loader.js
  const posts = usePostsLoader(userIdForName(authContextValue.loggedInUserName))

  const logInAs = username => event => {
    event.preventDefault()

    setName(username)
  }

  return (
    <div>
      <AuthContext.Provider value={authContextValue}>
        <JournalHeader />
        <span className="log-in-shortcut">
          Log in as{' '}
          <a href="" onClick={logInAs('alice')}>
            Alice
          </a>
        </span>
        <span className="log-in-shortcut">
          Log in as{' '}
          <a href="" onClick={logInAs('bob')}>
            Bob
          </a>
        </span>
        <span className="log-in-shortcut">
          Log in as{' '}
          <a href="" onClick={logInAs('charlotte')}>
            Charlotte
          </a>
        </span>

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
