import ReactDOM from 'react-dom'
import React, { useState, useEffect, useMemo } from 'react'
import Spinner from '../../spinner'
import JournalHeader from './journal-header'
import Post from './post'
import { AuthProvider, useAuth } from './use-auth'
import usePostsLoader from './use-posts-loader.js'
import Toggle from './toggle'

const JournalApp = () => {
  const userIdForName = name => {
    return {
      alice: 1,
      bob: 2,
      charlotte: 3,
    }[name]
  }

  const { loggedInUserName, setLoggedInUserName } = useAuth()

  const [publishedOnly, setPublishedOnly] = useState(false)

  const posts = usePostsLoader(userIdForName(loggedInUserName))

  const logInAs = username => event => {
    event.preventDefault()

    setLoggedInUserName(username)
  }

  /* just here for demonstration, so we're logged in from the get go!
   */
  useEffect(() => {
    setLoggedInUserName('charlotte')
  }, [])

  return (
    <div className="journal-app">
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

      {loggedInUserName && (
        <span className="toggle-wrapper">
          Only published posts? <Toggle onToggleChange={setPublishedOnly} />
        </span>
      )}

      {posts ? (
        <ul>
          {posts
            .filter(p => {
              return publishedOnly ? p.published : true
            })
            .map(post => {
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

ReactDOM.render(
  <AuthProvider>
    <JournalApp />
  </AuthProvider>,
  document.getElementById('react-root')
)
