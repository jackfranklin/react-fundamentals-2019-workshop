import React, { useState, useEffect, useMemo } from 'react'
import fetch from 'so-fetch-js'
import Spinner from '../../spinner'
import JournalHeader from './journal-header'
import Post from './post'
import AuthContext from './auth-context'
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

  const [name, setName] = useState('')

  const [publishedOnly, setPublishedOnly] = useState(false)

  const authContextValue = useMemo(() => {
    return {
      loggedInUserName: name,
      setLoggedInUser: setName,
    }
  }, [name])

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

        {authContextValue.loggedInUserName && (
          <span className="toggle-wrapper">
            {/* TODO: turn the Toggle component into a controlled component so it has no state of its own*/}
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
      </AuthContext.Provider>
    </div>
  )
}

const Render = () => <JournalApp />
export default Render
